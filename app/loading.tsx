import { Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section Skeleton */}
      <div className="relative h-[500px] md:h-[600px] flex items-center justify-center mb-16">
        <Skeleton className="absolute inset-0 z-0 w-full h-full" />
        <div className="container relative z-20 text-center px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Skeleton className="h-12 w-3/4 max-w-2xl mx-auto" />
            <Skeleton className="h-6 w-2/3 max-w-xl mx-auto" />
            <div className="max-w-2xl w-full mx-auto mt-4">
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section Skeleton */}
      <div className="py-16">
        <div className="text-center mb-12">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-full max-w-2xl mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <Skeleton key={i} className="h-32 rounded-lg" />
            ))}
        </div>
      </div>

      {/* Featured Events Section Skeleton */}
      <div className="py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Skeleton className="h-8 w-64 mb-2" />
            <Skeleton className="h-4 w-48" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="rounded-lg overflow-hidden border shadow">
                <Skeleton className="h-48 w-full" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-10 w-full mt-2" />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="flex justify-center items-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    </div>
  );
}
