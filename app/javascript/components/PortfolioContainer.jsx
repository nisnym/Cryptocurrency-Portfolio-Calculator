import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { Calculate } from './Calculate'
import { Search } from './Search'
import  { Portfolio }  from './Portfolio'

export const PortfolioContainer = () => {
  const [portfolio, setPortfolio] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [activeCurrency, setActiveCurrency] = useState(null)
  const [amount, setAmount] = useState(0)


  const handleChange = (e) => {
    axios.post('/search', {
      search: e.target.value
    })
    .then( (data) => {
      // setSearchResults([...data.data.currencies])
      setSearchResults([...data.data.currencies])
    })
    .catch( (err) => console.log(err))

    console.log(searchResults)
  }

  const handleSelect = (curr, e) => {
    e.preventDefault()

    const activeCurr = searchResults.find( item => item.id == curr.id)

    setActiveCurrency(activeCurr)
    setSearchResults([])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let currency = activeCurrency
    let searchamount = amount

    axios.post('/calculate', {
      id: currency.id,
      amount: searchamount
    })
    .then( (data) => {
      setAmount('')
      setActiveCurrency(null)
      setPortfolio([...portfolio, data.data])
    })
    .catch( (err) => console.log(err))
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const searchOrCalculate = activeCurrency ?
    <Calculate
      handleChange={handleAmount}
      handleSubmit={handleSubmit}
      active_currency={activeCurrency}
      amount={amount}
    /> :
    <Search
      handleSelect={handleSelect}
      searchResults={searchResults}
      handleChange={handleChange} />
  return (
    <div className='grid'>
    <div className='left'>
      {searchOrCalculate}
    </div>
    <div className="right">
          <Portfolio portfolio={portfolio}/>
    </div>
    </div>
  )
}
