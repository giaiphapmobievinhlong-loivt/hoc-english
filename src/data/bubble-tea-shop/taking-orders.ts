import { Context } from '../types';

export const takingOrdersContext: Context = {
  id: 'taking-orders',
  title: 'Taking Orders',
  titleVi: 'Nhận đơn hàng',
  description: 'Learn how to take customer orders confidently at the counter or over the phone.',
  descriptionVi: 'Học cách nhận đơn hàng từ khách tại quầy hoặc qua điện thoại.',
  icon: '🧋',
  level: 1,
  phrases: [
    {
      id: 'to-1',
      english: 'Welcome to [shop name]! What can I get for you today?',
      vietnamese: 'Chào mừng đến [tên quán]! Hôm nay bạn muốn dùng gì?',
      phonetic: '/ˈwelkəm/ /wɒt/ /kæn/ /aɪ/ /ɡet/ /fɔːr/ /juː/ /təˈdeɪ/',
      category: 'greeting',
    },
    {
      id: 'to-2',
      english: 'Hi there! Are you ready to order?',
      vietnamese: 'Chào bạn! Bạn đã sẵn sàng gọi chưa?',
      phonetic: '/haɪ/ /ðer/ /ɑːr/ /juː/ /ˈredi/ /tuː/ /ˈɔːrdər/',
      category: 'greeting',
    },
    {
      id: 'to-3',
      english: 'What size would you like — small, medium, or large?',
      vietnamese: 'Bạn muốn size nào — nhỏ, vừa, hay lớn?',
      phonetic: '/wɒt/ /saɪz/ /wʊd/ /juː/ /laɪk/',
      category: 'order',
    },
    {
      id: 'to-4',
      english: 'How much sugar would you like? We have 0%, 25%, 50%, 75%, or 100%.',
      vietnamese: 'Bạn muốn bao nhiêu đường? Chúng tôi có 0%, 25%, 50%, 75%, hoặc 100%.',
      phonetic: '/haʊ/ /mʌtʃ/ /ˈʃʊɡər/ /wʊd/ /juː/ /laɪk/',
      category: 'order',
    },
    {
      id: 'to-5',
      english: 'Would you like less ice, regular ice, or extra ice?',
      vietnamese: 'Bạn muốn ít đá, đá thường, hay nhiều đá?',
      phonetic: '/wʊd/ /juː/ /laɪk/ /les/ /aɪs/',
      category: 'order',
    },
    {
      id: 'to-6',
      english: 'Any toppings? We have tapioca pearls, coconut jelly, and pudding.',
      vietnamese: 'Bạn muốn thêm topping không? Chúng tôi có trân châu, thạch dừa và pudding.',
      phonetic: '/ˈeni/ /ˈtɒpɪŋz/',
      category: 'order',
    },
    {
      id: 'to-7',
      english: 'Is that for here or to go?',
      vietnamese: 'Bạn dùng tại chỗ hay mang về?',
      phonetic: '/ɪz/ /ðæt/ /fɔːr/ /hɪər/ /ɔːr/ /tuː/ /ɡoʊ/',
      category: 'order',
    },
    {
      id: 'to-8',
      english: 'Let me read that back to you — [repeat order]. Is that correct?',
      vietnamese: 'Cho phép tôi xác nhận lại — [nhắc lại order]. Đúng không ạ?',
      phonetic: '/let/ /miː/ /riːd/ /ðæt/ /bæk/ /tuː/ /juː/',
      category: 'confirm',
    },
    {
      id: 'to-9',
      english: "That'll be $5.50. How would you like to pay?",
      vietnamese: 'Tổng cộng là 5.50 đô. Bạn muốn thanh toán thế nào?',
      phonetic: '/ðæts/ /haʊ/ /wʊd/ /juː/ /laɪk/ /tuː/ /peɪ/',
      category: 'payment',
    },
    {
      id: 'to-10',
      english: "Your order will be ready in about 5 minutes. We'll call your name.",
      vietnamese: 'Đơn của bạn sẽ xong trong khoảng 5 phút. Chúng tôi sẽ gọi tên bạn.',
      phonetic: '/jɔːr/ /ˈɔːrdər/ /wɪl/ /biː/ /ˈredi/',
      category: 'confirm',
    },
    {
      id: 'to-11',
      english: "I'm sorry, we're out of that today. Can I suggest something similar?",
      vietnamese: 'Xin lỗi, hôm nay chúng tôi hết món đó. Tôi có thể gợi ý món tương tự không?',
      phonetic: '/aɪm/ /ˈsɒri/ /wɪər/ /aʊt/ /əv/ /ðæt/',
      category: 'apology',
    },
    {
      id: 'to-12',
      english: 'The brown sugar milk tea is very popular — would you like to try that instead?',
      vietnamese: 'Trà sữa đường đen rất được ưa chuộng — bạn có muốn thử không?',
      phonetic: '/ðə/ /braʊn/ /ˈʃʊɡər/ /mɪlk/ /tiː/',
      category: 'suggest',
    },
    {
      id: 'to-13',
      english: "Enjoy your drink! Have a great day!",
      vietnamese: 'Chúc bạn ngon miệng! Chúc bạn một ngày tốt lành!',
      phonetic: '/ɪnˈdʒɔɪ/ /jɔːr/ /drɪŋk/',
      category: 'farewell',
    },
    {
      id: 'to-14',
      english: 'Do you have a loyalty card with us?',
      vietnamese: 'Bạn có thẻ tích điểm của chúng tôi không?',
      phonetic: '/duː/ /juː/ /hæv/ /ə/ /ˈlɔɪəlti/ /kɑːrd/',
      category: 'loyalty',
    },
    {
      id: 'to-15',
      english: "That's one free drink after every 10 purchases!",
      vietnamese: 'Cứ mua 10 lần sẽ được 1 ly miễn phí!',
      phonetic: '/ðæts/ /wʌn/ /friː/ /drɪŋk/ /ˈɑːftər/ /ˈevri/',
      category: 'loyalty',
    },
  ],
  dialogs: [
    {
      id: 'tod-1',
      title: 'Simple Order',
      titleVi: 'Gọi đồ đơn giản',
      situation: 'A regular customer ordering their usual drink',
      situationVi: 'Khách quen gọi đồ uống thường ngày',
      level: 1,
      lines: [
        { speaker: 'you', speakerLabel: 'You (Staff)', text: 'Hi! What can I get for you today?', vietnamese: 'Bạn muốn dùng gì hôm nay?' },
        { speaker: 'other', speakerLabel: 'Customer', text: 'Can I have a medium matcha latte?', vietnamese: 'Cho tôi một ly matcha latte size vừa.' },
        { speaker: 'you', speakerLabel: 'You', text: 'Sure! Sugar and ice level?', vietnamese: 'Được ạ! Bạn muốn bao nhiêu đường và đá?' },
        { speaker: 'other', speakerLabel: 'Customer', text: '50% sugar and regular ice, please.', vietnamese: '50% đường và đá thường ạ.' },
        { speaker: 'you', speakerLabel: 'You', text: "Perfect, that's one medium matcha latte, 50% sugar, regular ice. That'll be $4.50!", vietnamese: 'Một ly matcha latte size vừa, 50% đường, đá thường. Tổng 4.50 đô ạ!' },
      ],
      keyPoints: ['Sugar level question', 'Ice level question', 'Order confirmation with price'],
    },
    {
      id: 'tod-2',
      title: 'First-time Customer',
      titleVi: 'Khách lần đầu tới',
      situation: 'A first-time customer who needs help choosing a drink',
      situationVi: 'Khách lần đầu đến, cần tư vấn chọn đồ uống',
      level: 2,
      lines: [
        { speaker: 'you', speakerLabel: 'You', text: 'Welcome! Are you ready to order or do you need a minute?', vietnamese: 'Chào bạn! Bạn sẵn sàng gọi chưa hay cần thêm thời gian?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Actually, this is my first time here. What do you recommend?", vietnamese: 'Thật ra đây là lần đầu tôi đến. Bạn có thể gợi ý không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Our best-seller is the brown sugar fresh milk tea — it's creamy and not too sweet. A lot of customers love it!", vietnamese: 'Món bán chạy nhất của chúng tôi là trà sữa tươi đường đen — vị béo và không quá ngọt. Rất nhiều khách thích đấy!' },
        { speaker: 'other', speakerLabel: 'Customer', text: "That sounds great! I'll try that.", vietnamese: 'Nghe hay đó! Tôi sẽ thử món đó.' },
        { speaker: 'you', speakerLabel: 'You', text: "Perfect! What size? We have small for $4, medium for $5, and large for $6.", vietnamese: 'Tuyệt! Size nào ạ? Nhỏ 4 đô, vừa 5 đô, lớn 6 đô.' },
        { speaker: 'other', speakerLabel: 'Customer', text: 'Medium, please.', vietnamese: 'Size vừa ạ.' },
        { speaker: 'you', speakerLabel: 'You', text: 'Sugar level? We go from 0% to 100%.', vietnamese: 'Lượng đường? Từ 0% đến 100% ạ.' },
        { speaker: 'other', speakerLabel: 'Customer', text: 'Maybe 75%?', vietnamese: 'Khoảng 75% được không?' },
        { speaker: 'you', speakerLabel: 'You', text: 'Sure! And ice — less, regular, or extra?', vietnamese: 'Được ạ! Đá thì ít, thường hay nhiều?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Regular is fine.", vietnamese: 'Đá thường thôi.' },
        { speaker: 'you', speakerLabel: 'You', text: "Any toppings? Tapioca pearls, jelly, or pudding? Toppings are $0.50 each.", vietnamese: 'Thêm topping không? Trân châu, thạch hay pudding? Mỗi loại thêm 0.50 đô ạ.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Tapioca pearls, please!", vietnamese: 'Thêm trân châu ạ!' },
        { speaker: 'you', speakerLabel: 'You', text: "Great choice! So that's one medium brown sugar fresh milk tea, 75% sugar, regular ice, tapioca pearls — $5.50 total. Name for the order?", vietnamese: 'Chọn hay đó! Vậy là một ly trà sữa tươi đường đen size vừa, 75% đường, đá thường, trân châu — tổng cộng 5.50 đô. Cho tôi xin tên ạ?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "It's Sarah.", vietnamese: 'Sarah ạ.' },
        { speaker: 'you', speakerLabel: 'You', text: "Got it, Sarah! Your drink will be ready in about 5 minutes. We'll call your name. Enjoy!", vietnamese: 'Rõ rồi, Sarah! Đồ của bạn xong khoảng 5 phút nữa. Chúng tôi sẽ gọi tên bạn nhé!' },
      ],
      keyPoints: ['Making recommendations', 'Full order taking flow', 'Topping upsell', 'Using customer name'],
    },
    {
      id: 'tod-3',
      title: 'Phone Order',
      titleVi: 'Đặt hàng qua điện thoại',
      situation: 'A customer calling to place a large order in advance',
      situationVi: 'Khách gọi điện đặt trước số lượng lớn',
      level: 3,
      lines: [
        { speaker: 'you', speakerLabel: 'You', text: "Hello, thank you for calling [Shop Name], this is Minh speaking. How can I help you?", vietnamese: 'Xin chào, cảm ơn đã gọi đến [Tên quán], tôi là Minh. Tôi có thể giúp gì cho bạn?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Hi, I'd like to pre-order 10 drinks for a team meeting tomorrow at 2pm.", vietnamese: 'Chào, tôi muốn đặt trước 10 ly cho buổi họp nhóm ngày mai lúc 2 giờ chiều.' },
        { speaker: 'you', speakerLabel: 'You', text: "Of course! I'd be happy to help with that. Could I get your name first?", vietnamese: 'Tất nhiên! Tôi rất vui được hỗ trợ. Cho tôi xin tên bạn trước nhé?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "It's Tom from ABC Company.", vietnamese: 'Tôi là Tom từ công ty ABC.' },
        { speaker: 'you', speakerLabel: 'You', text: "Thanks Tom! And what time would you like to pick up the order tomorrow?", vietnamese: 'Cảm ơn Tom! Bạn muốn đến lấy lúc mấy giờ ngày mai?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Around 1:45pm so we have time before the meeting.", vietnamese: 'Khoảng 1:45 chiều để chúng tôi có thời gian trước buổi họp.' },
        { speaker: 'you', speakerLabel: 'You', text: "Perfect. Now, what would you like to order?", vietnamese: 'Hoàn hảo. Bạn muốn gọi gì ạ?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Can we get a mix? Maybe 5 brown sugar milk teas and 5 taro milk teas, all large.", vietnamese: 'Chúng tôi muốn mix nhé? 5 ly trà sữa đường đen và 5 ly trà sữa khoai môn, tất cả size lớn.' },
        { speaker: 'you', speakerLabel: 'You', text: "Great! And for sugar and ice levels — would you like a standard setting of 50% sugar and regular ice for all of them?", vietnamese: 'Tuyệt! Còn đường và đá — bạn muốn cài mặc định 50% đường và đá thường cho tất cả không?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Yes, that works. And can you add tapioca pearls to all of them?", vietnamese: 'Ừ được. Và thêm trân châu vào tất cả được không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Absolutely! So that's 5 large brown sugar milk teas and 5 large taro milk teas, all 50% sugar, regular ice, with tapioca pearls. Total comes to $65. We'll have it ready by 1:45pm tomorrow. Can I get a contact number in case anything comes up?", vietnamese: 'Được ạ! Vậy là 5 ly trà sữa đường đen lớn và 5 ly trà sữa khoai môn lớn, tất cả 50% đường, đá thường, thêm trân châu. Tổng cộng 65 đô. Chúng tôi sẽ chuẩn bị xong lúc 1:45 chiều ngày mai. Cho tôi số điện thoại để liên hệ nếu cần nhé?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Sure, it's 0912 345 678.", vietnamese: '0912 345 678 ạ.' },
        { speaker: 'you', speakerLabel: 'You', text: "Got it. Thank you, Tom! We'll see you tomorrow at 1:45pm. Have a great day!", vietnamese: 'Ghi rồi ạ. Cảm ơn Tom! Hẹn gặp ngày mai lúc 1:45 chiều nhé. Chúc bạn ngày tốt lành!' },
      ],
      keyPoints: ['Professional phone manner', 'Large/bulk orders', 'Confirming details', 'Getting contact info'],
    },
  ],
  vocabulary: [
    { id: 'tv-1', word: 'tapioca pearls', partOfSpeech: 'noun', definition: 'Small chewy balls made from tapioca starch', definitionVi: 'Trân châu', example: 'Would you like tapioca pearls as a topping?', exampleVi: 'Bạn có muốn thêm trân châu không?', phonetic: '/ˌtæpiˈoʊkə pɜːrlz/' },
    { id: 'tv-2', word: 'topping', partOfSpeech: 'noun', definition: 'Extra ingredient added on top of a drink', definitionVi: 'Topping, nguyên liệu thêm vào', example: 'Toppings are $0.50 each.', exampleVi: 'Mỗi loại topping thêm 0.50 đô.', phonetic: '/ˈtɒpɪŋ/' },
    { id: 'tv-3', word: 'sugar level', partOfSpeech: 'noun', definition: 'The percentage of sweetness in your drink', definitionVi: 'Lượng đường', example: 'What sugar level would you like?', exampleVi: 'Bạn muốn bao nhiêu đường?', phonetic: '/ˈʃʊɡər ˈlevəl/' },
    { id: 'tv-4', word: 'best-seller', partOfSpeech: 'noun', definition: 'The most popular item that sells the most', definitionVi: 'Món bán chạy nhất', example: 'Our best-seller is the brown sugar milk tea.', exampleVi: 'Món bán chạy nhất là trà sữa đường đen.', phonetic: '/ˈbestˌselər/' },
    { id: 'tv-5', word: 'loyalty card', partOfSpeech: 'noun', definition: 'A card that rewards regular customers', definitionVi: 'Thẻ tích điểm', example: 'Do you have a loyalty card with us?', exampleVi: 'Bạn có thẻ tích điểm của chúng tôi không?', phonetic: '/ˈlɔɪəlti kɑːrd/' },
    { id: 'tv-6', word: 'pre-order', partOfSpeech: 'verb/noun', definition: 'To order something in advance before picking it up', definitionVi: 'Đặt trước', example: "I'd like to pre-order 10 drinks for tomorrow.", exampleVi: 'Tôi muốn đặt trước 10 ly cho ngày mai.', phonetic: '/priːˈɔːrdər/' },
    { id: 'tv-7', word: 'for here or to go', partOfSpeech: 'phrase', definition: 'Asking if the customer will eat/drink in the shop or take it away', definitionVi: 'Dùng tại chỗ hay mang về', example: 'Is that for here or to go?', exampleVi: 'Bạn dùng tại chỗ hay mang về?', phonetic: '/fɔːr hɪər ɔːr tuː ɡoʊ/' },
    { id: 'tv-8', word: 'read back', partOfSpeech: 'verb phrase', definition: 'To repeat information to confirm it is correct', definitionVi: 'Đọc lại để xác nhận', example: 'Let me read that back to you.', exampleVi: 'Cho tôi đọc lại để xác nhận.', phonetic: '/riːd bæk/' },
  ],
  readingPassages: [
    {
      id: 'tr-1',
      title: 'Our Menu & Ordering Guide',
      titleVi: 'Menu và hướng dẫn gọi đồ',
      content: `Welcome to Boba Heaven! Here's how to order your perfect drink.

**Step 1: Choose your drink**
We offer over 20 varieties including milk teas, fruit teas, and fresh milk series. Our best-sellers are Brown Sugar Fresh Milk Tea and Taro Milk Tea.

**Step 2: Pick your size**
- Small (16oz) — $4.00
- Medium (20oz) — $5.00
- Large (24oz) — $6.00

**Step 3: Customize your sweetness**
We offer 0%, 25%, 50%, 75%, and 100% sugar levels. Not sure? We recommend 50% for most drinks.

**Step 4: Choose your ice level**
Less ice, regular ice, or extra ice — it's up to you!

**Step 5: Add toppings** (optional, $0.50 each)
- Tapioca pearls (classic chewy texture)
- Coconut jelly (light and refreshing)
- Egg pudding (creamy and smooth)
- Grass jelly (earthy flavor)

**Loyalty Program:** Buy 10 drinks, get 1 FREE! Ask our staff for a loyalty card today.`,
      questions: [
        { question: 'What is the price of a large drink?', options: ['$4.00', '$5.00', '$6.00', '$7.00'], correctIndex: 2, explanation: 'The passage states Large (24oz) is $6.00.' },
        { question: 'How much does each topping cost?', options: ['$0.25', '$0.50', '$1.00', '$1.50'], correctIndex: 1, explanation: 'Toppings are $0.50 each as stated in the passage.' },
        { question: 'What sugar level does the shop recommend for most drinks?', options: ['25%', '75%', '100%', '50%'], correctIndex: 3, explanation: "The passage says 'We recommend 50% for most drinks'." },
        { question: 'How many drinks do you need to buy to get one free?', options: ['5', '8', '10', '12'], correctIndex: 2, explanation: "The loyalty program says 'Buy 10 drinks, get 1 FREE'." },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'tw-1',
      title: 'Reply to a Customer Inquiry',
      titleVi: 'Trả lời câu hỏi của khách',
      instructions: 'A customer sent you a message asking: "Hi! Do you have any dairy-free options? I\'m lactose intolerant." Write a professional reply explaining your dairy-free options.',
      instructionsVi: 'Một khách hàng nhắn: "Chào! Quán bạn có đồ uống không chứa sữa không? Tôi bị dị ứng lactose." Hãy viết phản hồi chuyên nghiệp giải thích các lựa chọn không sữa của quán.',
      sampleAnswer: `Hi there! Thanks for reaching out 😊

Great news — we have several dairy-free options for you!

Our fruit tea series is completely dairy-free. Popular choices include:
- Passion Fruit Green Tea
- Lychee Oolong Tea
- Strawberry Jasmine Tea

We can also make most of our milk teas with oat milk or almond milk as a substitute. Just let us know when you order and we'll be happy to accommodate!

Please note that our kitchen does handle dairy products, so if you have a severe allergy, please inform our staff so we can take extra precautions.

Looking forward to seeing you soon! ☕`,
      keyPhrases: ['dairy-free', 'lactose intolerant', 'substitute', 'accommodate', 'inform our staff', 'take extra precautions'],
    },
  ],
};
