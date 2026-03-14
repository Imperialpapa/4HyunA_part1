const OwlSchool = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#311B92" rx="20" />
    {/* Stars */}
    {[[30,20],[100,40],[200,15],[300,35],[370,25]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r={1.5} fill="white" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur={`${1.5+i*0.2}s`} repeatCount="indefinite"/>
      </circle>
    ))}
    <circle cx="340" cy="50" r="25" fill="#FFF9C4" />
    <circle cx="350" cy="45" r="20" fill="#311B92" />
    <ellipse cx="200" cy="290" rx="220" ry="40" fill="#1B5E20" />
    {/* Tree branch - classroom */}
    <rect x="50" y="200" width="300" height="12" rx="5" fill="#795548" />
    <rect x="170" y="130" width="15" height="75" fill="#795548" />
    {/* Owl teacher */}
    <g transform="translate(160, 80)">
      <ellipse cx="25" cy="35" rx="22" ry="28" fill="#8D6E63" />
      <ellipse cx="25" cy="38" rx="14" ry="18" fill="#D7CCC8" />
      {/* Face */}
      <circle cx="15" cy="25" r="10" fill="#D7CCC8" />
      <circle cx="35" cy="25" r="10" fill="#D7CCC8" />
      <circle cx="15" cy="25" r="6" fill="#FFD93D" stroke="#333" strokeWidth="1.5" />
      <circle cx="35" cy="25" r="6" fill="#FFD93D" stroke="#333" strokeWidth="1.5" />
      <circle cx="15" cy="25" r="3" fill="#333" />
      <circle cx="35" cy="25" r="3" fill="#333" />
      {/* Beak */}
      <polygon points="25,30 22,35 28,35" fill="#FF8F00" />
      {/* Ears */}
      <polygon points="8,8 5,0 15,10" fill="#8D6E63" />
      <polygon points="42,8 45,0 35,10" fill="#8D6E63" />
      {/* Wings */}
      <ellipse cx="0" cy="40" rx="8" ry="15" fill="#795548" />
      <ellipse cx="50" cy="40" rx="8" ry="15" fill="#795548" />
      {/* Teacher hat */}
      <rect x="8" y="-2" width="34" height="4" rx="1" fill="#333" />
      <rect x="14" y="-12" width="22" height="12" rx="2" fill="#333" />
    </g>
    {/* Blackboard */}
    <rect x="220" y="145" width="80" height="50" rx="4" fill="#2E7D32" stroke="#5D4037" strokeWidth="3" />
    <text x="232" y="177" fontSize="14" fill="white">ABC</text>
  </svg>
);

const SadFirefly = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#4527A0" rx="20" />
    <ellipse cx="200" cy="290" rx="220" ry="40" fill="#1B5E20" />
    {/* Firefly */}
    <g transform="translate(160, 120)">
      <ellipse cx="40" cy="50" rx="20" ry="25" fill="#333" />
      <circle cx="40" cy="25" r="18" fill="#333" />
      {/* Dim glow */}
      <circle cx="40" cy="50" r="30" fill="#FFEB3B" opacity="0.05" />
      {/* Eyes */}
      <circle cx="33" cy="22" r="4" fill="#FFD93D" />
      <circle cx="47" cy="22" r="4" fill="#FFD93D" />
      <circle cx="33" cy="22" r="2" fill="#333" />
      <circle cx="47" cy="22" r="2" fill="#333" />
      {/* Sad mouth */}
      <path d="M34 32 Q40 28 46 32" fill="none" stroke="#FFD93D" strokeWidth="1.2" />
      {/* Wings */}
      <ellipse cx="15" cy="35" rx="14" ry="8" fill="#90A4AE" opacity="0.3" transform="rotate(-20 15 35)" />
      <ellipse cx="65" cy="35" rx="14" ry="8" fill="#90A4AE" opacity="0.3" transform="rotate(20 65 35)" />
      {/* Antennae */}
      <line x1="32" y1="10" x2="25" y2="-5" stroke="#555" strokeWidth="1.5" />
      <circle cx="25" cy="-5" r="2" fill="#FFD93D" opacity="0.4" />
      <line x1="48" y1="10" x2="55" y2="-5" stroke="#555" strokeWidth="1.5" />
      <circle cx="55" cy="-5" r="2" fill="#FFD93D" opacity="0.4" />
    </g>
    {/* Speech bubble */}
    <g transform="translate(220, 100)">
      <rect x="0" y="0" width="120" height="35" rx="15" fill="white" opacity="0.85" />
      <text x="12" y="23" fontSize="10" fill="#333">노래를 못해요...</text>
      <polygon points="0,20 -12,30 10,30" fill="white" opacity="0.85" />
    </g>
  </svg>
);

