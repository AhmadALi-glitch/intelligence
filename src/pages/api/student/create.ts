import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function POST(request: NextApiRequest, response : NextApiResponse) {

    try {
        const result = await PrismaClient.student.create({
            data: {
                name: request.body.name,
                classes: {
                    connect: [
                    ]
                },
                interestes: {
                    connect: [
                    ]
                },
                mentors: {
                    connect: [
                    ]
                }
            }
        });
        return response.json(result);
    } catch(exc) {
        return response.json(exc);
    }

}