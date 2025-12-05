import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollManager } from "@/components/ScrollManager";
import { BookingProvider } from "@/contexts/BookingContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPlaceholder from "./pages/ServicesPlaceholder";
import CarTypePage from "./pages/CarTypePage";
import PricingPage from "./pages/Pricing";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import BookNowPage from "./pages/BookNow";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsAndConditionsPage from "./pages/TermsAndConditions";
import FAQ from "./pages/FAQ";
import SafetyFirstPage from "./pages/SafetyFirst";
import TransparentPricingPage from "./pages/TransparentPricing";
import LuxuryFleetPage from "./pages/LuxuryFleet";
import EliteChauffeurs from "./pages/EliteChauffeurs";
import SelectCar from "./pages/booking/SelectCar";
import CustomerInfo from "./pages/booking/CustomerInfo";
import Checkout from "./pages/booking/Checkout";
import Success from "./pages/booking/Success";

const queryClient = new QueryClient();

const Layout = ({
  children,
  isFooter,
}: {
  children: React.ReactNode;
  isFooter?: boolean;
}) => (
  <div className="flex flex-col min-h-screen overflow-x-hidden w-full">
    <Navbar />
    <main className="flex-grow pt-16 sm:pt-20 w-full overflow-x-hidden">{children}</main>
    {isFooter !== false && <Footer />}
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BookingProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollManager />
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
                  <CarTypePage />
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
              path="/privacy-policy"
              element={
                <Layout>
                  <PrivacyPolicyPage />
                </Layout>
              }
            />
            <Route
              path="/terms-and-conditions"
              element={
                <Layout>
                  <TermsAndConditionsPage />
                </Layout>
              }
            />
            <Route
              path="/faq"
              element={
                <Layout>
                  <FAQ />
                </Layout>
              }
            />
            <Route
              path="/why-choose/safety-first"
              element={
                <Layout>
                  <SafetyFirstPage />
                </Layout>
              }
            />
            <Route
              path="/why-choose/transparent-pricing"
              element={
                <Layout>
                  <TransparentPricingPage />
                </Layout>
              }
            />
            <Route
              path="/why-choose/luxury-fleet"
              element={
                <Layout>
                  <LuxuryFleetPage />
                </Layout>
              }
            />
            <Route
              path="/why-choose/elite-chauffeurs"
              element={
                <Layout>
                  <EliteChauffeurs />
                </Layout>
              }
            />
            <Route
              path="/booking/select-car"
              element={
                <Layout isFooter={false}>
                  <SelectCar />
                </Layout>
              }
            />
            <Route
              path="/booking/customer-info"
              element={
                <Layout isFooter={false}>
                  <CustomerInfo />
                </Layout>
              }
            />
            <Route
              path="/booking/checkout"
              element={
                <Layout isFooter={false}>
                  <Checkout />
                </Layout>
              }
            />
            <Route
              path="/booking/success"
              element={
                <Layout isFooter={false}>
                  <Success />
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
      </BookingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
