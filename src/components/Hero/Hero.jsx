import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nikhil</h1>
        <p className={styles.description}>
          I'm a full stack developer with experience in React and
          NodeJs. Reach out if you'd like to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto:myemail@email.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/nikhil.png")}
        alt="Hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
