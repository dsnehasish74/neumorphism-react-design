import styled from 'styled-components'
const Container=styled.div`
    background-color:${props=> props.bg? props.bg : "#e0e0e0"};
    width:${props=> props.width? props.width:"100%"};
    height:${props=>props.height? props.height:"100vh"};
`

export default Container;