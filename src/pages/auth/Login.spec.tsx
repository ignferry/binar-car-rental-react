import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { UserInfoContext } from '../../context/userInfo.tsx';
import LoginPage from './Login.tsx';
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
        <LoginPage/>
      </UserInfoContext.Provider>,
      {
        wrapper: BrowserRouter
      }
    );

    expect(screen.queryByText('Login')).not.toBeNull();
    expect(screen.queryByText('Email address')).not.toBeNull();
    expect(screen.queryByText('Password')).not.toBeNull();
  });
});