const BearHoney = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#FFF8E1" rx="20" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#81C784" />
    {/* Tree stump */}
    <rect x="260" y="200" width="50" height="40" rx="5" fill="#795548" />
    <ellipse cx="285" cy="200" rx="30" ry="8" fill="#8D6E63" />
    {/* Honey pot on stump */}
    <g transform="translate(265, 155)">
      <ellipse cx="20" cy="40" rx="22" ry="10" fill="#F9A825" />
      <rect x="0" y="10" width="40" height="30" rx="5" fill="#FFB300" />
      <ellipse cx="20" cy="10" rx="20" ry="8" fill="#FFC107" />
      <text x="12" y="30" fontSize="12" fill="#E65100">꿀</text>
      {/* Honey drip */}
      <ellipse cx="35" cy="25" rx="3" ry="6" fill="#F9A825" opacity="0.8">
        <animate attributeName="cy" values="25;35;25" dur="2s" repeatCount="indefinite" />
      </ellipse>
    </g>
    {/* Bear */}
    <g transform="translate(100, 110)">
      <ellipse cx="50" cy="100" rx="45" ry="50" fill="#8D6E63" />
      <circle cx="50" cy="45" r="38" fill="#8D6E63" />
      {/* Ears */}
      <circle cx="18" cy="15" r="12" fill="#8D6E63" />
      <circle cx="18" cy="15" r="7" fill="#A1887F" />
      <circle cx="82" cy="15" r="12" fill="#8D6E63" />
      <circle cx="82" cy="15" r="7" fill="#A1887F" />
      {/* Face */}
      <ellipse cx="50" cy="55" rx="18" ry="14" fill="#A1887F" />
      <circle cx="35" cy="42" r="4" fill="#333" />
      <circle cx="65" cy="42" r="4" fill="#333" />
      <circle cx="36" cy="40" r="1.5" fill="white" />
      <circle cx="66" cy="40" r="1.5" fill="white" />
      <ellipse cx="50" cy="52" rx="5" ry="3.5" fill="#333" />
      <path d="M44 58 Q50 64 56 58" fill="none" stroke="#333" strokeWidth="1.5" />
      {/* Arms reaching */}
      <path d="M90 80 Q120 70 130 60" fill="none" stroke="#8D6E63" strokeWidth="16" strokeLinecap="round" />
    </g>
    {/* Sparkle eyes */}
    <text x="160" y="125" fontSize="20">✨</text>
  </svg>
);

const GreedyBear = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#FFF3E0" rx="20" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#81C784" />
    {/* Bear hugging honey pot */}
    <g transform="translate(130, 100)">
      <ellipse cx="70" cy="120" rx="50" ry="55" fill="#8D6E63" />
      <circle cx="70" cy="60" r="40" fill="#8D6E63" />
      <circle cx="35" cy="28" r="13" fill="#8D6E63" />
      <circle cx="35" cy="28" r="7" fill="#A1887F" />
      <circle cx="105" cy="28" r="13" fill="#8D6E63" />
      <circle cx="105" cy="28" r="7" fill="#A1887F" />
      <ellipse cx="70" cy="70" rx="20" ry="15" fill="#A1887F" />
      {/* Sneaky eyes */}
      <circle cx="55" cy="55" r="4" fill="#333" />
      <circle cx="85" cy="55" r="4" fill="#333" />
      <path d="M50 50 L60 52" fill="none" stroke="#333" strokeWidth="1.5" />
      <path d="M90 50 L80 52" fill="none" stroke="#333" strokeWidth="1.5" />
      <ellipse cx="70" cy="67" rx="5" ry="3.5" fill="#333" />
      <path d="M64 74 Q70 78 76 74" fill="none" stroke="#333" strokeWidth="1.2" />
      {/* Arms hugging pot */}
      <path d="M30 90 Q20 100 25 120 Q30 130 50 130" fill="none" stroke="#8D6E63" strokeWidth="14" strokeLinecap="round" />
      <path d="M110 90 Q120 100 115 120 Q110 130 90 130" fill="none" stroke="#8D6E63" strokeWidth="14" strokeLinecap="round" />
      {/* Honey pot */}
      <g transform="translate(45, 95)">
        <rect x="0" y="8" width="50" height="35" rx="6" fill="#FFB300" />
        <ellipse cx="25" cy="8" rx="25" ry="10" fill="#FFC107" />
        <text x="14" y="32" fontSize="14" fill="#E65100">꿀</text>
      </g>
    </g>
  </svg>
);

