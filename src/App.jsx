import Balance from './Balance'
import IncomeEx from './IncomeEx'
import Addtransaction from './Addtransaction'
import { GlobalProvider } from './context/GlobalState'
import Tralist from './Tralist'
import LineBreak from './LineBreak'
import Header1 from './Header1'
function App() {
  

  return (
  <>
    <GlobalProvider>
       
      <div className="min-h-screen flex flex-col items-center justify-center ">
       <Header1 />
        <div className="w-[40%] bg-[#215C4B] p-4 rounded-lg shadow-lg">
          <div className="w-full flex flex-col justify-center items-center ">
            <Balance />
            <LineBreak />
            <IncomeEx />
            <LineBreak />
            <Tralist />
            <LineBreak />
            <Addtransaction/>
          </div>
        </div>
      </div>
    </GlobalProvider>
  </>
    
    
  )
}

export default App
