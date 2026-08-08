import { Context } from '../types';

export const familyBackgroundContext: Context = {
  id: 'family-background',
  title: 'Family & Background',
  titleVi: 'Gia đình & Quê hương',
  description: 'Talk about your family members, where you grew up, and your background.',
  descriptionVi: 'Nói về các thành viên gia đình, nơi bạn lớn lên và xuất thân của bạn.',
  icon: '🏡',
  level: 1,
  phrases: [
    { id: 'fb-1', english: "I come from a family of five — my parents and two younger siblings.", vietnamese: 'Tôi đến từ gia đình năm người — bố mẹ và hai anh chị em nhỏ hơn.', phonetic: '/aɪ/ /kʌm/ /frɒm/ /ə/ /ˈfæmɪli/ /əv/ /faɪv/', category: 'family' },
    { id: 'fb-2', english: "I'm the eldest child in my family.", vietnamese: 'Tôi là con cả trong gia đình.', phonetic: '/aɪm/ /ðə/ /ˈeldɪst/ /tʃaɪld/', category: 'family' },
    { id: 'fb-3', english: "My parents run a small street food stall back in Vinh Long.", vietnamese: 'Bố mẹ tôi điều hành một quầy thức ăn đường phố nhỏ ở Vĩnh Long.', phonetic: '/maɪ/ /ˈpeərənts/ /rʌn/ /ə/ /smɔːl/ /striːt/ /fuːd/ /stɔːl/', category: 'family' },
    { id: 'fb-4', english: "My mother is an amazing cook — she's the reason I love food so much.", vietnamese: 'Mẹ tôi là người nấu ăn tuyệt vời — đó là lý do tôi yêu thích đồ ăn đến vậy.', phonetic: '/maɪ/ /ˈmʌðər/ /ɪz/ /æn/ /əˈmeɪzɪŋ/ /kʊk/', category: 'family' },
    { id: 'fb-5', english: "My father worked very hard to support our family — he's my role model.", vietnamese: 'Bố tôi làm việc rất chăm chỉ để lo cho gia đình — ông là hình mẫu của tôi.', phonetic: '/maɪ/ /ˈfɑːðər/ /wɜːrkt/ /ˈveri/ /hɑːrd/', category: 'family' },
    { id: 'fb-6', english: "We're a very close-knit family — we talk every day even though I live far away.", vietnamese: 'Chúng tôi là gia đình rất gắn kết — chúng tôi nói chuyện mỗi ngày dù tôi sống xa.', phonetic: '/wɪər/ /ə/ /ˈkloʊs nɪt/ /ˈfæmɪli/', category: 'family' },
    { id: 'fb-7', english: "I grew up in a small town, so moving to the city was a big adjustment.", vietnamese: 'Tôi lớn lên ở thị trấn nhỏ, nên chuyển đến thành phố là sự thích nghi lớn.', phonetic: '/aɪ/ /ɡruː/ /ʌp/ /ɪn/ /ə/ /smɔːl/ /taʊn/', category: 'background' },
    { id: 'fb-8', english: "My hometown is famous for its fresh tropical fruit and floating markets.", vietnamese: 'Quê tôi nổi tiếng với trái cây nhiệt đới tươi và chợ nổi.', phonetic: '/maɪ/ /ˈhoʊmtaʊn/ /ɪz/ /ˈfeɪməs/ /fɔːr/', category: 'background' },
    { id: 'fb-9', english: "Do you have any brothers or sisters?", vietnamese: 'Bạn có anh chị em không?', phonetic: '/duː/ /juː/ /hæv/ /ˈeni/ /ˈbrʌðərz/ /ɔːr/ /ˈsɪstərz/', category: 'questions' },
    { id: 'fb-10', english: "What do your parents do for work?", vietnamese: 'Bố mẹ bạn làm công việc gì?', phonetic: '/wɒt/ /duː/ /jər/ /ˈpeərənts/ /duː/ /fɔːr/ /wɜːrk/', category: 'questions' },
    { id: 'fb-11', english: "What was it like growing up in your hometown?", vietnamese: 'Lớn lên ở quê hương của bạn như thế nào?', phonetic: '/wɒt/ /wɒz/ /ɪt/ /laɪk/ /ˈɡroʊɪŋ/ /ʌp/', category: 'questions' },
    { id: 'fb-12', english: "My family inspired me to start my own business.", vietnamese: 'Gia đình đã truyền cảm hứng để tôi bắt đầu kinh doanh riêng.', phonetic: '/maɪ/ /ˈfæmɪli/ /ɪnˈspaɪərd/ /miː/ /tuː/ /stɑːrt/', category: 'background' },
  ],
  dialogs: [
    {
      id: 'fbd-1',
      title: 'Talking About Family with a New Friend',
      titleVi: 'Nói về gia đình với người bạn mới',
      situation: 'You\'re getting to know a new friend over coffee and the topic of family comes up',
      situationVi: 'Bạn đang làm quen với người bạn mới trong khi uống cà phê và chủ đề gia đình được đề cập',
      level: 1,
      lines: [
        { speaker: 'other', speakerLabel: 'Friend', text: "So Minh, do you have any family here in Ho Chi Minh City, or are they all back home?", vietnamese: 'Vậy Minh, bạn có gia đình ở đây ở TP HCM không, hay tất cả đều ở quê?' },
        { speaker: 'you', speakerLabel: 'You', text: "My immediate family is all in Vinh Long — my parents and my two younger siblings. I'm the eldest, so I was the first to leave.", vietnamese: 'Gia đình thân thiết của tôi đều ở Vĩnh Long — bố mẹ và hai em nhỏ. Tôi là con cả, nên là người đầu tiên rời đi.' },
        { speaker: 'other', speakerLabel: 'Friend', text: "Do you go back often?", vietnamese: 'Bạn có thường về không?' },
        { speaker: 'you', speakerLabel: 'You', text: "About once a month when business allows. I really miss the food and the slower pace of life there. My mum is an incredible cook — her braised pork is something I dream about!", vietnamese: 'Khoảng mỗi tháng một lần khi công việc cho phép. Tôi thực sự nhớ đồ ăn và nhịp sống chậm hơn ở đó. Mẹ tôi nấu ăn tuyệt vời — thịt kho của bà là thứ tôi hay mơ!' },
        { speaker: 'other', speakerLabel: 'Friend', text: "That's sweet! What do your parents do?", vietnamese: 'Thật cảm động! Bố mẹ bạn làm gì?' },
        { speaker: 'you', speakerLabel: 'You', text: "They run a small street food stall at the local market. They've been doing it for over 20 years. Watching them work so hard for something they owned was honestly what inspired me to start Boba Heaven.", vietnamese: 'Họ điều hành quầy thức ăn đường phố nhỏ ở chợ địa phương. Họ đã làm hơn 20 năm rồi. Nhìn họ làm việc chăm chỉ cho thứ họ sở hữu thực sự là điều truyền cảm hứng để tôi bắt đầu Boba Heaven.' },
        { speaker: 'other', speakerLabel: 'Friend', text: "That's beautiful. Are they proud of what you've built?", vietnamese: 'Thật đẹp. Họ có tự hào về những gì bạn xây dựng không?' },
        { speaker: 'you', speakerLabel: 'You', text: "I hope so! My dad doesn't say much but he came to visit the shop once and just nodded quietly and said 'not bad'. Coming from him, that's basically a standing ovation.", vietnamese: 'Tôi hy vọng vậy! Bố tôi không nói nhiều nhưng ông đến thăm quán một lần và chỉ gật đầu khẽ và nói "không tệ". Từ ông ấy, điều đó cơ bản là như được vỗ tay đứng dậy.' },
        { speaker: 'other', speakerLabel: 'Friend', text: "Ha! That's very Asian dad energy. What about your siblings?", vietnamese: 'Ha! Đó là phong cách bố châu Á điển hình. Còn các em bạn thì sao?' },
        { speaker: 'you', speakerLabel: 'You', text: "My sister is studying accounting at university and my younger brother is still in high school. I'm trying to convince them to join the business one day — we'll see!", vietnamese: 'Em gái tôi đang học kế toán ở đại học và em trai nhỏ vẫn đang ở trung học. Tôi đang cố thuyết phục họ tham gia kinh doanh một ngày nào đó — xem sao!' },
      ],
      keyPoints: ['Describing family members', 'Sharing family stories naturally', 'Connecting your background to your present', 'Using humour appropriately'],
    },
    {
      id: 'fbd-2',
      title: 'Describing Your Hometown to a Foreigner',
      titleVi: 'Mô tả quê hương cho người nước ngoài',
      situation: 'An overseas business partner asks about your hometown during a casual conversation',
      situationVi: 'Đối tác kinh doanh nước ngoài hỏi về quê hương trong cuộc trò chuyện bình thường',
      level: 1,
      lines: [
        { speaker: 'other', speakerLabel: 'Partner', text: "Minh, you mentioned you're not originally from Ho Chi Minh City. Where are you from?", vietnamese: 'Minh, bạn đề cập rằng bạn không phải gốc từ TP HCM. Bạn từ đâu?' },
        { speaker: 'you', speakerLabel: 'You', text: "I'm from Vinh Long — it's a province in the Mekong Delta, about 2 hours south-west of Ho Chi Minh City.", vietnamese: 'Tôi từ Vĩnh Long — đó là tỉnh ở đồng bằng sông Cửu Long, khoảng 2 giờ về phía tây nam của TP HCM.' },
        { speaker: 'other', speakerLabel: 'Partner', text: "I've never been there. What's it like?", vietnamese: 'Tôi chưa bao giờ đến đó. Nơi đó như thế nào?' },
        { speaker: 'you', speakerLabel: 'You', text: "It's beautiful — very green and peaceful. It's famous for its floating markets, tropical fruit orchards, and river life. Very different from the busy city! People there are very warm and generous.", vietnamese: 'Rất đẹp — xanh mát và yên bình. Nổi tiếng với chợ nổi, vườn cây ăn trái nhiệt đới và cuộc sống sông nước. Rất khác so với thành phố nhộn nhịp! Người dân ở đó rất ấm áp và rộng lượng.' },
        { speaker: 'other', speakerLabel: 'Partner', text: "Sounds lovely. Do you miss it?", vietnamese: 'Nghe thật tuyệt. Bạn có nhớ không?' },
        { speaker: 'you', speakerLabel: 'You', text: "All the time! I miss the fresh fruit especially — nothing in the city tastes like fruit picked straight from the tree. And the people. And the food. Actually, I miss almost everything!", vietnamese: 'Lúc nào cũng nhớ! Tôi đặc biệt nhớ trái cây tươi — không có gì ở thành phố ngon như trái cây hái thẳng từ cây. Và con người. Và đồ ăn. Thực ra, tôi nhớ gần như mọi thứ!' },
        { speaker: 'other', speakerLabel: 'Partner', text: "If you hadn't moved to Ho Chi Minh City, what do you think you'd be doing?", vietnamese: 'Nếu bạn không chuyển đến TP HCM, bạn nghĩ bạn sẽ làm gì?' },
        { speaker: 'you', speakerLabel: 'You', text: "Honestly? Probably helping my parents at their food stall and maybe growing it into something bigger. The entrepreneurial spirit was always there — I just found a different way to express it.", vietnamese: 'Thật lòng? Có lẽ giúp bố mẹ ở quầy thức ăn và có thể phát triển thành thứ gì đó lớn hơn. Tinh thần kinh doanh lúc nào cũng có — tôi chỉ tìm ra cách khác để thể hiện nó.' },
        { speaker: 'other', speakerLabel: 'Partner', text: "You should take me there some time — I'd love to see where you come from.", vietnamese: 'Bạn nên đưa tôi đến đó một ngày nào đó — tôi rất muốn thấy nơi bạn lớn lên.' },
        { speaker: 'you', speakerLabel: 'You', text: "I'd love that! The best time to visit is around February after Tet — the fruit is unbelievable and the river markets are magical in the morning.", vietnamese: 'Tôi rất muốn vậy! Thời gian tốt nhất để thăm là khoảng tháng Hai sau Tết — trái cây thật tuyệt và chợ sông vào buổi sáng rất huyền ảo.' },
      ],
      keyPoints: ['Describing your hometown vividly', 'Expressing nostalgia naturally', 'Connecting your roots to your identity', 'Inviting others to learn about your culture'],
    },
    {
      id: 'fbd-3',
      title: 'Video Call with Parents',
      titleVi: 'Gọi video với bố mẹ',
      situation: 'You show a foreign friend or colleague what a typical family video call looks like',
      situationVi: 'Bạn mô tả cho người bạn hoặc đồng nghiệp nước ngoài về cuộc gọi video gia đình thông thường',
      level: 1,
      lines: [
        { speaker: 'other', speakerLabel: 'Colleague', text: "Minh, I hear your parents are visiting the city next weekend! Are you excited?", vietnamese: 'Minh, tôi nghe bố mẹ bạn sẽ đến thành phố cuối tuần tới! Bạn có hào hứng không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Very excited! And a little nervous — my mum will definitely notice everything that needs cleaning in my apartment.", vietnamese: 'Rất hào hứng! Và hơi lo — mẹ tôi chắc chắn sẽ nhận ra mọi thứ cần dọn dẹp trong căn hộ.' },
        { speaker: 'other', speakerLabel: 'Colleague', text: "Ha! Is it their first time visiting the shop?", vietnamese: 'Ha! Đây có phải lần đầu họ thăm quán không?' },
        { speaker: 'you', speakerLabel: 'You', text: "No, they came about a year ago. But it was only for one day. This time they're staying for three days, so I can show them around the city properly.", vietnamese: 'Không, họ đến khoảng một năm trước. Nhưng chỉ một ngày. Lần này họ ở ba ngày, nên tôi có thể dẫn họ tham quan thành phố đàng hoàng.' },
        { speaker: 'other', speakerLabel: 'Colleague', text: "What do they think of what you've built here?", vietnamese: 'Họ nghĩ gì về những gì bạn xây dựng ở đây?' },
        { speaker: 'you', speakerLabel: 'You', text: "My mum is openly proud — she tells everyone in our village about Boba Heaven. My dad is quieter but he asked me detailed questions about the finances last time, which is his way of showing he cares.", vietnamese: 'Mẹ tôi rõ ràng tự hào — bà kể cho mọi người trong làng về Boba Heaven. Bố tôi thầm lặng hơn nhưng lần trước ông hỏi tôi chi tiết về tài chính, đó là cách ông thể hiện quan tâm.' },
        { speaker: 'other', speakerLabel: 'Colleague', text: "That's really sweet. Are they the reason you started a food business?", vietnamese: 'Thật cảm động. Họ có phải là lý do bạn bắt đầu kinh doanh thực phẩm không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Absolutely. Growing up watching them run their food stall — the pride they took in what they made, how they treated every customer — that shaped everything about how I run Boba Heaven.", vietnamese: 'Chắc chắn rồi. Lớn lên nhìn họ điều hành quầy thức ăn — niềm tự hào với những gì họ làm, cách họ đối xử với từng khách hàng — điều đó định hình mọi thứ về cách tôi điều hành Boba Heaven.' },
        { speaker: 'other', speakerLabel: 'Colleague', text: "You should bring your mum into the kitchen one day — I bet she'd have amazing ideas.", vietnamese: 'Bạn nên đưa mẹ vào bếp một ngày nào đó — tôi chắc bà sẽ có nhiều ý tưởng tuyệt.' },
        { speaker: 'you', speakerLabel: 'You', text: "Ha! She already gave me feedback last time. She said our taro milk tea was 'almost as good' as hers. That's the highest compliment I've ever received.", vietnamese: 'Ha! Bà đã cho tôi phản hồi lần trước rồi. Bà nói trà sữa khoai môn của chúng tôi "gần bằng" của bà. Đó là lời khen cao nhất tôi từng nhận.' },
      ],
      keyPoints: ['Talking about parents warmly', 'Describing different parenting styles', 'Connecting family to your work values', 'Using humour in casual conversation'],
    },
  ],
  vocabulary: [
    { id: 'fbv-1', word: 'eldest', partOfSpeech: 'adjective', definition: 'The oldest among siblings or members of a group', definitionVi: 'Lớn nhất; con cả', example: "I'm the eldest of three children.", exampleVi: 'Tôi là con cả trong ba anh chị em.', phonetic: '/ˈeldɪst/' },
    { id: 'fbv-2', word: 'close-knit', partOfSpeech: 'adjective', definition: 'A group that shares strong bonds and spends a lot of time together', definitionVi: 'Gắn kết chặt chẽ; thân thiết', example: 'We are a very close-knit family.', exampleVi: 'Chúng tôi là gia đình rất gắn kết.', phonetic: '/ˈkloʊs nɪt/' },
    { id: 'fbv-3', word: 'sibling', partOfSpeech: 'noun', definition: 'A brother or sister', definitionVi: 'Anh chị em ruột', example: 'I have two younger siblings.', exampleVi: 'Tôi có hai em nhỏ.', phonetic: '/ˈsɪblɪŋ/' },
    { id: 'fbv-4', word: 'role model', partOfSpeech: 'noun', definition: 'A person who inspires others through their example', definitionVi: 'Hình mẫu; người truyền cảm hứng', example: 'My father is my biggest role model.', exampleVi: 'Bố tôi là hình mẫu lớn nhất của tôi.', phonetic: '/roʊl ˈmɒdəl/' },
    { id: 'fbv-5', word: 'nostalgia', partOfSpeech: 'noun', definition: 'A warm feeling of missing something from the past', definitionVi: 'Nỗi nhớ quê hương; hoài niệm', example: 'I feel nostalgia for the simple life in my hometown.', exampleVi: 'Tôi cảm thấy hoài niệm về cuộc sống đơn giản ở quê hương.', phonetic: '/nɒˈstældʒə/' },
    { id: 'fbv-6', word: 'entrepreneurial spirit', partOfSpeech: 'noun phrase', definition: 'The attitude and mindset of someone driven to build their own business', definitionVi: 'Tinh thần kinh doanh; tinh thần khởi nghiệp', example: 'My parents gave me the entrepreneurial spirit.', exampleVi: 'Bố mẹ đã truyền cho tôi tinh thần kinh doanh.', phonetic: '/ˌɒntrəprəˈnɜːriəl ˈspɪrɪt/' },
  ],
  readingPassages: [
    {
      id: 'fb-read-1',
      title: 'A Letter Home — Minh Writes to His Parents',
      titleVi: 'Thư gửi nhà — Minh viết cho bố mẹ',
      content: `Dear Mum and Dad,

I hope you are both well and that the stall has been busy. I know you don't like me to worry, but I think about you every day.

Life in Ho Chi Minh City has been going well. The shop had its best month yet in March — I wish I could show you the numbers in person, but I'll explain everything when you visit next weekend. I think you'll be proud.

Dad, I've been thinking about what you said last time — that a business is only as good as the people inside it. You were right. I've been investing more time in training our staff properly, and I can already see the difference. The team feels more confident and the customers notice it.

Mum, I'm sorry the apartment is still a little messy. I promise I'll clean before you arrive. Also — I've been trying to recreate your braised pork recipe. I think I'm getting closer, but it's still not the same. I don't know how you do it.

I miss Vinh Long often. Especially on Sunday mornings when I walk past the river and think about the floating market. There's nothing like it here.

Thank you for everything you gave me — the work ethic, the love of food, and the courage to try.

I'll see you both very soon.

With love,
Minh`,
      questions: [
        { question: "What was Minh's best business month?", options: ['January', 'February', 'March', 'April'], correctIndex: 2, explanation: '"The shop had its best month yet in March."' },
        { question: "What advice did Minh's dad give him on the last visit?", options: ['Focus on marketing', 'Hire more staff', 'A business is only as good as the people inside it', 'Save more money'], correctIndex: 2, explanation: '"Dad, I\'ve been thinking about what you said last time — that a business is only as good as the people inside it."' },
        { question: "What does Minh miss most about Vinh Long?", options: ['The food stall', 'His siblings', 'Sunday mornings and the floating market', 'The weather'], correctIndex: 2, explanation: '"I miss Vinh Long often. Especially on Sunday mornings when I walk past the river and think about the floating market."' },
        { question: "What three things does Minh thank his parents for?", options: ['Money, love, and education', 'Work ethic, love of food, and courage to try', 'Cooking skills, kindness, and support', 'Patience, wisdom, and faith'], correctIndex: 1, explanation: '"Thank you for everything you gave me — the work ethic, the love of food, and the courage to try."' },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'fbw-1',
      title: 'Write About Your Family',
      titleVi: 'Viết về gia đình của bạn',
      instructions: "Write a short paragraph (80–100 words) describing your family. Include: how many people are in your family, what each person does, and something special about one of them.",
      instructionsVi: 'Viết đoạn văn ngắn (80–100 từ) mô tả gia đình của bạn. Bao gồm: có bao nhiêu người, công việc của từng người và điều đặc biệt về một trong số họ.',
      sampleAnswer: `I come from a family of five — my parents and two younger siblings. My father has run a street food stall in Vinh Long for over 20 years, and my mother is the chef behind it. She's an incredible cook and the real reason I fell in love with food.

My sister is studying accounting at university, and my younger brother is still in high school. We are a very close-knit family — even though I now live in Ho Chi Minh City, we talk every day.

My parents are my biggest role models. Their hard work and pride in what they do inspired me to start Boba Heaven.`,
      keyPhrases: ['come from a family of', 'close-knit', 'role model', 'inspired me to', 'fell in love with', 'hard work'],
    },
    {
      id: 'fbw-2',
      title: 'Write a Postcard to Your Family',
      titleVi: 'Viết bưu thiếp cho gia đình',
      instructions: "Imagine you are travelling for work in another city. Write a short postcard (50–70 words) to your family describing where you are, what you're doing, and that you miss them.",
      instructionsVi: 'Hãy tưởng tượng bạn đang đi công tác ở thành phố khác. Hãy viết bưu thiếp ngắn (50–70 từ) cho gia đình mô tả bạn đang ở đâu, đang làm gì và bạn nhớ họ.',
      sampleAnswer: `Dear Mum, Dad and everyone,

Greetings from Da Nang! I'm here for a three-day business trip looking at possible locations for a new Boba Heaven branch. The city is beautiful — the beaches are stunning and the seafood is amazing (though nothing beats your cooking, Mum!).

I miss you all. See you next month.

Love,
Minh`,
      keyPhrases: ['Greetings from', 'business trip', 'possible locations', 'stunning', 'nothing beats', 'miss you all'],
    },
  ],
};
