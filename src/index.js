import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Color from './components/Color'


class Profile extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			height: 100,
			width: 100,
			color: 'green'
		}
		this.colorZoomIn = this.colorZoomIn.bind(this);
		this.colorZoomOut = this.colorZoomOut.bind(this)
	}

	render() {				
		var name = this.props.name;
		var age = this.props.age;
		var bio=this.props.bio
		var pic = this.props.pic;



		return(
			<div className='box'>
				<h2 style={{backgroundColor: this.state.color}}>Name: {name} </h2>
				<h3>Age: {age}</h3>
				<h3>Bio: {bio}</h3>
				<div className='img'>
					<img src={pic} height={this.state.height} width={this.state.width} alt='' />
				</div>
				<br />
				<div className='buttons' width={100} height={100}>
					<button  onClick={this.colorZoomIn} className='buttonColor1' height={30} width={30}>+</button>
					<button onClick={this.colorZoomOut} className='buttonColor2' height={30} width={30}>-</button>
				</div>
			</div>
			)
	}
	changeColor(){
				this.setState({color: 'red'})
			}
	changeColorGreen(){
				this.setState({color: 'green'})
			}
	zoomIn(){
				this.setState({height: this.state.height + 20})
				this.setState({width: this.state.width + 20})
			}
	zoomOut(){	
		this.setState({width: this.state.width - 20})
		this.setState({height: this.state.height - 20})
	}
	colorZoomOut(){
		this.changeColorGreen();
		this.zoomOut();
	}
	colorZoomIn(){
		this.changeColor();
		this.zoomIn()	
	}		

} //end of class Profile







ReactDOM.render(
	<Profile name='Oggi' age={40} 
	pic="http://lh3.ggpht.com/_wYTUD4CnYhc/THnuxPdZEeI/AAAAAAAAQFU/SEKCu4EmLEw/s800/man-wearing-a-mexican-hat.jpg" 
	bio='whatever and whatever' />
	, document.getElementById('root'));

ReactDOM.render(
	<Color />,
	document.getElementById('name')
)



