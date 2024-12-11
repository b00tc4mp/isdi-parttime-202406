import mongoose from 'mongoose'

const { Schema, Types } = mongoose

const { ObjectId } = Types

const LocationSchema = new Schema({
    locationName: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    }, 
    longitude: {
        type: Number,
        required: true
    }, 
    altitude: {
        type: Number,
        required: true
    }, 
    timeLastUpdated: {
        type: Date,
        required: true
    },
    variables: [{
        precipitation: [Number],
        temperature: [Number]
    }]
})

const Location = mongoose.model('Location', LocationSchema)

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    favLocations: [{
        type: ObjectId,
        ref: 'Location'
    }]
})

const User = mongoose.model('User', UserSchema)

