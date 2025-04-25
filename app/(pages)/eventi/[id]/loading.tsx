import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Back Button Skeleton */}
      <div className="flex items-center mb-6">
        <Skeleton className="h-10 w-36" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Skeleton */}
        <div className="lg:col-span-2 space-y-6">
          <Skeleton className="w-full h-[300px] md:h-[400px] rounded-xl" />

          <div className="space-y-4">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-32 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="space-y-6">
          <div className="border rounded-lg p-6 space-y-4">
            <Skeleton className="h-6 w-40" />
            <div className="flex items-start gap-2">
              <Skeleton className="h-5 w-5 rounded-full flex-shrink-0" />
              <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>

            <Skeleton className="h-6 w-40 mt-4" />
            <div className="flex items-start gap-2">
              <Skeleton className="h-5 w-5 rounded-full flex-shrink-0" />
              <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>

            <Skeleton className="h-6 w-40 mt-4" />
            <Skeleton className="h-4 w-1/2" />

            <Skeleton className="h-6 w-40 mt-4" />
            <Skeleton className="h-4 w-2/3" />

            <Skeleton className="h-4 w-40 mt-4" />

            <Skeleton className="h-10 w-full mt-4" />
          </div>

          <div className="border rounded-lg p-6">
            <Skeleton className="w-full h-[200px] rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
