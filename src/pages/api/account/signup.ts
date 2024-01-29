
import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";
import { Prisma } from "@prisma/client";
import { PrismaExceptionHandler } from "@/pages/exceptions_handler";

export default async function POST(request: NextApiRequest, response: NextApiResponse) {

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

        // create new account / as student or mentor based on the query
        const result = await PrismaClient.account.create({
            data: {
                email: request.body.email,
                type: request.body.type,
                ...relatedModelBasedOnAccountType
            }
        })

        return response.json(result);

    } catch(e) {
        return response.json(PrismaExceptionHandler.handle(e));
    }

}