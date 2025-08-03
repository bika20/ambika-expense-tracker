import { useContext } from "react"
import { GlobalContext } from "./context/GlobalState"


export default function Balance(){
    const {transactions}=useContext(GlobalContext)
    const amounts=transactions.map(tra=>tra.amount);
    const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);


    return(
        <div className=" w-[305px] h-[60px] px-4 mb-2">
            <p className="text-[22px] font-semibold madimi-one-regular">Your Balance</p>
            <p className="border border-[#b6b4b4] pl-2 rounded-[5px] text-[25px]">₹&nbsp;{total}</p>
        </div>
    )
}