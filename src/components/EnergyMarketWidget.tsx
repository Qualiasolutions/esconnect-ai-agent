'use client';

import { useState, useEffect } from 'react';
import { formatDate } from '@/lib/utils';

type MarketData = {
  date: string;
  price: number;
  change: number;
  volume: number;
};

type EnergyMarketWidgetProps = {
  title?: string;
  refreshInterval?: number;
};

export default function EnergyMarketWidget({
  title = 'Energy Market Snapshot',
  refreshInterval = 60000,
}: EnergyMarketWidgetProps) {
  const [data, setData] = useState<MarketData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Simulate fetching market data
  useEffect(() => {
    const fetchMarketData = () => {
      setIsLoading(true);
      
      // Simulate API call with timeout
      setTimeout(() => {
        try {
          // Mock data - in a real app, this would be an API call
          const mockData: MarketData[] = [
            {
              date: formatDate(new Date()),
              price: 68.42,
              change: 1.23,
              volume: 1250000,
            },
            {
              date: formatDate(new Date(Date.now() - 86400000)),
              price: 67.19,
              change: -0.45,
              volume: 980000,
            },
            {
              date: formatDate(new Date(Date.now() - 172800000)),
              price: 67.64,
              change: 0.89,
              volume: 1120000,
            },
          ];
          
          setData(mockData);
          setIsLoading(false);
          setError(null);
        } catch (err) {
          setError('Failed to fetch market data');
          setIsLoading(false);
        }
      }, 1000);
    };

    fetchMarketData();
    
    // Set up interval for refreshing data
    const intervalId = setInterval(fetchMarketData, refreshInterval);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [refreshInterval]);

  if (error) {
    return (
      <div className="card p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="h-8 w-8 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price (USD)</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Change</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Volume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">{item.date}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">${item.price.toFixed(2)}</td>
                  <td className={`px-4 py-2 whitespace-nowrap text-sm ${item.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">{item.volume.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        <p>Last updated: {new Date().toLocaleTimeString()}</p>
        <p>Data is simulated for demonstration purposes</p>
      </div>
    </div>
  );
} 