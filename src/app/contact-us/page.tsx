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

interface StatusState {
  type: "success" | "error" | null;
  message: string;
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    studentID: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<StatusState>({ type: null, message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: null, message: "" });
    try {
      //TODO: replace with api call once contact endpoint exists
      console.log("Submitted Data: ", formData);
      await new Promise((resolve) => setTimeout(resolve, 8000));
      setStatus({ type: "success", message: "" });
      setFormData({ fullName: "", email: "", studentID: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "" });
    }
  }

  return (
    <div className="bg-brand-purple-light">
      {/* ---------------- TOP SECTION ---------------- */}
      <div className=" flex flex-col items-center py-10 ">
        <h2 className=" text-2xl font-extrabold uppercase text-brand-purple">Got a question?</h2>
        <h1 className=" text-7xl font-extrabold uppercase text-brand-purple [-webkit-text-stroke:5px_black] [paint-order:stroke_fill]">
          Contact Us
        </h1>
      </div>
      <div className="mx-auto max-w-6xl py-6 flex flex-col md:flex-row gap-20 mb-20 items-start justify-center">
        {/* ----------------  Contact details card ---------------- */}
        <div className="w-full md:w-auto">
          <TiltedCard rotation={0} bgColor="bg-white">
            <div className="mb-5 flex flex-col items-center">
              <div className="rounded-full border-2 border-black bg-brand-lime px-4 py-1 items-center ">
                <p className="font-bold uppercase text-xl text-black">Our Contact Details</p>
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
                <span className="font-semibold">Linkedin: </span>@switchrmit
              </ul>
            </ul>
          </TiltedCard>
        </div>

        {/* ---------------- Form ---------------- */}
        <div className="w-full md:flex-1 md:max-w-3xl">
          <TiltedCard bgColor="bg-brand-cream">
            <div className=" flex flex-col items-center">
              <div className="rounded-full border-2 border-black bg-brand-pink px-4 py-1 items-center ">
                <p className="font-bold uppercase text-xl text-black">Got a question?</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-6">
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
                      className="text-xs bg-white outline-2 outline-dashed outline-black w-full rounded p-4"
                    />
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
                      className="text-xs bg-white outline-2 w-full outline-dashed outline-black rounded p-4"
                    />
                  </label>

                  <label className="flex flex-col gap-1">
                    <span className="text-small font-semibold text-black">Student ID</span>
                    <input
                      type="text"
                      placeholder="Enter your RMIT student ID: "
                      name="studentID"
                      value={formData.studentID}
                      onChange={handleChange}
                      className="text-xs bg-white outline-2 outline-dashed outline-black w-full rounded p-4"
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
                    className="text-xs bg-white outline-2 outline-dashed outline-black rounded p-4 w-full resize-none"
                  />
                </label>
              </div>
              <ChunkyButton variant="primary" trailingSymbol="→">
                SUBMIT
              </ChunkyButton>
            </form>
          </TiltedCard>
        </div>
      </div>
    </div>
  );
}
