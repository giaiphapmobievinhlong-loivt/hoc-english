import { Context } from '../types';

export const supplierNegotiationsContext: Context = {
  id: 'supplier-negotiations',
  title: 'Supplier Negotiations',
  titleVi: 'Làm việc với nhà cung cấp',
  description: 'Order supplies, negotiate prices, and handle delivery issues.',
  descriptionVi: 'Đặt nguyên liệu, thương lượng giá và xử lý vấn đề giao hàng.',
  icon: '🤝',
  level: 3,
  phrases: [
    { id: 'sn-1', english: "I'd like to place my weekly order.", vietnamese: 'Tôi muốn đặt hàng hàng tuần.', phonetic: '/aɪd/ /laɪk/ /tuː/ /pleɪs/ /maɪ/ /ˈwiːkli/ /ˈɔːrdər/', category: 'order' },
    { id: 'sn-2', english: 'Do you offer any bulk discounts?', vietnamese: 'Bạn có giảm giá khi mua số lượng lớn không?', phonetic: '/duː/ /juː/ /ˈɒfər/ /ˈeni/ /bʌlk/ /ˈdɪskaʊnts/', category: 'negotiate' },
    { id: 'sn-3', english: "The last delivery had some quality issues I'd like to discuss.", vietnamese: 'Lần giao hàng trước có một số vấn đề về chất lượng tôi muốn thảo luận.', phonetic: '/ðə/ /lɑːst/ /dɪˈlɪvəri/ /hæd/ /sʌm/ /ˈkwɒlɪti/ /ˈɪʃuːz/', category: 'complaint' },
    { id: 'sn-4', english: 'Can you guarantee delivery by Thursday morning?', vietnamese: 'Bạn có thể đảm bảo giao hàng vào sáng thứ Năm không?', phonetic: '/kæn/ /juː/ /ˌɡærənˈtiː/ /dɪˈlɪvəri/ /baɪ/ /ˈθɜːrzdeɪ/', category: 'logistics' },
    { id: 'sn-5', english: "If we increase our order volume, can you offer a better rate?", vietnamese: 'Nếu chúng tôi tăng khối lượng đặt hàng, bạn có thể đưa ra mức giá tốt hơn không?', phonetic: '/ɪf/ /wiː/ /ɪnˈkriːs/ /aʊər/ /ˈɔːrdər/ /ˈvɒljuːm/', category: 'negotiate' },
    { id: 'sn-6', english: "I need to receive the goods before 8am on weekdays.", vietnamese: 'Tôi cần nhận hàng trước 8 giờ sáng các ngày trong tuần.', phonetic: '/aɪ/ /niːd/ /tuː/ /rɪˈsiːv/ /ðə/ /ɡʊdz/ /bɪˈfɔːr/', category: 'logistics' },
    { id: 'sn-7', english: "We've been working together for two years — I'd hope we can agree on a better price.", vietnamese: 'Chúng ta đã hợp tác hai năm rồi — tôi hy vọng chúng ta có thể đồng ý một mức giá tốt hơn.', phonetic: '/wiːv/ /biːn/ /ˈwɜːrkɪŋ/ /təˈɡeðər/', category: 'negotiate' },
    { id: 'sn-8', english: "Can you send me a price list for next month?", vietnamese: 'Bạn có thể gửi cho tôi bảng giá tháng tới không?', phonetic: '/kæn/ /juː/ /send/ /miː/ /ə/ /praɪs/ /lɪst/', category: 'order' },
  ],
  dialogs: [
    {
      id: 'snd-1',
      title: 'Weekly Supply Order',
      titleVi: 'Đặt hàng nguyên liệu hàng tuần',
      situation: 'You call your regular supplier to place the weekly ingredient order',
      situationVi: 'Bạn gọi cho nhà cung cấp quen để đặt hàng nguyên liệu hàng tuần',
      level: 3,
      lines: [
        { speaker: 'other', speakerLabel: 'Supplier', text: "Good morning, Green Tea Supplies. How can I help you?", vietnamese: 'Chào buổi sáng, Green Tea Supplies. Tôi có thể giúp gì cho bạn?' },
        { speaker: 'you', speakerLabel: 'You', text: "Hi, this is Minh from Boba Heaven. I'd like to place my weekly order, please.", vietnamese: 'Xin chào, tôi là Minh từ Boba Heaven. Tôi muốn đặt đơn hàng hàng tuần ạ.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "Of course, Minh! Go ahead.", vietnamese: 'Tất nhiên, Minh! Cứ nói đi.' },
        { speaker: 'you', speakerLabel: 'You', text: "I need 20 kilos of black tapioca pearls, 10 kilos of the jasmine green tea, and 15 liters of brown sugar syrup.", vietnamese: 'Tôi cần 20 ký trân châu đen, 10 ký trà lài xanh, và 15 lít syrup đường đen.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "Got it. And will you need the oat milk this week? We just got a fresh batch in.", vietnamese: 'Rõ rồi. Tuần này bạn có cần oat milk không? Chúng tôi vừa nhận hàng mới về.' },
        { speaker: 'you', speakerLabel: 'You', text: "Yes please, add 8 cartons of oat milk as well. Actually, do you still have the coconut jelly in stock?", vietnamese: 'Có ạ, thêm 8 hộp oat milk nữa nhé. À, bạn còn thạch dừa trong kho không?' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "We do! How much would you like?", vietnamese: 'Có! Bạn muốn bao nhiêu?' },
        { speaker: 'you', speakerLabel: 'You', text: "5 kilos should be enough. Can you deliver by Wednesday morning? I usually run low by then.", vietnamese: '5 ký là đủ. Bạn có thể giao trước sáng thứ Tư không? Thường đến đó tôi gần hết hàng rồi.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "Wednesday morning is no problem. I'll have the driver there between 7 and 8am.", vietnamese: 'Sáng thứ Tư không vấn đề. Tôi sẽ cho tài xế đến từ 7 đến 8 giờ sáng.' },
        { speaker: 'you', speakerLabel: 'You', text: "Perfect. Could you also email me the invoice this time? My accountant needs a copy.", vietnamese: 'Tuyệt vời. Bạn có thể email hóa đơn cho tôi lần này không? Kế toán của tôi cần một bản.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "Absolutely. I'll send it to your usual email address right after this call.", vietnamese: 'Được. Tôi sẽ gửi vào địa chỉ email thường của bạn ngay sau cuộc gọi này.' },
        { speaker: 'you', speakerLabel: 'You', text: "Great, thank you! See you Wednesday.", vietnamese: 'Tuyệt, cảm ơn! Hẹn gặp thứ Tư nhé.' },
      ],
      keyPoints: ['Placing a clear order', 'Checking stock', 'Scheduling delivery', 'Requesting invoice'],
    },
    {
      id: 'snd-2',
      title: 'Negotiating a Better Price',
      titleVi: 'Thương lượng giá tốt hơn',
      situation: 'You want to negotiate a lower price because you are a loyal, high-volume customer',
      situationVi: 'Bạn muốn thương lượng giá thấp hơn vì là khách hàng trung thành, mua số lượng lớn',
      level: 4,
      lines: [
        { speaker: 'you', speakerLabel: 'You', text: "Hi David, I've been reviewing our monthly costs and I wanted to have a conversation about pricing.", vietnamese: 'Xin chào David, tôi vừa xem lại chi phí hàng tháng và muốn nói chuyện về giá cả.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "Sure, Minh. What's on your mind?", vietnamese: 'Được thôi, Minh. Bạn đang nghĩ gì vậy?' },
        { speaker: 'you', speakerLabel: 'You', text: "We've been working together for over two years now, and our monthly order volume has grown significantly — we're now ordering almost double what we started with.", vietnamese: 'Chúng ta đã hợp tác hơn hai năm rồi, và khối lượng đặt hàng hàng tháng của chúng tôi đã tăng đáng kể — bây giờ chúng tôi đặt gần gấp đôi so với ban đầu.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "That's true, you've been one of our most consistent customers.", vietnamese: 'Đúng vậy, bạn là một trong những khách hàng đều đặn nhất của chúng tôi.' },
        { speaker: 'you', speakerLabel: 'You', text: "I'm glad to hear that. Given our volume and our long relationship, I'd like to discuss a bulk discount — maybe 10 to 15% off our regular rate.", vietnamese: 'Vui khi nghe điều đó. Với khối lượng và mối quan hệ lâu dài của chúng ta, tôi muốn thảo luận về giảm giá số lượng lớn — có thể 10 đến 15% so với giá thường.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "I appreciate you bringing this up directly. Honestly, 15% is a stretch for us, but I think we could do 8% on your core items — the tapioca and the tea.", vietnamese: 'Tôi đánh giá cao việc bạn nêu thẳng vấn đề. Thật ra 15% là hơi nhiều với chúng tôi, nhưng tôi nghĩ chúng tôi có thể giảm 8% cho các mặt hàng chính — trân châu và trà.' },
        { speaker: 'you', speakerLabel: 'You', text: "I can work with that. What about the syrups? Those are becoming a bigger part of our order.", vietnamese: 'Tôi chấp nhận được. Còn syrup thì sao? Mục đó đang chiếm tỷ trọng lớn hơn trong đơn hàng của chúng tôi.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "If you commit to a minimum of 20 liters per week, I can offer 5% off the syrups. How does that sound?", vietnamese: 'Nếu bạn cam kết tối thiểu 20 lít mỗi tuần, tôi có thể giảm 5% cho syrup. Nghe thế nào?' },
        { speaker: 'you', speakerLabel: 'You', text: "That works for us. Let's put that in writing so we're both clear on the agreement.", vietnamese: 'Được với chúng tôi. Hãy ghi vào văn bản để cả hai chúng ta đều rõ về thỏa thuận nhé.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "Absolutely. I'll send you a revised contract by end of day. Thank you, Minh.", vietnamese: 'Chắc chắn rồi. Tôi sẽ gửi cho bạn hợp đồng sửa đổi trước cuối ngày. Cảm ơn, Minh.' },
      ],
      keyPoints: ['Referencing loyalty & volume', 'Making a specific ask', 'Negotiating item by item', 'Asking to put agreement in writing'],
    },
    {
      id: 'snd-3',
      title: 'Complaining About a Bad Delivery',
      titleVi: 'Khiếu nại về giao hàng kém chất lượng',
      situation: 'The last delivery had damaged goods — tapioca pearls arrived expired',
      situationVi: 'Lần giao hàng vừa rồi có hàng hỏng — trân châu giao đến đã hết hạn',
      level: 3,
      lines: [
        { speaker: 'you', speakerLabel: 'You', text: "Hi, this is Minh from Boba Heaven. I'm calling about yesterday's delivery — unfortunately there's a problem.", vietnamese: 'Xin chào, tôi là Minh từ Boba Heaven. Tôi gọi về lần giao hàng hôm qua — rất tiếc có vấn đề xảy ra.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "Oh, I'm sorry to hear that. What happened?", vietnamese: 'Ồ, tôi rất tiếc khi nghe điều đó. Chuyện gì vậy?' },
        { speaker: 'you', speakerLabel: 'You', text: "When we opened the tapioca pearls this morning, we noticed they were already past their expiry date. Two of the five bags expired last week.", vietnamese: 'Sáng nay khi mở trân châu ra, chúng tôi thấy chúng đã quá hạn. Hai trong năm túi hết hạn từ tuần trước.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "That should absolutely not have happened. I sincerely apologize. Can you confirm the batch number on the packaging?", vietnamese: 'Điều đó hoàn toàn không nên xảy ra. Tôi thành thật xin lỗi. Bạn có thể xác nhận số lô trên bao bì không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Yes, it says batch B2024-09 on both bags.", vietnamese: 'Có, ghi là lô B2024-09 trên cả hai túi.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "I've found the issue — that batch was mislabeled during our sorting process. This is entirely our fault.", vietnamese: 'Tôi đã tìm ra vấn đề — lô đó bị dán nhãn sai trong quá trình phân loại. Đây hoàn toàn là lỗi của chúng tôi.' },
        { speaker: 'you', speakerLabel: 'You', text: "I understand mistakes happen, but this has impacted our operations today. We had to turn away customers because we couldn't make several drinks.", vietnamese: 'Tôi hiểu sai lầm có thể xảy ra, nhưng điều này đã ảnh hưởng đến hoạt động của chúng tôi hôm nay. Chúng tôi phải từ chối khách vì không thể làm một số loại đồ uống.' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "I completely understand. I'll arrange an emergency delivery of fresh tapioca pearls within the next two hours at no charge, and I'll issue a full credit for the two bad bags.", vietnamese: 'Tôi hoàn toàn hiểu. Tôi sẽ sắp xếp giao khẩn cấp trân châu tươi trong vòng hai giờ tới miễn phí, và tôi sẽ hoàn tiền đầy đủ cho hai túi hỏng.' },
        { speaker: 'you', speakerLabel: 'You', text: "I appreciate that. Going forward, can you ensure that your team double-checks expiry dates before packing our orders?", vietnamese: 'Tôi đánh giá cao điều đó. Từ nay về sau, bạn có thể đảm bảo đội của bạn kiểm tra kỹ ngày hết hạn trước khi đóng gói đơn hàng của chúng tôi không?' },
        { speaker: 'other', speakerLabel: 'Supplier', text: "Absolutely. I'll implement a quality check protocol starting today. Again, I'm very sorry for the disruption.", vietnamese: 'Chắc chắn rồi. Tôi sẽ triển khai quy trình kiểm tra chất lượng từ hôm nay. Một lần nữa, tôi rất xin lỗi vì sự gián đoạn này.' },
      ],
      keyPoints: ['Stating the problem clearly', 'Providing specific details (batch number)', 'Explaining the impact', 'Requesting concrete solutions', 'Setting future expectations'],
    },
  ],
  vocabulary: [
    { id: 'snv-1', word: 'bulk order', partOfSpeech: 'noun', definition: 'A large quantity purchase, usually at a discount', definitionVi: 'Đặt hàng số lượng lớn', example: 'We place a bulk order every Monday.', exampleVi: 'Chúng tôi đặt hàng số lượng lớn mỗi thứ Hai.', phonetic: '/bʌlk ˈɔːrdər/' },
    { id: 'snv-2', word: 'invoice', partOfSpeech: 'noun', definition: 'A document listing goods supplied and their prices', definitionVi: 'Hóa đơn', example: 'Please send me the invoice by email.', exampleVi: 'Vui lòng gửi hóa đơn qua email cho tôi.', phonetic: '/ˈɪnvɔɪs/' },
    { id: 'snv-3', word: 'negotiate', partOfSpeech: 'verb', definition: 'To discuss something to reach an agreement', definitionVi: 'Thương lượng, đàm phán', example: "Let's negotiate the price for next quarter.", exampleVi: 'Hãy thương lượng giá cho quý tới.', phonetic: '/nɪˈɡoʊʃieɪt/' },
    { id: 'snv-4', word: 'expiry date', partOfSpeech: 'noun', definition: 'The date after which a product should not be used', definitionVi: 'Ngày hết hạn', example: 'Always check the expiry date on ingredients.', exampleVi: 'Luôn kiểm tra ngày hết hạn trên nguyên liệu.', phonetic: '/ɪkˈspaɪəri deɪt/' },
    { id: 'snv-5', word: 'credit', partOfSpeech: 'noun', definition: 'An amount refunded or deducted from a future bill', definitionVi: 'Khoản hoàn trả, tín dụng', example: "We'll issue a full credit for the damaged goods.", exampleVi: 'Chúng tôi sẽ hoàn tiền đầy đủ cho hàng hỏng.', phonetic: '/ˈkredɪt/' },
    { id: 'snv-6', word: 'batch', partOfSpeech: 'noun', definition: 'A group of goods produced or delivered at the same time', definitionVi: 'Lô hàng', example: 'This batch of pearls arrived fresh this morning.', exampleVi: 'Lô trân châu này vừa giao sáng nay còn mới.', phonetic: '/bætʃ/' },
  ],
  readingPassages: [
    {
      id: 'snr-1',
      title: 'Email: Supplier Price Increase Notice',
      titleVi: 'Email: Thông báo tăng giá từ nhà cung cấp',
      content: `**From:** sales@greenteasupplies.com
**To:** bobaheavenshop@email.com
**Subject:** Price Adjustment Notice — Effective May 1st

Dear Minh,

I hope this email finds you well. I am writing to inform you of upcoming price adjustments to our product catalogue, effective from May 1st.

Due to a combination of factors — including higher transport costs, a 15% increase in raw material prices from our overseas suppliers, and the rising cost of packaging materials — we have had no choice but to make the following price changes:

- Tapioca Pearls (Black): from $4.20/kg → $4.70/kg (+11.9%)
- Jasmine Green Tea Leaves: from $18.00/kg → $20.50/kg (+13.9%)
- Brown Sugar Syrup (1L): from $6.50 → $7.20 (+10.8%)
- Oat Milk (1L carton): from $2.10 → $2.30 (+9.5%)

We understand this is significant and we have done our best to minimize the increases. Please note that these prices reflect our lowest possible margins and are consistent across all our clients.

As a valued long-term customer, we would like to offer you the following options:
1. Pre-purchase up to 3 months of stock at current prices before May 1st.
2. Lock in a 12-month supply contract at the new prices with a 5% loyalty discount.

We value our partnership with Boba Heaven and hope to continue serving you for many years. Please do not hesitate to reach out with any questions or to discuss the contract option.

Best regards,
David Chen
Account Manager — Green Tea Supplies`,
      questions: [
        { question: 'What are the THREE main reasons given for the price increase?', options: ['Low demand, bad weather, and high wages', 'Higher transport costs, raw material prices, and packaging costs', 'Staff shortages, electricity costs, and import taxes', 'Currency changes, drought, and storage costs'], correctIndex: 1, explanation: 'The email lists: "higher transport costs, a 15% increase in raw material prices from overseas suppliers, and the rising cost of packaging materials."' },
        { question: 'Which product has the HIGHEST percentage price increase?', options: ['Tapioca Pearls', 'Brown Sugar Syrup', 'Jasmine Green Tea Leaves', 'Oat Milk'], correctIndex: 2, explanation: 'Jasmine Green Tea Leaves increase by 13.9% — the highest of all listed products.' },
        { question: 'What does Option 2 (12-month supply contract) offer Boba Heaven?', options: ['Free delivery for one year', 'A 5% loyalty discount on new prices', 'Current prices locked for 12 months', 'A 10% discount on all products'], correctIndex: 1, explanation: 'Option 2 offers "a 12-month supply contract at the new prices with a 5% loyalty discount."' },
        { question: 'When do the new prices come into effect?', options: ['Immediately upon reading the email', 'March 1st', 'May 1st', 'Next January'], correctIndex: 2, explanation: 'The subject line and first paragraph both state the price adjustments are "effective from May 1st."' },
      ],
    },
    {
      id: 'snr-2',
      title: 'Understanding a Purchase Agreement',
      titleVi: 'Hiểu hợp đồng mua hàng',
      content: `**SUPPLY AGREEMENT — KEY TERMS SUMMARY**
Between: Boba Heaven ("Buyer") and Green Tea Supplies ("Supplier")

This document summarizes the key terms of the supply agreement signed between the two parties. Please read it carefully.

**1. Delivery Terms**
The Supplier agrees to deliver all goods to the Buyer's premises at 123 Nguyen Hue Street every Wednesday between 7:00am and 9:00am. The Buyer must ensure that an authorized staff member is present to receive and sign for the delivery. If no one is available, the goods will be returned to the warehouse and a redelivery fee of $15 will apply.

**2. Payment Terms**
Payment is due within 14 days of the invoice date (Net 14). Payments made after 14 days will incur a late fee of 1.5% per month on the outstanding balance. The Buyer may pay by bank transfer only — no cash or cheques are accepted.

**3. Minimum Order Requirement**
A minimum order value of $200 per weekly delivery applies. Orders below this amount will be subject to a small-order surcharge of $25 to cover delivery costs.

**4. Quality Guarantee**
The Supplier guarantees that all goods delivered will be within their expiry dates and meet food-grade safety standards. If the Buyer receives any goods that do not meet these standards, the Buyer must notify the Supplier within 24 hours of delivery. The Supplier will replace defective goods at no charge, or issue a credit to the Buyer's account.

**5. Contract Duration and Termination**
This agreement runs for 12 months from the signing date and will automatically renew unless either party provides 30 days' written notice of termination.`,
      questions: [
        { question: 'What happens if no authorized staff member is available to receive the delivery?', options: ['The driver leaves the goods outside', 'The goods are returned and a $15 redelivery fee is charged', 'The delivery is automatically cancelled', 'The Supplier calls the manager to reschedule'], correctIndex: 1, explanation: '"The goods will be returned to the warehouse and a redelivery fee of $15 will apply."' },
        { question: 'How many days does the Buyer have to pay the invoice?', options: ['7 days', '10 days', '14 days', '30 days'], correctIndex: 2, explanation: 'The payment terms are "Net 14" — payment is due within 14 days of the invoice date.' },
        { question: 'What is the minimum order value to avoid a surcharge?', options: ['$100', '$150', '$200', '$250'], correctIndex: 2, explanation: '"A minimum order value of $200 per weekly delivery applies. Orders below this amount will be subject to a small-order surcharge of $25."' },
        { question: 'How much notice must be given to terminate the contract?', options: ['7 days', '14 days', '30 days written notice', '60 days'], correctIndex: 2, explanation: '"Either party provides 30 days\' written notice of termination" to end the contract.' },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'snw-1',
      title: 'Reply to a Supplier Price Increase Notice',
      titleVi: 'Phản hồi thông báo tăng giá từ nhà cung cấp',
      instructions: 'Your tapioca supplier sent an email saying they are raising prices by 12% next month. Write a professional reply acknowledging the notice, pushing back politely, and proposing an alternative (e.g., a smaller increase, a longer payment contract, or a bulk discount).',
      instructionsVi: 'Nhà cung cấp trân châu gửi email thông báo tăng giá 12% vào tháng tới. Hãy viết phản hồi chuyên nghiệp xác nhận thông báo, phản đối lịch sự và đề xuất phương án thay thế (giảm mức tăng, hợp đồng dài hơn hoặc chiết khấu số lượng lớn).',
      sampleAnswer: `Subject: Re: Price Adjustment Notice — Tapioca Pearls

Dear Mr. Tan,

Thank you for informing us about the upcoming price adjustment. We understand that raw material costs have been rising industry-wide, and we appreciate the advance notice.

However, a 12% increase would have a significant impact on our operating costs. We have been a loyal customer for over two years, ordering approximately $800 worth of goods per month, and we have always paid on time.

We would like to propose the following alternatives for your consideration:

1. A phased increase of 6% now and a further 6% in three months, giving us time to adjust our pricing accordingly.
2. A locked-in rate for 6 months if we commit to a minimum monthly order of $1,000.
3. A bulk order discount of 8–10% in exchange for paying for two months of supply upfront.

We value our partnership and hope we can reach an arrangement that works for both sides. I would be happy to discuss this further by phone at your convenience.

Kind regards,
Nguyen Van Minh
Owner, Boba Heaven`,
      keyPhrases: ['price adjustment', 'significant impact', 'loyal customer', 'phased increase', 'locked-in rate', 'bulk order', 'at your convenience'],
    },
    {
      id: 'snw-2',
      title: 'Write a Purchase Order',
      titleVi: 'Viết đơn đặt hàng',
      instructions: 'Write a formal purchase order to your milk supplier for next week\'s delivery. Include: your business name, the items and quantities, the expected delivery date, and any special instructions.',
      instructionsVi: 'Viết đơn đặt hàng chính thức cho nhà cung cấp sữa cho đơn hàng tuần tới. Bao gồm: tên doanh nghiệp của bạn, các mặt hàng và số lượng, ngày giao hàng dự kiến và hướng dẫn đặc biệt nếu có.',
      sampleAnswer: `PURCHASE ORDER
From: Boba Heaven — 45 Nguyen Hue St, District 1
To: Fresh Farm Dairy Co.
Date: [Today's Date]
Requested Delivery Date: Monday, [Next Monday's Date] — before 8:00 AM

ITEMS ORDERED:
- Fresh whole milk (1L bottles): 50 units
- Condensed milk (380g cans): 24 units
- Non-dairy creamer (1kg bags): 10 units
- Oat milk (1L cartons): 20 units

SPECIAL INSTRUCTIONS:
- Please ensure all items are within date (minimum 7 days from delivery)
- Stack dairy and non-dairy items separately on the pallet
- Contact Minh on [phone number] if there are any issues with availability

PAYMENT: Net 14 days from invoice date

Thank you,
Nguyen Van Minh
Owner, Boba Heaven`,
      keyPhrases: ['purchase order', 'requested delivery date', 'within date', 'net 14 days', 'invoice date', 'availability'],
    },
  ],
};
