import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header Skeleton */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Skeleton className="h-10 w-48 mx-auto mb-4" />
        <Skeleton className="h-5 w-full max-w-2xl mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Contact Info Skeleton */}
        <div className="lg:col-span-1 space-y-6">
          <div className="border rounded-lg">
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <Skeleton className="h-6 w-64" />
                <Skeleton className="h-4 w-full" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Skeleton className="h-5 w-5 rounded-full mt-0.5" />
                  <div className="space-y-1 flex-1">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Skeleton className="h-5 w-5 rounded-full mt-0.5" />
                  <div className="space-y-1 flex-1">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Skeleton className="h-5 w-5 rounded-full mt-0.5" />
                  <div className="space-y-1 flex-1">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg">
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-48 mb-4" />
              <Skeleton className="w-full h-[200px] rounded-md" />
            </div>
          </div>
        </div>

        {/* Contact Form Skeleton */}
        <div className="lg:col-span-2">
          <div className="border rounded-lg">
            <div className="p-6 space-y-6">
              <Skeleton className="h-6 w-64 mb-6" />
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <div className="space-y-2">
                    {Array(4)
                      .fill(null)
                      .map((_, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Skeleton className="h-4 w-4 rounded-full" />
                          <Skeleton className="h-4 w-40" />
                        </div>
                      ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-32 w-full" />
                </div>

                <Skeleton className="h-10 w-40" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section Skeleton */}
      <section className="mt-16 max-w-4xl mx-auto">
        <Skeleton className="h-8 w-64 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="border rounded-lg p-6 space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
