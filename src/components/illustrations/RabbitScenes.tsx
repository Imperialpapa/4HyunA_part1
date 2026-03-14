const RabbitSpring = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    {/* Sky */}
    <rect width="400" height="300" fill="#87CEEB" rx="20" />
    {/* Sun */}
    <circle cx="340" cy="60" r="35" fill="#FFD93D">
      <animate attributeName="r" values="35;38;35" dur="2s" repeatCount="indefinite" />
    </circle>
    {/* Clouds */}
    <g opacity="0.8">
      <ellipse cx="80" cy="50" rx="40" ry="18" fill="white" />
      <ellipse cx="110" cy="45" rx="30" ry="15" fill="white" />
      <ellipse cx="250" cy="70" rx="35" ry="16" fill="white" />
    </g>
    {/* Ground */}
    <ellipse cx="200" cy="290" rx="220" ry="60" fill="#4CAF50" />
    <ellipse cx="200" cy="290" rx="200" ry="50" fill="#66BB6A" />
    {/* Flowers */}
    {[60, 120, 280, 330].map((x, i) => (
      <g key={i}>
        <line x1={x} y1={270} x2={x} y2={250} stroke="#388E3C" strokeWidth="2" />
        <circle cx={x} cy={245} r="8" fill={['#FF6B6B', '#FFD93D', '#FF69B4', '#DDA0DD'][i]} />
        <circle cx={x} cy={245} r="3" fill="#FFD93D" />
      </g>
    ))}
    {/* Rabbit */}
    <g transform="translate(180, 170)">
      {/* Body */}
      <ellipse cx="20" cy="60" rx="25" ry="30" fill="white" />
      {/* Head */}
      <circle cx="20" cy="25" r="22" fill="white" />
      {/* Ears */}
      <ellipse cx="8" cy="-10" rx="7" ry="22" fill="white" />
      <ellipse cx="8" cy="-10" rx="4" ry="18" fill="#FFB6C1" />
      <ellipse cx="32" cy="-10" rx="7" ry="22" fill="white" />
      <ellipse cx="32" cy="-10" rx="4" ry="18" fill="#FFB6C1" />
      {/* Eyes */}
      <circle cx="12" cy="22" r="4" fill="#333" />
      <circle cx="28" cy="22" r="4" fill="#333" />
      <circle cx="13" cy="20" r="1.5" fill="white" />
      <circle cx="29" cy="20" r="1.5" fill="white" />
      {/* Nose */}
      <ellipse cx="20" cy="30" rx="3" ry="2" fill="#FF69B4" />
      {/* Mouth */}
      <path d="M17 33 Q20 37 23 33" fill="none" stroke="#333" strokeWidth="1.2" />
      {/* Cheeks */}
      <circle cx="5" cy="28" r="5" fill="#FFB6C1" opacity="0.5" />
      <circle cx="35" cy="28" r="5" fill="#FFB6C1" opacity="0.5" />
      {/* Feet */}
      <ellipse cx="8" cy="90" rx="10" ry="6" fill="white" />
      <ellipse cx="32" cy="90" rx="10" ry="6" fill="white" />
    </g>
    {/* Butterflies */}
    <g transform="translate(100, 140)">
      <path d="M0 0 Q-10 -8 -5 -15 Q0 -8 0 0" fill="#FF69B4" opacity="0.8">
        <animateTransform attributeName="transform" type="rotate" values="0 0 0;15 0 0;0 0 0" dur="0.5s" repeatCount="indefinite" />
      </path>
      <path d="M0 0 Q10 -8 5 -15 Q0 -8 0 0" fill="#FF69B4" opacity="0.8">
        <animateTransform attributeName="transform" type="rotate" values="0 0 0;-15 0 0;0 0 0" dur="0.5s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

