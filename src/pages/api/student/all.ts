import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function GET(request: NextApiRequest, response : NextApiResponse) {

    try {
        const allStudents = await PrismaClient.student.findMany();
        return response.json(allStudents);
    } catch(exc) {
        return response.json(exc);
    }

}