import React from 'react';

export default class Name extends React.Component{
	constructor(){
		super();
		this.state = {
			name: 'Oggi',
			location: 'Sofia'
		};
		
		this.changeName = this.changeName.bind(this);

	}
	


	render(){
			
		return (
			<div>
				<h1> {this.state.name }</h1>
				<button onClick={this.changeName}> Change Name </button>
				<h2> {this.state.location} </h2>
				<input vlaue={this.state.location} onChange={this.setLocation.bind(this)} />
			</div>
		)
	}

	changeName(){
			this.setState({name: 'Boro'})								
		}
	setLocation(e){
		const loc = e.target.value
		this.setState({location:loc})
	}

	
}