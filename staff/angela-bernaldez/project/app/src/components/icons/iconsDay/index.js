// puedo indexar todos los icons
// con el nombre uqe me de la gana
// matcheando el tipo de tiempo o algo asi para cuando los quiera renderizar 

// asi puedo importar icons directamente desde otro sitio (la carpeta entera)

// tengo que usar el useContext con las alertas personalizadas para los errores x ejemplo


// think of which icons go which each weather_code
// some icons from airycons will not be used as they do not correspond with any weather code
// use table given in github


import ClearIcon from './clear.jsx'
import MostlyClearIcon from './mostlyClear.jsx'
import PartlyCloudyIcon from './partlyCloudy.jsx'

const icons = {
    ClearIcon,
    MostlyClearIcon,
    PartlyCloudyIcon
}

export default icons


