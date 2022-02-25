import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import renderer from "react-test-renderer";
import { AppProvider } from "../../context/store";

afterEach(cleanup);
describe("Not Found component test", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <AppProvider>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AppProvider>,
            div
        );
    });
    it("matches snapshot", () => {
        const tree = renderer
            .create(
                <AppProvider>
                    <MemoryRouter>
                        <Navbar />
                    </MemoryRouter>
                </AppProvider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
