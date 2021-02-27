import React from 'react';
import {Form, Button} from 'react-bootstrap';

class UploadPreview extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { file: null };
	    this.onChange = this.onChange.bind(this);
  }

    onChange(event) {
	    this.setState({
	    file: URL.createObjectURL(event.target.files[0])
    });
  }

  render () {
  	return (
  		<>
  			<Form.Group>
				<Form.File name="image" id="image" label="Upload a new photo" onChange={this.onChange} />
			</Form.Group>
		    <img style={{ width: "50%" }} src={this.state.file} />
		</>
  		);
  }
}

export default UploadPreview;