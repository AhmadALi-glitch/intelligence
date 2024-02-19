import { createContext } from "react";

let defaultState= {

    accountType: '',

    // here we define each element state in default . from property
    studentAccountButton: {
            flexBasis: '100%',
            width: '30%',
            overflow: 'hidden'
    },

    studentPrefixWord: {
            width: '0px',
            overflow: 'hidden'
    },

    studentParagraph: {
            width: '100%',
            height: '0px',
            overflow: 'hidden'
    },

    studentForm: {
            flexBasis: '0%',
            overflow: 'hidden',
            width: '100%'
    },

    teacherAccountButton: {
            flexBasis: '100%',
            width: '30%',
            overflow: 'hidden'
    },

    teacherPrefixWord: {
            width: '0px',
            overflow: 'hidden'
    },

    teacherParagraph: {
            width: '100%',
            height: '0px',
            overflow: 'hidden'
    },

    teacherForm: {
            flexBasis: '0%',
            overflow: 'hidden',
            width: '100%'
    }

}

// Form Animation State

export const SignUpReducer = [

    function reducer(state, action) {

        switch(action.type) {
            case "teacher_selected" : {
                return {
                    ...defaultState,
                    accountType: 'teacher',
                    teacherPrefixWord: {
                        flexBasis: '100%',
                        width: '100%',
                        overflow: 'visible'
                    },
                    teacherForm: {
                        flexBasis: '100%',
                    },
                    teacherAccountButton: {
                        flexBasis: '100%',
                        width: '100%',
                        overflow: 'visible'
                    },
                    teacherParagraph: {
                        height: '100px',
                        overflow: 'visible',
                    },

                    studentAccountButton: {
                        overflow: 'hidden',
                        flexBasis: '0%'
                    },
                    studentParagraph: {
                        height: '0px',
                        overflow: 'visible',
                    },
                    studentForm: {
                       flexBasis: '0%'
                    },
                    studentPrefixWord: {
                        flexBasis: '100%',
                        width: '100%',
                        overflow: 'visible'
                    },                  
                }
            }
            case "student_selected": {
                return {
                    ...defaultState,
                    accountType: 'student',
                    studentPrefixWord: {
                        flexBasis: '100%',
                        width: '100%',
                        overflow: 'visible'
                    },
                    studentForm: {
                        flexBasis: '100%',
                    },
                    studentAccountButton: {
                        flexBasis: '100%',
                        width: '100%',
                        overflow: 'visible'
                    },
                    studentParagraph: {
                        height: '100px',
                        overflow: 'visible',
                    },

                    teacherAccountButton: {
                        overflow: 'hidden',
                        flexBasis: '0%'
                    },
                    teacherParagraph: {
                        height: '0px',
                        overflow: 'visible',
                    },
                    teacherForm: {
                       flexBasis: '0%'
                    },
                    teacherPrefixWord: {
                        flexBasis: '100%',
                        width: '100%',
                        overflow: 'visible'
                    },
                }
            }
            case "teacher_registered" : {
                return {
                }
            }
            case "student_registered" : {
                return {
                }
            }
        }

    },

    defaultState

]


export let GlobalContext = createContext(defaultState);
export let GlobalContextDispatcher = createContext(null);
