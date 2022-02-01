import * as yup from "yup";

export const signUpSchema = yup.object().shape({
    userName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(32).required()
});

export const signInSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(32).required()
});