"use server";
import { MongoClient } from 'mongodb';
const dotenv = require('dotenv');
dotenv.config();

export async function POST(req) {
  try {
    // Parse the incoming request body
    const body = await req.json();

    // Check if the name and password match
    if (body.name === process.env.NEXT_PUBLIC_DB_USER && body.password === process.env.NEXT_PUBLIC_DB_PASSWORD) {
      // Connect to MongoDB
      const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
      const db = client.db('my_portfolio'); // Replace with your database name

      // Fetch all messages from the 'messages' collection
      const messages = await db.collection('messages').find({}).toArray();

      // Close the MongoDB connection
      await client.close();

      // Return the messages as a JSON response
      return new Response(JSON.stringify(messages), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Unauthorized access (wrong credentials)
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    // Handle any errors
    return new Response(JSON.stringify({ error: 'Error fetching messages' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
