const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '..', '..', 'api', 'db.json')
const rawData = fs.readFileSync(filePath)
const driversData = JSON.parse(rawData).drivers

const infoDrivers = async () => {
    const response = await Promise.all(driversData.map(driver => ({
        id: driver.id,
        name: `${driver.name.forename} ${driver.name.surname}`,
        description: driver.description,
        image: driver.image.url,
        nationality: driver.nationality,
        dob: driver.dob,
        created: false
    })))
    return response
}

module.exports = { infoDrivers, driversData }