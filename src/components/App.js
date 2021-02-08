import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment> {/* All components returning more than one element must be wrapped in a <React.Fragment> */}
      <Header />
      <TicketList />
      {/* This is a JSX comment. Avoid adding JSX comments */}
    </React.Fragment>
  );
}

export default App;

{/* App.js is just a container for our other components */}

{/* The shorthand for React.Fragment is the opening and closing tags with nothing inside! */}