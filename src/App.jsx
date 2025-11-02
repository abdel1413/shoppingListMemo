import { useCallback, useMemo, useState } from 'react'

import './App.css'
import { CurrencyConverter } from './currencyconverterComp/CurrencyConverter'


const Items = [
  "Apples",
  "Bananas",
  "Strawberries",
  "Blueberries",
  "Mangoes",
  "Pineapple",
  "Lettuce",
  "Broccoli",
  "Paper Towels",
  "Dish Soap",
]

function App() {
  const [query, setQuery] = useState('') 
  const [selectedItems, setSelectedItems] = useState([])

  //use memo to memoize the filtered items
const filteredItems = useMemo(()=> Items.filter(item => {
  console.log('Filtering items...')
  return item.toLowerCase().includes(query.toLowerCase())}), [query])
  
//use callback to memoize the function
const toggleItem =useCallback((item)=>{
  setSelectedItems((prev)=>prev.includes(item)
  ? prev.filter(i =>i !==item)
  : [...prev, item])},[setSelectedItems])
      
  return (
    <>
      <div className="container">
          <h2 style={{textAlign: 'center'}}>Welcome to the Grocery Store</h2>
        <form>
           <label htmlFor="search">Search an Item </label>
        <input it='search'
          type="text" 
          placeholder="Search items..."
          aria-describedby='search-description'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
          <p id='search-description'>Please use the search box below to find items in your grocery list.</p>
           
        </form>
        <ul>
          {filteredItems.map((item, index) => {
             const isChecked = selectedItems.includes(item)
            return (
                  <li key={index}
                   style={{textDecoration: isChecked? "line-through": "none"}}>
                    <input type='checkbox'
                    checked={isChecked}
                     onChange={()=>toggleItem(item)}/>
                    {item}
                    </li>
          
                )})
          }
        </ul>
      </div>
     <div>
    
      <CurrencyConverter />
     </div>
    </>
  )
}

export default App
