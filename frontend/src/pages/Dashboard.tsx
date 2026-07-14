import { useQuery } from '@tanstack/react-query'

const Dashboard: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['health'],
    queryFn: async () => {
      const response = await fetch('/api/health')
      return response.json()
    },
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome to AERO-X - Automotive Engineering & Real-time Optimization Platform
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Vehicles</div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mt-2">0</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Simulations</div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mt-2">0</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Running</div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mt-2">0</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">API Status</div>
          <div className="text-green-500 font-bold mt-2">{data?.status || 'Unknown'}</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
