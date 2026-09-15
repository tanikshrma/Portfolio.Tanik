import React from "react";

export default function SectionSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* Header Skeleton */}
      <div className="flex flex-col items-start gap-4 mb-16">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-600 rounded-full" />
          <div className="h-3 w-28 bg-gray-200 rounded-sm" />
        </div>
        <div className="h-10 w-72 md:w-96 bg-gray-900 rounded-sm" />
        <div className="h-4 w-60 md:w-80 bg-gray-200 rounded-sm mt-1" />
      </div>

      {/* Card Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex flex-col bg-gray-50 border border-gray-200 p-6 relative overflow-hidden"
          >
            {/* Red Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-600/30" />

            {/* Thumbnail / Image Area Skeleton */}
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-sm mb-6 relative overflow-hidden">
            </div>

            {/* Tag / Category Skeleton */}
            <div className="h-3 w-20 bg-red-100 rounded-sm mb-3" />

            {/* Card Title Skeleton */}
            <div className="h-6 w-3/4 bg-gray-900 rounded-sm mb-3" />

            {/* Description lines Skeleton */}
            <div className="space-y-2 mb-6">
              <div className="h-3 w-full bg-gray-200 rounded-sm" />
              <div className="h-3 w-4/5 bg-gray-200 rounded-sm" />
            </div>

            {/* Footer / Meta Skeleton */}
            <div className="mt-auto pt-4 border-t border-gray-200 flex items-center justify-between">
              <div className="h-3 w-24 bg-gray-200 rounded-sm" />
              <div className="w-6 h-6 bg-red-600/20 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
