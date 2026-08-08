import { Context } from '../types';

export const handlingComplaintsContext: Context = {
  id: 'handling-complaints',
  title: 'Handling Complaints',
  titleVi: 'Xử lý phàn nàn',
  description: 'Learn how to handle customer complaints professionally and turn negative experiences into positive ones.',
  descriptionVi: 'Học cách xử lý phàn nàn của khách một cách chuyên nghiệp và biến trải nghiệm xấu thành tốt.',
  icon: '🙏',
  level: 2,
  phrases: [
    { id: 'hc-1', english: "I'm so sorry about that — let me fix it right away.", vietnamese: 'Tôi rất xin lỗi về điều đó — để tôi sửa ngay.', phonetic: '/aɪm/ /soʊ/ /ˈsɒri/', category: 'apology' },
    { id: 'hc-2', english: 'I apologize for the inconvenience.', vietnamese: 'Tôi xin lỗi vì sự bất tiện này.', phonetic: '/aɪ/ /əˈpɒlədʒaɪz/ /fɔːr/ /ðə/ /ɪnkənˈviːniəns/', category: 'apology' },
    { id: 'hc-3', english: "That's completely our mistake.", vietnamese: 'Đó hoàn toàn là lỗi của chúng tôi.', phonetic: '/ðæts/ /kəmˈpliːtli/ /aʊər/ /mɪˈsteɪk/', category: 'apology' },
    { id: 'hc-4', english: 'Could you tell me what was wrong with your order?', vietnamese: 'Bạn có thể cho biết vấn đề với đơn hàng là gì không?', phonetic: '/kʊd/ /juː/ /tel/ /miː/ /wɒt/ /wɒz/ /rɒŋ/', category: 'clarify' },
    { id: 'hc-5', english: "I'll make you a new one right away at no charge.", vietnamese: 'Tôi sẽ làm lại cho bạn ngay và không tính phí.', phonetic: '/aɪl/ /meɪk/ /juː/ /ə/ /njuː/ /wʌn/ /raɪt/ /əˈweɪ/', category: 'solution' },
    { id: 'hc-6', english: 'I can offer you a full refund or a replacement drink — which would you prefer?', vietnamese: 'Tôi có thể hoàn tiền đầy đủ hoặc đổi đồ uống khác — bạn muốn cách nào?', phonetic: '/aɪ/ /kæn/ /ˈɒfər/ /juː/ /ə/ /fʊl/ /ˈriːfʌnd/', category: 'solution' },
    { id: 'hc-7', english: "Let me give you a voucher for your next visit as well.", vietnamese: 'Để tôi tặng bạn voucher cho lần ghé thăm tiếp theo nữa nhé.', phonetic: '/let/ /miː/ /ɡɪv/ /juː/ /ə/ /ˈvaʊtʃər/', category: 'compensation' },
    { id: 'hc-8', english: "Again, I'm really sorry for the trouble.", vietnamese: 'Một lần nữa, tôi thực sự xin lỗi vì đã gây rắc rối cho bạn.', phonetic: '/əˈɡen/ /aɪm/ /ˈrɪəli/ /ˈsɒri/', category: 'apology' },
    { id: 'hc-9', english: "Thank you for letting us know — we'll make sure this doesn't happen again.", vietnamese: 'Cảm ơn bạn đã cho chúng tôi biết — chúng tôi sẽ đảm bảo điều này không xảy ra nữa.', phonetic: '/θæŋk/ /juː/ /fɔːr/ /ˈletɪŋ/ /ʌs/ /noʊ/', category: 'thanks' },
    { id: 'hc-10', english: 'I understand your frustration, and I want to make this right for you.', vietnamese: 'Tôi hiểu sự thất vọng của bạn và tôi muốn giải quyết điều này cho bạn.', phonetic: '/aɪ/ /ˌʌndərˈstænd/ /jɔːr/ /frʌˈstreɪʃən/', category: 'empathy' },
    { id: 'hc-11', english: "I'll speak to my manager right away and get back to you.", vietnamese: 'Tôi sẽ nói chuyện với quản lý ngay và phản hồi lại cho bạn.', phonetic: '/aɪl/ /spiːk/ /tuː/ /maɪ/ /ˈmænɪdʒər/', category: 'escalate' },
    { id: 'hc-12', english: 'Is there anything else I can do to make your experience better?', vietnamese: 'Còn điều gì tôi có thể làm để cải thiện trải nghiệm của bạn không?', phonetic: '/ɪz/ /ðer/ /ˈeniθɪŋ/ /els/', category: 'followup' },
  ],
  dialogs: [
    {
      id: 'hcd-1',
      title: 'Wrong Order',
      titleVi: 'Nhầm order',
      situation: 'Customer received the wrong drink',
      situationVi: 'Khách nhận nhầm đồ uống',
      level: 2,
      lines: [
        { speaker: 'other', speakerLabel: 'Customer', text: "Excuse me, I ordered a taro milk tea but this tastes like matcha. I think there's been a mix-up?", vietnamese: 'Xin lỗi, tôi gọi trà sữa khoai môn nhưng cái này có vị matcha. Hình như có nhầm lẫn?' },
        { speaker: 'you', speakerLabel: 'You', text: "Oh, I'm so sorry about that! Let me check your receipt... You're absolutely right, this is matcha. That's completely our mistake.", vietnamese: 'Ồ, tôi rất xin lỗi! Để tôi kiểm tra hóa đơn... Bạn hoàn toàn đúng, đây là matcha. Đó hoàn toàn là lỗi của chúng tôi.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "It's okay, but I really don't like matcha.", vietnamese: 'Thôi được, nhưng tôi thật sự không thích matcha.' },
        { speaker: 'you', speakerLabel: 'You', text: "Of course! I'll make your taro milk tea right now, it won't take long at all. Can I get your name again?", vietnamese: 'Tất nhiên! Tôi sẽ làm trà sữa khoai môn cho bạn ngay, sẽ không lâu đâu. Cho tôi tên bạn lại được không?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "It's Minh.", vietnamese: 'Minh ạ.' },
        { speaker: 'you', speakerLabel: 'You', text: "Minh, your taro milk tea will be ready in 3 minutes. And please, keep the matcha — give it to a friend! Again, I'm really sorry for the confusion.", vietnamese: 'Minh ơi, trà sữa khoai môn của bạn xong sau 3 phút. Và bạn giữ ly matcha lại nhé — tặng bạn bè! Một lần nữa, tôi rất xin lỗi vì sự nhầm lẫn này.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Oh, that's very kind, thank you!", vietnamese: 'Ồ bạn tốt quá, cảm ơn nhé!' },
        { speaker: 'you', speakerLabel: 'You', text: "Thank you for your patience. I hope you enjoy your drink!", vietnamese: 'Cảm ơn bạn đã kiên nhẫn. Chúc bạn ngon miệng!' },
      ],
      keyPoints: ['Immediate apology', 'Taking responsibility', 'Offering replacement', 'Extra gesture (free drink)'],
    },
    {
      id: 'hcd-2',
      title: 'Long Wait Time',
      titleVi: 'Chờ quá lâu',
      situation: 'Customer has been waiting too long for their order',
      situationVi: 'Khách đợi quá lâu để nhận đơn',
      level: 2,
      lines: [
        { speaker: 'other', speakerLabel: 'Customer', text: "Excuse me, I've been waiting for 20 minutes. My order should've been ready by now.", vietnamese: 'Xin lỗi, tôi đã chờ 20 phút rồi. Đơn của tôi lẽ ra phải xong rồi chứ.' },
        { speaker: 'you', speakerLabel: 'You', text: "I'm so sorry for the long wait! Can I get your name so I can check on your order?", vietnamese: 'Tôi rất xin lỗi vì bạn phải chờ lâu! Cho tôi tên bạn để tôi kiểm tra đơn nhé?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "It's Anna. I ordered a large passion fruit tea.", vietnamese: 'Anna. Tôi gọi một ly trà chanh leo lớn.' },
        { speaker: 'you', speakerLabel: 'You', text: "Anna, let me check right now... I apologize, your order was accidentally skipped in our system. I'm making it personally right now and it will be ready in 2 minutes.", vietnamese: 'Anna, để tôi kiểm tra ngay... Tôi xin lỗi, đơn của bạn bị bỏ sót trong hệ thống của chúng tôi. Tôi đang tự tay làm ngay bây giờ và sẽ xong trong 2 phút.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "That's really frustrating. I'm already late for my meeting.", vietnamese: 'Điều này thật sự khó chịu. Tôi đã trễ cuộc họp rồi.' },
        { speaker: 'you', speakerLabel: 'You', text: "I completely understand and I sincerely apologize. Please accept this voucher for a free drink on your next visit — it's the least I can do for making you wait.", vietnamese: 'Tôi hoàn toàn hiểu và thành thật xin lỗi. Xin hãy nhận voucher uống miễn phí cho lần tới — đó là điều tối thiểu tôi có thể làm vì đã để bạn chờ.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Okay, thank you for that.", vietnamese: 'Thôi được, cảm ơn bạn.' },
        { speaker: 'you', speakerLabel: 'You', text: "Your passion fruit tea is ready! Again, I'm truly sorry. We're fixing our system to prevent this from happening again.", vietnamese: 'Trà chanh leo của bạn xong rồi! Một lần nữa tôi thành thật xin lỗi. Chúng tôi đang sửa hệ thống để tránh điều này xảy ra lại.' },
      ],
      keyPoints: ['Empathy phrases', 'Taking personal responsibility', 'Compensation (voucher)', 'Explaining the fix'],
    },
    {
      id: 'hcd-3',
      title: 'Requesting a Refund',
      titleVi: 'Yêu cầu hoàn tiền',
      situation: 'Customer is unhappy with the quality and wants a refund',
      situationVi: 'Khách không hài lòng về chất lượng và muốn hoàn tiền',
      level: 3,
      lines: [
        { speaker: 'other', speakerLabel: 'Customer', text: "I'd like to get a refund. This drink tastes completely off — it's way too sweet and the pearls are hard.", vietnamese: 'Tôi muốn hoàn tiền. Đồ uống này có vị lạ lắm — ngọt quá và trân châu cứng.' },
        { speaker: 'you', speakerLabel: 'You', text: "I'm really sorry to hear that. You're absolutely right to let us know. Could I ask when you purchased this?", vietnamese: 'Tôi rất tiếc khi nghe điều đó. Bạn hoàn toàn đúng khi cho chúng tôi biết. Bạn mua lúc nào vậy ạ?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Just 10 minutes ago. I have the receipt here.", vietnamese: '10 phút trước thôi. Tôi có hóa đơn đây.' },
        { speaker: 'you', speakerLabel: 'You', text: "Of course. I can offer you a full refund or we can make you a completely new drink — whichever you prefer.", vietnamese: 'Tất nhiên. Tôi có thể hoàn tiền đầy đủ hoặc làm cho bạn một ly hoàn toàn mới — tùy bạn chọn.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "I'll take the refund, please. I need to go.", vietnamese: 'Cho tôi hoàn tiền nhé. Tôi cần đi rồi.' },
        { speaker: 'you', speakerLabel: 'You', text: "Absolutely. I'll process that right now. Would you like it back on your card or as cash?", vietnamese: 'Được ạ. Tôi sẽ xử lý ngay. Bạn muốn hoàn vào thẻ hay tiền mặt?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Cash is fine.", vietnamese: 'Tiền mặt được.' },
        { speaker: 'you', speakerLabel: 'You', text: "Here's your refund. Again, I sincerely apologize. We take quality very seriously and I'll make sure the team knows about this issue today. Thank you for your feedback.", vietnamese: 'Đây là tiền hoàn lại. Một lần nữa tôi thành thật xin lỗi. Chúng tôi rất coi trọng chất lượng và tôi sẽ đảm bảo nhóm biết về vấn đề này hôm nay. Cảm ơn phản hồi của bạn.' },
      ],
      keyPoints: ['Refund process', 'Not arguing with customer', 'Asking clarifying questions', 'Professional closure'],
    },
  ],
  vocabulary: [
    { id: 'hcv-1', word: 'refund', partOfSpeech: 'noun/verb', definition: 'Money returned to a customer who is not satisfied', definitionVi: 'Hoàn tiền', example: "I'd like to request a refund.", exampleVi: 'Tôi muốn yêu cầu hoàn tiền.', phonetic: '/ˈriːfʌnd/' },
    { id: 'hcv-2', word: 'replacement', partOfSpeech: 'noun', definition: 'A new item given to replace a faulty one', definitionVi: 'Đổi hàng, thay thế', example: "We'll provide a replacement drink.", exampleVi: 'Chúng tôi sẽ đổi đồ uống khác.', phonetic: '/rɪˈpleɪsmənt/' },
    { id: 'hcv-3', word: 'inconvenience', partOfSpeech: 'noun', definition: 'Trouble or difficulty caused to someone', definitionVi: 'Sự bất tiện', example: 'I apologize for the inconvenience.', exampleVi: 'Tôi xin lỗi vì sự bất tiện này.', phonetic: '/ˌɪnkənˈviːniəns/' },
    { id: 'hcv-4', word: 'frustration', partOfSpeech: 'noun', definition: 'The feeling of being upset when things go wrong', definitionVi: 'Sự thất vọng, bực bội', example: 'I understand your frustration.', exampleVi: 'Tôi hiểu sự thất vọng của bạn.', phonetic: '/frʌˈstreɪʃən/' },
    { id: 'hcv-5', word: 'voucher', partOfSpeech: 'noun', definition: 'A coupon that gives a discount or free item', definitionVi: 'Phiếu giảm giá, voucher', example: "Here's a voucher for your next visit.", exampleVi: 'Đây là voucher cho lần ghé thăm tiếp theo.', phonetic: '/ˈvaʊtʃər/' },
    { id: 'hcv-6', word: 'process', partOfSpeech: 'verb', definition: 'To handle or deal with something officially', definitionVi: 'Xử lý', example: "I'll process your refund right now.", exampleVi: 'Tôi sẽ xử lý hoàn tiền ngay.', phonetic: '/ˈprɒses/' },
  ],
  readingPassages: [
    {
      id: 'hcr-1',
      title: 'Our Customer Service Policy',
      titleVi: 'Chính sách dịch vụ khách hàng',
      content: `At Boba Heaven, our customers are at the heart of everything we do. This policy outlines how our team should respond when things go wrong.

**The 3-Step Service Recovery Method**

Step 1 — Acknowledge: When a customer raises a concern, listen without interrupting. Acknowledge their feelings first. Use phrases like "I completely understand" or "I'm sorry to hear that." Never argue or become defensive, even if you believe the customer is wrong.

Step 2 — Apologize: Offer a sincere apology immediately, regardless of who is at fault. Saying sorry does not mean admitting legal liability — it means you care about the customer's experience. Keep it brief and genuine: "I sincerely apologize for the inconvenience."

Step 3 — Act: Offer a clear solution. The solution should be proportional to the problem. For minor issues (wrong topping, slightly wrong sugar level), offer a replacement. For major issues (long wait, expired product, wrong order), offer a replacement plus a voucher. For repeat or serious complaints, escalate to the manager immediately and consider a full refund.

**Response Time Standards**
- In-store complaints: Resolve within 5 minutes.
- Online reviews (Google, Facebook): Respond within 24 hours.
- Email complaints: Respond within 48 hours.

**What NOT to do**
Never tell a customer they are wrong. Never say "That's our policy" without offering an alternative. Never discuss other staff members with a customer. Never promise something you cannot deliver.

**Recording Complaints**
All complaints must be logged in the daily incident book, including the date, the issue, and how it was resolved. This helps us identify patterns and prevent recurring problems.`,
      questions: [
        { question: 'What is the FIRST step in the 3-Step Service Recovery Method?', options: ['Apologize to the customer', 'Offer a refund immediately', 'Acknowledge the customer\'s feelings', 'Escalate to the manager'], correctIndex: 2, explanation: 'Step 1 is to Acknowledge — listen without interrupting and acknowledge the customer\'s feelings first.' },
        { question: 'According to the policy, what should staff do for MAJOR issues like a long wait or wrong order?', options: ['Offer only a replacement drink', 'Give a full refund only', 'Offer a replacement plus a voucher', 'Tell the manager and do nothing'], correctIndex: 2, explanation: 'For major issues, the policy states: offer a replacement PLUS a voucher.' },
        { question: 'How long does the shop have to respond to Google or Facebook reviews?', options: ['1 hour', '24 hours', '48 hours', '5 minutes'], correctIndex: 1, explanation: 'Online reviews must be responded to within 24 hours. Email complaints have a 48-hour window.' },
        { question: 'What must staff do after resolving ANY complaint?', options: ['Call the customer the next day', 'Post about it on social media', 'Log it in the daily incident book', 'Ask the customer to change their review'], correctIndex: 2, explanation: 'All complaints must be logged in the daily incident book, including date, issue, and resolution.' },
      ],
    },
    {
      id: 'hcr-2',
      title: 'Email: Handling a Customer Complaint',
      titleVi: 'Email: Xử lý phàn nàn của khách',
      content: `**From:** angry.customer@email.com
**To:** bobaheavenshop@email.com
**Subject:** Very disappointed with my experience

Hello,

I am writing to express my frustration with my visit to your shop yesterday, April 10th, at approximately 3pm.

I waited 35 minutes for my order despite being told it would be ready in 10 minutes. When I finally received my drink — a large taro milk tea — it was completely wrong. I had ordered 25% sugar and no ice, but the drink was extremely sweet and full of ice. I did not have time to get it replaced as I was already late for a meeting.

This is not the first time I have experienced poor service at your shop. I am a regular customer and have spent a lot of money here. I expect better.

I would like a full refund for yesterday's order and I would appreciate an explanation for why my wait was so long.

Sincerely,
David Nguyen

---

**From:** bobaheavenshop@email.com
**To:** angry.customer@email.com
**Subject:** Re: Very disappointed — Our sincerest apologies

Dear Mr. Nguyen,

Thank you for taking the time to write to us. I have read your message carefully and I want to start by offering my sincerest apologies. What you experienced is completely unacceptable and does not reflect our standards.

A 35-minute wait with an incorrect drink order is a serious failure on our part. After investigating, I found that your order was accidentally skipped in our queue system during a particularly busy period. This should never happen, and I have already spoken to the team about implementing stricter order tracking.

Regarding your refund: I have processed a full refund of $6.00 to your payment method, which should appear within 3–5 business days.

Additionally, because you are a valued regular customer, I have also added $10 in store credit to your loyalty account as a gesture of goodwill. I hope you will give us another chance to show you the quality of service you deserve.

Again, I am deeply sorry for the inconvenience. Please do not hesitate to reach out if you have any further concerns.

Warm regards,
Minh — Manager, Boba Heaven`,
      questions: [
        { question: 'What were the TWO main problems the customer experienced?', options: ['Wrong drink and rude staff', 'Long wait and wrong drink', 'High price and wrong order', 'Bad taste and dirty shop'], correctIndex: 1, explanation: 'David Nguyen complained about a 35-minute wait (told 10 minutes) AND receiving the wrong drink (wrong sugar and ice level).' },
        { question: 'Why was the customer\'s order delayed, according to the manager\'s reply?', options: ['The shop was understaffed', 'The order was accidentally skipped in the queue system', 'The ingredients had run out', 'The system crashed'], correctIndex: 1, explanation: 'The manager explains the order was "accidentally skipped in our queue system during a particularly busy period."' },
        { question: 'What TWO things did the manager offer the customer?', options: ['A free drink and an apology', 'A full refund and $10 store credit', 'A replacement drink and a discount', 'An apology and a voucher'], correctIndex: 1, explanation: 'The manager offered: (1) a full $6.00 refund and (2) $10 in store credit as goodwill.' },
        { question: 'What does the phrase "gesture of goodwill" mean in the manager\'s email?', options: ['A legally required payment', 'Something given to show care, beyond what is owed', 'A discount on the next visit', 'An apology letter'], correctIndex: 1, explanation: '"Gesture of goodwill" means something extra given voluntarily to show care — beyond just fixing the problem.' },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'hcw-1',
      title: 'Respond to a Negative Review',
      titleVi: 'Phản hồi đánh giá tiêu cực',
      instructions: 'A customer left this Google Review: "Waited 30 minutes for my drink and when I finally got it, the sugar was completely wrong. Very disappointed." Write a professional public response.',
      instructionsVi: 'Một khách để lại Google Review: "Chờ 30 phút mới được đồ uống và khi nhận thì lượng đường hoàn toàn sai. Rất thất vọng." Hãy viết phản hồi công khai chuyên nghiệp.',
      sampleAnswer: `Dear valued customer,

Thank you for taking the time to share your feedback. We are truly sorry for your experience — a 30-minute wait and incorrect sugar level is absolutely not the standard we hold ourselves to.

We take all feedback seriously and have already discussed this with our team to prevent similar issues from happening again.

We would love the chance to make this right for you. Please reach out to us directly at [contact info] and we'll make sure your next visit exceeds your expectations.

Again, we sincerely apologize and hope to see you again soon.

Warm regards,
[Shop Name] Team`,
      keyPhrases: ['valued customer', 'take feedback seriously', 'make this right', 'exceeds your expectations', 'sincerely apologize'],
    },
  ],
};
