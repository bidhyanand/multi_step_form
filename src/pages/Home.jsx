import { useContext, useEffect, useState } from "react"
import FormDetailCard from "../components/card/FormDetailCard"
import { StepperContext, UseContextProvider } from "../components/contexts/StepperContext"
import AddressDetail from "../components/formFields/AddressDetail"
import EducationDetails from "../components/formFields/EducationDetails"
import FinalConfirmation from "../components/formFields/FinalConfirmation"
import PersonalDetails from "../components/formFields/PersonalDetails"
import Stepper from "../components/stepper/Stepper"
const Home = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        setUserData(data);
    }, [currentStep]);

    const steps = [
        "Personal Details",
        "Address Details",
        "Education Details",
        "Confirm Details"
    ]

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <PersonalDetails handleClick={handleClick} currentStep={currentStep} steps={steps} />
            case 2:
                return <AddressDetail handleClick={handleClick} currentStep={currentStep} steps={steps} />
            case 3:
                return <EducationDetails handleClick={handleClick} currentStep={currentStep} steps={steps} />
            case 4:
                return <FinalConfirmation handleClick={handleClick} currentStep={currentStep} steps={steps} />
        }
    }



    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }
    return (
        <div className={`${userData ? "grid gap-4 grid-cols-2 w-full" : "mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2"}`}>
            {/* form display part start */}
            <div className="w-full mx-auto rounded-2xl bg-gray-200 pb-2 shadow-xl">
                {/* Stepper */}
                <div className="horizontal container mt-5 mb-10">
                    <Stepper steps={steps} currentStep={currentStep} />

                    <div className="my-10 p-10 ">
                        <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                    </div>
                </div>
            </div>
            {/* form display part end */}
            {/* next component start */}
            {
                userData && (
                    <div className="w-full mx-auto rounded-2xl bg-gray-200 pb-2 shadow-xl">
                        <FormDetailCard currentStep={currentStep} />
                    </div>
                )
            }
            {/* next component end */}
        </div>
    )
}

export default Home