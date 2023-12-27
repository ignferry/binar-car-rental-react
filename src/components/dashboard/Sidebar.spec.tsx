import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Sidebar from './Sidebar.tsx';

describe('Dashboard Sidebar', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders navigation links', () => {
    render(
        <Sidebar/>
    );

    const dashboardSidebarHome = screen.getByTestId('dashboard-sidebar-home');
    const dashboardSidebarCars = screen.getByTestId('dashboard-sidebar-cars');

    expect(dashboardSidebarHome.textContent).toBe('Home');
    expect(dashboardSidebarCars.textContent).toBe('Cars');
  });
});