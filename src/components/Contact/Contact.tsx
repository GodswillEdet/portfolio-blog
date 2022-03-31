import Image from "next/image";
import styles from "./Contact.module.scss";
const Contact: React.FC = () => {
  return (
    <section aria-labelledby="contact" className={styles.contact}>
      <div className={styles.info}>
        <h2 id="contact">Leave me a message</h2>
        <p>Let our conversation begin</p>
        <h3></h3>
      </div>
      <div className={styles.form}>
        <form action="" method="POST">
          <label htmlFor="name-input">Name</label>
          <input type="text" name="name" id="name-input" />
          <label htmlFor="email-input">Email</label>
          <input type="email" name="email" id="email-input" />
          <label htmlFor="message-input">Message</label>
          <textarea name="message" id="message-input" />
          <button type="submit" className={styles.submit}>
            <span className={styles.submitText}>Send!</span>
            <div className={styles.arrow}>
              <Image
                src="/icons/arrow-right.svg"
                alt="Arrow icon"
                width={18}
                height={18}
                layout="fixed"
              />
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
