const { getAllDrivers, getDetailDriver, getNameDriver, postDriver } = require("../controllers/driversControllers")

/* const getDriversHandler = async (req, res) => {
    try {
        const drivers = await getAllDrivers()
        return res.status(200).json(drivers)
    } catch (error) {
        return res.status(500).send(error)
    }
} */

const getDetailHandler = async (req, res) => {
    const { id } = req.params

    const source = isNaN(id) ? "db" : "json"

    try {
        const detailDriver = await getDetailDriver(id, source)
        return res.status(200).json(detailDriver)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const getNameHandler = async (req, res) => {
    const { name } = req.query
    const nameDriver = await getNameDriver(name)
    try {
        if (nameDriver.length === 0) return res.status(400).send('No se encontró el piloto buscado.')
        return res.status(200).json(nameDriver)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const postDriverHandler = async (req, res) => {
    const { name, surname, description, image, nationality, dob } = req.body
    const createDriver = postDriver(name, surname, description, image, nationality, dob)
    try {
        return res.status(200).json(createDriver)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const getDriversHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (!name) {
            try {
                const allDrivers = await getAllDrivers();
                res.json(allDrivers);
            } catch (error) {
                res(400).send(error);
            }
        } else {
            try {
                const nameDriver = await getNameDriver(name);
                if (nameDriver.length === 0) {
                    return res.status(400).json("no se encontraron resultados");
                }

                return res.status(200).json(nameDriver);
            } catch (error) {
                console.error("Error en getNameHandler:", error);
                return res.status(500).send("Error interno del servidor.");
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
}

module.exports = { getDriversHandler, getDetailHandler, getNameHandler, postDriverHandler }