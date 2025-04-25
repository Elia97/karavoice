import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Back Button Skeleton */}
      <div className="flex items-center mb-6">
        <Skeleton className="h-10 w-36" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Skeleton */}
        <div className="lg:col-span-2 space-y-8">
          {/* Article Header */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-10 w-3/4" />
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <Skeleton className="h-4 w-4 rounded-full mr-1" />
                <Skeleton className="h-4 w-32" />
              </div>
              <div className="flex items-center">
                <Skeleton className="h-4 w-4 rounded-full mr-1" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
          </div>

          {/* Main Image */}
          <Skeleton className="w-full h-[400px] rounded-xl" />

          {/* Article Content */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-6 w-1/2 mt-4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-6 w-1/2 mt-4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {/* Tags */}
          <div className="pt-4 border-t space-y-2">
            <Skeleton className="h-5 w-16" />
            <div className="flex flex-wrap gap-2">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <Skeleton key={i} className="h-8 w-24 rounded-full" />
                ))}
            </div>
          </div>

          {/* Share */}
          <div className="pt-4 border-t space-y-2">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="space-y-8">
          {/* Author */}
          <div className="border rounded-lg">
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-32 mb-2" />
              <div className="flex items-center gap-4">
                <Skeleton className="w-16 h-16 rounded-full" />
                <div className="space-y-1">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-48" />
                </div>
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>

          {/* Related Articles */}
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
