import { useContext } from "react";
import { GlobalContext} from "./context/GlobalState";

import Trasaction from "./Transaction";

const Tralist=()=>{
    const {transactions} =useContext(GlobalContext);
    // console.log(object);
    return(
        <div>
            <h3 >History</h3>
            <hr id="history"></hr>
            <ul>
                {transactions.map(tra=>(<Trasaction key={tra.id} transac={tra}/>))}
               
            </ul>
        </div>
    )
}
export default Tralist;