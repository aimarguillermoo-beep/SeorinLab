export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="1.2" 
      className={className}
    >
      {/* Circles */}
      <circle cx="50" cy="50" r="47" />
      <circle cx="50" cy="50" r="43" />
      
      {/* Top Sparkles */}
      <path d="M 32 18 Q 32 22 36 22 Q 32 22 32 26 Q 32 22 28 22 Q 32 22 32 18 Z" />
      <path d="M 68 18 Q 68 22 72 22 Q 68 22 68 26 Q 68 22 64 22 Q 68 22 68 18 Z" />

      {/* Central Flower */}
      <path d="M50 40 C 45 34 46 26 50 20 C 54 26 55 34 50 40 Z" />
      <path d="M48 38 C 40 39 34 32 34 32 C 38 36 43 41 48 41 Z" />
      <path d="M52 38 C 60 39 66 32 66 32 C 62 36 57 41 52 41 Z" />
      <path d="M48 42 C 44 42 41 45 41 45 C 43 46 46 44 49 43 Z" />
      <path d="M52 42 C 56 42 59 45 59 45 C 57 46 54 44 51 43 Z" />

      {/* Central Ornament */}
      <path d="M50 45 L52 50 L50 56 L48 50 Z" />
      <circle cx="45" cy="52" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="55" cy="52" r="1.2" fill="currentColor" stroke="none" />
      <path d="M50 56 C 48 55 46 54 45 52" />
      <path d="M50 56 C 52 55 54 54 55 52" />

      {/* Leafy Branches */}
      <g>
        {/* Left Branch */}
        <g>
          <path d="M50 88 C 30 75 15 55 20 40" />
          <path d="M 42 79 C 28 80 26 68 26 68 C 35 68 42 75 42 79 Z" />
          <path d="M 40 76 C 45 65 52 65 52 65 C 50 72 43 78 40 76 Z" />
          <path d="M 32 65 C 18 64 18 52 18 52 C 26 52 32 60 32 65 Z" />
          <path d="M 31 61 C 40 50 46 52 46 52 C 40 58 33 62 31 61 Z" />
          <path d="M 24 49 C 12 45 14 36 14 36 C 21 38 25 45 24 49 Z" />
          <path d="M 24 45 C 32 34 38 38 38 38 C 32 44 26 46 24 45 Z" />
          <path d="M 20 40 C 15 28 22 26 22 26 C 26 34 22 38 20 40 Z" />
        </g>
        
        {/* Right Branch (Mirrored) */}
        <g transform="translate(100, 0) scale(-1, 1)">
          <path d="M50 88 C 30 75 15 55 20 40" />
          <path d="M 42 79 C 28 80 26 68 26 68 C 35 68 42 75 42 79 Z" />
          <path d="M 40 76 C 45 65 52 65 52 65 C 50 72 43 78 40 76 Z" />
          <path d="M 32 65 C 18 64 18 52 18 52 C 26 52 32 60 32 65 Z" />
          <path d="M 31 61 C 40 50 46 52 46 52 C 40 58 33 62 31 61 Z" />
          <path d="M 24 49 C 12 45 14 36 14 36 C 21 38 25 45 24 49 Z" />
          <path d="M 24 45 C 32 34 38 38 38 38 C 32 44 26 46 24 45 Z" />
          <path d="M 20 40 C 15 28 22 26 22 26 C 26 34 22 38 20 40 Z" />
        </g>
      </g>
    </svg>
  );
}
