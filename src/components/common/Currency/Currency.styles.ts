import styled from 'styled-components'

export const ChartContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  width: 90%;
  max-width: 600px;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`

export const ChartTitle = styled.h2`
  margin-top: 0;
  text-align: center;
`