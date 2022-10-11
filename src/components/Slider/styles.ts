import styled from "styled-components";
import iconSlider from "../../assets/icon-slider.svg";

export const SliderContainer = styled.div`
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
