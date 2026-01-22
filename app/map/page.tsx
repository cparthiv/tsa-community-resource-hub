"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Dynamically import ResourceMap with no SSR since leaflet is client-side only
const ResourceMap = dynamic(
  () =>
    import("@/components/resourceMap").then((mod) => ({
      default: mod.ResourceMap,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full max-w-4xl mx-auto my-8">
        <h2 className="text-xl font-semibold mb-4 text-center text-primary">
          Find a Community Resource Nearby
        </h2>
        <div className="h-[400px] w-full rounded-lg bg-muted animate-pulse flex items-center justify-center">
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      </div>
    ),
  }
);

export default function MapPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pattern-grid opacity-40 pointer-events-none" />

        <div className="container mx-auto px-4 pt-12 pb-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="section-header gradient-text mb-4">
              Community Resource Map
            </h1>
            <p className="section-subtitle">
              Explore local nonprofits, support services, and community programs
              nearby.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <main className="container mx-auto px-4 pb-16">
        <div
          className="
            max-w-5xl mx-auto
            mt-10
            animate-scale-in
            card-hover
            rounded-xl
            border
            bg-card
            shadow-lg
          "
        >
          {/* Animated accent bar */}
          <div className="h-1 w-full gradient-primary animate-pulse-soft rounded-t-xl" />

          <div className="p-4 md:p-6">
            <ResourceMap />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
