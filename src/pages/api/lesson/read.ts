import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function GET(request: NextApiRequest, response : NextApiResponse) {

    let filters = {where: {}}
    if(request.query.id) {
        filters.where['id'] = Number(request.query.id);
    }
 
    try {
        const allLessons = await PrismaClient.lesson.findMany(filters);
        return response.json(allLessons);
    } catch(exc) {
        return response.json(exc);
    }

}
