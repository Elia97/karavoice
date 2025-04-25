import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header Skeleton */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Skeleton className="h-10 w-64 mx-auto mb-4" />
        <Skeleton className="h-5 w-full max-w-2xl mx-auto mb-8" />
        <div className="relative max-w-xl mx-auto">
          <Skeleton className="h-12 w-full rounded-md" />
        </div>
      </div>

      {/* Categories Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array(8)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <Skeleton className="w-full h-48" />
              <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <div className="flex flex-wrap gap-2">
                    {Array(5)
                      .fill(null)
                      .map((_, j) => (
                        <Skeleton key={j} className="h-6 w-20 rounded-full" />
                      ))}
                  </div>
                </div>
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
