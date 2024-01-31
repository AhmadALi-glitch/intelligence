
import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function DELETE(request: NextApiRequest, response: NextApiResponse) {

    let deleteResult = await PrismaClient.account.delete({
        where: {
            id: Number(request.query.id)
        }
    })

    response.json(deleteResult);

}
