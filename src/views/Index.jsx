import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/PageHeader/PageHeader";

// sections for this page/view
import Basics from "views/IndexSections/Basics";
import Navbars from "views/IndexSections/Navbars";
import Tabs from "views/IndexSections/Tabs";
import Pagination from "views/IndexSections/Pagination";
import Notifications from "views/IndexSections/Notifications";
import Typography from "views/IndexSections/Typography";
import JavaScript from "views/IndexSections/JavaScript";
import NucleoIcons from "views/IndexSections/NucleoIcons";
import Signup from "views/IndexSections/Signup";
import Examples from "views/IndexSections/Examples";
import Download from "views/IndexSections/Download";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
            <Basics />
            <Navbars />
            <Tabs />
            <Pagination />
            <Notifications />
            <Typography />
            <JavaScript />
            <NucleoIcons />
            <Signup />
            <Examples />
            <Download />
          </div>
        </div>
      </>
    );
  }
}

export default Index;
