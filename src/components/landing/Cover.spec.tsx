import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Cover from './Cover';

describe('Landing Page Cover', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders with button', () => {
    render(
        <Cover showButton/>
    );
    
    expect(screen.getByText('Sewa & Rental Mobil Terbaik di Kawasan Bandung')).toBeInTheDocument();
    expect(screen.getByText('Mulai Sewa Mobil')).toBeInTheDocument();
  });

  it('renders without button', () => {
    render(
        <Cover showButton={ false }/>
    );
    
    expect(screen.getByText('Sewa & Rental Mobil Terbaik di Kawasan Bandung')).toBeInTheDocument();
    expect(screen.queryByText('Mulai Sewa Mobil')).toBeNull();
  });
});