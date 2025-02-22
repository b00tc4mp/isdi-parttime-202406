import models from '../data/models.js'

const { User, Location } = models

const getOrCreateLocation = async (location, locationData) => {
    if (location) return location

    // si la localizacion no existia antes, timeLastUpdated es la fecha de ahora mismo
    // variables añadir las variables que tenga elegidas por defecto

    const newLocation = await Location.create({
        displayName: locationData.displayName,
        name: locationData.name,
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        timeLastUpdated: new Date(),
        // variables: call logic to add variables info
    })
    
    return newLocation
} 

export default (id, locationData, isCurrentLocation = false) => {
    // add validators

    const { display_name, name, latitude, longitude } = locationData

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            return Location.findOne({display_name: display_name, name: name, latitude: latitude, longitude: longitude})
                .then((location) => {
                    return getOrCreateLocation(location, locationData)
                        .then((newLocation) => {
                            // if adding current location, save it or overwrite exisiting one
                            if (isCurrentLocation) user.currentLocation = newLocation._id

                            const foundLocation = user.favLocations.find((location) => location._id === newLocation._id)

                            if (!foundLocation) {
                                user.favLocations.push(newLocation._id)
                            }
                            return user.save()
                        })
                        .catch((error) => {
                            // change this to a specific type of error
                            console.log(error)
                        })
                })
        })
}