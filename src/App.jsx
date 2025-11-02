import { useState } from 'react'

import './App.css'

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

  
  return (
    <>
      <div className="container">
          <h2>Welcome to the Grocery Store</h2>
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
          {Items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
          }
        </ul>
      </div>
     
    </>
  )
}

export default App
