// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(#161617, #0b0c1e, #3c2940);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Img = styled.img`
  width: 22%;
@media screen and (min-width:768px){
  width:8%;
}
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #e2e8f0;
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
`
export const Button = styled.button`
  background-color: #06b6d4;
  font-size:15px;
  font-family:"Roboto";
  height: 38px;
  width: 85px;
  color: #e2e8f0;
  cursor: pointer;
  outline: none;
  border-width: 0px;
  border-radius: 8px;
  margin-top: 100px;
`
