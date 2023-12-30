import * as yup from 'yup';

export const usernameSchema = yup.string().required('Username is required').min(3, 'Username must be at least 3 characters').max(20, 'Username must be less than 20 characters');
export const passwordSchema = yup.string().required('Password is required').min(6, 'Password must be at least 6 characters').max(20, 'Password must be less than 20 characters');
export const confirmPasswordSchema = yup.string().required('Confirm Password is required').oneOf([yup.ref('password'), null], 'Passwords must match');
export const emailSchema = yup.string().required('Email is required').email('Email is invalid');
export const firstNameSchema = yup.string().required('First Name is required').min(3, 'First Name must be at least 3 characters').max(20, 'First Name must be less than 20 characters');
export const lastNameSchema = yup.string().required('Last Name is required').min(3, 'Last Name must be at least 3 characters').max(20, 'Last Name must be less than 20 characters');


// for address
export const addressLine1Schema = yup.string().required('Address Line 1 is required').min(3, 'Address Line 1 must be at least 3 characters').max(20, 'Address Line 1 must be less than 20 characters');
export const addressLine2Schema = yup.string().required('Address Line 2 is required').min(3, 'Address Line 2 must be at least 3 characters').max(20, 'Address Line 2 must be less than 20 characters');
export const citySchema = yup.string().required('City is required').min(3, 'City must be at least 3 characters').max(20, 'City must be less than 20 characters');
export const stateSchema = yup.string().required('State is required').min(1, 'State must be at least 3 characters').max(20, 'State must be less than 20 characters');
export const zipCodeSchema = yup.string().required('Zip Code is required').min(3, 'Zip Code must be at least 3 characters').max(20, 'Zip Code must be less than 20 characters');


// education
export const schoolNameSchema = yup.string().required('School Name is required').min(3, 'School Name must be at least 3 characters').max(100, 'School Name must be less than 100 characters');
export const fieldOfStudySchema = yup.string().required('Field of Study is required').min(3, 'Field of Study must be at least 3 characters').max(20, 'Field of Study must be less than 20 characters');
export const gradeSchema = yup.string().required('Grade is required').min(3, 'Grade must be at least 3 characters').max(20, 'Grade must be less than 20 characters');
export const degreeSchema = yup.string().required('Degree is required').oneOf(['High School', 'Bachelors', 'Masters', 'PhD'], 'Degree is invalid');
