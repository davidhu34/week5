const React = require('react');
const ThreadItem = require('./ThreadItem');

class ThreadList extends React.Component {

	render () {
		var threads = this.props.data.map ( function (thread, i) {
				return <tr><td><ThreadItem  onClick={this.props.onChangeThread.bind(this, i)} key={i} data={thread} /></td></tr>
			}, this);
		return (
			<div className="ThreadList">
				<table>
					{threads}
				</table>

			</div>
		);
	}
}

module.exports = ThreadList;