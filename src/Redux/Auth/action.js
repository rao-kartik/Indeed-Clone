import { fire } from "../../Config/fire";
import { SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, 
    ADMIN_SIGN_IN_REQUEST, ADMIN_SIGN_IN_SUCCESS, ADMIN_SIGN_IN_FAILURE, 
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
    ADMIN_LOGOUT_SUCCESS, LOGOUT_SUCCESS } from "./actionType";

const signInRequest = ()=>{
    return {
        type: SIGN_IN_REQUEST
    }
}

const signInSuccess = (token)=>{
    return {
        type: SIGN_IN_SUCCESS,
        payload: token
    }
}

const signInFailure = ()=>{
    return {
        type: SIGN_IN_FAILURE
    }
}

const adminSignInRequest = ()=>{
    return {
        type: ADMIN_SIGN_IN_REQUEST
    }
}

const adminSignInSuccess = (token)=>{
    return {
        type: ADMIN_SIGN_IN_SUCCESS,
        payload: token
    }
}

const adminSignInFailure = ()=>{
    return {
        type: ADMIN_SIGN_IN_FAILURE
    }
}

const registerRequest = ()=>{
    return {
        type: REGISTER_REQUEST
    }
}

const registerSuccess = (payload)=>{
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}

const registerFailure = ()=>{
    return {
        type: REGISTER_FAILURE
    }
}

const logoutSuccess = ()=>{
    return {
        type: LOGOUT_SUCCESS
    }
}

const adminlogoutSuccess = ()=>{
    return {
        type: ADMIN_LOGOUT_SUCCESS
    }
}

const signInWithEmail = (input)=>dispatch=>{

    dispatch(signInRequest());
    
    const { email, password } = input;
    fire.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential=>{
        var user = userCredential.user
        // console.log(user)
        dispatch(signInSuccess(user))
    })
    .catch(err=>{
        dispatch(signInFailure(err))
    })

}
const adminSignInWithEmail = (input)=>dispatch=>{

    dispatch(adminSignInRequest());
    
    const { email, password } = input;
    fire.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential=>{
        var user = userCredential.user
        // console.log(user)
        dispatch(adminSignInSuccess(user))
    })
    .catch(err=>{
        dispatch(adminSignInFailure(err))
    })
}

const registerUser = (input)=>dispatch=>{

    dispatch(registerRequest());

    const { email, password } = input;

    fire.auth().createUserWithEmailAndPassword(email, password)
    .then(user=>{
        dispatch(registerSuccess(user.user));
    })
    .catch(err=>{
        dispatch(registerFailure(err));
    })
}

export { signInWithEmail, registerUser, adminSignInWithEmail, adminlogoutSuccess, logoutSuccess }