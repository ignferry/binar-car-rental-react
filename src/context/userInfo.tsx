import {
  createContext,
  ContextType,
  useState,
  Context,
  useEffect,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export type TUserInfoContext = {
  userInfo: { email: string } | undefined;
  saveUserInfo: (info: { email: string }) => void;
};

export const UserInfoContext = createContext<ContextType<
  Context<TUserInfoContext>
> | null>(null);

// @ts-expect-error wrong types
const UserInfoProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<{ email: string } | undefined>();
  const [storedValue, setValue] = useLocalStorage('userInfo', undefined);

  useEffect(() => {
    if (storedValue) {
      setUserInfo(storedValue);
    }
  }, [storedValue]);

  function saveUserInfo(info: { email: string }) {
    setUserInfo(info);
    setValue(info);
  }

  return (
    <UserInfoContext.Provider value={{ userInfo, saveUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
