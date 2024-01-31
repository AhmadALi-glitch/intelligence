import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function GET(request: NextApiRequest, response: NextApiResponse) {

    let filters = {
        where: {}
    };

    
    console.log("QUERY", request.query)
    // read lessons published by selected mentors
    if(request.query.byMentors == 'true') {
        filters.where['OR'] = request.body.mentorsIds.map((mId: number) =>
            {
                return {
                    mentors: {
                        every: {
                            id: mId
                        }
                    }
                }
            }
        );
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

    console.log("FILTERS : ", filters.where);

    let filterResult = await PrismaClient.class.findMany({
        ...filters,
        include : { mentors: true }
    });

    response.json(filterResult);

}
