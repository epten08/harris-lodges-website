// components/LodgeComparisonTable.tsx
import { Star } from 'lucide-react';
import { Lodge } from '@/lib/lodge-types';

interface LodgeComparisonTableProps {
  lodges: Lodge[];
}

const LodgeComparisonTable = ({ lodges }: LodgeComparisonTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-lodge-primary text-white">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">Lodge</th>
            <th className="px-6 py-4 text-center font-semibold">Rooms</th>
            <th className="px-6 py-4 text-center font-semibold">Conference</th>
            <th className="px-6 py-4 text-center font-semibold">Restaurant</th>
            <th className="px-6 py-4 text-center font-semibold">Special Features</th>
            <th className="px-6 py-4 text-center font-semibold">Rating</th>
          </tr>
        </thead>
        <tbody>
          {lodges.map((lodge, index) => (
            <tr key={lodge.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-6 py-4">
                <div>
                  <div className="font-semibold text-lodge-dark">{lodge.name}</div>
                  <div className="text-sm text-gray-600">{lodge.location.city}</div>
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="bg-lodge-neutral text-lodge-dark px-3 py-1 rounded-full text-sm font-medium">
                  {lodge.rooms.length} Types
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                {lodge.facilities.some(f => f.type === 'conference') ? (
                  <span className="text-green-600 font-semibold">✓ Yes</span>
                ) : (
                  <span className="text-gray-400">✗ No</span>
                )}
              </td>
              <td className="px-6 py-4 text-center">
                {lodge.facilities.some(f => f.type === 'restaurant') ? (
                  <span className="text-green-600 font-semibold">✓ Yes</span>
                ) : (
                  <span className="text-gray-400">✗ No</span>
                )}
              </td>
              <td className="px-6 py-4 text-center">
                <div className="text-sm text-gray-600">
                  {lodge.features.slice(0, 2).join(', ')}
                  {lodge.features.length > 2 && '...'}
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="flex items-center justify-center space-x-1">
                  <Star size={16} className="text-lodge-accent fill-current" />
                  <span className="font-semibold">{lodge.rating}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LodgeComparisonTable;