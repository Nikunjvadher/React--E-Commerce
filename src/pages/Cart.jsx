import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

const Container = styled.div`

`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

`;
const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;

`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
`
const ProductSize = styled.span`

`
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
    background-color: black;
    border: none;
    height: 1px;
    margin: 5px 0;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;

`
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "Total" && 600};
    font-size: ${props=> props.type === "Total" && 24}px;
`

const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Whishlist (2)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                        <Image src="data:image/jpeg;base64,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"/>
                        <Details>
                            <ProductName><b>Product: </b>Nike Shoes</ProductName>
                            <ProductId><b>ID: </b>Nike Shoes</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>SIZE: </b>32</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                        <ProductAmountContainer>
                            <Remove/>
                            <ProductAmount>2</ProductAmount>
                            <Add/>
                        </ProductAmountContainer>
                        <ProductPrice>3000</ProductPrice>
                    </PriceDetails>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src="data:image/jpeg;base64,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"/>
                        <Details>
                            <ProductName><b>Product: </b>Nike Shoes</ProductName>
                            <ProductId><b>ID: </b>Nike Shoes</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>SIZE: </b>32</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                        <ProductAmountContainer>
                            <Remove/>
                            <ProductAmount>2</ProductAmount>
                            <Add/>
                        </ProductAmountContainer>
                        <ProductPrice>3000</ProductPrice>
                    </PriceDetails>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src="data:image/jpeg;base64,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"/>
                        <Details>
                            <ProductName><b>Product: </b>Nike Shoes</ProductName>
                            <ProductId><b>ID: </b>Nike Shoes</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>SIZE: </b>32</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetails>
                        <ProductAmountContainer>
                            <Remove/>
                            <ProductAmount>2</ProductAmount>
                            <Add/>
                        </ProductAmountContainer>
                        <ProductPrice>3000</ProductPrice>
                    </PriceDetails>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>₹ 6500</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>₹ 50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>₹ -50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="Total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>₹ 6500</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
