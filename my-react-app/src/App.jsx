import React from "react";
import DropdownUser from "./DropdownUser";
import LazyLoadExample from "./DropdownUser";
import Loader from "./Loader";

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dropdown User Example</h1>
      <Loader />
    </div>
  );
};

export default App;