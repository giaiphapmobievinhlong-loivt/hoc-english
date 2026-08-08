import { Context } from '../types';

export const basicIntroContext: Context = {
  id: 'basic-intro',
  title: 'Basic Introduction',
  titleVi: 'Giới thiệu cơ bản',
  description: 'Learn to introduce yourself confidently — your name, age, hometown, and what you do.',
  descriptionVi: 'Học cách tự giới thiệu bản thân tự tin — tên, tuổi, quê hương và công việc của bạn.',
  icon: '👋',
  level: 1,
  phrases: [
    { id: 'bi-1', english: "Hi! My name is Minh. It's great to meet you.", vietnamese: 'Xin chào! Tên tôi là Minh. Rất vui được gặp bạn.', phonetic: '/haɪ/ /maɪ/ /neɪm/ /ɪz/ /miːn/', category: 'greeting' },
    { id: 'bi-2', english: "I'm from Vinh Long originally, but I've been living in Ho Chi Minh City for about three years.", vietnamese: 'Tôi gốc từ Vĩnh Long, nhưng đã sống ở TP Hồ Chí Minh khoảng ba năm.', phonetic: '/aɪm/ /frɒm/ /vɪŋ/ /lɒŋ/ /ˈɔːrɪdʒɪnəli/', category: 'background' },
    { id: 'bi-3', english: "I'm 29 years old.", vietnamese: 'Tôi 29 tuổi.', phonetic: '/aɪm/ /ˈtwenti naɪn/ /jɪərz/ /oʊld/', category: 'background' },
    { id: 'bi-4', english: "I run a small bubble tea business — I'm the owner and manager.", vietnamese: 'Tôi điều hành một doanh nghiệp trà sữa nhỏ — tôi là chủ sở hữu và quản lý.', phonetic: '/aɪ/ /rʌn/ /ə/ /smɔːl/ /ˈbɪznɪs/', category: 'work' },
    { id: 'bi-5', english: "I'm currently single.", vietnamese: 'Tôi hiện đang độc thân.', phonetic: '/aɪm/ /ˈkʌrəntli/ /ˈsɪŋɡəl/', category: 'background' },
    { id: 'bi-6', english: "My first language is Vietnamese, but I'm working on my English.", vietnamese: 'Tiếng mẹ đẻ của tôi là tiếng Việt, nhưng tôi đang trau dồi tiếng Anh.', phonetic: '/maɪ/ /fɜːrst/ /ˈlæŋɡwɪdʒ/ /ɪz/ /ˌvjetnəˈmiːz/', category: 'language' },
    { id: 'bi-7', english: "I'd describe myself as hardworking, creative, and a little bit of a perfectionist.", vietnamese: 'Tôi tự mô tả bản thân là người chăm chỉ, sáng tạo và hơi cầu toàn một chút.', phonetic: '/aɪd/ /dɪˈskraɪb/ /maɪˌself/', category: 'personality' },
    { id: 'bi-8', english: "I'm a morning person. My day usually starts at 6 AM.", vietnamese: 'Tôi là người thích buổi sáng. Ngày của tôi thường bắt đầu lúc 6 giờ sáng.', phonetic: '/aɪm/ /ə/ /ˈmɔːrnɪŋ/ /ˈpɜːrsən/', category: 'lifestyle' },
    { id: 'bi-9', english: "Please feel free to call me Minh.", vietnamese: 'Xin hãy thoải mái gọi tôi là Minh.', phonetic: '/pliːz/ /fiːl/ /friː/ /tuː/ /kɔːl/ /miː/', category: 'greeting' },
    { id: 'bi-10', english: "What do you do for a living?", vietnamese: 'Bạn làm nghề gì để kiếm sống?', phonetic: '/wɒt/ /duː/ /juː/ /duː/ /fɔːr/ /ə/ /ˈlɪvɪŋ/', category: 'greeting' },
    { id: 'bi-11', english: "Where are you from originally?", vietnamese: 'Bạn gốc từ đâu vậy?', phonetic: '/weər/ /ɑːr/ /juː/ /frɒm/ /əˈrɪdʒɪnəli/', category: 'greeting' },
    { id: 'bi-12', english: "How long have you been living here?", vietnamese: 'Bạn đã sống ở đây bao lâu rồi?', phonetic: '/haʊ/ /lɒŋ/ /hæv/ /juː/ /biːn/ /ˈlɪvɪŋ/ /hɪər/', category: 'background' },
  ],
  dialogs: [
    {
      id: 'bid-1',
      title: 'First Meeting at a Networking Event',
      titleVi: 'Gặp lần đầu tại sự kiện giao lưu',
      situation: 'You attend a local business networking event and meet someone new',
      situationVi: 'Bạn tham dự sự kiện giao lưu kinh doanh và gặp người mới',
      level: 1,
      lines: [
        { speaker: 'other', speakerLabel: 'Linh', text: "Hi there! I don't think we've met before. I'm Linh.", vietnamese: 'Xin chào! Tôi nghĩ chúng ta chưa gặp nhau. Tôi là Linh.' },
        { speaker: 'you', speakerLabel: 'You', text: "Hi Linh! Nice to meet you. My name is Minh — Nguyen Van Minh.", vietnamese: 'Xin chào Linh! Rất vui được gặp bạn. Tôi tên Minh — Nguyễn Văn Minh.' },
        { speaker: 'other', speakerLabel: 'Linh', text: "Great to meet you, Minh! So what brings you to this event?", vietnamese: 'Rất vui được gặp bạn, Minh! Vậy điều gì đưa bạn đến sự kiện này?' },
        { speaker: 'you', speakerLabel: 'You', text: "I run a bubble tea shop in District 1, so I'm always looking to meet other business owners and learn from them. What about you?", vietnamese: 'Tôi điều hành một quán trà sữa ở Quận 1, nên tôi luôn muốn gặp gỡ các chủ doanh nghiệp khác và học hỏi. Còn bạn thì sao?' },
        { speaker: 'other', speakerLabel: 'Linh', text: "I'm a freelance graphic designer — mostly food and beverage brands, actually.", vietnamese: 'Tôi là nhà thiết kế đồ họa tự do — chủ yếu là các thương hiệu thực phẩm và đồ uống.' },
        { speaker: 'you', speakerLabel: 'You', text: "What a coincidence! I've been looking for a designer to help with our new packaging. Where are you originally from, Linh?", vietnamese: 'Thật trùng hợp! Tôi đang tìm nhà thiết kế để giúp với bao bì mới. Bạn gốc từ đâu, Linh?' },
        { speaker: 'other', speakerLabel: 'Linh', text: "I'm from Da Nang but I've been here for five years. And you?", vietnamese: 'Tôi từ Đà Nẵng nhưng đã ở đây năm năm rồi. Còn bạn?' },
        { speaker: 'you', speakerLabel: 'You', text: "I'm from Vinh Long in the Mekong Delta. I moved to Ho Chi Minh City three years ago to open the shop. Do you have a card?", vietnamese: 'Tôi từ Vĩnh Long ở đồng bằng sông Cửu Long. Tôi chuyển đến TP HCM ba năm trước để mở quán. Bạn có danh thiếp không?' },
        { speaker: 'other', speakerLabel: 'Linh', text: "Of course! Here you go. I'd love to hear more about what you're looking for.", vietnamese: 'Tất nhiên! Đây nhé. Tôi rất muốn nghe thêm về những gì bạn cần.' },
        { speaker: 'you', speakerLabel: 'You', text: "Perfect. Here's mine too. Can I contact you early next week?", vietnamese: 'Tuyệt. Đây là danh thiếp của tôi. Tôi có thể liên hệ với bạn đầu tuần tới không?' },
      ],
      keyPoints: ['Introducing yourself with full name', 'Explaining what you do', 'Asking questions to keep the conversation going', 'Exchanging contact details'],
    },
    {
      id: 'bid-2',
      title: 'Chatting with a Foreign Tourist',
      titleVi: 'Trò chuyện với khách du lịch nước ngoài',
      situation: 'A foreign tourist visits your bubble tea shop and starts a friendly conversation',
      situationVi: 'Một khách du lịch nước ngoài ghé quán và bắt đầu trò chuyện thân thiện',
      level: 1,
      lines: [
        { speaker: 'other', speakerLabel: 'Tourist', text: "Wow, this place is really nice! Did you design it yourself?", vietnamese: 'Ồ, quán này thật đẹp! Bạn tự thiết kế à?' },
        { speaker: 'you', speakerLabel: 'You', text: "Thank you so much! Yes, I did most of the decorating myself. I'm Minh — I'm the owner.", vietnamese: 'Cảm ơn bạn rất nhiều! Vâng, tôi tự trang trí phần lớn. Tôi là Minh — tôi là chủ quán.' },
        { speaker: 'other', speakerLabel: 'Tourist', text: "Oh nice! How long have you been running it?", vietnamese: 'Ồ tuyệt! Bạn đã điều hành được bao lâu rồi?' },
        { speaker: 'you', speakerLabel: 'You', text: "About three years now. It's been a lot of hard work but I love it. Where are you from, if you don't mind me asking?", vietnamese: 'Khoảng ba năm rồi. Rất vất vả nhưng tôi yêu thích nó. Bạn từ đâu đến, nếu không phiền?' },
        { speaker: 'other', speakerLabel: 'Tourist', text: "I'm from Australia — Sydney. I'm here on holiday for two weeks. Your English is really good, by the way!", vietnamese: 'Tôi từ Úc — Sydney. Tôi đang nghỉ ở đây hai tuần. Tiếng Anh của bạn thực sự rất tốt!' },
        { speaker: 'you', speakerLabel: 'You', text: "Thank you! I've been studying for about two years. I still have a lot to learn. What do you think of Vietnam so far?", vietnamese: 'Cảm ơn! Tôi đã học khoảng hai năm. Vẫn còn nhiều điều cần học. Bạn thấy Việt Nam thế nào cho đến nay?' },
        { speaker: 'other', speakerLabel: 'Tourist', text: "I love it! The food is incredible and everyone is so friendly. Any recommendations for Ho Chi Minh City?", vietnamese: 'Tôi yêu lắm! Đồ ăn tuyệt và mọi người rất thân thiện. Bạn có gợi ý gì cho TP HCM không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Definitely the Ben Thanh Market area for street food, and the War Remnants Museum for history. And of course — come back for more bubble tea!", vietnamese: 'Chắc chắn khu chợ Bến Thành cho ẩm thực đường phố, và Bảo tàng Chứng tích Chiến tranh. Và tất nhiên — quay lại uống thêm trà sữa!' },
        { speaker: 'other', speakerLabel: 'Tourist', text: "Ha! I definitely will. Thanks for chatting, Minh. It was really nice to meet you.", vietnamese: 'Ha! Chắc chắn rồi. Cảm ơn vì trò chuyện, Minh. Thật vui khi gặp bạn.' },
        { speaker: 'you', speakerLabel: 'You', text: "It was great to meet you too! Enjoy the rest of your trip!", vietnamese: 'Rất vui khi gặp bạn! Chúc bạn thưởng thức phần còn lại của chuyến đi!' },
      ],
      keyPoints: ['Talking about yourself naturally', 'Sharing your story', 'Asking questions politely', 'Giving local recommendations'],
    },
    {
      id: 'bid-3',
      title: 'Introducing Yourself at English Class',
      titleVi: 'Tự giới thiệu tại lớp học tiếng Anh',
      situation: "It's your first day at an English speaking class and the teacher asks you to introduce yourself",
      situationVi: 'Ngày đầu tiên tại lớp tiếng Anh, giáo viên yêu cầu bạn tự giới thiệu',
      level: 1,
      lines: [
        { speaker: 'other', speakerLabel: 'Teacher', text: "OK everyone, let's go around the room. Tell us your name, what you do, and one fun fact. Who wants to go first?", vietnamese: 'OK mọi người, hãy cùng giới thiệu. Cho chúng tôi biết tên, công việc và một điều thú vị. Ai muốn đi trước?' },
        { speaker: 'you', speakerLabel: 'You', text: "I'll go! My name is Minh — Nguyen Van Minh. I'm 29 and I own a bubble tea shop in District 1 called Boba Heaven.", vietnamese: 'Tôi sẽ đi trước! Tên tôi là Minh — Nguyễn Văn Minh. Tôi 29 tuổi và tôi sở hữu quán trà sữa ở Quận 1 tên Boba Heaven.' },
        { speaker: 'other', speakerLabel: 'Teacher', text: "Great! Where are you from originally, Minh?", vietnamese: 'Tuyệt! Bạn gốc từ đâu, Minh?' },
        { speaker: 'you', speakerLabel: 'You', text: "I'm from Vinh Long Province, in the Mekong Delta. I've been living in Ho Chi Minh City for three years now.", vietnamese: 'Tôi từ tỉnh Vĩnh Long, đồng bằng sông Cửu Long. Tôi đã sống ở TP HCM được ba năm.' },
        { speaker: 'other', speakerLabel: 'Teacher', text: "And what's your fun fact?", vietnamese: 'Và điều thú vị về bạn là gì?' },
        { speaker: 'you', speakerLabel: 'You', text: "My fun fact is that I can make over 35 different bubble tea recipes from memory — without looking at any notes!", vietnamese: 'Điều thú vị của tôi là tôi có thể pha trên 35 loại trà sữa khác nhau từ trí nhớ — không cần nhìn ghi chú nào!' },
        { speaker: 'other', speakerLabel: 'Teacher', text: "Impressive! Why are you studying English, Minh?", vietnamese: 'Ấn tượng! Tại sao bạn học tiếng Anh, Minh?' },
        { speaker: 'you', speakerLabel: 'You', text: "I have many foreign customers, and I want to communicate with them better. I also want to grow my business internationally, so good English is really important to me.", vietnamese: 'Tôi có nhiều khách nước ngoài và muốn giao tiếp tốt hơn. Tôi cũng muốn phát triển kinh doanh quốc tế, nên tiếng Anh tốt rất quan trọng với tôi.' },
        { speaker: 'other', speakerLabel: 'Teacher', text: "That's a wonderful goal. Welcome to the class, Minh!", vietnamese: 'Đó là mục tiêu tuyệt vời. Chào mừng đến với lớp, Minh!' },
        { speaker: 'you', speakerLabel: 'You', text: "Thank you! I'm a little nervous but very excited. I'm looking forward to practising with everyone here.", vietnamese: 'Cảm ơn! Tôi hơi hồi hộp nhưng rất hứng thú. Tôi mong được luyện tập cùng mọi người.' },
      ],
      keyPoints: ["Stating name, age and occupation clearly", "Sharing where you're from", "Adding personality with a fun fact", "Explaining your motivation for learning"],
    },
  ],
  vocabulary: [
    { id: 'biv-1', word: 'originally', partOfSpeech: 'adverb', definition: "Where someone or something comes from at the start", definitionVi: 'Ban đầu; xuất xứ từ đâu', example: "I'm originally from Vinh Long.", exampleVi: 'Tôi gốc từ Vĩnh Long.', phonetic: '/əˈrɪdʒɪnəli/' },
    { id: 'biv-2', word: 'occupation', partOfSpeech: 'noun', definition: "A person's job or profession", definitionVi: 'Nghề nghiệp', example: 'My occupation is business owner.', exampleVi: 'Nghề nghiệp của tôi là chủ doanh nghiệp.', phonetic: '/ˌɒkjuˈpeɪʃən/' },
    { id: 'biv-3', word: 'currently', partOfSpeech: 'adverb', definition: 'At the present time; now', definitionVi: 'Hiện tại; bây giờ', example: "I'm currently living in District 1.", exampleVi: 'Hiện tôi đang sống ở Quận 1.', phonetic: '/ˈkʌrəntli/' },
    { id: 'biv-4', word: 'fluent', partOfSpeech: 'adjective', definition: 'Able to speak a language smoothly and easily', definitionVi: 'Thông thạo (ngôn ngữ)', example: "I'm not yet fluent in English, but I'm improving.", exampleVi: 'Tôi chưa thông thạo tiếng Anh nhưng đang cải thiện dần.', phonetic: '/ˈfluːənt/' },
    { id: 'biv-5', word: 'coincidence', partOfSpeech: 'noun', definition: 'When two things happen at the same time by chance', definitionVi: 'Sự trùng hợp ngẫu nhiên', example: "What a coincidence — we both work in the food industry!", exampleVi: 'Thật trùng hợp — chúng ta đều làm trong ngành thực phẩm!', phonetic: '/koʊˈɪnsɪdəns/' },
    { id: 'biv-6', word: 'perfectionist', partOfSpeech: 'noun', definition: 'A person who wants everything to be done perfectly', definitionVi: 'Người cầu toàn', example: "I'm a bit of a perfectionist when it comes to my recipes.", exampleVi: 'Tôi hơi cầu toàn khi nói về công thức của mình.', phonetic: '/pəˈfekʃənɪst/' },
  ],
  readingPassages: [
    {
      id: 'bi-read-1',
      title: '"About Me" — Personal Blog Introduction',
      titleVi: '"Về tôi" — Giới thiệu blog cá nhân',
      content: `Hi, I'm Minh! 👋

Welcome to my blog. Here's a quick introduction so you know who's behind this page.

WHO I AM
My full name is Nguyen Van Minh. I'm 29 years old and I live in Ho Chi Minh City, Vietnam — though I grew up in Vinh Long Province in the Mekong Delta. I moved to the city three years ago to chase my dream of starting a business.

WHAT I DO
I'm the owner of Boba Heaven, a bubble tea shop in District 1. I started it from scratch with my savings and a lot of passion. It wasn't easy, but seeing customers smile after their first sip makes it all worth it. We now serve over 400 drinks a day and I couldn't be prouder of what the team has built.

WHY I STARTED THIS BLOG
I'm learning English! I've been studying for about two years and I wanted a place to practise my writing. I'll be posting about running a small business, life in Ho Chi Minh City, and my English learning journey.

A FEW THINGS ABOUT ME
- I'm a morning person. My day starts at 6 AM.
- I describe myself as hardworking, a bit of a perfectionist, and very passionate about what I do.
- I love trying new foods and visiting local markets on my day off.
- My goal is to speak English confidently enough to pitch Boba Heaven to international investors one day.

Thanks for visiting — I hope you'll stick around! 🧋`,
      questions: [
        { question: 'Where did Minh grow up?', options: ['Ho Chi Minh City', 'Hanoi', 'Vinh Long Province', 'Da Nang'], correctIndex: 2, explanation: '"I grew up in Vinh Long Province in the Mekong Delta."' },
        { question: 'Why did Minh start this blog?', options: ['To promote his business', 'To practise his English writing', 'To share recipes', 'To find investors'], correctIndex: 1, explanation: '"I\'m learning English! I wanted a place to practise my writing."' },
        { question: 'How many drinks does Boba Heaven serve per day?', options: ['100', '200', '300', 'Over 400'], correctIndex: 3, explanation: '"We now serve over 400 drinks a day."' },
        { question: "What is Minh's long-term goal with English?", options: ['To travel to Australia', 'To teach English', 'To pitch Boba Heaven to international investors', 'To write a book'], correctIndex: 2, explanation: '"My goal is to speak English confidently enough to pitch Boba Heaven to international investors one day."' },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'biw-1',
      title: 'Write an "About Me" Paragraph',
      titleVi: 'Viết đoạn "Về tôi"',
      instructions: "Write a short 'About Me' paragraph (80–120 words) for your personal website. Include: your name, age, where you're from, what you do for work, and one personal detail (a hobby, goal, or personality trait).",
      instructionsVi: "Viết đoạn 'Về tôi' ngắn (80–120 từ) cho website cá nhân. Bao gồm: tên, tuổi, quê hương, công việc và một chi tiết cá nhân (sở thích, mục tiêu hoặc tính cách).",
      sampleAnswer: `Hi, my name is Minh — Nguyen Van Minh. I'm 29 years old and I currently live in Ho Chi Minh City, though I originally come from Vinh Long Province in the Mekong Delta.

I'm the owner of Boba Heaven, a bubble tea shop that I started from scratch three years ago. Running a small business is challenging but incredibly rewarding.

Outside of work, I'm passionate about learning English so I can connect better with our international customers and grow the business beyond Vietnam one day. I'd describe myself as hardworking, creative, and always looking for ways to improve.

Nice to meet you! 👋`,
      keyPhrases: ['originally from', 'currently live', 'from scratch', 'passionate about', 'hardworking', 'describe myself as'],
    },
    {
      id: 'biw-2',
      title: 'Write a Follow-Up Email After Meeting Someone',
      titleVi: 'Viết email sau khi gặp gỡ ai đó',
      instructions: 'You met a graphic designer named Linh at a networking event. Write the opening paragraph of a follow-up email introducing yourself and reminding her where you met.',
      instructionsVi: 'Bạn gặp một nhà thiết kế tên Linh tại sự kiện giao lưu. Hãy viết đoạn mở đầu email giới thiệu bản thân và nhắc lại nơi gặp nhau.',
      sampleAnswer: `Dear Linh,

It was a pleasure meeting you at the Ho Chi Minh City Business Networking event last Thursday. In case you met many people that evening — I'm Minh, the bubble tea shop owner from District 1 who was interested in your graphic design work for our new product packaging.

I'm reaching out because I'd love to explore a potential collaboration. I think your experience in the food and beverage sector would be a great fit for what we're looking for at Boba Heaven.

Would you be available for a brief call this week?

Kind regards,
Minh`,
      keyPhrases: ['It was a pleasure meeting you', 'In case you met many people', "I'm reaching out", 'explore a potential collaboration', 'great fit', 'available for a brief call'],
    },
  ],
};
