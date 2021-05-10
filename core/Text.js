import styled from 'styled-components'
import {colorLuminance} from './util.js'
const Text=styled.button`
    color: ${props=> props.color? props.color:"black"};
    outline: none;
    font-size: ${props=> props.fontSize? props.fontSize:"16px"};
    font-weight: ${props=> props.fontWeight? props.fontWeight:500};
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    padding: ${props=> props.padding? props.padding:"5px"};
    ${props=> props.clicked?`box-shadow: inset -2px -2px 5px ${colorLuminance(props.bg,-1*0.15)},inset  2px 2px 5px ${colorLuminance(props.bg,1*0.15)};`:null}
    &:focus{
        ${props=> props.low? `box-shadow: inset -1px -1px 3px ${colorLuminance(props.bg,-1*0.15)},inset  1px 1px 3px ${colorLuminance(props.bg,1*0.15)};`:`box-shadow: inset -2px -2px 5px ${colorLuminance(props.bg,-1*0.15)},inset  2px 2px 5px ${colorLuminance(props.bg,1*0.15)};`}
    }
`

export default Text;