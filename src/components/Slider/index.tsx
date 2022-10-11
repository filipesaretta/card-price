import { FormEvent, useState } from "react";
import { PageViews, Price, PriceSection, SliderContainer } from "./styles";

interface props {
  isAnnual: boolean;
}
export function Slider({ isAnnual }: props) {
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
    <PriceSection>
      <PageViews>{formatPageViewNumber()}</PageViews>
      <SliderContainer>
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
      </SliderContainer>

      <Price>
        <span>{priceRange()}</span>
      </Price>
    </PriceSection>
  );
}
