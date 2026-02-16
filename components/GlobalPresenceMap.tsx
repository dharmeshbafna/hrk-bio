
import React, { useEffect, useState } from 'react';

interface Destination {
  name: string;
  x: number;
  y: number;
  delay: number;
}

const GlobalPresenceMap: React.FC = () => {
  const [startAnim, setStartAnim] = useState(false);
  
  const origin = { name: 'India', x: 685, y: 245 };
  
  const destinations: Destination[] = [
    { name: 'USA', x: 180, y: 180, delay: 1.5 },
    { name: 'UK', x: 475, y: 125, delay: 2.5 },
    { name: 'Ireland', x: 450, y: 125, delay: 3.5 },
    { name: 'Spain', x: 470, y: 180, delay: 4.5 },
    { name: 'Europe', x: 520, y: 145, delay: 5.5 },
    { name: 'Israel', x: 575, y: 205, delay: 6.5 },
    { name: 'Australia', x: 885, y: 400, delay: 7.5 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setStartAnim(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full pointer-events-none" style={{ backgroundImage: 'url(/map.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '500px' }}>
      <svg 
        viewBox="0 0 1000 500" 
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
      >
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <g className={`transition-opacity duration-1000 ${startAnim ? 'opacity-100' : 'opacity-0'}`}>
          <circle cx={origin.x} cy={origin.y} r="18" fill="#F57C00" fillOpacity="0.15">
            <animate attributeName="r" values="18;25;18" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx={origin.x} cy={origin.y} r="6" fill="#F57C00" stroke="#fff" strokeWidth="2" />
          <text x={origin.x} y={origin.y - 10} textAnchor="middle" fill="#F57C00" fontSize="10" fontWeight="bold">{origin.name}</text>
        </g>

        {startAnim && destinations.map((dest, i) => {
          const midX = (origin.x + dest.x) / 2;
          const midY = Math.min(origin.y, dest.y) - 60;
          const pathD = `M ${origin.x} ${origin.y} Q ${midX} ${midY} ${dest.x} ${dest.y}`;
          
          return (
            <g key={dest.name}>
              <path
                d={pathD}
                fill="none"
                stroke="#F57C00"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                style={{ 
                  animation: `drawPath 2.5s ease-out forwards`,
                  animationDelay: `${dest.delay}s`,
                  opacity: 0.5
                }}
              />
              <circle r="2.5" fill="#D32F2F">
                <animateMotion path={pathD} begin={`${dest.delay}s`} dur="3s" repeatCount="indefinite" />
              </circle>
              <g 
                className="opacity-0" 
                style={{ 
                  animation: `fadeInMarker 0.8s ease-out forwards`, 
                  animationDelay: `${dest.delay + 2}s` 
                }}
              >
                <circle cx={dest.x} cy={dest.y} r="4" fill="#D32F2F" stroke="#fff" strokeWidth="1" />
                <text x={dest.x} y={dest.y - 10} textAnchor="middle" fill="#D32F2F" fontSize="10" fontWeight="bold">{dest.name}</text>
              </g>
            </g>
          );
        })}
      </svg>
      <style>{`
        @keyframes drawPath { to { stroke-dashoffset: 0; } }
        @keyframes fadeInMarker { from { opacity: 0; transform: scale(0.5); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
};

export default GlobalPresenceMap;
