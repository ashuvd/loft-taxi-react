import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage from '../LoginPage';


describe('test form login', () => {
  test('change input signin for change state', () => {
    // const props = {
    //   setPage: jest.fn(),
    // }
    const { getByTestId, container } = render(<LoginPage />);
  
    const inputElement = getByTestId('signin');
    expect(inputElement).toBeInTheDocument();
  
    fireEvent.change(inputElement, {target: {value: ""}});
    // как тут протестировать что state обновился?
    // expect(props.setPage).toHaveBeenCalledWith("signin");
  });

  test('link to registration modal', () => {
    const props = {
      setPage: jest.fn(),
    }
    const { getByTestId } = render(<LoginPage {...props} />);
  
    const linkElement = getByTestId('linkRegistration');
    expect(linkElement).toBeInTheDocument();
  
    fireEvent.click(linkElement);
    expect(props.setPage).toHaveBeenCalledWith("signup");
  });

  test('click button for submit form', () => {
    const props = {
      setPage: jest.fn(),
      login: jest.fn()
    }
    const { getByTestId } = render(<LoginPage {...props} />);
  
    const buttonElement = getByTestId('submitFormLogin');
    expect(buttonElement).toBeInTheDocument();
  
    fireEvent.click(buttonElement);
    expect(props.login).toHaveBeenCalled();
    expect(props.setPage).toHaveBeenCalledWith("map");
  });
})

