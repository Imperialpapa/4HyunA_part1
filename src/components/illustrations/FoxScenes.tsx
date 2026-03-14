const FoxNight = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#1A237E" rx="20" />
    {/* Stars */}
    {[
      [50, 30], [120, 60], [200, 25], [280, 50], [350, 35], [80, 100], [320, 80],
      [150, 45], [250, 90], [40, 70],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={1.5} fill="white" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
      </circle>
    ))}
    {/* Moon */}
    <circle cx="330" cy="60" r="30" fill="#FFF9C4" />
    <circle cx="340" cy="55" r="25" fill="#1A237E" />
    {/* Ground */}
    <ellipse cx="200" cy="290" rx="220" ry="45" fill="#1B5E20" />
    {/* Fox */}
    <g transform="translate(140, 150)">
      <ellipse cx="60" cy="80" rx="30" ry="35" fill="#FF8F00" />
      <circle cx="60" cy="40" r="28" fill="#FF8F00" />
      {/* Ears */}
      <polygon points="38,15 30,0 48,15" fill="#FF8F00" />
      <polygon points="36,14 33,4 45,14" fill="#FFB74D" />
      <polygon points="72,15 80,0 62,15" fill="#FF8F00" />
      <polygon points="74,14 77,4 65,14" fill="#FFB74D" />
      {/* White face */}
      <ellipse cx="60" cy="50" rx="16" ry="14" fill="white" />
      {/* Worried eyes */}
      <circle cx="50" cy="40" r="3.5" fill="#333" />
      <circle cx="70" cy="40" r="3.5" fill="#333" />
      <circle cx="51" cy="39" r="1.2" fill="white" />
      <circle cx="71" cy="39" r="1.2" fill="white" />
      <ellipse cx="60" cy="48" rx="3" ry="2" fill="#333" />
      {/* Worried expression */}
      <path d="M53 55 Q60 52 67 55" fill="none" stroke="#333" strokeWidth="1" />
      {/* Tail */}
      <path d="M30 85 Q5 70 10 50 Q15 40 25 50" fill="#FF8F00" />
      <path d="M10 50 Q15 43 22 48" fill="white" />
    </g>
  </svg>
);

const FallingStar = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#0D47A1" rx="20" />
    {[
      [60, 40], [150, 30], [250, 55], [340, 25], [90, 90],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={1.2} fill="white" opacity="0.6" />
    ))}
    <ellipse cx="200" cy="290" rx="220" ry="45" fill="#1B5E20" />
    {/* Falling star with trail */}
    <g>
      <line x1="300" y1="30" x2="220" y2="180" stroke="#FFD93D" strokeWidth="2" opacity="0.5" />
      <line x1="290" y1="25" x2="215" y2="170" stroke="#FFF9C4" strokeWidth="1" opacity="0.3" />
      {/* Star */}
      <g transform="translate(200, 180)">
        <polygon points="20,0 25,15 40,15 28,24 33,40 20,30 7,40 12,24 0,15 15,15"
          fill="#FFD93D" stroke="#FFF9C4" strokeWidth="1">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="0.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="0.8s" repeatCount="indefinite" />
        </polygon>
      </g>
      {/* Sparkle particles */}
      {[
        [240, 130], [260, 100], [250, 150], [270, 80],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="#FFD93D" opacity="0.5">
          <animate attributeName="opacity" values="0;0.8;0" dur={`${0.8 + i * 0.2}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </g>
  </svg>
);

const FoxApproaching = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#1565C0" rx="20" />
    <ellipse cx="200" cy="290" rx="220" ry="45" fill="#1B5E20" />
    {/* Star on ground glowing */}
    <g transform="translate(250, 210)">
      <circle cx="15" cy="15" r="30" fill="#FFD93D" opacity="0.15">
        <animate attributeName="r" values="30;40;30" dur="2s" repeatCount="indefinite" />
      </circle>
      <polygon points="15,0 19,10 30,10 21,17 24,28 15,22 6,28 9,17 0,10 11,10"
        fill="#FFD93D" stroke="#FFF9C4" strokeWidth="0.5">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" />
      </polygon>
    </g>
    {/* Fox approaching carefully */}
    <g transform="translate(100, 170)">
      <ellipse cx="40" cy="65" rx="25" ry="30" fill="#FF8F00" />
      <circle cx="40" cy="30" r="24" fill="#FF8F00" />
      <polygon points="22,10 16,-5 34,10" fill="#FF8F00" />
      <polygon points="24,10 19,-1 32,10" fill="#FFB74D" />
      <polygon points="58,10 64,-5 46,10" fill="#FF8F00" />
      <polygon points="56,10 61,-1 48,10" fill="#FFB74D" />
      <ellipse cx="40" cy="38" rx="14" ry="12" fill="white" />
      {/* Nervous eyes */}
      <circle cx="33" cy="28" r="3" fill="#333" />
      <circle cx="47" cy="28" r="3" fill="#333" />
      <ellipse cx="40" cy="36" rx="2.5" ry="1.8" fill="#333" />
      {/* One paw out */}
      <ellipse cx="65" cy="70" rx="8" ry="5" fill="#FF8F00">
        <animate attributeName="cx" values="65;68;65" dur="1s" repeatCount="indefinite" />
      </ellipse>
      <path d="M18 70 Q0 55 5 40 Q10 32 18 40" fill="#FF8F00" />
      <path d="M5 40 Q10 35 16 38" fill="white" />
    </g>
  </svg>
);

const TalkingStar = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#1976D2" rx="20" />
    <ellipse cx="200" cy="290" rx="220" ry="45" fill="#1B5E20" />
    {/* Star with face */}
    <g transform="translate(220, 170)">
      <circle cx="25" cy="25" r="40" fill="#FFD93D" opacity="0.1">
        <animate attributeName="r" values="40;50;40" dur="2s" repeatCount="indefinite" />
      </circle>
      <polygon points="25,0 31,18 50,18 35,28 40,48 25,36 10,48 15,28 0,18 19,18"
        fill="#FFD93D" stroke="#FFF9C4" strokeWidth="1" />
      {/* Cute star face */}
      <circle cx="18" cy="22" r="2" fill="#E65100" />
      <circle cx="32" cy="22" r="2" fill="#E65100" />
      <path d="M22 28 Q25 32 28 28" fill="none" stroke="#E65100" strokeWidth="1" />
    </g>
    {/* Speech bubble */}
    <g transform="translate(230, 110)">
      <rect x="0" y="0" width="100" height="40" rx="18" fill="white" opacity="0.9" />
      <text x="15" y="26" fontSize="11" fill="#333">도와줄래?</text>
      <polygon points="30,40 20,55 45,40" fill="white" opacity="0.9" />
    </g>
    {/* Fox listening */}
    <g transform="translate(80, 185)">
      <ellipse cx="35" cy="55" rx="22" ry="28" fill="#FF8F00" />
      <circle cx="35" cy="25" r="22" fill="#FF8F00" />
      <polygon points="18,8 13,-5 28,8" fill="#FF8F00" />
      <polygon points="52,8 57,-5 42,8" fill="#FF8F00" />
      <ellipse cx="35" cy="32" rx="12" ry="10" fill="white" />
      <circle cx="28" cy="24" r="2.5" fill="#333" />
      <circle cx="42" cy="24" r="2.5" fill="#333" />
      <ellipse cx="35" cy="30" rx="2" ry="1.5" fill="#333" />
    </g>
  </svg>
);

const FoxClimbing = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#283593" rx="20" />
    {[
      [40, 25], [120, 45], [300, 30], [360, 65],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={1.5} fill="white" opacity="0.7" />
    ))}
    {/* Hill */}
    <path d="M0 300 Q100 280 200 180 Q300 100 350 80 Q380 120 400 300 Z" fill="#2E7D32" />
    <path d="M0 300 Q100 285 200 190 Q300 110 350 90 Q380 130 400 300 Z" fill="#388E3C" />
    {/* Fox climbing with star on back */}
    <g transform="translate(230, 110) rotate(-20)">
      <ellipse cx="25" cy="45" rx="18" ry="22" fill="#FF8F00" />
      <circle cx="25" cy="18" r="16" fill="#FF8F00" />
      <polygon points="14,5 10,-6 22,5" fill="#FF8F00" />
      <polygon points="36,5 40,-6 28,5" fill="#FF8F00" />
      <ellipse cx="25" cy="24" rx="10" ry="8" fill="white" />
      {/* Determined eyes */}
      <circle cx="20" cy="16" r="2" fill="#333" />
      <circle cx="30" cy="16" r="2" fill="#333" />
      <path d="M16 14 L22 15" fill="none" stroke="#333" strokeWidth="1" />
      <path d="M34 14 L28 15" fill="none" stroke="#333" strokeWidth="1" />
      <ellipse cx="25" cy="22" rx="2" ry="1.2" fill="#333" />
      {/* Star on back */}
      <g transform="translate(10, 25)">
        <polygon points="10,0 12,7 20,7 14,11 16,18 10,14 4,18 6,11 0,7 8,7"
          fill="#FFD93D">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1s" repeatCount="indefinite" />
        </polygon>
      </g>
      {/* Legs walking */}
      <ellipse cx="12" cy="65" rx="6" ry="4" fill="#FF8F00" />
      <ellipse cx="38" cy="65" rx="6" ry="4" fill="#FF8F00" />
      <path d="M10 50 Q-5 40 -2 30 Q2 25 8 32" fill="#FF8F00" />
    </g>
  </svg>
);

const StarReturn = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#0D47A1" rx="20" />
    <ellipse cx="200" cy="290" rx="220" ry="45" fill="#1B5E20" />
    {/* Star going up with trail */}
    <g>
      <line x1="200" y1="140" x2="200" y2="30" stroke="#FFD93D" strokeWidth="2" opacity="0.4" />
      <polygon points="200,20 206,38 225,38 210,48 215,65 200,55 185,65 190,48 175,38 194,38"
        fill="#FFD93D">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -20" dur="3s" fill="freeze" />
        <animate attributeName="opacity" values="1;0.5" dur="3s" fill="freeze" />
      </polygon>
      {/* Sparkle trail */}
      {[60, 90, 120].map((y, i) => (
        <circle key={i} cx={200 + (i % 2 === 0 ? 5 : -5)} cy={y} r="2" fill="#FFF9C4" opacity="0.5">
          <animate attributeName="opacity" values="0;0.8;0" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </g>
    {/* Fox waving */}
    <g transform="translate(150, 180)">
      <ellipse cx="30" cy="55" rx="22" ry="28" fill="#FF8F00" />
      <circle cx="30" cy="25" r="20" fill="#FF8F00" />
      <polygon points="16,8 11,-4 26,8" fill="#FF8F00" />
      <polygon points="44,8 49,-4 34,8" fill="#FF8F00" />
      <ellipse cx="30" cy="32" rx="12" ry="10" fill="white" />
      <circle cx="24" cy="24" r="2.5" fill="#333" />
      <circle cx="36" cy="24" r="2.5" fill="#333" />
      <path d="M25 34 Q30 38 35 34" fill="none" stroke="#333" strokeWidth="1.2" />
      {/* Waving arm */}
      <path d="M50 35 Q65 20 60 10" fill="none" stroke="#FF8F00" strokeWidth="8" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 50 35;-15 50 35;0 50 35" dur="0.6s" repeatCount="indefinite" />
      </path>
    </g>
    {/* Speech */}
    <g transform="translate(200, 130)">
      <rect x="0" y="0" width="110" height="35" rx="15" fill="white" opacity="0.85" />
      <text x="12" y="23" fontSize="10" fill="#333">잘 가, 반짝아!</text>
    </g>
  </svg>
);

const FoxHappyNight = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#1A237E" rx="20" />
    {/* Many stars */}
    {[
      [30, 30], [80, 60], [130, 25], [180, 55], [230, 35], [280, 65], [330, 20], [370, 50],
      [60, 90], [150, 80], [250, 95], [340, 85],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={i === 5 ? 3 : 1.5} fill={i === 5 ? '#FFD93D' : 'white'} opacity="0.8">
        <animate attributeName="opacity" values="0.4;1;0.4" dur={`${1 + i * 0.2}s`} repeatCount="indefinite" />
      </circle>
    ))}
    {/* Winking star (the friend) */}
    <g transform="translate(270, 55)">
      <polygon points="10,0 12.5,7 20,7 14,12 16,20 10,15 4,20 6,12 0,7 7.5,7"
        fill="#FFD93D">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" />
      </polygon>
      {/* Winking face */}
      <circle cx="7" cy="9" r="1" fill="#E65100" />
      <path d="M12 9 L14 9" fill="none" stroke="#E65100" strokeWidth="0.8" />
    </g>
    {/* Moon */}
    <circle cx="60" cy="50" r="28" fill="#FFF9C4" />
    <circle cx="70" cy="45" r="23" fill="#1A237E" />
    <ellipse cx="200" cy="290" rx="220" ry="45" fill="#1B5E20" />
    {/* Happy fox */}
    <g transform="translate(150, 170)">
      <ellipse cx="50" cy="65" rx="28" ry="35" fill="#FF8F00" />
      <circle cx="50" cy="30" r="26" fill="#FF8F00" />
      <polygon points="30,10 24,-6 42,10" fill="#FF8F00" />
      <polygon points="70,10 76,-6 58,10" fill="#FF8F00" />
      <ellipse cx="50" cy="38" rx="15" ry="12" fill="white" />
      {/* Happy closed eyes */}
      <path d="M38 28 Q42 24 46 28" fill="none" stroke="#333" strokeWidth="2" />
      <path d="M54 28 Q58 24 62 28" fill="none" stroke="#333" strokeWidth="2" />
      <path d="M44 40 Q50 46 56 40" fill="none" stroke="#333" strokeWidth="1.5" />
      {/* Tail */}
      <path d="M22 70 Q0 55 5 35 Q10 25 20 35" fill="#FF8F00" />
      <path d="M5 35 Q10 28 18 33" fill="white" />
    </g>
  </svg>
);

export const FoxScenes: Record<string, React.FC> = {
  'fox-night': FoxNight,
  'falling-star': FallingStar,
  'fox-approaching': FoxApproaching,
  'talking-star': TalkingStar,
  'fox-climbing': FoxClimbing,
  'star-return': StarReturn,
  'fox-happy-night': FoxHappyNight,
};
