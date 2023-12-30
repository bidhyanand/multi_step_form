import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StepperContext } from "../contexts/StepperContext";
import { addressValidation } from "../../validations/formValidation";
import FormRender from "../form/FormRender";
import StepperControl from "../stepper/StepperControl";

const formField = [
    {
        name: "addressLine1",
        label: "Address Line 1",
        type: "text",
        placeholder: "Enter your address line 1",
        required: true,
    },
    {
        name: "addressLine2",
        label: "Address Line 2",
        type: "text",
        placeholder: "Enter your address line 2",
    },
    {
        name: "city",
        label: "City",
        type: "text",
        placeholder: "Enter your city",
        required: true,
    },
    {
        name: "state",
        label: "State",
        type: "text",
        placeholder: "Enter your state",
        required: true,
    },
    {
        name: "zipCode",
        label: "Zip Code",
        type: "text",
        placeholder: "Enter your zip code",
        required: true,
    },
];

const defaultValues = {
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
};

const AddressDetail = ({ handleClick, currentStep, steps }) => {
    const [defaultValuesWithUserData, setDefaultValuesWithUserData] =
        useState("");
    console.log(defaultValuesWithUserData, "from the address field");
    const { userData, setUserData } = useContext(StepperContext);
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
    } = useForm({
        defaultValues: defaultValuesWithUserData,
        resolver: addressValidation,
    });

    useEffect(() => {
        if (userData.addressLine1) {
            setDefaultValuesWithUserData({
                addressLine1: userData.addressLine1 || "",
                addressLine2: userData.addressLine2 || "",
                city: userData.city || "",
                state: userData.state || "",
                zipCode: userData.zipCode || "",
            });

            setValue("addressLine1", userData.addressLine1 || "");
            setValue("addressLine2", userData.addressLine2 || "");
            setValue("city", userData.city || "");
            setValue("state", userData.state || "");
            setValue("zipCode", userData.zipCode || "");

        } else {
            setDefaultValuesWithUserData(defaultValues);
        }
    }, [userData]);

    const onSubmit = (data) => {
        console.log(data);
        setUserData({ ...userData, ...data });
        localStorage.setItem("userData", JSON.stringify({ ...userData, ...data }));
        handleClick("next");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {formField.map((formField) => (
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
            ))}
            <div className="mt-5">
                {currentStep !== steps.length && (
                    <StepperControl
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                )}
            </div>
        </form>
    );
};

export default AddressDetail;
