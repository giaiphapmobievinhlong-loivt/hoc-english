import { Context } from '../types';

export const grabfoodDeliveryContext: Context = {
  id: 'grabfood-delivery',
  title: 'GrabFood — Picking Up & Delivering Food',
  titleVi: 'GrabFood — Nhận đơn và giao đồ ăn',
  description: 'Learn how to read order codes at a restaurant, check the order is correct, and deliver food to customers politely.',
  descriptionVi: 'Học cách đọc mã đơn tại quán ăn, kiểm tra đơn hàng đúng, và giao đồ ăn cho khách một cách lịch sự.',
  icon: '🍔',
  level: 1,
  phrases: [
    { id: 'gf-1', english: "Hi, I'm here for a GrabFood pickup, order code [number].", vietnamese: 'Chào, tôi đến lấy đơn GrabFood, mã đơn [số].', phonetic: '/haɪ/ /aɪm/ /hɪər/ /fɔːr/', category: 'pickup' },
    { id: 'gf-2', english: 'Could you confirm the order number for me?', vietnamese: 'Bạn xác nhận giúp tôi mã đơn được không?', phonetic: '/kʊd/ /juː/ /kənˈfɜːrm/ /ðə/', category: 'pickup' },
    { id: 'gf-3', english: 'Is this order ready yet?', vietnamese: 'Đơn này đã xong chưa ạ?', phonetic: '/ɪz/ /ðɪs/ /ˈɔːrdər/ /ˈredi/ /jet/', category: 'pickup' },
    { id: 'gf-4', english: "I'll wait here, no problem.", vietnamese: 'Tôi sẽ đợi ở đây, không sao đâu.', phonetic: '/aɪl/ /weɪt/ /hɪər/', category: 'pickup' },
    { id: 'gf-5', english: 'Could you double check everything is included?', vietnamese: 'Bạn kiểm tra lại giúp đã đủ hết chưa?', phonetic: '/kʊd/ /juː/ /ˈdʌbl/ /tʃek/', category: 'pickup' },
    { id: 'gf-6', english: "I've picked up your food and I'm heading your way now.", vietnamese: 'Tôi đã lấy đồ ăn và đang trên đường đến chỗ bạn.', phonetic: '/aɪv/ /pɪkt/ /ʌp/ /jɔːr/ /fuːd/', category: 'update' },
    { id: 'gf-7', english: "Hi, I'm outside with your GrabFood order.", vietnamese: 'Chào bạn, tôi đang ở ngoài với đơn GrabFood của bạn.', phonetic: '/haɪ/ /aɪm/ /ˈaʊtsaɪd/', category: 'delivery' },
    { id: 'gf-8', english: 'What is the gate code, or should I wait at the main entrance?', vietnamese: 'Mã cổng là gì, hay tôi đợi ở cổng chính ạ?', phonetic: '/wɒt/ /ɪz/ /ðə/ /ɡeɪt/ /koʊd/', category: 'delivery' },
    { id: 'gf-9', english: 'Would you like a no-contact delivery, or shall I hand it to you directly?', vietnamese: 'Bạn muốn giao hàng không tiếp xúc, hay tôi đưa trực tiếp cho bạn?', phonetic: '/wʊd/ /juː/ /laɪk/ /ə/ /noʊ/', category: 'delivery' },
    { id: 'gf-10', english: 'Here is your food, please enjoy your meal!', vietnamese: 'Đây là đồ ăn của bạn, chúc bạn ngon miệng!', phonetic: '/hɪər/ /ɪz/ /jɔːr/ /fuːd/', category: 'delivery' },
    { id: 'gf-11', english: "I'm sorry, the restaurant is taking longer than expected to prepare your order.", vietnamese: 'Xin lỗi, quán đang chuẩn bị món lâu hơn dự kiến.', phonetic: '/aɪm/ /ˈsɒri/ /ðə/ /ˈrestrɒnt/', category: 'apology' },
    { id: 'gf-12', english: "I can't find your exact location. Could you send me a landmark nearby?", vietnamese: 'Tôi không tìm ra chính xác vị trí của bạn. Bạn gửi giúp tôi một điểm mốc gần đó được không?', phonetic: '/aɪ/ /kænt/ /faɪnd/ /jɔːr/', category: 'directions' },
    { id: 'gf-13', english: "I'm very sorry, one item seems to be missing from the order.", vietnamese: 'Tôi rất xin lỗi, có vẻ đơn hàng thiếu mất một món.', phonetic: '/aɪm/ /ˈveri/ /ˈsɒri/', category: 'apology' },
    { id: 'gf-14', english: 'Please contact GrabFood support, and they will help you with a refund.', vietnamese: 'Vui lòng liên hệ hỗ trợ GrabFood, họ sẽ hỗ trợ bạn hoàn tiền.', phonetic: '/pliːz/ /kənˈtækt/', category: 'apology' },
    { id: 'gf-15', english: 'Thank you for your order. Have a great meal!', vietnamese: 'Cảm ơn bạn đã đặt món. Chúc bạn ăn ngon!', phonetic: '/θæŋk/ /juː/ /fɔːr/ /jɔːr/ /ˈɔːrdər/', category: 'farewell' },
  ],
  dialogs: [
    {
      id: 'gfd-1',
      title: 'Simple Pickup and Drop-off',
      titleVi: 'Nhận đơn và giao hàng đơn giản',
      situation: 'The driver picks up a food order at a restaurant and delivers it smoothly',
      situationVi: 'Tài xế nhận đơn tại quán ăn và giao hàng suôn sẻ',
      level: 1,
      lines: [
        { speaker: 'you', speakerLabel: 'You (Driver)', text: "Hi, I'm here for a GrabFood pickup, order code 4521.", vietnamese: 'Chào, tôi đến lấy đơn GrabFood, mã đơn 4521.' },
        { speaker: 'other', speakerLabel: 'Restaurant Staff', text: "Sure, let me check... yes, here it is, all packed.", vietnamese: 'Được, để tôi kiểm tra... vâng, đây rồi, đã đóng gói xong.' },
        { speaker: 'you', speakerLabel: 'You', text: "Great, could you double check everything is included?", vietnamese: 'Tuyệt, bạn kiểm tra lại giúp đã đủ hết chưa?' },
        { speaker: 'other', speakerLabel: 'Restaurant Staff', text: "Yes, one burger, one fries, and a drink — complete.", vietnamese: 'Vâng, một burger, một khoai tây chiên, và một nước uống — đủ rồi.' },
        { speaker: 'you', speakerLabel: 'You', text: "Perfect, thank you!", vietnamese: 'Tuyệt vời, cảm ơn bạn!' },
        { speaker: 'you', speakerLabel: 'You', text: "Hi, I'm outside with your GrabFood order.", vietnamese: 'Chào bạn, tôi đang ở ngoài với đơn GrabFood của bạn.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Coming right down, thank you!", vietnamese: 'Xuống ngay đây, cảm ơn!' },
        { speaker: 'you', speakerLabel: 'You', text: "Here is your food, please enjoy your meal!", vietnamese: 'Đây là đồ ăn của bạn, chúc bạn ngon miệng!' },
      ],
      keyPoints: ['Confirming order code', 'Checking items are complete', 'Announcing arrival', 'Polite handover'],
    },
    {
      id: 'gfd-2',
      title: 'Restaurant Delay',
      titleVi: 'Quán ăn chuẩn bị món chậm',
      situation: 'The order takes longer than expected, and the driver needs to update the customer',
      situationVi: 'Đơn hàng chuẩn bị lâu hơn dự kiến, tài xế cần thông báo cho khách',
      level: 2,
      lines: [
        { speaker: 'you', speakerLabel: 'You', text: "Hi, could you confirm the order number for me? I'm here for order 7788.", vietnamese: 'Chào, bạn xác nhận giúp mã đơn được không? Tôi đến lấy đơn 7788.' },
        { speaker: 'other', speakerLabel: 'Restaurant Staff', text: "Sorry, that one is still cooking. It'll be about 8 more minutes.", vietnamese: 'Xin lỗi, đơn đó vẫn đang nấu. Sẽ mất khoảng 8 phút nữa.' },
        { speaker: 'you', speakerLabel: 'You', text: "I'll wait here, no problem. I'll let the customer know.", vietnamese: 'Tôi sẽ đợi ở đây, không sao đâu. Tôi sẽ báo cho khách.' },
        { speaker: 'you', speakerLabel: 'You', text: "Hi, this is your GrabFood driver. I'm sorry, the restaurant is taking longer than expected to prepare your order. I'll message you again once I've picked it up.", vietnamese: 'Chào bạn, tôi là tài xế GrabFood. Xin lỗi, quán đang chuẩn bị món lâu hơn dự kiến. Tôi sẽ nhắn lại khi lấy được hàng.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "No worries, thanks for letting me know!", vietnamese: 'Không sao, cảm ơn đã báo trước!' },
        { speaker: 'you', speakerLabel: 'You', text: "I've picked up your food and I'm heading your way now.", vietnamese: 'Tôi đã lấy đồ ăn và đang trên đường đến chỗ bạn.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Great, see you soon!", vietnamese: 'Tuyệt, hẹn gặp bạn sớm!' },
      ],
      keyPoints: ['Handling a preparation delay', 'Proactively updating the customer', 'Staying polite under pressure'],
    },
    {
      id: 'gfd-3',
      title: 'Hard-to-Find Address & Missing Item',
      titleVi: 'Khó tìm địa chỉ và thiếu món',
      situation: 'The driver cannot find the exact address and later discovers an item is missing from the order',
      situationVi: 'Tài xế không tìm được chính xác địa chỉ và sau đó phát hiện đơn thiếu món',
      level: 3,
      lines: [
        { speaker: 'you', speakerLabel: 'You', text: "Hi, I have your GrabFood order, but I can't find your exact location. Could you send me a landmark nearby?", vietnamese: 'Chào bạn, tôi có đơn GrabFood của bạn, nhưng không tìm ra chính xác vị trí. Bạn gửi giúp tôi một điểm mốc gần đó được không?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Sure, I'm right next to the blue pharmacy on Nguyen Trai Street.", vietnamese: 'Được, tôi ở ngay cạnh nhà thuốc màu xanh trên đường Nguyễn Trãi.' },
        { speaker: 'you', speakerLabel: 'You', text: "Got it, I see the pharmacy now. What is the gate code, or should I wait at the main entrance?", vietnamese: 'Rõ rồi, tôi thấy nhà thuốc rồi. Mã cổng là gì, hay tôi đợi ở cổng chính ạ?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Just wait at the main entrance, I'll come down.", vietnamese: 'Cứ đợi ở cổng chính, tôi sẽ xuống.' },
        { speaker: 'you', speakerLabel: 'You', text: "Here is your food. I'm very sorry, one item seems to be missing from the order — I only received two items from the restaurant.", vietnamese: 'Đây là đồ ăn của bạn. Tôi rất xin lỗi, có vẻ đơn hàng thiếu mất một món — quán chỉ đưa cho tôi hai món.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Oh no, that's not great. What should I do?", vietnamese: 'Ôi không, tệ quá. Tôi nên làm gì bây giờ?' },
        { speaker: 'you', speakerLabel: 'You', text: "I understand your frustration. Please contact GrabFood support through the app, and they will help you with a refund for the missing item.", vietnamese: 'Tôi hiểu sự khó chịu của bạn. Vui lòng liên hệ hỗ trợ GrabFood qua ứng dụng, họ sẽ hỗ trợ bạn hoàn tiền cho món bị thiếu.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Okay, thank you for letting me know honestly.", vietnamese: 'Được rồi, cảm ơn bạn đã thẳng thắn cho tôi biết.' },
        { speaker: 'you', speakerLabel: 'You', text: "Of course. Thank you for your order, and sorry again for the trouble!", vietnamese: 'Không có gì. Cảm ơn bạn đã đặt món, và xin lỗi lần nữa vì sự bất tiện!' },
      ],
      keyPoints: ['Asking for a landmark when lost', 'Asking about gate/entrance access', 'Honestly reporting a missing item', 'Directing the customer to support for a refund'],
    },
  ],
  vocabulary: [
    { id: 'gfv-1', word: 'order code', partOfSpeech: 'noun', definition: 'A number used to identify a specific food order', definitionVi: 'Mã đơn hàng', example: "I'm here for a GrabFood pickup, order code 4521.", exampleVi: 'Tôi đến lấy đơn GrabFood, mã đơn 4521.', phonetic: '/ˈɔːrdər koʊd/' },
    { id: 'gfv-2', word: 'pickup', partOfSpeech: 'noun', definition: 'The act of collecting an order from a restaurant', definitionVi: 'Việc lấy hàng, nhận đơn', example: 'Is this order ready for pickup?', exampleVi: 'Đơn này đã sẵn sàng để lấy chưa?', phonetic: '/ˈpɪkʌp/' },
    { id: 'gfv-3', word: 'no-contact delivery', partOfSpeech: 'phrase', definition: 'Delivering an order without direct physical contact', definitionVi: 'Giao hàng không tiếp xúc', example: 'Would you like a no-contact delivery?', exampleVi: 'Bạn muốn giao hàng không tiếp xúc không?', phonetic: '/noʊ ˈkɒntækt dɪˈlɪvəri/' },
    { id: 'gfv-4', word: 'missing item', partOfSpeech: 'phrase', definition: 'A product that should be in the order but is not', definitionVi: 'Món bị thiếu', example: 'One item seems to be missing from the order.', exampleVi: 'Có vẻ đơn hàng thiếu mất một món.', phonetic: '/ˈmɪsɪŋ ˈaɪtəm/' },
    { id: 'gfv-5', word: 'refund', partOfSpeech: 'noun/verb', definition: 'Money given back to a customer', definitionVi: 'Hoàn tiền', example: 'They will help you with a refund.', exampleVi: 'Họ sẽ hỗ trợ bạn hoàn tiền.', phonetic: '/ˈriːfʌnd/' },
    { id: 'gfv-6', word: 'gate code', partOfSpeech: 'noun', definition: 'A number code needed to open a building gate or door', definitionVi: 'Mã cổng, mã cửa', example: 'What is the gate code for your building?', exampleVi: 'Mã cổng tòa nhà của bạn là gì?', phonetic: '/ɡeɪt koʊd/' },
    { id: 'gfv-7', word: 'landmark', partOfSpeech: 'noun', definition: 'A recognizable place used to describe a location', definitionVi: 'Điểm mốc, địa danh dễ nhận biết', example: 'Could you send me a landmark nearby?', exampleVi: 'Bạn gửi giúp tôi một điểm mốc gần đó được không?', phonetic: '/ˈlændmɑːrk/' },
    { id: 'gfv-8', word: 'hot bag', partOfSpeech: 'noun', definition: 'An insulated bag used to keep food warm during delivery', definitionVi: 'Túi giữ nhiệt', example: 'I keep the food warm in my hot bag.', exampleVi: 'Tôi giữ đồ ăn nóng trong túi giữ nhiệt.', phonetic: '/hɒt bæɡ/' },
  ],
  readingPassages: [
    {
      id: 'gfr-1',
      title: 'GrabFood: A Smooth Delivery from Start to Finish',
      titleVi: 'GrabFood: Giao hàng suôn sẻ từ đầu đến cuối',
      content: `A great GrabFood delivery experience starts at the restaurant and ends at the customer's door.

**At the restaurant**
When you arrive, say clearly: "Hi, I'm here for a GrabFood pickup, order code [number]." If the food is not ready, it's fine to say: "I'll wait here, no problem." Always double check that all items are included before you leave — this prevents complaints later.

**On the way**
Keep the food safe in a hot bag so it stays warm and doesn't spill. If you cannot find the customer's exact address, message them: "I can't find your exact location. Could you send me a landmark nearby?"

**At delivery**
Announce your arrival politely: "Hi, I'm outside with your GrabFood order." Ask if they want no-contact delivery or a direct handover, especially in apartment buildings — ask about the gate code too.

**If something goes wrong**
If an item is missing, be honest: "I'm very sorry, one item seems to be missing from the order." Direct the customer to GrabFood support for a refund rather than trying to fix it yourself. Honesty and politeness go a long way toward keeping your rating high.`,
      questions: [
        { question: 'What should a driver say when arriving at the restaurant?', options: ['Nothing, just wait', '"Hi, I\'m here for a GrabFood pickup, order code [number]."', '"Give me the food now."', 'Show a phone screenshot only'], correctIndex: 1, explanation: 'The passage gives this exact phrase for arriving at the restaurant.' },
        { question: 'Why should a driver keep food in a hot bag?', options: ['To make it heavier', 'So it stays warm and doesn\'t spill', 'It is required by law', 'To hide it from customers'], correctIndex: 1, explanation: 'The passage says the hot bag keeps food warm and prevents spilling.' },
        { question: 'What should the driver do if they cannot find the exact address?', options: ['Cancel the order', 'Message the customer and ask for a nearby landmark', 'Leave the food anywhere', 'Wait without contacting anyone'], correctIndex: 1, explanation: 'The passage says to message the customer asking for a landmark nearby.' },
        { question: 'What should a driver do if an item is missing from the order?', options: ['Say nothing', 'Be honest and direct the customer to GrabFood support for a refund', 'Pay for it themselves without telling anyone', 'Blame the customer'], correctIndex: 1, explanation: 'The passage says to be honest and direct the customer to support for a refund.' },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'gfw-1',
      title: 'Reply to a Complaint About Cold Food',
      titleVi: 'Trả lời khiếu nại về đồ ăn bị nguội',
      instructions: 'A customer messages: "The food arrived cold and it took a long time." Write a polite, honest reply explaining what happened and what they should do next.',
      instructionsVi: 'Khách nhắn: "Đồ ăn tới nguội ngắt và mất nhiều thời gian." Hãy viết phản hồi lịch sự, trung thực giải thích chuyện gì đã xảy ra và khách nên làm gì tiếp theo.',
      sampleAnswer: `Hi, I'm really sorry to hear that. The restaurant took longer than expected to prepare your order, which delayed the delivery. I kept it in my hot bag the whole way, but I understand it may still have cooled down. Please contact GrabFood support through the app — they can look into this and help with a refund or credit if needed. Thank you for your understanding, and I'm sorry for the inconvenience.`,
      keyPhrases: ['really sorry to hear that', 'took longer than expected', 'hot bag', 'contact GrabFood support', 'sorry for the inconvenience'],
    },
  ],
};
