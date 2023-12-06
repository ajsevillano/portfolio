import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FaRegClipboard } from 'react-icons/fa';
import Button from './index';

describe('Button', () => {
  test('renders Button component', () => {
    render(<Button variant="primary" text="Test Button" />);

    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });
  test('renders Button component with an icon', () => {
    const { container } = render(
      <Button variant="primary" icon={<FaRegClipboard />} text="Test Button" />,
    );
    expect(container.getElementsByTagName('svg').length).toBeGreaterThan(0);
  });

  test('renders the default text if no text is passed', () => {
    // @ts-ignore
    render(<Button variant="primary" />);
    expect(screen.getByText('default')).toBeInTheDocument();
  });

  test('renders the default variant if no variant is passed', () => {
    // @ts-ignore
    render(<Button text="Test Button" />);
    screen.debug();
    expect(screen.getByRole('button')).toHaveClass('primary');
  });
});
