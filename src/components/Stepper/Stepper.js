import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Stepper from "react-stepper-horizontal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import AddressForm from "./forms/AddressForm";
import PlaceOrderForm from "./forms/PlaceOrderForm";
import "./stepper.css";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import { useNavigate } from "react-router-dom";

// Custom Styles
const Root = styled("div")(({ theme }) => ({
  width: "95%",
  backgroundColor: "transparent",
  textAlign: "center",
}));

const Instructions = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

// Functions

// // getStepLabels - To Get Step Labels
const getStepLabels = () => {
  return ["Personal Information", "Address Information", "Place Order"];
};

// // GetStepContent - Decide Which Form to show and gets it's data based on StepIndex
const getStepContent = (stepIndex, handleNext) => {
  switch (stepIndex) {
    case 0:
      return <PersonalInfoForm handleNext={handleNext} />;

    case 1:
      return <AddressForm handleNext={handleNext} />;

    case 2:
      return <PlaceOrderForm handleNext={handleNext} />;

    default:
      return "Unknown Steps";
  }
};

// Component
const StepperComponent = () => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0); // Set Active Step
  const stepLabels = getStepLabels(); // Get Step Labels

  // Handle Next Button
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Handle Reset Button
  const handleReset = () => {
    setActiveStep(0);
    navigate("/");
  };

  return (
    <Root>
      <div className="stepper">
        <Stepper
          steps={[
            { title: "Personal Information" },
            { title: "Address Information" },
            { title: "Place Order" },
          ]}
          activeStep={activeStep}
        />
      </div>
      <div>
        {activeStep === stepLabels.length ? (
          <div>
            <PlaceOrder />
            <Button onClick={handleReset}>Go To Homepage</Button>
          </div>
        ) : (
          <div>
            <Instructions>
              {getStepContent(activeStep, handleNext)}
            </Instructions>
          </div>
        )}
      </div>
    </Root>
  );
};
export default StepperComponent;
