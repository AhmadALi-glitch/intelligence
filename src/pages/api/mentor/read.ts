import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function GET(request: NextApiRequest, response : NextApiResponse) {

    let filters = {where: {}};

    if(request.query.id) {
        filters.where['id'] = Number(request.query.id);
    }

    try {
        const allMentors = await PrismaClient.mentor.findMany({
            ...filters,
            include: {account: true, classes: true, professions: true, students: true}
        });
        return response.json(allMentors);
    } catch(exc) {
        return response.json(exc);
    }

}
