import React, { useReducer, useState } from 'react'
import Button from 'react-bootstrap/Button'

const UseReducers = () => {
    // const [number,setNumber]=useState(0);
    const initialState=0;
    const reducerFunction=(state,action)=>{
        if(action.type==="INC"){
            return state+1;
        }
        else if(action.type==="DEC"){
            return state-1;
        }
        else{
            return state;
        }
    }
    const [state,dispatch]=useReducer(reducerFunction,initialState);
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center min-vh-100'>
        <div className='d-flex gap-3 align-items-center'>

        <Button onClick={()=>dispatch({type:"DEC"})} variant='danger'>Subtract</Button>
        <p>{state}</p>
        <Button onClick={()=>dispatch({type:"INC"})} variant='secondary'>Add</Button>
        </div>
      </div>
    </div>
  )
}

export default UseReducers
