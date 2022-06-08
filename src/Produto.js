import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Produto = () => {
  const params = useParams()
  const location = useLocation()
  console.log(location)

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  )
}

export default Produto
