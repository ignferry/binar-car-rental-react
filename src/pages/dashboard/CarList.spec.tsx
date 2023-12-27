import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { UserInfoContext } from '../../context/userInfo.tsx';
import DashboardCarListPage from './CarList.tsx';
import { BrowserRouter } from 'react-router-dom';

describe('Login Page', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders correctly', () => {
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
        <DashboardCarListPage/>
      </UserInfoContext.Provider>,
      {
        wrapper: BrowserRouter
      }
    );

    expect(screen.queryByText('All')).not.toBeNull();
    expect(screen.queryByText('Small')).not.toBeNull();
    expect(screen.queryByText('Small')).not.toBeNull();
    expect(screen.queryByText('Medium')).not.toBeNull();
    expect(screen.queryByText('Add Cars')).not.toBeNull();
  });
});