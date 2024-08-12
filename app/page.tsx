import React from 'react';

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto p-4 rounded-lg shadow-lg bg-white dark:bg-gray-700">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
            My Linktree
          </h1>
          <ul className="space-y-4">
            <li>
              <a
                  href="https://www.FEDS201.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 text-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
              >
                FEDS Website
              </a>
            </li>
            {/* Add more links here, following the same pattern */}
            <li>
              <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 text-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
              >
                Link 2
              </a>
            </li>
            <li>
              <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 text-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
              >
                Link 3
              </a>
            </li>
            <li>
              <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 text-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
              >
                Link 4
              </a>
            </li>
          </ul>
        </div>
      </main>
  );
}
