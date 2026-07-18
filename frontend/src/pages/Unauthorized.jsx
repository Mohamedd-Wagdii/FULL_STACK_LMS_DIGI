import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

const Unauthorized = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-center dark:bg-gray-900">
      <ShieldAlert className="mb-6 h-24 w-24 text-red-500" />
      <h1 className="mb-2 text-4xl font-extrabold text-gray-900 dark:text-white">Access Denied</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        You do not have permission to view this page.
      </p>
      <Link
        to="/"
        className="rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-indigo-500"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Unauthorized;
