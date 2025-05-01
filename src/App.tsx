import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import FoundationCourse from "./pages/FoundationCourse";
import IntermediateCourse from "./pages/IntermediateCourse";
import ExpertCourse from "./pages/ExpertCourse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route
            path="/foundation-in-digital-marketing"
            element={<FoundationCourse />}
          />
          <Route
            path="/intermediate-in-ai-ditigal-marketing"
            element={<IntermediateCourse />}
          />
          <Route
            path="/expert-in-digital-marketing"
            element={<ExpertCourse />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
