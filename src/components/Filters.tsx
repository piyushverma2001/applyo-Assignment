'use client';

import { FilterOptions } from '@/types';

interface FiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

export default function Filters({ filters, onFiltersChange }: FiltersProps) {
  const handleTypeChange = (type: FilterOptions['type']) => {
    onFiltersChange({ ...filters, type });
  };

  const handleYearChange = (year: string) => {
    onFiltersChange({ ...filters, year });
  };

  const clearFilters = () => {
    onFiltersChange({ type: '', year: '' });
  };

  const hasActiveFilters = filters.type !== '' || filters.year !== '';

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <span className="text-xs bg-accent text-white px-2 py-1 rounded-full">
            Active
          </span>
        )}
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type
          </label>
                     <div className="flex flex-wrap gap-2">
             {['', 'movie', 'series'].map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type as FilterOptions['type'])}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filters.type === type
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type === '' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Year
          </label>
          <input
            type="number"
            value={filters.year}
            onChange={(e) => handleYearChange(e.target.value)}
            placeholder="Enter year (e.g., 2020)"
            min="1900"
            max={new Date().getFullYear()}
            className="input-field"
          />
        </div>

        {hasActiveFilters && (
          <div className="pt-2">
            <button
              onClick={clearFilters}
              className="w-full btn-secondary text-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 