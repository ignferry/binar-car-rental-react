import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Services from './Services';

describe('Landing Page Services', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders correctly', () => {
    render(
        <Services/>
    );

    expect(screen.getByText('Best Car Rental for any kind of trip in Bandung')).toBeInTheDocument();
    expect(screen.getByText('Sewa Mobil Dengan Supir di Bali 12 Jam')).toBeInTheDocument();
  });
});