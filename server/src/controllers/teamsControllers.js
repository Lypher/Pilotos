const { Team } = require('../db')
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '..', '..', 'api', 'db.json')
const rawData = fs.readFileSync(filePath)
const driversData = JSON.parse(rawData).drivers


const getAllTeams = async () => {
    let dbTeams = await Team.findAll()

    if (dbTeams.length === 0) {
        const teamsJson = driversData

        const allTeams = teamsJson.map((driver) => {
            const team = driver.teams

            if (team) {
                const splitTeams = team.split(",")
                const cleanTeams = splitTeams.map(teamName => teamName.trim())
                return cleanTeams
            }
        })
            .flat()

        dbTeams = [...new Set(allTeams)]

        dbTeams.forEach((name) => {
            if (name !== null) {
                postTeam(name)
            }
        })
    }
    return dbTeams
}

const postTeam = async (name) => {
    const newTeam = await Team.create({ name })

    return newTeam
}

module.exports = { getAllTeams }