import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Settings, 
  LogOut,
  GraduationCap
} from 'lucide-react';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const getLinksByRole = () => {
    const baseLinks = [
      { name: 'Dashboard', path: `/${user?.role}/dashboard`, icon: LayoutDashboard }
    ];

    if (user?.role === 'manager') {
      baseLinks.push(
        { name: 'Users', path: '/manager/users', icon: Users },
        { name: 'Courses', path: '/manager/courses', icon: BookOpen },
        { name: 'Settings', path: '/manager/settings', icon: Settings }
      );
    } else if (user?.role === 'teacher') {
      baseLinks.push(
        { name: 'My Classes', path: '/teacher/classes', icon: Users },
        { name: 'Materials', path: '/teacher/materials', icon: BookOpen }
      );
    } else if (user?.role === 'student') {
      baseLinks.push(
        { name: 'My Courses', path: '/student/courses', icon: BookOpen },
        { name: 'Grades', path: '/student/grades', icon: GraduationCap }
      );
    } else if (user?.role === 'parent') {
      baseLinks.push(
        { name: 'Children', path: '/parent/children', icon: Users },
        { name: 'Reports', path: '/parent/reports', icon: BookOpen }
      );
    }

    return baseLinks;
  };

  const links = getLinksByRole();

  return (
    <div className="flex h-screen w-64 flex-col justify-between border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div>
        <div className="flex h-16 items-center px-6 border-b border-gray-200 dark:border-gray-800">
          <GraduationCap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">LMS Platform</span>
        </div>
        <div className="px-4 py-6">
          <ul className="space-y-2">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400'}`} />
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-200 p-4 dark:border-gray-800">
        <div className="mb-4 px-4">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{user?.fullName}</p>
          <p className="truncate text-xs text-gray-500 dark:text-gray-400 capitalize">{user?.role}</p>
        </div>
        <button
          onClick={logout}
          className="flex w-full items-center rounded-xl px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
