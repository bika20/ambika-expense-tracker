// import './App.css'
import Balance from './Balance'
import IncomeEx from './IncomeEx'
import Addtransaction from './Addtransaction'
import { GlobalProvider } from './context/GlobalState'
import Header from './Header'
import Tralist from './Tralist'
import './expense.css'
function App() {
  

  return (
    <div className='main'>
  
    <GlobalProvider>
      <Header/>
       
      <div className="container2">
        <Balance/>
        <IncomeEx/>
        <Tralist></Tralist>
        <Addtransaction/>

      
      </div>
      

    </GlobalProvider>
    </div>
    
    
  )
}

export default App
