import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section Skeleton */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-16">
        <Skeleton className="absolute inset-0 z-0 w-full h-full" />
        <div className="relative z-20 h-full flex items-center">
          <div className="container px-4">
            <div className="max-w-2xl">
              <Skeleton className="h-10 w-64 mb-4" />
              <Skeleton className="h-6 w-full max-w-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* La Nostra Storia Section Skeleton */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-64 mx-auto mb-6" />
          <div className="space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>
        </div>
      </section>

      {/* La Nostra Missione Section Skeleton */}
      <section className="mb-16 bg-gray-50 py-16 -mx-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="h-8 w-64 mx-auto mb-6" />
          <Skeleton className="h-6 w-full max-w-lg mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array(3)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="p-6 text-center">
                  <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-6 w-32 mx-auto mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Il Nostro Team Section Skeleton */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-64 mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <Skeleton className="w-full aspect-square" />
                  <div className="p-6 space-y-2">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-4 w-full mt-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
