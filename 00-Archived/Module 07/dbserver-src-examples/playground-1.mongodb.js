
// Display the list of available databases.
show dbs

// Switch to a specific database or create a new one.
use CS628Practice

// Show the current database.
db

// Create a new collection named "users".
db.createCollection('users')


// Insert user profiles into the "users" collection.
db.users.insertMany([
  { name: 'user1', age: 30, email: 'user1@example.com' },
  { name: 'user2', age: 25, email: 'user2@example.com' },
  { name: 'user3', age: 28, email: 'user3@example.com' }
])

// Find all user profiles in the "users" collection.
db.users.find()

// Find user profiles with a specific condition (age less than 30).
db.users.find({ age: { $lt: 30 } })

// Update a user profile in the "users" collection.
db.users.updateOne({ name: 'user1' }, { $set: { age: 31 } })

// Delete a user profile from the "users" collection.
db.users.deleteOne({ name: 'user2' })

// Calculate the average age of users.
db.users.aggregate([
  { $group: { _id: null, avgAge: { $avg: '$age' } } }
])

// Create an index on the "email" field for faster searches.
db.users.createIndex({ email: 1 })

// Create a text index for efficient text searches.
db.users.createIndex({ name: 'text', email: 'text' })
db.users.find({ $text: { $search: 'user1' } })

// Retrieve users sorted by age in descending order.
db.users.find().sort({ age: -1 })

//Retrieve a limited number of users with pagination.
db.users.find().limit(2).skip(1)

// Group and count users by age.
db.users.aggregate([
  { $group: { _id: '$age', count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
])

// Find the oldest and youngest users.
db.users.aggregate([
  { $group: { _id: null, maxAge: { $max: '$age' }, minAge: { $min: '$age' } } }
])

// Geospatial Queries: Find places within a certain radius.
db.places.insertMany([
  { name: 'Park A', location: { type: 'Point', coordinates: [0, 0] } },
  { name: 'Park B', location: { type: 'Point', coordinates: [1, 1] } },
  { name: 'Cafe C', location: { type: 'Point', coordinates: [2, 2] } }
])
db.places.createIndex({ location: '2dsphere' })
db.places.find({
  location: {
    $nearSphere: {
      $geometry: {
        type: 'Point',
        coordinates: [0, 0]
      },
      $maxDistance: 2000 // meters
    }
  }
})


// Find users with names starting with 'u' or 'C'.
db.users.find({
  $or: [
    { name: { $regex: '^u', $options: 'i' } },
    { name: { $regex: '^C', $options: 'i' } }
  ]
})

// Calculate total age by grouping documents by null.
db.users.aggregate([
  { $group: { _id: null, totalAge: { $sum: '$age' } } }
])

//Drop the "users" collection.
db.users.drop()

// Show collections in the current database.
show collections

