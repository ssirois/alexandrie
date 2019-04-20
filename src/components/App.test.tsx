import React = require('react');
import { getByTestId, render } from 'react-testing-library';
import { App } from './App';

describe('Alexandrie React App', () => {
  it('should render the application title', () => {
    const applicationTitle = 'Alexandrie';
    const { container } = render(<App />);
    expect(container.textContent).toContain(applicationTitle);
  });

  it('should have a folder list component', () => {
    const { container } = render(<App />);
    expect(getByTestId(container, 'folder-list')).toBeTruthy();
  });
});
