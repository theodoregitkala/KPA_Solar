export default function ProductLoading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="aspect-square animate-pulse rounded-lg bg-muted"></div>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="h-8 w-2/3 animate-pulse rounded bg-muted"></div>
            <div className="h-6 w-1/3 animate-pulse rounded bg-muted"></div>
            <div className="h-24 w-full animate-pulse rounded bg-muted"></div>
          </div>
          <div className="h-12 w-full animate-pulse rounded bg-muted"></div>
          <div className="h-48 w-full animate-pulse rounded bg-muted"></div>
        </div>
      </div>
    </div>
  );
}