
import { parseArgs } from "util";
import developmentSeeder from "./development";
import productionSeeder from "./production";

/**
 * this function checks the command arguments and run the seed
 * which matches with the environment mode
 * */
async function main() {

    const { values : { environment } } = parseArgs( { options: { environment: {type: "string"} } } );

    switch(environment) {
        case "development" :
            developmentSeeder();
            break;

        case "production" :
            productionSeeder();
            break;

        default :
            productionSeeder();
            break;
        }

    console.log("Env :", environment);
}

main();
