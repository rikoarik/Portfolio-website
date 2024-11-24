"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const RecentProjects: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError('Failed to load recent projects');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return (
    <div className="flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-semibold dark:text-light">Recent Projects</h3>
        </div>
        {/* Loading shimmer below the title */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse">
              <div className="h-6 bg-gray-200 rounded-md mb-4"></div> {/* Name placeholder */}
              <div className="h-4 bg-gray-200 rounded-md mb-2"></div> {/* Description placeholder */}
              <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-200 rounded-md w-1/4"></div> {/* Language placeholder */}
                <div className="h-4 bg-gray-200 rounded-md w-1/4"></div> {/* Stars placeholder */}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
  
  
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-2xl font-semibold dark:text-light">Recent Projects</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {repos.map((repo) => (
          <Link href={repo.html_url} key={repo.id} className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col h-[150px] mb-4">
              <h3 className="text-l font-semibold mb-2 truncate">{repo.name}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 flex-1 overflow-hidden text-ellipsis">{repo.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{repo.language}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">⭐ {repo.stargazers_count}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;