import { ElfsightWidget } from 'react-elfsight-widget';
import React from 'react';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const widgetIg = import.meta.env.VITE_APP_widgetId_IG;
const Social = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '/socials',
      title: 'Social',
    });
  });

  return (
    <div className="pt-[75px] min-h-screen bg-gradient-to-t from-[#1c1917] from-10% via-[#1c1917] via-30%  to-[#000000] to-80%">
      <div className="">
        {' '}
        <h1 className="uppercase items-center text-center text-white mb-5 lg:text-[36px]">
          socials
        </h1>
        <div className="max-w-lg mx-auto">
          <ElfsightWidget widgetId={widgetIg} lazy modern />
        </div>
      </div>
    </div>
  );
};

export default Social;
