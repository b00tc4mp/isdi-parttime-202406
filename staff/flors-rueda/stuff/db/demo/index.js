import { MongoClient } from 'mongodb'

const mongo = new MongoClient('mongodb://127.0.0.1:27017')

/*MONGO CRUD*/

//https://www.mongodb.com/docs/php-library/current/reference/method/MongoDBCollection-insertOne/
const create = (collection) => {
    collection.insertOne({ username: 'Hirito', email: 'hiro@gatito.com', password: 'H1r1t0!' })
        .then(() => {
            collection.find({}).toArray()
                .then(users => console.log(users))
                .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
}

//https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/#mongodb-method-db.collection.findOne
const retrieve = (collection) => {
    collection.findOne({ username: 'Hirito' })
        .then((user) => console.log(user))
        .catch(error => console.log(error))
}

//https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/
const update = (collection) => {
    collection.updateOne({ username: 'Hirito' }, { $set: { password: '12345' } })
        .then(() => {
            collection.find({}).toArray()
                .then(users => console.log(users))
                .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
}

//https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/
const delet = (collection) => {
    collection.deleteOne({ username: 'Hirito' })
        .then(() => {
            collection.find({}).toArray()
                .then(users => console.log(users))
                .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
}

const deleteAll = (collection) => {
    collection.deleteMany({ username: 'Hirito' })
        .then(() => {
            collection.find({}).toArray()
                .then(users => console.log(users))
                .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
}

try {
    mongo.connect()
        .then(() => {
            console.log('connected');

            const db = mongo.db('social');

            const users = db.collection('users');


            //create(users);

            //retrieve(users);

            //update(users);

            //delet(users);

            deleteAll(users);

        })
        .catch(error => console.log(error))

} catch (error) {
    console.log(error)
}

