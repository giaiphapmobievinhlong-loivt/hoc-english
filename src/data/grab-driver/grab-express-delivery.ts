import { Context } from '../types';

export const grabExpressDeliveryContext: Context = {
  id: 'grab-express-delivery',
  title: 'GrabExpress — Package Delivery',
  titleVi: 'GrabExpress — Giao hàng, gửi hàng',
  description: 'Learn how to call customers to confirm COD payment, confirm items and price, pick up packages from shops, and hand over deliveries.',
  descriptionVi: 'Học cách gọi điện xác nhận thanh toán COD với khách, xác nhận món hàng và giá tiền, lấy hàng tại cửa hàng, và giao hàng tận nơi.',
  icon: '📦',
  level: 2,
  phrases: [
    { id: 'ge-1', english: "Hello, this is your GrabExpress driver calling about your order.", vietnamese: 'Xin chào, tôi là tài xế GrabExpress gọi về đơn hàng của bạn.', phonetic: '/həˈloʊ/ /ðɪs/ /ɪz/ /jɔːr/', category: 'greeting' },
    { id: 'ge-2', english: "Can you confirm that this is a cash-on-delivery order?", vietnamese: 'Bạn xác nhận giúp đây là đơn hàng thanh toán khi nhận (COD) đúng không?', phonetic: '/kæn/ /juː/ /kənˈfɜːrm/ /kæʃ/', category: 'confirm' },
    { id: 'ge-3', english: 'Could you tell me exactly what item you are sending?', vietnamese: 'Bạn cho tôi biết chính xác món hàng bạn gửi là gì được không?', phonetic: '/kʊd/ /juː/ /tel/ /miː/ /ɪɡˈzæktli/', category: 'confirm' },
    { id: 'ge-4', english: 'What is the total price of the item, including shipping?', vietnamese: 'Tổng giá món hàng, bao gồm cả phí ship, là bao nhiêu ạ?', phonetic: '/wɒt/ /ɪz/ /ðə/ /ˈtoʊtl/ /praɪs/', category: 'confirm' },
    { id: 'ge-5', english: "I'm outside the shop now to pick up your order.", vietnamese: 'Tôi đang ở ngoài cửa hàng để lấy đơn hàng của bạn.', phonetic: '/aɪm/ /ˈaʊtsaɪd/ /ðə/ /ʃɒp/', category: 'pickup' },
    { id: 'ge-6', english: 'Hi, I am here to pick up an order for [customer name].', vietnamese: 'Chào, tôi đến lấy đơn hàng cho [tên khách].', phonetic: '/haɪ/ /aɪ/ /æm/ /hɪər/ /tuː/ /pɪk/ /ʌp/', category: 'pickup' },
    { id: 'ge-7', english: 'Could you please pack it carefully? It looks fragile.', vietnamese: 'Bạn đóng gói cẩn thận giúp tôi nhé? Trông món này dễ vỡ.', phonetic: '/kʊd/ /juː/ /pliːz/ /pæk/ /ɪt/', category: 'pickup' },
    { id: 'ge-8', english: "I've picked up your package and I'm on my way now.", vietnamese: 'Tôi đã lấy hàng của bạn và đang trên đường giao rồi.', phonetic: '/aɪv/ /pɪkt/ /ʌp/ /jɔːr/ /ˈpækɪdʒ/', category: 'update' },
    { id: 'ge-9', english: "I'm at your address. Would you like me to bring it up, or will you come down?", vietnamese: 'Tôi đang ở địa chỉ của bạn. Bạn muốn tôi mang lên hay bạn sẽ xuống nhận?', phonetic: '/aɪm/ /æt/ /jɔːr/ /əˈdres/', category: 'delivery' },
    { id: 'ge-10', english: 'Here is your package. Please check it before I leave.', vietnamese: 'Đây là hàng của bạn. Vui lòng kiểm tra trước khi tôi rời đi.', phonetic: '/hɪər/ /ɪz/ /jɔːr/ /ˈpækɪdʒ/', category: 'delivery' },
    { id: 'ge-11', english: 'The total for cash on delivery is [amount]. May I collect the payment?', vietnamese: 'Tổng tiền thu hộ COD là [số tiền]. Tôi thu tiền được không ạ?', phonetic: '/ðə/ /ˈtoʊtl/ /fɔːr/ /kæʃ/', category: 'payment' },
    { id: 'ge-12', english: 'Could you sign here to confirm you received the package?', vietnamese: 'Bạn ký tên vào đây để xác nhận đã nhận hàng được không?', phonetic: '/kʊd/ /juː/ /saɪn/ /hɪər/', category: 'confirm' },
    { id: 'ge-13', english: "Sorry, I'm running a bit late because of traffic. I'll be there in 10 minutes.", vietnamese: 'Xin lỗi, tôi bị trễ một chút vì kẹt xe. Tôi sẽ tới trong 10 phút nữa.', phonetic: '/ˈsɒri/ /aɪm/ /ˈrʌnɪŋ/ /ə/ /bɪt/ /leɪt/', category: 'apology' },
    { id: 'ge-14', english: 'Thank you for using GrabExpress. Have a great day!', vietnamese: 'Cảm ơn bạn đã sử dụng GrabExpress. Chúc bạn ngày tốt lành!', phonetic: '/θæŋk/ /juː/ /fɔːr/ /ˈjuːzɪŋ/', category: 'farewell' },
    { id: 'ge-15', english: "I'm sorry, the shop said this item is currently out of stock.", vietnamese: 'Xin lỗi, cửa hàng báo món này hiện đang hết hàng.', phonetic: '/aɪm/ /ˈsɒri/ /ðə/ /ʃɒp/ /sed/', category: 'apology' },
  ],
  dialogs: [
    {
      id: 'ged-1',
      title: 'Confirming a COD Order by Phone',
      titleVi: 'Gọi điện xác nhận đơn hàng COD',
      situation: 'The driver calls the sender to confirm the order details before going to pick it up',
      situationVi: 'Tài xế gọi điện cho người gửi để xác nhận thông tin đơn hàng trước khi đến lấy',
      level: 1,
      lines: [
        { speaker: 'you', speakerLabel: 'You (Driver)', text: "Hello, this is your GrabExpress driver calling about your order.", vietnamese: 'Xin chào, tôi là tài xế GrabExpress gọi về đơn hàng của bạn.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Hi! Yes, I have a package ready.", vietnamese: 'Chào! Vâng, tôi có một gói hàng sẵn sàng rồi.' },
        { speaker: 'you', speakerLabel: 'You', text: "Great. Can you confirm that this is a cash-on-delivery order?", vietnamese: 'Tuyệt. Bạn xác nhận giúp đây là đơn hàng COD đúng không?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Yes, the receiver will pay when it arrives.", vietnamese: 'Đúng vậy, người nhận sẽ thanh toán khi hàng tới.' },
        { speaker: 'you', speakerLabel: 'You', text: "Understood. Could you tell me exactly what item you are sending, and the total price including shipping?", vietnamese: 'Rõ rồi. Bạn cho tôi biết chính xác món hàng và tổng giá bao gồm phí ship được không?' },
        { speaker: 'other', speakerLabel: 'Customer', text: "It's a pair of shoes, $25 for the item plus $2 shipping — so $27 total.", vietnamese: 'Là một đôi giày, 25 đô tiền hàng cộng 2 đô phí ship — tổng 27 đô.' },
        { speaker: 'you', speakerLabel: 'You', text: "Got it, $27 total. I'll be there to pick it up in about 15 minutes.", vietnamese: 'Rõ rồi, tổng 27 đô. Tôi sẽ đến lấy hàng trong khoảng 15 phút nữa.' },
        { speaker: 'other', speakerLabel: 'Customer', text: "Perfect, thank you!", vietnamese: 'Tuyệt, cảm ơn bạn!' },
      ],
      keyPoints: ['Calling to confirm COD', 'Confirming item and total price', 'Giving an ETA'],
    },
    {
      id: 'ged-2',
      title: 'Picking Up at the Shop',
      titleVi: 'Lấy hàng tại cửa hàng',
      situation: 'The driver arrives at the shop and needs to identify the correct order',
      situationVi: 'Tài xế đến cửa hàng và cần xác định đúng đơn hàng',
      level: 2,
      lines: [
        { speaker: 'you', speakerLabel: 'You', text: "Hi, I am here to pick up an order for Mrs. Lan.", vietnamese: 'Chào, tôi đến lấy đơn hàng cho chị Lan.' },
        { speaker: 'other', speakerLabel: 'Shop Staff', text: "Sure, one moment please. Here it is — a small box.", vietnamese: 'Được, chờ một chút. Đây rồi — một hộp nhỏ.' },
        { speaker: 'you', speakerLabel: 'You', text: "Thank you. Could you please pack it carefully? It looks fragile.", vietnamese: 'Cảm ơn bạn. Bạn đóng gói cẩn thận giúp tôi nhé? Trông món này dễ vỡ.' },
        { speaker: 'other', speakerLabel: 'Shop Staff', text: "Of course, I'll add some extra tape and bubble wrap.", vietnamese: 'Tất nhiên, tôi sẽ dán thêm băng keo và bọc thêm ni lông khí.' },
        { speaker: 'you', speakerLabel: 'You', text: "Perfect, thank you. I'll message the customer that I've picked it up now.", vietnamese: 'Tuyệt, cảm ơn bạn. Tôi sẽ nhắn khách là đã lấy hàng rồi.' },
        { speaker: 'other', speakerLabel: 'Shop Staff', text: "Great, have a safe trip!", vietnamese: 'Tốt, chúc bạn đi đường an toàn!' },
      ],
      keyPoints: ['Identifying the correct order by name', 'Asking for careful packing of fragile items', 'Updating the customer after pickup'],
    },
    {
      id: 'ged-3',
      title: 'Delivering & Collecting COD Payment',
      titleVi: 'Giao hàng và thu tiền COD',
      situation: 'The driver arrives at the receiver\'s address to deliver the package and collect payment',
      situationVi: 'Tài xế đến địa chỉ người nhận để giao hàng và thu tiền',
      level: 2,
      lines: [
        { speaker: 'you', speakerLabel: 'You', text: "Hello, I have a delivery for you. I'm at your address now — would you like me to bring it up, or will you come down?", vietnamese: 'Xin chào, tôi có hàng giao cho bạn. Tôi đang ở địa chỉ của bạn — bạn muốn tôi mang lên hay bạn sẽ xuống nhận?' },
        { speaker: 'other', speakerLabel: 'Receiver', text: "I'll come down, just give me two minutes.", vietnamese: 'Tôi sẽ xuống, cho tôi 2 phút nhé.' },
        { speaker: 'you', speakerLabel: 'You', text: "No problem, I'll wait here.", vietnamese: 'Không sao, tôi đợi ở đây.' },
        { speaker: 'other', speakerLabel: 'Receiver', text: "Here I am. Sorry for the wait!", vietnamese: 'Tôi ra rồi. Xin lỗi vì để bạn đợi!' },
        { speaker: 'you', speakerLabel: 'You', text: "No worries at all. Here is your package. Please check it before I leave. The total for cash on delivery is $27. May I collect the payment?", vietnamese: 'Không sao đâu. Đây là hàng của bạn. Vui lòng kiểm tra trước khi tôi rời đi. Tổng tiền COD là 27 đô. Tôi thu tiền được không ạ?' },
        { speaker: 'other', speakerLabel: 'Receiver', text: "Looks good. Here's $30, please keep the change... actually, just $27 is fine, here you go.", vietnamese: 'Trông ổn đó. Đây 30 đô, giữ tiền thừa đi... thôi, 27 đô là được, của bạn đây.' },
        { speaker: 'you', speakerLabel: 'You', text: "Thank you very much. Could you sign here to confirm you received the package? Thank you for using GrabExpress, have a great day!", vietnamese: 'Cảm ơn bạn rất nhiều. Bạn ký tên vào đây xác nhận đã nhận hàng nhé? Cảm ơn đã sử dụng GrabExpress, chúc bạn ngày tốt lành!' },
      ],
      keyPoints: ['Asking whether to bring the package up or wait', 'Asking the customer to check the item', 'Collecting COD payment politely', 'Getting a delivery confirmation'],
    },
  ],
  vocabulary: [
    { id: 'gev-1', word: 'cash on delivery (COD)', partOfSpeech: 'phrase', definition: 'Payment made when the item is delivered, not before', definitionVi: 'Thanh toán khi nhận hàng', example: 'Can you confirm that this is a cash-on-delivery order?', exampleVi: 'Bạn xác nhận đây là đơn hàng COD được không?', phonetic: '/kæʃ ɒn dɪˈlɪvəri/' },
    { id: 'gev-2', word: 'parcel / package', partOfSpeech: 'noun', definition: 'An item wrapped or boxed for delivery', definitionVi: 'Kiện hàng, gói hàng', example: "I've picked up your package.", exampleVi: 'Tôi đã lấy hàng của bạn.', phonetic: '/ˈpɑːrsl/ /ˈpækɪdʒ/' },
    { id: 'gev-3', word: 'sender', partOfSpeech: 'noun', definition: 'The person who sends the package', definitionVi: 'Người gửi hàng', example: 'The sender paid for shipping in advance.', exampleVi: 'Người gửi đã trả phí ship trước.', phonetic: '/ˈsendər/' },
    { id: 'gev-4', word: 'receiver', partOfSpeech: 'noun', definition: 'The person who receives the package', definitionVi: 'Người nhận hàng', example: 'The receiver will pay when it arrives.', exampleVi: 'Người nhận sẽ trả tiền khi hàng tới.', phonetic: '/rɪˈsiːvər/' },
    { id: 'gev-5', word: 'fragile', partOfSpeech: 'adjective', definition: 'Easily broken or damaged', definitionVi: 'Dễ vỡ', example: 'Please pack it carefully, it looks fragile.', exampleVi: 'Vui lòng đóng gói cẩn thận, trông món này dễ vỡ.', phonetic: '/ˈfrædʒaɪl/' },
    { id: 'gev-6', word: 'signature', partOfSpeech: 'noun', definition: 'A person\'s name written by hand to confirm something', definitionVi: 'Chữ ký', example: 'Could you sign here to confirm receipt?', exampleVi: 'Bạn ký vào đây để xác nhận nhận hàng được không?', phonetic: '/ˈsɪɡnətʃər/' },
    { id: 'gev-7', word: 'delivery fee', partOfSpeech: 'noun', definition: 'The charge for delivering an item', definitionVi: 'Phí giao hàng', example: 'The total price includes the delivery fee.', exampleVi: 'Tổng giá đã bao gồm phí giao hàng.', phonetic: '/dɪˈlɪvəri fiː/' },
    { id: 'gev-8', word: 'out of stock', partOfSpeech: 'phrase', definition: 'No longer available to buy', definitionVi: 'Hết hàng', example: 'The shop said this item is currently out of stock.', exampleVi: 'Cửa hàng báo món này hiện đang hết hàng.', phonetic: '/aʊt əv stɒk/' },
  ],
  readingPassages: [
    {
      id: 'ger-1',
      title: 'GrabExpress: From Pickup to Payment',
      titleVi: 'GrabExpress: Từ lúc lấy hàng đến thu tiền',
      content: `A GrabExpress delivery has three key stages, and clear communication matters at every step.

**Step 1: Confirm before you go**
Always call the sender first: "Can you confirm that this is a cash-on-delivery order?" Ask exactly what the item is and the total price, including shipping. This avoids confusion later.

**Step 2: Pick up carefully**
At the shop, identify the order by the customer's name: "Hi, I am here to pick up an order for [name]." If the item looks fragile, ask the shop to pack it with extra care.

**Step 3: Deliver and confirm payment**
When you arrive, message or call the receiver: "I'm at your address now." Let them check the item before you leave. If it is a COD order, state the exact amount clearly: "The total for cash on delivery is [amount]. May I collect the payment?" Always ask for a signature or app confirmation once payment is complete.

Being clear, polite, and patient at every stage builds trust — and often results in a better rating.`,
      questions: [
        { question: 'What should the driver do before going to pick up the package?', options: ['Go directly without calling', 'Call the sender to confirm it is COD and confirm the item and price', 'Ask the receiver first', 'Nothing, just follow the app'], correctIndex: 1, explanation: 'The passage says to always call the sender first to confirm COD, the item, and the total price.' },
        { question: 'How should the driver identify the correct order at the shop?', options: ['By guessing which box looks right', 'By the customer\'s name', 'By color of the package', 'By asking for a receipt only'], correctIndex: 1, explanation: 'The passage says to identify the order by the customer\'s name.' },
        { question: 'What should the driver do if an item looks fragile?', options: ['Ignore it', 'Ask the shop to pack it with extra care', 'Refuse to carry it', 'Deliver it as is'], correctIndex: 1, explanation: 'The passage says to ask the shop to pack fragile items with extra care.' },
        { question: 'What should the driver ask for after collecting COD payment?', options: ['A tip', 'A signature or app confirmation', 'A phone number', 'A receipt from the receiver'], correctIndex: 1, explanation: 'The passage says to always ask for a signature or app confirmation once payment is complete.' },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'gew-1',
      title: 'Message a Customer About a Delay',
      titleVi: 'Nhắn tin cho khách về việc giao hàng bị trễ',
      instructions: 'You are stuck in traffic and will be 15 minutes late delivering a package. Write a short, polite message to the receiver explaining the delay and the new estimated time.',
      instructionsVi: 'Bạn đang bị kẹt xe và sẽ giao hàng trễ 15 phút. Hãy viết một tin nhắn ngắn gọn, lịch sự cho người nhận giải thích lý do trễ và thời gian dự kiến mới.',
      sampleAnswer: `Hi, this is your GrabExpress driver. I'm sorry, I'm running a bit late because of heavy traffic. I should arrive in about 15 minutes instead of the original time. Thank you very much for your patience — I'll message you again when I'm close by.`,
      keyPhrases: ['sorry, running a bit late', 'because of heavy traffic', 'estimated time', 'thank you for your patience', 'I\'ll message you when I\'m close'],
    },
  ],
};
