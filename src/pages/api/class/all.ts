import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function GET(request: NextApiRequest, response : NextApiResponse) {

    try {
        const allClasses = await PrismaClient.class.findMany({
            include: {
                mentors: true,
                lessons: true,
                students: true,
                subject: true
            }
        });
        return response.json(allClasses);
    } catch(exc) {
        return response.json(exc);
    }

}
