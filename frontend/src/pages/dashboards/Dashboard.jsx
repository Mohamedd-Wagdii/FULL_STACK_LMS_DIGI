import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900">
      <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        Welcome, {user?.fullName}!
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        You are logged in as a <span className="font-semibold capitalize text-indigo-600 dark:text-indigo-400">{user?.role}</span>.
      </p>
      
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Placeholder cards */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-800/50">
          <h3 className="font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
          <p className="mt-2 text-sm text-gray-500">No recent activity to show.</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-800/50">
          <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
          <p className="mt-2 text-sm text-gray-500">You're all caught up!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
