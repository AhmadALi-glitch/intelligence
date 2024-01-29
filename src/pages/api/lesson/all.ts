import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function GET(request: NextApiRequest, response : NextApiResponse) {

    try {
        const allLessons = await PrismaClient.lesson.findMany();
        return response.json(allLessons);
    } catch(exc) {
        return response.json(exc);
    }

}
