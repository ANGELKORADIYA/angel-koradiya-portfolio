import { MongoClient } from 'mongodb';

let client;

async function connectToDB() {
  if (!client) {
    client = new MongoClient(process.env.DB_MONGODB_URI);
    await client.connect();
  }
  return client.db('my_portfolio');
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    const db = await connectToDB();
    const today = new Date().toISOString().slice(0, 10);
    const time = new Date().toLocaleTimeString();

    await db.collection('messages').insertOne({ name, email, message, date: today, time });

    return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error); // Log for better debugging
    return new Response(JSON.stringify({ error: 'Error sending message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
