import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function GET(request: NextApiRequest, response: NextApiResponse) {

    let filters = { where: {} };

    if(request.query.byClasses == "true") {
        filters.where['OR'] = request.body.classesIds.map((cId) => {
            return {
                class: {
                    id: cId
                }
                /**
                 * Or classId : cId
                 */
            }
        });
    }

    let filterResult = await PrismaClient.lesson.findMany(filters);

    response.json(filterResult);

}
