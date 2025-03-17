import mongoose from 'mongoose'

const { Schema, Types } = mongoose
const { ObjectId } = Types

const LocationSchema = new Schema({
    name: {
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
    timeLastUpdated: {
        type: Date,
        required: true
    },
    current: {
        type: Object
    },
    current_units: {
        type: Object
    },
    dailyForecast: {
        type: Object
    },
    dailyForecast_units: {
        type: Object
    }
})

const Location = mongoose.model('Location', LocationSchema)

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    currentLocation: {
        type: ObjectId,  
        ref: 'Location'
    },
    favLocations: [{
        type: ObjectId,  
        ref: 'Location'
    }]
})

const User = mongoose.model('User', UserSchema)

export default {
    Location,
    User
}
