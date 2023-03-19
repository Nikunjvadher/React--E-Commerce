import React from 'react'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({
      height: "50px",
      overflow:'hidden'
    })}
`

const Wrapper = styled.div`
   display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    ${mobile({
      padding: "10px 0px",
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
      display: "none",
    })}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    margin-left: 5px;
    padding: 5px;
`
const Input = styled.input`
  border: 0;
    outline: none;
    ${mobile({
      width: "50px",
    })}
`
const Center = styled.div`
    flex: 1;
    font-weight: bold;
    text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
      fontSize: "24px",
    })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1em;
    ${mobile({
      justifyContent: "center",
      flex: 2,
      gap:'5px'
    })}
`
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
      fontSize: "12px",
      marginLeft:'10px'
    })}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language >EN</Language>
            <SearchContainer>
              <Input placeholder='Search' />
              <Search style={{color:'gray', fontSize:16}}/>
            </SearchContainer>
          </Left>
          <Center><Logo>SHOPSY</Logo></Center>
          <Right>
            <MenuItems >REGISTER</MenuItems>
            <MenuItems >SIGN IN</MenuItems>
            <MenuItems >
              <Badge badgeContent={4} color='primary'>
                <ShoppingCartOutlined/>
              </Badge>
            </MenuItems>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar