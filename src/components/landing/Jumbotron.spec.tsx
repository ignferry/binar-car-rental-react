import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Jumbotron from './Jumbotron';

describe('Landing Page Jumbotron', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders navigation links', () => {
    render(
        <Jumbotron/>
    );

    expect(screen.getByText('Sewa Mobil di Bandung Sekarang')).toBeInTheDocument();
    expect(screen.getByText('Mulai Sewa Mobil')).toBeInTheDocument();
  });
});