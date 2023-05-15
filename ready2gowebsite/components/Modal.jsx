import Image from 'next/image';
// import type { NextPage } from 'next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Regex for phone number validation
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Yup schema to validate the form
const schema = Yup.object().shape({
  pickup_date: Yup.string().required('Please choose a pickup date'),
  email: Yup.string()
    .required('Your email is required')
    .email('Please enter a valid email address'),
  customer_name: Yup.string().required('Please enter your name').min(2),
  insurance_company_name: Yup.string()
    .required('Please enter your insurance name')
    .min(2),
  pickup_address: Yup.string().required('Please enter your pickup address'),
  insurance_company_address: Yup.string().required(
    'Please enter your insurance company address'
  ),
  drop_off_address: Yup.string().required('Please enter your dropoff address'),
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

const Modal = ({ closeModal }) => {
  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
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
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({
      pickup_date,
      email,
      customer_name,
      insurance_company_name,
      pickup_address,
      insurance_company_address,
      drop_off_address,
      insurance_company_phone,
      customer_phone_number,
    }) => {
      // Make a request to the backend here to store the data
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div
      className="flex fixed justify-center items-center w-[100vw] h-[100vh] p-6 mx-auto"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="p-8 flex flex-col w-[800px] h-[620px] bg-primary-black shadow-xl text-primary-white border-primary-white border-[0.1rem] rounded-[1rem]">
        <div className="justify-center">
          <main className="justify-between flex-row items-center">
            <h2 className="pt-8 text-3xl font-bold">Book A Ride</h2>
            <h4 className="mt-4 uppercase tracking-[0.2rem]">
              pick up information
            </h4>
          </main>
        </div>

        {/* form starts here */}
        <form onSubmit={handleSubmit} method="POST">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div className="rounded-lg">
              <label htmlFor="pickup_date"></label>
              <input
                type="date"
                id="pickup_date"
                name="pickup_date"
                value={values.pickup_date}
                onChange={handleChange}
                className="form-input"
              />

              {/* The below code snippet checks whether the error exists and if the field has been touched. If both conditions are true, then it displays the error message. */}
              {errors.pickup_date && touched.pickup_date && (
                <span className="form-error">{errors.pickup_date}</span>
              )}
            </div>
            <div className="relative">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Customer Email"
                className="form-input"
              />
              {errors.email && touched.email && (
                <span className="form-error">{errors.email}</span>
              )}
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <Image
                  src="/assets/icons/emailicon.svg"
                  alt="email icon"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="relative">
              <label htmlFor="customer_name"></label>
              <input
                type="text"
                id="customer_name"
                name="customer_name"
                value={values.customer_name}
                onChange={handleChange}
                placeholder="Customer Name"
                className="form-input"
              />
              {errors.customer_name && touched.customer_name && (
                <span className="form-error">{errors.customer_name}</span>
              )}
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <Image
                  src="/assets/icons/usericon.svg"
                  alt="user icon"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="relative">
              <label htmlFor="insurance_company_name"></label>
              <input
                type="text"
                id="insurance_company_name"
                name="insurance_company_name"
                value={values.insurance_company_name}
                onChange={handleChange}
                placeholder="Insurance Company Name"
                className="form-input"
              />
              {errors.insurance_company_name &&
                touched.insurance_company_name && (
                  <span className="form-error">
                    {errors.insurance_company_name}
                  </span>
                )}
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <Image
                  src="/assets/icons/officeicon.svg"
                  alt="office icon"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                id="pickup_address"
                name="pickup_address"
                value={values.pickup_address}
                onChange={handleChange}
                placeholder="Pick Up Address"
                className="form-input"
              />
              {errors.pickup_address && touched.pickup_address && (
                <span className="form-error">{errors.pickup_address}</span>
              )}
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <Image
                  src="/assets/icons/addressicon.svg"
                  alt="address icon"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                id="insurance_company_address"
                name="insurance_company_address"
                value={values.insurance_company_address}
                onChange={handleChange}
                placeholder="Insurance Company Address"
                className="form-input"
              />
              {errors.insurance_company_address &&
                touched.insurance_company_address && (
                  <span className="form-error">
                    {errors.insurance_company_address}
                  </span>
                )}
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <Image
                  src="/assets/icons/addressicon.svg"
                  alt="address icon"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                id="drop_off_address"
                name="drop_off_address"
                value={values.drop_off_address}
                onChange={handleChange}
                placeholder="Drop Off Address"
                className="form-input"
              />

              {errors.drop_off_address && touched.drop_off_address && (
                <span className="form-error">{errors.drop_off_address}</span>
              )}
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <Image
                  src="/assets/icons/addressicon.svg"
                  alt="address icon"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="relative">
              <input
                type="tel"
                id="insurance_company_phone"
                name="insurance_company_phone"
                value={values.insurance_company_phone}
                onChange={handleChange}
                placeholder="Insurance Company Phone Number"
                className="form-input"
              />
              {errors.insurance_company_phone &&
                touched.insurance_company_phone && (
                  <span className="form-error">
                    {errors.insurance_company_phone}
                  </span>
                )}
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <Image
                  src="/assets/icons/phoneicon.svg"
                  alt="phone icon"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="relative">
              <input
                type="tel"
                id="customer_phone_number"
                name="customer_phone_number"
                value={values.customer_phone_number}
                onChange={handleChange}
                placeholder="Customer Phone Number"
                className="form-input"
              />
              {errors.customer_phone_number &&
                touched.customer_phone_number && (
                  <span className="form-error">
                    {errors.customer_phone_number}
                  </span>
                )}
              <span className="absolute inset-y-5 right-0 flex items-center mr-6 w-4 h-4">
                <Image
                  src="/assets/icons/phoneicon.svg"
                  alt="phone icon"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="pl-8">
              <input
                id="return_agreement"
                name="return_agreement"
                type="checkbox"
                value={values.return_agreement}
                onChange={handleChange}
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
              <div>
                {errors.return_agreement && touched.return_agreement && (
                  <span className="form-error">{errors.return_agreement}</span>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-orange rounded-full mt-8 p-2 text-lg"
          >
            Book A Ride
          </button>
        </form>

        <button
          onClick={() => closeModal(false)}
          className="text-[#636363] m-4 text-xs"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
