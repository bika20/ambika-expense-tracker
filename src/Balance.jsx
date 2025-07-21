import { useContext } from "react"
import { GlobalContext } from "./context/GlobalState"


export default function Balance(){
    const {transactions}=useContext(GlobalContext)
    const amounts=transactions.map(tra=>tra.amount);
    const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);


    return(
        
        <div id="bal">
        <h2 >Your Balance</h2>
        <h4 id="balance">{total}</h4>
        
        </div>
    )
}