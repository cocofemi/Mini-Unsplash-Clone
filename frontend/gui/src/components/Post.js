import react from 'react';
import Card from 'react-bootstrap/Card';

const Post = (props) => {
	return (
		 <Card className="bg-dark text-white">
			  <Card.Img src={props.articleData.image.url} alt="Card image" />
			  <Card.ImgOverlay>
			    <Card.Title>{props.articleData.title}</Card.Title>
			    <Card.Text>{props.articleData.author}</Card.Text>
			  </Card.ImgOverlay>
			</Card>
		);
}

export default Post;