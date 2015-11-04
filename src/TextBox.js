const React = require('react');

class TextBox extends React.Component {
	handleNewMessage () {
		var message = React.findDOMNode(this.refs.message).value.trim();
		this.props.onNewMessage(message);
		React.findDOMNode(this.refs.message).value = '';
	}

	render () {
		return (
			<div className="TextBox">
				<input ref="message" type="text" placeholder="write message"></input>
				<button onClick={this.handleNewMessage.bind(this)}>enter</button>
			</div>

		);
	}
}

module.exports = TextBox;