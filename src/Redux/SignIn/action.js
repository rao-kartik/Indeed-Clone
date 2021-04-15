import { fire } from "../../Config/fire";
import { SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from "./actionType";

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

const signInWithEmail = (input)=>dispatch=>{

    dispatch(signInRequest());
    
    const { email, password } = input;
    fire.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential=>{
        var user = userCredential
        console.log(user)
        dispatch(signInSuccess(user))
    })
    .catch(err=>{
        dispatch(signInFailure(err))
    })
}

export { signInWithEmail }