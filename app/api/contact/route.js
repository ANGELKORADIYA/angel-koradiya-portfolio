"use server";
import { MongoClient } from 'mongodb';
const dotenv = require('dotenv');
dotenv.config();

export async function POST(req) {
  try {
    // Parsing the request body
    const body = await req.json();
    const { name, email, message } = body;

    // Connecting to MongoDB
    const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
    const db = client.db('my_portfolio'); // Replace with your actual database name
    const today = new Date().toISOString().slice(0, 10);
    const time = new Date().toLocaleTimeString();
    // Inserting the message into the 'messages' collection
    await db.collection('messages').insertOne({ name, email, message , date: today , time });

    // Closing the database connection
    await client.close();

    // Returning a success response
    return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Handling any errors
    return new Response(JSON.stringify({ error: 'Error sending message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
