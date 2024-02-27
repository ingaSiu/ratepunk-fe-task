'use client';

import { SyntheticEvent, useState } from 'react';

import ErrorMessage from './errorMsg/ErrorMessage';
import Image from 'next/image';
import Referral from './referral/Referral';
import SuccessMessage from './successMsg/SuccessMessage';
import axios from 'axios';
import styles from './Form.module.scss';
import { verifyEmail } from '@/utils/verifyEmail';

const Form = () => {
  const [email, setEmail] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const BIN_ID = process.env.NEXT_PUBLIC_BIN_ID;

  const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY;

  const submitEmail = async () => {
    try {
      setIsSubmitting(true);

      await axios.put(
        `https://api.jsonbin.io/v3/b/${BIN_ID}`,
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': ACCESS_KEY,
          },
        },
      );
      setStatus('success');
      setIsSubmitting(false);
    } catch (err) {
      setIsSubmitting(false);
      setStatus('error');
    }
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (email.length === 0) {
      setStatus('empty');
    } else if (!email.match(verifyEmail)) {
      setStatus('invalid');
    } else {
      submitEmail();
      setStatus('');
    }
  };
  return (
    <>
      {status === 'error' && <ErrorMessage>Request failed. Try again later.</ErrorMessage>}

      {status === 'empty' && <ErrorMessage>Please enter your email.</ErrorMessage>}

      {status === 'invalid' && (
        <ErrorMessage>Invalid email. Please enter a valid email, e.g. sample@mail.com </ErrorMessage>
      )}

      {status === 'success' && <SuccessMessage />}

      {status !== 'success' && (
        <form onSubmit={handleSubmit} className={styles.emailForm}>
          <div className={styles.inputWrapper}>
            <Image src="/icons/email.svg" alt="Email input icon" width={20} height={20} />
            <input
              type="text"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button disabled={isSubmitting} className={styles.btn}>
            Get Referral Link
          </button>
        </form>
      )}

      {status === 'success' && <Referral />}
    </>
  );
};

export default Form;
