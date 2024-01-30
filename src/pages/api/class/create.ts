
import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";
import jwt from "jsonwebtoken";

export default async function POST(request: NextApiRequest, response: NextApiResponse) {


    try {

        // extract the mentor email from the jwt token
        let token = String(request.headers.authorization).replace("Bearer ", "");
        let account = jwt.decode(token);
        
        let mentor = await PrismaClient.mentor.findFirst({
            where: {
                accountEmail: account.email
            }
        })
        let subject = await PrismaClient.subject.findFirst({
            where: {
                name: request.body.subject 
            }
        })
     
        let classe = await PrismaClient.class.create({
            data: {
                name: request.body.name,
                description: request.body.description,
                mentors: {connect: {id: mentor?.id}},
                subject: {connect: {id: subject?.id}}
            },
            include: {
                mentors: true,
                subject: true
            }
        });

        response.status(200).json({mentor, classe});

    } catch(e) {
        response.status(500).json(e);
    }

} 
