import styled from 'styled-components';
import {colorLuminance} from './util.js'

const Div= styled.div`
${(props)=> props.inset ?`box-shadow: inset 20px 20px 60px ${colorLuminance(props.bg,-1*0.15)},
         inset -20px -20px 60px   ${colorLuminance(props.bg,1*0.15)};` :` box-shadow :20px 20px 60px ${colorLuminance(props.bg,-1*0.15)},-20px -20px 60px ${colorLuminance(props.bg,0.15)};`}


background-color: ${props=> props.bg? props.bg : "#e0e0e0"};
width: ${props => props.width ? props.width : "100px"};
height: ${props=> props.height ? props.height : "100px"};
padding: ${props=>props.padding ? props.padding: "10px"};
border-radius: ${props=> props.radius ? props.radius: "25px"};

${(props)=> props.circle ? `border-radius: 50%;`:null}
`

export default Div;