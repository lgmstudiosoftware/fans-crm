import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='text-3xl text-center font-bold underline'>
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
        <Link to='login'>
          <button className='mx-auto text-center w-[200px] rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Sign In
          </button>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
