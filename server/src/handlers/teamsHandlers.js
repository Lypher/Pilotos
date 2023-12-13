const { getAllTeams } = require("../controllers/teamsControllers");

const getTeamsHandler = async (req, res) => {
  const allTeams = await getAllTeams();
  try {
    return res.status(200).json(allTeams);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = getTeamsHandler;
