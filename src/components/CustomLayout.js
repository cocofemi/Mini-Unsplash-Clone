import React from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'

import Header from './Header';
import PostList from './PostList';
import Search from './Search';

export class CustomLayout extends React.Component  {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        articles : [],
        searchResult: []

     };
  }

  handleChange(e) {
    let articlesList = [];
    let newSearch = [];
    
    if (e.target.value !== "") {
      articlesList = this.state.searchResult
      newSearch = articlesList.filter(article => {
        const category = article.category.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return category.includes(filter);
      });
      // If the search bar is empty, set newList to original task list
      } else {
        newSearch = this.state.articles;
      }
      // Set the filtered state based on what our rules added to newList
      this.setState({
        searchResult: newSearch
      });
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({
          searchResult:res.data,
          articles:res.data
        });
        console.log(res.data);
      })
  }

  render () {
    const title = 'Mini Unsplash Clone';
    return (
      <div>
        <Header title={title} />
        <Search handleChange={this.handleChange}/>
          <div className="content">
            <Container>
                <Row className="justify-content-md-center">
                    <PostList 
                      articles={this.state.searchResult}
                    />
                </Row>
            </Container>
          </div>
      </div>
      );
  }
}
export default CustomLayout;
