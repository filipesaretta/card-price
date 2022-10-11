import styled from "styled-components";
import bgPattern from "../assets/bg-pattern.svg";
import bgCircles from "../assets/pattern-circles.svg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${bgPattern});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  height: 50vh;
`;

export const Title = styled.div`
  margin-top: 2rem;
  padding: 4rem;
  background: url(${bgCircles}) no-repeat top center;

  h1 {
    font-size: 1.5rem;
  }
  p {
    color: ${(props) => props.theme.grayBlue500};
  }
`;
