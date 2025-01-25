import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UpcomingClasses from "./components/UpcomingClasses";
import Assignments from "./components/Assignments";

const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar className="hidden sm:block" />

      <div className="flex-1">
        <Header />
        <main className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-1 sm:col-span-2">
            <UpcomingClasses />
          </div>

          {/* Assignments - Hidden on Mobile */}
          <div className="hidden sm:block">
            <Assignments />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
