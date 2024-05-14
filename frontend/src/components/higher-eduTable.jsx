import React from 'react';

export default function HigherEduTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-black">
          <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">#</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Institution</th>

            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Degree</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Field of Study</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Start Date</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">End Date</th>

            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Supporting-Doc</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mark</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mark</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mark</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mark</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mark</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mark</td>

          </tr>
        </tbody>
      </table>
    </div>
  );
}
