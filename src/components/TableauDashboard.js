import React from "react";
import Iframe from "react-iframe";

const TableauDashboard = ({url}) => {
  return (
    <Iframe
      url={url + '&:showVizHome=no&:embed=true'}
      width="100%"
      height="800px"
      id="tableau-dashboard"
      className="tableau-embed"
      display="initial"
      position="relative"
      allowFullScreen
    />
  );
};

export default TableauDashboard;
