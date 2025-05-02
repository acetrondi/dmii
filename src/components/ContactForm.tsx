import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    sameAsPhone: true,
    interestedCourse: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      // If checkbox for same WhatsApp is checked, update WhatsApp number
      if (name === "sameAsPhone") {
        return {
          ...prev,
          [name]: (e.target as HTMLInputElement).checked,
          whatsapp: (e.target as HTMLInputElement).checked
            ? prev.phone
            : prev.whatsapp,
        };
      }

      // If updating phone and sameAsPhone is checked, update WhatsApp too
      if (name === "phone" && prev.sameAsPhone) {
        return {
          ...prev,
          [name]: value,
          whatsapp: value,
        };
      }

      // Normal update
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      // AKfycbxh68LkI-bDkxzLb0Wo7aqrTGIKoklp_ZQb_V5kpxK1A0FJmNgmdyO6L_8v7BZhfdDH;
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxh68LkI-bDkxzLb0Wo7aqrTGIKoklp_ZQb_V5kpxK1A0FJmNgmdyO6L_8v7BZhfdDH/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            whatsapp: formData.sameAsPhone ? formData.phone : formData.whatsapp,
            course: formData.interestedCourse,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.ok) {
        alert("Form submitted!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          whatsapp: "",
          sameAsPhone: true,
          interestedCourse: "",
        });

        toast({
          title: "Form Submitted Successfully!",
          description:
            "Thank you for your interest. We'll contact you shortly.",
        });
      } else {
        alert("Error submitting form.");
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Error submitting form.",
        description: "Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-course-accent focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-course-accent focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Contact Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-course-accent focus:border-transparent"
        />
      </div>

      <div>
        <div className="flex items-center space-x-2 mb-2">
          <input
            id="sameAsPhone"
            name="sameAsPhone"
            type="checkbox"
            checked={formData.sameAsPhone}
            onChange={handleChange}
            className="rounded text-course-main focus:ring-course-accent"
          />
          <label htmlFor="sameAsPhone" className="text-sm text-gray-700">
            WhatsApp number same as contact
          </label>
        </div>

        {!formData.sameAsPhone && (
          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              WhatsApp Number
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              required
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-course-accent focus:border-transparent"
            />
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="interestedCourse"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Course Interested In
        </label>
        <select
          id="interestedCourse"
          name="interestedCourse"
          required
          value={formData.interestedCourse}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-course-accent focus:border-transparent bg-white"
        >
          <option value="" disabled>
            Select a course
          </option>
          <option value="foundation">Foundation in Digital Marketing</option>
          <option value="intermediate">
            Intermediate in AI Digital Marketing
          </option>
          <option value="expert">Expert in Digital Marketing</option>
        </select>
      </div>

      <Button
        type="submit"
        className="w-full bg-course-main hover:bg-course-main/90 text-white py-3"
      >
        Submit Form <Check className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

export default ContactForm;
