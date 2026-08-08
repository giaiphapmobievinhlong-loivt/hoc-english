import { Context } from '../types';

export const professionalIntroContext: Context = {
  id: 'professional-intro',
  title: 'Professional Introduction',
  titleVi: 'Giới thiệu nghề nghiệp',
  description: 'Introduce yourself in business settings — networking events, client calls, and professional profiles.',
  descriptionVi: 'Tự giới thiệu trong môi trường kinh doanh — sự kiện giao lưu, cuộc gọi khách hàng và hồ sơ chuyên nghiệp.',
  icon: '💼',
  level: 2,
  phrases: [
    { id: 'pi-1', english: "I founded Boba Heaven three years ago with my own savings and a strong vision.", vietnamese: 'Tôi thành lập Boba Heaven ba năm trước với tiền tiết kiệm của mình và tầm nhìn rõ ràng.', phonetic: '/aɪ/ /ˈfaʊndɪd/ /ˌboʊbə/ /ˈhevən/', category: 'business' },
    { id: 'pi-2', english: "We specialize in premium bubble tea using locally sourced ingredients.", vietnamese: 'Chúng tôi chuyên trà sữa cao cấp sử dụng nguyên liệu địa phương.', phonetic: '/wiː/ /ˈspeʃəlaɪz/ /ɪn/ /ˈpriːmiəm/', category: 'business' },
    { id: 'pi-3', english: "Our monthly revenue has grown consistently over the past two years.", vietnamese: 'Doanh thu hàng tháng của chúng tôi đã tăng trưởng ổn định trong hai năm qua.', phonetic: '/aʊər/ /ˈmʌnθli/ /ˈrevənjuː/ /hæz/ /ɡroʊn/', category: 'business' },
    { id: 'pi-4', english: "I manage a team of eight staff members.", vietnamese: 'Tôi quản lý đội ngũ tám nhân viên.', phonetic: '/aɪ/ /ˈmænɪdʒ/ /ə/ /tiːm/ /əv/ /eɪt/ /stɑːf/', category: 'business' },
    { id: 'pi-5', english: "I wear many hats — from operations to marketing to staff training.", vietnamese: 'Tôi đảm nhiệm nhiều vai trò — từ vận hành đến marketing đến đào tạo nhân viên.', phonetic: '/aɪ/ /weər/ /ˈmeni/ /hæts/', category: 'business' },
    { id: 'pi-6', english: "My background is in food service, but I'm self-taught in business management.", vietnamese: 'Nền tảng của tôi là dịch vụ ăn uống, nhưng tôi tự học quản lý kinh doanh.', phonetic: '/maɪ/ /ˈbækɡraʊnd/ /ɪz/ /ɪn/ /fuːd/ /ˈsɜːrvɪs/', category: 'background' },
    { id: 'pi-7', english: "We're currently exploring opportunities to expand to a second location.", vietnamese: 'Chúng tôi đang khám phá cơ hội mở rộng sang địa điểm thứ hai.', phonetic: '/wɪər/ /ˈkʌrəntli/ /ɪkˈsplɔːrɪŋ/ /ˌɒpəˈtjuːnɪtiz/', category: 'business' },
    { id: 'pi-8', english: "I'm passionate about building a brand that represents Vietnamese quality.", vietnamese: 'Tôi đam mê xây dựng thương hiệu đại diện cho chất lượng Việt Nam.', phonetic: '/aɪm/ /ˈpæʃənɪt/ /əˈbaʊt/ /ˈbɪldɪŋ/ /ə/ /brænd/', category: 'vision' },
    { id: 'pi-9', english: "What industry are you in?", vietnamese: 'Bạn làm trong ngành nào?', phonetic: '/wɒt/ /ˈɪndəstri/ /ɑːr/ /juː/ /ɪn/', category: 'networking' },
    { id: 'pi-10', english: "How long have you been in business?", vietnamese: 'Bạn đã kinh doanh được bao lâu rồi?', phonetic: '/haʊ/ /lɒŋ/ /hæv/ /juː/ /biːn/ /ɪn/ /ˈbɪznɪs/', category: 'networking' },
    { id: 'pi-11', english: "I'd love to learn more about what you do.", vietnamese: 'Tôi rất muốn tìm hiểu thêm về công việc của bạn.', phonetic: '/aɪd/ /lʌv/ /tuː/ /lɜːrn/ /mɔːr/ /əˈbaʊt/ /wɒt/ /juː/ /duː/', category: 'networking' },
    { id: 'pi-12', english: "Here's my business card — feel free to reach out any time.", vietnamese: 'Đây là danh thiếp của tôi — cứ tự nhiên liên hệ bất cứ lúc nào.', phonetic: '/hɪərz/ /maɪ/ /ˈbɪznɪs/ /kɑːrd/', category: 'networking' },
  ],
  dialogs: [
    {
      id: 'pid-1',
      title: 'Interviewed for a Local Business Magazine',
      titleVi: 'Được phỏng vấn cho tạp chí kinh doanh địa phương',
      situation: 'A journalist contacts you for a short feature about young entrepreneurs in Ho Chi Minh City',
      situationVi: 'Một nhà báo liên hệ để viết bài về các doanh nhân trẻ ở TP HCM',
      level: 2,
      lines: [
        { speaker: 'other', speakerLabel: 'Journalist', text: "Hi Minh! Thank you for agreeing to this interview. Can you start by introducing yourself for our readers?", vietnamese: 'Xin chào Minh! Cảm ơn bạn đã đồng ý phỏng vấn. Bạn có thể bắt đầu bằng cách tự giới thiệu cho độc giả không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Of course! My name is Nguyen Van Minh. I'm 29 years old and I'm the founder and owner of Boba Heaven, a premium bubble tea shop in District 1, Ho Chi Minh City.", vietnamese: 'Tất nhiên! Tên tôi là Nguyễn Văn Minh. Tôi 29 tuổi và là người sáng lập, chủ sở hữu của Boba Heaven, quán trà sữa cao cấp ở Quận 1, TP Hồ Chí Minh.' },
        { speaker: 'other', speakerLabel: 'Journalist', text: "How did you get started? Did you always want to be an entrepreneur?", vietnamese: 'Bạn bắt đầu như thế nào? Bạn có luôn muốn trở thành doanh nhân không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Not exactly! I grew up in Vinh Long and my family ran a small street food stall. Watching my parents work so hard for something they owned planted the seed. When I moved to Ho Chi Minh City, I decided I wanted the same — something of my own.", vietnamese: 'Không hẳn! Tôi lớn lên ở Vĩnh Long và gia đình tôi có quầy thức ăn đường phố nhỏ. Nhìn bố mẹ làm việc chăm chỉ cho thứ họ sở hữu đã gieo mầm cho tôi. Khi chuyển đến TP HCM, tôi quyết định muốn điều tương tự — thứ gì đó của riêng mình.' },
        { speaker: 'other', speakerLabel: 'Journalist', text: "What makes Boba Heaven different from other bubble tea shops?", vietnamese: 'Điều gì làm Boba Heaven khác biệt so với các quán trà sữa khác?' },
        { speaker: 'you', speakerLabel: 'You', text: "We specialize in quality over quantity. All our ingredients are locally sourced — fresh milk from local farms, seasonal fruit, and we make our own syrups. We don't use artificial flavouring. It takes more effort but our customers can taste the difference.", vietnamese: 'Chúng tôi chuyên về chất lượng hơn số lượng. Tất cả nguyên liệu được lấy tại địa phương — sữa tươi từ nông trại địa phương, trái cây theo mùa và chúng tôi tự làm siro. Không dùng hương liệu nhân tạo. Tốn công hơn nhưng khách hàng có thể cảm nhận được sự khác biệt.' },
        { speaker: 'other', speakerLabel: 'Journalist', text: "What's the biggest challenge you've faced?", vietnamese: 'Thách thức lớn nhất bạn đối mặt là gì?' },
        { speaker: 'you', speakerLabel: 'You', text: "Managing cash flow in the early months. I had no business training — I learned everything on the job. There were moments where I wasn't sure if I could keep the lights on. But we pushed through, and by month six we were profitable.", vietnamese: 'Quản lý dòng tiền trong những tháng đầu. Tôi không có đào tạo kinh doanh — tôi học mọi thứ qua thực tế. Có những lúc tôi không chắc có thể tiếp tục. Nhưng chúng tôi vượt qua, và đến tháng sáu chúng tôi có lợi nhuận.' },
        { speaker: 'other', speakerLabel: 'Journalist', text: "That's inspiring. What's next for Boba Heaven?", vietnamese: 'Thật truyền cảm hứng. Tiếp theo là gì với Boba Heaven?' },
        { speaker: 'you', speakerLabel: 'You', text: "We're exploring opening a second location and potentially a franchise model in the next two years. My long-term dream is to take Boba Heaven international — to show the world what Vietnamese bubble tea can be.", vietnamese: 'Chúng tôi đang xem xét mở địa điểm thứ hai và có thể là mô hình nhượng quyền trong hai năm tới. Giấc mơ dài hạn của tôi là đưa Boba Heaven ra quốc tế — để cho thế giới thấy trà sữa Việt Nam có thể là gì.' },
      ],
      keyPoints: ['Giving a confident professional introduction', 'Sharing your founding story', 'Explaining your unique value', 'Discussing challenges honestly', 'Expressing future vision'],
    },
    {
      id: 'pid-2',
      title: 'Video Call with an Overseas Partner',
      titleVi: 'Gọi video với đối tác nước ngoài',
      situation: 'You have a first video call with a potential overseas supplier who wants to learn about your business',
      situationVi: 'Bạn có cuộc gọi video đầu tiên với nhà cung cấp nước ngoài tiềm năng muốn tìm hiểu về doanh nghiệp',
      level: 2,
      lines: [
        { speaker: 'other', speakerLabel: 'Supplier', text: "Hello Minh! Good to finally put a face to the name. I'm David from TeaLeaf Direct in Taiwan.", vietnamese: 'Xin chào Minh! Thật vui khi cuối cùng được gặp mặt. Tôi là David từ TeaLeaf Direct ở Đài Loan.' },
        { speaker: 'you', speakerLabel: 'You', text: "David, great to meet you! Thank you for taking the time. I'm Minh — the owner of Boba Heaven in Ho Chi Minh City.", vietnamese: 'David, rất vui được gặp bạn! Cảm ơn bạn đã dành thời gian. Tôi là Minh — chủ Boba Heaven ở TP Hồ Chí Minh.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "Tell me about your business — how big is the operation?", vietnamese: 'Hãy kể về doanh nghiệp của bạn — quy mô vận hành như thế nào?' },
        { speaker: 'you', speakerLabel: 'You', text: "We're a single-location shop at the moment, but a busy one. We serve around 400 customers a day, with a team of 8 full and part-time staff. We've been operating for three years and have been profitable since month six.", vietnamese: 'Chúng tôi hiện có một địa điểm, nhưng rất bận rộn. Chúng tôi phục vụ khoảng 400 khách mỗi ngày với đội 8 nhân viên toàn thời gian và bán thời gian. Chúng tôi hoạt động ba năm và có lợi nhuận từ tháng thứ sáu.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "What tea products are you currently using, and why are you looking to switch suppliers?", vietnamese: 'Bạn đang dùng sản phẩm trà nào và tại sao muốn đổi nhà cung cấp?' },
        { speaker: 'you', speakerLabel: 'You', text: "We currently source from a local Vietnamese supplier, but as we plan to expand, we need a supplier who can guarantee consistent quality at higher volumes and who has international certifications — especially for food safety.", vietnamese: 'Chúng tôi hiện lấy hàng từ nhà cung cấp Việt Nam, nhưng khi mở rộng, chúng tôi cần nhà cung cấp đảm bảo chất lượng nhất quán ở khối lượng cao hơn và có chứng nhận quốc tế — đặc biệt về an toàn thực phẩm.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "We can definitely help with that. Our teas are ISO certified and we supply to over 200 brands across Southeast Asia.", vietnamese: 'Chúng tôi hoàn toàn có thể giúp được điều đó. Trà của chúng tôi được chứng nhận ISO và chúng tôi cung cấp cho hơn 200 thương hiệu trên khắp Đông Nam Á.' },
        { speaker: 'you', speakerLabel: 'You', text: "That's exactly what we're looking for. Could you send me your product catalogue and pricing after this call? I'll review it with my accountant.", vietnamese: 'Đó chính xác là những gì chúng tôi tìm kiếm. Bạn có thể gửi cho tôi danh mục sản phẩm và bảng giá sau cuộc gọi này không? Tôi sẽ xem xét với kế toán.' },
      ],
      keyPoints: ['Professional self-introduction in English', 'Describing your business confidently', 'Explaining your needs clearly', 'Asking for next steps'],
    },
    {
      id: 'pid-3',
      title: 'Pitching at a Startup Expo',
      titleVi: 'Thuyết trình tại triển lãm khởi nghiệp',
      situation: 'You have 60 seconds to introduce yourself and your business at a local startup expo',
      situationVi: 'Bạn có 60 giây để tự giới thiệu và doanh nghiệp của mình tại triển lãm khởi nghiệp địa phương',
      level: 2,
      lines: [
        { speaker: 'other', speakerLabel: 'Emcee', text: "Next up — please welcome Minh from District 1! Minh, you have 60 seconds. Go!", vietnamese: 'Tiếp theo — hãy chào mừng Minh từ Quận 1! Minh, bạn có 60 giây. Bắt đầu!' },
        { speaker: 'you', speakerLabel: 'You', text: "Hi everyone! My name is Minh and I'm the founder of Boba Heaven — a premium bubble tea brand based in Ho Chi Minh City.", vietnamese: 'Xin chào mọi người! Tôi tên Minh và là người sáng lập Boba Heaven — thương hiệu trà sữa cao cấp có trụ sở tại TP Hồ Chí Minh.' },
        { speaker: 'you', speakerLabel: 'You', text: "In three years, we've grown from zero to over $28,000 in monthly revenue — without any outside investment. We serve 400 customers a day and have a 4.8-star rating on Google.", vietnamese: 'Trong ba năm, chúng tôi đã tăng từ 0 đến hơn 28.000 đô doanh thu hàng tháng — không có đầu tư bên ngoài. Chúng tôi phục vụ 400 khách mỗi ngày và có đánh giá 4.8 sao trên Google.' },
        { speaker: 'you', speakerLabel: 'You', text: "What makes us different? We source locally, make everything in-house, and we never compromise on quality. Our customers can taste that.", vietnamese: 'Điều gì làm chúng tôi khác biệt? Chúng tôi lấy nguồn địa phương, tự làm mọi thứ và không bao giờ nhượng bộ về chất lượng. Khách hàng có thể cảm nhận điều đó.' },
        { speaker: 'you', speakerLabel: 'You', text: "We're now ready to scale. We're looking for either investment or strategic partnerships to open two new locations by the end of next year. If that interests you — please come and find me after. Thank you!", vietnamese: 'Chúng tôi giờ đã sẵn sàng mở rộng. Chúng tôi đang tìm kiếm đầu tư hoặc đối tác chiến lược để mở hai địa điểm mới vào cuối năm sau. Nếu điều đó hấp dẫn bạn — xin hãy tìm tôi sau. Cảm ơn!' },
        { speaker: 'other', speakerLabel: 'Emcee', text: "Excellent! Thank you Minh. What a passionate pitch — I can hear how much you care about this. Audience, give him a hand!", vietnamese: 'Xuất sắc! Cảm ơn Minh. Bài thuyết trình đầy đam mê — tôi có thể nghe thấy bạn quan tâm điều này đến mức nào. Khán giả, hãy vỗ tay cho anh ấy!' },
        { speaker: 'you', speakerLabel: 'You', text: "Thank you so much! My card is on the table at the back — I'd love to connect with anyone who's interested.", vietnamese: 'Cảm ơn mọi người rất nhiều! Danh thiếp của tôi ở bàn phía sau — tôi rất muốn kết nối với ai quan tâm.' },
      ],
      keyPoints: ['Structured 60-second pitch', 'Highlighting key metrics', 'Stating what makes you different', 'Clear call to action'],
    },
  ],
  vocabulary: [
    { id: 'piv-1', word: 'entrepreneur', partOfSpeech: 'noun', definition: 'A person who starts and runs their own business', definitionVi: 'Doanh nhân; người khởi nghiệp', example: 'As an entrepreneur, I take on a lot of risk but also a lot of reward.', exampleVi: 'Là một doanh nhân, tôi chịu nhiều rủi ro nhưng cũng nhận nhiều phần thưởng.', phonetic: '/ˌɒntrəprəˈnɜːr/' },
    { id: 'piv-2', word: 'specialize in', partOfSpeech: 'verb phrase', definition: 'To focus on or be expert in a particular area', definitionVi: 'Chuyên về; tập trung vào lĩnh vực cụ thể', example: 'We specialize in premium drinks made from fresh local ingredients.', exampleVi: 'Chúng tôi chuyên về đồ uống cao cấp từ nguyên liệu tươi địa phương.', phonetic: '/ˈspeʃəlaɪz ɪn/' },
    { id: 'piv-3', word: 'found / founded', partOfSpeech: 'verb (past)', definition: 'To start or establish an organization or business', definitionVi: 'Thành lập; sáng lập', example: 'I founded Boba Heaven in 2021.', exampleVi: 'Tôi thành lập Boba Heaven năm 2021.', phonetic: '/faʊnd/ /ˈfaʊndɪd/' },
    { id: 'piv-4', word: 'scale', partOfSpeech: 'verb', definition: 'To grow a business larger in a systematic way', definitionVi: 'Mở rộng quy mô (kinh doanh)', example: "We're ready to scale to new markets.", exampleVi: 'Chúng tôi đã sẵn sàng mở rộng sang thị trường mới.', phonetic: '/skeɪl/' },
    { id: 'piv-5', word: 'in-house', partOfSpeech: 'adjective/adverb', definition: 'Done within the company rather than outsourced', definitionVi: 'Tự làm trong nội bộ (không thuê ngoài)', example: 'We make all our syrups in-house for quality control.', exampleVi: 'Chúng tôi tự làm tất cả siro trong nội bộ để kiểm soát chất lượng.', phonetic: '/ˈɪn haʊs/' },
    { id: 'piv-6', word: 'certification', partOfSpeech: 'noun', definition: 'An official document proving a standard has been met', definitionVi: 'Chứng nhận; chứng chỉ', example: 'Our supplier has international food safety certification.', exampleVi: 'Nhà cung cấp của chúng tôi có chứng nhận an toàn thực phẩm quốc tế.', phonetic: '/ˌsɜːrtɪfɪˈkeɪʃən/' },
  ],
  readingPassages: [
    {
      id: 'pi-read-1',
      title: 'Boba Heaven — LinkedIn Company Profile',
      titleVi: 'Boba Heaven — Hồ sơ công ty trên LinkedIn',
      content: `BOBA HEAVEN
Premium Bubble Tea | Ho Chi Minh City, Vietnam
Founded: 2021 | Employees: 8 | Industry: Food & Beverage

ABOUT US
Boba Heaven is a premium bubble tea brand based in District 1, Ho Chi Minh City. We were founded in 2021 by Nguyen Van Minh with a single mission: to prove that bubble tea can be both delicious AND made with real, quality ingredients.

We source our tea leaves, fresh milk, and seasonal fruit from local Vietnamese farms wherever possible. All our syrups and toppings are made in-house daily. We believe customers deserve to know exactly what they're drinking.

OUR NUMBERS (as of 2024)
- 400+ drinks served per day
- 4.8-star Google rating (600+ reviews)
- $28,500 average monthly revenue
- 40%+ profit margin maintained since Year 2
- 0 outside investors — 100% founder-funded growth

WHAT WE'RE LOOKING FOR
We are currently seeking:
• Strategic partners in packaging and supply
• Investors interested in our planned expansion to 2 new locations
• Franchise partners in cities outside Ho Chi Minh City

OUR VISION
To become Vietnam's most trusted premium bubble tea brand and to demonstrate that local, quality-focused food businesses can compete on an international stage.

CONNECT WITH US
📍 45 Nguyen Hue Street, District 1, Ho Chi Minh City
📧 hello@bobaheaven.vn
📱 Instagram: @BobaHeavenVN`,
      questions: [
        { question: 'Who founded Boba Heaven?', options: ['Linh Nguyen', 'Nguyen Van Minh', 'David from TeaLeaf', 'A group of investors'], correctIndex: 1, explanation: 'The profile states "Founded in 2021 by Nguyen Van Minh."' },
        { question: 'Where does Boba Heaven source its ingredients from?', options: ['Imported from Taiwan', 'Local Vietnamese farms wherever possible', 'International certified suppliers only', 'Mixed local and imported'], correctIndex: 1, explanation: '"We source our tea leaves, fresh milk, and seasonal fruit from local Vietnamese farms wherever possible."' },
        { question: 'How has the business been funded?', options: ['Bank loan', 'Venture capital', '100% founder-funded', 'Government grant'], correctIndex: 2, explanation: '"0 outside investors — 100% founder-funded growth."' },
        { question: 'Which of these is NOT listed as something Boba Heaven is looking for?', options: ['Packaging partners', 'Franchise partners', 'A new head chef', 'Investors for expansion'], correctIndex: 2, explanation: 'The "What We\'re Looking For" section lists packaging partners, investors, and franchise partners — but not a head chef.' },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'piw-1',
      title: 'Write a LinkedIn Bio',
      titleVi: 'Viết phần giới thiệu LinkedIn',
      instructions: "Write a professional LinkedIn 'About' section (100–150 words) for yourself as a small business owner. Include: what you do, how long you've been doing it, what makes your business different, and what you're looking for.",
      instructionsVi: "Viết phần 'Giới thiệu' LinkedIn chuyên nghiệp (100–150 từ) với tư cách chủ doanh nghiệp nhỏ. Bao gồm: bạn làm gì, đã làm bao lâu, điều gì làm doanh nghiệp bạn khác biệt và bạn đang tìm kiếm gì.",
      sampleAnswer: `I'm Minh — founder and owner of Boba Heaven, a premium bubble tea brand in Ho Chi Minh City.

Three years ago, I left my hometown of Vinh Long with a clear vision: to build a bubble tea shop that never cut corners on quality. Today, Boba Heaven serves 400+ customers daily with a 4.8-star Google rating and a team of 8 passionate people.

What makes us different? We source locally, make everything in-house, and we believe our customers can taste the difference.

I'm currently exploring expansion opportunities — looking for investors and strategic partners who believe in quality-driven food businesses. If that's you, I'd love to connect.

Always happy to talk business, food & beverage, or bubble tea. 🧋`,
      keyPhrases: ['founder and owner', 'premium', 'cut corners', 'source locally', 'in-house', 'exploring expansion opportunities', 'strategic partners'],
    },
    {
      id: 'piw-2',
      title: 'Write a 60-Second Pitch Script',
      titleVi: 'Viết kịch bản thuyết trình 60 giây',
      instructions: "Write a 60-second spoken pitch (roughly 120–150 words) about yourself and your business for a startup event. Include: who you are, what your business does, your key numbers, what makes you different, and what you're asking for.",
      instructionsVi: "Viết bài thuyết trình miệng 60 giây (khoảng 120–150 từ) về bản thân và doanh nghiệp cho sự kiện khởi nghiệp. Bao gồm: bạn là ai, doanh nghiệp làm gì, số liệu chính, điểm khác biệt và bạn đang cần gì.",
      sampleAnswer: `Hi everyone! My name is Minh and I'm the founder of Boba Heaven — a premium bubble tea shop in District 1, Ho Chi Minh City.

In three years, with zero outside investment, we've grown to $28,500 in monthly revenue, serving 400 customers a day with a 4.8-star Google rating.

What sets us apart? We use only locally sourced ingredients, make our own syrups in-house, and we never compromise on quality. Our customers aren't just buying a drink — they're buying an experience.

We're now ready to scale. We're looking for $150,000 in investment to open two new locations and begin a franchise program within the next 24 months.

If you believe in quality-driven, founder-led businesses — I'd love to chat. My card is at the back. Thank you!`,
      keyPhrases: ['zero outside investment', 'sets us apart', 'locally sourced', 'never compromise', 'ready to scale', 'founder-led', 'franchise program'],
    },
  ],
};
