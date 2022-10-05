import {
  Card,
  PriceSection,
  SliderSection,
  PageViews,
  Slider,
  Price,
  PaymentToggle,
  Toggle,
} from "./style";

export function CardSlider() {
  return (
    <Card>
      <SliderSection>
        <PriceSection>
          <PageViews>100k PAGEVIEWS</PageViews>
          <Slider>Slider</Slider>
          <Price>
            <span>$16.00</span>/month
          </Price>
        </PriceSection>
        <PaymentToggle>
          <span>Monthly Billing</span>
          <Toggle></Toggle>
          <span>Yearly Billing 25% discount</span>
        </PaymentToggle>
      </SliderSection>
    </Card>
  );
}
