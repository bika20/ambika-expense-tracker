import { useContext } from "react";
import { GlobalContext} from "./context/GlobalState";

import Trasaction from "./Transaction";

const Tralist=()=>{
    const {transactions} =useContext(GlobalContext);

    return(
        <div className="w-[305px]">
            <p className="text-[22px] font-semibold mb-1 madimi-one-regular">History</p>

            <ul>
                {transactions.map(tra=>(<Trasaction key={tra.id} transac={tra}/>))}
            </ul>
        </div>
    )
}
export default Tralist;