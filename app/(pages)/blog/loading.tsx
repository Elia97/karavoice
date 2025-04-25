import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header Skeleton */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Skeleton className="h-10 w-24 mx-auto mb-4" />
        <Skeleton className="h-5 w-full max-w-2xl mx-auto mb-8" />
        <div className="relative max-w-xl mx-auto">
          <Skeleton className="h-12 w-full rounded-md" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Skeleton */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-8">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Skeleton className="w-full h-full aspect-video md:aspect-square" />
                    </div>
                    <div className="md:w-2/3 p-6 space-y-4">
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-20 rounded-full" />
                        <Skeleton className="h-6 w-3/4" />
                      </div>
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Skeleton className="h-4 w-4 rounded-full mr-1" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                        <div className="flex items-center">
                          <Skeleton className="h-4 w-4 rounded-full mr-1" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                      <Skeleton className="h-8 w-32" />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Skeleton className="h-10 w-40" />
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="space-y-8">
          {/* Categories */}
          <div className="border rounded-lg">
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-32 mb-2" />
              <div className="space-y-2">
                {Array(6)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2"
                    >
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-8" />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Recent Articles */}
          <div className="border rounded-lg">
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-40 mb-2" />
              <div className="space-y-4">
                {Array(3)
                  .fill(null)
                  .map((_, i) => (
                    <div key={i} className="flex gap-3">
                      <Skeleton className="w-16 h-16 rounded-md" />
                      <div className="space-y-1">
                        <Skeleton className="h-4 w-40" />
                        <Skeleton className="h-4 w-40" />
                        <Skeleton className="h-3 w-20" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border rounded-lg">
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <div className="space-y-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
