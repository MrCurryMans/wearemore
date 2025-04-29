
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { StripeProvider } from "./contexts/StripeContext";
import { BasketProvider } from "./contexts/BasketContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import OurStory from "./pages/OurStory";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <StripeProvider>
        <BasketProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </BasketProvider>
      </StripeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