const SquirrelAsking = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#E8F5E9" rx="20" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#66BB6A" />
    {/* Bear with pot */}
    <g transform="translate(200, 130)">
      <ellipse cx="50" cy="90" rx="40" ry="45" fill="#8D6E63" />
      <circle cx="50" cy="40" r="32" fill="#8D6E63" />
      <circle cx="25" cy="15" r="10" fill="#8D6E63" />
      <circle cx="75" cy="15" r="10" fill="#8D6E63" />
      <circle cx="40" cy="38" r="3.5" fill="#333" />
      <circle cx="60" cy="38" r="3.5" fill="#333" />
      {/* Angry eyebrows */}
      <path d="M34 32 L44 35" fill="none" stroke="#333" strokeWidth="2" />
      <path d="M66 32 L56 35" fill="none" stroke="#333" strokeWidth="2" />
      <ellipse cx="50" cy="48" rx="4" ry="3" fill="#333" />
    </g>
    {/* Squirrel */}
    <g transform="translate(60, 170)">
      <ellipse cx="30" cy="50" rx="20" ry="25" fill="#D4A373" />
      <circle cx="30" cy="22" r="16" fill="#D4A373" />
      {/* Fluffy tail */}
      <path d="M50 50 Q80 30 70 10 Q60 -5 50 10 Q45 25 50 50" fill="#C68B59" />
      {/* Ears */}
      <ellipse cx="20" cy="5" rx="5" ry="8" fill="#D4A373" />
      <ellipse cx="40" cy="5" rx="5" ry="8" fill="#D4A373" />
      <circle cx="24" cy="20" r="2.5" fill="#333" />
      <circle cx="36" cy="20" r="2.5" fill="#333" />
      <ellipse cx="30" cy="26" rx="2" ry="1.5" fill="#333" />
      {/* Paws together - begging */}
      <ellipse cx="30" cy="48" rx="6" ry="4" fill="#C68B59" />
    </g>
    {/* Speech bubble */}
    <g transform="translate(30, 120)">
      <rect x="0" y="0" width="80" height="35" rx="15" fill="white" stroke="#E0E0E0" strokeWidth="1" />
      <text x="12" y="23" fontSize="11" fill="#333">나도...</text>
      <polygon points="60,35 50,48 70,35" fill="white" />
    </g>
  </svg>
);

const LonelyBear = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#E3F2FD" rx="20" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#A5D6A7" />
    {/* Bear sitting alone */}
    <g transform="translate(140, 100)">
      <ellipse cx="60" cy="120" rx="50" ry="50" fill="#8D6E63" />
      <circle cx="60" cy="60" r="42" fill="#8D6E63" />
      <circle cx="25" cy="28" r="12" fill="#8D6E63" />
      <circle cx="25" cy="28" r="7" fill="#A1887F" />
      <circle cx="95" cy="28" r="12" fill="#8D6E63" />
      <circle cx="95" cy="28" r="7" fill="#A1887F" />
      <ellipse cx="60" cy="72" rx="20" ry="14" fill="#A1887F" />
      {/* Sad eyes */}
      <circle cx="45" cy="55" r="4" fill="#333" />
      <circle cx="75" cy="55" r="4" fill="#333" />
      <path d="M52 80 Q60 75 68 80" fill="none" stroke="#333" strokeWidth="2" />
      {/* Honey pot beside */}
      <g transform="translate(80, 100)">
        <rect x="0" y="5" width="35" height="25" rx="4" fill="#FFB300" />
        <ellipse cx="17" cy="5" rx="18" ry="7" fill="#FFC107" />
      </g>
      {/* Blue aura of loneliness */}
      <circle cx="60" cy="90" r="80" fill="#42A5F5" opacity="0.05">
        <animate attributeName="r" values="80;90;80" dur="3s" repeatCount="indefinite" />
      </circle>
    </g>
    {/* Clouds */}
    <ellipse cx="80" cy="50" rx="40" ry="18" fill="#B0BEC5" opacity="0.5" />
    <ellipse cx="300" cy="40" rx="45" ry="20" fill="#B0BEC5" opacity="0.5" />
  </svg>
);

