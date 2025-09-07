'use client';

export default function AOSExamples() {
  return (
    <div className="space-y-16 py-16">
      {/* Fade animations */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-center" data-aos="fade-up">
          AOS Fade Animations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="p-6 bg-blue-100 dark:bg-blue-900 rounded-lg text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="font-semibold mb-2">Fade Up</h3>
            <p className="text-sm">Element fades in from bottom</p>
          </div>
          
          <div 
            className="p-6 bg-green-100 dark:bg-green-900 rounded-lg text-center"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <h3 className="font-semibold mb-2">Fade Down</h3>
            <p className="text-sm">Element fades in from top</p>
          </div>
          
          <div 
            className="p-6 bg-purple-100 dark:bg-purple-900 rounded-lg text-center"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3 className="font-semibold mb-2">Fade Left</h3>
            <p className="text-sm">Element fades in from right</p>
          </div>
        </div>
      </section>

      {/* Slide animations */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-center" data-aos="slide-up">
          AOS Slide Animations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className="p-6 bg-red-100 dark:bg-red-900 rounded-lg"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <h3 className="font-semibold mb-2">Slide Right</h3>
            <p className="text-sm">Element slides in from left with 1000ms duration</p>
          </div>
          
          <div 
            className="p-6 bg-yellow-100 dark:bg-yellow-900 rounded-lg"
            data-aos="slide-left"
            data-aos-duration="1200"
          >
            <h3 className="font-semibold mb-2">Slide Left</h3>
            <p className="text-sm">Element slides in from right with 1200ms duration</p>
          </div>
        </div>
      </section>

      {/* Zoom animations */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-center" data-aos="zoom-in">
          AOS Zoom Animations
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div 
            className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
          >
            Zoom In
          </div>
          
          <div 
            className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold"
            data-aos="zoom-out"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="200"
          >
            Zoom Out
          </div>
        </div>
      </section>

      {/* Flip animations */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-center" data-aos="flip-up">
          AOS Flip Animations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className="p-8 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg text-center"
            data-aos="flip-left"
            data-aos-duration="800"
          >
            <h3 className="font-semibold text-lg">Flip Left</h3>
            <p className="mt-2">Card flips from the left</p>
          </div>
          
          <div 
            className="p-8 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg text-center"
            data-aos="flip-right"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h3 className="font-semibold text-lg">Flip Right</h3>
            <p className="mt-2">Card flips from the right</p>
          </div>
        </div>
      </section>
    </div>
  );
}
