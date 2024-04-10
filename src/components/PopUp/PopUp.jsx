import PropTypes from "prop-types";

const PopUp = ({ openPopUp, closePopUp, image }) => {
  const handleLosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  const handleCloseClick = () => {
    closePopUp();
  };

  if (!openPopUp || !image) return null;

  return (
    <div
      id="ModelContainer"
      onClick={handleLosePopUp}
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm z-50"
    >
      <div
        className="p-1 bg-black
       ms:w-5/12 md:w-1/3 shadow-inner border-e-emerald-600 rounded-lg py-5"
      >
        <div className="w-full h-full p-3 justify-center items-center">
          <img
            src={image}
            alt={`popup-image-${image.id}`}
            className="w-full h-full object-cover"
          />
        </div>
        <ion-icon
          onClick={handleCloseClick}
          name="close-circle-outline"
        ></ion-icon>
      </div>
    </div>
  );
};

PopUp.propTypes = {
  openPopUp: PropTypes.bool.isRequired,
  closePopUp: PropTypes.func.isRequired,
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default PopUp;
