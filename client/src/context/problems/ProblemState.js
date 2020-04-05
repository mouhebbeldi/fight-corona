import React,{useReducer} from 'react';
import ProblemContext from './problemContext';
import problemReducer from './problemReducer';
import axios from 'axios';
import {
    PROBLEM_SUCCESS,
    PROBLEM_FAIL,
    PROBLEM_LOADED
} from '../types';

const ProblemState =(props)=>{
    const initialState={
     loading:true,
     error:null,
     problem:null
    };

const  [state , dispatch]=useReducer(problemReducer,initialState);

//get problem
const getProblems= async () => {
    
    try {
        const res = await axios.get('/api/problems');
        dispatch({type: PROBLEM_LOADED, payload : res.data});
    } catch (err) {
        dispatch({type: PROBLEM_FAIL});
    }
};
//set problem
    const setProblems =async formData =>{

        const config ={
            headers :{
                'Content-Type':'application/json'
            }
        }
        try {
            const res = await axios.post('/api/problems', formData,config);
            dispatch({
                type:PROBLEM_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type:PROBLEM_FAIL,
                payload: err.response.data.msg
            });
        }
    }



// const clearErrors =() => dispatch({type:CLEAR_ERRORS});

return (
    <ProblemContext.Provider 
        value={{
           
            loading:state.loading,
            error:state.error,
            problem:state.problem,
            setProblems,
            getProblems
        }}>

        {props.children}

    </ProblemContext.Provider>
);
};

export default ProblemState;