const GlowingFirefly = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#283593" rx="20" />
    <ellipse cx="200" cy="290" rx="220" ry="40" fill="#1B5E20" />
    {/* Firefly GLOWING */}
    <g transform="translate(150, 110)">
      {/* Big glow */}
      <circle cx="50" cy="50" r="60" fill="#FFEB3B" opacity="0.1">
        <animate attributeName="r" values="60;75;60" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="50" r="40" fill="#FFEB3B" opacity="0.15">
        <animate attributeName="r" values="40;50;40" dur="2s" repeatCount="indefinite" />
      </circle>
      <ellipse cx="50" cy="55" rx="20" ry="25" fill="#333" />
      {/* Glowing belly */}
      <ellipse cx="50" cy="60" rx="12" ry="16" fill="#FFEB3B" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1s" repeatCount="indefinite" />
      </ellipse>
      <circle cx="50" cy="30" r="18" fill="#333" />
      <circle cx="43" cy="27" r="4" fill="#FFD93D" />
      <circle cx="57" cy="27" r="4" fill="#FFD93D" />
      <circle cx="43" cy="27" r="2" fill="#333" />
      <circle cx="57" cy="27" r="2" fill="#333" />
      {/* Happy mouth */}
      <path d="M44 36 Q50 42 56 36" fill="none" stroke="#FFD93D" strokeWidth="1.5" />
      <ellipse cx="25" cy="40" rx="15" ry="8" fill="#90A4AE" opacity="0.4" transform="rotate(-15 25 40)" />
      <ellipse cx="75" cy="40" rx="15" ry="8" fill="#90A4AE" opacity="0.4" transform="rotate(15 75 40)" />
      <line x1="42" y1="15" x2="35" y2="0" stroke="#555" strokeWidth="1.5" />
      <circle cx="35" cy="0" r="2.5" fill="#FFD93D" />
      <line x1="58" y1="15" x2="65" y2="0" stroke="#555" strokeWidth="1.5" />
      <circle cx="65" cy="0" r="2.5" fill="#FFD93D" />
    </g>
    {/* Other animals amazed */}
    <text x="80" y="200" fontSize="16">😮</text>
    <text x="300" y="190" fontSize="16">✨</text>
  </svg>
);

const Cricket = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#1A237E" rx="20" />
    <ellipse cx="200" cy="290" rx="220" ry="40" fill="#1B5E20" />
    {/* Cricket on a leaf */}
    <g transform="translate(140, 170)">
      <ellipse cx="60" cy="60" rx="60" ry="15" fill="#4CAF50" />
      <path d="M0 60 Q60 40 120 60" fill="none" stroke="#388E3C" strokeWidth="1.5" />
      {/* Cricket body */}
      <ellipse cx="60" cy="40" rx="15" ry="20" fill="#558B2F" />
      <circle cx="60" cy="18" r="12" fill="#689F38" />
      {/* Eyes */}
      <circle cx="54" cy="15" r="3.5" fill="#333" />
      <circle cx="66" cy="15" r="3.5" fill="#333" />
      <circle cx="55" cy="14" r="1.2" fill="white" />
      <circle cx="67" cy="14" r="1.2" fill="white" />
      <path d="M56 22 Q60 20 64 22" fill="none" stroke="#333" strokeWidth="1" />
      {/* Antennae */}
      <line x1="54" y1="8" x2="42" y2="-8" stroke="#558B2F" strokeWidth="1.5" />
      <line x1="66" y1="8" x2="78" y2="-8" stroke="#558B2F" strokeWidth="1.5" />
      {/* Legs */}
      <path d="M48 45 Q35 55 30 65" fill="none" stroke="#558B2F" strokeWidth="2" />
      <path d="M72 45 Q85 55 90 65" fill="none" stroke="#558B2F" strokeWidth="2" />
    </g>
    {/* Speech */}
    <g transform="translate(210, 120)">
      <rect x="0" y="0" width="130" height="35" rx="15" fill="white" opacity="0.85" />
      <text x="10" y="23" fontSize="10" fill="#333">빛나지 못해요...</text>
    </g>
  </svg>
);

