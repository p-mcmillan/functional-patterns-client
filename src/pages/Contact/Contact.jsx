import ReactGA from "react-ga4";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { AnalyticsEvent } from "../../function.js";

const apiBaseUrl = import.meta.env.VITE_CONTACT_API;

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phoneNumber: Yup.string().required("Phone Number is required"),
  message: Yup.string()
    .max(250, "Message is too long")
    .required("Message is required"),
});

const Contact = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/contact-us",
      title: "Contact",
    });
  });
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleErrors = (error) => {
    console.error("Error:", error);
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
      alert("Error: " + JSON.stringify(error.response.data));
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Request:", error.request);
      alert(error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Error message:", error.message);
      alert("Error: " + error.message);
    }
  };

  const onSubmit = async (formData, actions) => {
    try {
      await axios.post(`${apiBaseUrl}`, formData);
      setIsSubmitted(true);
      AnalyticsEvent("Contact Form, Success");
      setTimeout(() => {
        navigate("/");
      }, 5000);
      handleErrors(error);
    } finally {
      // actions.setSubmitting(false)
    }
  };

  return (
    <div className="justify-center items-center min-h-screen">
      <Helmet>
        <meta charset="UTF-8" />
        <title>
          Contact Us - NYC Biomechanics - Functional Patterns Training in NYC
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <meta name="copyright" content="Copyright © 2024 NYC Biomechanics" />
        <meta name="language" content="English" />
        <meta name="Classification" content="Business" />
        <meta name="url" content="https://www.nycbiomechanics.com/contact-us" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Us - NYC Biomechanics - Functional Patterns Training in NYC"
        />
        <meta
          property="og:description"
          content="Unlock pain-free movement with our unique Functional Patterns Training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
        />
        <meta
          property="og:image"
          content="https://www.nycbiomechanics.com/image-black.png"
        />
        <meta
          property="og:url"
          content="https://www.nycbiomechanics.com/contact-us"
        />
        <meta property="og:site_name" content="NYC Biomechanics" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.nycbiomechanics.com/contact-us"
        />
        <meta
          name="twitter:title"
          content="Contact Us - NYC Biomechanics - Functional Patterns Training in NYC"
        />
        <meta
          name="twitter:image"
          content="https://www.nycbiomechanics.com/main-logo.jpg"
        />
        <link rel="icon" type="image/svg+xml" href="/logo-white.svg" />

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
          href="https://www.nycbiomechanics.com/contact-us"
        />
      </Helmet>
      <div className="max-w-[85rem] px-4 pt-[75px] lg:pt-[100px] pb-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className=" text-[#030201] uppercase lg:text-[36px]">
              contact us
            </h1>
          </div>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          {isSubmitted ? (
            <div className="flex flex-col p-4 sm:p-6 lg:p-8 text-center items-center justify-center">
              <h2 className="mb-8 text-xl lg:text-[18px]">
                Thank you for contacting us!
              </h2>
              <p>Your message has been successfully submitted.</p>
            </div>
          ) : (
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <input
                      placeholder={`${
                        errors?.firstName?.message ? "" : "First Name"
                      }${errors?.firstName?.message || ""}`}
                      type="text"
                      name="firstName"
                      id="firstName"
                      className={`py-3 px-4 block w-full border text-sm ${
                        errors?.firstName ? "error" : ""
                      } ${
                        errors?.firstName
                          ? "border-red-500 text-red-900"
                          : "border-black"
                      }`}
                      {...register("firstName")}
                    />
                  </div>
                  <div>
                    <input
                      placeholder={`${
                        errors?.lastName?.message ? "" : "Last Name"
                      }${errors?.lastName?.message || ""}`}
                      type="text"
                      name="lastName"
                      id="lastName"
                      className={`py-3 px-4 block w-full border text-sm ${
                        errors?.lastName ? "error" : ""
                      } ${
                        errors?.lastName
                          ? "border-red-500 text-red-900"
                          : "border-black"
                      }`}
                      {...register("lastName")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <input
                      placeholder={`${errors?.email?.message ? "" : "Email"}${
                        errors?.email?.message || ""
                      }`}
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="Email"
                      className={`py-3 px-4 block w-full border text-sm ${
                        errors?.email ? "error" : ""
                      } ${
                        errors?.email
                          ? "border-red-500 text-red-900"
                          : "border-black"
                      }`}
                      {...register("email")}
                    />
                  </div>

                  <div>
                    <input
                      placeholder={`${
                        errors?.phoneNumber?.message ? "" : "Phone Number"
                      }${errors?.phoneNumber?.message || ""}`}
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      className={`py-3 px-4 block w-full border text-sm ${
                        errors?.phoneNumber ? "error" : ""
                      } ${
                        errors?.phoneNumber
                          ? "border-red-500 text-red-900"
                          : "border-black"
                      }`}
                      {...register("phoneNumber")}
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder={`${
                      errors?.message?.message ? "" : "Type your message"
                    }${errors?.message?.message || ""}`}
                    name="message"
                    id="message"
                    rows="4"
                    className={`py-3 px-4 block w-full border text-sm ${
                      errors?.message ? "error" : ""
                    } ${
                      errors?.message
                        ? "border-red-500 text-red-900"
                        : "border-black"
                    }`}
                    {...register("message")}
                  />
                </div>
              </div>

              <div className="mt-6 grid">
                <Button
                  type="submit"
                  style={{ backgroundColor: "#030201", color: "white" }}
                >
                  send
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
