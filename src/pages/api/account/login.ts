import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";
import bcrypt from "bcrypt";

export default async function POST(request: NextApiRequest, response: NextApiResponse) {

    try {

        let account = await PrismaClient.account.findFirst({where: {email: request.body.email}});
        if(!account) throw new Error("Account Not Found");
    
        let isPasswordCorrect = await bcrypt.compare(String(request.body.password), account.hash);
        if(!isPasswordCorrect) throw new Error("Password Is Not Correct");

        return response.json({
            email: account.email,
            type: account.type
        })

    } catch(e) {
        console.log("EXCEPTION : ", e)
        return response.json(e.message);
    }

}
