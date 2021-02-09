import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => { // arrow notation here is very important
    this.setState({formVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleState = null;
    let addTicketButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
    } else {
      currentlyVisibleState = <TicketList />
      addTicketButton = <button onClick={this.handleClick}>Add Ticket</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addTicketButton}
      </React.Fragment>
    );
  }
}

export default TicketControl;


// First, we create a variable called currentlyVisibleState and set it to null because we haven't determined which component should be rendered yet.

// Next, we can access any property in this.state with dot notation just as we would with any other JavaScript object. If this.state.formVisibleOnPage is true, the currentlyVisibleState will be set to our NewTicketForm component. Otherwise, our currentlyVisibleState will be set to our TicketList component.

// Note that this code is just JavaScript, not JSX. We can use plain old JavaScript outside of our return() statement. We only need to use JSX and curly braces for evaluation inside our return()