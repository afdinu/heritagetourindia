
"use client";

import { useState } from "react";
import styles from "../public/assets/css/tourenquiryform.module.css";

const WEB3FORMS_ACCESS_KEY =
  "b82a0649-7afd-494f-8b37-a0198706e097";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export default function TourEnquiryForm({
  tourName = "",
  tourPath = "",
}) {
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

      formData.set("access_key", WEB3FORMS_ACCESS_KEY);
      formData.set("subject", `New Tour Enquiry - ${tourName}`);
      formData.set("from_name", "Tour Website Enquiry");

      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus(
          "Thank you! Your enquiry has been submitted successfully. We will contact you soon."
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
      console.error("Web3Forms submission error:", error);

      setStatus(
        "Something went wrong. Please check your connection and try again."
      );
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      method="post"
      aria-labelledby="tour-enquiry-heading"
    >
      <h2 id="tour-enquiry-heading">
        Let's Get in Touch
      </h2>

      {/* Web3Forms configuration */}
      <input
        type="hidden"
        name="access_key"
        value={WEB3FORMS_ACCESS_KEY}
      />

      <input
        type="hidden"
        name="tourPath"
        value={tourPath}
      />

      {/* Spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Selected Tour */}
      <label className={styles.tour}>
        <span className={styles.label}>
          Selected tour
        </span>

        <textarea
          name="tour"
          rows={2}
          value={tourName}
          readOnly
        />
      </label>

      <fieldset disabled={isSubmitting}>
        <label>
          <span className={styles.label}>
            Name
          </span>

          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Name"
            required
            maxLength={120}
          />
        </label>

        <label>
          <span className={styles.label}>
            Email
          </span>

          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            required
            maxLength={254}
          />
        </label>

        <label>
          <span className={styles.label}>
            Phone
          </span>

          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone"
            required
            maxLength={40}
          />
        </label>

        <label>
          <span className={styles.label}>
            Message
          </span>

          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            required
            maxLength={3000}
          />
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </fieldset>

      {/* Submission feedback */}
      {status && (
        <p
          role={statusType === "error" ? "alert" : "status"}
          aria-live="polite"
          style={{
            marginTop: "15px",
            padding: "12px",
            borderRadius: "6px",
            backgroundColor:
              statusType === "success" ? "#e8f7ed" : "#fdeaea",
            color:
              statusType === "success" ? "#176534" : "#b42318",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
        >
          {status}
        </p>
      )}
    </form>
  );
}
