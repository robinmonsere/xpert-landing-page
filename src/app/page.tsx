import {Hero} from "@/components/hero";
import {Features} from "@/components/features";
import {Timeline} from "@/components/timeline";
import {Contact} from "@/components/contact";

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
          <main className="min-h-screen">
              <Hero />
              <Features />
              <Timeline />
              <Contact />
          </main>
      </div>
  );
}
