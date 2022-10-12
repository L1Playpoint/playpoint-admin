import React from 'react'
import './styles/style.css'

export default function Questionaires() {
  return (
    <div className='questionaire__container'>
      <h1 className='title'>Active Questionaires</h1>

      <div className="search__container">
      <i className="ri-search-line"></i> <input type="text" placeholder="Search Questionaires..."/>
      </div>
    </div>
  )
}
