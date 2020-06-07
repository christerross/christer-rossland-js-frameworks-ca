import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function GameItem({ id, name, background_image, rating, released }) {
    return (
        <Card>
            <Card.Img variant="top" src={background_image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{rating}</Card.Title>
                <Card.Title>{released}</Card.Title>
                <Link to={"game/" + id}>
                    <Button variant="secondary" block>
                        View
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

GameItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    released: PropTypes.number.isRequired
};

export default GameItem;