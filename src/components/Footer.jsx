import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props =>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;

`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;

`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
`
const Payment = styled.img`
    width: 50%;

`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SHOPSY</Logo>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias delectus, optio voluptatibus qui iure neque porro consectetur mollitia ipsam aut?</Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>USEFUL LINKS</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title></Title>
            <ContactItem><Room/> XYZ  , GUJARAT, INDIA</ContactItem>
            <ContactItem><Phone/>+1 23456 78910</ContactItem>
            <ContactItem><MailOutline/>XYZ@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/paymnt.png"/>
        </Right>
    </Container>
  )
}

export default Footer