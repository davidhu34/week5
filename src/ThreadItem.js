const React = require('react');

class ThreadItem extends React.Component {
	render () {
		var users = this.props.data.users;
		var usersStr = '';
		console.log(users);
		for ( var i = 0; i < users.length; i++) {
			if (users[i] != 'david')
				usersStr += users[i] + '';
		}
				console.log(this.props.data);
		return (
			<div onClick={this.props.onClick} className="ThreadItem">
				<b>{usersStr}</b><br/>
				<span>{this.props.data.messages[0].user + ': '}</span>
				<span>{this.props.data.messages[0].message}</span>
				<span>{this.props.data.messages[0].time.toString}</span>
			</div>
		);
	}
}

module.exports = ThreadItem;