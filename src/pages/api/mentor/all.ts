import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function GET(request: NextApiRequest, response : NextApiResponse) {

    try {
        const allMentors = await PrismaClient.mentor.findMany({
            include: {account: true, classes: true, professions: true, students: true}
        });
        return response.json(allMentors);
    } catch(exc) {
        return response.json(exc);
    }

}
