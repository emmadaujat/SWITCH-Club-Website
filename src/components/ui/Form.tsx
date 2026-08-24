import React, { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  studentID?: string;
  message: string;
}

export default function UserForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    studentID: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.InputEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData);
  };
}
