import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'

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
  ${mobile({
      // width: "0 20px",
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start',
      width:'100%',
      gap: '0'

  })}
  /* width: 100%; */
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 0;
  flex: 6;
  ${mobile({
      fontSize: "18px",
      marginRight:'0'
    })}
`

const Select = styled.select`
  padding: 10px;
  /* margin-right: 20px; */
  width: 100%;
  flex: 2;

`
const Option = styled.option``

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState('newest')

  const handleFilters =(e) => {
    e.preventDefault();
    const  value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]:value
    })
  }
  console.log(filters);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <Select name="color" onChange={handleFilters} >
            <Option >Color</Option> 
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>  
          <Select name="size" onChange={handleFilters}>
            <Option >Size</Option> 
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
          <Select onChange={e=> setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="inc">Price (Inc)</Option>
              <Option value="desc">Price (desc)</Option>
          </Select>  
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort}/>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default ProductList