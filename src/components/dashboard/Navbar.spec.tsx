import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { UserInfoContext } from '../../context/userInfo.tsx';
import DashboardNavbar from './Navbar.tsx';
import { BrowserRouter } from 'react-router-dom';

describe('Dashboard Navbar', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders with email', () => {
    const email = 'example@gmail.com';
    render(
      <UserInfoContext.Provider
        value={{ 
          userInfo: {
            email: email
          },
          saveUserInfo: () => {}
        }}
      >
        <DashboardNavbar/>
      </UserInfoContext.Provider>,
      {
        wrapper: BrowserRouter
      }
    );

    const dashboardNavbarEmail = screen.getByTestId('dashboard-navbar-email');

    expect(dashboardNavbarEmail.textContent).toBe(email);
  });
});