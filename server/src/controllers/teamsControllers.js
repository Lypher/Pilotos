const { Team } = require("../db");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "..", "api", "db.json");
const rawData = fs.readFileSync(filePath);
const driversData = JSON.parse(rawData).drivers;

const getAllTeams = async () => {
  const dbTeams = await Team.findAll();
  console.log(dbTeams);
  if (dbTeams === 0) {
    const teamsJson = await driversData;

    const allTeams = [];
    teamsJson.forEach((driver) => {
      const team = driver.team;

      if (team) {
        const splitTeams = team.split(", ");
        allTeams.push(...splitTeams);
      }
    });

    dbTeams = [...new Set(allTeams)];

    dbTeams.forEach((name) => {
      postTeam(name);
    });
  }
  return dbTeams;
};

module.exports = { getAllTeams };
