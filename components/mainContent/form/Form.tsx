'use client';

import Image from 'next/image';
import styles from './Form.module.scss';
import { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const BIN_ID = '65dc436bdc74654018a9f0dc';
  const ACCESS_KEY = '$2b$10$15ZN.tM15P/atgCSEMTHw.YBQgNI0b6sfq9VTvyEChbFgfFM1.9Ku';

  // const sendEmail = async () => {
  //   try {
  //     setIsSubmitting(true);
  //     await axios.put(
  //       `https://api.jsonbin.io/v3/b/${BIN_ID}`,
  //       {email},

  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'X-Access-Key': ACCESS_KEY,
  //         }
  //       }
  //     );
  //     setIsSubmitting(false);
  //   } catch (error) {
  //     setIsSubmitting(false);
  //     console.error(error);
  // }

  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit} className={styles.emailForm}>
      <div className={styles.inputWrapper}>
        <Image src="/icons/email.svg" alt="Email input icon" width={20} height={20} />
        <input
          type="email"
          value={email}
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button disabled={isSubmitting} className={styles.btn}>
        Get Referral Link
      </button>
    </form>
  );
};

export default Form;
