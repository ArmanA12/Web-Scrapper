import React, { useState } from 'react';
import { Globe2, ArrowRight, Linkedin, Github, X, Facebook, Instagram } from 'lucide-react';

function App() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle scraping logic here
    console.log('Scraping:', url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0A0A0A] to-[#0F0F0F] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#646CFF15,transparent)]"></div>
      </div>

      <div className="max-w-2xl w-full relative">
        {/* Enhanced Globe Animation */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="relative">
            <div className="absolute inset-0  w-40 h-40 bg-[#646CFF] blur-[64px] opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 animate-spin-slow">
              <div className="w-32 h-32 rounded-full border border-[#646CFF]/20"></div>
            </div>
            <div className="absolute inset-0 animate-spin-reverse">
              <div className="w-32 h-32 rounded-full border border-[#646CFF]/10 rotate-45"></div>
            </div>
            <div className="absolute inset-0 animate-spin-slower">
              <div className="w-32 h-32 rounded-full border border-[#646CFF]/5 -rotate-45 scale-[1.15]"></div>
            </div>
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-[50%] left-[50%] w-1 h-1 bg-[#646CFF] rounded-full shadow-lg shadow-[#646CFF]/50 translate-x-[16px]"></div>
            </div>
            <div className="absolute inset-0 animate-spin-reverse">
              <div className="absolute top-[50%] left-[50%] w-2 h-2 bg-[#646CFF] rounded-full shadow-lg shadow-[#646CFF]/50 translate-x-[16px]"></div>
            </div>
            <div className="absolute inset-0 animate-spin-slow">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <Globe2 className="w-32 h-32 text-[#646CFF] drop-shadow-[0_0_8px_rgba(100,108,255,0.4)]" strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="relative group">
          {/* Dynamic border glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#646CFF] via-transparent to-[#646CFF] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          <div style={{ border: "1px solid rgba(255,255,255,0.1)" }} className="relative  backdrop-blur-md rounded-2xl p-8 border">
            <h1 id='heading' className="text-7xl font-bold text-center mb-3 bg-gradient-to-br from-white to-white/70 text-transparent bg-clip-text">
              Web Scraper
            </h1>
            <p className="text-[#8F9199] text-center mb-10 text-lg">
              Enter a website URL to start scraping
            </p>

            <form onSubmit={handleSubmit} className="space-y-2">
              {/* Enhanced URL Input with corner gradient */}
              <div id='border' className="relative group/input">
                <div className="absolute top-0 left-0 w-2/3 h-3/4">
                  <div id='dashedborder' className="absolute -top-[1px] -left-[1px] w-full h-[1px] bg-gradient-to-r from-[#282d68] to-[#282d68] rounded-xl"></div>
                </div>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="relative w-full px-5 py-3 bg-black/80 backdrop-blur-2xl text-white placeholder-[#8F9199] rounded-xl border border-white/5 focus:outline-none transition-all duration-300 text-base"
                  required
                />
              </div>

              <div style={{ marginTop: "35px" }} className="relative group/button">
                <div className="absolute top-0 left-0 w-1/3 h-1/3">
                  <div id='bordertwo' className="absolute -top-[1px] -left-[1px] w-full h-[1px] bg-gradient-to-r from-[#282d68] to-[#090f52]"></div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-black/20 backdrop-blur-xl border border-white/5 transition-all duration-300 group-hover/button:bg-[#646CFF]/10"
                >
                  <div className="relative px-6 py-2.5">
                    <div className="flex items-center justify-center">
                      <span className="text-white font-medium text-base" style={{ letterSpacing: "2px" }}>Start Scraping</span>
                      <ArrowRight className="w-5 h-5 ml-2 text-white transition-transform group-hover/button:translate-x-1" />
                    </div>
                    {/* Shine effect */}
                  </div>
                </button>
              </div>
              <div className='text-[#8F9199] flex justify-center'>
                <div id="socialIcons" style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
                  <div className='themeToggleButton'>    <a href="https://www.linkedin.com/in/arman-shekh12/"><Linkedin size={19} strokeWidth={1} /></a> </div>
                  <div className='themeToggleButton'>   <a href="https://github.com/ArmanA12"> <Github size={19} strokeWidth={1} /></a> </div>
                  <div className='themeToggleButton'>    <a href="https://x.com/shekh_md72383"><X size={19} strokeWidth={1} /></a> </div>
                  <div className='themeToggleButton'>    <a href="https://www.facebook.com/mdarman.shekh.5201"><Facebook size={19} strokeWidth={1} /></a> </div>
                  <div className='themeToggleButton'>    <a href="https://www.instagram.com/arman_aishakar/"><Instagram size={19} strokeWidth={1} /></a> </div>
                </div>

              </div>
            </form>
          </div>
        </div>
        <div className='flex justify-center fixed bottom-0 w-full left-0'>
          <div className=" text-[#8F9199]  w-1/2  text-center h-full  bg-gradient-to-r from-transparent via-[#646CFF]/10 to-transparent">Developed By Mr Arman</div>
        </div>
      </div>
    </div>
  );
}

export default App;