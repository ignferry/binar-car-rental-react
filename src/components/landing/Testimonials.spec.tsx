import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Testimonials from './Testimonials';

describe('Landing Page Testimonials', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders testimonials', () => {
    render(
        <Testimonials/>
    );

    expect(screen.getByText('Berbagai review positif dari pelanggan kami')).toBeInTheDocument();
    expect(screen.getByText('John Dee 32, Bromo')).toBeInTheDocument();
  });
});