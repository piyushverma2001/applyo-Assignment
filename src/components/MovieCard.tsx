'use client';

import Image from 'next/image';
import { Movie } from '@/types';

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  const handleClick = () => {
    onClick(movie);
  };

  return (
    <div 
      className="card cursor-pointer transform hover:scale-105 transition-transform duration-200 animate-slide-up"
      onClick={handleClick}
    >
      <div className="relative h-64 w-full">
        <Image
          src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-poster.svg'}
          alt={movie.Title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-poster.svg';
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {movie.Title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="capitalize bg-gray-100 px-2 py-1 rounded">
            {movie.Type}
          </span>
          <span>{movie.Year}</span>
        </div>
      </div>
    </div>
  );
} 