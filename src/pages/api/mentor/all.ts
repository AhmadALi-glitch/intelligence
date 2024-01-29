import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function GET(request: NextApiRequest, response : NextApiResponse) {

    try {
        const allMentors = await PrismaClient.mentor.findMany();
        return response.json(allMentors);
    } catch(exc) {
        return response.json(exc);
    }

}
