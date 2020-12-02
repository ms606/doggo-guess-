import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: null,
      		status: null,
          	doggoName: ''
     
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

	componentDidMount(){
		fetch("https://dog.ceo/api/breeds/image/random")
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					data:      result.message,
          			status:    result.status
        }) 
      },
      (error) => {
        this.setState({
          error
        });
      }
			);
  }

  handleChange(event){
    
  }
  
  handleSubmit(event){
  	console.log(this.state.data);
    event.preventDefault();
    this.setState({doggoName: this.state.data});
  }

	render(){
    const {data, doggoName} = this.state;
    
    return(
    
      <div>
      <form onSubmit = {this.handleSubmit}>
        <h1> Baby Saks, Check this: type something and press submit button:
        Guess Which Dog Is This</h1>
        <img src={data} height="300"/>
        <br></br>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="submit"  />
      </form>
          
         <div> <h1>{this.state.doggoName}</h1> </div>

      </div>
			)
	}
}


ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);