const BearSharing = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#FCE4EC" rx="20" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#81C784" />
    {/* Bear offering honey */}
    <g transform="translate(150, 120)">
      <ellipse cx="50" cy="100" rx="40" ry="45" fill="#8D6E63" />
      <circle cx="50" cy="45" r="35" fill="#8D6E63" />
      <circle cx="20" cy="18" r="11" fill="#8D6E63" />
      <circle cx="80" cy="18" r="11" fill="#8D6E63" />
      <ellipse cx="50" cy="55" rx="18" ry="12" fill="#A1887F" />
      <circle cx="38" cy="42" r="3.5" fill="#333" />
      <circle cx="62" cy="42" r="3.5" fill="#333" />
      <ellipse cx="50" cy="52" rx="4" ry="3" fill="#333" />
      <path d="M44 60 Q50 66 56 60" fill="none" stroke="#333" strokeWidth="1.5" />
      {/* Arms out with honey */}
      <path d="M90 80 Q110 75 120 80" fill="none" stroke="#8D6E63" strokeWidth="12" strokeLinecap="round" />
      <g transform="translate(105, 70)">
        <rect x="0" y="3" width="25" height="18" rx="3" fill="#FFB300" />
        <ellipse cx="12" cy="3" rx="13" ry="5" fill="#FFC107" />
      </g>
    </g>
    {/* Squirrel happy */}
    <g transform="translate(310, 190)">
      <ellipse cx="20" cy="40" rx="16" ry="22" fill="#D4A373" />
      <circle cx="20" cy="18" r="14" fill="#D4A373" />
      <path d="M36 40 Q60 25 55 5 Q48 -8 38 8 Q34 20 36 40" fill="#C68B59" />
      <circle cx="14" cy="16" r="2.5" fill="#333" />
      <circle cx="26" cy="16" r="2.5" fill="#333" />
      <path d="M16 24 Q20 28 24 24" fill="none" stroke="#333" strokeWidth="1" />
    </g>
    {/* Hearts */}
    <text x="260" y="170" fontSize="20">❤️</text>
    <text x="280" y="150" fontSize="14">💕</text>
  </svg>
);

const HappyEating = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#FFF8E1" rx="20" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#81C784" />
    {/* Bear and squirrel eating together */}
    <g transform="translate(100, 120)">
      {/* Bear */}
      <ellipse cx="60" cy="100" rx="40" ry="45" fill="#8D6E63" />
      <circle cx="60" cy="50" r="35" fill="#8D6E63" />
      <circle cx="30" cy="22" r="10" fill="#8D6E63" />
      <circle cx="90" cy="22" r="10" fill="#8D6E63" />
      <ellipse cx="60" cy="60" rx="16" ry="12" fill="#A1887F" />
      {/* Happy eyes - closed */}
      <path d="M42 46 Q48 42 54 46" fill="none" stroke="#333" strokeWidth="2" />
      <path d="M66 46 Q72 42 78 46" fill="none" stroke="#333" strokeWidth="2" />
      <path d="M52 64 Q60 72 68 64" fill="none" stroke="#333" strokeWidth="2" />
      {/* Honey on mouth */}
      <ellipse cx="70" cy="62" rx="4" ry="3" fill="#FFB300" />
    </g>
    <g transform="translate(250, 170)">
      {/* Squirrel */}
      <ellipse cx="25" cy="45" rx="18" ry="24" fill="#D4A373" />
      <circle cx="25" cy="20" r="15" fill="#D4A373" />
      <path d="M43 45 Q65 30 60 8 Q55 -5 45 8 Q42 20 43 45" fill="#C68B59" />
      {/* Happy eyes */}
      <path d="M18 18 Q22 15 26 18" fill="none" stroke="#333" strokeWidth="1.5" />
      <path d="M28 18 Q32 15 36 18" fill="none" stroke="#333" strokeWidth="1.5" />
      <path d="M22 26 Q25 30 28 26" fill="none" stroke="#333" strokeWidth="1.2" />
    </g>
    {/* Honey pot between them */}
    <g transform="translate(195, 220)">
      <rect x="0" y="5" width="40" height="28" rx="5" fill="#FFB300" />
      <ellipse cx="20" cy="5" rx="22" ry="8" fill="#FFC107" />
      <text x="11" y="25" fontSize="12" fill="#E65100">꿀</text>
    </g>
    {/* Musical notes / happiness */}
    <text x="130" y="100" fontSize="16" opacity="0.6">♪</text>
    <text x="290" y="150" fontSize="14" opacity="0.6">♫</text>
    {/* Stars */}
    <text x="180" y="80" fontSize="16">⭐</text>
    <text x="240" y="100" fontSize="12">✨</text>
  </svg>
);

export const BearScenes: Record<string, React.FC> = {
  'bear-honey': BearHoney,
  'greedy-bear': GreedyBear,
  'squirrel-asking': SquirrelAsking,
  'lonely-bear': LonelyBear,
  'bear-sharing': BearSharing,
  'happy-eating': HappyEating,
};
