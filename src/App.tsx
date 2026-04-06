import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const TreeRemoval = lazy(() => import("./pages/TreeRemoval"));
const TreeTrimming = lazy(() => import("./pages/TreeTrimming"));
const StumpGrinding = lazy(() => import("./pages/StumpGrinding"));
const EmergencyTreeService = lazy(() => import("./pages/EmergencyTreeService"));
const TreeServiceRichlands = lazy(() => import("./pages/TreeServiceRichlands"));
const TreeServiceHubert = lazy(() => import("./pages/TreeServiceHubert"));
const TreeRemovalCost = lazy(() => import("./pages/TreeRemovalCost"));
const StormDamageGuide = lazy(() => import("./pages/StormDamageGuide"));
const TreeTrimmingVsPruning = lazy(() => import("./pages/TreeTrimmingVsPruning"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tree-removal-jacksonville-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeRemoval /></Suspense>} />
            <Route path="/tree-trimming-jacksonville-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeTrimming /></Suspense>} />
            <Route path="/stump-grinding-jacksonville-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><StumpGrinding /></Suspense>} />
            <Route path="/emergency-tree-service-jacksonville-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><EmergencyTreeService /></Suspense>} />
            <Route path="/tree-service-richlands-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeServiceRichlands /></Suspense>} />
            <Route path="/tree-service-hubert-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeServiceHubert /></Suspense>} />
            <Route path="/tree-removal-cost-north-carolina" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeRemovalCost /></Suspense>} />
            <Route path="/storm-damage-trees-guide" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><StormDamageGuide /></Suspense>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
