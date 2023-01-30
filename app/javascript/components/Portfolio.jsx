import React from 'react'
import { PortfolioItem } from './PortfolioItem'


export const Portfolio = (props) => {
    const portfolioItems = props.portfolio.map( (item, index) => <PortfolioItem key={index} item={item}/>)
    const total = props.portfolio.reduce( (total, curr) => total + curr.value, 0)
    const formatted_total = total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  return (
    <div>
    <div className="portfolio-value">
      <div className="portfolio-value--header">Your Total Portfolio Value Is:</div>
      <div className="portfolio-value--content">${formatted_total}</div>
    </div>
    <div className="portfolio-items">
      {portfolioItems}
    </div>
  </div>
  )
}
