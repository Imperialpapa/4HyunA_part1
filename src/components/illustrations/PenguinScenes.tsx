const PenguinForest = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#E8F5E9" rx="20" />
    <circle cx="340" cy="55" r="35" fill="#FFD93D" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#66BB6A" />
    {/* Trees */}
    {[60, 160, 300, 370].map((x, i) => (
      <g key={i} transform={`translate(${x}, ${130 + i * 10})`}>
        <rect x="8" y="40" width="12" height="35" fill="#795548" />
        <polygon points="14,-10 -15,40 43,40" fill="#388E3C" />
        <polygon points="14,0 -10,35 38,35" fill="#43A047" />
      </g>
    ))}
    {/* Penguin looking around */}
    <g transform="translate(170, 160)">
      <ellipse cx="30" cy="60" rx="25" ry="35" fill="#263238" />
      <ellipse cx="30" cy="65" rx="16" ry="25" fill="white" />
      <circle cx="30" cy="30" r="22" fill="#263238" />
      <circle cx="30" cy="32" r="14" fill="white" />
      {/* Eyes wide open */}
      <circle cx="23" cy="28" r="4" fill="#333" />
      <circle cx="37" cy="28" r="4" fill="#333" />
      <circle cx="24" cy="27" r="1.5" fill="white" />
      <circle cx="38" cy="27" r="1.5" fill="white" />
      {/* Beak */}
      <polygon points="30,33 25,38 35,38" fill="#FF8F00" />
      {/* Flippers */}
      <ellipse cx="2" cy="58" rx="8" ry="18" fill="#263238" transform="rotate(-10 2 58)" />
      <ellipse cx="58" cy="58" rx="8" ry="18" fill="#263238" transform="rotate(10 58 58)" />
      {/* Feet */}
      <ellipse cx="20" cy="95" rx="10" ry="4" fill="#FF8F00" />
      <ellipse cx="40" cy="95" rx="10" ry="4" fill="#FF8F00" />
    </g>
    <text x="220" y="150" fontSize="16">❓</text>
  </svg>
);

const HotPenguin = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#FFF8E1" rx="20" />
    <circle cx="340" cy="50" r="40" fill="#FFD93D" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#81C784" />
    {/* Heat waves */}
    {[100, 200, 300].map((x, i) => (
      <path key={i} d={`M${x} 260 Q${x + 5} 250 ${x} 240 Q${x - 5} 230 ${x} 220`}
        fill="none" stroke="#FF8A65" strokeWidth="1.5" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
      </path>
    ))}
    {/* Sweating penguin */}
    <g transform="translate(150, 150)">
      <ellipse cx="50" cy="65" rx="28" ry="38" fill="#263238" />
      <ellipse cx="50" cy="70" rx="18" ry="28" fill="white" />
      <circle cx="50" cy="30" r="25" fill="#263238" />
      <circle cx="50" cy="32" r="16" fill="white" />
      {/* Tired eyes */}
      <path d="M38 28 Q42 32 46 28" fill="none" stroke="#333" strokeWidth="2" />
      <path d="M54 28 Q58 32 62 28" fill="none" stroke="#333" strokeWidth="2" />
      <polygon points="50,36 44,42 56,42" fill="#FF8F00" />
      {/* Sweat drops */}
      <ellipse cx="25" cy="25" rx="3" ry="4" fill="#64B5F6">
        <animate attributeName="cy" values="25;35;25" dur="1.5s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="75" cy="30" rx="2" ry="3" fill="#64B5F6">
        <animate attributeName="cy" values="30;40;30" dur="1.8s" repeatCount="indefinite" />
      </ellipse>
      {/* Flipper fanning */}
      <ellipse cx="80" cy="45" rx="8" ry="16" fill="#263238" transform="rotate(15 80 45)">
        <animateTransform attributeName="transform" type="rotate" values="15 80 45;-5 80 45;15 80 45" dur="0.4s" repeatCount="indefinite" />
      </ellipse>
    </g>
    <text x="230" y="155" fontSize="16">💦</text>
  </svg>
);

