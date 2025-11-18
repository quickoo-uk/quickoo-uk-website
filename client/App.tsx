import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPlaceholder from "./pages/ServicesPlaceholder";
import FleetPlaceholder from "./pages/FleetPlaceholder";
import PricingPage from "./pages/Pricing";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import BookNowPage from "./pages/BookNow";

const queryClient = new QueryClient();

const Layout = ({
  children,
  isFooter,
}: {
  children: React.ReactNode;
  isFooter?: boolean;
}) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow pt-20">{children}</main>
    {isFooter !== false && <Footer />}
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/services/:id"
            element={
              <Layout>
                <ServicesPlaceholder />
              </Layout>
            }
          />
          <Route
            path="/fleet/:id"
            element={
              <Layout>
                <FleetPlaceholder />
              </Layout>
            }
          />
          <Route
            path="/pricing"
            element={
              <Layout>
                <PricingPage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="/book-now"
            element={
              <Layout isFooter={false}>
                <BookNowPage />
              </Layout>
            }
          />
          <Route
            path="/faq"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
