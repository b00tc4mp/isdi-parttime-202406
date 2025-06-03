import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import getWeatherIcon from '../../logic-weather/getWeatherIcon'

function WeeklyForecast({ dailyForecast }) {
    if (!dailyForecast || !dailyForecast.time) return null

    const forecastData = dailyForecast.time.map((date, index) => ({
        day: new Date(date).toLocaleDateString('en-US', { weekday: 'long' }),
        tmin: dailyForecast.temperature_2m_min[index],
        tmax: dailyForecast.temperature_2m_max[index],
        weather_code: dailyForecast.weather_code[index],
        precipitation: dailyForecast.precipitation_probability_max[index],
    }))

    // Custom Tooltip for displaying info
    const CustomTooltip = ({ payload, label }) => {
        if (!payload || !payload.length) return null

        const data = payload[0].payload

        return (
            <div className="bg-white p-2 rounded-lg shadow-md">
                <div className="text-center text-sm font-medium text-gray-700">
                    <p>{label}</p>
                    <p className="text-sm">{getWeatherIcon(data.weather_code, 1)}</p>
                    <p>Max: {Math.round(data.tmax)}°C</p>
                    <p>Min: {Math.round(data.tmin)}°C</p>
                    <p>Precipitation: {data.precipitation}%</p>
                </div>
            </div>
        )
    }
    
    const minTemp = Math.min(...forecastData.map(item => item.tmin))
    const maxTemp = Math.max(...forecastData.map(item => item.tmax))
    
    return (
        <div className="w-auto h-[300px] bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-2 text-center">Weekly Forecast</h2>

            <ResponsiveContainer width="100%" height="80%">
                <LineChart data={forecastData} margin={{ left: 10, right: 10 }}>
                    <XAxis 
                        dataKey="day" 
                        tick={{ fill: '#555', fontSize: 12 }} 
                        axisLine={false} 
                        dy={5} 
                        interval="preserveStart" 
                        padding={{ left: 30, right: 30 }}
                    />
                    <YAxis 
                        domain={[minTemp - 2, maxTemp + 2]} 
                        tick={{ fill: '#555' }} 
                        axisLine={false} 
                        tickCount={6}
                        tickFormatter={(value) => `${Math.round(value)}°`} 
                        margin={{ top: 20 }} 
                        padding={{ top: 10 }}
                    />
                    <Tooltip content={<CustomTooltip />} />

                    <Line 
                        type="monotone" 
                        dataKey="tmin" 
                        stroke="#1E90FF" 
                        strokeWidth={2} 
                        dot={{ r: 2, fill: '#1E90FF' }} 
                    />

                    <Line 
                        type="monotone" 
                        dataKey="tmax" 
                        stroke="#FF4500" 
                        strokeWidth={2} 
                        dot={{ r: 2, fill: '#FF4500' }} 
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default WeeklyForecast

