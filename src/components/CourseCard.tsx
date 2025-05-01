
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  duration: string;
  mode: string;
  batchStart: string;
  highlight: string;
  imageSrc: string;
  featured?: boolean;
}

const CourseCard = ({ 
  title, 
  duration, 
  mode, 
  batchStart, 
  highlight, 
  imageSrc,
  featured = false
}: CourseCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${featured ? 'border-2 border-course-accent' : ''}`}>
      <div className="relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-course-accent text-white px-3 py-1 text-xs font-medium rounded-full">
            Featured Course
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-course-main mb-4">{title}</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Duration:</span>
            <span className="text-sm font-medium">{duration}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Mode:</span>
            <span className="text-sm font-medium">{mode}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Batch starting:</span>
            <span className="text-sm font-medium">{batchStart}</span>
          </div>
          <div className="pt-2">
            <span className="bg-course-accent/10 text-course-main px-3 py-1 text-sm font-medium rounded-full">
              {highlight}
            </span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <Button asChild variant="default" className="bg-course-main hover:bg-course-main/90 flex-1">
            <Link to="/course">
              View Course <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-course-main text-course-main hover:bg-course-main/10 flex-1">
            <a href="#" download>
              Get Brochure
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
