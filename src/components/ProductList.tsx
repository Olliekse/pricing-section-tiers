import styled from "styled-components";

const Ul = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const Li = styled.li`
  padding: 16px 16px;
  list-style: none;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
  box-shadow: 0px 1px 2px 0 rgb(0 0 0 / 0.05);

  @media (min-width: 768px) {
    padding: 32px;
  }

  @media (min-width: 1440px) {
    max-width: 384px;
  }
`;

const H2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #171717;
  margin: 0;
  padding-bottom: 8px;
`;

const Checkmark = styled.span`
  display: flex;
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #525252;
  margin: 0;
  display: flex;
  align-items: center;
`;

const MonthText = styled.p`
  align-items: end;
  margin: 0;
`;

const Span = styled.span`
  font-weight: 600;
  font-size: 48px;
  line-height: 48px;
  color: #171717;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 32px 0;
`;

const Button = styled.button`
  padding: 12px 0;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #171717;
  background-color: transparent;
  width: 100%;
  border-radius: 4px;
  border-width: 0.5px;
  border-style: solid;
  border-color: #e5e5e5;
  box-shadow: 0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.1);
  cursor: pointer;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #fafafa;
  }

  &:disabled {
    background-color: #e6e6e6;
    color: #a3a3a3;
  }

  &:focus-visible {
    outline: 3px solid
      rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
  }
`;

const FeaturesContainerBasic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    min-height: 180px;
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    min-height: 300px;
  }
`;

const FeaturesContainerPremium = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    min-height: 180px;
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    min-height: 324px;
  }
`;

const MostPopularContainer = styled.li`
  list-style: none;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: #4f46e5;
  box-shadow: 0px 25px 50px -12px rgb(0 0 0 / 0.25);
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }
  @media (min-width: 1440px) {
    max-width: 384px;
    padding: 0 0 32px 32px;
  }
`;

const MostPopularBanner = styled.div`
  background-color: #eef2ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 8px;
  margin: 0 -16px 16px;
  border-radius: 8px 8px 0 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #4338ca;

  @media (min-width: 768px) {
    margin: 0 0 32px -32px;
  }
`;

const MostPopularPriceMonth = styled.p`
  color: #4338ca;
  margin: 0;
`;

const MostPopularPriceNumber = styled.span`
  font-weight: 600;
  font-size: 48px;
  line-height: 48px;
  color: #4338ca;
`;

const MostPopularFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    min-height: 180px;
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    min-height: 264px;
  }
`;

const MostPopularButton = styled.button`
  padding: 12px 0;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background-color: #4338ca;
  width: 100%;
  border-radius: 4px;
  border-width: 0.5px;
  border-style: solid;
  border-color: #e5e5e5;
  box-shadow: 0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.1);
  cursor: pointer;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #3730a3;
  }

  &:disabled {
    background-color: #e6e6e6;
    color: #a3a3a3;
  }
  &:focus-visible {
    outline: 3px solid
      rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
  }
  @media (min-width: 1440px) {
    width: 90%;
  }
`;

interface ProductListProps {
  planSelection: "monthly" | "annually";
}

interface PriceInfo {
  monthly: number;
  annually: number;
  annualTotal: number;
}

const PRICE_INFO: Record<string, PriceInfo> = {
  basic: {
    monthly: 9.99,
    annually: 6.99,
    annualTotal: 84,
  },
  standard: {
    monthly: 19.99,
    annually: 15.99,
    annualTotal: 192,
  },
  premium: {
    monthly: 29.99,
    annually: 25.99,
    annualTotal: 312,
  },
};

function ProductList({ planSelection }: ProductListProps) {
  const getPrice = (plan: keyof typeof PRICE_INFO) => {
    return PRICE_INFO[plan][planSelection];
  };

  const getAnnualTotal = (plan: keyof typeof PRICE_INFO) => {
    return PRICE_INFO[plan].annualTotal;
  };

  return (
    <Ul>
      <Li>
        <H2>Basic plan</H2>
        <Paragraph>Access to a curated selection of abstract images</Paragraph>
        <PriceContainer>
          <MonthText>
            <Span>${getPrice("basic")}</Span>/ month
          </MonthText>
          {planSelection === "monthly" ? (
            <Paragraph>Billed monthly</Paragraph>
          ) : (
            <Paragraph>Billed annually (${getAnnualTotal("basic")})</Paragraph>
          )}
        </PriceContainer>
        <FeaturesContainerBasic>
          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            Standard quality images
          </Paragraph>

          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            Limited to personal use
          </Paragraph>
          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            Email support
          </Paragraph>
        </FeaturesContainerBasic>
        <Button>Buy now</Button>
      </Li>

      <MostPopularContainer>
        <MostPopularBanner>
          <span>Most Popular</span>
        </MostPopularBanner>
        <H2>Standard plan</H2>
        <Paragraph>Next-level Integrations, priced economically</Paragraph>
        <PriceContainer>
          <MostPopularPriceMonth>
            <MostPopularPriceNumber>
              ${getPrice("standard")}
            </MostPopularPriceNumber>
            / month
          </MostPopularPriceMonth>
          {planSelection === "monthly" ? (
            <Paragraph>Billed monthly</Paragraph>
          ) : (
            <Paragraph>
              Billed annually (${getAnnualTotal("standard")})
            </Paragraph>
          )}
        </PriceContainer>
        <MostPopularFeaturesContainer>
          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            Expanded library with more diverse abstract images
          </Paragraph>
          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            High-resolution images available
          </Paragraph>
          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            Suitable for commercial use
          </Paragraph>
          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            Priority email support
          </Paragraph>
          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            Advanced analytics
          </Paragraph>
        </MostPopularFeaturesContainer>
        <MostPopularButton>Buy now</MostPopularButton>
      </MostPopularContainer>

      <Li>
        <H2>Premium plan</H2>
        <Paragraph>Experience limitless living for power users</Paragraph>
        <PriceContainer>
          <MonthText>
            <Span>${getPrice("premium")}</Span>/ month
          </MonthText>
          {planSelection === "monthly" ? (
            <Paragraph>Billed monthly</Paragraph>
          ) : (
            <Paragraph>
              Billed annually (${getAnnualTotal("premium")})
            </Paragraph>
          )}
        </PriceContainer>
        <FeaturesContainerPremium>
          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            Full access to the entire image library, including exclusive content
          </Paragraph>
          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            Highest quality images, including premium collections
          </Paragraph>
          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            Commercial and resale rights
          </Paragraph>
          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            Dedicated customer support line
          </Paragraph>
          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            24/7 support response time
          </Paragraph>
          <Paragraph>
            <Checkmark>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M19.9004 7.39258L10 17.292L4.34375 11.6348L5.05078 10.9277L10.001 15.8779L19.1934 6.68555L19.9004 7.39258Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
            </Checkmark>
            Advanced analytics and insights
          </Paragraph>
        </FeaturesContainerPremium>
        <Button>Buy now</Button>
      </Li>
    </Ul>
  );
}

export default ProductList;
