// puedo indexar todos los icons
// con el nombre uqe me de la gana
// matcheando el tipo de tiempo o algo asi para cuando los quiera renderizar 

// asi puedo importar icons directamente desde otro sitio (la carpeta entera)

// tengo que usar el useContext con las alertas personalizadas para los errores x ejemplo


// think of which icons go which each weather_code
// some icons from airycons will not be used as they do not correspond with any weather code
// use table given in github


import ClearIcon from './clear.jsx'
import FogIcon from './fog.jsx'
import IcyFogIcon from './icyFog.jsx'
import ModerateSnowIcon from './moderateSnow.jsx'
import MostlyClearIcon from './mostlyClear.jsx'
import LightSnowIcon from './lightSnow.jsx'
import OvercastIcon from './overcast.jsx'
import PartlyCloudyIcon from './partlyCloudy.jsx'
import SnowGrainIcon from './snowGrain.jsx'
import ThunderstormIcon from './thunderstorm.jsx'
import thunderstormHailIcon from './thunderstormHail.jsx'

const iconsDay = {
    ClearIcon,
    FogIcon,
    IcyFogIcon,
    ModerateSnowIcon,
    MostlyClearIcon,
    LightSnowIcon,
    OvercastIcon,
    PartlyCloudyIcon,
    SnowGrainIcon,
    ThunderstormIcon,
    thunderstormHailIcon
}

export default iconsDay


