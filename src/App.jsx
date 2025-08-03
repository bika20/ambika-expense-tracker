import Balance from './Balance'
import IncomeEx from './IncomeEx'
import Addtransaction from './Addtransaction'
import { GlobalProvider } from './context/GlobalState'
import Tralist from './Tralist'
import LineBreak from './LineBreak'
function App() {
  

  return (
  <>
    <GlobalProvider>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className='text-[40px] mb-3 mt-3 madimi-one-regular text-[#203A06]'>EXPEN$E TRACKER</h1>
        <div className="w-[40%] bg-white p-4 rounded-lg shadow-lg">
          <div className="w-full flex flex-col justify-center items-center">
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
