import React from 'react'
import {  useContext  } from "react";
import { GlobalContext } from "./context/GlobalState";
import DeleteButton from './DeleteButton';


function Trasaction({ transac }) {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transac.amount > 0 ? '+' : '-';
  const textcolor =
  {
    color: transac.amount > 0 ? 'green' : 'red'
  };
  return (
    <div className='w-[305px]'>
      <li className="w-[305px] flex items-center justify-between">
        <p className='w-4'>{transac.text}&#9;</p>
        <p className='w-8' style={textcolor}> 
          ₹&nbsp;{sign}{Math.abs(transac.amount)}
        </p>
        <button className='flex items-center' onClick={() => deleteTransaction(transac.id)}>
          <DeleteButton />
        </button>
      </li>
    </div>
  )
}

export default Trasaction
