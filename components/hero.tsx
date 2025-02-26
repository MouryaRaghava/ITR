import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 perspective-1000">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
            alt="Income Tax Building"
            className="w-full h-full object-cover opacity-10 transform scale-110 rotate-2 hover:rotate-0 transition-transform duration-1000"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/80 to-blue-900/80" />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden">
  <div className="absolute top-[10%] left-[15%] w-32 h-32 bg-white/5 rounded-lg rotate-[45deg] animate-[float_5s_infinite_ease-in-out]" />
  <div className="absolute top-[25%] right-[20%] w-24 h-24 bg-white/5 rounded-lg rotate-[-12deg] animate-[float_6s_infinite_ease-in-out]" />
  <div className="absolute bottom-[30%] left-[40%] w-40 h-40 bg-white/5 rounded-lg rotate-[12deg] animate-[float_4s_infinite_ease-in-out]" />
  <div className="absolute top-[5%] left-[60%] w-32 h-32 bg-white/5 rounded-lg rotate-[60deg] animate-[float_7s_infinite_ease-in-out]" />
  <div className="absolute top-[40%] right-[10%] w-24 h-24 bg-white/5 rounded-lg rotate-[-24deg] animate-[float_5s_infinite_ease-in-out]" />
  <div className="absolute bottom-[10%] left-[20%] w-40 h-40 bg-white/5 rounded-lg rotate-[24deg] animate-[float_6s_infinite_ease-in-out]" />
  <div className="absolute top-[50%] left-[5%] w-32 h-32 bg-white/5 rounded-lg rotate-[75deg] animate-[float_4.5s_infinite_ease-in-out]" />
  <div className="absolute top-[20%] right-[35%] w-24 h-24 bg-white/5 rounded-lg rotate-[-36deg] animate-[float_5.5s_infinite_ease-in-out]" />
  <div className="absolute bottom-[20%] left-[50%] w-40 h-40 bg-white/5 rounded-lg rotate-[36deg] animate-[float_6.5s_infinite_ease-in-out]" />
  <div className="absolute top-[60%] right-[15%] w-32 h-32 bg-white/5 rounded-lg rotate-[-45deg] animate-[float_4.5s_infinite_ease-in-out]" />
  <div className="absolute top-[30%] left-[75%] w-32 h-32 bg-white/5 rounded-lg rotate-[15deg] animate-[float_5.2s_infinite_ease-in-out]" />
  <div className="absolute bottom-[40%] right-[25%] w-24 h-24 bg-white/5 rounded-lg rotate-[15deg] animate-[float_6.2s_infinite_ease-in-out]" />
  <div className="absolute top-[70%] left-[10%] w-40 h-40 bg-white/5 rounded-lg rotate-[-15deg] animate-[float_4.2s_infinite_ease-in-out]" />
  <div className="absolute top-[40%] right-[45%] w-32 h-32 bg-white/5 rounded-lg rotate-[45deg] animate-[float_7.2s_infinite_ease-in-out]" />
  <div className="absolute bottom-[50%] left-[30%] w-24 h-24 bg-white/5 rounded-lg rotate-[-45deg] animate-[float_5.2s_infinite_ease-in-out]" />
  <div className="absolute bottom-[30%] right-[50%] w-40 h-40 bg-white/5 rounded-lg rotate-[45deg] animate-[float_6.2s_infinite_ease-in-out]" />
</div>

      {/* Main Content */}
      <div className="container relative z-20 mx-auto px-4 py-20 h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Rated Text */}
          <h2 
            className="text-xl md:text-2xl font-semibold text-teal-400 mb-4 opacity-0 animate-slideIn animate-glow"
            style={{ animationDelay: '0.2s' }}
          >
            TOP RATED IN DELHI NCR!
          </h2>

          {/* Main Heading */}
          <h1 
            className="text-3xl md:text-5xl font-bold mb-6 text-white transform hover:translate-z-10 transition-transform duration-500 shadow-text opacity-0 animate-slideIn"
            style={{ animationDelay: '0.4s' }}
          >
            FILE YOUR ITR FOR AY 2024-25 <br/>(FY 2023-24)
          </h1>

          {/* Years of Excellence */}
          <p 
            className="text-xl md:text-2xl mb-12 text-white opacity-0 animate-slideIn"
            style={{ animationDelay: '0.6s' }}
          >
            7 + YEARS OF EXCELLENCE
          </p>

          {/* Services Text - Now as a paragraph with line breaks */}
          <div 
            className="space-y-4 mb-12 opacity-0 animate-slideIn"
            style={{ animationDelay: '0.8s' }}
          >
            <p className="text-lg md:text-xl text-white/90">
              Salary ITR • Mutual Fund ITR • Stock Market ITR
            </p>
            <p className="text-lg md:text-xl text-white/90">
              Freelancer ITR • Business ITR • Futures & Options ITR
            </p>
            <p className="text-lg md:text-xl text-white/90">
              Capital Gain ITR • House Property ITR • Pension ITR
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 opacity-0 animate-slideIn shadow-lg"
            style={{ animationDelay: '1s' }}
          >
            <Phone className="w-5 h-5 mr-2" />
            CALL NOW
          </Button>
        </div>
      </div>
    </div>
  )
}