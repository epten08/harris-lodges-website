// components/LodgeStatsSection.tsx
import { Lodge } from '@/lib/lodge-types';

interface LodgeStatsSectionProps {
  lodges: Lodge[];
}

const LodgeStatsSection = ({ lodges }: LodgeStatsSectionProps) => {
  const activeLodges = lodges.filter(lodge => lodge.status === 'active');
  const totalRooms = lodges.reduce((sum, lodge) => sum + lodge.rooms.length, 0);
  const totalConferenceFacilities = lodges.reduce((sum, lodge) => 
    sum + lodge.facilities.filter(f => f.type === 'conference').length, 0
  );
  const averageRating = Math.round(lodges.reduce((sum, lodge) => sum + lodge.rating, 0) / lodges.length * 10) / 10;

  const stats = [
    { 
      number: activeLodges.length.toString(), 
      label: 'Active Lodges', 
      description: 'Currently operating lodges ready to welcome you' 
    },
    { 
      number: `${totalRooms}+`, 
      label: 'Total Rooms', 
      description: 'Different room types across all locations' 
    },
    { 
      number: totalConferenceFacilities.toString(), 
      label: 'Conference Facilities', 
      description: 'Professional meeting spaces with modern equipment' 
    },
    { 
      number: `${averageRating}★`, 
      label: 'Average Rating', 
      description: 'Consistently high guest satisfaction scores' 
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl font-bold text-lodge-primary mb-2 group-hover:text-lodge-secondary transition-colors">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-lodge-dark mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LodgeStatsSection;