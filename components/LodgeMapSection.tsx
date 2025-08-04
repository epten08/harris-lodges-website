// components/LodgeMapSection.tsx
import { MapPin } from 'lucide-react';
import { Lodge } from '@/lib/lodge-types';

interface LodgeMapSectionProps {
  lodges: Lodge[];
}

const LodgeMapSection = ({ lodges }: LodgeMapSectionProps) => {
  return (
    <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
      <div className="text-center text-gray-600 z-10">
        <MapPin className="w-12 h-12 mx-auto mb-4 text-lodge-primary" />
        <p className="text-lg font-semibold mb-2">Interactive Map</p>
        <p>Explore our lodge locations across Zimbabwe</p>
      </div>
      
      {/* Lodge Location Markers */}
      <div className="absolute inset-0">
        {lodges.map((lodge, index) => (
          <div
            key={lodge.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
              index === 0 ? 'top-1/3 left-1/2' :
              index === 1 ? 'top-2/3 left-1/3' :
              'top-1/2 right-1/4'
            }`}
          >
            <div className="bg-lodge-primary text-white p-2 rounded-full shadow-lg hover:bg-lodge-dark transition-colors cursor-pointer group">
              <MapPin size={20} />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {lodge.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LodgeMapSection;