import React, { useState } from 'react';
import TopTab from '../../../components/TopTab';
import BottomTab from '../../../components/BottomTab';
import WelcomeFarmPage from '../../farm-register/WelcomeFarmPage';
import FarmDetailsForm from '../../farm-register/FarmDetailsForm';
import { Helmet } from 'react-helmet';
import FarmRegisterDone from '../../farm-register/FarmRegisterDone';
import UserFormDetails from '../../users/UserFormDetails';
import FirstProduct from '../../product-page/FirstProduct';
import EditPage from '../../product-page/EditPage';
import MarketHomePage from '../../market/MarketHomePage';
import DetailsProductMarketHomePage from '../../market/DetailProductMarketHomePage';


const Market = () => {
  const [activeMarketTab, setActiveMarketTab] = useState('MarketHomePage');

  const renderContent = () => {
    switch (activeMarketTab) {
      case 'MarketHomePage':
        return <MarketHomePage setActiveMarketTab={setActiveMarketTab} />
        case 'DetailsProductMarketHomePage':
        return <DetailsProductMarketHomePage setActiveMarketTab={activeMarketTab} />
      default:
        return <WelcomeFarmPage />;
    }
  };

  return (
    <div className='relative h-[100vh] overflow-y-auto'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Farm Market - Farm Direct</title>
      </Helmet>
      <TopTab setActiveMarketTab={setActiveMarketTab} activeMarketTab={activeMarketTab} />
      {renderContent()}
      <BottomTab activeTab='Market' />
    </div>
  );
};

export default Market;