import styled from 'styled-components'
const Typography=styled.div`
    color: ${props=> props.color? props.color:"black"};
    text-shadow: 1px 1px 0 ${props=> props.shadow? props.shadow:"#fff"};
`

export default Typography;