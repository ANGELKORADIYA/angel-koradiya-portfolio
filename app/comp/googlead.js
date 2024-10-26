// components/GoogleAd.js
import { useEffect } from 'react';
import Script from 'next/script';

const GoogleAd = () => {
  useEffect(() => {
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8903937759165446"
        data-ad-slot="8301257965"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script
        id="google-ads"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        strategy="afterInteractive" // Ensures the script runs after the component is mounted
      />
    </>
  );
};

export default GoogleAd;
