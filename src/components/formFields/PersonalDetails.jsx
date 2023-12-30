import React, { useContext, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { formValidation } from '../../validations/formValidation'
import FormRender from '../form/FormRender'
import { StepperContext } from '../contexts/StepperContext'
import StepperControl from '../stepper/StepperControl'
const formField = [
    {
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter your first name",
        required: true,
    },
    {
        name: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Enter your last name",
        required: true,
    },
    {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
        required: true,
    },
    {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        required: true,
    },
    {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        placeholder: "Confirm your password",
        required: true,
    },
]

const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
}



const PersonalDetails = ({ handleClick, currentStep, steps }) => {
    const { userData, setUserData } = useContext(StepperContext)
    const [defaultValuesWithUserData, setDefaultValuesWithUserData] = useState("");
    const { control, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm({ defaultValues: defaultValuesWithUserData, resolver: formValidation })

    useEffect(() => {
        if (userData) {
            setDefaultValuesWithUserData({
                firstName: userData.firstName || '',
                lastName: userData.lastName || '',
                email: userData.email || '',
                password: userData.password || '',
                confirmPassword: userData.confirmPassword || '',
            });
            setValue("firstName", userData.firstName || ''); // pass setValue to the dependencies array and use it directly
            setValue("lastName", userData.lastName || '');
            setValue("email", userData.email || '');
            setValue("password", userData.password || '');
            setValue("confirmPassword", userData.confirmPassword || '');
        } else {
            setDefaultValuesWithUserData(defaultValues);
        }
    }, [userData]);


    const onSubmit = (data) => {
        console.log(data, "data")
        setUserData({ ...userData, ...data });
        localStorage.setItem("userData", JSON.stringify({ ...userData, ...data }))
        handleClick("next")

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {formField?.map((formField) => {
                    return (
                        <Controller
                            key={formField.name}
                            name={formField.name}
                            control={control}
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
                    );
                })}

            </div>
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

export default PersonalDetails