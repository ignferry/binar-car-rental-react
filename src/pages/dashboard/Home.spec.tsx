import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { UserInfoContext } from '../../context/userInfo.tsx';
import DashboardHomePage from './Home';

describe('Dashboard Home', () => {
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
        <DashboardHomePage/>
      </UserInfoContext.Provider>
    );

    //const dashboardNavbarEmail = screen.getByTestId('dashboard-navbar-email');
    const dashboardHomeText = screen.getByTestId('dashboard-home-text');

    //expect(dashboardNavbarEmail.textContent).toBe(email);
    expect(dashboardHomeText.textContent).toBe(`Halo ${email}`)
  });
});