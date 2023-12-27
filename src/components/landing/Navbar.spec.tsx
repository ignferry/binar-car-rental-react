import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Landing Page Navbar', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders navigation links', () => {
    render(
        <Navbar/>,
        {
            wrapper: BrowserRouter
        }
    );

    expect(screen.queryAllByText('Our Services')).not.toBeNull();
    expect(screen.queryAllByText('Why Us')).not.toBeNull();
    expect(screen.queryAllByText('Testimonial')).not.toBeNull();
    expect(screen.queryAllByText('FAQ')).not.toBeNull();
    expect(screen.queryAllByText('Login')).not.toBeNull();
    expect(screen.queryAllByText('Register')).not.toBeNull();
  });
});