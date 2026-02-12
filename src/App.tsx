import { ThemeProvider } from "next-themes"; // Add this import
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThemeToggle from "./components/ThemeToggle";
import StarTrail from "@/components/StarTrail"; // Import StarTrail

// import ThemeToggle from "@/components/ThemeToggle";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {/* Place the toggle in a fixed/global position */}
    <div className="fixed top-6 right-6 z-50">
      <ThemeToggle />
    </div>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    <StarTrail /> {/* Add StarTrail component here */}
  </ThemeProvider>
);

export default App;
