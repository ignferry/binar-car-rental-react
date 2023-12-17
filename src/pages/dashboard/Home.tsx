import { UserInfoContext, TUserInfoContext } from '../../context/userInfo';
import { ContextType, useContext, Context } from 'react';

export default function DashboardHomePage() {
  const { userInfo } = useContext(UserInfoContext) as ContextType<
    Context<TUserInfoContext>
  >;

  return (
    <>
      <h1 data-testid="dashboard-home-text">Halo {userInfo && userInfo.email}</h1>
      <p>Selamat datang di BCR Dashboard</p>
    </>
  );
}
