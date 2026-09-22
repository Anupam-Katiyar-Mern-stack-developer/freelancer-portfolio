import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const useContactForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Lead form:", formData);

    // Later:
    // dispatch(createLead(formData))
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;