import { Context } from '../types';

export const staffTrainingContext: Context = {
  id: 'staff-training',
  title: 'Staff Training',
  titleVi: 'Đào tạo nhân viên',
  description: 'Learn how to train new staff, conduct briefings, and give performance feedback.',
  descriptionVi: 'Học cách đào tạo nhân viên mới, tổ chức briefing và phản hồi hiệu suất làm việc.',
  icon: '👨‍🏫',
  level: 3,
  phrases: [
    { id: 'st-1', english: "Good morning everyone! Let's go over today's tasks before we open.", vietnamese: 'Chào buổi sáng mọi người! Hãy xem qua công việc hôm nay trước khi mở cửa.', phonetic: '/ɡʊd/ /ˈmɔːrnɪŋ/ /ˈevriwʌn/', category: 'briefing' },
    { id: 'st-2', english: "I'd like to walk you through our drink-making process step by step.", vietnamese: 'Tôi muốn hướng dẫn bạn quy trình pha chế từng bước một.', phonetic: '/aɪd/ /laɪk/ /tuː/ /wɔːk/ /juː/ /θruː/', category: 'training' },
    { id: 'st-3', english: "Always measure ingredients precisely — consistency is key.", vietnamese: 'Luôn đong nguyên liệu chính xác — sự đồng đều là điều quan trọng.', phonetic: '/ˈɔːlweɪz/ /ˈmeʒər/ /ɪnˈɡriːdiənts/ /prɪˈsaɪsli/', category: 'training' },
    { id: 'st-4', english: 'Make sure to wash your hands every time before handling food or drinks.', vietnamese: 'Đảm bảo rửa tay mỗi khi tiếp xúc với thực phẩm hoặc đồ uống.', phonetic: '/meɪk/ /ʃʊər/ /tuː/ /wɒʃ/ /jɔːr/ /hændz/', category: 'hygiene' },
    { id: 'st-5', english: "Do you have any questions so far?", vietnamese: 'Bạn có câu hỏi gì không?', phonetic: '/duː/ /juː/ /hæv/ /ˈeni/ /ˈkwestʃənz/', category: 'check' },
    { id: 'st-6', english: "You're doing really well — keep it up!", vietnamese: 'Bạn làm tốt lắm — cứ tiếp tục vậy nhé!', phonetic: '/jɔːr/ /ˈduːɪŋ/ /ˈrɪəli/ /wel/', category: 'feedback' },
    { id: 'st-7', english: "Let me show you that one more time.", vietnamese: 'Để tôi chỉ thêm một lần nữa.', phonetic: '/let/ /miː/ /ʃoʊ/ /juː/ /ðæt/ /wʌn/ /mɔːr/ /taɪm/', category: 'training' },
    { id: 'st-8', english: "If you're ever unsure, don't hesitate to ask.", vietnamese: 'Nếu bạn không chắc, đừng ngần ngại hỏi nhé.', phonetic: '/ɪf/ /jɔːr/ /ˈevər/ /ʌnˈʃʊər/', category: 'encourage' },
    { id: 'st-9', english: "We need to restock the tapioca pearls before the afternoon rush.", vietnamese: 'Chúng ta cần bổ sung trân châu trước giờ cao điểm chiều.', phonetic: '/wiː/ /niːd/ /tuː/ /riːˈstɒk/', category: 'briefing' },
    { id: 'st-10', english: "Remember: the customer always comes first.", vietnamese: 'Nhớ nhé: khách hàng luôn được đặt lên hàng đầu.', phonetic: '/rɪˈmembər/ /ðə/ /ˈkʌstəmər/', category: 'values' },
  ],
  dialogs: [
    {
      id: 'std-1',
      title: 'Training a New Employee',
      titleVi: 'Đào tạo nhân viên mới',
      situation: 'First day training for a new barista',
      situationVi: 'Ngày đầu đào tạo cho nhân viên pha chế mới',
      level: 3,
      lines: [
        { speaker: 'you', speakerLabel: 'You (Manager)', text: "Hi! Welcome to the team. I'm Minh, the owner. How are you feeling on your first day?", vietnamese: 'Chào bạn! Chào mừng đến với nhóm. Tôi là Minh, chủ quán. Bạn cảm thấy thế nào trong ngày đầu?' },
        { speaker: 'other', speakerLabel: 'New Staff', text: "A little nervous, honestly! But excited to learn.", vietnamese: 'Thật ra hơi hồi hộp! Nhưng rất háo hức được học.' },
        { speaker: 'you', speakerLabel: 'You', text: "That's completely normal! Don't worry — I'll walk you through everything step by step. Let's start with the basics.", vietnamese: 'Điều đó hoàn toàn bình thường! Đừng lo — tôi sẽ hướng dẫn bạn từng bước một. Hãy bắt đầu với những điều cơ bản.' },
        { speaker: 'other', speakerLabel: 'New Staff', text: "Okay, I'm ready!", vietnamese: 'Được rồi, tôi sẵn sàng!' },
        { speaker: 'you', speakerLabel: 'You', text: "First, the most important rule: food hygiene. Always wash your hands before touching any ingredients. And we change gloves between different tasks.", vietnamese: 'Trước tiên, quy tắc quan trọng nhất: vệ sinh an toàn thực phẩm. Luôn rửa tay trước khi chạm vào nguyên liệu. Và chúng tôi thay găng tay giữa các công việc khác nhau.' },
        { speaker: 'other', speakerLabel: 'New Staff', text: "Got it. How often should I wash my hands?", vietnamese: 'Hiểu rồi. Tôi nên rửa tay bao lâu một lần?' },
        { speaker: 'you', speakerLabel: 'You', text: "Every time before you handle drinks, after touching your face or phone, and after handling cash. Now let's talk about the drink recipes.", vietnamese: 'Mỗi khi trước khi pha đồ uống, sau khi chạm vào mặt hoặc điện thoại, và sau khi xử lý tiền mặt. Bây giờ hãy nói về công thức đồ uống.' },
        { speaker: 'other', speakerLabel: 'New Staff', text: "How do we keep all the drinks consistent?", vietnamese: 'Làm sao để giữ tất cả đồ uống đồng đều?' },
        { speaker: 'you', speakerLabel: 'You', text: "Great question! We use measuring cups for everything. Never eyeball it — 300ml of tea, 50ml of syrup, precise amounts every time. That's how our drinks taste the same whether you make it or I make it.", vietnamese: 'Câu hỏi hay! Chúng tôi dùng cốc đong cho mọi thứ. Đừng bao giờ ước lượng — 300ml trà, 50ml syrup, đúng lượng mỗi lần. Đó là cách đồ uống của chúng tôi có vị như nhau dù bạn hay tôi làm.' },
        { speaker: 'other', speakerLabel: 'New Staff', text: "I understand. What about the sugar levels?", vietnamese: 'Tôi hiểu. Còn lượng đường thì sao?' },
        { speaker: 'you', speakerLabel: 'You', text: "We have a chart right here on the wall. Each sugar level percentage corresponds to a specific amount of syrup in milliliters. You'll memorize it quickly.", vietnamese: 'Chúng tôi có bảng ngay trên tường đây. Mỗi phần trăm đường tương ứng với một lượng syrup cụ thể tính bằng ml. Bạn sẽ nhớ nhanh thôi.' },
        { speaker: 'other', speakerLabel: 'New Staff', text: "That makes it easier! Can I try making one now?", vietnamese: 'Vậy dễ hơn nhiều! Tôi có thể thử làm một ly không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Absolutely! Let's make a brown sugar milk tea together. I'll guide you through it.", vietnamese: 'Tất nhiên! Hãy làm trà sữa đường đen cùng nhau. Tôi sẽ hướng dẫn bạn.' },
      ],
      keyPoints: ['Welcoming new staff', 'Explaining hygiene rules', 'Teaching consistency', 'Hands-on training'],
    },
    {
      id: 'std-2',
      title: 'Morning Briefing',
      titleVi: 'Briefing buổi sáng',
      situation: 'Daily team briefing before the shop opens',
      situationVi: 'Briefing nhóm hàng ngày trước khi mở cửa',
      level: 3,
      lines: [
        { speaker: 'you', speakerLabel: 'You (Manager)', text: "Good morning everyone! Before we open, let's go over a few things. First — how is everyone doing today?", vietnamese: 'Chào buổi sáng mọi người! Trước khi mở cửa, hãy xem qua một số điều. Trước tiên — hôm nay mọi người thế nào?' },
        { speaker: 'other', speakerLabel: 'Staff', text: "Good, thanks!", vietnamese: 'Tốt, cảm ơn!' },
        { speaker: 'you', speakerLabel: 'You', text: "Great! So, today we have a few updates. We're introducing two new drinks — the strawberry matcha latte and the brown sugar boba smoothie. I've left the recipes on the counter.", vietnamese: 'Tuyệt! Vậy, hôm nay có vài thông báo mới. Chúng ta ra mắt hai món mới — matcha latte dâu tây và sinh tố boba đường đen. Tôi đã để công thức trên quầy.' },
        { speaker: 'other', speakerLabel: 'Staff', text: "Should we try making them first?", vietnamese: 'Chúng tôi có nên thử làm trước không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Yes! Please make one of each before we open so you're comfortable with the process. Also — we're running low on oat milk. Can someone check and order more if needed?", vietnamese: 'Có! Hãy làm thử mỗi loại một ly trước khi mở cửa để bạn quen với quy trình. Ngoài ra — chúng ta gần hết oat milk. Ai có thể kiểm tra và đặt thêm nếu cần không?' },
        { speaker: 'other', speakerLabel: 'Staff', text: "I'll take care of that.", vietnamese: 'Để tôi lo cái đó.' },
        { speaker: 'you', speakerLabel: 'You', text: "Thanks! One more thing — we had some feedback yesterday about wait times being too long during the lunch rush. Let's try to be more efficient. If two people are ordering at once, one person takes the order and another starts preparing. Any questions?", vietnamese: 'Cảm ơn! Còn một điều nữa — hôm qua chúng tôi nhận phản hồi rằng thời gian chờ quá lâu trong giờ cao điểm buổi trưa. Hãy cố gắng làm việc hiệu quả hơn. Nếu có hai người gọi cùng lúc, một người nhận order và người kia bắt đầu pha chế. Có câu hỏi gì không?' },
        { speaker: 'other', speakerLabel: 'Staff', text: "No, all clear!", vietnamese: 'Không, hiểu hết rồi!' },
        { speaker: 'you', speakerLabel: 'You', text: "Perfect. Let's have a great day and make our customers happy. Let's go!", vietnamese: 'Tuyệt vời. Hãy có một ngày tốt lành và làm khách hàng vui. Nào!' },
      ],
      keyPoints: ['Announcing new items', 'Delegating tasks', 'Addressing feedback', 'Motivating team'],
    },
  ],
  vocabulary: [
    { id: 'stv-1', word: 'consistency', partOfSpeech: 'noun', definition: 'Always producing the same result or quality', definitionVi: 'Sự đồng đều, nhất quán', example: 'Consistency is key to a successful drink shop.', exampleVi: 'Sự đồng đều là chìa khóa cho quán đồ uống thành công.', phonetic: '/kənˈsɪstənsi/' },
    { id: 'stv-2', word: 'hygiene', partOfSpeech: 'noun', definition: 'Practices that maintain health and cleanliness', definitionVi: 'Vệ sinh', example: 'Food hygiene is our top priority.', exampleVi: 'Vệ sinh thực phẩm là ưu tiên hàng đầu của chúng tôi.', phonetic: '/ˈhaɪdʒiːn/' },
    { id: 'stv-3', word: 'restock', partOfSpeech: 'verb', definition: 'To fill up supplies that are running low', definitionVi: 'Bổ sung hàng hóa', example: 'We need to restock the syrup before evening.', exampleVi: 'Chúng ta cần bổ sung syrup trước buổi chiều.', phonetic: '/riːˈstɒk/' },
    { id: 'stv-4', word: 'briefing', partOfSpeech: 'noun', definition: 'A short meeting to give instructions or updates', definitionVi: 'Cuộc họp ngắn, briefing', example: 'We have a morning briefing every day at 8am.', exampleVi: 'Chúng tôi có briefing buổi sáng mỗi ngày lúc 8 giờ.', phonetic: '/ˈbriːfɪŋ/' },
    { id: 'stv-5', word: 'precise', partOfSpeech: 'adjective', definition: 'Exact and accurate, with no room for error', definitionVi: 'Chính xác', example: 'Always use precise measurements for each drink.', exampleVi: 'Luôn đong lường chính xác cho mỗi đồ uống.', phonetic: '/prɪˈsaɪs/' },
  ],
  readingPassages: [
    {
      id: 'str-1',
      title: 'Food Safety & Hygiene Guidelines',
      titleVi: 'Hướng dẫn vệ sinh an toàn thực phẩm',
      content: `All staff at Boba Heaven must follow these food safety guidelines at all times. Failure to do so may result in disciplinary action or termination.

**Personal Hygiene**
Wash your hands thoroughly with soap for at least 20 seconds in the following situations: before starting your shift, after handling cash, after touching your face or phone, after using the restroom, and after handling raw ingredients. Hand sanitizer is available at all stations but does NOT replace handwashing.

Staff must keep fingernails short and clean. No nail polish is permitted during food preparation. Long hair must be tied back or covered with a hair net. Jewellery on hands and wrists must be removed before handling food.

**Temperature Control**
Cold ingredients (fresh milk, fruit) must be stored at or below 4°C. Any ingredient left at room temperature for more than 2 hours must be discarded. Cooked or prepared items (tapioca pearls, pudding) must not be stored for more than 4 hours once prepared. Always use a food thermometer — never guess.

**Cross-Contamination Prevention**
Use separate utensils and preparation areas for drinks containing allergens (nuts, dairy) and those without. Always inform the customer if a drink contains common allergens. If a customer mentions a food allergy, alert the manager immediately.

**Cleaning Schedule**
All countertops must be sanitized every 2 hours during operating hours. All blending equipment must be cleaned after each use. The floor must be swept and mopped at the end of every shift. Walk-in refrigerators are deep-cleaned every Monday morning before opening.

**Reporting**
If you notice any ingredient that looks, smells, or tastes unusual — report it to the manager immediately and do not use it. It is better to run out of a product than to serve something unsafe.`,
      questions: [
        { question: 'For how long should staff wash their hands?', options: ['10 seconds', '15 seconds', '20 seconds', '30 seconds'], correctIndex: 2, explanation: 'The guidelines state: "Wash your hands thoroughly with soap for at least 20 seconds."' },
        { question: 'According to the guidelines, what is the maximum time prepared tapioca pearls can be stored?', options: ['2 hours', '4 hours', '6 hours', '8 hours'], correctIndex: 1, explanation: 'Cooked/prepared items like tapioca pearls "must not be stored for more than 4 hours once prepared."' },
        { question: 'What should a staff member do if a customer mentions a food allergy?', options: ['Check the ingredients themselves', 'Tell the customer they cannot be served', 'Alert the manager immediately', 'Write it in the order book'], correctIndex: 2, explanation: '"If a customer mentions a food allergy, alert the manager immediately."' },
        { question: 'How often must countertops be sanitized during operating hours?', options: ['Once per shift', 'Every hour', 'Every 2 hours', 'At the end of the day'], correctIndex: 2, explanation: '"All countertops must be sanitized every 2 hours during operating hours."' },
      ],
    },
    {
      id: 'str-2',
      title: 'New Staff Welcome Handbook',
      titleVi: 'Sổ tay chào đón nhân viên mới',
      content: `Welcome to the Boba Heaven Team!

We are so happy to have you join us. This handbook will help you understand what we expect, what you can expect from us, and how we work together.

**Our Values**
Quality: We never compromise on the quality of our ingredients or our drinks. If something isn't right, we redo it.
Consistency: Every drink should taste exactly the same whether you make it at 9am or 9pm. This is achieved through precise measurements and following our recipes exactly.
Kindness: We treat every customer — and each other — with warmth and respect. A positive attitude is part of the job.

**Your First Two Weeks**
During your probation period, you will be paired with a senior team member who will train you on all our drink recipes, the POS system, and our customer service standards. Please ask questions freely — there is no such thing as a silly question.

You will be evaluated at the end of week two. The evaluation looks at: accuracy (are the drinks correct?), speed (can you keep up during peak hours?), and attitude (are you a positive part of the team?). If you pass, your pay increases from $8 to $9 per hour.

**Shifts and Scheduling**
Your schedule is posted every Friday for the following week. If you cannot make a shift, you must notify the manager at least 4 hours in advance by calling the shop directly. Text messages are not acceptable for shift cancellations. Repeated no-shows without notice will result in termination.

**Benefits**
One free drink per shift. Staff discounts of 20% on all menu items on days off. Quarterly team outings funded by the shop.

We are glad you are here. Let's make great drinks and have fun doing it!`,
      questions: [
        { question: 'What THREE things is a new staff member evaluated on at the end of week two?', options: ['Speed, appearance, and attitude', 'Accuracy, speed, and attitude', 'Punctuality, speed, and accuracy', 'Friendliness, knowledge, and dress code'], correctIndex: 1, explanation: 'The handbook states evaluation covers: "accuracy (are drinks correct?), speed (can you keep up during peak hours?), and attitude."' },
        { question: 'What happens to a new staff member\'s pay if they pass the probation evaluation?', options: ['It stays the same', 'It increases from $8 to $9 per hour', 'It increases from $9 to $10 per hour', 'They receive a one-time bonus'], correctIndex: 1, explanation: '"If you pass, your pay increases from $8 to $9 per hour."' },
        { question: 'If a staff member cannot come to their shift, what is the CORRECT way to notify the manager?', options: ['Send a text message', 'Tell another staff member', 'Call the shop directly at least 4 hours before', 'Email the manager'], correctIndex: 2, explanation: '"You must notify the manager at least 4 hours in advance by calling the shop directly. Text messages are not acceptable."' },
        { question: 'What staff benefit applies on days OFF (not during shifts)?', options: ['Free drinks', '20% discount on menu items', 'Free parking', 'Double pay'], correctIndex: 1, explanation: '"Staff discounts of 20% on all menu items on days off." (The free drink is for during a shift.)' },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'stw-1',
      title: 'Write a Food Safety Reminder Email',
      titleVi: 'Viết email nhắc nhở an toàn thực phẩm',
      instructions: 'Your health inspection is next week. Write a short internal email to all staff reminding them of the key food safety rules: hand washing, temperature checks, and keeping the workspace clean.',
      instructionsVi: 'Tuần tới sẽ có kiểm tra vệ sinh an toàn thực phẩm. Hãy viết email nội bộ ngắn gọn cho toàn bộ nhân viên nhắc nhở các quy tắc quan trọng: rửa tay, kiểm tra nhiệt độ và giữ nơi làm việc sạch sẽ.',
      sampleAnswer: `Subject: Reminder — Food Safety Standards Before Next Week's Inspection

Hi Team,

As you know, we have a health inspection scheduled for next week. I want to remind everyone of our key food safety standards.

🧼 Hand Washing
- Wash hands thoroughly before handling any ingredients
- Always wash hands after touching your phone, face, or leaving the prep area

🌡️ Temperature Checks
- Check the refrigerator temperature at the start and end of every shift
- Record the readings in the logbook — do not skip this step
- Cold items must be stored below 4°C at all times

🧹 Workspace Cleanliness
- Wipe down all surfaces after each task
- Replace sanitizing cloths every two hours
- Do not leave used equipment in the sink — wash it immediately

If you notice anything that doesn't look right, please tell me or the shift supervisor immediately.

Thank you for your commitment to keeping our customers safe.

Best,
Minh`,
      keyPhrases: ['food safety standards', 'health inspection', 'hand washing', 'temperature check', 'logbook', 'sanitizing', 'shift supervisor'],
    },
    {
      id: 'stw-2',
      title: 'Write a New Staff Welcome Message',
      titleVi: 'Viết tin nhắn chào mừng nhân viên mới',
      instructions: 'You have a new part-time staff member starting on Monday. Write them a short, friendly welcome message with the key information they need: start time, dress code, what to bring, and who to ask for.',
      instructionsVi: 'Bạn có nhân viên bán thời gian mới bắt đầu vào thứ Hai. Hãy viết tin nhắn chào mừng ngắn gọn, thân thiện với các thông tin quan trọng: giờ bắt đầu, đồng phục, cần mang gì và hỏi ai.',
      sampleAnswer: `Hi Lan! 👋

Welcome to the Boba Heaven team — we're so excited to have you!

Here are a few things to know before your first day on Monday:

📍 Start time: Please arrive by 8:45 AM so we have time for a quick orientation before we open at 9:00 AM.

👕 Dress code: Wear all black (top and bottom). We'll provide you with a Boba Heaven apron and cap when you arrive.

🎒 What to bring: Just your ID and bank account details so we can set up your payroll.

🙋 Who to ask for: Ask for Minh at the counter. If I'm not there yet, ask for Hoa — she's the morning shift leader and she'll get you started.

Don't worry if you feel overwhelmed on the first day — we'll walk you through everything step by step.

See you Monday! 🧋
Minh`,
      keyPhrases: ['welcome to the team', 'orientation', 'dress code', 'payroll', 'shift leader', 'walk you through'],
    },
  ],
};
