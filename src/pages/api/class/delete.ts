
import { NextApiRequest, NextApiResponse } from "next";
import PrismaClient from "../connection";

export default async function DELETE(request: NextApiRequest, response: NextApiResponse) {

    let classLessonsDeleteResult = await PrismaClient.lesson.deleteMany({
        where: {
            classId: Number(request.query.id)
        }
    })

    let classDeleteResult = await PrismaClient.class.delete({
        where: {
            id: Number(request.query.id)
        }
    });

    response.json(classDeleteResult);

}
