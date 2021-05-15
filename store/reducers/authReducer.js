import * as actionTypes from "../actions/actionTypes";


const initialState = {
    token:null,
    userId:null,
    error:null,
    loading:false
};

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return {
                ...state,loading:true
                }
        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                token:action.authData.token,
                error:null,
                loading:false,
                userId:action.authData.user._id
            }
        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                token:null,
                error:action.error,
                loading:false,
                userId:null
            }
        default:
        return state;

    }
}

export default reducer;