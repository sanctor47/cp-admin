import React from 'react'
import styled from 'styled-components'
import { Chart } from './Chart'

const FilterableChart = ({data}) => {
  return (
    <Container>
        <Chart data={data}/>
    </Container>
  )
}

export default FilterableChart

const Container = styled.div`
    width: 90%;
    height: 400px;
    padding:1rem;
    border: 1px solid #ccc;
`