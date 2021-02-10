import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props){
  return (
      <React.Fragment>
        <hr/>
        {props.ticketList.map((ticket, index) => // loop through the list passed down from TicketControl

          <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index} />
        )}
      </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array 
};

export default TicketList;

{/* As we can see here, map() loops through our masterTicketList. On each iteration, it creates a new Ticket with props corresponding to one of the tickets in masterTicketList. */}