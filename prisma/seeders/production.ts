
import PrismaClient from "../../src/pages/api/connection";

export default async function main() {
    const subjects = await PrismaClient.subject.createMany({
        data: [
            {name: "MATH"},
            {name: "ART"},
            {name: "HISTORY"}
        ]
    })
    console.log(subjects);
}