const RabbitMeetsTurtle = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#FFF8E1" rx="20" />
    <ellipse cx="200" cy="280" rx="220" ry="50" fill="#81C784" />
    {/* Rabbit */}
    <g transform="translate(100, 160)">
      <ellipse cx="20" cy="55" rx="22" ry="28" fill="white" />
      <circle cx="20" cy="22" r="20" fill="white" />
      <ellipse cx="8" cy="-8" rx="6" ry="20" fill="white" />
      <ellipse cx="8" cy="-8" rx="3.5" ry="16" fill="#FFB6C1" />
      <ellipse cx="32" cy="-8" rx="6" ry="20" fill="white" />
      <ellipse cx="32" cy="-8" rx="3.5" ry="16" fill="#FFB6C1" />
      <circle cx="12" cy="20" r="3.5" fill="#333" />
      <circle cx="28" cy="20" r="3.5" fill="#333" />
      <ellipse cx="20" cy="28" rx="2.5" ry="2" fill="#FF69B4" />
      <path d="M16 30 Q20 35 24 30" fill="none" stroke="#333" strokeWidth="1.2" />
      {/* Waving arm */}
      <path d="M40 40 Q55 25 60 20" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 40 40;-15 40 40;0 40 40" dur="0.8s" repeatCount="indefinite" />
      </path>
    </g>
    {/* Turtle */}
    <g transform="translate(250, 200)">
      {/* Shell */}
      <ellipse cx="25" cy="20" rx="35" ry="25" fill="#4CAF50" />
      <ellipse cx="25" cy="20" rx="30" ry="20" fill="#66BB6A" />
      {/* Shell pattern */}
      <path d="M10 10 Q25 0 40 10" fill="none" stroke="#388E3C" strokeWidth="2" />
      <path d="M8 20 Q25 10 42 20" fill="none" stroke="#388E3C" strokeWidth="2" />
      <path d="M10 30 Q25 22 40 30" fill="none" stroke="#388E3C" strokeWidth="2" />
      {/* Head */}
      <circle cx="-10" cy="15" r="12" fill="#8BC34A" />
      <circle cx="-15" cy="12" r="2.5" fill="#333" />
      <circle cx="-15" cy="11" r="1" fill="white" />
      <path d="M-18 18 Q-14 21 -10 18" fill="none" stroke="#333" strokeWidth="1" />
      {/* Legs */}
      <ellipse cx="-5" cy="42" rx="8" ry="5" fill="#8BC34A" />
      <ellipse cx="45" cy="42" rx="8" ry="5" fill="#8BC34A" />
    </g>
  </svg>
);

const SadTurtle = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#E3F2FD" rx="20" />
    <ellipse cx="200" cy="280" rx="220" ry="50" fill="#A5D6A7" />
    {/* Turtle centered, looking sad */}
    <g transform="translate(150, 160)">
      <ellipse cx="50" cy="40" rx="50" ry="35" fill="#4CAF50" />
      <ellipse cx="50" cy="40" rx="42" ry="28" fill="#66BB6A" />
      <path d="M20 25 Q50 15 80 25" fill="none" stroke="#388E3C" strokeWidth="2.5" />
      <path d="M15 40 Q50 28 85 40" fill="none" stroke="#388E3C" strokeWidth="2.5" />
      <path d="M20 55 Q50 45 80 55" fill="none" stroke="#388E3C" strokeWidth="2.5" />
      <circle cx="0" cy="30" r="18" fill="#8BC34A" />
      {/* Sad eyes */}
      <circle cx="-8" cy="26" r="3.5" fill="#333" />
      <circle cx="6" cy="26" r="3.5" fill="#333" />
      {/* Tear */}
      <ellipse cx="-8" cy="34" rx="2" ry="3" fill="#64B5F6">
        <animate attributeName="cy" values="34;40;34" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" />
      </ellipse>
      {/* Sad mouth */}
      <path d="M-8 36 Q-1 32 6 36" fill="none" stroke="#333" strokeWidth="1.5" />
      <ellipse cx="10" cy="72" rx="12" ry="7" fill="#8BC34A" />
      <ellipse cx="80" cy="72" rx="12" ry="7" fill="#8BC34A" />
    </g>
  </svg>
);

const WalkingTogether = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#FCE4EC" rx="20" />
    {/* Path */}
    <path d="M0 270 Q100 260 200 265 Q300 270 400 260" fill="#E8C9A0" stroke="#D4A574" strokeWidth="2" />
    <ellipse cx="200" cy="285" rx="220" ry="40" fill="#81C784" />
    {/* Trees */}
    <g transform="translate(40, 120)">
      <rect x="12" y="50" width="10" height="30" fill="#795548" />
      <circle cx="17" cy="40" r="25" fill="#388E3C" />
    </g>
    <g transform="translate(330, 100)">
      <rect x="12" y="50" width="10" height="40" fill="#795548" />
      <circle cx="17" cy="38" r="30" fill="#2E7D32" />
    </g>
    {/* Rabbit walking */}
    <g transform="translate(140, 180)">
      <ellipse cx="20" cy="50" rx="18" ry="24" fill="white" />
      <circle cx="20" cy="22" r="17" fill="white" />
      <ellipse cx="10" cy="0" rx="5" ry="16" fill="white" />
      <ellipse cx="10" cy="0" rx="3" ry="13" fill="#FFB6C1" />
      <ellipse cx="30" cy="0" rx="5" ry="16" fill="white" />
      <ellipse cx="30" cy="0" rx="3" ry="13" fill="#FFB6C1" />
      <circle cx="13" cy="20" r="3" fill="#333" />
      <circle cx="27" cy="20" r="3" fill="#333" />
      <path d="M17 28 Q20 32 23 28" fill="none" stroke="#333" strokeWidth="1" />
      <ellipse cx="20" cy="26" rx="2" ry="1.5" fill="#FF69B4" />
    </g>
    {/* Turtle walking beside */}
    <g transform="translate(220, 210)">
      <ellipse cx="25" cy="20" rx="30" ry="22" fill="#4CAF50" />
      <ellipse cx="25" cy="20" rx="24" ry="16" fill="#66BB6A" />
      <circle cx="-2" cy="14" r="11" fill="#8BC34A" />
      <circle cx="-8" cy="12" r="2.5" fill="#333" />
      <path d="M-10 18 Q-5 21 0 18" fill="none" stroke="#333" strokeWidth="1" />
      <ellipse cx="0" cy="40" rx="8" ry="5" fill="#8BC34A" />
      <ellipse cx="48" cy="40" rx="8" ry="5" fill="#8BC34A" />
    </g>
    {/* Hearts */}
    <g transform="translate(195, 175)" opacity="0.7">
      <path d="M0 4 Q0 0 4 0 Q8 0 8 4 Q8 8 4 12 Q0 8 0 4Z" fill="#FF69B4">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

const FlowersButterflies = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#F3E5F5" rx="20" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#81C784" />
    {/* Many flowers */}
    {[
      { x: 40, c: '#FF6B6B' }, { x: 90, c: '#FFD93D' }, { x: 140, c: '#FF69B4' },
      { x: 200, c: '#DDA0DD' }, { x: 260, c: '#FF6B6B' }, { x: 310, c: '#FFD93D' }, { x: 360, c: '#FF69B4' },
    ].map((f, i) => (
      <g key={i} transform={`translate(${f.x}, ${240 - (i % 3) * 15})`}>
        <line x1="0" y1="0" x2="0" y2="30" stroke="#388E3C" strokeWidth="2" />
        <circle cx="0" cy="-5" r="10" fill={f.c} />
        <circle cx="0" cy="-5" r="4" fill="#FFD93D" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <circle key={a} cx={Math.cos(a * Math.PI / 180) * 7} cy={-5 + Math.sin(a * Math.PI / 180) * 7} r="4" fill={f.c} opacity="0.8" />
        ))}
      </g>
    ))}
    {/* Dewdrops */}
    {[70, 170, 290].map((x, i) => (
      <ellipse key={i} cx={x} cy={250} rx="3" ry="4" fill="#81D4FA" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
      </ellipse>
    ))}
    {/* Butterflies */}
    {[
      { x: 100, y: 120, c: '#FF69B4' }, { x: 280, y: 100, c: '#FFD93D' }, { x: 180, y: 80, c: '#CE93D8' },
    ].map((b, i) => (
      <g key={i} transform={`translate(${b.x}, ${b.y})`}>
        <ellipse cx="-8" cy="0" rx="8" ry="5" fill={b.c} opacity="0.8">
          <animateTransform attributeName="transform" type="rotate" values="0 0 0;20 0 0;0 0 0" dur={`${0.4 + i * 0.1}s`} repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="8" cy="0" rx="8" ry="5" fill={b.c} opacity="0.8">
          <animateTransform attributeName="transform" type="rotate" values="0 0 0;-20 0 0;0 0 0" dur={`${0.4 + i * 0.1}s`} repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="0" cy="0" rx="1.5" ry="6" fill="#333" />
      </g>
    ))}
    {/* Small rabbit and turtle at bottom */}
    <g transform="translate(160, 220) scale(0.6)">
      <circle cx="0" cy="0" r="14" fill="white" />
      <ellipse cx="-6" cy="-18" rx="4" ry="12" fill="white" />
      <ellipse cx="6" cy="-18" rx="4" ry="12" fill="white" />
      <circle cx="-4" cy="-2" r="2" fill="#333" />
      <circle cx="4" cy="-2" r="2" fill="#333" />
    </g>
    <g transform="translate(210, 230) scale(0.6)">
      <ellipse cx="0" cy="0" rx="20" ry="14" fill="#4CAF50" />
      <circle cx="-18" cy="-3" r="8" fill="#8BC34A" />
      <circle cx="-22" cy="-5" r="1.5" fill="#333" />
    </g>
  </svg>
);

