import { CardSlider } from "../components/Card";
import { HomeContainer, Title } from "./styles";

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
