
import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";


export default async function GET(request: NextApiRequest, response: NextApiResponse) {

    let filters = {where: {}};

    if(request.query.classId) {
        filters.where['classes'] = {
            every: {
                id: Number(request.query.classId)
            }
        }
    }

    console.log(filters);

    let filterResult = await PrismaClient.mentor.findFirst(filters);

    response.json(filterResult);

}
