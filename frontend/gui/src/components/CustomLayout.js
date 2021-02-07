import React from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'

import Header from './Header';
import PostList from './PostList';

class CustomLayout extends React.Component  {
 state = {
    articles : []
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({
          articles:res.data
        });
        console.log(res.data);
      })
  }
  render () {
    const title = 'Mini Unsplash Clone';
    const user = 'Mark Smith';
    return (
      <div>
        <Header title={title} user={user}/>
          <Container>
            <Row className="justify-content-md-center">
                <Jumbotron>
                  <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                      This is a modified jumbotron that occupies the entire horizontal space of
                      its parent.
                    </p>
                  </Container>
                </Jumbotron>
            </Row>
          </Container>

          <div className="content">
            <Container>
                <Row className="justify-content-md-center">
                    <PostList 
                      articles={this.state.articles}
                    />
                </Row>
            </Container>
          </div>
      </div>
      );
  }
}
export default CustomLayout;
