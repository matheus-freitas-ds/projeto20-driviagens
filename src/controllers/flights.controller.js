import { db } from "../database/database.js"

export async function saveFlight(req, res) {
    const { origin, destination, date } = req.body

    try {
        const originCity = await db.query(`SELECT * FROM cities WHERE id = $1;`, [origin])
        if (originCity.rowCount === 0) return res.sendStatus(404)

        const destinationCity = await db.query(`SELECT * FROM cities WHERE id = $1;`, [destination])
        if (destinationCity.rowCount === 0) return res.sendStatus(404)

        if (origin === destination) return res.sendStatus(409)

        await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`, [origin, destination, date])
        res.sendStatus(201)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}