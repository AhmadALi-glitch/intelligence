import { Prisma } from "@prisma/client";


export class PrismaExceptionHandler {
    static handle (e: unknown): string {
        if(e instanceof Prisma.PrismaClientKnownRequestError) {
            switch(e.code) {
                // Constraint On Repeated Field
                case "P2002":
                    return `${e.meta?.target} Should Be Unqiue`;
                case "P2025":
                    return `Trying To Connect an ${e.meta?.modelName} with unexist model in another table`;
            }
        }
        return e;
    }
}