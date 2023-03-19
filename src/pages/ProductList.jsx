import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  gap: 1em;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`

const Select = styled.select`
  padding: 10px;
  /* margin-right: 20px; */
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <Select>
            <Option disabled selected>Color</Option> 
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>  
          <Select>
            <Option disabled selected>Size</Option> 
            <Option>XS</Option>
            <Option>X</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>  
        </Filter>

        <Filter>
          <FilterText>Sort Products :</FilterText>
          <Select>
              <Option selected>Newest</Option>
              <Option >Price (Inc)</Option>
              <Option >Price (desc)</Option>
          </Select>  
        </Filter>
      </FilterContainer>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default ProductList