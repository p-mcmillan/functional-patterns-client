import axios from 'axios';
import Button from '../../components/Button/Button';
//import React from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Rating } from '@material-tailwind/react';
//import { AnalyticsEvent } from '../../function.js';
import { useNavigate } from 'react-router-dom';
//import SignUpForm from './SignUpForm';

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';

const SignUp = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '/sign-up',
      title: 'Sign Up',
    });
  });

  const [showDetails, setShowDetails] = useState(false);
  const [showDrugUsageDetails, setShowshowDrugUsageDetail] = useState(false);
  const [showFPprogramDetails, setshowFPprogramDetails] = useState(false);
  const [showAlcoholUsageDetails, setShowAlcoholUsageDetails] = useState(false);
  const [showInjury, setShowInjury] = useState(false);
  const [showScoliosis, setShowScoliosis] = useState(false);
  const [showOtherTraining, setShowOtherTraining] = useState(false);
  const [open, setOpen] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [foundUs, setFoundUs] = useState();
  const [foundUsOther, setFoundUsOther] = useState(false);
  const [showFitnessPro, setShowFitnessPro] = useState(false);
  const [showIsVegan, setShowIsVegan] = useState(false);
  const [showIsGrains, setShowIsGrains] = useState(false);
  const [activitiesRating, setActivitiesRating] = useState(0);
  const [dietRating, setDietRating] = useState(0);
  const [grainRating, setGrainRating] = useState(0);
  const [activitiesRatingError, setActivitiesRatingError] = useState('');
  const [dietRatingError, setDietRatingError] = useState('');
  const [grainRatingError, setGrainRatingError] = useState('');
  const navigate = useNavigate();

  // might be able ot get rid of this
  const [otherTrainingValues, setOtherTrainingValues] = useState([]);

  const questionnaireAPI = import.meta.env.VITE_SIGNUP_API;

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('What is your First Name'),
    last_name: Yup.string().required('Last Name is required'),
    contact_email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    foundUs: Yup.string().required('Please select how you heard about us'),
    otherText: Yup.string().when('foundUs', {
      is: (value) => value === 'Other',
      then: Yup.string().required('Please specify how you heard about us'),
    }),

    age: Yup.number().typeError('How old are you?').required('Age is required'),
    gender: Yup.string().required('Gender is required'),
    occupation: Yup.string().required('Occupation is required'),
    chronicPain: Yup.string().required(
      'Please select if you have chronic pain'
    ),
    injury: Yup.string().required(
      'Please select if you are overcoming an injury'
    ),
    scoliosis: Yup.string().required('Please select if you have scoliosis'),
    isGrains: Yup.string().required('Please select if you eat grains or not'),
    drugUsage: Yup.string().required('Please select'),
    alcoholUsage: Yup.string().required('Please select'),
    FPprogram: Yup.string().required('Please select an option'),
    tainingTimes: Yup.string()
      .max(2000, 'Message is too long')
      .required('Please Provide Times & Days'),
    goals: Yup.string()
      .max(2000, 'Message is too long')
      .required('Please Describe Your Goals'),
  });

  // Assuming `data` is an object containing the form data

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (signUpFormData) => {
    const allFormData = {
      ...signUpFormData,
      activitiesRating,
      dietRating,
      grainRating,
    };

    if (showActivities && activitiesRating <= 0) {
      setActivitiesRatingError(
        '1 Star being completely unwilling, 5 Stars being very willing'
      );
      // alert("Please provide a rating before submitting.");
      return;
    }
    if (showIsVegan && dietRating <= 0) {
      setDietRatingError(
        '1 Star being completely unwilling, 5 Stars being very willing'
      );
      // alert("Please provide a rating before submitting.");
      return;
    }
    if (showIsGrains && grainRating <= 0) {
      setGrainRatingError(
        '1 Star being completely unwilling, 5 Stars being very willing'
      );
      // alert("Please provide a rating before submitting.");
      return;
    }

    console.log(allFormData);

    await axios.post(`${questionnaireAPI}`, allFormData);
    setIsSubmitted(true);
    //AnalyticsEvent('Contact Form, Success');
    setTimeout(() => {
      navigate('/pricing');
    }, 5000);
  };

  // Function to handle "None" checkbox selection
  const handleNoneCheckbox = (event) => {
    if (event.target.checked) {
      setOtherTrainingValues([]);
    }
  };

  // Function to close the dialog and reset form data
  // const handleDialogClose = () => {
  //   setOpen(false); // Close the dialog
  //   reset(); // Reset form data
  // };

  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleErrors = (error) => {
    console.error('Error:', error);
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
      alert('Error: ' + JSON.stringify(error.response.data));
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request:', error.request);
      alert(error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error message:', error.message);
      alert('Error: ' + error.message);
    }
  };

  // Function to handle checkbox selection
  const handleCheckbox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setOtherTrainingValues((prevValues) => [...prevValues, value]);
    } else {
      setOtherTrainingValues((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <div>
        {isSubmitted ? (
          <div className="flex flex-col border p-4 sm:p-6 lg:p-8 text-center h-screen items-center justify-center">
            <h2 className="mb-8 text-xl lg:text-[18px]">
              Thank you for contacting us!
            </h2>
            <p>Your message has been successfully submitted.</p>
          </div>
        ) : (
          <div>
            <Helmet>
              <meta charset="UTF-8" />
              <title>
                {' '}
                Questionnaire - NYC Biomechanics - Functional Patterns Training
                in NYC
              </title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta name="robots" content="index,follow" />
              <meta
                name="description"
                content="Unlock pain-free movement with our unique Functional Patterns Training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
              />
              <meta
                name="keywords"
                content="Functional Patterns New York, NYC, Biomechanics, NYC Biomechanics, Brent McMillan, mcmillan, Brent, New York City, Functional Patterns NYC, Manhattan, Brooklyn, Training, Fitness, Movement, Posture, Corrective exercise, Strength training, Mobility, Neuromuscular re-education, Core stability, Alignment, Injury prevention, Movement efficiency, Body awareness, Functional training, Kinetic chain, Balance, Flexibility, Rehabilitation, Sports performance, Range of motion, Dynamic movement, Motor control"
              />
              <meta name="theme-color" content="#303030" />
              <meta
                name="copyright"
                content="Copyright © 2024 NYC Biomechanics"
              />
              <meta name="language" content="English" />
              <meta name="Classification" content="Business" />
              <meta
                name="url"
                content="https://www.nycbiomechanics.com/sign-up"
              />
              <meta http-equiv="Expires" content="0" />
              <meta http-equiv="Pragma" content="no-cache" />
              <meta http-equiv="Cache-Control" content="no-cache" />
              <meta http-equiv="imagetoolbar" content="no" />
              <meta http-equiv="x-dns-prefetch-control" content="off" />

              <meta property="og:type" content="website" />
              <meta
                property="og:title"
                content="Sign Up - NYC Biomechanics - Functional Patterns Training in NYC"
              />
              <meta
                property="og:description"
                content="Unlock pain-free movement with our unique Functional Patterns Training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
              />
              <meta property="og:image" content="./image-black.png" />
              <meta
                property="og:url"
                content="https://www.nycbiomechanics.com/sign-up"
              />
              <meta
                property="og:site_name"
                content="Sign Up - NYC Biomechanics - Functional Patterns Training in NYC"
              />
              <meta property="og:locale" content="en_US" />

              <meta name="twitter:title" content="Sign Up - NYC Biomechanics" />
              <meta
                name="twitter:image"
                content="https://www.nycbiomechanics.com/image-black.png"
              />

              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:url"
                content="https://www.nycbiomechanics.com/sign-up"
              />

              <link
                rel="icon"
                type="image/svg+xml"
                href="https://www.nycbiomechanics.com/image-black.png"
              />

              <link
                rel="apple-touch-icon"
                type="image/svg+xml"
                sizes="76x76"
                href="https://www.nycbiomechanics.com/nyc-biomechanics-logo.svg?width=76"
              />
              <link
                rel="mask-icon"
                href="https://www.nycbiomechanics.com/nyc-biomechanics-logo.svg"
                color="#5bbad5"
              />
              <link
                rel="canonical"
                href="https://www.nycbiomechanics.com/sign-up"
              />

              <meta itemprop="name" content="NYC Biomechanics" />
              <meta
                itemprop="url"
                content="https://www.nycbiomechanics.com/sign-up"
              />
              <meta
                itemprop="description"
                content="Unlock pain-free movement with our unique Functional Patterns Training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
              />
              <meta
                itemprop="thumbnailUrl"
                content="https://www.nycbiomechanics.com/image-black.png"
              />
              <link
                rel="image_src"
                href="https://www.nycbiomechanics.com/image-black.png"
              />
              <meta
                itemprop="image"
                content="https://www.nycbiomechanics.com/image-black.png"
              />
            </Helmet>
            <div className="py-5 mt-[75px] min-h-screen mx-4">
              <div className="py-5 n mx-4">
                <h1 className="uppercase items-center text-center mb-5 lg:text-[36px]">
                  New Client Questionnaire
                </h1>

                <div className="items-center text-center">
                  <Button
                    onClick={() => {
                      handleOpen();
                      // handleClick();
                    }}
                    className="items-center text-center"
                    style={{ backgroundColor: '#030201', color: 'white' }}
                  >
                    fill out
                  </Button>
                </div>
              </div>

              <div className="py-5 max-w-[500px] mx-auto">
                <div>
                  <Dialog
                    open={open}
                    handler={handleOpen}
                    className="rounded-none"
                  >
                    <DialogBody className="text-black overflow-y-auto max-h-[90vh]">
                      <p className=" mx-[15px] items-center mt-[20px] text-black">
                        Thank you for dedicating time to complete our
                        questionnaire. Please provide detailed responses to each
                        question. As our one-on-one training slots are limited,
                        upon submission, a practitioner will be assigned to
                        contact you based on your requirements and schedule.
                        Kindly fill out the form only if you're prepared to
                        potentially start training. If you're planning to train
                        in the future (beyond a week or two), we encourage you
                        to wait until closer to that time before submitting your
                        form.
                      </p>
                      <form
                        id="review-form"
                        onSubmit={handleSubmit(onSubmit)}
                        className=""
                      >
                        <div className="grid gap-4 lg:gap-6">
                          <div className="flex items-center justify-center mb-6">
                            <p></p>
                          </div>
                          <div>
                            <input
                              placeholder={`${
                                errors?.first_name?.message ? '' : 'First Name'
                              }${errors?.first_name?.message || ''}`}
                              type="text"
                              name="first_name"
                              id="first_name"
                              className={`py-3 px-4 block w-full border ${
                                errors?.first_name ? 'error' : ''
                              } ${
                                errors?.first_name
                                  ? 'border-red-500 text-red-900'
                                  : 'border-black'
                              }`}
                              {...register('first_name')}
                            />
                          </div>
                          <div>
                            <input
                              placeholder={`${
                                errors?.last_name?.message ? '' : 'Last Name'
                              }${errors?.last_name?.message || ''}`}
                              type="text"
                              name="last_name"
                              id="last_name"
                              className={`py-3 px-4 block w-full border ${
                                errors?.last_name ? 'error' : ''
                              } ${
                                errors?.last_name
                                  ? 'border-red-500 text-red-900'
                                  : 'border-black'
                              }`}
                              {...register('last_name')}
                            />
                          </div>

                          <div>
                            <input
                              placeholder={`${
                                errors?.contact_email?.message
                                  ? ''
                                  : 'Email Address'
                              }${errors?.contact_email?.message || ''}`}
                              type="email"
                              name="contact_email"
                              id="contact_email"
                              autoComplete="Email"
                              className={`py-3 px-4 block w-full border ${
                                errors?.contact_email ? 'error' : ''
                              } ${
                                errors?.contact_email
                                  ? 'border-red-500 text-red-900'
                                  : 'border-black'
                              }`}
                              {...register('contact_email')}
                            />
                          </div>
                          <div>
                            <input
                              placeholder={`${
                                errors?.phoneNumber?.message
                                  ? ''
                                  : 'Phone Number'
                              }${errors?.phoneNumber?.message || ''}`}
                              type="text"
                              name="phoneNumber"
                              id="phoneNumber"
                              className={`py-3 px-4 block w-full border ${
                                errors?.phoneNumber ? 'error' : ''
                              } ${
                                errors?.phoneNumber
                                  ? 'border-red-500 text-red-900'
                                  : 'border-black'
                              }`}
                              {...register('phoneNumber')}
                            />
                          </div>

                          <div className="border border-black p-4">
                            <fieldset>
                              <legend className="mb-2">
                                How did you hear about us?
                              </legend>

                              <div>
                                <input
                                  className="mr-2"
                                  type="radio"
                                  id="search"
                                  name="foundUs"
                                  value="Search Engine"
                                  onChange={(event) =>
                                    setFoundUs(event.target.value)
                                  }
                                  onClick={() => setFoundUsOther(false)}
                                  {...register('foundUs')}
                                />
                                <label htmlFor="Search Engine">
                                  Search Engine
                                </label>
                              </div>

                              <div>
                                <input
                                  className="mr-2"
                                  type="radio"
                                  id="socials"
                                  name="foundUs"
                                  value="Social Media"
                                  onChange={(event) =>
                                    setFoundUs(event.target.value)
                                  }
                                  onClick={() => setFoundUsOther(false)}
                                  {...register('foundUs')}
                                />
                                <label htmlFor="Social Medi">
                                  Social Media
                                </label>
                              </div>

                              <div>
                                <input
                                  className="mr-2"
                                  type="radio"
                                  id="wordOfMouth"
                                  name="foundUs"
                                  value="Word Of Mouth"
                                  onChange={(event) =>
                                    setFoundUs(event.target.value)
                                  }
                                  onClick={() => setFoundUsOther(false)}
                                  {...register('foundUs')}
                                />
                                <label htmlFor="Word of Mouth">
                                  Word of Mouth
                                </label>
                              </div>

                              <div>
                                <input
                                  className="mr-2"
                                  type="radio"
                                  id="Referral"
                                  name="foundUs"
                                  value="Referral"
                                  onChange={(event) =>
                                    setFoundUs(event.target.value)
                                  }
                                  onClick={() => setFoundUsOther(false)}
                                  {...register('foundUs')}
                                />
                                <label htmlFor="referral">Referral</label>
                              </div>
                              <div>
                                {/* Display error message */}
                                {errors.foundUs &&
                                  foundUs !== 'Other' &&
                                  foundUs !== 'Search Engine' &&
                                  foundUs !== 'Socials Media' &&
                                  foundUs !== 'Word Of Mouth' &&
                                  foundUs !== 'Referral' && (
                                    <p className="text-red-500">
                                      Please select an option
                                    </p>
                                  )}
                                <input
                                  className="mr-2"
                                  type="radio"
                                  id="other"
                                  name="foundUs"
                                  onClick={() => setFoundUsOther(true)}
                                  value="Other"
                                />
                                <label htmlFor="other">Other</label>
                                {/* Conditionally render input box */}
                                {foundUsOther && (
                                  <div className="mt-4">
                                    <label
                                      htmlFor="painDetails"
                                      className="block mb-2"
                                    >
                                      Please elaborate:
                                    </label>
                                    <input
                                      placeholder={`${
                                        errors?.foundUs?.message
                                          ? ''
                                          : 'Where did you find us?'
                                      }${errors?.foundUs?.message || ''}`}
                                      type="text"
                                      id="foundUsOther"
                                      name="foundUs"
                                      onChange={(event) =>
                                        setFoundUs(event.target.value)
                                      }
                                      className={`py-3 px-4 block w-full border ${
                                        (errors?.foundUs?.message,
                                        'error message')
                                      } ${errors?.foundUs ? 'error' : ''} ${
                                        errors?.foundUs
                                          ? 'border-red-500 text-red-900'
                                          : 'border-black'
                                      }`}
                                      {...register('foundUs')}
                                    />
                                  </div>
                                )}
                              </div>
                            </fieldset>
                          </div>

                          <div className="border border-black p-4 flex items-center">
                            <select
                              id="age"
                              name="age"
                              {...register('age')}
                              className={`block py-3 px-4 border p-2 focus:outline-none ${
                                errors?.age ? 'error' : ''
                              } ${
                                errors?.age
                                  ? 'border-red-500 text-red-900'
                                  : 'border-black'
                              }`}
                            >
                              <option>Age</option>
                              {Array.from({ length: 100 }, (_, i) => i + 1).map(
                                (age) => (
                                  <option key={age} value={age}>
                                    {age}
                                  </option>
                                )
                              )}
                            </select>
                            {/* Display error message */}
                            {errors.age && (
                              <p className="text-red-500 ml-2">
                                {errors.age.message}
                              </p>
                            )}
                          </div>

                          <div className=" border p-4 border-black">
                            <label htmlFor="gender">Gender:</label>
                            <div className="mt-2 flex items-center">
                              <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                {...register('gender')}
                                className="mr-2"
                              />
                              <label htmlFor="male" className="mr-4">
                                Male
                              </label>
                              <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                {...register('gender')}
                                className="mr-2"
                              />
                              <label htmlFor="female" className="mr-4">
                                Female
                              </label>
                            </div>

                            {/* Display error message for injury */}
                            {errors.gender && (
                              <p className="text-red-500">
                                {errors.gender.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <input
                              placeholder={`${
                                errors?.occupation?.message
                                  ? ''
                                  : 'What is your occupation?'
                              }${errors?.occupation?.message || ''}`}
                              type="text"
                              name="occupation"
                              id="occupation"
                              className={`py-3 px-4 block w-full border ${
                                errors?.occupation ? 'error' : ''
                              } ${
                                errors?.occupation
                                  ? 'border-red-500 text-red-900'
                                  : 'border-black'
                              }`}
                              {...register('occupation')}
                            />
                          </div>

                          <div className="border border-black p-4">
                            <label htmlFor="chronicPain" className="block mb-2">
                              Are you in chronic pain?
                            </label>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="yes"
                                name="chronicPain"
                                value="yes"
                                {...register('chronicPain', { required: true })}
                                onClick={() => setShowDetails(true)} // Show input box when "Yes" is clicked
                              />
                              <label htmlFor="yes" className="ml-2 mr-4">
                                Yes
                              </label>
                              <input
                                type="radio"
                                id="no"
                                name="chronicPain"
                                value="no"
                                {...register('chronicPain', { required: true })}
                                onClick={() => setShowDetails(false)} // Hide input box when "No" is clicked
                              />
                              <label htmlFor="no" className="ml-2">
                                No
                              </label>
                            </div>
                            {/* Conditionally render input box */}
                            {/* Display error message for chronic pain only if showDetails is false */}
                            {!showDetails && errors.chronicPain && (
                              <p className="text-red-500">
                                Please select an option
                              </p>
                            )}

                            {/* Conditionally render input box */}
                            {showDetails && (
                              <div className="mt-4">
                                <label
                                  htmlFor="chronicPain"
                                  className="block mb-2"
                                >
                                  Please elaborate on the nature of your chronic
                                  pain
                                </label>
                                <input
                                  type="text"
                                  id="painDetails"
                                  placeholder="Type your answer here"
                                  name="painDetails"
                                  {...register('chronicPain')}
                                  className={`py-3 px-4 block w-full border ${
                                    errors?.chronicPain ? 'error' : ''
                                  } ${
                                    errors?.chronicPain
                                      ? 'border-red-500 text-red-900'
                                      : 'border-black'
                                  }`}
                                />
                              </div>
                            )}
                          </div>

                          <div className="border border-black p-4">
                            <label htmlFor="injury" className="block mb-2">
                              Are you overcoming an injury?
                            </label>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="yes"
                                name="injury"
                                value="yes"
                                {...register('injury', { required: true })}
                                onClick={() => setShowInjury(true)} // Show input box when "Yes" is clicked
                              />
                              <label htmlFor="yes" className="ml-2 mr-4">
                                Yes
                              </label>
                              <input
                                type="radio"
                                id="no"
                                name="injury"
                                value="no"
                                {...register('injury', { required: true })}
                                onClick={() => setShowInjury(false)} // Hide input box when "No" is clicked
                              />
                              <label htmlFor="no" className="ml-2">
                                No
                              </label>
                            </div>

                            {/* Display error message for chronic pain only if showDetails is false */}
                            {!showInjury && errors.injury && (
                              <p className="text-red-500">
                                Please select an option
                              </p>
                            )}

                            {/* Conditionally render input box */}
                            {showInjury && (
                              <div className="mt-4">
                                <label
                                  htmlFor="injuryDetails"
                                  className="block mb-2"
                                >
                                  Please elaborate on the nature of your injury
                                </label>
                                <input
                                  type="text"
                                  id="injuryDetails"
                                  placeholder="Type your answer here"
                                  name="injuryDetails"
                                  {...register('injury')}
                                  className={`py-3 px-4 block w-full border ${
                                    errors?.injury ? 'error' : ''
                                  } ${
                                    errors?.injury
                                      ? 'border-red-500 text-red-900'
                                      : 'border-black'
                                  }`}
                                />
                              </div>
                            )}
                          </div>

                          <div className="border border-black p-4">
                            <label htmlFor="scoliosis" className="block mb-2">
                              Do you have scoliosis?
                            </label>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="yes"
                                name="scoliosis"
                                {...register('scoliosis', { required: true })}
                                onClick={() => setShowScoliosis(true)} // Show input box when "Yes" is clicked
                              />
                              <label htmlFor="yes" className="ml-2 mr-4">
                                Yes
                              </label>
                              <input
                                type="radio"
                                id="no"
                                name="scoliosis"
                                value="no"
                                {...register('scoliosis', { required: true })}
                                onClick={() => setShowScoliosis(false)} // Hide input box when "No" is clicked
                              />
                              <label htmlFor="no" className="ml-2">
                                No
                              </label>
                            </div>

                            {/* Display error message for chronic pain only if showDetails is false */}
                            {!showScoliosis && errors.scoliosis && (
                              <p className="text-red-500">
                                Please select an option...
                              </p>
                            )}

                            {/* Conditionally render input box */}
                            {showScoliosis && (
                              <div className="mt-4">
                                <label
                                  htmlFor="scoliosisDetails"
                                  className="block mb-2"
                                >
                                  Please elaborate on the nature of your injury
                                </label>
                                <input
                                  type="text"
                                  id="scoliosisDetails"
                                  name="scoliosisDetails"
                                  placeholder="Type your answer here"
                                  {...register('scoliosis')}
                                  className={`py-3 px-4 block w-full border ${
                                    errors?.scoliosis ? 'error' : ''
                                  } ${
                                    errors?.scoliosis
                                      ? 'border-red-500 text-red-900'
                                      : 'border-black'
                                  }`}
                                />
                              </div>
                            )}
                          </div>

                          <div className="border border-black p-4">
                            <fieldset>
                              <legend className="mb-2">
                                Are you currently doing any of the following
                                (check all that apply)
                              </legend>

                              <div>
                                <input
                                  className="mr-2"
                                  type="checkbox"
                                  id="weightLifting"
                                  name="otherTraining"
                                  value="weightLifting"
                                  {...register('otherTraining', {
                                    required: true,
                                  })}
                                  onClick={() => setShowOtherTraining(false)} // Show input box when "Yes" is clicked
                                />
                                <label htmlFor="Weightlifting">
                                  Weightlifting of Any kind
                                </label>
                              </div>

                              <div>
                                <input
                                  className="mr-2"
                                  type="checkbox"
                                  id="yoga"
                                  name="otherTraining"
                                  value="Yoga"
                                  {...register('otherTraining', {
                                    required: true,
                                  })}
                                  onClick={() => setShowOtherTraining(false)} // Show input box when "Yes" is clicked
                                />
                                <label htmlFor="Yoga">Yoga</label>
                              </div>

                              <div>
                                <input
                                  className="mr-2"
                                  type="checkbox"
                                  id="pilates"
                                  name="otherTraining"
                                  value="Pilates"
                                  {...register('otherTraining', {
                                    required: true,
                                  })}
                                  onClick={() => setShowOtherTraining(false)} // Show input box when "Yes" is clicked
                                />
                                <label htmlFor="Pilates">Pilates</label>
                              </div>

                              <div>
                                <input
                                  className="mr-2"
                                  type="checkbox"
                                  id="FRC"
                                  name="otherTraining"
                                  value="FRC"
                                  {...register('otherTraining', {
                                    required: true,
                                  })}
                                  onClick={() => setShowOtherTraining(false)} // Show input box when "Yes" is clicked
                                />
                                <label htmlFor="FRC">
                                  Functional Range Conditioning
                                </label>
                              </div>

                              <div>
                                <input
                                  className="mr-2"
                                  type="checkbox"
                                  id="stretching"
                                  name="otherTraining"
                                  value="stretching"
                                  {...register('otherTraining', {
                                    required: true,
                                  })}
                                  onClick={() => setShowOtherTraining(false)} // Show input box when "Yes" is clicked
                                />
                                <label htmlFor="stretching">
                                  Routine Stretching or Strech Therapy
                                </label>
                              </div>

                              <div>
                                <input
                                  className="mr-2"
                                  type="checkbox"
                                  id="chiropractic"
                                  name="otherTraining"
                                  value="chiropractic"
                                  {...register('otherTraining', {
                                    required: true,
                                  })}
                                  onClick={() => setShowOtherTraining(false)} // Show input box when "Yes" is clicked
                                />
                                <label htmlFor="chiropractic">
                                  Chiropractic
                                </label>
                              </div>

                              <div>
                                <input
                                  className="mr-2"
                                  type="checkbox"
                                  id="physicalTherapy"
                                  name="otherTraining"
                                  value="physicalTherapy"
                                  {...register('otherTraining', {
                                    required: true,
                                  })}
                                  onClick={() => setShowOtherTraining(false)} // Show input box when "Yes" is clicked
                                />
                                <label htmlFor="physicalTherapy">
                                  Physical Therapy
                                </label>
                              </div>

                              <div>
                                <input
                                  className="mr-2"
                                  type="checkbox"
                                  id="otherOthertraining"
                                  name="otherTraining"
                                  {...register('otherTraining', {
                                    required: true,
                                  })}
                                  //  onClick={() => setShowOtherTraining(true)} // Show input box when "Yes" is clicked
                                  onClick={() =>
                                    setShowOtherTraining(!showOtherTraining)
                                  }
                                />
                                <label htmlFor="otherOtherTraining">
                                  Other
                                </label>
                              </div>

                              {/* Conditionally render input box */}
                              {showOtherTraining && (
                                <div className="mt-4 mb-4">
                                  <label
                                    htmlFor="scoliosis"
                                    className="block mb-2"
                                  >
                                    Please elaborate on exercise and/or therapy
                                    outside of these methods:
                                  </label>
                                  <input
                                    type="text"
                                    id="otherTrainingDetails"
                                    name="otherTrainingDetails"
                                    className={`py-3 px-4 block w-full border text-sm ${
                                      errors?.otherTrainingDetails
                                        ? 'error'
                                        : ''
                                    } ${
                                      errors?.otherTrainingDetails
                                        ? 'border-red-500 text-red-900'
                                        : 'border-black'
                                    }`}
                                    {...register('otherTrainingDetails')}
                                  />
                                </div>
                              )}

                              <div>
                                <input
                                  className="mr-2"
                                  type="checkbox"
                                  id="none"
                                  name="otherTraining"
                                  value="none"
                                  onChange={handleNoneCheckbox}
                                  {...register('otherTraining', {
                                    required: true,
                                  })}
                                  onClick={() => setShowOtherTraining(false)} // Hide input box when "No" is clicked
                                />
                                <label htmlFor="none">None</label>
                              </div>
                            </fieldset>
                          </div>

                          <div className="border border-black p-4">
                            <label htmlFor="injury" className="block mb-2">
                              Do you play any recreational sports or other
                              activities?
                            </label>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="yes"
                                name="activities"
                                value="yes"
                                {...register('activities', { required: true })}
                                onClick={() => setShowActivities(true)} // Show input box when "Yes" is clicked
                              />
                              <label htmlFor="yes" className="ml-2 mr-4">
                                Yes
                              </label>
                              <input
                                type="radio"
                                id="no"
                                name="activities"
                                value="no"
                                {...register('activities', { required: true })}
                                onClick={() => setShowActivities(false)} // Hide input box when "No" is clicked
                              />
                              <label htmlFor="no" className="ml-2">
                                No
                              </label>
                            </div>
                            {/* Conditionally render input box */}
                            {showActivities && (
                              <>
                                <div className="my-4">
                                  <input
                                    type="text"
                                    placeholder="Please Elaborate"
                                    id="activitiesDetails"
                                    name="activitiesDetails"
                                    {...register('activities')}
                                    className={`py-3 px-4 block w-full border ${
                                      errors?.activities ? 'error' : ''
                                    } ${
                                      errors?.activities
                                        ? 'border-red-500 text-red-900'
                                        : 'border-black'
                                    }`}
                                  />
                                </div>

                                <div className="border border-black p-4">
                                  <label
                                    htmlFor="activitiesRating"
                                    className="block mb-2"
                                  >
                                    How willing are you to stop these activities
                                    during your recovery/while initially
                                    learning Functional Patterns?
                                  </label>

                                  {activitiesRatingError && (
                                    <p className="text-red-500">
                                      {activitiesRatingError}
                                    </p>
                                  )}

                                  <Rating
                                    style={{ maxWidth: 180 }}
                                    value={activitiesRating}
                                    onChange={(value) =>
                                      setActivitiesRating(value)
                                    }
                                  />
                                </div>
                              </>
                            )}
                            {/* Display error message for injury */}
                            {errors.activities && (
                              <p className="text-red-500">
                                Please select an option
                              </p>
                            )}
                          </div>

                          <div className="border border-black p-4">
                            <label htmlFor="fitnessPro" className="block mb-2">
                              Are you currently a fitness professional, movement
                              coach, manual or physical therapist?
                            </label>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="yes"
                                name="fitnessPro"
                                value="yes"
                                {...register('fitnessPro', { required: true })}
                                onClick={() => setShowFitnessPro(true)} // Show input box when "Yes" is clicked
                              />
                              <label htmlFor="yes" className="ml-2 mr-4">
                                Yes
                              </label>
                              <input
                                type="radio"
                                id="no"
                                name="fitnessPro"
                                value="no"
                                {...register('fitnessPro', { required: true })}
                                onClick={() => setShowFitnessPro(false)} // Hide input box when "No" is clicked
                              />
                              <label htmlFor="no" className="ml-2">
                                No
                              </label>
                            </div>
                            {/* Conditionally render input box */}
                            {showFitnessPro && (
                              <div className="mt-4">
                                <label
                                  htmlFor="fitnessPro"
                                  className="block mb-2"
                                >
                                  Please specify:
                                </label>
                                <input
                                  type="text"
                                  id="fitnessPro"
                                  placeholder="Type your answer here"
                                  name="fitnessPro"
                                  className={`py-3 px-4 block w-full border text-sm ${
                                    errors?.fitnessPro ? 'error' : ''
                                  } ${
                                    errors?.fitnessPro
                                      ? 'border-red-500 text-red-900'
                                      : 'border-black'
                                  }`}
                                  {...register('fitnessPro')}
                                />
                              </div>
                            )}
                            {/* Display error message for injury */}
                            {errors.injury && (
                              <p className="text-red-500">
                                Please select an option
                              </p>
                            )}
                          </div>

                          <div className="border border-black p-4">
                            <label htmlFor="isVegan" className="block mb-2">
                              Are you vegan, vegetarian, pescatarian or anything
                              of this nature?
                            </label>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="yes"
                                name="isVegan"
                                value="yes"
                                {...register('isVegan', { required: true })}
                                onClick={() => setShowIsVegan(true)} // Show input box when "Yes" is clicked
                              />
                              <label htmlFor="yes" className="ml-2 mr-4">
                                Yes
                              </label>
                              <input
                                type="radio"
                                id="no"
                                name="isVegan"
                                value="no"
                                {...register('isVegan', { required: true })}
                                onClick={() => setShowIsVegan(false)} // Hide input box when "No" is clicked
                              />
                              <label htmlFor="no" className="ml-2">
                                No
                              </label>
                            </div>
                            {/* Conditionally render input box */}
                            {showIsVegan && (
                              <>
                                <div className="my-4">
                                  <label
                                    htmlFor="isVegan"
                                    className="block mb-2"
                                  >
                                    Please expand on the nature of your diet,
                                    including why you are currently
                                    vegan/vegetarian etc and why you are
                                    avoiding animal products
                                  </label>
                                  <input
                                    type="text"
                                    id="isVegan"
                                    placeholder="Type your answer here"
                                    name="isVegan"
                                    className={`py-3 px-4 block w-full border${
                                      errors?.isVegan ? 'error' : ''
                                    } ${
                                      errors?.isVegan
                                        ? 'border-red-500 text-red-900'
                                        : 'border-black'
                                    }`}
                                    {...register('isVegan')}
                                  />
                                </div>

                                <label
                                  htmlFor="dietRating"
                                  className="block mb-2"
                                >
                                  How open are you to changing your diet if you
                                  were presented with information that a diet
                                  that included animal products is essential to
                                  your recovery and health?
                                </label>

                                {dietRatingError && (
                                  <p className="text-red-500">
                                    {dietRatingError}
                                  </p>
                                )}

                                <Rating
                                  style={{ maxWidth: 180 }}
                                  value={dietRating}
                                  onChange={(value) => setDietRating(value)}
                                  className=""
                                />
                              </>
                            )}
                            {/* Display error message for injury */}
                            {errors.isVegan && (
                              <p className="text-red-500">
                                Please select an option
                              </p>
                            )}
                          </div>

                          <div className="border border-black p-4">
                            <label htmlFor="isGrains" className="block mb-2">
                              Do you currently consume grains?
                            </label>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="yes"
                                name="isGrains"
                                value="yes"
                                {...register('isGrains', { required: true })}
                                onClick={() => setShowIsGrains(true)} // Show input box when "Yes" is clicked
                              />
                              <label htmlFor="yes" className="ml-2 mr-4">
                                Yes
                              </label>
                              <input
                                type="radio"
                                id="no"
                                name="isGrains"
                                value="no"
                                {...register('isGrains', { required: true })}
                                onClick={() => setShowIsGrains(false)} // Hide input box when "No" is clicked
                              />
                              <label htmlFor="no" className="ml-2">
                                No
                              </label>
                            </div>

                            {/* Display error message for chronic pain only if showDetails is false */}
                            {!showIsGrains && errors.isGrains && (
                              <p className="text-red-500">
                                {errors?.isGrains.message}
                              </p>
                            )}

                            {/* Conditionally render input box */}
                            {showIsGrains && (
                              <>
                                <div className="mt-4">
                                  <label
                                    htmlFor="scoliosIsGrains"
                                    className="block mb-2"
                                  >
                                    Please elaborate on the type of grains you
                                    consume
                                  </label>
                                  <input
                                    type="text"
                                    id="isGrains"
                                    placeholder="Type your answer here"
                                    name="isVegan"
                                    {...register('isGrains')}
                                    className={`py-3 px-4 block w-full border ${
                                      errors?.isGrains ? 'error' : ''
                                    } ${
                                      errors?.isGrains
                                        ? 'border-red-500 text-red-900'
                                        : 'border-black'
                                    }`}
                                  />
                                </div>

                                <label
                                  htmlFor="grainRating"
                                  className="block mb-2 mt-2"
                                >
                                  How open are you to decrease or eliminate the
                                  consumption of grains from your diet. Grains
                                  will be inflammatory to the body impacting
                                  your posture and biomechanics negatively
                                </label>

                                {grainRatingError && (
                                  <p className="text-red-500">
                                    {grainRatingError}
                                  </p>
                                )}

                                <Rating
                                  style={{ maxWidth: 180 }}
                                  value={grainRating}
                                  onChange={(value) => setGrainRating(value)}
                                  className=""
                                />

                                {/* Display error message for injury */}
                                {errors.isGrains && (
                                  <p className="text-red-500">
                                    Please select an option
                                  </p>
                                )}
                              </>
                            )}
                          </div>

                          <div className="border border-black p-4">
                            <label htmlFor="sun" className="block mb-4">
                              How often do you get sunlight?
                            </label>
                            <input
                              placeholder={`${
                                errors?.sun?.message
                                  ? ''
                                  : 'Type Your Answere Here'
                              }${errors?.sun?.message || ''}`}
                              type="text"
                              name="sun"
                              id="sun"
                              className={`py-3 px-4 block w-full border ${
                                errors?.sun ? 'error' : ''
                              } ${
                                errors?.sun
                                  ? 'border-red-500 text-red-900'
                                  : 'border-black'
                              }`}
                              {...register('sun')}
                            />
                          </div>

                          <div className="border border-black p-4">
                            <label htmlFor="nature" className="block mb-4">
                              How often do you get into nature?
                            </label>
                            <input
                              placeholder={`${
                                errors?.nature?.message
                                  ? ''
                                  : 'Type Your Answere Here'
                              }${errors?.nature?.message || ''}`}
                              type="text"
                              name="nature"
                              id="nature"
                              className={`py-3 px-4 block w-full border ${
                                errors?.nature ? 'error' : ''
                              } ${
                                errors?.nature
                                  ? 'border-red-500 text-red-900'
                                  : 'border-black'
                              }`}
                              {...register('nature')}
                            />
                          </div>

                          <div className="border border-black p-4">
                            <label htmlFor="drugUsage" className="block mb-2">
                              Do you currently use any prescription or
                              recreational drugs?
                            </label>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="drugUsageYes"
                                name="drugUsage"
                                value="yes"
                                {...register('drugUsage', { required: true })}
                                onClick={() => setShowshowDrugUsageDetail(true)} // Show input box when "Yes" is clicked
                              />
                              <label
                                htmlFor="drugUsageYes"
                                className="ml-2 mr-4"
                              >
                                Yes
                              </label>
                              <input
                                type="radio"
                                id="drugUsageNo"
                                name="drugUsage"
                                value="no"
                                {...register('drugUsage', { required: true })}
                                onClick={() =>
                                  setShowshowDrugUsageDetail(false)
                                } // Hide input box when "No" is clicked
                              />
                              <label htmlFor="drugUsageNo" className="ml-2">
                                No
                              </label>
                            </div>
                            {/* Conditionally render input box */}
                            {/* Display error message for drug usage only if showDetails is false */}
                            {!showDrugUsageDetails && errors.drugUsage && (
                              <p className="text-red-500">
                                Please select an option
                              </p>
                            )}

                            {/* Conditionally render input box */}
                            {showDrugUsageDetails && (
                              <div className="mt-4">
                                <label
                                  htmlFor="drugDetails"
                                  className="block mb-2"
                                >
                                  Please describe your use of prescription or
                                  recreational drugs
                                </label>
                                <input
                                  type="text"
                                  id="drugUsage"
                                  placeholder="Type your answer here"
                                  name="drugUsage"
                                  {...register('drugUsage')}
                                  className={`py-3 px-4 block w-full border ${
                                    errors?.drugUsage ? 'error' : ''
                                  } ${
                                    errors?.drugUsage
                                      ? 'border-red-500 text-red-900'
                                      : 'border-black'
                                  }`}
                                />
                              </div>
                            )}
                          </div>

                          <div className="border border-black p-4">
                            <label
                              htmlFor="alcoholUsage"
                              className="block mb-2"
                            >
                              Do you drink Alcohol?
                            </label>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="alcoholUsageYes"
                                name="alcoholUsage"
                                value="yes"
                                {...register('alcoholUsage', {
                                  required: true,
                                })}
                                onClick={() => setShowAlcoholUsageDetails(true)} // Show input box when "Yes" is clicked
                              />
                              <label
                                htmlFor="alcoholUsageYes"
                                className="ml-2 mr-4"
                              >
                                Yes
                              </label>
                              <input
                                type="radio"
                                id="alcoholUsageNo"
                                name="alcoholUsage"
                                value="no"
                                {...register('alcoholUsage', {
                                  required: true,
                                })}
                                onClick={() =>
                                  setShowAlcoholUsageDetails(false)
                                } // Hide input box when "No" is clicked
                              />
                              <label htmlFor="alcoholUsage" className="ml-2">
                                No
                              </label>
                            </div>
                            {/* Conditionally render input box */}
                            {/* Display error message for drug usage only if showDetails is false */}
                            {!showAlcoholUsageDetails &&
                              errors.alcoholUsage && (
                                <p className="text-red-500">
                                  Please select an option
                                </p>
                              )}

                            {/* Conditionally render input box */}
                            {showAlcoholUsageDetails && (
                              <div className="mt-4">
                                <label
                                  htmlFor="alcoholUsageDetails"
                                  className="block mb-2"
                                >
                                  How often?
                                </label>
                                <input
                                  type="text"
                                  id="alcoholUsage"
                                  placeholder="Type your answer here"
                                  name="alcoholUsage"
                                  {...register('alcoholUsage')}
                                  className={`py-3 px-4 block w-full border ${
                                    errors?.alcoholUsage ? 'error' : ''
                                  } ${
                                    errors?.alcoholUsage
                                      ? 'border-red-500 text-red-900'
                                      : 'border-black'
                                  }`}
                                />
                              </div>
                            )}
                          </div>

                          <div className="border border-black p-4">
                            <label htmlFor="FPprogram" className="block mb-2">
                              Have you completed or are working on the 10 week
                              Functional Patterns online program?
                            </label>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="yes"
                                name="FPprogram"
                                value="yes"
                                {...register('FPprogram', { required: true })}
                                onClick={() => setshowFPprogramDetails(true)} // Show input box when "Yes" is clicked
                              />
                              <label htmlFor="yes" className="ml-2 mr-4">
                                Yes
                              </label>
                              <input
                                type="radio"
                                id="no"
                                name="FPprogram"
                                value="no"
                                {...register('FPprogram', { required: true })}
                                onClick={() => setshowFPprogramDetails(false)} // Show input box when "Yes" is clicked
                              />
                              <label htmlFor="no" className="ml-2">
                                No
                              </label>
                            </div>
                            {/* Display error message for injury */}
                            {errors.FPprogram && (
                              <p className="text-red-500">
                                {errors?.FPprogram.message}
                              </p>
                            )}
                          </div>

                          {/* Conditionally render input box */}
                          {/* Display error message for drug usage only if showDetails is false */}
                          {!showFPprogramDetails && errors.FPprogram && (
                            <p className="text-red-500">
                              Please select an option
                            </p>
                          )}

                          {/* Conditionally render input box */}
                          {showFPprogramDetails && (
                            <div className="mt-4">
                              <label
                                htmlFor="FPprogramDetails"
                                className="block mb-2"
                              >
                                How many weeks have you completed?
                              </label>
                              <input
                                type="text"
                                id="FPprogram"
                                placeholder="Type your answer here"
                                name="FPprogram"
                                {...register('FPprogram')}
                                className={`py-3 px-4 block w-full border ${
                                  errors?.FPprogram ? 'error' : ''
                                } ${
                                  errors?.FPprogram
                                    ? 'border-red-500 text-red-900'
                                    : 'border-black'
                                }`}
                              />
                            </div>
                          )}

                          <div className="border border-black p-4">
                            {' '}
                            <label
                              htmlFor="tainingTimes"
                              className="block mb-4"
                            >
                              {' '}
                              What would be the best days/times for you to
                              train? Please be as specific as possible, as our
                              practitioners will only have specific
                              availability.
                            </label>
                            <input
                              placeholder={`${
                                errors?.tainingTimes?.message
                                  ? ''
                                  : 'Type Your Answere Here'
                              }${errors?.tainingTimes?.message || ''}`}
                              type="text"
                              name="tainingTimes"
                              id="tainingTimes"
                              className={`py-3 px-4 block w-full border ${
                                errors?.tainingTimes ? 'error' : ''
                              } ${
                                errors?.tainingTimes
                                  ? 'border-red-500 text-red-900'
                                  : 'border-black'
                              }`}
                              {...register('tainingTimes')}
                            />
                          </div>
                          <div className="border border-black p-4">
                            <label htmlFor="goals" className="block mb-4">
                              What are you looking to accomplish by doing
                              Functional Patterns?
                            </label>
                            <input
                              placeholder={`${
                                errors?.goals?.message
                                  ? ''
                                  : 'Type Your Answere Here'
                              }${errors?.goals?.message || ''}`}
                              type="text"
                              name="goals"
                              id="goals"
                              className={`py-3 px-4 block w-full border ${
                                errors?.goals ? 'error' : ''
                              } ${
                                errors?.goals
                                  ? 'border-red-500 text-red-900'
                                  : 'border-black'
                              }`}
                              {...register('goals')}
                            />
                          </div>
                        </div>

                        <div className="flex justify-center my-11">
                          <button
                            className="text-white px-10 bg-black tracking-[2px] py-3 font-BebasNeue text-[18px] uppercase bg-gradient-to-r hover:from-[#AA0000] hover:to-[#CC0000] hover:text-[#09090b] mr-4"
                            onClick={() => {
                              handleOpen();
                              reset();
                            }}
                          >
                            cancel
                          </button>

                          <button
                            className="bg-black text-white px-10 tracking-[2px] py-3 font-BebasNeue text-[18px] uppercase bg-gradient-to-r hover:from-[#AA0000] hover:to-[#CC0000] hover:text-[#09090b] ml-4"
                            type="submit"
                          >
                            submit
                          </button>
                        </div>
                      </form>
                    </DialogBody>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;
