import React from 'react';
import axios from 'axios';

import Post from './Post';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardDeck from 'react-bootstrap/CardDeck';

const PostList = (props) => {
		return (
		<div>
			{
				props.articles.map((article) => 
				<CardColumns>
				  <Card>
				    <Card.Body>
						<Post 
							key={article.id} 
							articleData={article}
						/>
					</Card.Body>
	  			   </Card>
				</CardColumns>
				)
			}
		
		</div>
		);
}

export default PostList;