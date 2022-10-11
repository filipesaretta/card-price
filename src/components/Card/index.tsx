import { Card, SliderSection, PaymentToggle, Toggle, Details } from "./style";

import check from "../../assets/icon-check.svg";
import { useEffect, useState } from "react";
import { Slider } from "../Slider";

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

  const [isAnnual, setIsAnnual] = useState(false);

  function handleMonthlyToggle() {
    return isAnnual ? setIsAnnual(false) : setIsAnnual(true);
  }

  return (
    <Card>
      <SliderSection>
        <Slider isAnnual={isAnnual} />
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
