import Image from "next/image";
import { QuoteIcon, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Real Stories, Real Recovery
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Hear from our clients who have successfully reclaimed their assets and restored their peace of mind.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-5/12 relative min-h-[300px] md:min-h-full overflow-hidden group">
              <Dialog>
                <DialogTrigger asChild>
                  <div role="button" tabIndex={0} className="w-full h-full relative cursor-pointer outline-none block">
                    <Image
                      src="/images/testimonial-real-woman.jpg"
                      alt="Client expressing gratitude with a sign"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-blue-600 ml-1" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-black border-none shadow-2xl">
                  <div className="relative pt-[56.25%] w-full bg-black">
                    <video 
                      controls 
                      autoPlay 
                      className="absolute inset-0 w-full h-full object-contain"
                      src="/videos/testimonial.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <QuoteIcon className="w-12 h-12 text-blue-500 mb-6 opacity-50" />
              
              <blockquote className="text-2xl md:text-3xl font-medium leading-tight text-slate-900 dark:text-slate-100 mb-8 italic">
                "Thank you Vector Shield Recovery Partners for restoring my smile."
              </blockquote>
              
              <div>
                <h4 className="font-semibold text-lg text-slate-900 dark:text-white">Sarah M.</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Verified Client Recovery</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Successfully recovered lost retirement funds from a sophisticated investment scam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
