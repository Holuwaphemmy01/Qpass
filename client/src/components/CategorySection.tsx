import React from 'react';
import { categories, getIconComponent } from '../utils/data'

export const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect institution based on your needs. We offer a wide range of categories for all your appointment needs.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => {
            const IconComponent = getIconComponent(category.icon);
            
            return (
              <div 
                key={category.id} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-medium text-gray-800 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">Find appointments</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};