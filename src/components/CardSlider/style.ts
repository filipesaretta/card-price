import styled from "styled-components";
import iconSlider from "../../assets/icon-slider.svg";

export const Card = styled.div`
  max-width: 500px;
  position: relative;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  margin: 0 1rem;

  @media (min-width: 525px) {
    width: 500px;
  }
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

export const SliderSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
`;

export const PageViews = styled.p`
  grid-column: 1 / -1;
  grid-row: 1;
  justify-self: center;
  text-transform: uppercase;

  @media (min-width: 525px) {
    justify-self: start;
    grid-column: 1;
  }
`;

export const Slider = styled.div`
  grid-column: 1 / -1;
  grid-row: 2;
  height: 3rem;
  display: grid;
  align-items: center;

  input {
    -webkit-appearance: none;
    appearance: none;
    height: 0.875rem;
    background-color: ${(props) => props.theme.cyan300};
    border-radius: 8px;
    width: 100%;

    &::-webkit-slider-thumb {
      background: url(${iconSlider}) no-repeat center;
      position: relative;
      -webkit-appearance: none;
      appearance: none;
      height: 2.2rem;
      width: 2.2rem;
      border-radius: 100%;
      background-color: ${(props) => props.theme.cyan500};
    }
  }
`;

export const Price = styled.p`
  grid-column: 1 / -1;
  grid-row: 3;
  justify-self: center;

  @media (min-width: 525px) {
    grid-row: 1;
    justify-self: end;
    grid-column: 2;
  }
`;

export const PaymentToggle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  font-size: 0.875rem;
  color: ${(props) => props.theme.grayBlue800};

  @media (min-width: 575px) {
    gap: 1rem;
  }
  p {
    line-height: 1.8;
  }

  p span {
    padding: 4px 6px;
    border-radius: 15px;
    color: ${(props) => props.theme.red300};
    font-weight: bold;
    background-color: #ff8c6640;
  }
`;

export const Toggle = styled.label`
  position: relative;
  width: 45px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + span:before {
    transform: translateX(22px);
  }

  input:checked + span {
    background-color: ${(props) => props.theme.cyan500};
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 15px;

    &:before {
      position: absolute;
      content: "";
      height: 15px;
      width: 15px;
      left: 4px;
      bottom: 3px;
      background-color: white;
      transition: 300ms ease-in;
      border-radius: 50%;
      background-color: ${(props) => props.theme.white};
    }
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  margin-top: 3rem;
  padding-bottom: 1rem;

  @media (min-width: 525px) {
    grid-template-columns: 1fr 1fr;
  }

  button {
    background-color: ${(props) => props.theme.grayBlue800};
    border: none;
    color: ${(props) => props.theme.blue500};
    border-radius: 50px;
    height: 50px;
    width: 80%;
    justify-self: center;
    align-self: center;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: 525px) {
      align-items: flex-start;
      gap: 0.5rem;
    }

    span {
      display: grid;
      grid-template-columns: max-content 1fr;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;
