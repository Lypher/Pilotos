const fs = require("fs");
const path = require("path");
const { Team } = require("../db");

const filePath = path.join(__dirname, "..", "..", "api", "db.json");
const rawData = fs.readFileSync(filePath);
const driversData = JSON.parse(rawData).drivers;

const getAllTeams = async () => {
  let dbTeams = await Team.findAll();

  if (dbTeams.length === 0) {
    const teamsJson = driversData;

    const allTeams = teamsJson
      .map((driver) => {
        const team = driver.teams;
        if (team) {
          const splitTeams = team.split(", ");
          return splitTeams;
        }
      })
      .flat();

    dbTeams = allTeams;
  }
  return dbTeams;
};

const createTeam = async (team) => {
  const newTeam = await Team.create(team);
  return newTeam;
};

module.exports = { getAllTeams, createTeam };
