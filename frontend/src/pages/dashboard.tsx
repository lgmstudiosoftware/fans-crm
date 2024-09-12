import { lazy } from 'react';

const Profile = lazy(() => import('@components/auth/profile'));

const Dashboard = () => {
  return (
    <>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='text-3xl text-center font-bold'>
          Welcome to the main page
        </h1>
        <p className='py-6'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Profile />
      </div>
    </>
  );
};

export default Dashboard;
