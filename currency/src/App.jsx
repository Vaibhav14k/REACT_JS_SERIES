import { useState } from 'react'
import InputBox from './components/InputBox'
import usecurrencyinfo from './hooks/usecurrencyinfo'

import './App.css'
function App() {
  const [from,setfrom]=useState("usd");
  const [to,setto]=useState("inr");
  const [amount,setamount]=useState(0);
  const [convertedamount,setconvertedamount] = useState(0);
  const currencyinfo = usecurrencyinfo(from);
  const option = Object.keys(currencyinfo)
  const swap = ()=>{
    setfrom(to);
    setto(from);
     setconvertedamount(amount)
    setamount(convertedamount)
  }
  const convert = ()=>{
    setconvertedamount(amount * currencyinfo[to]) 
  }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('data:image/jpeg;base64,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')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="from"
                                amount={amount}
                                currencyoptions={option}
                                oncurrencychange={(currency)=>setamount(amount)}
                                selectcurrency={from}
                                onamountchange={(amount)=>setamount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                 label="to"
                                amount={convertedamount}
                                currencyoptions={option}
                                oncurrencychange={(currency)=>setto(currency)}
                                selectcurrency={from}
                                amountdisplay
                                // onamountchange={(amount)=>setamount(amount)}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from}  to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
