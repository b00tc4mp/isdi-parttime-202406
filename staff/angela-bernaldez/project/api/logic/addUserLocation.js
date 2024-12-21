import models from '../data/models.js'

const { User, Location } = models

const generateLocationId = async (location, locationData) => {
    if (location) return location

    // si la localizacion no existia antes, timeLastUpdated es la fecha de ahora mismo
    // variables añadir las variables que tenga elegidas por defecto

    const newLocation = await Location.create({
        name: locationData.name,
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        altitude: locationData.altitude,
        timeLastUpdated: new Date(),
        // variables: call logic to add variables info
    })
    
    return newLocation
} 

export default (id, locationData) => {
    // add validators

    const { name, latitude, longitude, altitude } = locationData

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            return Location.findOne({name: name, latitude: latitude, longitude: longitude})
                .then((location) => {
                    return generateLocationId(location, locationData)
                    .then((newLocation) => {
                        const foundLocation = user.favLocations.find((location) => location._id === newLocation._id)

                        if (!foundLocation) {
                            user.favLocations.push(newLocation._id)
                            return user.save()
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                })
        })
}