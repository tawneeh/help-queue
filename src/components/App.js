import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App(){
  return (
    <React.Fragment> {/* All components returning more than one element must be wrapped in a <React.Fragment> */}
      <Header />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;

{/* App.js is just a container for our other components */}

{/* The shorthand for React.Fragment is the opening and closing tags with nothing inside! */}