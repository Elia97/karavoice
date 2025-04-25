import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Header Skeleton */}
      <header className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-56" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Skeleton className="h-10 w-full" />
          </div>
          <Skeleton className="h-10 w-24 sm:w-32" />
        </div>
      </header>

      {/* Tabs Skeleton */}
      <div className="space-y-6">
        <div className="grid grid-cols-4 gap-2">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <Skeleton key={i} className="h-10" />
            ))}
        </div>

        {/* Events Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <Skeleton className="h-6 w-3/5" />
                    <Skeleton className="h-5 w-20 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Skeleton className="h-4 w-4 mr-1 rounded-full" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                    <div className="flex items-center">
                      <Skeleton className="h-4 w-4 mr-1 rounded-full" />
                      <Skeleton className="h-4 w-40" />
                    </div>
                  </div>
                  <Skeleton className="h-10 w-full mt-2" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
