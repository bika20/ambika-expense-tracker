import { useContext, useState } from "react";
import { FaPlus } from 'react-icons/fa';
// import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
export default function Addtransaction(){
    const[text,settext]=useState('');
    const[amount,setamount]=useState(0);
    const{add}=useContext(GlobalContext);
    const onSubmit=(e)=>{
        e.preventDefault();

        if (text.trim() === '' || amount === '') {
            alert('Please fill in both fields correctly.');
            return;
        }
        
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
        <div className="w-[305px]">
            <p id="trans" className="text-[22px] font-semibold mb-1 madimi-one-regular">Add Transaction</p>
            <form onSubmit={onSubmit} className="flex flex-col justify-center items-center">
                <div className="mb-2">
                    <label htmlFor="text" className="mr-[53px] ">Title</label>
                    <input type="text" id="text" className="w-48 border border-black pl-2 h-7 rounded-md text-[17px]"
                    placeholder="Enter the title" value={text} onChange={(e)=>{
                        settext(e.target.value)
                        
                    }}/>
                </div>
                <div>
                    <label htmlFor="amount" className="mr-4">Amount </label>
                    <input type="number" id="amount" className="w-48 border border-black pl-2 h-7 rounded-md text-[17px]"
                    placeholder="Enter the amount" value={amount} onChange={(e)=>{
                        setamount(Number(e.target.value))
                        
                    }}/>
                </div>
                <br></br>
                <button className="bg-[#008080] text-white h-[36px] w-48 rounded-[18px] flex justify-center items-center madimi-one-regular"><FaPlus className="mr-2"/>Add Transaction</button>
            </form>
        </div>
    )
    
}