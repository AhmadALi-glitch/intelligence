
import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function POST(request: NextApiRequest, response: NextApiResponse) {

    PrismaClient.class.create({
        data: {
            title: request.body.title,
            mentors: {connect: {id: 1}},
            subject: {connect: {id: 1}}
        }
    })
    
} 
