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
const TreeServiceSneadsFerry = lazy(() => import("./pages/TreeServiceSneadsFerry"));
const TreeServiceSwansboro = lazy(() => import("./pages/TreeServiceSwansboro"));
const TreeServiceCampLejeune = lazy(() => import("./pages/TreeServiceCampLejeune"));
const TreeRemovalCost = lazy(() => import("./pages/TreeRemovalCost"));
const StormDamageGuide = lazy(() => import("./pages/StormDamageGuide"));
const TreeTrimmingVsPruning = lazy(() => import("./pages/TreeTrimmingVsPruning"));
const TreeRemovalPermitNC = lazy(() => import("./pages/TreeRemovalPermitNC"));
const TreeServiceJacksonvilleNC = lazy(() => import("./pages/TreeServiceJacksonvilleNC"));
const LeaningTreeDangerous = lazy(() => import("./pages/LeaningTreeDangerous"));
const SpiderLiftRemoval = lazy(() => import("./pages/SpiderLiftRemoval"));
const TreeRemovalNearHouse = lazy(() => import("./pages/TreeRemovalNearHouse"));
const TreeRemovalTightSpaces = lazy(() => import("./pages/TreeRemovalTightSpaces"));

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
            <Route path="/tree-service-sneads-ferry-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeServiceSneadsFerry /></Suspense>} />
            <Route path="/tree-service-swansboro-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeServiceSwansboro /></Suspense>} />
            <Route path="/tree-service-camp-lejeune-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeServiceCampLejeune /></Suspense>} />
            <Route path="/tree-removal-cost-north-carolina" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeRemovalCost /></Suspense>} />
            <Route path="/storm-damage-trees-guide" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><StormDamageGuide /></Suspense>} />
            <Route path="/tree-trimming-vs-pruning" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeTrimmingVsPruning /></Suspense>} />
            <Route path="/do-you-need-a-permit-to-remove-a-tree-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeRemovalPermitNC /></Suspense>} />
            <Route path="/tree-service-jacksonville-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeServiceJacksonvilleNC /></Suspense>} />
            <Route path="/leaning-tree-dangerous-after-storm" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><LeaningTreeDangerous /></Suspense>} />
            <Route path="/spider-lift-tree-removal-jacksonville-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><SpiderLiftRemoval /></Suspense>} />
            <Route path="/tree-removal-near-house-jacksonville-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeRemovalNearHouse /></Suspense>} />
            <Route path="/tree-removal-tight-spaces-jacksonville-nc" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><TreeRemovalTightSpaces /></Suspense>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