const AmazedRabbit = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#E8F5E9" rx="20" />
    <ellipse cx="200" cy="285" rx="220" ry="45" fill="#66BB6A" />
    {/* Rabbit amazed */}
    <g transform="translate(150, 100)">
      <ellipse cx="50" cy="110" rx="35" ry="45" fill="white" />
      <circle cx="50" cy="55" r="35" fill="white" />
      <ellipse cx="30" cy="5" rx="10" ry="35" fill="white" />
      <ellipse cx="30" cy="5" rx="6" ry="28" fill="#FFB6C1" />
      <ellipse cx="70" cy="5" rx="10" ry="35" fill="white" />
      <ellipse cx="70" cy="5" rx="6" ry="28" fill="#FFB6C1" />
      {/* Wide open eyes */}
      <circle cx="38" cy="50" r="7" fill="white" stroke="#333" strokeWidth="2" />
      <circle cx="62" cy="50" r="7" fill="white" stroke="#333" strokeWidth="2" />
      <circle cx="38" cy="50" r="4" fill="#333" />
      <circle cx="62" cy="50" r="4" fill="#333" />
      <circle cx="40" cy="48" r="1.5" fill="white" />
      <circle cx="64" cy="48" r="1.5" fill="white" />
      {/* O-shaped mouth */}
      <ellipse cx="50" cy="68" rx="5" ry="6" fill="#FF69B4" />
      {/* Sparkles */}
      <text x="90" y="30" fontSize="16" fill="#FFD93D">✨</text>
      <text x="5" y="35" fontSize="14" fill="#FFD93D">✨</text>
      <text x="85" y="70" fontSize="12" fill="#FFD93D">⭐</text>
    </g>
  </svg>
);

const BestFriends = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#FFF3E0" rx="20" />
    {/* Sunset sky */}
    <circle cx="200" cy="280" r="60" fill="#FFB74D" opacity="0.5" />
    <circle cx="200" cy="300" r="40" fill="#FF8A65" opacity="0.3" />
    <ellipse cx="200" cy="280" rx="220" ry="45" fill="#81C784" />
    {/* Rabbit and turtle together */}
    <g transform="translate(120, 160)">
      {/* Rabbit */}
      <ellipse cx="40" cy="60" rx="22" ry="28" fill="white" />
      <circle cx="40" cy="30" r="20" fill="white" />
      <ellipse cx="28" cy="5" rx="6" ry="20" fill="white" />
      <ellipse cx="28" cy="5" rx="3.5" ry="16" fill="#FFB6C1" />
      <ellipse cx="52" cy="5" rx="6" ry="20" fill="white" />
      <ellipse cx="52" cy="5" rx="3.5" ry="16" fill="#FFB6C1" />
      <circle cx="33" cy="28" r="3" fill="#333" />
      <circle cx="47" cy="28" r="3" fill="#333" />
      <path d="M37 35 Q40 39 43 35" fill="none" stroke="#333" strokeWidth="1.2" />
    </g>
    <g transform="translate(200, 195)">
      {/* Turtle */}
      <ellipse cx="30" cy="20" rx="32" ry="24" fill="#4CAF50" />
      <ellipse cx="30" cy="20" rx="26" ry="18" fill="#66BB6A" />
      <circle cx="2" cy="14" r="12" fill="#8BC34A" />
      <circle cx="-4" cy="12" r="2.5" fill="#333" />
      <path d="M-6 18 Q-2 21 2 18" fill="none" stroke="#333" strokeWidth="1.2" />
      <ellipse cx="5" cy="42" rx="10" ry="5" fill="#8BC34A" />
      <ellipse cx="55" cy="42" rx="10" ry="5" fill="#8BC34A" />
    </g>
    {/* Hearts floating */}
    {[
      { x: 170, y: 130, s: 1 }, { x: 200, y: 110, s: 0.7 }, { x: 220, y: 140, s: 0.5 },
    ].map((h, i) => (
      <g key={i} transform={`translate(${h.x}, ${h.y}) scale(${h.s})`}>
        <path d="M10 6 Q10 0 15 0 Q20 0 20 6 Q20 12 15 18 Q10 12 10 6Z" fill="#FF69B4" opacity="0.7">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 0" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
        </path>
      </g>
    ))}
  </svg>
);

export const RabbitScenes: Record<string, React.FC> = {
  'rabbit-spring': RabbitSpring,
  'rabbit-meets-turtle': RabbitMeetsTurtle,
  'sad-turtle': SadTurtle,
  'walking-together': WalkingTogether,
  'flowers-butterflies': FlowersButterflies,
  'amazed-rabbit': AmazedRabbit,
  'best-friends': BestFriends,
};
