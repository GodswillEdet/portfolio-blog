import Image from "next/image";
import styles from "./Contact.module.scss";
const Contact: React.FC = () => {
  return (
    <section aria-labelledby="contact" className={styles.contact}>
      <div className={styles.info}>
        <h2 id="contact">Leave me a message</h2>
        <p>Tell me what I can do for you</p>
        <h3></h3>
      </div>
      <div className={styles.form}>
        <form action="" method="POST">
          <div className={styles.formSection}>
            <label htmlFor="name-input">Name</label>
            <input type="text" name="name" id="name-input" />
          </div>
          <div className={styles.formSection}>
            <label htmlFor="email-input">Email</label>
            <input type="email" name="email" id="email-input" />
          </div>
          <div className={styles.formSection}>
            <label htmlFor="message-input">Message</label>
            <textarea name="message" id="message-input" />
          </div>
          <div className={styles.formSection}>
            <button type="submit" className={styles.submit}>
              <span className={styles.submitText}>Send!</span>
              <div className={styles.arrow}>
                <Image
                  src="/icons/arrow-right.svg"
                  alt="Arrow icon"
                  width={21}
                  height={21}
                  layout="fixed"
                />
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
