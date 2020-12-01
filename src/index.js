import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: null,
			status: null
		};
	}

	componentDidMount(){
		fetch("https://dog.ceo/api/breeds/image/random")
		.then(res => res.json())
		.then(
			(result) => 
				this.setState({
					data: result.message,
					status: result.status
				})
			);
	}

	render(){
		const {data,success} = this.state;
		return(
			<h1> For my Baby Saks, with all the love I have, 
			Guess Which Dog Is This 


			<div>
			 <img src={data} />
			</div>
			
			</h1>
			)
	}
}


ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);
