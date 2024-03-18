import React from "react";
import PlayStore from "../../components/playstore/PlayStore";
import Banner from "../../components/banner/Banner";
import SiteFeatures from "../../components/siteFeatures/SiteFeatures";

const HomPage = () => {
  return (
    <div>
      <Banner />
      <SiteFeatures />
      <PlayStore />
    </div>
  );
};

export default HomPage;
