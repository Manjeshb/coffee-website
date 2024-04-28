// WhyChooseUs.js
import React from "react";
import styles from "./style.module.css";

function WhyChooseUs() {
  return (
    <div className={styles.whyChooseUs}>
      <h1 className={styles.sectionTitle}>Why Choose Us</h1>
      <div className={styles.point}>
        <h3>Expert Insights</h3>
        <p>Dive into a wealth of knowledge on cultivating high-quality produce.</p>
      </div>
      <div className={styles.point}>
        <h3>Resource Access</h3>
        <p>Connect with trusted suppliers for fertilizers, tools, and labor.</p>
      </div>
      <div className={styles.point}>
        <h3>Community Support</h3>
        <p>Join a network of growers sharing strategies and successes.</p>
      </div>
      <div className={styles.point}>
        <h3>Market Opportunities</h3>
        <p>Unlock new avenues to sell your produce and grow your business.</p>
      </div>
    </div>
  );
}

export default WhyChooseUs;
