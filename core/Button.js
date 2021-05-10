import styled from 'styled-components';
import {colorLuminance} from './util.js'
const Button =styled.button `
cursor: pointer;
padding: ${props=> props.padding_ud?props.padding_ud:"10px"} ${props=>props.padding_rl? props.padding_rl:"20px"};
border: none;
border-radius: ${props=> props.radius? props.radius : "5px"};;
background-color: ${props=> props.bg? props.bg : "#e0e0e0"};
transition: all 0.1s ease-in-out;
box-shadow:  5px 5px 20px ${props=>colorLuminance(props.container_bg,-1*0.15)},
-5px -5px 20px  ${props=>colorLuminance(props.container_bg,0.15)};

&:focus{
  box-shadow: inset 1px 1px 2px ${props=>colorLuminance(props.container_bg,-1*0.15)}, inset -1px -1px 2px ${props=>colorLuminance(props.container_bg,0.15)};
}
`

export default Button;