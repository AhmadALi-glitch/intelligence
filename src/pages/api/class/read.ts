import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function GET(request: NextApiRequest, response : NextApiResponse) {

    let filters = {where: {}};
    if(request.query.id) {
        filters.where['id'] = Number(request.query.id);
    }

    try {
        const allClasses = await PrismaClient.class.findMany({
            ...filters,
            include: {
                mentors: true,
                lessons: true,
                students: true,
                subject: true
            }
        });
        return response.json(allClasses);
    } catch(exc) {
        console.log(exc);
        return response.json(exc);
    }

}
