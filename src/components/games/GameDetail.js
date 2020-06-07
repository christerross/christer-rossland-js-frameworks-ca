import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import { BASE_URL } from "../../constants/api";

function GameDetail() {
    const [detail, setDetail] = useState(true);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    const url = BASE_URL + id;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [url]);

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }

    return (
        <Row>
            <Col md={6} className="detail-image">
                <Image src={detail.image} roundedCircle />
            </Col>
            <Col>
                <h1>{detail.name}</h1>
                <p>
                    <b>Genre:</b> {detail.genres}
                </p>
            </Col>
        </Row>
    );
}

GameDetail.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    released: PropTypes.number.isRequired
};

export default GameDetail;