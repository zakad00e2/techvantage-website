/**
 * Loading spinner & skeleton components for Suspense boundaries.
 */

export function Spinner({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600" />
    </div>
  );
}

export function SkeletonLine({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded bg-neutral-200 ${className}`} />
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 space-y-4">
      <SkeletonLine className="h-4 w-3/4" />
      <SkeletonLine className="h-3 w-full" />
      <SkeletonLine className="h-3 w-5/6" />
      <SkeletonLine className="h-3 w-2/3" />
    </div>
  );
}

export function PageLoading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Spinner />
    </div>
  );
}
