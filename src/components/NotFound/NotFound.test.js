import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import NotFound from './NotFound';
import renderer from 'react-test-renderer';
import { AppProvider } from '../../context/store';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate // Return an empty jest function to test whether it was called or not...I'm not depending on the results so no need to put in a return value
}));

afterEach(cleanup);
describe('Not Found component test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AppProvider>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </AppProvider>,
      div
    );
  });
  it('goes to the home page when button clicked', () => {
    const { container } = render(
      <AppProvider>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </AppProvider>
    );
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });
  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <AppProvider>
          <MemoryRouter>
            <NotFound />
          </MemoryRouter>
        </AppProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
