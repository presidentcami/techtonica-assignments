const weather = {
    "coord": {
        "lon": -75.1638,
        "lat": 39.9523
    },
    "weather": [
        {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
        },
        {
            "id": 300,
            "main": "Drizzle",
            "description": "light intensity drizzle",
            "icon": "09d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 277.04,
        "feels_like": 273.57,
        "temp_min": 274.55,
        "temp_max": 279.26,
        "pressure": 1006,
        "humidity": 92
    },
    "visibility": 4828,
    "wind": {
        "speed": 4.12,
        "deg": 360
    },
    "clouds": {
        "all": 100
    },
    "dt": 1677604930,
    "sys": {
        "type": 2,
        "id": 2037403,
        "country": "US",
        "sunrise": 1677584163,
        "sunset": 1677624646
    },
    "timezone": -18000,
    "id": 4560349,
    "name": "Philadelphia",
    "cod": 200
}

module.exports = weather;