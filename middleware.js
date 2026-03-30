import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;
  const { pathname } = url;

  // Main portfolio routes that should NEVER be proxied
  const mainAppRoutes = [
    '/', 
    '/learning', 
    '/projects', 
    '/showmessage', 
    '/api/contact', 
    '/api/messages',
    '/sitemap.xml',
    '/robots.txt'
  ];
  
  const isMainRoute = mainAppRoutes.includes(pathname);
  
  // Whitelist of projects and their target domains
  const projectWhitelist = {
    'wanderlogue': 'wanderlogues.vercel.app',
    'wanderlogues': 'wanderlogues.vercel.app',
    'blackwater': 'black-waters.vercel.app',
    'blackwaters': 'black-waters.vercel.app',
    'quiz': 'quiz-minimal.vercel.app',
    'quizmaster': 'quiz-minimal.vercel.app',
    'quizminimal': 'quiz-minimal.vercel.app',
    'forgeoagent': 'forgeoagent.vercel.app',
    'bitstash': 'bit-stash.vercel.app',
    'polylex': 'polylex.vercel.app',
    'regexstudio': 'regex-studio.vercel.app',
    'astroid-game': 'astroid-game.vercel.app',
  };

  // Identify active session project from headers/cookies
  let sessionProject = request.cookies.get('active-proxy-project')?.value;
  const referer = request.headers.get('referer');
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      if (refererUrl.pathname.startsWith('/proxy/')) {
        const refererParts = refererUrl.pathname.split('/');
        if (refererParts[2]) {
          sessionProject = refererParts[2];
        }
      }
    } catch (e) {}
  }

  // 1. Explicit Proxy Request
  if (pathname.startsWith('/proxy/')) {
    const parts = pathname.split('/');
    let targetKey = parts[2]; // e.g., 'forgeoagent'
    let targetPath = parts.slice(3).join('/');

    const reservedWords = ['static', '_next', 'api', 'assets', 'favicon.ico', 'public'];
    
    // If the path is something like /proxy/static/... it likely belongs to the current session
    if (sessionProject && (reservedWords.includes(targetKey) || (referer && targetKey !== sessionProject))) {
      targetKey = sessionProject;
      targetPath = pathname.substring(7); // Remove '/proxy/'
    }

    const targetDomain = projectWhitelist[targetKey?.toLowerCase()];

    // If no project name or it's not in the whitelist, let Next.js handle it
    if (!targetDomain) {
      return NextResponse.next();
    }

    // Construct target URL for the proxy
    const searchParams = url.search ? url.search : '';
    const targetUrl = new URL(`/${targetPath}${searchParams}`, `https://${targetDomain}`);
    
    const response = NextResponse.rewrite(targetUrl);
    
    // Update cookie to remember the active proxy session
    if (!reservedWords.includes(parts[2])) {
      response.cookies.set('active-proxy-project', targetKey, { path: '/', httpOnly: true, maxAge: 60 * 60 });
    }
    
    return response;
  }

  // 2. Clear cookie if explicitly visiting a main app route
  if (isMainRoute) {
    const response = NextResponse.next();
    if (request.cookies.has('active-proxy-project')) {
      response.cookies.delete('active-proxy-project');
    }
    return response;
  }

  // 3. Handle implicit proxy requests
  let proxyProject = null;

  if (referer) {
    try {
      const refererUrl = new URL(referer);
      if (refererUrl.pathname.startsWith('/proxy/')) {
        proxyProject = refererUrl.pathname.split('/')[2];
      } else if (mainAppRoutes.includes(refererUrl.pathname)) {
        return NextResponse.next();
      }
    } catch (e) {}
  }

  if (!proxyProject) {
    proxyProject = request.cookies.get('active-proxy-project')?.value;
  }

  const proxyDomain = projectWhitelist[proxyProject?.toLowerCase()];

  // If we've identified this request belongs to a whitelisted proxy session
  if (proxyDomain) {
    if (pathname.startsWith('/api/contact') || pathname.startsWith('/api/messages')) {
      return NextResponse.next();
    }
    
    const targetUrl = new URL(pathname + url.search, `https://${proxyDomain}`);
    return NextResponse.rewrite(targetUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // We intentionally DO NOT exclude `_next/static` here because we need to proxy 
    // static assets for the proxied Next.js applications as well.
    // We only exclude image optimization and favicon to save processing.
    '/((?!_next/image|favicon.ico).*)',
  ],
};
