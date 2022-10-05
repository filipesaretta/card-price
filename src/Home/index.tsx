import styled from "styled-components";
import bgPattern from "../assets/bg-pattern.svg";
import bgCircles from "../assets/pattern-circles.svg";
import { CardSlider } from "../components/CardSlider";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${bgPattern});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  height: 50vh;
`;

const Title = styled.div`
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

export function Home() {
  return (
    <>
      <HomeContainer>
        <Title>
          <h1> Simple,traffic-based pricing</h1>
          <p>Sign-up for 30-day trial. No credit card required</p>
        </Title>
        <CardSlider />
      </HomeContainer>
    </>
  );
}
