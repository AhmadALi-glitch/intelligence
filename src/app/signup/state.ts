
// we will use another hook because this hook cant share state between components (non if we used a prop)
export function SignUpReducer(state, action) {
    console.log("DISPATCHING", action)
    switch(action.type) {
        case "CREATING" : {
            return {
                status: 'CREATING'
            }
        }
        case "FINISHED": {
            return {
                status: 'FINISHED'
            }
        }
    }
}
