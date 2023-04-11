import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { publicRequest } from "../requestMethod"
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"


const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
    flexDirection: "column",
    padding: "15px",
})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({
    height: "50vh",
})}
    `
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({
    padding: "0 5px ",

})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({
    width: "100%",
})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;

`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;

`
const FilterSizeOptions = styled.option`

`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
    width: "100%",
})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    /* justify-content: space-between; */

`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 7px;
`
const Button = styled.button`
    padding: 15px;
    border: 3px solid teal;
    background-color: #fff;
    cursor: pointer;
    font-weight: 500;
    transition: all .1s ease-in;

    &:hover{
        background-color: teal;
        color: white;
    }
`

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await publicRequest.get("/products/find/" + id)
                setProduct(response.data)
            } catch (error) {

            }
        }
        getProduct();
    }, [id])

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        dispatch(
            addProduct({ ...product, quantity, color, size })
            // addProduct({product,quantity , price:product.price*quantity})
        )

    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>{product.price}</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color: </FilterTitle>
                            {product.color?.map((color) => (
                                <FilterColor color={color} key={color} onClick={() => setColor(color)}></FilterColor>
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                {product.size?.map((size) => (
                                    <FilterSizeOptions key={size} onChange={(e) => setSize(e.target.value)}>{size}</FilterSizeOptions>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product