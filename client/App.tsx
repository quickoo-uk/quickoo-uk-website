import "./global.css";
import { useEffect, useState } from "react";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
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
import Payment from "./pages/booking/Payment";
import Success from "./pages/booking/Success";
import CityTourDetail from "./pages/CityTourDetail";

import CDSTestPage from "./pages/CDSTest";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBookingData from "./pages/admin/AdminBookingData";
import AdminVehicleClassManagement from "./pages/admin/AdminVehicleClassManagement";
import AdminPickupPricingSettings from "./pages/admin/AdminPickupPricingSettings";
import { ensureAdminSession } from "@/lib/adminAuth";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import BookFleet from "./pages/BookFleet";
import LogistifieBookNow from "./pages/LogistifieBookNow";
import GetQuotes from "./pages/GetQuotes";
import GoogleAdsLanding from "./pages/landing/GoogleAdsLanding";
import GoogleAdsThankYou from "./pages/landing/GoogleAdsThankYou";

const queryClient = new QueryClient();

const Layout = ({ children, isFooter }: { children: React.ReactNode; isFooter?: boolean;}) => (
  <div className="flex flex-col min-h-screen overflow-x-hidden w-full">
    <Navbar />
    <main className="flex-grow pt-16 sm:pt-20 w-full overflow-x-hidden">{children}</main>
    {isFooter !== false && <Footer />}
    <WhatsAppButton />
  </div>
);

const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState<"checking" | "allowed" | "denied">("checking");

  useEffect(() => {
    let mounted = true;
    ensureAdminSession().then((ok) => {
      if (!mounted) return;
      setStatus(ok ? "allowed" : "denied");
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (status === "checking") {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center text-slate-600">
        Checking admin session...
      </div>
    );
  }
  if (status === "denied") {
    return <Navigate to="/admin-panel/login" replace />;
  }
  return <>{children}</>;
};

export default function App() {
  return (
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
              path="/services/city-tours/:attractionId"
              element={
                <Layout>
                  <CityTourDetail />
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
              path="/get-quotes"
              element={
                <Layout>
                  <GetQuotes />
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
            {/* <Route
              path="/book-now"
              element={
                <Layout isFooter={false}>
                  <BookNowPage />
                </Layout>
              }
            /> */}
            <Route
              path="/book-now"
              element={
                <Layout>
                  <LogistifieBookNow />
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
              path="/booking/payment"
              element={
                <Layout isFooter={false}>
                  <Payment />
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
              path="/cds-test"
              element={
                <Layout>
                  <CDSTestPage />
                </Layout>
              }
            />
            <Route
              path="/book-fleet"
              element={
                <Layout>
                  <BookFleet />
                </Layout>
              }
            />
            
            {/* ------------------------------------------------------------------
                Google Ads landing funnel.
                Standalone on purpose: rendered WITHOUT <Layout>, so these pages
                have no Navbar, no site menu and no Footer. They are not linked
                from anywhere on the main site — traffic arrives from paid ads
                only. The logo in the landing header links back to "/".
            ------------------------------------------------------------------- */}
            <Route path="/lp/chauffeur" element={<GoogleAdsLanding />} />
            <Route path="/lp/chauffeur/thank-you" element={<GoogleAdsThankYou />} />

            <Route
              path="/admin-panel"
              element={<Navigate to="/admin-panel/login" replace />}
            />
            <Route path="/admin-panel/login" element={<AdminLogin />} />
            <Route
              path="/admin-panel/dashboard"
              element={
                <AdminGuard>
                  <AdminDashboard />
                </AdminGuard>
              }
            />
            <Route
              path="/admin-panel/booking-data"
              element={
                <AdminGuard>
                  <AdminBookingData />
                </AdminGuard>
              }
            />
            <Route
              path="/admin-panel/vehicle-class-management"
              element={
                <AdminGuard>
                  <AdminVehicleClassManagement />
                </AdminGuard>
              }
            />
            <Route
              path="/admin-panel/settings"
              element={
                <AdminGuard>
                  <AdminPickupPricingSettings />
                </AdminGuard>
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
}
