import { Hero } from '@/components/home/Hero';
import { SegmentRouter } from '@/components/home/SegmentRouter';
import { TrustedClients } from '@/components/home/TrustedClients';
import { TrustBar } from '@/components/home/TrustBar';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { IndustriesOverview } from '@/components/home/IndustriesOverview';
import { FeaturedCaseStudy } from '@/components/home/FeaturedCaseStudy';
import { HowWeWork } from '@/components/home/HowWeWork';
import { Testimonials } from '@/components/home/Testimonials';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SegmentRouter />
      <TrustedClients />
      <TrustBar />
      <ServicesOverview />
      <IndustriesOverview />
      <FeaturedCaseStudy />
      <HowWeWork />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
