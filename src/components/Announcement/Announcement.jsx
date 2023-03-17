import React from "react"
import styled from "styled-components"
// import App from "../Announcement/Announcement.css"

const Container = styled.div`
        height: 20px;
        background-color: teal;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 14px;
`


const Announcement = () => {
    return (
        <Container>
            Super Deal!! Free Shipping on Orderes Over 500
        </Container>
    )
}

export default Announcement