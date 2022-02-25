import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import PhotoCard from './PhotoCard';
import renderer from 'react-test-renderer';
import { AppProvider } from '../../context/store';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate // Return an empty jest function to test whether it was called or not...I'm not depending on the results so no need to put in a return value
}));

const mockedProps = {
  id: 1,
  title: 'profile',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  photo:
    'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
  short_description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

afterEach(cleanup);
describe('Not Found component test', () => {
  it('renders without crashing', () => {
    const props = {
      photo: mockedProps
    };
    const div = document.createElement('div');
    ReactDOM.render(
      <AppProvider>
        <MemoryRouter>
          <PhotoCard photo={props.photo} />
        </MemoryRouter>
      </AppProvider>,
      div
    );
  });
  it('matches snapshot', () => {
    const props = {
      photo: mockedProps
    };
    const tree = renderer
      .create(
        <AppProvider>
          <MemoryRouter>
            <PhotoCard photo={props.photo} />
          </MemoryRouter>
        </AppProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
