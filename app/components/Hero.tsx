"use client";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Hero() {
  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center relative bg-black/[0.96] antialiased"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }}
    >
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 85%, .08) 0, hsla(0, 0%, 55%, .02) 50%, hsla(0, 0%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 85%, .06) 0, hsla(0, 0%, 55%, .02) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 85%, .04) 0, hsla(0, 0%, 45%, .02) 80%, transparent 100%)"
      />
      {/*<style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
      `}</style>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px', width: '150px' }}>
        <p 
          className="text-4xl md:text-6xl text-yellow-300"
          style={{
            fontFamily: "'Shadows Into Light', cursive",
            fontStyle: "italic",
            transform: "rotate(-5deg)",
            zIndex: 1,
            backgroundImage: "url('/fonts/circle.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            whiteSpace: 'nowrap',
            padding: '50px',
            marginTop: '-400px'
          }}
        >
            Hi, I am  
        </p>
      </div>*/}
      <div className="relative z-10">
        <h1 
          className="text-9xl sm:text-8xl lg:text-11xl xl:text-[15rem] 2xl:text-[15rem] font-light text-center leading-none"
          style={{
            fontFamily: "'Relationship of Melodrame', serif",
            backgroundImage: 'linear-gradient(to top, #444444, #FFFFFF)',
            color: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            width: '95vw',
            marginTop: '-200px',
            opacity: 0.9
          }}
        >
          Sneha Gusain
        </h1>
        <p className="text-xl text-gray-300 mt-6 text-center max-w-md mx-auto">
          I build scalable web apps, intelligent ML models, and software solutions that solve real-world problems.
        </p>
        
        <div className="flex gap-4 mt-8 justify-center">
          {/* Resume Button */}
          <button 
            className="px-4 py-2 border border-white bg-black text-white hover:bg-white hover:text-black active:scale-95 transition-all duration-200 font-medium tracking-wide flex items-center gap-2"
            style={{ borderRadius: '4px' }}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
            Resume
          </button>
          
          {/* LinkedIn Connect Button */}
          <button 
            className="px-4 py-2 bg-white text-black hover:bg-black hover:text-white hover:border-white border border-transparent active:scale-95 transition-all duration-200 font-medium tracking-wide flex items-center gap-2"
            style={{ borderRadius: '4px' }}
            onClick={() => window.open('https://linkedin.com/in/your-profile', '_blank')}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect
          </button>
        </div>
      </div>
      
      {/* Grey blurry oval below buttons - positioned absolutely to avoid layout issues */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div 
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(30, 30, 30, 0.95) 0%, rgba(20, 20, 20, 0.7) 40%, rgba(0, 0, 0, 0) 70%)',
            filter: 'blur(40px)',
            transform: 'scaleX(1.2) scaleY(0.6) translateY(2rem)',
          }}
        />
        <style jsx>{`
          @media (min-width: 640px) {
            div {
              transform: scaleX(1.2) scaleY(0.6) translateY(3rem) !important;
            }
          }
          @media (min-width: 768px) {
            div {
              transform: scaleX(1.2) scaleY(0.6) translateY(3.5rem) !important;
            }
          }
          @media (min-width: 1024px) {
            div {
              transform: scaleX(1.2) scaleY(0.6) translateY(4rem) !important;
            }
          }
          @media (min-width: 1280px) {
            div {
              transform: scaleX(1.2) scaleY(0.6) translateY(4.5rem) !important;
            }
          }
          @media (min-width: 1536px) {
            div {
              transform: scaleX(1.2) scaleY(0.6) translateY(5rem) !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
