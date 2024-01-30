
import PrismaClient from "../../src/pages/api/connection";
import bcrypt from "bcrypt";

export default async function main() {

    const subjects = await PrismaClient.subject.createMany({
        data: [
            {name: "MATH"},
            {name: "ART"},
            {name: "HISTORY"}
        ]
    })

    const account = await PrismaClient.account.createMany({
        data: 
        [
            {
                email: "ahmad@gmail.com",
                type: "MENTOR",
                hash: bcrypt.hashSync('12345678', 12)
            },
            {
                email: "ali@gmail.com",
                type: "STUDENT",
                hash: bcrypt.hashSync('12345678', 12)
            }
        ]
    })

}
