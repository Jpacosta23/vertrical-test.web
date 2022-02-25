import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./Search.css";

const Search = ({ setCurrentRef = () => {}, handleSubmit = () => {} }) => {
    const handleOnChange = (evt) => {
        const { value } = evt.target;
        setCurrentRef(value);
    };

    return (
        <>
            <Form className="d-flex col-lg-5 mt-4">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleOnChange}
                />
                <Button variant="outline-primary" onClick={handleSubmit}>
                    Search
                </Button>
            </Form>
        </>
    );
};

export default Search;
