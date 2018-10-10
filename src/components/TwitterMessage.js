import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" id="message" onChange={event => this.handleMessageChange(event)} name="message" value={this.state.message} />
        <p>{this.props.maxChars - this.state.message.length} Remaining Characters</p>
      </div>
    );
  }
}

export default TwitterMessage;
