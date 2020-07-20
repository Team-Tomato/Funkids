import React from 'react';
import './Speech.css';

class Showimage extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {loading:true, str:"ANALYSING..", source:"./Images/"};
  	}

  	componentDidMount() {
	  setTimeout(function() {
	      this.setState({loading: false}) 
	  }.bind(this), 2250)
  		
  		this.interval = setInterval(() => this.setState((prevState) => ({
      		str: prevState.str + "."
    	})), 700);

    	

	}

	setname(){

	  	let str=this.props.inputstr.toLowerCase();
		let regex = /^[a-zA-Z]\sfor$/;
	  	let name;
		let result = regex.test(this.props.inputstr);

		if (result===true || this.props.inputstr.length===1)
		{
		    switch(str[0]) {
			    case 'a':
			      name= 'apple.jpg';
			      break;
		      	case 'b':
			      name= 'ball.jpg';
			      break;
			 	case 'c':
			      name= 'coin.jpg';
			      break;
			    case 'd':
			      name= 'dog.jpg';
			      break;
			    case 'e':
			      name= 'elephant.jpg';
			      break;
			    case 'f':
			      name= 'foot.jpg';
			      break;
			    case 'g':
			      name= 'grandparents.jpg';
			      break;
			    case 'h':
			      name= 'hand.jpg';
			      break;
			    case 'i':
			      name= 'insect.jpg';
			      break;
			    case 'j':
			      name= 'jar.jpg';
			      break;
			    case 'k':
			      name= 'koala.jpg';
			      break;
			    case 'l':
			      name= 'lemur.jpg';
			      break;
			    case 'm':
			      name= 'meteor.jpg';
			      break;
			    case 'n':
			      name= 'notebook.jpg';
			      break;
			    case 'o':
			      name= 'oval.jpg';
			      break;
			    case 'p':
			      name= 'pray.jpg';
			      break;
			    case 'q':
			      name= 'queen.jpg';
			      break;
			    case 'r':
			      name= 'raincoat.jpg';
			      break;
			    case 's':
			      name= 'snow.jpg';
			      break;
			    case 't':
			      name= 'thunder.jpg';
			      break;
			    case 'u':
			      name= 'umbrella.jpg';
			      break;
			    case 'v':
			      name= 'van.jpg';
			      break;
			    case 'w':
			      name= 'window.jpg';
			      break;
			    case 'x':
			      name= 'xray.jpg';
			      break;
			    case 'y':
			      name= 'yellow.jpg';
			      break;
			    case 'z':
			      name= 'zoo.jpg';
			      break;

			    default:
			      name= 'invalid.jpg';
			}
	  	}

		else{
			name = 'invalid.jpg'
		}

	  return name
	}

	componentWillUnmount() {
	  clearInterval(this.interval);
	}

	render(){
		return(
			<div className="container">

				{
					this.state.loading ?
					<div style={{marginTop:'80px'}}>
						<div id="txt_style">{this.state.str}</div>
						<br/>						
						<div className="line"></div>	
					</div>
					
					:

					<div style={{marginBottom:'2%', 'width':'90%'}}>
						<div className="polaroid">
							<img src={require('./Images/' + this.setname() )} alt="" />
							<div className="new_container">
								<p></p>
							</div>
						</div>

					<br/>

					<button className="button1" onClick={() => this.props.reset()}>BACK</button>
					</div>
				}

			</div>
		);
	}
}


export default Showimage;	