import { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 48px;
`;

const Paragraph = styled.p`
  text-align: center;
  color: #525252;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  margin: 0 0 40px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Span = styled.span`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #4338ca;
`;

const H1 = styled.h1`
  padding: 0 5px;
  margin: 0 0 20px;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #171717;

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }
`;

const Button = styled.button`
  padding: 10px 41.75px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #171717;
  background-color: transparent;
  border: 0.5px solid transparent;
  border-radius: 4px;

  &:focus {
    border-color: #e5e5e5;
    box-shadow: 0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.1);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 3px solid
      rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
  }

  &.active {
    border-color: #e5e5e5;
    box-shadow: 0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.1);
  }
  &:hover {
    cursor: pointer;
  }
`;

interface HeaderProps {
  setPlanSelection: (plan: "monthly" | "annually") => void;
}

function Header({ setPlanSelection }: HeaderProps) {
  const [activeButton, setActiveButton] = useState<"monthly" | "annually">(
    "monthly"
  );

  const handleClick = (plan: "monthly" | "annually") => {
    setActiveButton(plan);
    setPlanSelection(plan);
  };

  return (
    <StyledHeader>
      <Span>Pricing Tiers</Span>
      <H1>Fit for all your needs</H1>
      <Paragraph>
        Pick the plan that suits you today and step up as your demands grow -
        our flexible options have your journey mapped out.
      </Paragraph>
      <div>
        <Button
          className={activeButton === "monthly" ? "active" : ""}
          onClick={() => handleClick("monthly")}
        >
          Monthly
        </Button>
        <Button
          className={activeButton === "annually" ? "active" : ""}
          onClick={() => handleClick("annually")}
        >
          Annually
        </Button>
      </div>
    </StyledHeader>
  );
}

export default Header;
