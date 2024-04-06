import axios from "axios";
import Button from "../../components/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import Review from "../../components/Reviews/Review";
import { Helmet } from "react-helmet";
import { Rating } from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const VITE_REVIEWS_API_DEV = import.meta.env.VITE_REVIEWS_API_DEV;

const validationSchema = Yup.object({
  contact_name: Yup.string().required("First Name is required"),
  contact_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  review: Yup.string()
    .max(250, "Message is too long")
    .required("Message is required"),
});

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [numReviewsToShow, setNumReviewsToShow] = useState(3);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [open, setOpen] = useState(false);
  const [ratingError, setRatingError] = useState("");

  // Function to close the dialog and reset form data
  const handleDialogClose = () => {
    setOpen(false); // Close the dialog
    reset(); // Reset form data
  };

  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
    // Combine form data with rating value
    const reviewData = { ...formData, rating };

    if (rating <= 0) {
      setRatingError("Please select a rating before submitting.");
      // alert("Please provide a rating before submitting.");
      return;
    }

    console.log(reviewData);
    try {
      // Send form data to the API
      await axios.post(`${VITE_REVIEWS_API_DEV}`, reviewData);

      // Add the newly submitted review to the reviews array
      const newReview = { ...reviewData, created_at: new Date().toISOString() };
      setReviews([newReview, ...reviews]);

      // Close the dialog and reset form data
      handleDialogClose();

      // Open the dialog
      handleOpen();
    } catch (error) {
      // Handle errors if any
      handleErrors(error);
    } finally {
      // Set submitting to false
      actions.setSubmitting(false);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = () => {
    axios.get(`${VITE_REVIEWS_API_DEV}`).then((response) => {
      // Sort the reviews array in descending order based on the 'created_at' property
      const sortedReviews = response.data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      setReviews(sortedReviews);
    });
  };

  useEffect(() => {
    // Update displayedReviews when reviews or numReviewsToShow change
    setDisplayedReviews(reviews.slice(0, numReviewsToShow));
  }, [reviews, numReviewsToShow]);

  const loadMoreReviews = () => {
    // Increase the number of reviews to show by 3
    setNumReviewsToShow(numReviewsToShow + 3);
  };

  return (
    <>
      <div className="py-5 mt-[75px] min-h-screen mx-4">
        <Helmet>
          <meta charset="UTF-8" />
          <title>NYC Biomechanics - Reviews</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index,follow" />
          <meta
            name="description"
            content="Unlock pain-free movement with our unique biomechanics training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
          />
          <meta
            name="keywords"
            content="Functional Patterns New York, NYC, Biomechanics, NYC Biomechanics, Brent McMillan, mcmillan, Brent, New York City, Functional Patterns NYC, Manhattan, Brooklyn, Training, Fitness, Movement, Posture, Corrective exercise, Strength training, Mobility, Neuromuscular re-education, Core stability, Alignment, Injury prevention, Movement efficiency, Body awareness, Functional training, Kinetic chain, Balance, Flexibility, Rehabilitation, Sports performance, Range of motion, Dynamic movement, Motor control"
          />
          <meta name="theme-color" content="#303030" />
          <meta name="copyright" content="Copyright © 2024 NYC Biomechanics" />
          <meta name="language" content="English" />
          <meta name="Classification" content="Business" />
          <meta name="url" content="https://nycbiomechanics.com/" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="NYC Biomechanics - Reviews" />
          <meta
            property="og:description"
            content="Unlock pain-free movement with our unique biomechanics training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
          />
          <meta property="og:image" content="/image-black.png" />
          <meta property="og:url" content="https://nycbiomechanics.com/" />
          <meta property="og:site_name" content="NYC Biomechanics" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://nycbiomechanics.com/" />
          <meta name="twitter:title" content="NYC Biomechanics - Reviews" />
          <meta name="twitter:image" content="/main-logo.jpg" />
          <link rel="icon" type="image/svg+xml" href="/logo-white.svg" />

          <link
            rel="apple-touch-icon"
            type="image/svg+xml"
            sizes="76x76"
            href="/nyc-biomechanics-logo.svg?width=76"
          />
          <link
            rel="mask-icon"
            href="/nyc-biomechanics-logo.svg"
            color="#5bbad5"
          />
          <link rel="canonical" href="https://nycbiomechanics.com/" />
        </Helmet>
        <div className="py-5 n mx-4">
          <Helmet>{/* Helmet meta tags */}</Helmet>
          <h1 className="uppercase items-center text-center mb-5">
            what our customers say
          </h1>
          <div className="items-center text-center">
            <Button
              onClick={handleOpen}
              className="items-center text-center"
              style={{ backgroundColor: "#030201", color: "white" }}
            >
              write a review
            </Button>
          </div>
          <div className="py-5 max-w-[500px] mx-auto">
            {/* Display the displayedReviews */}
            {displayedReviews.map((review) => (
              <Review reviews={review} key={review.id} />
            ))}
            {/* Button to load more reviews */}
            {numReviewsToShow < reviews.length && (
              <Button
                className="items-center text-center"
                style={{ backgroundColor: "#030201", color: "white" }}
                onClick={loadMoreReviews}
              >
                Load More
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="py-5 max-w-[500px] mx-auto">
        <div>
          <Dialog open={open} handler={handleOpen} className="rounded-none">
            <DialogHeader className="mt-6">
              <h1 className="uppercase items-center text-center mx-auto font-normal">
                write your review
              </h1>
            </DialogHeader>
            <DialogBody className="text-black">
              <form
                id="review-form"
                onSubmit={handleSubmit(onSubmit)}
                className=""
              >
                <div className="grid gap-4 lg:gap-6">
                  {ratingError && (
                    <p className="text-red-500 uppercase text-center">
                      {ratingError}
                    </p>
                  )}
                  <div className="flex items-center justify-center mb-6">
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={rating}
                      onChange={(value) => setRating(value)}
                      className=""
                    />
                  </div>
                  <div>
                    <input
                      placeholder={`${
                        errors?.contact_name?.message ? "" : "Name"
                      }${errors?.contact_name?.message || ""}`}
                      type="text"
                      name="contact_name"
                      id="contact_name"
                      className={`py-3 px-4 block w-full border text-sm ${
                        errors?.contact_name ? "error" : ""
                      } ${
                        errors?.contact_name
                          ? "border-red-500 text-red-900"
                          : "border-black"
                      }`}
                      {...register("contact_name")}
                    />
                  </div>

                  <div>
                    <input
                      placeholder={`${
                        errors?.contact_email?.message ? "" : "Email"
                      }${errors?.contact_email?.message || ""}`}
                      type="email"
                      name="contact_email"
                      id="contact_email"
                      autoComplete="Email"
                      className={`py-3 px-4 block w-full border text-sm ${
                        errors?.contact_email ? "error" : ""
                      } ${
                        errors?.contact_email
                          ? "border-red-500 text-red-900"
                          : "border-black"
                      }`}
                      {...register("contact_email")}
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder={`${
                        errors?.review?.message ? "" : "Type your message"
                      }${errors?.review?.message || ""}`}
                      name="review"
                      id="review"
                      rows="4"
                      className={`py-3 px-4 block w-full border text-sm ${
                        errors?.review ? "error" : ""
                      } ${
                        errors?.review
                          ? "border-red-500 text-red-900"
                          : "border-black"
                      }`}
                      {...register("review")}
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-8">
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
            <DialogFooter></DialogFooter>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Reviews;
