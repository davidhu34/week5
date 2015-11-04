const React = require('react');
const MessageItem = require('./MessageItem');

class MessageList extends React.Component {
	render () {
		var messageItems = this.props.data.map ( function (message) {
			return <MessageItem data={message} />
		});
		return (
			<div className="MessageList">
				{messageItems}
			</div>
		);		
	}
}

module.exports = MessageList;