const MonkeyCurious = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#E8F5E9" rx="20" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#66BB6A" />
    {/* Tree with monkey */}
    <g transform="translate(250, 60)">
      <rect x="20" y="40" width="16" height="120" fill="#795548" />
      <circle cx="28" cy="30" r="40" fill="#388E3C" />
      {/* Branch */}
      <path d="M20 80 Q-10 70 -30 75" fill="none" stroke="#795548" strokeWidth="8" strokeLinecap="round" />
      {/* Monkey on branch */}
      <g transform="translate(-50, 55)">
        <ellipse cx="15" cy="25" rx="12" ry="16" fill="#8D6E63" />
        <circle cx="15" cy="6" r="13" fill="#8D6E63" />
        <circle cx="15" cy="8" r="9" fill="#FFCC80" />
        {/* Curious eyes */}
        <circle cx="10" cy="5" r="2.5" fill="#333" />
        <circle cx="20" cy="5" r="2.5" fill="#333" />
        <circle cx="11" cy="4" r="1" fill="white" />
        <circle cx="21" cy="4" r="1" fill="white" />
        <ellipse cx="15" cy="11" rx="3" ry="2" fill="#795548" />
        <path d="M12 14 Q15 17 18 14" fill="none" stroke="#795548" strokeWidth="1" />
        {/* Ears */}
        <circle cx="1" cy="3" r="5" fill="#8D6E63" />
        <circle cx="1" cy="3" r="3" fill="#FFCC80" />
        <circle cx="29" cy="3" r="5" fill="#8D6E63" />
        <circle cx="29" cy="3" r="3" fill="#FFCC80" />
        {/* Tail */}
        <path d="M25 30 Q40 25 45 15 Q48 10 45 8" fill="none" stroke="#8D6E63" strokeWidth="3" strokeLinecap="round" />
      </g>
    </g>
    {/* Penguin */}
    <g transform="translate(100, 180)">
      <ellipse cx="30" cy="50" rx="22" ry="30" fill="#263238" />
      <ellipse cx="30" cy="55" rx="14" ry="22" fill="white" />
      <circle cx="30" cy="22" r="18" fill="#263238" />
      <circle cx="30" cy="24" r="12" fill="white" />
      <circle cx="24" cy="22" r="3" fill="#333" />
      <circle cx="36" cy="22" r="3" fill="#333" />
      <polygon points="30,27 26,32 34,32" fill="#FF8F00" />
    </g>
    {/* Question marks */}
    <text x="175" y="175" fontSize="18" fill="#FF8F00">?</text>
  </svg>
);

const PenguinTells = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#E3F2FD" rx="20" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#81C784" />
    {/* Penguin telling story */}
    <g transform="translate(80, 170)">
      <ellipse cx="30" cy="55" rx="24" ry="32" fill="#263238" />
      <ellipse cx="30" cy="58" rx="15" ry="24" fill="white" />
      <circle cx="30" cy="24" r="20" fill="#263238" />
      <circle cx="30" cy="26" r="13" fill="white" />
      <circle cx="24" cy="24" r="3" fill="#333" />
      <circle cx="36" cy="24" r="3" fill="#333" />
      <polygon points="30,29 25,34 35,34" fill="#FF8F00" />
      <path d="M25 36 Q30 40 35 36" fill="none" stroke="#333" strokeWidth="1" />
      {/* Flipper gesturing */}
      <ellipse cx="58" cy="50" rx="7" ry="16" fill="#263238" transform="rotate(20 58 50)">
        <animateTransform attributeName="transform" type="rotate" values="20 58 50;-5 58 50;20 58 50" dur="1.5s" repeatCount="indefinite" />
      </ellipse>
    </g>
    {/* Thought bubble - icy world */}
    <g transform="translate(150, 40)">
      <ellipse cx="70" cy="50" rx="80" ry="50" fill="white" opacity="0.9" stroke="#E0E0E0" strokeWidth="1" />
      {/* Ice mountains inside */}
      <polygon points="30,70 50,30 70,70" fill="#B3E5FC" />
      <polygon points="60,70 80,25 100,70" fill="#81D4FA" />
      <polygon points="90,70 105,40 120,70" fill="#B3E5FC" />
      <text x="55" y="85" fontSize="8" fill="#90A4AE">❄️ 얼음나라</text>
      {/* Bubble trail */}
      <circle cx="20" cy="90" r="6" fill="white" opacity="0.8" />
      <circle cx="10" cy="105" r="4" fill="white" opacity="0.7" />
    </g>
    {/* Monkey listening */}
    <g transform="translate(260, 185)">
      <ellipse cx="20" cy="30" rx="14" ry="18" fill="#8D6E63" />
      <circle cx="20" cy="10" r="14" fill="#8D6E63" />
      <circle cx="20" cy="12" r="10" fill="#FFCC80" />
      <circle cx="15" cy="9" r="2.5" fill="#333" />
      <circle cx="25" cy="9" r="2.5" fill="#333" />
      <ellipse cx="20" cy="16" rx="4" ry="5" fill="#FFCC80" stroke="#795548" strokeWidth="0.5" />
      <circle cx="5" cy="7" r="6" fill="#8D6E63" />
      <circle cx="5" cy="7" r="3.5" fill="#FFCC80" />
      <circle cx="35" cy="7" r="6" fill="#8D6E63" />
      <circle cx="35" cy="7" r="3.5" fill="#FFCC80" />
    </g>
    <text x="300" y="185" fontSize="14">😮</text>
  </svg>
);

