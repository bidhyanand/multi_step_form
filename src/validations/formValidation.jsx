import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// importing the schema
import {
    passwordSchema,
    firstNameSchema,
    lastNameSchema,
    emailSchema,
    confirmPasswordSchema,
    addressLine1Schema,
    addressLine2Schema,
    citySchema,
    stateSchema,
    zipCodeSchema,
    schoolNameSchema,
    degreeSchema,
    fieldOfStudySchema,
    gradeSchema,
} from "../schema/form";

export const formValidation = yupResolver(
    yup.object().shape({
        password: passwordSchema,
        firstName: firstNameSchema,
        lastName: lastNameSchema,
        email: emailSchema,
        confirmPassword: confirmPasswordSchema,
    })
);

export const addressValidation = yupResolver(
    yup.object().shape({
        addressLine1: addressLine1Schema,
        addressLine2: addressLine2Schema,
        city: citySchema,
        state: stateSchema,
        zipCode: zipCodeSchema,
    })
);


export const educationValidation = yupResolver(
    yup.object().shape({
        schoolName: schoolNameSchema,
        degree: degreeSchema,
        fieldOfStudy: fieldOfStudySchema,
    })
);
