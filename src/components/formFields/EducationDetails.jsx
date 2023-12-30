import { useContext, useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { educationValidation } from "../../validations/formValidation"
import { StepperContext } from "../contexts/StepperContext"
import FormRender from "../form/FormRender"
import StepperControl from "../stepper/StepperControl"

const formField = [
    {
        name: "schoolName",
        label: "School Name",
        type: "text",
        placeholder: "Enter your school name",
        required: true,
    },
    {
        name: "degree",
        label: "Degree",
        type: "select",
        placeholder: "Enter your Degree",
        required: true,
        defaultValue: "Select your Degree",
        options: [

            {
                value: "High School",
                label: "High School"
            },
            {
                value: "Bachelors",
                label: "Bachelors"
            },
            {
                value: "Masters",
                label: "Masters"
            },
            {
                value: "PhD",
                label: "PhD"
            }
        ]

    },


    {
        name: "fieldOfStudy",
        label: "Field of Study",
        type: "text",
        placeholder: "Enter your field of study",
        required: true,
    },

]

const defaultValues = {
    schoolName: "",
    degree: "",
    fieldOfStudy: "",
}


const EducationDetails = ({ handleClick, currentStep, steps }) => {
    const { userData, setUserData } = useContext(StepperContext)
    const [defaultValuesWithUserData, setDefaultValuesWithUserData] = useState("");
    // console.log(userData, "from the education field")
    const { control, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm({ defaultValues: defaultValuesWithUserData, resolver: educationValidation })

    useEffect(() => {
        if (userData) {
            setDefaultValuesWithUserData({
                schoolName: userData.schoolName,
                degree: userData.degree,
                fieldOfStudy: userData.fieldOfStudy,
            })
            setValue("schoolName", userData.schoolName)
            setValue("degree", userData.degree)
            setValue("fieldOfStudy", userData.fieldOfStudy)
        }
        else {
            setDefaultValuesWithUserData(defaultValues)
        }
    }, [userData])

    const onSubmit = (data) => {
        console.log("i am clicked")
        setUserData({ ...userData, ...data })
        handleClick("next")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                formField.map((formField) => {
                    return (
                        <Controller
                            key={formField.name}
                            control={control}
                            name={formField.name}
                            render={({ field: controllerField }) => {
                                return (
                                    <FormRender
                                        controllerField={controllerField}
                                        formField={formField}
                                        errors={errors}
                                        isSubmitting={isSubmitting}
                                    />
                                );
                            }}
                        />
                    )
                })
            }
            <div className="mt-5" >
                {currentStep !== steps.length && (
                    <StepperControl
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                )}
            </div>
        </form>
    )
}

export default EducationDetails