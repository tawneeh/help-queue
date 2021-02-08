import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Ticket;

{/* We want all ticket info passed from Ticket.js's parent (TicketList) down to Ticket.js. This will help prepare us for working with state. Generally, we will want our state to live in one place and be the single source of truth. Instead of each Ticket.js storing its own data (which wouldn't be a single source of truth), we'll have a parent component store all of the ticket data - that way, our state will be stored in one place */}

{/* It is best practice to assign strict data types to props with a special propTypes property. When we assign strict data types, we are simply stating that a variable (in this case, a property) must be of a certain type. If they aren't, our application will throw an error. We will always assign strict data types to all of our properties. You will also be expected to use PropTypes for all properties on independent projects */}