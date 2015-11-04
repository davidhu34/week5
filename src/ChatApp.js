const React = require('react');
const ThreadList = require('./ThreadList');
const TextBox = require('./TextBox');
const MessageList = require('./MessageList');

class ChatApp extends React.Component {
	constructor() {
		super();

		this.state = {
			data: [
					{
						users:['david', 'bob'],
						messages:[
						   	{
						   		message: 'fuck off davidd',
						   		user: 'bob',
						   		time: 0
						   	},
						   	{
						   		message: 'hi bob',
						   		user: 'david',
						   		time: 0
						   	}
						]
					},
					{
						users:['david', 'jack'],
						messages:[
						   	{
						   		message: 'much idiot',
						   		user: 'jack',
						   		time: 0
						   	},
						   	{
						   		message: 'so dumb',
						   		user: 'david',
						   		time: 0
						   	},
						   	{
						   		message: 'such stupid',
						   		user: 'david',
						   		time: 0	
						   	}

						]
					},
					{
						users:['david', 'ned'],
						messages:[
						   	{
						   		message: 'yo mama',
						   		user: 'ned',
						   		time: 0
						   	},
						   	{
						   		message: 'who\'s there?',
						   		user: 'david',
						   		time: 0
						   	},
						   	{
						   		message: 'knock knock',
						   		user: 'ned',
						   		time: 0	
						   	}

						]
					}

			],

			room: 0
		};
	}

	NewMessage (msg) {
		var newData = this.state.data;
		var msgTime = new Date();
		var newMessage = {
			message: msg,
			time: msgTime,
			user: 'david'
		};
		newData[this.state.room].messages.unshift(newMessage);
		this.setState({
			data: newData,
			room: this.state.room
		});
	}

	ChangeThread (room) {
		this.setState({
			data: this.state.data,
			room: room
		});
	}
	
	render() {
		var talking = '';
		var roomUsers = this.state.data[this.state.room].users;
		for (var i = 0; i < roomUsers.length; i++) {
			if ( roomUsers[i] != 'david' ) {
				talking = roomUsers[i];
				break;
			}
		};
		
		return (
			<div className="ChatApp">
				<div className="one-third column">
					<ThreadList data={this.state.data} onChangeThread={this.ChangeThread.bind(this)} />
				</div>
				<div className="one-third column">
					<h4>{talking}</h4>
					<TextBox onNewMessage={this.NewMessage.bind(this)}/>
					<MessageList data={this.state.data[this.state.room].messages} />
				</div>
				<div className="one-third column"></div>
			</div>
		);
	}
}

module.exports = ChatApp;