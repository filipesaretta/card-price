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
import { FormEvent, useEffect, useState } from "react";

// interface RatesProps {
//   id: string;
//   size: number;
//   price: number;
// }

export function CardSlider() {
  function getScreenSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  const [screenWidth, setScreenWidth] = useState(getScreenSize());

  useEffect(() => {
    function handleScreenResize() {
      setScreenWidth(getScreenSize());
    }

    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  const min = "100000";
  const max = "1000000";
  const [pageViews, setPageViews] = useState(min);

  function handleSliderPageViews(e: FormEvent) {
    const target = e.target as HTMLInputElement;

    setPageViews(target.value);
  }

  function formatPageViewNumber() {
    const pageView = Number(pageViews) / 1000;
    if (pageView > 999) {
      return "1M+";
    } else {
      return `${pageView}k`;
    }
  }

  const [isAnnual, setIsAnnual] = useState(false);

  const rates = [
    {
      id: "SMALL",
      size: 100,
      price: 16,
    },
    {
      id: "MEDIUM",
      size: 250,
      price: 32,
    },
    {
      id: "BIG",
      size: 500,
      price: 60,
    },
  ];

  function handleMonthlyToggle() {
    return isAnnual ? setIsAnnual(false) : setIsAnnual(true);
  }

  function priceRange() {
    const SMALL = 100;
    const MEDIUM = 250;
    const BIG = 500;
    const ENTERPRISE = 1000;

    const pageView = Number(pageViews) / 1000;

    function result(price: number) {
      const result = price;
      return isAnnual
        ? Math.floor(result * 12 - ((result * 12) / 100) * 25)
        : price;
    }

    if (pageView >= SMALL && pageView < MEDIUM) {
      const price = rates.find((item) => item.size === SMALL)?.price;
      if (price) {
        return `$${result(price)} ${isAnnual ? "/yearly" : "/monthly"}`;
      }
    }
    if (pageView >= MEDIUM && pageView < BIG) {
      const price = rates.find((item) => item.size === MEDIUM)?.price;
      if (price) {
        return `$${result(price)} ${isAnnual ? "/yearly" : "/monthly"}`;
      }
    }
    if (pageView >= BIG && pageView < ENTERPRISE) {
      const price = rates.find((item) => item.size === BIG)?.price;

      if (price) {
        return `$${result(price)} ${isAnnual ? "/yearly" : "/monthly"}`;
      }
    }

    return "Contact us";
  }

  return (
    <Card>
      <SliderSection>
        <PriceSection>
          <PageViews>{formatPageViewNumber()}</PageViews>
          <Slider>
            <span>
              <input
                name="slider"
                type="range"
                min={min}
                max={max}
                step={10000}
                onChange={handleSliderPageViews}
              />
            </span>
          </Slider>
          <Price>
            <span>{priceRange()}</span>
          </Price>
        </PriceSection>
        <PaymentToggle>
          <p>Monthly Billing</p>
          <Toggle>
            <input type="checkbox" onClick={handleMonthlyToggle} />
            <span></span>
          </Toggle>
          <p>
            Yearly Billing{" "}
            <span>
              {screenWidth.innerWidth > 525 ? " 25% discount" : "-25%"}
            </span>
          </p>
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
