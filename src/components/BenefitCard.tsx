
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  Award, 
  Target, 
  LifeBuoy 
} from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

const BenefitCard = ({ title, description, icon }: BenefitCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'trending-up':
        return <TrendingUp className="w-6 h-6 text-course-accent" />;
      case 'users':
        return <Users className="w-6 h-6 text-course-accent" />;
      case 'briefcase':
        return <Briefcase className="w-6 h-6 text-course-accent" />;
      case 'award':
        return <Award className="w-6 h-6 text-course-accent" />;
      case 'target':
        return <Target className="w-6 h-6 text-course-accent" />;
      case 'life-buoy':
        return <LifeBuoy className="w-6 h-6 text-course-accent" />;
      default:
        return <Info className="w-6 h-6 text-course-accent" />;
    }
  };

  return (
    <Card className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 w-16 h-16 rounded-full bg-course-accent/10 flex items-center justify-center">
          {getIcon()}
        </div>
        <h3 className="text-xl font-semibold text-course-main mb-2">{title}</h3>
        <p className="text-course-muted">{description}</p>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
