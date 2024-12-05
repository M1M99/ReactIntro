import styled from "styled-components"

function Header(){
    return(
        <header>
            <Headq>Header</Headq>
        </header>
    )
}

let Headq = styled.h1`
background-color: aqua;
`

export default Header