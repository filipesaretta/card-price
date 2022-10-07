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

  const min = 0;
  const max = 1000000;
  const [pageViews, setPageViews] = useState(0);

  function handleSliderPageViews(e: FormEvent) {
    const target = e.target as HTMLInputElement;

    setPageViews(target.value);
  }

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
