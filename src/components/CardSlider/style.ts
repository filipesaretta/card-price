import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 4px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  border-radius: 8px;
`;

export const PriceSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: ${(props) => props.theme.grayBlue500};

  span {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme.grayBlue800};
  }
`;

export const SliderSection = styled.div``;

export const PageViews = styled.p`
  grid-column: 1;
  grid-row: 1;
`;

export const Slider = styled.div`
  grid-column: 1 / -1;
  grid-row: 2;
`;

export const Price = styled.p`
  grid-column: 2;
  grid-row: 1;
  justify-self: end;
`;

export const PaymentToggle = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 0.875rem;
  color: ${(props) => props.theme.grayBlue800};
`;

export const Toggle = styled.div`
  width: 45px;
  height: 20px;
  border-radius: 15px;
  background-color: gainsboro;
`;
