import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import Fields from "./pages/Fields";
import MedicineHealthcare from "./pages/MedicineHealthCare";
import EngineeringTechnology from "./pages/Engineering&Technology";
import CommerceFinance from "./pages/Commerce&Finance";
import ArtsDesign from "./pages/ArtsDesign";
import LawJustice from "./pages/Law&Justice";
import ManagementBusiness from "./pages/Management";
import MediaCommunication from "./pages/MediaCommunication";
import SocialWorkPsychology from "./pages/SocialWork&Psychology";
import InternationalRelations from "./pages/InternationalRelations";
import ScienceResearch from "./pages/Science";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fields" element={<Fields />} />
          <Route path="/fields/medicine-healthcare" element={<MedicineHealthcare />} />
          <Route path="/fields/engineering-technology" element={<EngineeringTechnology />} />
          <Route path="/fields/commerce-finance" element={<CommerceFinance />} />
          <Route path="/fields/arts-design" element={<ArtsDesign />} />
          <Route path="/fields/law-justice" element={<LawJustice />} />
          <Route path="/fields/management-business" element={<ManagementBusiness />} />
          <Route path="/fields/media-communication" element={<MediaCommunication />} />
          <Route path="/fields/soialwork-psychology" element={<SocialWorkPsychology />} />
          <Route path="/fields/international-relations" element={<InternationalRelations />} />
          <Route path="/fields/science-research" element={<ScienceResearch />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
// git clone https://github.com/Rohan-Sharma-10/pathfinder-blossom.git