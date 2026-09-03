"use client";

import TiltedCard from "@/components/ui/TiltedCard";
import ChunkyButton from "@/components/ui/ChunkyButton";
import UserForm from "@/components/ui/Form";
import { useState } from "react";

//TODO: MAKE A ROUTE FOR CONTACT FORM TO SEND TO SWITCH EMAIL

interface FormData {
  fullName: string;
  email: string;
  studentID?: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactUsPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    studentID: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear the fields error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // stop here, don't call the API
    }
    setStatus("submitting");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setFormData({ fullName: "", email: "", studentID: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="bg-brand-purple-light">
      {/* ---------------- TOP SECTION ---------------- */}
      <div className=" flex flex-col items-center py-10 ">
        <h2 className=" text-xl lg:text-2xl font-extrabold uppercase text-brand-purple">
          Got a question?
        </h2>
        <h1 className=" text-6xl lg:text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:4px_black] md:[-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          Contact Us
        </h1>
      </div>
      <div className="mx-auto max-w-6xl py-6 p-15 flex flex-col md:flex-row gap-10 mb-20 items-start justify-center">
        {/* ----------------  Contact details card ---------------- */}
        <div className="w-full md:w-auto">
          <TiltedCard rotation={0} bgColor="bg-white">
            <div className="mb-3 flex flex-col items-center">
              <div className="rounded-full border-2 border-black bg-brand-lime px-4 py-1 items-center ">
                <p className="font-bold uppercase text-md lg:text-lg text-black">
                  Our Contact Details
                </p>
              </div>
            </div>
            <ul className="list-disc ">
              <ul className="p-1">
                <span className="font-semibold">Email: </span>
                switch@rmit.com
              </ul>
              <ul className="p-1">
                {" "}
                <span className="font-semibold">Insta:</span> @switchrmit
              </ul>
              <ul className="p-1">
                <span className="font-semibold">LinkedIn: </span>@switchrmit
              </ul>
            </ul>
          </TiltedCard>
        </div>

        {/* ---------------- Form ---------------- */}
        <div className="w-full md:flex-1 md:max-w-3xl">
          <TiltedCard bgColor="bg-brand-cream">
            <div className=" flex flex-col items-center">
              <div className="rounded-full border-2 border-black bg-brand-pink px-4 py-1 items-center ">
                <p className="font-bold uppercase text-lg lg:text-xl text-black">Got a question?</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="p-5 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-10">
                {/* LEFT COLUMN: three fields stacked */}
                <div className="flex flex-col gap-5 md:w-1/2">
                  <label className="flex flex-col gap-1">
                    <span className="text-small font-semibold text-black">Full Name</span>
                    <input
                      type="text"
                      placeholder="Enter your full name: "
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className={`bg-white outline-2 outline-dashed rounded p-2 w-full ${
                        errors.fullName ? "outline-red-600" : "outline-black"
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-sm text-red-600">{errors.fullName}</span>
                    )}
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-small font-semibold text-black">Email</span>
                    <input
                      type="text"
                      placeholder="Enter your email address: "
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`bg-white outline-2 outline-dashed rounded p-2 w-full ${
                        errors.email ? "outline-red-600" : "outline-black"
                      }`}
                    />
                    {errors.email && <span className="text-sm text-red-600">{errors.email}</span>}
                  </label>

                  <label className="flex flex-col gap-1">
                    <span className="text-small font-semibold text-black">Student ID</span>
                    <input
                      type="text"
                      placeholder="Enter your RMIT student ID: "
                      name="studentID"
                      value={formData.studentID}
                      onChange={handleChange}
                      className="bg-white outline-2 outline-dashed outline-black rounded p-2 w-full"
                    />
                  </label>
                </div>

                {/* RIGHT COLUMN: message, fills remaining space */}
                <label className="flex flex-col gap-1 md:w-1/2">
                  <span className="font-medium text-black">Message</span>
                  <textarea
                    placeholder="Type your message: "
                    name="message"
                    value={formData.message}
                    required
                    onChange={handleChange}
                    rows={8}
                    className={`bg-white outline-2 outline-dashed rounded p-2 w-full resize-none ${
                      errors.message ? "outline-red-600" : "outline-black"
                    }`}
                  />
                  {errors.message && <span className="text-sm text-red-600">{errors.message}</span>}
                </label>
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-brand-purple text-white font-bold rounded-lg border-2 border-black p-4 shadow-[4px_4px_0px_#000] hover:bg-white hover:text-brand-purple transition disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "SUBMIT ★"}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-700">Thanks! We'll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-700">Something went wrong — please try again.</p>
              )}
            </form>
          </TiltedCard>
        </div>
      </div>
    </div>
  );
}
