"use client";

export function ArticleSkeleton() {
  return (
    <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
      {/* Navigation Skeleton */}
      <div className="sticky top-0 z-50 bg-background dark:bg-[#0a0a0a] border-b border-border dark:border-white/10 h-16" />

      {/* Hero Section Skeleton */}
      <section className="pt-64 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button Skeleton */}
          <div className="mb-8 h-5 w-24 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse" />

          {/* Category Badge Skeleton */}
          <div className="mb-6 h-8 w-32 bg-muted dark:bg-[#1a1a1a] rounded-full animate-pulse" />

          {/* Title Skeleton */}
          <div className="mb-8 space-y-3">
            <div className="h-12 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse" />
            <div className="h-12 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse w-3/4" />
          </div>

          {/* Excerpt Skeleton */}
          <div className="mb-8 space-y-2">
            <div className="h-6 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse" />
            <div className="h-6 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse w-5/6" />
          </div>

          {/* Meta Information Skeleton */}
          <div className="flex flex-wrap gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-4 w-4 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse" />
                <div className="h-4 w-24 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse" />
              </div>
            ))}
          </div>

          {/* Tags Skeleton */}
          <div className="flex items-start gap-3 mb-8">
            <div className="h-4 w-4 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse mt-1 flex-shrink-0" />
            <div className="flex flex-wrap gap-2 flex-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-7 w-20 bg-muted dark:bg-[#1a1a1a] rounded-lg animate-pulse"
                />
              ))}
            </div>
          </div>

          {/* Share Buttons Skeleton */}
          <div className="flex items-center gap-3 pb-8 border-b border-border dark:border-white/10">
            <div className="h-4 w-12 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse" />
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-10 w-10 bg-muted dark:bg-[#1a1a1a] rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Skeleton */}
      <section className="px-4 mb-16">
        <div className="container mx-auto max-w-5xl">
          <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden bg-muted dark:bg-[#1a1a1a] animate-pulse shadow-2xl" />
        </div>
      </section>

      {/* Article Content Skeleton */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl space-y-6">
          {/* Paragraphs */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-3">
              <div className="h-5 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse" />
              <div className="h-5 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse" />
              <div className="h-5 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse w-4/5" />
            </div>
          ))}

          {/* Newsletter CTA Skeleton */}
          <div className="my-16 p-8 bg-muted dark:bg-[#1a1a1a] rounded-2xl border border-border dark:border-white/10 space-y-4">
            <div className="h-8 w-8 bg-background dark:bg-[#0a0a0a] rounded-full mx-auto animate-pulse" />
            <div className="h-6 w-32 bg-background dark:bg-[#0a0a0a] rounded mx-auto animate-pulse" />
            <div className="h-5 w-full bg-background dark:bg-[#0a0a0a] rounded animate-pulse" />
            <div className="flex gap-2 justify-center">
              <div className="h-10 w-32 bg-background dark:bg-[#0a0a0a] rounded-lg animate-pulse" />
              <div className="h-10 w-20 bg-background dark:bg-[#0a0a0a] rounded-lg animate-pulse" />
            </div>
          </div>

          {/* Author Info Skeleton */}
          <div className="mt-12 p-6 bg-card dark:bg-[#1a1a1a] rounded-xl border border-border dark:border-white/10 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-muted dark:bg-[#2a2a2a] animate-pulse flex-shrink-0" />
              <div className="flex-1 space-y-3">
                <div className="h-5 bg-muted dark:bg-[#2a2a2a] rounded animate-pulse w-3/4" />
                <div className="h-4 bg-muted dark:bg-[#2a2a2a] rounded animate-pulse" />
                <div className="h-4 bg-muted dark:bg-[#2a2a2a] rounded animate-pulse w-5/6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Skeleton */}
      <section className="px-4 py-20 bg-card dark:bg-[#1a1a1a]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 space-y-3">
            <div className="h-8 w-48 bg-muted dark:bg-[#0a0a0a] rounded animate-pulse" />
            <div className="h-5 w-64 bg-muted dark:bg-[#0a0a0a] rounded animate-pulse" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-background dark:bg-[#0a0a0a] rounded-xl overflow-hidden border border-border dark:border-white/10"
              >
                <div className="relative h-52 bg-muted dark:bg-[#1a1a1a] animate-pulse" />
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="h-5 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse" />
                    <div className="h-5 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse w-4/5" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse" />
                    <div className="h-4 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse w-3/4" />
                  </div>
                  <div className="flex gap-4 pt-2">
                    <div className="h-3 w-20 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse" />
                    <div className="h-3 w-16 bg-muted dark:bg-[#1a1a1a] rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Skeleton */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="h-12 w-64 bg-muted dark:bg-[#1a1a1a] rounded-xl mx-auto animate-pulse" />
        </div>
      </section>
    </main>
  );
}
