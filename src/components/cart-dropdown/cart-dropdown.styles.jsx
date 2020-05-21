import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 380px;
  display: flex;
  flex-direction: column;
  padding: 50px 30px 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const CartDropdownCloseButton = styled(CustomButton)`
    margin-top: auto;
    background-color: transparent;
    border: none;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 24px;
    cursor: pointer;
    font-family: cursive;
    font-weight: bolder;
    color: black;
    padding: 0;
    min-width: 50px;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: overlay;
`;