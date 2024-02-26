import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
const axios = require('axios').default;

function Rewire() {
	const [firstBlock, setFirstBlock] = useState(true);
	const [secondBlock, setSecondBlock] = useState(true);

	const toggling = () => {
		setFirstBlock(!firstBlock);
	}

	useEffect(() => {
		console.log('This code will render at the time of page rendering');
		fetchData();
	},[])

	const fetchData = () => {
		const headers = {
			'Content-Type': 'application/json'
		};
		const requestInfo = 'https://gorest.co.in/public/v2/users';
		// axios.get('https://gorest.co.in/public/v2/users', {headers}).then(function (response) {
	 //    // handle success
	 //    console.log(response);
	 //  }).catch(function (error) {
	 //    // handle error
	 //    console.log(error);
	 //  }).finally(function () {
	 //    // always executed
	 //    console.log('finally');
	 //  });
	  axios.get(requestInfo, {headers})
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
	}

  return (
    <div className="col-5 mx-auto p-3">
      {
      	firstBlock
      	?	<div className="alert alert-primary">
						This is the initial text.
					</div>
      	: <div className="alert alert-success">
						First Block - This is the new text.
					</div>
      }
			<div>
				<a className="btn btn-primary" onClick={() => toggling()}>Click Me</a>
		 	</div>



		 	<div className="alert alert-primary">
				This is the initial text.
			</div>
			<div>
		 		<a href="#n" className="btn btn-primary">Click Me</a>
		 	</div>



		 	<div>
			 	And this is some text around the frame that will not be <Link to='/overview' className="nav-link px-2 link-dark">updated</Link> by the response.
			</div>


    </div>
  );
}

export default Rewire;
