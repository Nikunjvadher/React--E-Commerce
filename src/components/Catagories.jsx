import styled from "styled-components"
import { categories } from "../data"
import CategoriItem from "./CategoriItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    
`

const Catagories = () => {
  return (
    <Container>
        {categories.map((item)=> (
            <CategoriItem item={item}/>
        ))}
    </Container>
  )
}

export default Catagories