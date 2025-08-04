// components/FeatureCard.tsx
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="w-16 h-16 bg-lodge-primary rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-lg font-semibold text-lodge-dark mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default FeatureCard;