const Lullaby = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#0D47A1" rx="20" />
    <circle cx="340" cy="50" r="25" fill="#FFF9C4" opacity="0.8" />
    <ellipse cx="200" cy="290" rx="220" ry="40" fill="#1B5E20" />
    {/* Sleeping animals */}
    <g transform="translate(60, 220)">
      <ellipse cx="20" cy="10" rx="18" ry="12" fill="#8D6E63" opacity="0.8" />
      <text x="8" y="3" fontSize="8" fill="white">z z z</text>
    </g>
    <g transform="translate(280, 215)">
      <ellipse cx="20" cy="12" rx="15" ry="10" fill="#FF8F00" opacity="0.8" />
      <text x="10" y="5" fontSize="8" fill="white">z z</text>
    </g>
    {/* Cricket singing */}
    <g transform="translate(160, 170)">
      <ellipse cx="40" cy="45" rx="60" ry="12" fill="#4CAF50" opacity="0.8" />
      <ellipse cx="40" cy="30" rx="12" ry="16" fill="#558B2F" />
      <circle cx="40" cy="14" r="10" fill="#689F38" />
      <path d="M34 12 Q38 8 42 12" fill="none" stroke="#333" strokeWidth="1.5" />
      <path d="M42 12 Q46 8 50 12" fill="none" stroke="#333" strokeWidth="1.5" />
      <path d="M36 20 Q40 24 44 20" fill="none" stroke="#333" strokeWidth="1.2" />
    </g>
    {/* Musical notes */}
    {[
      { x: 130, y: 140 }, { x: 210, y: 130 }, { x: 170, y: 110 },
      { x: 250, y: 145 }, { x: 100, y: 120 },
    ].map((n, i) => (
      <text key={i} x={n.x} y={n.y} fontSize={14 + i * 2} fill="#FFF9C4" opacity="0.6">
        {i % 2 === 0 ? '♪' : '♫'}
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 0" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
      </text>
    ))}
  </svg>
);

const AllSpecial = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#1565C0" rx="20" />
    {/* Stars */}
    {[[40,20],[100,35],[200,15],[300,30],[370,22]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r={2} fill="white" opacity="0.7">
        <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1+i*0.3}s`} repeatCount="indefinite"/>
      </circle>
    ))}
    <ellipse cx="200" cy="290" rx="220" ry="40" fill="#1B5E20" />
    {/* Owl in center */}
    <g transform="translate(165, 110)">
      <ellipse cx="35" cy="45" rx="25" ry="30" fill="#8D6E63" />
      <ellipse cx="35" cy="48" rx="16" ry="20" fill="#D7CCC8" />
      <circle cx="25" cy="32" r="8" fill="#D7CCC8" />
      <circle cx="45" cy="32" r="8" fill="#D7CCC8" />
      <circle cx="25" cy="32" r="5" fill="#FFD93D" stroke="#333" strokeWidth="1" />
      <circle cx="45" cy="32" r="5" fill="#FFD93D" stroke="#333" strokeWidth="1" />
      <circle cx="25" cy="32" r="2.5" fill="#333" />
      <circle cx="45" cy="32" r="2.5" fill="#333" />
      <polygon points="35,38 32,42 38,42" fill="#FF8F00" />
      {/* Wings spread */}
      <path d="M10 45 Q-10 35 -5 55" fill="#795548" />
      <path d="M60 45 Q80 35 75 55" fill="#795548" />
    </g>
    {/* Firefly glowing on left */}
    <g transform="translate(60, 180)">
      <circle cx="20" cy="15" r="20" fill="#FFEB3B" opacity="0.15">
        <animate attributeName="opacity" values="0.1;0.25;0.1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <ellipse cx="20" cy="18" rx="8" ry="10" fill="#333" />
      <circle cx="20" cy="8" r="7" fill="#333" />
      <circle cx="17" cy="7" r="1.5" fill="#FFD93D" />
      <circle cx="23" cy="7" r="1.5" fill="#FFD93D" />
    </g>
    {/* Cricket on right */}
    <g transform="translate(290, 195)">
      <ellipse cx="20" cy="15" rx="10" ry="13" fill="#558B2F" />
      <circle cx="20" cy="3" r="8" fill="#689F38" />
      <circle cx="16" cy="1" r="1.5" fill="#333" />
      <circle cx="24" cy="1" r="1.5" fill="#333" />
    </g>
    {/* Speech bubble */}
    <g transform="translate(115, 60)">
      <rect x="0" y="0" width="170" height="35" rx="15" fill="white" opacity="0.9" />
      <text x="10" y="23" fontSize="11" fill="#333">모두 특별해요! ⭐</text>
      <polygon points="85,35 75,48 95,35" fill="white" opacity="0.9" />
    </g>
  </svg>
);

export const OwlScenes: Record<string, React.FC> = {
  'owl-school': OwlSchool,
  'sad-firefly': SadFirefly,
  'glowing-firefly': GlowingFirefly,
  'cricket': Cricket,
  'lullaby': Lullaby,
  'all-special': AllSpecial,
};
