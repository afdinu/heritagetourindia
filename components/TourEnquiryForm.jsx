import styles from "../public/assets/css/tourenquiryform.module.css";



export default function TourEnquiryForm({
  tourName,
  tourPath,
  action,
}) {
  return (
    <form
      className={styles.form}
      action={action}
      method="post"
      aria-labelledby="tour-enquiry-heading"
    >
      <h2 id="tour-enquiry-heading">Let’s Get in Touch</h2>
      <input type="hidden" name="tourPath" value={tourPath} />
      <label className={styles.tour}>
        <span className={styles.label}>Selected tour</span>
        <textarea name="tour" rows={2} value={tourName} readOnly />
      </label>
      <fieldset >
        <label>
          <span className={styles.label}>Name</span>
          <input name="name" autoComplete="name" placeholder="Name" required maxLength={120} />
        </label>
        <label>
          <span className={styles.label}>Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="Email" required maxLength={254} />
        </label>
        <label>
          <span className={styles.label}>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="Phone" required maxLength={40} />
        </label>
        <label>
          <span className={styles.label}>Message</span>
          <textarea name="message" rows={5} placeholder="Message" required maxLength={3000} />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
      {/* {!action && <p>Online enquiries are unavailable. Please call us to enquire.</p>} */}
    </form>
  );
}
