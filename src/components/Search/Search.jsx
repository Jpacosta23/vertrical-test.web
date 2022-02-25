import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Search.css";

const Search = ({ setCurrentRef = () => {}, handleSubmit = () => {} }) => {
    const handleOnChange = (evt) => {
        const { value } = evt.target;
        setCurrentRef(value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "enter") {
            handleSubmit();
        }
    };

    return (
        <>
            <Form className="d-flex col-lg-5 mt-4" onSubmit={handleSubmit}>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleOnChange}
                    onKeyDown={handleKeyPress}
                />
                <Button type="submit" variant="outline-primary">
                    Search
                </Button>
            </Form>
        </>
    );
};

Search.propTypes = {
    setCurrentRef: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default Search;
