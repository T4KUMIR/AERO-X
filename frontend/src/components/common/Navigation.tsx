import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
  return (
    <nav className="w-64 bg-gray-900 text-white shadow-lg">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">AERO-X</h1>
        <p className="text-sm text-gray-400">Digital Twin Platform</p>
      </div>
      <ul className="space-y-2 p-4">
        <li>
          <Link to="/" className="block px-4 py-2 rounded hover:bg-gray-700">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/vehicles" className="block px-4 py-2 rounded hover:bg-gray-700">
            Vehicles
          </Link>
        </li>
        <li>
          <Link to="/simulations" className="block px-4 py-2 rounded hover:bg-gray-700">
            Simulations
          </Link>
        </li>
        <li>
          <Link to="/settings" className="block px-4 py-2 rounded hover:bg-gray-700">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
