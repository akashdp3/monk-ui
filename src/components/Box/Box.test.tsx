import React from 'react';
import { render, screen } from '@testing-library/react';
import { Box } from './Box';

describe('Box', () => {
  it('renders children correctly', () => {
    render(<Box>Hello World</Box>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Box className="custom-class">Test</Box>);
    const element = screen.getByText('Test');
    expect(element).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Box ref={ref}>Test</Box>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('renders as different element when as prop is provided', () => {
    render(<Box as="button">Button</Box>);
    const element = screen.getByRole('button');
    expect(element.tagName).toBe('BUTTON');
  });

  it('passes through HTML attributes', () => {
    render(<Box data-testid="box" id="test-box">Test</Box>);
    const element = screen.getByTestId('box');
    expect(element).toHaveAttribute('id', 'test-box');
  });
});