const SharingStories = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#FCE4EC" rx="20" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#81C784" />
    {/* Both sitting on a log */}
    <rect x="80" y="230" width="240" height="20" rx="8" fill="#795548" />
    <ellipse cx="200" cy="230" rx="130" ry="8" fill="#8D6E63" />
    {/* Penguin on log */}
    <g transform="translate(120, 165)">
      <ellipse cx="25" cy="40" rx="20" ry="28" fill="#263238" />
      <ellipse cx="25" cy="44" rx="12" ry="20" fill="white" />
      <circle cx="25" cy="15" r="17" fill="#263238" />
      <circle cx="25" cy="17" r="11" fill="white" />
      <path d="M18 15 Q22 11 26 15" fill="none" stroke="#333" strokeWidth="1.5" />
      <path d="M26 15 Q30 11 34 15" fill="none" stroke="#333" strokeWidth="1.5" />
      <polygon points="25,20 22,24 28,24" fill="#FF8F00" />
    </g>
    {/* Monkey on log */}
    <g transform="translate(230, 170)">
      <ellipse cx="20" cy="35" rx="15" ry="20" fill="#8D6E63" />
      <circle cx="20" cy="12" r="15" fill="#8D6E63" />
      <circle cx="20" cy="14" r="10" fill="#FFCC80" />
      <path d="M14 11 Q17 8 20 11" fill="none" stroke="#333" strokeWidth="1.5" />
      <path d="M22 11 Q25 8 28 11" fill="none" stroke="#333" strokeWidth="1.5" />
      <path d="M17 20 Q20 24 23 20" fill="none" stroke="#795548" strokeWidth="1" />
      <circle cx="5" cy="8" r="6" fill="#8D6E63" />
      <circle cx="5" cy="8" r="3.5" fill="#FFCC80" />
      <circle cx="35" cy="8" r="6" fill="#8D6E63" />
      <circle cx="35" cy="8" r="3.5" fill="#FFCC80" />
    </g>
    {/* Chat bubbles */}
    <text x="95" y="145" fontSize="14">💬</text>
    <text x="265" y="150" fontSize="14">💬</text>
  </svg>
);

