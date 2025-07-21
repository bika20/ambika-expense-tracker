import React from 'react'
import {
  useContext

} from "react";
import { GlobalContext } from "./context/GlobalState";


function Trasaction({ transac }) {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transac.amount > 0 ? '+' : '-';
  const textcolor =
  {
    color: transac.amount > 0 ? 'green' : 'red'
  };
  return (
    <div>
      <li className="list">
        {transac.text}<span className='spn' style={textcolor}>  {sign}${Math.abs(transac.amount)}</span> <button onClick={() => deleteTransaction(transac.id)} className="deletebtn">-</button>
      </li>
    </div>
  )
}

export default Trasaction
