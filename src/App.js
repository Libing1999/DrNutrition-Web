import React from "react";

import SideBar from "./component/reactrouter/homescreen/sidebar/SideBar";
import SearchInput from "./component/reactrouter/homescreen/searchengine/SearchInput";
import LogForm from "./component/reactrouter/signin page/LogForm";
import MainContent from "./component/reactrouter/meals page/MainContent";
import RegistrationForm from "./component/reactrouter/signup page/RegistrationForm";
import Form from "./component/reactrouter/signin page/Form";
import MainRouter from "./component/reactrouter/MainRouter";

const App = () => {
  return (
    <div>
      {/* <SideBar />
      <SearchInput /> */}
      {/* <LogForm /> */}
      {/* <RegistrationForm /> */}
      {/* <MainContent /> */}
      <MainRouter />
    </div>
  );
};

export default App;
