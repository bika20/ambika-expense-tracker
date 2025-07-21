
// import { useEffect } from "react"
import { useContext } from "react"
import { GlobalContext } from "./context/GlobalState"


export default function IncomeEx(){
    const {transactions}=useContext(GlobalContext);
    const amt=transactions.map(tra=>tra.amount);
    const income=amt.filter(item=>item>0).reduce((inc,item)=>(inc+=item),0).toFixed(2)
    const expense=amt.filter(item=>item<0).reduce((exp,item)=>(exp+=item),0).toFixed(2)


    return(
        <div className="inex">
            <span>
                <h4>INCOME</h4>
                <p id="income" className="income">${income}</p>
            </span><span>
                <h4>EXPENSE</h4>
                <p id="expense" className="expense">${expense}</p>
            </span>

            </div>
        
    )
}