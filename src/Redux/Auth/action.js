import { fire } from "../../Config/fire";
import { SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "./actionType";

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

export { signInWithEmail, registerUser }