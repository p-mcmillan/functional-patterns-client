import { ElfsightWidget } from 'react-elfsight-widget';

const widgetId = import.meta.env.VITE_APP_widgetId_REVIEWS;

const GoogleReviews = () => {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="max-w-lg mx-auto">
          <ElfsightWidget widgetId={widgetId} lazy modern />
        </div>
      </div>
    </>
  );
};

export default GoogleReviews;
