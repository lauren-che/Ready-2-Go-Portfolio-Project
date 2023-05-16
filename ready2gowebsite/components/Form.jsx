'use client';

import { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import * as Yup from 'yup';

import supabase from '@src/lib/supabase';

// date/time picker imports
import dayjs from 'dayjs';

function BookingForm({ closeModal }) {
    // default form values
  const defaultBooking = {
    pickup_date: '',
    email: '',
    customer_name: '',
    insurance_company_name: '',
    pickup_address: '',
    insurance_company_address: '',
    drop_off_address: '',
    insurance_company_phone: '',
    customer_phone_number: '',
    return_agreement: false,
  };

  const [feedback, setFeedback] = useState('');

  // Regex for phone number validation
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  // Yup schema to validate the form
  const BookingSchema = Yup.object().shape({
    pickup_date: Yup.string().required('Please choose a pickup date'),
    email: Yup.string()
      .required('Your email is required')
      .email('Please enter a valid email address')
      .max(150, 'The email address you entered is too long'),
    customer_name: Yup.string()
      .max(150, 'The name you entered is too long')
      .required('Please enter your name')
      .min(2),
    insurance_company_name: Yup.string()
      .required('Please enter your insurance name')
      .min(2),
    pickup_address: Yup.string().required('Please enter your pickup address'),
    insurance_company_address: Yup.string()
      .min(2)
      .required('Please enter your insurance company address'),
    drop_off_address: Yup.string()
      .min(2)
      .required('Please enter your dropoff address'),
    insurance_company_phone: Yup.string()
      .required('Please enter your insurance companies phone number')
      .matches(phoneRegExp, 'Please provide a valid phone number'),
    customer_phone_number: Yup.string()
      .required('Please provide a valid phone number')
      .matches(phoneRegExp, 'Please provide a valid phone number'),
    return_agreement: Yup.boolean().oneOf(
      [true],
      'You must accept the return agreement'
    ),
  });

  async function handleSubmit(values, { resetForm }) {
    // on submit take the the form input names and assign them to a variable called values
    const {
      pickup_date,
      email,
      customer_name,
      insurance_company_name,
      pickup_address,
      insurance_company_address,
      drop_off_address,
      insurance_company_phone,
      customer_phone_number,
    } = values;
    try {
        // take each value and insert it into the bookings supabase postfresql db table
      const { error } = await supabase.from('bookings').insert({
        pickup_date,
        email,
        customer_name,
        insurance_company_name,
        pickup_address,
        insurance_company_address,
        drop_off_address,
        insurance_company_phone,
        customer_phone_number,
      });
      if (error) {
        throw error;
      }
      setFeedback('Your ride has been booked successfully');
      resetForm();
    } catch (error) {
      console.log('Error occurred', { error });
      setFeedback('An error occurred');
    }
  }

  useEffect(() => {
    if (feedback) {
      setTimeout(() => setFeedback(''), 3000);
    }
  }, [feedback]);

  return (
    <section
      className="flex fixed justify-center items-center w-[100vw] h-[100vh] p-6 mx-auto"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="p-8 flex flex-col w-[800px] h-[650px] bg-primary-black shadow-xl text-primary-white border-primary-white border-[0.1rem] rounded-[1rem]">
        <div className="justify-center">
          <main className="justify-between flex-row items-center py-4">
            <h2 className="text-3xl font-bold justify-center">Book A Ride</h2>
            <h4 className="mt-4 uppercase tracking-[0.2rem]">
              pick up information
            </h4>
          </main>
        </div>

        {feedback && (
          <div className="feedback">
            <p>{feedback}</p>
          </div>
        )}

        <Formik
          enableReinitialize
          initialValues={defaultBooking}
          validationSchema={BookingSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-control grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <Field name="pickup_date">
                {({ field, meta }) => (
                  <div className="rounded-lg">
                    <label htmlFor="pickup_date"> </label>
                    <input
                      {...field}
                      type="date"
                      id="pickup_date"
                      className="form-input"
                    />
                     
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>

              <Field name="email">
                {({ field, meta }) => (
                  <div className="form-control relative">
                    <label htmlFor="email"></label>
                    <input
                      {...field}
                      placeholder="Customer Email"
                      id="email"
                      className="form-input"
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                    <span className="icon-form-image">
                      <Image
                        src="/assets/icons/emailicon.svg"
                        alt="email icon"
                        width={30}
                        height={30}
                      />
                    </span>
                  </div>
                )}
              </Field>

              <Field name="customer_name">
                {({ field, meta }) => (
                  <div className="form-control relative">
                    <label htmlFor="customer_name"></label>
                    <input
                      {...field}
                      placeholder="Customer Name"
                      id="customer_name"
                      className="form-input"
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                    <span className="icon-form-image">
                      <Image
                        src="/assets/icons/usericon.svg"
                        alt="user icon"
                        width={30}
                        height={30}
                      />
                    </span>
                  </div>
                )}
              </Field>

              <Field name="insurance_company_name">
                {({ field, meta }) => (
                  <div className="form-control relative">
                    <label htmlFor="insurance_company_name"></label>
                    <input
                      {...field}
                      placeholder="Insurance Company Name"
                      id="insurance_company_name"
                      className="form-input"
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                    <span className="icon-form-image">
                      <Image
                        src="/assets/icons/officeicon.svg"
                        alt="office icon"
                        width={30}
                        height={30}
                      />
                    </span>
                  </div>
                )}
              </Field>

              <Field name="pickup_address">
                {({ field, meta }) => (
                  <div className="form-control relative">
                    <label htmlFor="pickup_address"></label>
                    <input
                      {...field}
                      placeholder="Pickup Address"
                      id="pickup_address"
                      className="form-input"
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                    <span className="icon-form-image">
                      <Image
                        src="/assets/icons/addressicon.svg"
                        alt="address icon"
                        width={30}
                        height={30}
                      />
                    </span>
                  </div>
                )}
              </Field>

              <Field name="insurance_company_address">
                {({ field, meta }) => (
                  <div className="form-control relative">
                    <label htmlFor="insurance_company_address"></label>
                    <input
                      {...field}
                      placeholder="Insurance Company Address"
                      id="insurance_company_address"
                      className="form-input"
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                    <span className="icon-form-image">
                      <Image
                        src="/assets/icons/addressicon.svg"
                        alt="address icon"
                        width={30}
                        height={30}
                      />
                    </span>
                  </div>
                )}
              </Field>

              <Field name="drop_off_address">
                {({ field, meta }) => (
                  <div className="form-control relative">
                    <label htmlFor="drop_off_address"></label>
                    <input
                      {...field}
                      placeholder="Dropoff Address"
                      id="drop_off_address"
                      className="form-input"
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                    <span className="icon-form-image">
                      <Image
                        src="/assets/icons/addressicon.svg"
                        alt="address icon"
                        width={30}
                        height={30}
                      />
                    </span>
                  </div>
                )}
              </Field>

              <Field name="insurance_company_phone">
                {({ field, meta }) => (
                  <div className="form-control relative">
                    <label htmlFor="insurance_company_phone"></label>
                    <input
                      {...field}
                      type="tel"
                      placeholder="Insurance Company Phone"
                      id="insurance_company_phone"
                      className="form-input"
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                    <span className="icon-form-image">
                      <Image
                        src="/assets/icons/phoneicon.svg"
                        alt="phone icon"
                        width={30}
                        height={30}
                      />
                    </span>
                  </div>
                )}
              </Field>

              <Field name="customer_phone_number">
                {({ field, meta }) => (
                  <div className="form-control relative">
                    <label htmlFor="customer_phone_number"></label>
                    <input
                      {...field}
                      type="tel"
                      placeholder="Customer Phone Number"
                      id="customer_phone_number"
                      className="form-input"
                    />
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                    <span className="icon-form-image">
                      <Image
                        src="/assets/icons/phoneicon.svg"
                        alt="phone icon"
                        width={30}
                        height={30}
                      />
                    </span>
                  </div>
                )}
              </Field>

              <Field name="return_agreement">
                {({ field, meta }) => (
                  <div className="form-control relative">
                    <input
                      {...field}
                      type="checkbox"
                      placeholder="Customer Phone Number"
                      id="return_agreement"
                      className="accent-[#14968F] hover:cursor-pointer"
                    />
                    <label
                      htmlFor="return_agreement"
                      className="inline-block pl-[0.5rem] hover:cursor-pointer bordered-checkbox-[#14968F] text-xs"
                    >
                      I agree to be{' '}
                      <span className="text-primary-orange">
                        returned back to pickup address
                      </span>
                    </label>
                    {meta.error && meta.touched && (
                      <span className="form-error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </div>

            <button
              type="submit"
              className="submit-button w-full bg-primary-orange rounded-full mt-8 p-2 text-lg"
            >
              Book A Ride
            </button>
          </Form>
        </Formik>
        <button
          onClick={() => closeModal(false)}
          className="text-[#636363] m-4 text-xs"
        >
          Cancel
        </button>
      </div>
    </section>
  );
}

export default BookingForm;