const PlayingTogether = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#FFF3E0" rx="20" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#66BB6A" />
    {/* Penguin and monkey playing */}
    <g transform="translate(120, 140)">
      {/* Penguin jumping */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -10;0 0" dur="1s" repeatCount="indefinite" />
        <ellipse cx="30" cy="60" rx="22" ry="30" fill="#263238" />
        <ellipse cx="30" cy="64" rx="14" ry="22" fill="white" />
        <circle cx="30" cy="28" r="19" fill="#263238" />
        <circle cx="30" cy="30" r="12" fill="white" />
        <path d="M23 28 Q27 24 31 28" fill="none" stroke="#333" strokeWidth="1.5" />
        <path d="M31 28 Q35 24 39 28" fill="none" stroke="#333" strokeWidth="1.5" />
        <polygon points="30,34 26,38 34,38" fill="#FF8F00" />
        <path d="M26 40 Q30 44 34 40" fill="none" stroke="#333" strokeWidth="1" />
        <ellipse cx="5" cy="50" rx="7" ry="15" fill="#263238" transform="rotate(-15 5 50)" />
        <ellipse cx="55" cy="50" rx="7" ry="15" fill="#263238" transform="rotate(15 55 50)" />
      </g>
    </g>
    <g transform="translate(230, 140)">
      {/* Monkey jumping */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 -5;0 5;0 -5" dur="1s" repeatCount="indefinite" />
        <ellipse cx="25" cy="55" rx="16" ry="22" fill="#8D6E63" />
        <circle cx="25" cy="25" r="16" fill="#8D6E63" />
        <circle cx="25" cy="27" r="11" fill="#FFCC80" />
        <path d="M18 24 Q22 20 26 24" fill="none" stroke="#333" strokeWidth="1.5" />
        <path d="M26 24 Q30 20 34 24" fill="none" stroke="#333" strokeWidth="1.5" />
        <path d="M22 32 Q25 36 28 32" fill="none" stroke="#795548" strokeWidth="1" />
        <circle cx="10" cy="20" r="6" fill="#8D6E63" />
        <circle cx="10" cy="20" r="3.5" fill="#FFCC80" />
        <circle cx="40" cy="20" r="6" fill="#8D6E63" />
        <circle cx="40" cy="20" r="3.5" fill="#FFCC80" />
        <path d="M43 55 Q60 45 65 30 Q67 25 63 23" fill="none" stroke="#8D6E63" strokeWidth="3" strokeLinecap="round" />
      </g>
    </g>
    {/* Joy sparkles */}
    <text x="180" y="120" fontSize="18">⭐</text>
    <text x="200" y="135" fontSize="12">✨</text>
  </svg>
);

const PenguinMonkeyFriends = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#E8F5E9" rx="20" />
    <circle cx="330" cy="55" r="32" fill="#FFD93D" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#66BB6A" />
    {/* Rainbow */}
    {['#FF6B6B', '#FFB74D', '#FFD93D', '#66BB6A', '#42A5F5', '#7E57C2'].map((c, i) => (
      <path key={i} d={`M50 280 A${180 - i * 12} ${130 - i * 10} 0 0 1 350 280`}
        fill="none" stroke={c} strokeWidth="5" opacity="0.4" />
    ))}
    {/* Penguin and monkey side by side */}
    <g transform="translate(130, 170)">
      <ellipse cx="28" cy="55" rx="22" ry="30" fill="#263238" />
      <ellipse cx="28" cy="58" rx="14" ry="22" fill="white" />
      <circle cx="28" cy="24" r="18" fill="#263238" />
      <circle cx="28" cy="26" r="12" fill="white" />
      <path d="M21 24 Q25 20 29 24" fill="none" stroke="#333" strokeWidth="1.5" />
      <path d="M29 24 Q33 20 37 24" fill="none" stroke="#333" strokeWidth="1.5" />
      <polygon points="28,30 24,34 32,34" fill="#FF8F00" />
    </g>
    <g transform="translate(220, 175)">
      <ellipse cx="22" cy="45" rx="16" ry="22" fill="#8D6E63" />
      <circle cx="22" cy="18" r="16" fill="#8D6E63" />
      <circle cx="22" cy="20" r="11" fill="#FFCC80" />
      <path d="M15 17 Q19 13 23 17" fill="none" stroke="#333" strokeWidth="1.5" />
      <path d="M23 17 Q27 13 31 17" fill="none" stroke="#333" strokeWidth="1.5" />
      <path d="M19 26 Q22 30 25 26" fill="none" stroke="#795548" strokeWidth="1" />
      <circle cx="7" cy="14" r="6" fill="#8D6E63" />
      <circle cx="7" cy="14" r="3.5" fill="#FFCC80" />
      <circle cx="37" cy="14" r="6" fill="#8D6E63" />
      <circle cx="37" cy="14" r="3.5" fill="#FFCC80" />
    </g>
    {/* Hearts */}
    {[{ x: 190, y: 150 }, { x: 210, y: 135 }, { x: 180, y: 140 }].map((h, i) => (
      <g key={i} transform={`translate(${h.x}, ${h.y})`}>
        <path d="M5 3 Q5 0 8 0 Q11 0 11 3 Q11 7 8 10 Q5 7 5 3Z" fill="#FF69B4" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
        </path>
      </g>
    ))}
  </svg>
);

export const PenguinScenes: Record<string, React.FC> = {
  'penguin-forest': PenguinForest,
  'hot-penguin': HotPenguin,
  'monkey-curious': MonkeyCurious,
  'penguin-tells': PenguinTells,
  'sharing-stories': SharingStories,
  'playing-together': PlayingTogether,
  'penguin-monkey-friends': PenguinMonkeyFriends,
};
