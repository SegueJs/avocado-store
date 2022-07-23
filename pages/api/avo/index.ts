import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {

    const db = new DB()

    const allEntries = await db.getAll()

    res.statusCode = 200
    res.setHeader('Content-type','application/json')
    res.end(JSON.stringify({ data: allEntries }))
}
export default allAvos