
p_x = task is priority x , where x is a number


# [ p_1 ] : create global enter/leave page transitions 

# [ p_2 ] : use createContext and useContext to handle the app themes

# [ p_2 ] : try to do some svg morphing here .. feature for the future

<!-- # [ p_1 ] : try to change a font on runtime -- Done it works -->
# [ p_1 ] : continue themeing tommorrow MUST Be Ended

# [ p_later ] : metadata

# [ p-* ] : Refactor

so far I've learned in react it is a library for creating interactive user interfaces 
react based on components (jsx) and props and hooks
hooks are special functions that adds a feature to the app or helps us to finish a certian task in less code
hooks like:
            
            1- useState => to create stateful data inside a component
            
            2- useReducer => to create state for a component following action dispatcher style (not manually mutate the state) creating immutalble state this limits the ability to update it .. instead dispatching an action (tells what heppend) then returning an object represents the new state .. this hook is limited for just one component because each hook we create it will instaniate a new state ... even if they share the same state handler .. bacause the hook itself is the responsible of creating the new instance.. not the event handler

            3- useContext => to provide a way to share state from parent to all children components tree .. the problem with this hook is that every change on the state will trigger a re-render .. means every component subscribed to the context will re-render .. and this leads to performance issues


also it is very important to understand how each hook affects the re-render process in react
