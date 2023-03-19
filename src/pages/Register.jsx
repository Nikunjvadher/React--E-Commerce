import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5) , 
        rgba(255,255,255,0.5) , 
    ) ;

    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #e6dfdf;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    margin-top: 10px;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    /* margin: 20px 10px; */
    padding: 10px;
    outline: none;
    border-radius: 10px;
    border: none;
`
const Agreement = styled.span`
    font-size: 12px;
    
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 20px 15px;
    background-color: teal;
    color: white;
    cursor: pointer;
`



const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm Password"/>
                <Agreement>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ratione molestiae, aliquam aspernatur nobis officiis nihil vel enim quibusdam iste!
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register