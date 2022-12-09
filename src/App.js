import React from "react";
import Layout from "./component/reactrouter/overview/Layout";
import SideBar from "./component/reactrouter/homescreen/sidebar/SideBar";
import SearchInput from "./component/reactrouter/homescreen/searchengine/SearchInput";
import LogForm from "./component/reactrouter/signin page/LogForm";
import MainContent from "./component/reactrouter/meals page/MainContent";
import RegistrationForm from "./component/reactrouter/signup page/RegistrationForm";
import Form from "./component/reactrouter/signin page/Form";
import MainRouter from "./component/reactrouter/MainRouter";
import Content from "./component/reactrouter/overview/Content";

const App = () => {
  return (
    <div>
      {/* <SideBar />
      <SearchInput /> */}
      {/* <LogForm /> */}
      {/* <RegistrationForm /> */}
      {/* <MainContent /> */}
      {/* <MainRouter /> */}

      <Layout />
      {/* <Content /> */}
    </div>
  );
};

export default App;
