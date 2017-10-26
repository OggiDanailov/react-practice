import React from 'react';

export default class Color extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			color: 'red'
		}
	}

	changeColor(event){
		this.setState({
			color: event.target.value
		})
	}

	render(){
		return(
			<div style={
				{width: 200,
				 border:'2px solid red',
				  height: 100,
				  margin: '0 auto',
				  backgroundColor: this.state.color
				}

			}>
			<br />
			<input value={this.state.color} onChange={this.changeColor.bind(this)}  />
			</div>
		)

	}

}