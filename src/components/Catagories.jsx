import styled from "styled-components"
import { categories } from "../data"
import { mobile } from "../responsive"
import CategoriItem from "./CategoriItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({
      padding: "0px",
      flexDirection:'column'
    })}
`

const Catagories = () => {
  return (
    <Container>
        {categories.map((item)=> (
            <CategoriItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Catagories