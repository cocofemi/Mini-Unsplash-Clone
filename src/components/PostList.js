import React from 'react';
import { chunk } from 'lodash';
import {Card, CardColumns, CardDeck, Col, Row, Container} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

import axios from 'axios';
import Post from './Post';


const PostList = (props) => {
	const articlesChunks = chunk(props.articles, 3)
	{ props.articles.length === 0 && <h2>Click the submit button above to get started</h2> }
	const rows = articlesChunks.map((articleChunk, index) => {
	const articlesCols = articleChunk.map((articles, index) => {
		return (
			<Col xs={12} md={4} lg={4} style={{marginTop:"10px"}}  key={index}>
				<Post key={index} 
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
