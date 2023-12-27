import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Faq from './Faq';

describe('Landing Page FAQ', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders navigation links', () => {
    render(
        <Faq/>
    );

    expect(screen.getByText('Frequently Asked Question')).toBeInTheDocument();
    expect(screen.getByText('Apa saja syarat yang dibutuhkan?')).toBeInTheDocument();
  });
});