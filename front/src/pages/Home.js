import React from "react";
import Nav from "../components/shared/nav/Nav";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";
import Footer from "../components/shared/footer/Footer";
import Testimonials from "../components/home/testimonials/Testimonials";
import Imgcarousel from "../components/home/imgcarousel/Imgcarousel";
import Community from "../components/home/community/Community";

export default function Home() {
  return (
    <>
      <Nav />
      <Testimonials />
      <Imgcarousel />
      <Community/>
      <NewsletterSignup />
      <Footer />
    </>
  );
}
