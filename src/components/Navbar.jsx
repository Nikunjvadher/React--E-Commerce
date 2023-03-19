import React from 'react'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({
      backgroundColor: 'red'

    })}
`

const Wrapper = styled.div`
   display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.div`

`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
  border: 0;
    outline: none;
`
const Center = styled.div`
    flex: 1;
    font-weight: bold;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1em;
`
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left className="left wrapper-div">
            <Language className="language">EN</Language>
            <SearchContainer>
              {/* <Input className='Input'/> */}
              <Input type="text" />
              <Search style={{color:'gray', fontSize:16}}/>
            </SearchContainer>
          </Left>
          <Center><h1>SHOPSY</h1></Center>
          <Right className="right wrapper-div">
            <MenuItems className="MenuItems">REGISTER</MenuItems>
            <MenuItems className="MenuItems">SIGN IN</MenuItems>
            <MenuItems className="MenuItems">
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