const React = require('react');

class MessageItem extends React.Component {
	render () {

		if (this.props.data.user !== 'david') {
			return (
				<div>
				<div className="MessageItem u-pull-left">
					{this.props.data.message}
				</div><br></br>
				</div>
			);
		} else {
			return (
				<div>
				<div className="MessageItem u-pull-right">
					{this.props.data.message}
				</div><br/>
				</div>
			);
		}
	}
}

module.exports = MessageItem;