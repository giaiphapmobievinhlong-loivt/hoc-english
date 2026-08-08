import { Context } from '../types';

export const marketingContext: Context = {
  id: 'marketing',
  title: 'Marketing & Promotions',
  titleVi: 'Marketing và khuyến mãi',
  description: 'Promote your shop, engage customers, and respond to reviews in English.',
  descriptionVi: 'Quảng bá quán, tương tác khách hàng và phản hồi đánh giá bằng tiếng Anh.',
  icon: '📣',
  level: 3,
  phrases: [
    { id: 'mk-1', english: "We're excited to announce our new seasonal menu!", vietnamese: 'Chúng tôi rất vui được thông báo về menu theo mùa mới!', phonetic: '/wɪər/ /ɪkˈsaɪtɪd/ /tuː/ /əˈnaʊns/', category: 'announce' },
    { id: 'mk-2', english: 'Buy one get one free — this weekend only!', vietnamese: 'Mua một tặng một — chỉ cuối tuần này!', phonetic: '/baɪ/ /wʌn/ /ɡet/ /wʌn/ /friː/', category: 'promotion' },
    { id: 'mk-3', english: "Don't miss out on our limited-edition drinks!", vietnamese: 'Đừng bỏ lỡ những đồ uống phiên bản giới hạn của chúng tôi!', phonetic: '/doʊnt/ /mɪs/ /aʊt/ /ɒn/ /aʊər/ /ˈlɪmɪtɪd ɪˈdɪʃən/', category: 'promotion' },
    { id: 'mk-4', english: "Tag us on Instagram for a chance to win a free drink!", vietnamese: 'Tag chúng tôi trên Instagram để có cơ hội nhận đồ uống miễn phí!', phonetic: '/tæɡ/ /ʌs/ /ɒn/', category: 'social' },
    { id: 'mk-5', english: 'We value your feedback — please leave us a review!', vietnamese: 'Chúng tôi trân trọng ý kiến của bạn — hãy để lại đánh giá!', phonetic: '/wiː/ /ˈvæljuː/ /jɔːr/ /ˈfiːdbæk/', category: 'review' },
    { id: 'mk-6', english: "We're partnering with local influencers to spread the word.", vietnamese: 'Chúng tôi đang hợp tác với influencer địa phương để quảng bá.', phonetic: '/wɪər/ /ˈpɑːrtnərɪŋ/ /wɪð/ /ˈloʊkəl/', category: 'partnership' },
    { id: 'mk-7', english: "Our happy hour runs from 2pm to 4pm, Monday to Friday.", vietnamese: 'Giờ vàng của chúng tôi từ 2 giờ đến 4 giờ chiều, thứ Hai đến thứ Sáu.', phonetic: '/aʊər/ /ˈhæpi/ /aʊər/ /rʌnz/ /frɒm/', category: 'promotion' },
    { id: 'mk-8', english: "Show us your review screenshot for a 10% discount on your next order.", vietnamese: 'Cho chúng tôi xem ảnh chụp đánh giá của bạn để được giảm 10% đơn tiếp theo.', phonetic: '/ʃoʊ/ /ʌs/ /jɔːr/ /rɪˈvjuː/ /ˈskriːnʃɒt/', category: 'review' },
  ],
  dialogs: [
    {
      id: 'mkd-1',
      title: 'Collaborating with a Food Influencer',
      titleVi: 'Hợp tác với food influencer',
      situation: 'A local food blogger contacts you about a collaboration opportunity',
      situationVi: 'Một food blogger địa phương liên hệ bạn về cơ hội hợp tác',
      level: 3,
      lines: [
        { speaker: 'other', speakerLabel: 'Blogger', text: "Hi! I'm Lisa, I run a food blog called SaigonBites. I've visited your shop a few times and I absolutely love it. I'd love to do a feature on you.", vietnamese: 'Xin chào! Tôi là Lisa, tôi chạy blog ẩm thực tên SaigonBites. Tôi đã ghé quán vài lần và thật sự rất thích. Tôi muốn làm một bài viết về quán bạn.' },
        { speaker: 'you', speakerLabel: 'You', text: "Hi Lisa! Thank you so much — I've actually seen your blog before, you do amazing work! I'd definitely be interested. What did you have in mind?", vietnamese: 'Chào Lisa! Cảm ơn bạn rất nhiều — tôi thực ra đã thấy blog của bạn rồi, bạn làm rất tuyệt! Tôi chắc chắn quan tâm. Bạn đang nghĩ đến hình thức nào?' },
        { speaker: 'other', speakerLabel: 'Blogger', text: "I was thinking a shop visit where I film the drink-making process, try a few items, and post a review on both my blog and Instagram. My Instagram has about 45,000 followers.", vietnamese: 'Tôi đang nghĩ đến một chuyến thăm quán, tôi quay lại quy trình pha chế, thử một vài món, và đăng bài đánh giá trên cả blog lẫn Instagram. Instagram của tôi có khoảng 45.000 người theo dõi.' },
        { speaker: 'you', speakerLabel: 'You', text: "That sounds fantastic! Would this be a paid collaboration or an organic visit?", vietnamese: 'Nghe tuyệt vời! Đây sẽ là hợp tác trả phí hay ghé thăm tự nhiên?' },
        { speaker: 'other', speakerLabel: 'Blogger', text: "I'm open to either. For paid partnerships, my rate is around $200 for a full post plus Instagram story. But if you'd prefer, I can come as a regular customer and review honestly.", vietnamese: 'Tôi linh hoạt với cả hai. Với hợp tác trả phí, mức phí của tôi khoảng 200 đô cho một bài đăng đầy đủ cộng với Instagram story. Nhưng nếu bạn muốn, tôi có thể đến như một khách thường và đánh giá trung thực.' },
        { speaker: 'you', speakerLabel: 'You', text: "I think a paid collaboration works better for us — that way we can plan something special together. Maybe we could create a limited-edition drink just for your visit?", vietnamese: 'Tôi nghĩ hợp tác trả phí phù hợp hơn — như vậy chúng ta có thể cùng lên kế hoạch điều gì đó đặc biệt. Có thể chúng ta tạo một đồ uống phiên bản giới hạn riêng cho chuyến thăm của bạn?' },
        { speaker: 'other', speakerLabel: 'Blogger', text: "Oh, I love that idea! Exclusive drinks always get great engagement. What flavors are you thinking?", vietnamese: 'Ồ, tôi thích ý tưởng đó! Đồ uống độc quyền luôn có tương tác tốt. Bạn đang nghĩ đến hương vị nào?' },
        { speaker: 'you', speakerLabel: 'You', text: "We've been experimenting with a salted caramel taro blend. It's not on the menu yet — we could launch it exclusively through your post.", vietnamese: 'Chúng tôi đang thử nghiệm với món pha trộn khoai môn caramel muối. Nó chưa có trên menu — chúng ta có thể ra mắt độc quyền qua bài đăng của bạn.' },
        { speaker: 'other', speakerLabel: 'Blogger', text: "That's a great hook. Let me know when you're ready and we'll schedule the visit. I'll send over a collaboration agreement this week.", vietnamese: 'Đó là một điểm thu hút tốt. Cho tôi biết khi bạn sẵn sàng và chúng ta sẽ lên lịch ghé thăm. Tôi sẽ gửi thỏa thuận hợp tác trong tuần này.' },
        { speaker: 'you', speakerLabel: 'You', text: "Perfect! Looking forward to working with you, Lisa.", vietnamese: 'Tuyệt! Mong được hợp tác với bạn, Lisa.' },
      ],
      keyPoints: ['Asking about collaboration type', 'Negotiating terms', 'Creating exclusive content', 'Following up on next steps'],
    },
    {
      id: 'mkd-2',
      title: 'Explaining a Promotion to a Customer',
      titleVi: 'Giải thích chương trình khuyến mãi cho khách',
      situation: 'A customer asks about the current promotion and loyalty program',
      situationVi: 'Khách hàng hỏi về chương trình khuyến mãi hiện tại và thẻ tích điểm',
      level: 2,
      lines: [
        { speaker: 'other', speakerLabel: 'Customer', text: "I saw on your Instagram that you're running some kind of promotion this week?", vietnamese: 'Tôi thấy trên Instagram của bạn rằng tuần này có chương trình khuyến mãi gì đó?' },
        { speaker: 'you', speakerLabel: 'You', text: "Yes! We're doing a Buy One Get One promotion on all milk teas this weekend — Saturday and Sunday only. So if you buy one drink, you get a second one of equal or lesser value for free.", vietnamese: 'Đúng! Chúng tôi đang chạy chương trình Mua Một Tặng Một cho tất cả trà sữa cuối tuần này — thứ Bảy và Chủ Nhật thôi. Nếu bạn mua một ly, bạn được tặng ly thứ hai có giá tương đương hoặc thấp hơn miễn phí.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "That's amazing! Can I use it with the loyalty card discount?", vietnamese: 'Tuyệt quá! Tôi có thể dùng kết hợp với giảm giá thẻ tích điểm không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Great question! Unfortunately, the BOGO promotion can't be combined with other discounts. But the good news is you still earn loyalty points on both drinks even during the promotion.", vietnamese: 'Câu hỏi hay! Rất tiếc, chương trình BOGO không thể kết hợp với các ưu đãi khác. Nhưng tin vui là bạn vẫn tích điểm cho cả hai ly ngay cả trong thời gian khuyến mãi.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Oh that's good! Speaking of loyalty cards, I have 8 stamps — how many more do I need for a free drink?", vietnamese: 'Ồ vậy tốt! Nói đến thẻ tích điểm, tôi có 8 dấu — tôi cần thêm bao nhiêu để được ly miễn phí?' },
        { speaker: 'you', speakerLabel: 'You', text: "Just 2 more! After 10 stamps you get any drink up to large size for free. And if you come this weekend, you'll earn 2 stamps with BOGO — you'll have your free drink in no time!", vietnamese: 'Chỉ cần 2 nữa thôi! Sau 10 dấu bạn được tặng bất kỳ đồ uống nào cỡ lớn trở xuống miễn phí. Và nếu bạn đến cuối tuần này, bạn sẽ kiếm được 2 dấu với BOGO — không lâu là có ly miễn phí rồi!' },
        { speaker: 'other', speakerLabel: 'Customer', text: "I'll definitely come back on Saturday then! Can I bring a friend?", vietnamese: 'Vậy tôi chắc chắn sẽ quay lại thứ Bảy! Tôi có thể mang bạn đến không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Of course! The more the merrier. The promotion applies per transaction, so you can each take advantage of the deal.", vietnamese: 'Tất nhiên! Càng đông càng vui. Khuyến mãi áp dụng theo từng giao dịch, nên mỗi người đều có thể được hưởng ưu đãi.' },
      ],
      keyPoints: ['Explaining promotion terms clearly', 'Handling stacking questions', 'Upselling loyalty program', 'Creating excitement'],
    },
    {
      id: 'mkd-3',
      title: 'Interview with a Local Food Magazine',
      titleVi: 'Phỏng vấn với tạp chí ẩm thực địa phương',
      situation: 'A journalist from a local food magazine interviews you about your shop',
      situationVi: 'Phóng viên từ tạp chí ẩm thực địa phương phỏng vấn bạn về quán',
      level: 4,
      lines: [
        { speaker: 'other', speakerLabel: 'Journalist', text: "Thanks for having me, Minh. Can you tell our readers a little bit about how Boba Heaven got started?", vietnamese: 'Cảm ơn đã tiếp đón tôi, Minh. Bạn có thể kể cho độc giả của chúng tôi nghe một chút về cách Boba Heaven bắt đầu không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Of course! I started Boba Heaven about three years ago. I'd always been passionate about tea and I noticed that while there were plenty of boba chains, there weren't many places focusing on high-quality, locally sourced ingredients.", vietnamese: 'Tất nhiên! Tôi bắt đầu Boba Heaven khoảng ba năm trước. Tôi luôn đam mê trà và nhận thấy rằng dù có nhiều chuỗi boba, không có nhiều nơi tập trung vào nguyên liệu chất lượng cao từ nguồn địa phương.' },
        { speaker: 'other', speakerLabel: 'Journalist', text: "That's a great niche. What sets you apart from the bigger chains?", vietnamese: 'Đó là một thị trường ngách tốt. Điều gì phân biệt bạn với các chuỗi lớn hơn?' },
        { speaker: 'you', speakerLabel: 'You', text: "A few things. First, we use fresh milk from a local dairy farm rather than powder. Second, we brew our teas fresh every three hours — we never use concentrate. And we let customers customize everything from zero to 100% sugar.", vietnamese: 'Một vài điều. Thứ nhất, chúng tôi dùng sữa tươi từ trang trại địa phương thay vì bột. Thứ hai, chúng tôi pha trà tươi mỗi ba tiếng — không bao giờ dùng nước cốt. Và chúng tôi cho phép khách tùy chỉnh mọi thứ từ 0 đến 100% đường.' },
        { speaker: 'other', speakerLabel: 'Journalist', text: "Your shop has gotten a lot of buzz on social media recently. Is that something you've been actively working on?", vietnamese: 'Quán của bạn gần đây được chú ý nhiều trên mạng xã hội. Đó có phải là điều bạn đang tích cực thực hiện không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Definitely. We post new content three or four times a week — a mix of behind-the-scenes, new drink reveals, and customer features. We also run monthly giveaways which really helps grow our following.", vietnamese: 'Chắc chắn rồi. Chúng tôi đăng nội dung mới ba hoặc bốn lần một tuần — kết hợp hậu trường, ra mắt đồ uống mới, và giới thiệu khách hàng. Chúng tôi cũng tổ chức tặng quà hàng tháng, điều đó thực sự giúp tăng người theo dõi.' },
        { speaker: 'other', speakerLabel: 'Journalist', text: "What's next for Boba Heaven? Any big plans?", vietnamese: 'Tiếp theo của Boba Heaven là gì? Có kế hoạch lớn nào không?' },
        { speaker: 'you', speakerLabel: 'You', text: "We're planning to open a second location in District 7 by the end of the year. We're also working on a seasonal menu — think cherry blossom, mango sticky rice — drinks inspired by Vietnamese flavors and seasons.", vietnamese: 'Chúng tôi đang lên kế hoạch mở chi nhánh thứ hai ở Quận 7 vào cuối năm. Chúng tôi cũng đang xây dựng menu theo mùa — hãy nghĩ đến hoa anh đào, xôi xoài — những đồ uống lấy cảm hứng từ hương vị và mùa của Việt Nam.' },
        { speaker: 'other', speakerLabel: 'Journalist', text: "That sounds wonderful. Any advice for aspiring café owners?", vietnamese: 'Nghe tuyệt vời. Có lời khuyên nào cho những ai muốn mở quán không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Know your product inside out, take care of your staff, and listen to your customers. The recipe and the location matter, but it's the people that make a place worth coming back to.", vietnamese: 'Hiểu rõ sản phẩm của mình từ trong ra ngoài, chăm sóc nhân viên, và lắng nghe khách hàng. Công thức và vị trí quan trọng, nhưng chính con người mới làm cho nơi đó đáng quay lại.' },
      ],
      keyPoints: ['Telling your brand story', 'Explaining your USP (Unique Selling Point)', 'Discussing marketing strategy', 'Sharing future vision'],
    },
  ],
  vocabulary: [
    { id: 'mkv-1', word: 'promotion', partOfSpeech: 'noun', definition: 'A special offer to attract customers', definitionVi: 'Chương trình khuyến mãi', example: "We're running a buy-one-get-one promotion this week.", exampleVi: 'Chúng tôi đang chạy chương trình mua một tặng một tuần này.', phonetic: '/prəˈmoʊʃən/' },
    { id: 'mkv-2', word: 'limited edition', partOfSpeech: 'noun', definition: 'A product available only for a short time', definitionVi: 'Phiên bản giới hạn', example: 'Our sakura drink is a limited edition for spring.', exampleVi: 'Đồ uống hoa anh đào là phiên bản giới hạn cho mùa xuân.', phonetic: '/ˈlɪmɪtɪd ɪˈdɪʃən/' },
    { id: 'mkv-3', word: 'engagement', partOfSpeech: 'noun', definition: 'The level of interaction from your audience (likes, comments, shares)', definitionVi: 'Mức độ tương tác', example: 'Our Instagram posts get great engagement.', exampleVi: 'Các bài đăng Instagram của chúng tôi có tương tác rất tốt.', phonetic: '/ɪnˈɡeɪdʒmənt/' },
    { id: 'mkv-4', word: 'collaboration', partOfSpeech: 'noun', definition: 'Working together with another person or brand', definitionVi: 'Sự hợp tác', example: "We're doing a collaboration with a local influencer.", exampleVi: 'Chúng tôi đang hợp tác với một influencer địa phương.', phonetic: '/kəˌlæbəˈreɪʃən/' },
    { id: 'mkv-5', word: 'niche', partOfSpeech: 'noun', definition: 'A specific, focused segment of the market', definitionVi: 'Thị trường ngách', example: 'Premium fresh-milk boba is a great niche.', exampleVi: 'Boba sữa tươi cao cấp là một thị trường ngách tốt.', phonetic: '/niːʃ/' },
    { id: 'mkv-6', word: 'giveaway', partOfSpeech: 'noun', definition: 'A free prize offered to attract attention or followers', definitionVi: 'Tặng quà miễn phí (để quảng bá)', example: 'Our monthly giveaway helps grow our social media following.', exampleVi: 'Tặng quà hàng tháng giúp tăng người theo dõi mạng xã hội của chúng tôi.', phonetic: '/ˈɡɪvəweɪ/' },
  ],
  readingPassages: [
    {
      id: 'mkr-1',
      title: '5 Google Reviews — How Would You Respond?',
      titleVi: '5 Google Review — Bạn sẽ trả lời thế nào?',
      content: `Reading customer reviews is a key marketing skill. Study these 5 real-style reviews of a bubble tea shop and think about how you would respond to each one.

**⭐⭐⭐⭐⭐ — Sarah M.**
"Absolutely love this place! The brown sugar milk tea is the best I've had in the city. The staff are always so friendly and remember my order. Will be back every week!"

**⭐⭐⭐⭐ — James T.**
"Great drinks and atmosphere. The only reason I'm not giving 5 stars is the wait time — it took about 20 minutes during lunch, which is a bit long. The drink itself was delicious though. Would still recommend!"

**⭐⭐ — Linda K.**
"Disappointed this time. I ordered 25% sugar but the drink was way too sweet — maybe 75% or more. The staff apologized but didn't offer to fix it. I've been coming here for a year and this is the second time this has happened. Please fix your quality control."

**⭐⭐⭐⭐⭐ — Michael P.**
"Hidden gem! Found this place by accident and it's now my regular spot. The matcha latte is outstanding. The prices are fair for the quality. Highly recommend the taro with tapioca pearls!"

**⭐ — Tom N.**
"I ordered online and the driver delivered the completely wrong order — two drinks I didn't order. When I called the shop, the staff were dismissive and told me to contact the delivery platform directly. Very poor customer service. I won't be returning."`,
      questions: [
        { question: 'Which review specifically mentions a RECURRING quality problem?', options: ['Sarah M. (5 stars)', 'James T. (4 stars)', 'Linda K. (2 stars)', 'Tom N. (1 star)'], correctIndex: 2, explanation: 'Linda K. says "this is the SECOND time this has happened" — indicating a recurring issue, not just a one-off.' },
        { question: 'What is the MAIN reason James T. did not give 5 stars?', options: ['Rude staff', 'Wrong order', 'Long wait time', 'High prices'], correctIndex: 2, explanation: 'James says: "The only reason I\'m not giving 5 stars is the wait time — it took about 20 minutes during lunch."' },
        { question: 'What is the MOST serious business risk from Tom N.\'s review?', options: ['He found the drink too sweet', 'He will not return AND the staff were dismissive when he called', 'The delivery was wrong', 'He ordered online instead of in-store'], correctIndex: 1, explanation: 'The biggest risk is two-fold: losing a customer permanently ("won\'t be returning") AND the dismissive staff response which shows a training issue.' },
        { question: 'Which TWO reviews would be easiest to respond to positively?', options: ['Sarah M. and Tom N.', 'Sarah M. and Michael P.', 'James T. and Linda K.', 'Michael P. and Tom N.'], correctIndex: 1, explanation: 'Sarah M. and Michael P. both left 5-star reviews with no complaints — easy to thank them warmly and reinforce the positives.' },
      ],
    },
    {
      id: 'mkr-2',
      title: 'Social Media Content Plan — One Week',
      titleVi: 'Kế hoạch nội dung mạng xã hội — Một tuần',
      content: `**BOBA HEAVEN — Weekly Content Calendar**
Week of: April 21–27

A strong social media presence drives foot traffic and brand loyalty. Here is our planned content for the week across Instagram and Facebook.

**Monday — "Meet the Team" Story**
Format: Short video (30 seconds)
Content: Feature one team member making their favourite drink. Include a fun fact about them. This humanizes the brand and builds customer connection.
Goal: Increase story views by 15% vs last Monday.

**Tuesday — New Drink Reveal**
Format: High-quality photo + caption
Content: Announce the "Strawberry Matcha Latte" — our new seasonal drink. Caption should emphasize limited time availability to create urgency. Use 10–12 relevant hashtags.
Goal: 200+ likes, 30+ comments, 50+ shares.

**Wednesday — Customer Feature (User-Generated Content)**
Format: Repost a customer's photo
Content: Find the best customer photo from the past week (tagged or using our hashtag #BobaHeavenVN). Repost with permission and thank the customer by name.
Goal: Encourage more customers to post and tag us.

**Thursday — Educational Post**
Format: Carousel (5 slides)
Content: "How to customize your bubble tea" — explain sugar levels, ice levels, and topping options. Educational content performs well because customers save and share it.
Goal: 100+ saves.

**Friday — Weekend Promotion Announcement**
Format: Graphic with bold text
Content: Announce the weekend BOGO offer. Clear call-to-action: "Come in Saturday or Sunday for Buy One Get One on all milk teas!"
Goal: Drive weekend foot traffic. Track Saturday sales to measure effectiveness.

**Saturday & Sunday — Real-time Stories**
Format: Short video stories throughout the day
Content: Behind-the-scenes during the busy weekend — show the team in action, share customer reactions, countdown to closing.
Goal: Keep followers engaged and create FOMO (Fear of Missing Out).`,
      questions: [
        { question: 'What is the PRIMARY goal of the Monday "Meet the Team" content?', options: ['Announce a new drink', 'Increase website traffic', 'Humanize the brand and build connection', 'Promote the weekend sale'], correctIndex: 2, explanation: '"This humanizes the brand and builds customer connection" — stated directly in the Monday plan.' },
        { question: 'What type of content does the plan say performs well because customers "save and share it"?', options: ['Promotional graphics', 'Customer-generated content', 'Educational carousel posts', 'Behind-the-scenes videos'], correctIndex: 2, explanation: 'Thursday\'s educational carousel about customizing bubble tea — "Educational content performs well because customers save and share it."' },
        { question: 'What does "FOMO" stand for, as used in the Saturday/Sunday section?', options: ['Fear of Missing Out', 'Focus on Making Offers', 'Followers on My Organization', 'Fun of Marketing Online'], correctIndex: 0, explanation: 'The plan itself defines it: "create FOMO (Fear of Missing Out)" — making followers feel they\'re missing something exciting.' },
        { question: 'On which day does the plan focus on REPOSTING content made by customers?', options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], correctIndex: 2, explanation: 'Wednesday is "Customer Feature (User-Generated Content)" — reposting a customer\'s tagged photo.' },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'mw-1',
      title: 'Write an Instagram Caption for a New Drink',
      titleVi: 'Viết caption Instagram cho đồ uống mới',
      instructions: 'You\'re launching a new seasonal drink: "Sakura Strawberry Milk Tea". Write an engaging Instagram caption that describes the drink, creates excitement, includes a call to action, and uses 3–5 relevant hashtags.',
      instructionsVi: 'Bạn ra mắt đồ uống theo mùa mới: "Trà sữa Sakura Dâu". Hãy viết caption Instagram thu hút mô tả đồ uống, tạo sự hứng khởi, có lời kêu gọi hành động và dùng 3–5 hashtag liên quan.',
      sampleAnswer: `🌸 Spring has arrived at Boba Heaven — and we brought the flowers with us! 🌸

Introducing our LIMITED EDITION Sakura Strawberry Milk Tea ✨

Imagine layers of delicate rose milk, fresh strawberry jam, and our signature pearls — all inspired by the beauty of cherry blossom season.

🍓 Real strawberry compote
🌸 Sakura-infused milk base
🧋 Classic tapioca pearls

Available from now until the end of April — or until we sell out (which might be sooner than you think 😅).

Tag a friend you'd share this with! 👇

#BobahHeaven #SakuraSeason #BubbleTeaHCM #LimitedEdition #SpringDrinks`,
      keyPhrases: ['limited edition', 'inspired by', 'available from', 'sell out', 'tag a friend', 'call to action', 'hashtags'],
    },
    {
      id: 'mw-2',
      title: 'Reply to a 5-Star Google Review',
      titleVi: 'Phản hồi đánh giá 5 sao trên Google',
      instructions: 'A customer left this review: "Absolutely love this place! The Brown Sugar Boba is to die for. Staff is always so friendly and the shop is super clean. Definitely my go-to spot!" Write a warm, professional reply that thanks them and encourages them to come back.',
      instructionsVi: 'Một khách để lại đánh giá: "Yêu quán này lắm! Brown Sugar Boba ngon tuyệt. Nhân viên lúc nào cũng thân thiện và quán rất sạch. Chắc chắn là điểm đến quen thuộc của tôi!" Hãy viết phản hồi ấm áp, chuyên nghiệp cảm ơn họ và khuyến khích quay lại.',
      sampleAnswer: `Thank you so much for this wonderful review! 🌟

Reviews like yours truly make our whole team's day — we work really hard to make sure every visit feels special, so it means the world to hear that it's coming through.

The Brown Sugar Boba is definitely one of our fan favourites — great taste! 🧋 And we'll absolutely pass on your kind words to the staff — they'll be so happy to hear it.

We can't wait to see you again soon. Next time you visit, feel free to try our seasonal specials — we're always adding something new!

See you soon! 💕
Minh & the Boba Heaven Team`,
      keyPhrases: ["makes our team's day", 'fan favourite', 'pass on your kind words', 'seasonal specials', 'feel free to', 'we can\'t wait to see you'],
    },
  ],
};
