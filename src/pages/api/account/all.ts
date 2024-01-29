import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function GET(request: NextApiRequest, response : NextApiResponse) {

    let filters = {};
    // Optional Filters
    if(Object.keys(request.query).length) {
        filters = {where: {type: request.query.type}};
        console.log("Queries", filters)
    }

    try {
        const allAccounts = await PrismaClient.account.findMany(filters);
        return response.json(allAccounts);
    } catch(exc) {
        return response.json(exc);
    }

}
