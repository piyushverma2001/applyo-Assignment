'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Movie, MovieDetail } from '@/types';
import { getMovieDetails } from '@/lib/api';

interface MovieModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MovieModal({ movie, isOpen, onClose }: MovieModalProps) {
  const [details, setDetails] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (movie && isOpen) {
      setLoading(true);
      setError(null);
      
      getMovieDetails(movie.imdbID)
        .then(setDetails)
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [movie, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {movie?.Title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {loading && (
            <div className="flex items-center justify-center py-8">
              <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {error && (
            <div className="text-red-600 text-center py-8">
              Error loading details: {error}
            </div>
          )}

          {details && !loading && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="relative h-96 w-full">
                                     <Image
                     src={details.Poster !== 'N/A' ? details.Poster : '/placeholder-poster.svg'}
                     alt={details.Title}
                     fill
                     className="object-cover rounded-lg"
                     sizes="(max-width: 768px) 100vw, 33vw"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.src = '/placeholder-poster.svg';
                     }}
                   />
                </div>
              </div>

              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {details.Title} ({details.Year})
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="bg-accent text-white px-2 py-1 rounded">
                      {details.Type}
                    </span>
                    <span>{details.Rated}</span>
                    <span>{details.Runtime}</span>
                    <span>{details.Released}</span>
                  </div>
                </div>

                {details.Plot && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Plot</h4>
                    <p className="text-gray-700 leading-relaxed">{details.Plot}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {details.Genre && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Genre</h4>
                      <p className="text-gray-700">{details.Genre}</p>
                    </div>
                  )}

                  {details.Director && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Director</h4>
                      <p className="text-gray-700">{details.Director}</p>
                    </div>
                  )}

                  {details.Actors && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cast</h4>
                      <p className="text-gray-700">{details.Actors}</p>
                    </div>
                  )}

                  {details.Writer && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Writer</h4>
                      <p className="text-gray-700">{details.Writer}</p>
                    </div>
                  )}
                </div>

                {details.imdbRating && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Rating</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-accent">
                        ⭐ {details.imdbRating}
                      </span>
                      <span className="text-gray-600">
                        ({details.imdbVotes} votes)
                      </span>
                    </div>
                  </div>
                )}

                {details.Ratings && details.Ratings.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Other Ratings</h4>
                    <div className="space-y-1">
                      {details.Ratings.map((rating, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-gray-600">{rating.Source}</span>
                          <span className="font-medium">{rating.Value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 