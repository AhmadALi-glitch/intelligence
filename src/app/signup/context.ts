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
            overflow: 'hidden',
            transform: 'translate(0px)'
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
    },


    teacherSide: {
        flexBasis: '50%',
        height: '100%',
        width: '100%'
    },
    studentSide: {
        flexBasis: '50%',
        height: '100%',
        width: '100%'
    },
    separator: {
        transform: 'translateX(0px)',
        overflow: 'visible',
        width: '2%'
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
                        overflow: 'hidden',
                        transform: 'translate(0px)'
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
                        overflow: 'hidden'
                    },
                    studentParagraph: {
                        height: '100px',
                        overflow: 'visible',
                    },

                    teacherAccountButton: {
                        overflow: 'hidden',
                        flexBasis: '0%',
                        transform: 'translate(0px)'
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
                    ...state,
                    teacherAccountButton: {
                        width: '0px',
                        overflow: 'hidden',
                        transform: 'translateX(-600px)'
                    },                
                    teacherSide: {
                        flexBasis: '0%',
                        height: '100%',
                        overflow: 'hidden',
                        width: '0px'
                    },
                    studentSide: {
                        flexBasis: '100%',
                        height: '100%',
                        width: '100%'
                    },
                    separator: {
                        transform: 'translateX(-600px)',
                        overflow: 'hidden',
                        width: '0px'
                    }
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
