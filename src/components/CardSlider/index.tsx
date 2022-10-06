import {
  Card,
  PriceSection,
  SliderSection,
  PageViews,
  Slider,
  Price,
  PaymentToggle,
  Toggle,
  Details,
} from "./style";

import check from "../../assets/icon-check.svg";

export function CardSlider() {
  return (
    <Card>
      <SliderSection>
        <PriceSection>
          <PageViews>100K PAGEVIEWS</PageViews>
          <Slider>
            <span>
              <input type="range" />
            </span>
          </Slider>
          <Price>
            <span>$16.00</span>/month
          </Price>
        </PriceSection>
        <PaymentToggle>
          <span>Monthly Billing</span>
          <Toggle>
            <input type="checkbox" />
            <span></span>
          </Toggle>
          <span>Yearly Billing 25% discount</span>
        </PaymentToggle>
      </SliderSection>
      <Details>
        <div>
          <span>
            <img src={check} alt="" /> Unlimited websites
          </span>
          <span>
            <img src={check} alt="" /> 100% data ownership
          </span>
          <span>
            <img src={check} alt="" /> Email reports
          </span>
        </div>
        <button>Start my trial</button>
      </Details>
    </Card>
  );
}
