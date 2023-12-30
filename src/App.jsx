import { useState } from "react";
import {
  StepperContext,
  UseContextProvider,
} from "./components/contexts/StepperContext";
import Account from "./components/steps/Account";
import Details from "./components/steps/Details";
import Contact from "./components/steps/Payment";
import Confirm from "./components/steps/Confirm";
import Stepper from "./components/stepper/Stepper";
import StepperControl from "./components/stepper/StepperControl";
import Payment from "./components/steps/Payment";
import Home from "./pages/Home";
import MainTable from "./dynamicTable/MainTable";
import DynamicForm from "./components/dynamicForm/DynamicForm";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formToggle, setFormToggle] = useState("normal");
  const steps = [
    "Account Info",
    "Personal Details",
    "Contact Details",
    "Confirm Details",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      case 4:
        return <Confirm />;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
      <div className="flex justify-center m-4 gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setFormToggle("normal")}
        >
          Normal Form
        </button>
        <button
          className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setFormToggle("modal")}
        >
          Form with one Modal
        </button>
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setFormToggle("table")}
        >
          Table Design
        </button>
      </div>
      {formToggle === "normal" ? (
        <>
          <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
            {/* Stepper */}
            <div className="horizontal container mt-5 mb-10">
              <Stepper steps={steps} currentStep={currentStep} />

              <div className="my-10 p-10 ">
                <UseContextProvider>
                  {displayStep(currentStep)}
                </UseContextProvider>
              </div>
            </div>

            {/* navigation button */}
            {currentStep !== steps.length && (
              <StepperControl
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
              />
            )}
          </div>
        </>
      ) : formToggle === "table" ? (
        <MainTable />
      ) : (
        <div className="flex justify-center m-4 gap-4">
          <Home />
        </div>
      )}

      <div className="w-full my-4 flex justify-center flex-col items-center">
        <h1 className="text-2xl font-bold text-center">Dynamic Form</h1>

        <div className="w-1/5 my-4">
          <DynamicForm />
        </div>
      </div>
    </>
  );
}

export default App;
