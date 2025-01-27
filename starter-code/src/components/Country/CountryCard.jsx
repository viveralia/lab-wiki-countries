import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({ country }) => {
  const { name, capital, area, borders } = country
  return (
    <>
      <h1>{name.common}</h1>
      <table className='table'>
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borders.map((border, i) => (
                  <li key={i}>
                    <Link to={border}>{border}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default CountryCard
