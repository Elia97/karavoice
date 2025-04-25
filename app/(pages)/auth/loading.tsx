import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container max-w-md mx-auto py-12 px-4">
      {/* Tabs Skeleton */}
      <div className="w-full mb-8">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* Card Skeleton */}
      <div className="border rounded-lg">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="space-y-1">
            <Skeleton className="h-8 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-2/3 mx-auto" />
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-40" />
              </div>
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-24" />
            </div>

            <Skeleton className="h-10 w-full" />

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <Skeleton className="w-full h-[1px]" />
              </div>
              <div className="relative flex justify-center">
                <Skeleton className="h-4 w-40 bg-background" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t">
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      </div>
    </div>
  );
}
