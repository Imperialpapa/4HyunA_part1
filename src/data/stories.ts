import type { Story } from './types';

export const stories: Story[] = [
  {
    id: 'rabbit-and-turtle',
    title: {
      ko: '토끼와 거북이의 특별한 하루',
      en: "The Rabbit and Turtle's Special Day",
    },
    subtitle: {
      ko: '느려도 괜찮아, 함께라서 행복해!',
      en: "It's okay to be slow — we're happy together!",
    },
    coverColor: '#A8D8A8',
    coverEmoji: '🐢',
    pages: [
      {
        text: {
          ko: '어느 맑은 봄날, 토끼 뽀미는 숲속을 폴짝폴짝 뛰어다니고 있었어요.',
          en: 'On a bright spring day, Bbomi the rabbit was hopping through the forest.',
        },
        illustration: 'rabbit-spring',
        bgColor: '#E8F5E9',
      },
      {
        text: {
          ko: '"안녕, 거북아! 같이 놀자!" 뽀미가 느릿느릿 걷는 거북이 초록이에게 말했어요.',
          en: '"Hi, Turtle! Let\'s play together!" Bbomi said to Choroki the turtle, who was walking slowly.',
        },
        illustration: 'rabbit-meets-turtle',
        bgColor: '#FFF8E1',
      },
      {
        text: {
          ko: '"나는 너무 느려서... 같이 놀면 재미없을 거야." 초록이가 슬픈 목소리로 말했어요.',
          en: '"I\'m too slow... It won\'t be fun playing with me." Choroki said sadly.',
        },
        illustration: 'sad-turtle',
        bgColor: '#E3F2FD',
      },
      {
        text: {
          ko: '"아니야! 느려도 괜찮아. 우리 꽃구경 가자!" 뽀미가 초록이 옆에 나란히 걸었어요.',
          en: '"No way! It\'s okay to be slow. Let\'s go see the flowers!" Bbomi walked side by side with Choroki.',
        },
        illustration: 'walking-together',
        bgColor: '#FCE4EC',
      },
      {
        text: {
          ko: '천천히 걸으니까 작은 꽃들, 예쁜 나비들, 반짝이는 이슬방울이 다 보였어요!',
          en: 'Walking slowly, they could see tiny flowers, pretty butterflies, and sparkling dewdrops!',
        },
        illustration: 'flowers-butterflies',
        bgColor: '#F3E5F5',
      },
      {
        text: {
          ko: '"와! 천천히 가니까 이렇게 예쁜 게 많구나!" 뽀미가 깜짝 놀랐어요.',
          en: '"Wow! There are so many pretty things when you go slowly!" Bbomi was amazed.',
        },
        illustration: 'amazed-rabbit',
        bgColor: '#E8F5E9',
      },
      {
        text: {
          ko: '그날부터 뽀미와 초록이는 매일 함께 산책하는 가장 친한 친구가 되었답니다.',
          en: 'From that day on, Bbomi and Choroki became best friends who walked together every day.',
        },
        illustration: 'best-friends',
        bgColor: '#FFF3E0',
      },
    ],
  },
  {
    id: 'bear-and-honey',
    title: {
      ko: '곰돌이의 꿀 나누기',
      en: "Bear's Honey Sharing",
    },
    subtitle: {
      ko: '나누면 더 맛있어!',
      en: 'Sharing makes it sweeter!',
    },
    coverColor: '#F5D6A8',
    coverEmoji: '🐻',
    pages: [
      {
        text: {
          ko: '곰돌이 뭉치는 숲에서 아주 큰 꿀단지를 발견했어요. "우와, 꿀이다!"',
          en: 'Mungchi the bear found a big honey jar in the forest. "Wow, honey!"',
        },
        illustration: 'bear-honey',
        bgColor: '#FFF8E1',
      },
      {
        text: {
          ko: '"이건 내 거야! 혼자 다 먹을 거야!" 뭉치는 꿀단지를 꼭 안았어요.',
          en: '"This is mine! I\'m going to eat it all by myself!" Mungchi hugged the honey jar tight.',
        },
        illustration: 'greedy-bear',
        bgColor: '#FFF3E0',
      },
      {
        text: {
          ko: '그때 다람쥐 또또가 왔어요. "뭉치야, 나도 조금만..." "안 돼!" 뭉치가 소리쳤어요.',
          en: 'Then Ddodddo the squirrel came. "Mungchi, can I have just a little..." "No!" Mungchi shouted.',
        },
        illustration: 'squirrel-asking',
        bgColor: '#E8F5E9',
      },
      {
        text: {
          ko: '혼자 꿀을 먹는 뭉치. 그런데 이상하게 맛이 없었어요. 심심하기도 했고요.',
          en: "Mungchi ate the honey alone. But strangely, it didn't taste good. He felt lonely too.",
        },
        illustration: 'lonely-bear',
        bgColor: '#E3F2FD',
      },
      {
        text: {
          ko: '"또또야, 미안해! 같이 먹자!" 뭉치가 또또를 불렀어요.',
          en: '"Ddoddo, I\'m sorry! Let\'s eat together!" Mungchi called out to Ddoddo.',
        },
        illustration: 'bear-sharing',
        bgColor: '#FCE4EC',
      },
      {
        text: {
          ko: '함께 나눠 먹으니 꿀이 열 배는 더 달콤했어요! 둘은 행복하게 웃었답니다.',
          en: 'Sharing the honey together, it tasted ten times sweeter! They both smiled happily.',
        },
        illustration: 'happy-eating',
        bgColor: '#FFF8E1',
      },
    ],
  },
  {
    id: 'fox-and-star',
    title: {
      ko: '여우와 반짝이 별',
      en: 'The Fox and the Shining Star',
    },
    subtitle: {
      ko: '용기를 내면 빛나는 걸!',
      en: 'Be brave and you will shine!',
    },
    coverColor: '#B8C5E8',
    coverEmoji: '🦊',
    pages: [
      {
        text: {
          ko: '어린 여우 루루는 밤하늘의 별을 무서워했어요. "왜 저렇게 반짝이는 거지?"',
          en: 'Little fox Lulu was afraid of the stars in the night sky. "Why do they twinkle like that?"',
        },
        illustration: 'fox-night',
        bgColor: '#1A237E',
      },
      {
        text: {
          ko: '어느 날 밤, 하늘에서 작은 별 하나가 뚝 떨어졌어요! 반짝반짝 빛나고 있었죠.',
          en: 'One night, a little star fell from the sky! It was sparkling brightly.',
        },
        illustration: 'falling-star',
        bgColor: '#0D47A1',
      },
      {
        text: {
          ko: '루루는 떨리는 마음으로 별에게 다가갔어요. "안... 안녕?"',
          en: 'With a trembling heart, Lulu walked up to the star. "H-hello?"',
        },
        illustration: 'fox-approaching',
        bgColor: '#1565C0',
      },
      {
        text: {
          ko: '"안녕! 나는 반짝이야. 하늘로 돌아가고 싶은데 도와줄 수 있니?" 별이 말했어요.',
          en: '"Hello! I\'m Sparkle. I want to go back to the sky. Can you help me?" said the star.',
        },
        illustration: 'talking-star',
        bgColor: '#1976D2',
      },
      {
        text: {
          ko: '루루는 용기를 내서 반짝이를 등에 태우고 가장 높은 언덕으로 올라갔어요.',
          en: 'Lulu gathered her courage, put Sparkle on her back, and climbed the highest hill.',
        },
        illustration: 'fox-climbing',
        bgColor: '#283593',
      },
      {
        text: {
          ko: '"고마워 루루! 너도 별처럼 빛나는 아이야!" 반짝이가 하늘로 돌아갔어요.',
          en: '"Thank you, Lulu! You shine like a star too!" Sparkle flew back to the sky.',
        },
        illustration: 'star-return',
        bgColor: '#0D47A1',
      },
      {
        text: {
          ko: '그날부터 루루는 밤하늘이 무섭지 않았어요. 반짝이 별이 윙크해주니까요!',
          en: "From that day on, Lulu wasn't afraid of the night sky. Because Sparkle always winked at her!",
        },
        illustration: 'fox-happy-night',
        bgColor: '#1A237E',
      },
    ],
  },
  {
    id: 'penguin-friends',
    title: {
      ko: '펭귄의 첫 번째 친구',
      en: "Penguin's First Friend",
    },
    subtitle: {
      ko: '다르지만 우리는 친구!',
      en: "We're different, but we're friends!",
    },
    coverColor: '#B3E5FC',
    coverEmoji: '🐧',
    pages: [
      {
        text: {
          ko: '펭귄 뿌뿌는 따뜻한 숲에 놀러 왔어요. 모든 게 신기했지요.',
          en: 'Ppuppu the penguin came to visit the warm forest. Everything was amazing.',
        },
        illustration: 'penguin-forest',
        bgColor: '#E8F5E9',
      },
      {
        text: {
          ko: '"여기는 왜 이렇게 더워?" 뿌뿌가 부채질을 하며 걸었어요.',
          en: '"Why is it so hot here?" Ppuppu walked while fanning himself.',
        },
        illustration: 'hot-penguin',
        bgColor: '#FFF8E1',
      },
      {
        text: {
          ko: '원숭이 키키가 나타났어요. "너는 누구야? 왜 검은 옷을 입고 있어?"',
          en: 'Kiki the monkey appeared. "Who are you? Why are you wearing black clothes?"',
        },
        illustration: 'monkey-curious',
        bgColor: '#E8F5E9',
      },
      {
        text: {
          ko: '"나는 펭귄이야! 얼음나라에서 왔어." "우와, 얼음나라? 거기엔 뭐가 있어?"',
          en: '"I\'m a penguin! I came from the Ice Land." "Wow, Ice Land? What\'s there?"',
        },
        illustration: 'penguin-tells',
        bgColor: '#E3F2FD',
      },
      {
        text: {
          ko: '뿌뿌가 얼음나라 이야기를 해주고, 키키는 숲속 이야기를 해줬어요.',
          en: 'Ppuppu told stories about the Ice Land, and Kiki told stories about the forest.',
        },
        illustration: 'sharing-stories',
        bgColor: '#FCE4EC',
      },
      {
        text: {
          ko: '"우리 생김새는 다르지만, 둘 다 놀기를 좋아하잖아!" 키키가 웃었어요.',
          en: '"We look different, but we both love to play!" Kiki laughed.',
        },
        illustration: 'playing-together',
        bgColor: '#FFF3E0',
      },
      {
        text: {
          ko: '뿌뿌와 키키는 서로 다르지만 가장 좋은 친구가 되었답니다!',
          en: 'Ppuppu and Kiki were different, but they became the best of friends!',
        },
        illustration: 'penguin-monkey-friends',
        bgColor: '#E8F5E9',
      },
    ],
  },
  {
    id: 'owl-night-school',
    title: {
      ko: '부엉이의 밤 학교',
      en: "Owl's Night School",
    },
    subtitle: {
      ko: '모두가 특별한 재능이 있어요!',
      en: 'Everyone has a special talent!',
    },
    coverColor: '#D1C4E9',
    coverEmoji: '🦉',
    pages: [
      {
        text: {
          ko: '부엉이 선생님 호호가 밤 학교를 열었어요. "자, 오늘은 무엇을 배울까?"',
          en: 'Hoho the owl teacher opened the night school. "Now, what shall we learn today?"',
        },
        illustration: 'owl-school',
        bgColor: '#311B92',
      },
      {
        text: {
          ko: '반딧불이 빛이가 말했어요. "저는 노래를 못해서 속상해요..."',
          en: 'Biti the firefly said, "I\'m sad because I can\'t sing..."',
        },
        illustration: 'sad-firefly',
        bgColor: '#4527A0',
      },
      {
        text: {
          ko: '"하지만 빛이야, 너는 어둠 속에서 빛날 수 있잖아!" 호호 선생님이 말했어요.',
          en: '"But Biti, you can glow in the dark!" said teacher Hoho.',
        },
        illustration: 'glowing-firefly',
        bgColor: '#283593',
      },
      {
        text: {
          ko: '귀뚜라미 노래가 말했어요. "저는 빛나지 못해서 부러워요."',
          en: 'Norae the cricket said, "I\'m jealous because I can\'t glow."',
        },
        illustration: 'cricket',
        bgColor: '#1A237E',
      },
      {
        text: {
          ko: '"노래야, 너의 노래는 숲의 자장가란다!" 정말로, 동물 친구들이 노래에 맞춰 잠들었어요.',
          en: '"Norae, your song is the lullaby of the forest!" And truly, the animals fell asleep to the song.',
        },
        illustration: 'lullaby',
        bgColor: '#0D47A1',
      },
      {
        text: {
          ko: '"우리 모두 다른 재능이 있어. 그게 바로 특별한 거야!" 모두가 고개를 끄덕였어요.',
          en: '"We all have different talents. That\'s what makes us special!" Everyone nodded.',
        },
        illustration: 'all-special',
        bgColor: '#1565C0',
      },
    ],
  },
  {
    id: 'duck-rain',
    title: {
      ko: '아기 오리의 비 오는 날',
      en: "Little Duck's Rainy Day",
    },
    subtitle: {
      ko: '비가 와도 즐거워!',
      en: 'Rainy days are fun too!',
    },
    coverColor: '#B2DFDB',
    coverEmoji: '🐥',
    pages: [
      {
        text: {
          ko: '아기 오리 꽥꽥이는 비 오는 날이 싫었어요. "밖에 못 나가잖아!"',
          en: 'Quack-Quack the little duck hated rainy days. "I can\'t go outside!"',
        },
        illustration: 'duck-window',
        bgColor: '#E0F7FA',
      },
      {
        text: {
          ko: '그런데 엄마 오리가 말했어요. "꽥꽥아, 비를 한번 만나보렴."',
          en: 'But Mama Duck said, "Quack-Quack, why don\'t you go meet the rain?"',
        },
        illustration: 'mama-duck',
        bgColor: '#B2EBF2',
      },
      {
        text: {
          ko: '꽥꽥이가 밖에 나가니 빗방울이 머리 위에서 톡톡톡! 간지러웠어요.',
          en: 'When Quack-Quack went outside, raindrops went pitter-patter on his head! It was ticklish.',
        },
        illustration: 'duck-rain-drops',
        bgColor: '#80DEEA',
      },
      {
        text: {
          ko: '물웅덩이를 첨벙첨벙! 개구리 친구도 함께 놀았어요. "비 오는 날 최고!"',
          en: 'Splash splash in the puddles! A frog friend played along. "Rainy days are the best!"',
        },
        illustration: 'puddle-jump',
        bgColor: '#4DD0E1',
      },
      {
        text: {
          ko: '비가 그치고 무지개가 떴어요! "우와, 세상에서 제일 예쁘다!"',
          en: 'The rain stopped and a rainbow appeared! "Wow, it\'s the prettiest thing in the world!"',
        },
        illustration: 'rainbow',
        bgColor: '#E8F5E9',
      },
      {
        text: {
          ko: '그날부터 꽥꽥이는 비 오는 날이 가장 좋아졌답니다. 첨벙첨벙!',
          en: 'From that day on, Quack-Quack loved rainy days the most. Splash splash!',
        },
        illustration: 'happy-duck',
        bgColor: '#E0F7FA',
      },
    ],
  },
];
