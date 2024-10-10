"use server";
import { MongoClient } from 'mongodb';
const dotenv = require('dotenv');
dotenv.config();

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
    // Parse the incoming request body
    const body = await req.json();
    
    // Ensure both environment variables are defined
    if (!process.env.DB_USER || !process.env.DB_PASSWORD) {
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check if the provided name and password match the stored credentials
    if (body.name === process.env.DB_USER && body.password === process.env.DB_PASSWORD) {
      const db = await connectToDB();

      // Fetch all messages from the 'messages' collection
      const messages = await db.collection('messages').find({}).toArray();

      // Return the messages as a JSON response
      return new Response(JSON.stringify(messages), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Unauthorized access due to incorrect credentials
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error fetching messages:', error);  // Log for better debugging
    return new Response(JSON.stringify({ error: 'Error fetching messages' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
