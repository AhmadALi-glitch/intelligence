import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function GET(request: NextApiRequest, response : NextApiResponse) {

    try {
        const allSubjects = await PrismaClient.subject.findMany();
        return response.json(allSubjects);
    } catch(exc) {
        return response.json(exc);
    }

}