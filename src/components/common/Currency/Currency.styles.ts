import styled from 'styled-components'
import rem from '../../../utils/rem'
import theme from '../../../assets/styles/theme'
import { RiCloseCircleFill } from "react-icons/ri"

export const ChartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0; 
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000; 
  width: 100%;  
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ChartWrapper = styled.div`
  background: #fff;
  padding: 20px ;
  box-shadow: 0 2px 3px rgba(0,0,0,0.2);
  width: 100%;
  max-width: 600px;
  margin: 0 20px;
  position: relative;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
`

export const ChartTitle = styled.h2`
  margin-top: 0;
  text-align: center;
  color: ${theme.colors.primary};
  padding: 15px 20px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: ${rem(18)}
  }  
`

export const CloseIcon = styled(RiCloseCircleFill)`
  cursor: pointer;
  font-size: ${rem(34)}; 
  color: ${theme.colors.text};
`