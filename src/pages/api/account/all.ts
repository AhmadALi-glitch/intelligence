import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";
import jwt from "jsonwebtoken";

export default async function GET(request: NextApiRequest, response : NextApiResponse) {

    try {
        let bearer = String(request.headers.authorization).replace("Bearer ", '')
        if(!bearer) throw new Error("not allowed")

        let token = jwt.verify(bearer, "i11y");
        if(!token) throw new Error("session expired");        
 
        const allAccounts = await PrismaClient.account.findMany({
            include: {
                mentor: true,
                student: true
            }
        });
        response.json(allAccounts);

    } catch(e) {
        if(e.name == "TokenExpiredError") {
            response.json("Session Is Expired");
        } else if (e.name == "JsonWebTokenError") {
            response.json("Not Allowed");
        }
    }

}
