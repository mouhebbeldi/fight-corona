import {
    PROBLEM_SUCCESS,
    PROBLEM_FAIL,
    PROBLEM_LOADED
} from '../types';


export default (state, action )=>{

    switch(action.type){
        case PROBLEM_LOADED:
                return {
                    ...state,
                    error:null,
                    loading:false,
                    problem:action.payload
                };  
        case PROBLEM_SUCCESS:
            return {
                ...state,
                error:null,
                loading:false,
                problem:action.payload
            };
        
       
        case PROBLEM_FAIL:
            return {
                ...state,
                error:action.payload,
                loading:false,
                problem:null
            };
            
   
        default : 
            return state;
    };
};