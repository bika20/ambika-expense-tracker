import { useContext, useEffect, useState } from "react";
// import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
export default function Addtransaction(){
    const[text,settext]=useState('');
    const[amount,setamount]=useState('');
    const{add}=useContext(GlobalContext);
    const onSubmit=(e)=>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*10000),
            text,
            amount
        }
        add(newTransaction);
        setamount('');
        settext('');
    }
    return(
        <div>
            <h2 id="trans">Add Transaction</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="text">Text </label>
                    <br></br>
                    <input type="text" id="text"
                    placeholder="Add the text here" value={text} onChange={(e)=>{
                        settext(e.target.value)
                        
                    }}/>
                </div>
                <br>
                </br>
                
                <div>
                    <label htmlFor="amount">Amount </label>
                    <br></br>
                    <input type="number" id="amount"
                    placeholder="Add the amount here" value={amount} onChange={(e)=>{
                        setamount(Number(e.target.value))
                        
                    }}/>
                </div>
                <br></br>
                <button id="btn">Add Transaction</button>
            </form>
        </div>
    )
    
}