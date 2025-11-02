///const { useState, useMemo,useEffect } = React;

import { useMemo, useState } from "react"

  
  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
}


//const fromCurrencyUnit =["USD","EUR","GBP","JPY"]
//const toCurrencyUnit = ["EUR","USD","GBP","JPY"]

export function CurrencyConverter() {
const [amount, setAmount] = useState(1)
//const [rates, setRates] = useState(Amount)
const [fromCurrency,setFromCurrency] =useState("USD")
const [toCurrency,setToCurrency] =useState("EUR")
//const [result, setResult] = useState(0)

// useEffect(()=>{

// setResult(amount)
// },[amount])


const conversion =useMemo(()=>{
  //  const filtered = toCurrencyUnit.filter(currency => currency ===e.target.value) 
  //  const temp = (amount * rates[filtered[0]]).toFixed(2)
      // setResult(`${temp} ${filtered}`)
      console.log('fr',rates[fromCurrency], 'to',rates[toCurrency])
      
      const rate = rates[fromCurrency]/rates[toCurrency]
     console.log(rate)
       const temp =( amount * rate).toFixed(2)
        
      // setResult(`${temp} ${fromCurrency}`)
    
  return `${temp} ${toCurrency}`

},[amount, fromCurrency,toCurrency])
// 
// const formattedAmount = `${conversion.toFixed(2)} ${toCurrency}`
return (<div className='container-converter'>
<h1 style={{fontSize: '1.7rem'}}>Currency Converter</h1>
<input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} name="inputAmount"/>
<p className='title'> Start Currency</p>
<select onChange={(e)=>setFromCurrency(e.target.value)}>
<option value='USD'>USD</option>
<option value="EUR">EUR</option>
<option value="GBP">GBP</option>
<option value='JPY'>JPY</option>
</select>
<p className='title'>Target Currency</p>
<select onChange={e => setToCurrency(e.target.value)} >
<option value='EUR'>EUR</option>
<option value="USD">USD</option>
<option value="GBP">GBP</option>
<option value='JPY'>JPY</option>
</select>
<p>Converted Amount: <span>{conversion}</span></p>
</div>)
}