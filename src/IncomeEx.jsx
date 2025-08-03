
// import { useEffect } from "react"
import { useContext } from "react"
import { GlobalContext } from "./context/GlobalState"


export default function IncomeEx(){
    const {transactions}=useContext(GlobalContext);
    const amt=transactions.map(tra=>tra.amount);
    const income=amt.filter(item=>item>0).reduce((inc,item)=>(inc+=item),0).toFixed(2)
    const expense=amt.filter(item=>item<0).reduce((exp,item)=>(exp+=item),0).toFixed(2)


    return(
        <div className="w-[250px] flex gap-10 text-left justify-center items-center border-[3px] border-black border-dashed rounded-[10px] bg-[#F3F3F3]">
            <span className="h-[60px] mt-2">
                <p className="font-semibold">INCOME</p>
                <p className="text-green-600">₹&nbsp;{income}</p>
            </span>
            <span className="h-[60px] mt-2">
                <p className="font-semibold">EXPENSE</p>
                <p className="text-red-600">₹&nbsp;{expense}</p>
            </span>
        </div>
        
    )
}