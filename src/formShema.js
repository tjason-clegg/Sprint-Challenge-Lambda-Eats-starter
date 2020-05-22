import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().min(2).required("Name is a required field"),
  size: yup
    .string()
    .oneOf(["Small", "Medium", "Large"])
    .required("Please select a size"),
  sauce: yup
    .string()
    .oneOf(["red", "garlic", "bbq", "spinach"])
    .required("Please select a sauce"),
});
export default formSchema;
