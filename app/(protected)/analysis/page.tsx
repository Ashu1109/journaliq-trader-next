"use client";
import { Analytics } from "@/components/Analytics";
import { Layout } from "@/components/Layout";

const Analysis = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <header className="animate-slide-in">
          <h1 className="text-3xl font-bold tracking-tight">Analysis</h1>
          <p className="text-muted-foreground">
            Understand your trading patterns and improve your strategy
          </p>
        </header>

        <section className="animate-fade-in">
          <Analytics />
        </section>

        {/* <section className="animate-fade-in [animation-delay:200ms]">
          <SectionTitle>AI-Powered Insights</SectionTitle>
          <AIInsights />
        </section> */}
      </div>
    </Layout>
  );
};

export default Analysis;
