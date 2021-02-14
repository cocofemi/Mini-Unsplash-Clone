import React from 'react';
import { chunk } from 'lodash';
import {Card, CardColumns, CardDeck, Col, Row, Container} from 'react-bootstrap';
import axios from 'axios';
import Post from './Post';


const PostList = (props) => {
	const articlesChunks = chunk(props.articles, 3)
	const rows = articlesChunks.map((articleChunk, index) => {
	const articlesCols = articleChunk.map((articles, index) => {
		return (
			<Col style={{marginTop:"10px"}} xs="4" key={articles.id}>
				<Post key={articles.id} 
				articleData={articles} />
				</Col>
			);
		})	
		return <Row key={index}>{articlesCols}</Row>
	});

		return (
			<Container>
			{rows}
			</Container>
	);
}

export default PostList;
