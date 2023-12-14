const { Router } = require("express");
const getTeamsHandler = require("../handlers/teamsHandlers");
const { createTeam } = require("../controllers/teamsControllers");
const teamsRouter = Router();

teamsRouter.get("/", getTeamsHandler);
teamsRouter.post("/", async (req, res) => {
  try {
    const { id, name } = req.body;
    const newTeam = await createTeam({ id, name });
    res.status(200).json(newTeam);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = teamsRouter;
