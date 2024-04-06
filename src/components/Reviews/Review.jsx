import { Rating } from "@material-tailwind/react";
import PropTypes from "prop-types";
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};

const Review = (props) => {
  const { contact_name, created_at, review } = props.reviews;
  const rating = parseFloat(props.reviews.rating);
  const formattedDate = formatDate(created_at);

  return (
    <div className=" mb-7  border border-black">
      <article className="py-5 mx-4 ">
        <div className="flex items-center mb-1">
          <div className="font-medium dark:text-white">
            <p className="text-[16px]">{contact_name}</p>
          </div>
        </div>

        <p className="text-[12px] mb-2">Reviewed on {formattedDate}</p>

        <div>
          <p className="text-[16px]">{review}</p>
        </div>
        <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
          <Rating
            style={{ maxWidth: 180 }}
            value={rating}
            readonly
            className="rating-disabled"
          />
        </div>
      </article>
    </div>
  );
};

Review.propTypes = {
  reviews: PropTypes.shape({
    review: PropTypes.string.isRequired,
    contact_email: PropTypes.string.isRequired,
    contact_name: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
