import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Footer from './Footer';

describe('Landing Page Footer', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders navigation links', () => {
    render(
        <Footer/>
    );

    expect(screen.getByText('Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000')).toBeInTheDocument();
    expect(screen.getByText('binarcarrental@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('081-233-334-808')).toBeInTheDocument();
    expect(screen.getByText('Copyright Binar 2022')).toBeInTheDocument();
  });
});