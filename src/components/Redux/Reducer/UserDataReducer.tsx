import { apiUserData, apiUserDataError, apiUserDataLoading } from "../Actions/Actions";

type actionType = {
    type:string,
    payload:any
}

const initialState = {
    data:[],
    loading:true,
    error:''
}

export const UserDataReducer = (state = initialState, {type, payload}:actionType) => {
 switch(type){
    case apiUserData:
        return{
            ...state, 
            loading:false,
            data:payload
        }
    case apiUserDataLoading:
        return{
            ...state,
            loading:true
        }
    case apiUserDataError:
        return{
            ...state,
            loading:false,
            error:payload
        }
    default:
        {
            return state
        }

 }
}