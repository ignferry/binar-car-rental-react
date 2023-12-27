import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import WhyUs from './WhyUs';

describe('Landing Page Jumbotron', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders navigation links', () => {
    render(
        <WhyUs/>
    );

    expect(screen.getByText('Why Us?')).toBeInTheDocument();
    expect(screen.getByText('Mengapa harus pilih Binar Car Rental?')).toBeInTheDocument();
    expect(screen.getByText('Mobil Lengkap')).toBeInTheDocument();
    expect(screen.getByText('Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat')).toBeInTheDocument();
  });
});