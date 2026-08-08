import { Context } from '../types';

export const grabmartDeliveryContext: Context = {
  id: 'grabmart-delivery',
  title: 'GrabMart — Shopping & Delivering Groceries',
  titleVi: 'GrabMart — Mua sắm và giao hàng siêu thị',
  description: 'Learn how to find the pickup counter at a supermarket, read order codes, handle out-of-stock items, and deliver groceries.',
  descriptionVi: 'Học cách tìm quầy nhận hàng tại siêu thị, đọc mã đơn, xử lý hàng hết, và giao hàng tạp hóa.',
  icon: '🛒',
  level: 2,
  phrases: [
    { id: 'gm-1', english: 'Excuse me, where can I pick up GrabMart orders?', vietnamese: 'Xin lỗi, tôi có thể nhận đơn GrabMart ở đâu ạ?', phonetic: '/ɪkˈskjuːz/ /miː/ /wer/', category: 'pickup' },
    { id: 'gm-2', english: "Hi, I'm here to collect an order, code [number].", vietnamese: 'Chào, tôi đến lấy đơn hàng, mã đơn [số].', phonetic: '/haɪ/ /aɪm/ /hɪər/ /tuː/ /kəˈlekt/', category: 'pickup' },
    { id: 'gm-3', english: 'Could you help me check this order against the list?', vietnamese: 'Bạn giúp tôi kiểm tra đơn này theo danh sách được không?', phonetic: '/kʊd/ /juː/ /help/ /miː/ /tʃek/', category: 'pickup' },
    { id: 'gm-4', english: "I'm sorry, this item is out of stock. Would a similar item work instead?", vietnamese: 'Xin lỗi, món này hết hàng rồi. Một món tương tự có được không ạ?', phonetic: '/aɪm/ /ˈsɒri/ /ðɪs/ /ˈaɪtəm/', category: 'substitution' },
    { id: 'gm-5', english: 'May I call you to confirm a substitute item?', vietnamese: 'Tôi có thể gọi cho bạn để xác nhận món thay thế được không?', phonetic: '/meɪ/ /aɪ/ /kɔːl/ /juː/', category: 'substitution' },
    { id: 'gm-6', english: "This item needs to stay cold, so I'll keep it in an insulated bag.", vietnamese: 'Món này cần giữ lạnh, nên tôi sẽ để trong túi giữ nhiệt.', phonetic: '/ðɪs/ /ˈaɪtəm/ /niːdz/ /tuː/ /steɪ/ /koʊld/', category: 'handling' },
    { id: 'gm-7', english: 'Could you double check the weight on this item, please?', vietnamese: 'Bạn kiểm tra lại cân nặng món này giúp tôi được không?', phonetic: '/kʊd/ /juː/ /ˈdʌbl/ /tʃek/', category: 'pickup' },
    { id: 'gm-8', english: "I've finished shopping and I'm heading to the checkout now.", vietnamese: 'Tôi đã mua xong và đang ra quầy thanh toán.', phonetic: '/aɪv/ /ˈfɪnɪʃt/ /ˈʃɒpɪŋ/', category: 'update' },
    { id: 'gm-9', english: "I'm on my way to deliver your groceries now.", vietnamese: 'Tôi đang trên đường giao đồ tạp hóa cho bạn.', phonetic: '/aɪm/ /ɒn/ /maɪ/ /weɪ/', category: 'delivery' },
    { id: 'gm-10', english: 'How should I enter the building — is there a security check?', vietnamese: 'Tôi vào tòa nhà bằng cách nào — có phải qua bảo vệ không ạ?', phonetic: '/haʊ/ /ʃʊd/ /aɪ/ /ˈentər/', category: 'delivery' },
    { id: 'gm-11', english: 'Here are your groceries. There were two substitutions — I sent you a message about them.', vietnamese: 'Đây là đồ tạp hóa của bạn. Có hai món được thay thế — tôi đã nhắn tin báo bạn.', phonetic: '/hɪər/ /ɑːr/ /jɔːr/ /ˈɡroʊsəriz/', category: 'delivery' },
    { id: 'gm-12', english: 'The total for this order, including the substitution, is [amount].', vietnamese: 'Tổng tiền đơn này, bao gồm món thay thế, là [số tiền].', phonetic: '/ðə/ /ˈtoʊtl/ /fɔːr/ /ðɪs/ /ˈɔːrdər/', category: 'payment' },
    { id: 'gm-13', english: 'Would you like a refund for the item we could not find?', vietnamese: 'Bạn có muốn hoàn tiền cho món chúng tôi không tìm thấy không?', phonetic: '/wʊd/ /juː/ /laɪk/ /ə/ /ˈriːfʌnd/', category: 'substitution' },
    { id: 'gm-14', english: "Sorry for the wait, the supermarket was very busy today.", vietnamese: 'Xin lỗi vì để bạn đợi, hôm nay siêu thị rất đông.', phonetic: '/ˈsɒri/ /fɔːr/ /ðə/ /weɪt/', category: 'apology' },
    { id: 'gm-15', english: 'Thank you for shopping with GrabMart. Have a wonderful day!', vietnamese: 'Cảm ơn bạn đã mua sắm cùng GrabMart. Chúc bạn một ngày tuyệt vời!', phonetic: '/θæŋk/ /juː/ /fɔːr/ /ˈʃɒpɪŋ/', category: 'farewell' },
  ],
  dialogs: [
    {
      id: 'gmd-1',
      title: 'Simple Pickup at the Supermarket',
      titleVi: 'Nhận hàng đơn giản tại siêu thị',
      situation: 'The driver arrives at a supermarket and needs to find where to collect a prepared GrabMart order',
      situationVi: 'Tài xế đến siêu thị và cần tìm nơi nhận đơn GrabMart đã được chuẩn bị sẵn',
      level: 1,
      lines: [
        { speaker: 'you', speakerLabel: 'You (Driver)', text: "Excuse me, where can I pick up GrabMart orders?", vietnamese: 'Xin lỗi, tôi có thể nhận đơn GrabMart ở đâu ạ?' },
        { speaker: 'other', speakerLabel: 'Staff', text: "Go to counter 3, on the right side.", vietnamese: 'Đi đến quầy số 3, phía bên phải.' },
        { speaker: 'you', speakerLabel: 'You', text: "Thank you! Hi, I'm here to collect an order, code 8842.", vietnamese: 'Cảm ơn! Chào, tôi đến lấy đơn hàng, mã đơn 8842.' },
        { speaker: 'other', speakerLabel: 'Staff', text: "Yes, here it is — two bags.", vietnamese: 'Vâng, đây rồi — hai túi.' },
        { speaker: 'you', speakerLabel: 'You', text: "Could you help me check this order against the list?", vietnamese: 'Bạn giúp tôi kiểm tra đơn này theo danh sách được không?' },
        { speaker: 'other', speakerLabel: 'Staff', text: "Sure, everything is here and complete.", vietnamese: 'Được, mọi thứ đều đủ ở đây.' },
        { speaker: 'you', speakerLabel: 'You', text: "Perfect, thank you. I'm on my way to deliver your groceries now.", vietnamese: 'Tuyệt, cảm ơn bạn. Tôi đang trên đường giao đồ tạp hóa cho bạn.' },
      ],
      keyPoints: ['Asking for the pickup counter', 'Confirming the order code', 'Checking the order against the list', 'Updating the customer'],
    },
    {
      id: 'gmd-2',
      title: 'Out-of-Stock Item — Calling the Customer',
      titleVi: 'Hàng hết — gọi điện cho khách',
      situation: 'An item on the list is out of stock, so the driver calls the customer to confirm a substitute',
      situationVi: 'Một món trong danh sách bị hết hàng, tài xế gọi điện xác nhận món thay thế với khách',
      level: 2,
      lines: [
        { speaker: 'you', speakerLabel: 'You', text: "Hi, I'm shopping for your GrabMart order. I'm sorry, this item is out of stock — the 1-liter fresh milk. Would a similar item work instead?", vietnamese: 'Chào, tôi đang mua hàng cho đơn GrabMart của bạn. Xin lỗi, sữa tươi loại 1 lít đã hết hàng. Một món tương tự có được không ạ?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Oh, that's fine. What options do they have?", vietnamese: 'À, không sao. Họ có những loại nào?' },
        { speaker: 'you', speakerLabel: 'You', text: "They have a different brand, same size, or a 500ml bottle of the same brand. Which would you prefer?", vietnamese: 'Họ có một nhãn hiệu khác, cùng dung tích, hoặc chai 500ml cùng nhãn hiệu bạn muốn. Bạn thích loại nào?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Let's go with the different brand, same size, please.", vietnamese: 'Lấy loại nhãn hiệu khác, cùng dung tích nhé.' },
        { speaker: 'you', speakerLabel: 'You', text: "Got it, thank you! I'll note the substitution and continue shopping.", vietnamese: 'Rõ rồi, cảm ơn bạn! Tôi sẽ ghi chú món thay thế và tiếp tục mua sắm.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Thanks for checking with me first!", vietnamese: 'Cảm ơn đã hỏi ý kiến tôi trước!' },
      ],
      keyPoints: ['Reporting an out-of-stock item', 'Offering substitute options', 'Getting the customer\'s decision before proceeding'],
    },
    {
      id: 'gmd-3',
      title: 'Delivering to an Office Building with Security',
      titleVi: 'Giao hàng đến tòa nhà văn phòng có bảo vệ',
      situation: 'The driver needs to enter an office building through security to deliver groceries',
      situationVi: 'Tài xế cần vào tòa nhà văn phòng qua bảo vệ để giao đồ tạp hóa',
      level: 3,
      lines: [
        { speaker: 'you', speakerLabel: 'You', text: "Hi, I have a GrabMart delivery for the 5th floor. How should I enter the building — is there a security check?", vietnamese: 'Chào, tôi có đơn GrabMart giao lên tầng 5. Tôi vào tòa nhà bằng cách nào — có phải qua bảo vệ không ạ?' },
        { speaker: 'other', speakerLabel: 'Security Guard', text: "Yes, please show your ID and I'll give you a visitor pass.", vietnamese: 'Vâng, vui lòng cho tôi xem CMND và tôi sẽ đưa thẻ khách.' },
        { speaker: 'you', speakerLabel: 'You', text: "Sure, here you go. This item needs to stay cold, so I'll go up quickly.", vietnamese: 'Vâng, của bạn đây. Món này cần giữ lạnh nên tôi sẽ lên nhanh.' },
        { speaker: 'other', speakerLabel: 'Security Guard', text: "No problem, the elevator is on your left.", vietnamese: 'Không sao, thang máy ở phía bên trái bạn.' },
        { speaker: 'you', speakerLabel: 'You', text: "Hi, I'm outside your office with your GrabMart order. Sorry for the wait, the supermarket was very busy today.", vietnamese: 'Chào, tôi đang ở ngoài văn phòng với đơn GrabMart của bạn. Xin lỗi vì để bạn đợi, hôm nay siêu thị rất đông.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "No worries, thanks for bringing it up!", vietnamese: 'Không sao đâu, cảm ơn đã mang lên!' },
        { speaker: 'you', speakerLabel: 'You', text: "Here are your groceries. There were two substitutions — I sent you a message about them. The total, including the substitution, is $34.50.", vietnamese: 'Đây là đồ tạp hóa của bạn. Có hai món được thay thế — tôi đã nhắn tin báo bạn. Tổng tiền, bao gồm món thay thế, là 34.50 đô.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Great, thank you so much for handling that carefully!", vietnamese: 'Tuyệt, cảm ơn bạn rất nhiều vì đã xử lý cẩn thận!' },
        { speaker: 'you', speakerLabel: 'You', text: "You're very welcome. Thank you for shopping with GrabMart. Have a wonderful day!", vietnamese: 'Không có gì. Cảm ơn bạn đã mua sắm cùng GrabMart. Chúc bạn một ngày tuyệt vời!' },
      ],
      keyPoints: ['Asking about building security procedures', 'Keeping cold items properly stored', 'Explaining substitutions and final total', 'Professional closing'],
    },
  ],
  vocabulary: [
    { id: 'gmv-1', word: 'checkout counter', partOfSpeech: 'noun', definition: 'The place in a store where you pay for items', definitionVi: 'Quầy thanh toán', example: "I've finished shopping and I'm heading to the checkout now.", exampleVi: 'Tôi đã mua xong và đang ra quầy thanh toán.', phonetic: '/ˈtʃekaʊt ˈkaʊntər/' },
    { id: 'gmv-2', word: 'substitute item', partOfSpeech: 'noun', definition: 'A different product used to replace one that is unavailable', definitionVi: 'Món hàng thay thế', example: 'May I call you to confirm a substitute item?', exampleVi: 'Tôi gọi cho bạn để xác nhận món thay thế được không?', phonetic: '/ˈsʌbstɪtjuːt ˈaɪtəm/' },
    { id: 'gmv-3', word: 'out of stock', partOfSpeech: 'phrase', definition: 'No longer available to buy', definitionVi: 'Hết hàng', example: 'This item is out of stock.', exampleVi: 'Món này đã hết hàng.', phonetic: '/aʊt əv stɒk/' },
    { id: 'gmv-4', word: 'grocery bag', partOfSpeech: 'noun', definition: 'A bag used to carry food and household items', definitionVi: 'Túi đồ tạp hóa', example: 'I packed everything in one grocery bag.', exampleVi: 'Tôi đóng gói mọi thứ vào một túi đồ tạp hóa.', phonetic: '/ˈɡroʊsəri bæɡ/' },
    { id: 'gmv-5', word: 'insulated bag', partOfSpeech: 'noun', definition: 'A bag designed to keep items cold or hot inside', definitionVi: 'Túi giữ nhiệt', example: "This item needs to stay cold, so I'll keep it in an insulated bag.", exampleVi: 'Món này cần giữ lạnh, tôi sẽ để trong túi giữ nhiệt.', phonetic: '/ˈɪnsjuleɪtɪd bæɡ/' },
    { id: 'gmv-6', word: 'weigh', partOfSpeech: 'verb', definition: 'To measure how heavy something is', definitionVi: 'Cân (trọng lượng)', example: 'Could you double check the weight on this item?', exampleVi: 'Bạn kiểm tra lại cân nặng món này giúp tôi được không?', phonetic: '/weɪ/' },
    { id: 'gmv-7', word: 'security check', partOfSpeech: 'noun', definition: 'A process to verify identity before entering a building', definitionVi: 'Kiểm tra an ninh, bảo vệ kiểm soát', example: 'Is there a security check at the entrance?', exampleVi: 'Có kiểm tra an ninh ở cổng vào không?', phonetic: '/sɪˈkjʊərəti tʃek/' },
    { id: 'gmv-8', word: 'refund', partOfSpeech: 'noun/verb', definition: 'Money given back for an item that was not delivered', definitionVi: 'Hoàn tiền', example: 'Would you like a refund for the item we could not find?', exampleVi: 'Bạn có muốn hoàn tiền cho món không tìm thấy không?', phonetic: '/ˈriːfʌnd/' },
  ],
  readingPassages: [
    {
      id: 'gmr-1',
      title: 'How to Handle a GrabMart Order Well',
      titleVi: 'Cách xử lý tốt một đơn hàng GrabMart',
      content: `GrabMart orders take more time and care than a simple food pickup, because they often involve many items from a supermarket.

**Finding the order**
At the store, ask staff directly: "Excuse me, where can I pick up GrabMart orders?" Some supermarkets have a dedicated pickup counter for delivery drivers.

**Checking the order**
Before leaving the store, always ask staff: "Could you help me check this order against the list?" This helps catch missing items early.

**Handling out-of-stock items**
If an item is unavailable, don't guess — contact the customer: "I'm sorry, this item is out of stock. Would a similar item work instead?" Always get their approval before choosing a substitute, and note it clearly so you can explain it later.

**Keeping items fresh**
Cold items like milk, meat, or frozen food should go into an insulated bag immediately to keep them fresh during the trip.

**At delivery**
Explain any substitutions clearly and give the updated total: "There were two substitutions — I sent you a message about them. The total, including the substitution, is [amount]." Being transparent about changes builds customer trust.`,
      questions: [
        { question: 'What should a driver ask when arriving at the store?', options: ['Nothing, just start shopping', '"Excuse me, where can I pick up GrabMart orders?"', 'Ask for a discount', 'Ask to speak to the manager only'], correctIndex: 1, explanation: 'The passage gives this exact phrase for finding the pickup point.' },
        { question: 'What should the driver do before leaving the store with the order?', options: ['Leave immediately', 'Ask staff to check the order against the list', 'Pay extra for insurance', 'Call the customer only'], correctIndex: 1, explanation: 'The passage says to ask staff to check the order against the list before leaving.' },
        { question: 'What should the driver do if an item is out of stock?', options: ['Choose any replacement without asking', 'Skip the item silently', 'Contact the customer and get approval for a substitute', 'Cancel the whole order'], correctIndex: 2, explanation: 'The passage says to contact the customer and get their approval before choosing a substitute.' },
        { question: 'Why should cold items go into an insulated bag right away?', options: ['To make the bag look full', 'To keep them fresh during the trip', 'It is required for payment', 'To save space'], correctIndex: 1, explanation: 'The passage says insulated bags keep cold items fresh during the trip.' },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'gmw-1',
      title: 'Message a Customer About an Out-of-Stock Item',
      titleVi: 'Nhắn tin cho khách về món hàng hết',
      instructions: 'You are shopping for a customer\'s GrabMart order and one item — a specific brand of yogurt — is out of stock. Write a short, polite message asking if a similar item is okay, and suggest one alternative.',
      instructionsVi: 'Bạn đang mua hàng cho đơn GrabMart của khách và một món — một nhãn hiệu sữa chua cụ thể — đã hết hàng. Hãy viết tin nhắn ngắn gọn, lịch sự hỏi khách có đồng ý dùng món tương tự không, và gợi ý một lựa chọn thay thế.',
      sampleAnswer: `Hi, this is your GrabMart shopper. I'm sorry, the yogurt brand you ordered is currently out of stock. Would a similar item work instead? The store has another brand in the same flavor and size. Please let me know if that's okay, or if you'd prefer a refund for this item. Thank you!`,
      keyPhrases: ['out of stock', 'would a similar item work instead', 'same flavor and size', 'prefer a refund', 'thank you'],
    },
  ],
};
