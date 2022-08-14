import { MongoClient } from "mongodb"
//import mongoDbConnectionString from '../../../components/variables'

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end() //Method Not Allowed
    return
  }

  const user_session_token = req.cookies.nextbnb_session
  if (!user_session_token) {
    res.status(401).end()
    return
  }

  const client = await MongoClient.connect(process.env.mongoDbConnectionString);
  const db = client.db();
  const usersCollection = db.collection("users");
  const user = await usersCollection.findOne({ email: email });
  
  if (user) {
    // placeholder to create a new or modify an existing property
    /* const reservation = {
      houseId: req.body.houseId,
      userId: user.id,
      startDate: req.body.startDate,
      endDate: req.body.endDate
    } 
    const bookingCollection = db.collection("bookings");
    const result = await bookingsCollection.insertOne(reservation);*/

    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify({ status: 'success', message: 'ok' }))
  }
}