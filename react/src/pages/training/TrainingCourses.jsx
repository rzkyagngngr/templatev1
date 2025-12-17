import React from 'react';
import { BookMarked, Clock, Users, Star } from 'lucide-react';

export default function TrainingCourses() {
  const courses = [
    { id: 'CRS-001', title: 'Advanced React', instructor: 'John Smith', duration: '40 hours', rating: '4.8' },
    { id: 'CRS-002', title: 'Project Management', instructor: 'Sarah Lee', duration: '35 hours', rating: '4.6' },
    { id: 'CRS-003', title: 'Data Analysis', instructor: 'Mike Chen', duration: '45 hours', rating: '4.9' },
    { id: 'CRS-004', title: 'Digital Marketing', instructor: 'Emily Davis', duration: '30 hours', rating: '4.7' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Training Courses</h1>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {courses.map((course) => (
            <div key={course.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-bold text-black">{course.title}</p>
                  <p className="text-gray-600 text-sm">{course.id}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-600" />
                  <p className="text-black font-bold">{course.rating}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm"><strong>Instructor:</strong> {course.instructor}</p>
                <p className="text-gray-600 text-sm"><strong>Duration:</strong> {course.duration}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Status</h2>
          <p className="text-black">CREATED</p>
        </div>
      </div>
    </div>
  );
}
