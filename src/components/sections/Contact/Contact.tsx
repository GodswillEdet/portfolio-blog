import { Icon } from "components/shared";
import Image from "next/image";
import styles from "./Contact.module.scss";
import Fade from "react-reveal/Fade";

export const Contact: React.FC = () => {
  return (
    <section aria-labelledby="contact" className={styles.contact}>
      <Fade bottom>
        <div className={styles.infoContainer}>
          <header>
            <h2 id="contact" className={styles.title}>
              Leave me a message
            </h2>
            <p>I am always up for a good conversation</p>
          </header>
          <h3 className={styles.contactSubtitle}>Contact information</h3>
          <p className={styles.info}>
            <Icon type="static" iconName="phone" size={25} />
            <span>316-871-6128</span>
          </p>
          <p className={styles.info}>
            <Icon type="static" iconName="email" size={25} />
            <span>huynhlbg@mail.uc.edu</span>
          </p>
        </div>
        <div className={styles.form}>
          <form name="contact-form" action="/" method="POST" data-netlify="true">
            {/* To use Netlify form */}
            <input type="hidden" name="form-name" value="contact-form" />
            <div className={styles.formSection}>
              <input type="text" name="name" id="name-input" required />
              <label htmlFor="name-input">Name</label>
            </div>
            <div className={styles.formSection}>
              <input type="email" name="email" id="email-input" required />
              <label htmlFor="email-input">Email</label>
            </div>
            <div className={styles.formSection}>
              <textarea name="message" id="message-input" required />
              <label htmlFor="message-input">Message</label>
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
      </Fade>
    </section>
  );
};
