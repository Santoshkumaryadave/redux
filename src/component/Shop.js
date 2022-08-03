import React from 'react'
import{ useDispatch,useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index'


function Shop() {
  const balence = useSelector(state=>state.amount)
  const dispatch= useDispatch();
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div className='container my-3'>


      .
      
          <h3>Dispatch/Withdraw</h3>  
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
        update Amount ({balence})
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop