const DuckWindow = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#E0F7FA" rx="20" />
    {/* Room */}
    <rect x="30" y="30" width="340" height="240" rx="8" fill="#FFF3E0" />
    {/* Window */}
    <rect x="120" y="50" width="160" height="120" rx="4" fill="#B0BEC5" stroke="#795548" strokeWidth="6" />
    <line x1="200" y1="50" x2="200" y2="170" stroke="#795548" strokeWidth="4" />
    <line x1="120" y1="110" x2="280" y2="110" stroke="#795548" strokeWidth="4" />
    {/* Rain outside */}
    {[140, 160, 180, 220, 240, 260].map((x, i) => (
      <line key={i} x1={x} y1={60 + (i % 3) * 10} x2={x - 3} y2={75 + (i % 3) * 10}
        stroke="#64B5F6" strokeWidth="1.5" opacity="0.6">
        <animate attributeName="y1" values={`${60 + (i % 3) * 10};${90 + (i % 3) * 10};${60 + (i % 3) * 10}`}
          dur={`${0.8 + i * 0.1}s`} repeatCount="indefinite" />
        <animate attributeName="y2" values={`${75 + (i % 3) * 10};${105 + (i % 3) * 10};${75 + (i % 3) * 10}`}
          dur={`${0.8 + i * 0.1}s`} repeatCount="indefinite" />
      </line>
    ))}
    {/* Duck looking out window */}
    <g transform="translate(170, 160)">
      <ellipse cx="30" cy="50" rx="22" ry="28" fill="#FFD93D" />
      <circle cx="30" cy="22" r="18" fill="#FFD93D" />
      {/* Sad eyes */}
      <circle cx="24" cy="20" r="3" fill="#333" />
      <circle cx="36" cy="20" r="3" fill="#333" />
      <path d="M25 30 Q30 27 35 30" fill="none" stroke="#333" strokeWidth="1.2" />
      {/* Beak */}
      <ellipse cx="30" cy="27" rx="8" ry="4" fill="#FF8F00" />
      {/* Wings */}
      <ellipse cx="8" cy="48" rx="6" ry="14" fill="#FFC107" />
      <ellipse cx="52" cy="48" rx="6" ry="14" fill="#FFC107" />
    </g>
  </svg>
);

const MamaDuck = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#B2EBF2" rx="20" />
    <rect x="30" y="30" width="340" height="240" rx="8" fill="#FFF3E0" />
    {/* Mama duck */}
    <g transform="translate(80, 110)">
      <ellipse cx="45" cy="70" rx="35" ry="42" fill="white" />
      <circle cx="45" cy="30" r="28" fill="white" />
      <circle cx="35" cy="26" r="3.5" fill="#333" />
      <circle cx="55" cy="26" r="3.5" fill="#333" />
      <ellipse cx="45" cy="35" rx="10" ry="5" fill="#FF8F00" />
      <path d="M38 40 Q45 46 52 40" fill="none" stroke="#333" strokeWidth="1.2" />
      {/* Wing pointing outside */}
      <path d="M78 60 Q100 50 120 55" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 78 60;-5 78 60;0 78 60" dur="1.5s" repeatCount="indefinite" />
      </path>
    </g>
    {/* Baby duck */}
    <g transform="translate(230, 170)">
      <ellipse cx="25" cy="40" rx="18" ry="24" fill="#FFD93D" />
      <circle cx="25" cy="16" r="15" fill="#FFD93D" />
      <circle cx="19" cy="14" r="2.5" fill="#333" />
      <circle cx="31" cy="14" r="2.5" fill="#333" />
      <ellipse cx="25" cy="20" rx="6" ry="3" fill="#FF8F00" />
      <text x="15" y="3" fontSize="10">?</text>
    </g>
    {/* Speech */}
    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="160" height="35" rx="15" fill="white" stroke="#E0E0E0" />
      <text x="10" y="23" fontSize="11" fill="#333">비를 만나보렴 🌧</text>
    </g>
  </svg>
);

const DuckRainDrops = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#80DEEA" rx="20" />
    {/* Clouds */}
    <ellipse cx="100" cy="40" rx="50" ry="22" fill="#B0BEC5" />
    <ellipse cx="130" cy="35" rx="35" ry="18" fill="#B0BEC5" />
    <ellipse cx="280" cy="50" rx="45" ry="20" fill="#B0BEC5" />
    <ellipse cx="200" cy="290" rx="220" ry="45" fill="#66BB6A" />
    {/* Rain */}
    {[60, 100, 140, 180, 220, 260, 300, 340].map((x, i) => (
      <line key={i} x1={x} y1={80 + (i % 4) * 15} x2={x - 4} y2={95 + (i % 4) * 15}
        stroke="#42A5F5" strokeWidth="2" opacity="0.5">
        <animate attributeName="y1" values={`${80 + (i % 4) * 15};${200 + (i % 4) * 15};${80 + (i % 4) * 15}`}
          dur={`${1 + i * 0.15}s`} repeatCount="indefinite" />
        <animate attributeName="y2" values={`${95 + (i % 4) * 15};${215 + (i % 4) * 15};${95 + (i % 4) * 15}`}
          dur={`${1 + i * 0.15}s`} repeatCount="indefinite" />
      </line>
    ))}
    {/* Duck in rain, happy */}
    <g transform="translate(155, 155)">
      <ellipse cx="45" cy="65" rx="28" ry="35" fill="#FFD93D" />
      <circle cx="45" cy="28" r="24" fill="#FFD93D" />
      <circle cx="36" cy="24" r="3.5" fill="#333" />
      <circle cx="54" cy="24" r="3.5" fill="#333" />
      <ellipse cx="45" cy="32" rx="9" ry="4.5" fill="#FF8F00" />
      <path d="M39 38 Q45 44 51 38" fill="none" stroke="#333" strokeWidth="1.2" />
      {/* Wings out */}
      <ellipse cx="14" cy="60" rx="8" ry="18" fill="#FFC107" transform="rotate(-10 14 60)" />
      <ellipse cx="76" cy="60" rx="8" ry="18" fill="#FFC107" transform="rotate(10 76 60)" />
      {/* Rain drops bouncing on head */}
      <g>
        <circle cx="38" cy="5" r="3" fill="#42A5F5" opacity="0.7">
          <animate attributeName="r" values="3;6;3" dur="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0;0.7" dur="0.8s" repeatCount="indefinite" />
        </circle>
      </g>
      <text x="55" y="8" fontSize="10" fill="#333">톡톡!</text>
    </g>
  </svg>
);

const PuddleJump = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#4DD0E1" rx="20" />
    <ellipse cx="100" cy="45" rx="45" ry="20" fill="#B0BEC5" />
    <ellipse cx="300" cy="35" rx="40" ry="18" fill="#B0BEC5" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#66BB6A" />
    {/* Puddle */}
    <ellipse cx="200" cy="260" rx="80" ry="15" fill="#42A5F5" opacity="0.5" />
    {/* Splash */}
    {[-30, -15, 0, 15, 30].map((x, i) => (
      <ellipse key={i} cx={200 + x} cy={250} rx="3" ry="8" fill="#64B5F6" opacity="0.6">
        <animate attributeName="cy" values="250;235;250" dur={`${0.6 + i * 0.1}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur={`${0.6 + i * 0.1}s`} repeatCount="indefinite" />
      </ellipse>
    ))}
    {/* Duck jumping in puddle */}
    <g transform="translate(160, 155)">
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -15;0 0" dur="0.8s" repeatCount="indefinite" />
        <ellipse cx="35" cy="55" rx="24" ry="30" fill="#FFD93D" />
        <circle cx="35" cy="22" r="20" fill="#FFD93D" />
        <path d="M26 18 Q30 14 34 18" fill="none" stroke="#333" strokeWidth="1.5" />
        <path d="M38 18 Q42 14 46 18" fill="none" stroke="#333" strokeWidth="1.5" />
        <ellipse cx="35" cy="26" rx="7" ry="3.5" fill="#FF8F00" />
        <path d="M30 32 Q35 37 40 32" fill="none" stroke="#333" strokeWidth="1.2" />
        <ellipse cx="12" cy="50" rx="7" ry="15" fill="#FFC107" transform="rotate(-20 12 50)" />
        <ellipse cx="58" cy="50" rx="7" ry="15" fill="#FFC107" transform="rotate(20 58 50)" />
      </g>
    </g>
    {/* Frog */}
    <g transform="translate(280, 225)">
      <ellipse cx="15" cy="18" rx="14" ry="12" fill="#4CAF50" />
      <circle cx="8" cy="8" r="5" fill="#4CAF50" />
      <circle cx="22" cy="8" r="5" fill="#4CAF50" />
      <circle cx="8" cy="7" r="3" fill="white" />
      <circle cx="22" cy="7" r="3" fill="white" />
      <circle cx="8" cy="7" r="1.5" fill="#333" />
      <circle cx="22" cy="7" r="1.5" fill="#333" />
      <path d="M10 20 Q15 24 20 20" fill="none" stroke="#333" strokeWidth="1" />
    </g>
    <text x="170" y="140" fontSize="13" fill="#333">첨벙!</text>
  </svg>
);

const Rainbow = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#E8F5E9" rx="20" />
    <circle cx="320" cy="60" r="35" fill="#FFD93D" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#66BB6A" />
    {/* Big rainbow */}
    {['#FF6B6B', '#FF8A65', '#FFD93D', '#66BB6A', '#42A5F5', '#7E57C2', '#CE93D8'].map((c, i) => (
      <path key={i} d={`M30 280 A${200 - i * 14} ${150 - i * 12} 0 0 1 370 280`}
        fill="none" stroke={c} strokeWidth="8" opacity="0.7" />
    ))}
    {/* Duck amazed */}
    <g transform="translate(160, 185)">
      <ellipse cx="40" cy="50" rx="25" ry="32" fill="#FFD93D" />
      <circle cx="40" cy="20" r="20" fill="#FFD93D" />
      {/* Wide eyes */}
      <circle cx="32" cy="17" r="4" fill="white" stroke="#333" strokeWidth="1.5" />
      <circle cx="48" cy="17" r="4" fill="white" stroke="#333" strokeWidth="1.5" />
      <circle cx="32" cy="17" r="2" fill="#333" />
      <circle cx="48" cy="17" r="2" fill="#333" />
      {/* O mouth */}
      <ellipse cx="40" cy="28" rx="5" ry="6" fill="#FF8F00" />
      <ellipse cx="10" cy="45" rx="7" ry="16" fill="#FFC107" />
      <ellipse cx="70" cy="45" rx="7" ry="16" fill="#FFC107" />
    </g>
    <text x="155" y="170" fontSize="14" fill="#333">우와~!</text>
    <text x="180" y="155" fontSize="12">✨</text>
  </svg>
);

const HappyDuck = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#E0F7FA" rx="20" />
    <ellipse cx="80" cy="40" rx="40" ry="18" fill="#B0BEC5" opacity="0.5" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#66BB6A" />
    {/* Puddle */}
    <ellipse cx="200" cy="260" rx="70" ry="12" fill="#42A5F5" opacity="0.4" />
    {/* Happy duck dancing */}
    <g transform="translate(150, 145)">
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-5 50 60;5 50 60;-5 50 60" dur="0.8s" repeatCount="indefinite" />
        <ellipse cx="50" cy="60" rx="28" ry="35" fill="#FFD93D" />
        <circle cx="50" cy="25" r="22" fill="#FFD93D" />
        {/* Happy eyes */}
        <path d="M38 22 Q43 18 48 22" fill="none" stroke="#333" strokeWidth="2" />
        <path d="M54 22 Q59 18 64 22" fill="none" stroke="#333" strokeWidth="2" />
        <ellipse cx="50" cy="30" rx="8" ry="4" fill="#FF8F00" />
        <path d="M44 36 Q50 42 56 36" fill="none" stroke="#333" strokeWidth="1.2" />
        {/* Wings up! */}
        <ellipse cx="18" cy="45" rx="8" ry="18" fill="#FFC107" transform="rotate(-30 18 45)" />
        <ellipse cx="82" cy="45" rx="8" ry="18" fill="#FFC107" transform="rotate(30 82 45)" />
        {/* Feet */}
        <ellipse cx="38" cy="95" rx="10" ry="4" fill="#FF8F00" />
        <ellipse cx="62" cy="95" rx="10" ry="4" fill="#FF8F00" />
      </g>
    </g>
    {/* Light rain */}
    {[80, 150, 250, 320].map((x, i) => (
      <line key={i} x1={x} y1={70 + i * 8} x2={x - 2} y2={80 + i * 8}
        stroke="#64B5F6" strokeWidth="1.5" opacity="0.3">
        <animate attributeName="y1" values={`${70 + i * 8};${170 + i * 8};${70 + i * 8}`}
          dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" />
      </line>
    ))}
    {/* Musical notes */}
    <text x="120" y="120" fontSize="16" opacity="0.5">♪</text>
    <text x="230" y="130" fontSize="14" opacity="0.5">♫</text>
    <text x="180" y="110" fontSize="12" opacity="0.5">♪</text>
  </svg>
);

export const DuckScenes: Record<string, React.FC> = {
  'duck-window': DuckWindow,
  'mama-duck': MamaDuck,
  'duck-rain-drops': DuckRainDrops,
  'puddle-jump': PuddleJump,
  'rainbow': Rainbow,
  'happy-duck': HappyDuck,
};
