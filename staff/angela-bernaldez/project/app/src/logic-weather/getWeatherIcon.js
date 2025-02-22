import iconsDay from '../components/icons/iconsDay'
import iconsNight from '../components/icons/iconsNight'
import React from 'react'

const weatherMap = {
    0: 'ClearIcon',
    1: 'MostlyClearIcon',
    2: 'PartlyCloudyIcon',
    3: 'OvercastIcon',
    45: 'FogIcon',
    48: 'IcyFogIcon',
    51: 'LightDrizzleIcon',
    53: 'HeavyDrizzleIcon',
    55: 'HeavyDrizzleIcon',
    56: 'LightIcyDrizzleIcon',
    57: 'IcyDrizzleIcon',
    61: 'LightRainIcon',
    63: 'ModerateRainIcon',
    65: 'HeavyRainIcon',
    66: 'LightIcyRainIcon',
    67: 'IcyRainIcon',
    71: 'LightSnowIcon',
    73: 'ModerateSnowIcon',
    75: 'HeavySnowIcon', 
    77: 'SnowGrainIcon',
    80: 'LightRainIcon',
    81: 'ModerateRainIcon',
    82: 'HeavyRainIcon',
    85: 'LightSnowIcon',
    86: 'HeavySnowIcon',
    95: 'ThunderstormIcon',
    96: 'ThunderstormHailIcon',
    99: 'ThunderstormHailIcon'
}

const getWeatherIcon = (weatherCode, isDay) => {

    //isDay would be 1 for true and 0 for false
    const iconFolder = isDay ? iconsDay : iconsNight
    const iconName = weatherMap[weatherCode]
    const Icon = iconFolder[iconName]

    if (Icon) {
        return React.createElement(Icon)
    } else {
        console.log('No icon has been found for the requested weather code', weatherCode)
    }
} 

export default getWeatherIcon