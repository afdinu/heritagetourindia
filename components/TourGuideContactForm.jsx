
"use client";

import { useState } from "react";

const ACCESS_KEY = "100cf659-8c54-4db1-b64f-cdf48e8708e4";

export default function TourGuideContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;

    setIsSubmitting(true);
    setStatus("");
    setStatusType("");

    try {
      const formData = new FormData(form);

      formData.set("access_key", ACCESS_KEY);
      formData.set(
        "subject",
        "New Tour Guide Service Enquiry"
      );
      formData.set("from_name", "Rajasthan Tour Guide Website");

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus(
          "Thank you! Your travel enquiry has been submitted successfully. Our team will contact you soon."
        );
        setStatusType("success");
        form.reset();
      } else {
        setStatus(
          data.message ||
            "Unable to submit your enquiry. Please try again."
        );
        setStatusType("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus(
        "Something went wrong. Please check your internet connection and try again."
      );
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="tour-guide-contact-form"
      onSubmit={handleSubmit}
      method="POST"
      className="contact-form-items"
      aria-label="Tour guide service enquiry form"
    >
      <input
        type="hidden"
        name="access_key"
        value={ACCESS_KEY}
      />

      <input
        type="checkbox"
        name="botcheck"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="form-clt">
            <label htmlFor="contact-full-name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="contact-full-name"
              placeholder="Your Full Name"
              autoComplete="name"
              required
              maxLength={120}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-clt">
            <label htmlFor="contact-phone">
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              name="phone"
              id="contact-phone"
              placeholder="Phone with Country Code"
              autoComplete="tel"
              required
              maxLength={40}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-clt">
            <label htmlFor="contact-email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="contact-email"
              placeholder="Your Email Address"
              autoComplete="email"
              required
              maxLength={254}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-clt">
            <label htmlFor="contact-service">
              Interested Service
            </label>
            <select
              name="interested_service"
              id="contact-service"
              required
              defaultValue=""
              disabled={isSubmitting}
            >
              <option value="" disabled>
                Select a Service
              </option>
              <option value="Rajasthan Tour Packages">
                Rajasthan Tour Packages
              </option>
              <option value="Private Tour Guide">
                Private Tour Guide
              </option>
              <option value="Golden Triangle Tour">
                Golden Triangle Tour
              </option>
              <option value="Rajasthan Wildlife Safari">
                Rajasthan Wildlife Safari
              </option>
              <option value="Luxury Rajasthan Tour">
                Luxury Rajasthan Tour
              </option>
              <option value="Horse Riding Tour">
                Horse Riding Tour
              </option>
              <option value="Custom Rajasthan Tour">
                Custom Rajasthan Tour
              </option>
              <option value="Car and Driver Service">
                Car and Driver Service
              </option>
              <option value="Other Enquiry">
                Other Enquiry
              </option>
            </select>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-clt">
            <label htmlFor="contact-travel-date">
              Expected Travel Date (Optional)
            </label>
            <input
              type="date"
              name="travel_date"
              id="contact-travel-date"
              min={new Date().toLocaleDateString("en-CA")}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-clt">
            <label htmlFor="contact-travelers">
              Number of Travelers (Optional)
            </label>
            <input
              type="number"
              name="number_of_travelers"
              id="contact-travelers"
              placeholder="Number of Travelers"
              min="1"
              max="100"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-clt">
            <label htmlFor="contact-message">
              Your Travel Requirements
            </label>
            <textarea
              name="message"
              id="contact-message"
              rows={5}
              placeholder="Tell us about your preferred destinations, travel dates, tour duration, and any special requirements..."
              required
              maxLength={3000}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="col-lg-12">
          {status && (
            <div
              role={statusType === "error" ? "alert" : "status"}
              aria-live="polite"
              style={{
                padding: "14px 18px",
                borderRadius: "6px",
                fontSize: "15px",
                lineHeight: "1.6",
                backgroundColor:
                  statusType === "success"
                    ? "#e8f7ed"
                    : "#fdeaea",
                color:
                  statusType === "success"
                    ? "#176534"
                    : "#b42318",
              }}
            >
              {status}
            </div>
          )}
        </div>

        <div className="col-lg-8">
          <button
            type="submit"
            className="theme-btn"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting
              ? "Sending Enquiry..."
              : "Send Tour Enquiry"}
          </button>
        </div>
      </div>
    </form>
  );
}
