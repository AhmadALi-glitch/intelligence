
import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";
import { PrismaExceptionHandler } from "@/pages/exceptions_handler";
import bcrypt from "bcrypt";

export default async function POST(request: NextApiRequest, response: NextApiResponse) {

    // Determine if the account type is Student Or Mentor
    // and create the related model then connect the Account with it
    const relatedModelBasedOnAccountType = request.body.type == "STUDENT"
        ? {
            student: {
                create: {
                    name: request.body.student.name,
                    interestes: {
                        connect: request.body.student.interestesIds.map((id: number) => {return {id}})
                    },
                    classes: {
                        connect: request.body.student.classesIds.map((id: number) => {return {id}})
                    },
                    mentors:{
                        connect: request.body.student.mentorsIds.map((id: number) => {return {id}})
                    }
                }
            }
        } :
        {
            mentor: {
                create: {
                    name: request.body.mentor.name,
                    professions: {
                        connect: request.body.mentor.professionsIds.map((id: number) => {return {id}})
                    }
                }
            }
        };

    console.log("Related Model To Account Type : ", relatedModelBasedOnAccountType);

    try {

        const hash = await bcrypt.hash(String(request.body.password), 12);
        if(!hash) {
            throw new Error(hash);
        }

        // create new account / as student or mentor based on account type 
        const result = await PrismaClient.account.create({
            data: {
                email: request.body.email,
                type: request.body.type,
                hash: hash,
                ...relatedModelBasedOnAccountType
            }
        })

        console.log("result :", result)
        return response.json(result);

    } catch(e) {
        console.log("EXCEPTION : ", e)
        return response.json(PrismaExceptionHandler.handle(e));
    }

}