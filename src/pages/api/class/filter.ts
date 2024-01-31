import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";
import { SubjectName } from "@prisma/client";

export default async function GET(request: NextApiRequest, response: NextApiResponse) {

    let filters = {
        where: {AND: []}
    };
 
    // read lessons published by selected mentors
    if(request.query.byMentors == 'true') {
        //@ts-ignore
        filters.where.AND.push({
            OR: request.body.mentorsIds.map((mId: number) => {
                return {
                    mentors: {
                        every: {
                            id: mId
                        }
                    }
                }
            })
        })
    }

    if(request.query.bySubjects == 'true') {
        //@ts-ignore
        filters.where.AND.push({
            OR: request.body.subjects.map((sName: SubjectName) => {
                return {
                    subject: {
                        name: sName
                    }
                }
            })
        })
    }

    // read the lessons by searching in the lesson's name and description with the provided seach text
    if(request.query.bySearchText == 'true') {
        filters.where['name'] = {
            search: request.body.searchText
        }
        filters.where['description'] = {
            search: request.body.searchText
        }
    }

    let filterResult = await PrismaClient.class.findMany({
        ...filters,
        include : { mentors: true, subject: true }
    });

    response.json(filterResult);

}
