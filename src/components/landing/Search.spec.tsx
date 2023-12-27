import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Search from './Search';
import { BrowserRouter } from 'react-router-dom';

describe('Landing Page Search Car Page Search Bar', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders navigation links', () => {
    render(
        <Search/>,
        {
            wrapper: BrowserRouter
        }
    );

    expect(screen.getByText('Tipe Driver')).toBeInTheDocument();
    expect(screen.getByText('Tanggal')).toBeInTheDocument();
    expect(screen.getByText('Waktu Jemput/Ambil')).toBeInTheDocument();
    expect(screen.getByText('Jumlah Penumpang (optional)')).toBeInTheDocument();
    expect(screen.getByText('Cari Mobil')).toBeInTheDocument();
  });
});