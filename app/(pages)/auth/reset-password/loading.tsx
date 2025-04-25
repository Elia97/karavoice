import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container max-w-md mx-auto py-12 px-4">
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
            <Skeleton className="h-10 w-full" />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t flex justify-center">
          <Skeleton className="h-10 w-36" />
        </div>
      </div>
    </div>
  );
}
