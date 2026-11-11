import React from 'react';
import { render, screen } from '@testing-library/react';
import Tag from './index';

describe('Tag component', () => {
  test('renders without crashing', () => {
    render(<Tag tag="test" />);
    const tagElement = screen.getByText(/test/i);
    expect(tagElement).toBeInTheDocument();
  });

  test('renders a tag with the right colour', () => {
    render(<Tag tag="React Native" />);

    const tagElement = screen.getByText(/React Native/i);
    expect(tagElement).toHaveClass('tag tag-React_Native');
  });

  test('renders a tag with the default colour', () => {
    render(<Tag tag="wrong tag" />);
    const tagElement = screen.getByText(/wrong tag/i);
    expect(tagElement).toHaveClass('tag error');
  });
});
