import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import PrismaClient from "../connection";

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

        let _class = await PrismaClient.class.findFirst({
            where: {
                name: request.body.class
            }
        })

        let lesson = await PrismaClient.lesson.create({
            data: {
                title: request.body.title,
                description: request.body.description,
                content: request.body.content,
                class: {
                    connect: {
                        id: _class?.id
                    }
                },
                subject: {
                    connect: {
                        id: _class?.subjectId
                    }
                },
                mentor: {
                    connect: {
                        id: mentor?.id
                    }
                } 
            }
        })

        response.json({lesson});

    } catch(e) {
        response.json(e);
    }

}

