import { SHOW_USER_DROPDOWN_DISP } from "./actionType";

const initState = {
    userDropDownDisp: false
}

export const AppReducer = (state=initState, action)=>{

    switch (action?.type) {
        case SHOW_USER_DROPDOWN_DISP: {
            return {
                ...state,
                userDropDownDisp: !state.userDropDownDisp
            }
        }    
        default:
            return state;
    }
}