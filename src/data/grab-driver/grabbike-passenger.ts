import { Context } from '../types';

export const grabbikePassengerContext: Context = {
  id: 'grabbike-passenger',
  title: 'GrabBike — Picking Up & Dropping Off Passengers',
  titleVi: 'GrabBike — Đón, chở và trả khách',
  description: 'Learn how to greet passengers, confirm their name and destination, ask for directions, and handle payment on a GrabBike trip.',
  descriptionVi: 'Học cách chào khách, xác nhận tên và điểm đến, hỏi đường, và thu tiền trong một chuyến GrabBike.',
  icon: '🛵',
  level: 1,
  phrases: [
    { id: 'gb-1', english: 'Hi, are you [customer name]?', vietnamese: 'Chào bạn, bạn có phải là [tên khách] không?', phonetic: '/haɪ/ /ɑːr/ /juː/', category: 'greeting' },
    { id: 'gb-2', english: "Hello! I'm your GrabBike driver. May I confirm your pickup point?", vietnamese: 'Xin chào! Tôi là tài xế GrabBike của bạn. Cho tôi xác nhận điểm đón nhé?', phonetic: '/həˈloʊ/ /aɪm/ /jɔːr/', category: 'greeting' },
    { id: 'gb-3', english: 'Where would you like to go today?', vietnamese: 'Hôm nay bạn muốn đi đâu ạ?', phonetic: '/wer/ /wʊd/ /juː/ /laɪk/ /tuː/ /ɡoʊ/', category: 'destination' },
    { id: 'gb-4', english: 'Can you confirm the drop-off address for me?', vietnamese: 'Bạn xác nhận giúp tôi địa chỉ điểm đến được không?', phonetic: '/kæn/ /juː/ /kənˈfɜːrm/ /ðə/ /ˈdrɒp ɒf/', category: 'destination' },
    { id: 'gb-5', english: 'Please put on this helmet for safety.', vietnamese: 'Vui lòng đội nón bảo hiểm này để an toàn.', phonetic: '/pliːz/ /pʊt/ /ɒn/ /ðɪs/ /ˈhelmɪt/', category: 'safety' },
    { id: 'gb-6', english: "I'm not sure of the way — could you show me the direction on the map?", vietnamese: 'Tôi không chắc đường đi — bạn chỉ giúp tôi hướng trên bản đồ được không?', phonetic: '/aɪm/ /nɒt/ /ʃʊər/ /əv/ /ðə/ /weɪ/', category: 'directions' },
    { id: 'gb-7', english: 'Is it okay if I take a shortcut through this street?', vietnamese: 'Tôi đi đường tắt qua con đường này được không ạ?', phonetic: '/ɪz/ /ɪt/ /ˈoʊkeɪ/ /ɪf/ /aɪ/ /teɪk/ /ə/ /ˈʃɔːrtkʌt/', category: 'directions' },
    { id: 'gb-8', english: "Excuse me, could you tell me how to get to [place name]?", vietnamese: 'Xin lỗi, bạn chỉ giúp tôi đường đến [tên địa điểm] được không?', phonetic: '/ɪkˈskjuːz/ /miː/ /kʊd/ /juː/ /tel/ /miː/', category: 'directions' },
    { id: 'gb-9', english: 'Sorry, there is heavy traffic ahead. It might take a few more minutes.', vietnamese: 'Xin lỗi, phía trước kẹt xe. Có thể sẽ mất thêm vài phút.', phonetic: '/ˈsɒri/ /ðeər/ /ɪz/ /ˈhevi/ /ˈtræfɪk/', category: 'apology' },
    { id: 'gb-10', english: 'We are almost there, about 5 more minutes.', vietnamese: 'Chúng ta sắp tới rồi, khoảng 5 phút nữa.', phonetic: '/wiː/ /ɑːr/ /ˈɔːlmoʊst/ /ðeər/', category: 'update' },
    { id: 'gb-11', english: 'Here we are! This is your destination.', vietnamese: 'Đến nơi rồi! Đây là điểm đến của bạn.', phonetic: '/hɪər/ /wiː/ /ɑːr/', category: 'arrival' },
    { id: 'gb-12', english: 'The total fare is [amount]. Would you like to pay by cash or app?', vietnamese: 'Tổng tiền là [số tiền]. Bạn muốn trả tiền mặt hay qua ứng dụng?', phonetic: '/ðə/ /ˈtoʊtl/ /feər/ /ɪz/', category: 'payment' },
    { id: 'gb-13', english: 'Thank you for riding with me. Have a safe trip!', vietnamese: 'Cảm ơn bạn đã đi xe cùng tôi. Chúc bạn đi đường an toàn!', phonetic: '/θæŋk/ /juː/ /fɔːr/ /ˈraɪdɪŋ/', category: 'farewell' },
    { id: 'gb-14', english: 'Could you give me 5 stars if you had a good experience?', vietnamese: 'Bạn có thể đánh giá 5 sao cho tôi nếu chuyến đi tốt không?', phonetic: '/kʊd/ /juː/ /ɡɪv/ /miː/ /faɪv/ /stɑːrz/', category: 'rating' },
    { id: 'gb-15', english: "I'm sorry, this road is closed. Let me find another way.", vietnamese: 'Xin lỗi, đường này bị chặn. Để tôi tìm đường khác.', phonetic: '/aɪm/ /ˈsɒri/ /ðɪs/ /roʊd/ /ɪz/ /kloʊzd/', category: 'apology' },
  ],
  dialogs: [
    {
      id: 'gbd-1',
      title: 'Simple Pickup & Drop-off',
      titleVi: 'Đón và trả khách đơn giản',
      situation: 'A local passenger books a short GrabBike trip to a shopping mall',
      situationVi: 'Một khách hàng đặt chuyến GrabBike ngắn đến trung tâm mua sắm',
      level: 1,
      lines: [
        { speaker: 'you', speakerLabel: 'You (Driver)', text: 'Hi, are you Jenny?', vietnamese: 'Chào bạn, bạn có phải Jenny không?' },
        { speaker: 'other', speakerLabel: 'Passenger', text: "Yes, that's me!", vietnamese: 'Đúng vậy, là mình!' },
        { speaker: 'you', speakerLabel: 'You', text: 'Great! Please put on this helmet for safety. We are going to City Mall, right?', vietnamese: 'Tuyệt! Vui lòng đội nón bảo hiểm này. Chúng ta đi đến City Mall đúng không ạ?' },
        { speaker: 'other', speakerLabel: 'Passenger', text: "Yes, that's correct.", vietnamese: 'Đúng rồi.' },
        { speaker: 'you', speakerLabel: 'You', text: "Perfect, let's go. It'll take about 10 minutes.", vietnamese: 'Tốt, chúng ta đi thôi. Khoảng 10 phút nữa sẽ tới.' },
        { speaker: 'other', speakerLabel: 'Passenger', text: 'Sounds good, thank you.', vietnamese: 'Được đó, cảm ơn.' },
        { speaker: 'you', speakerLabel: 'You', text: 'Here we are! This is City Mall. The total fare is $2.50.', vietnamese: 'Đến nơi rồi! Đây là City Mall. Tổng tiền là 2.50 đô.' },
        { speaker: 'other', speakerLabel: 'Passenger', text: "I'll pay by app.", vietnamese: 'Mình trả qua ứng dụng nhé.' },
        { speaker: 'you', speakerLabel: 'You', text: 'Perfect, have a nice day!', vietnamese: 'Tuyệt, chúc bạn một ngày tốt lành!' },
      ],
      keyPoints: ['Confirming passenger name', 'Safety reminder', 'Confirming destination', 'Fare and payment'],
    },
    {
      id: 'gbd-2',
      title: 'Foreign Passenger Needs Directions',
      titleVi: 'Khách nước ngoài cần chỉ đường',
      situation: 'A tourist is not sure about the exact drop-off point and the GPS signal is weak',
      situationVi: 'Một khách du lịch không chắc điểm đến chính xác và tín hiệu GPS yếu',
      level: 2,
      lines: [
        { speaker: 'you', speakerLabel: 'You', text: "Hello! I'm your GrabBike driver. May I confirm your pickup point? Are you near the coffee shop on Le Loi Street?", vietnamese: 'Xin chào! Tôi là tài xế GrabBike của bạn. Cho tôi xác nhận điểm đón nhé? Bạn đang ở gần quán cà phê trên đường Lê Lợi phải không?' },
        { speaker: 'other', speakerLabel: 'Passenger', text: "Yes, I'm standing right outside it.", vietnamese: 'Vâng, tôi đang đứng ngay bên ngoài quán.' },
        { speaker: 'you', speakerLabel: 'You', text: "Great, I see you now. Where would you like to go today?", vietnamese: 'Tuyệt, tôi thấy bạn rồi. Hôm nay bạn muốn đi đâu ạ?' },
        { speaker: 'other', speakerLabel: 'Passenger', text: "I want to go to the Old Quarter, but I'm not sure of the exact address.", vietnamese: 'Tôi muốn đến Phố Cổ, nhưng không chắc địa chỉ chính xác.' },
        { speaker: 'you', speakerLabel: 'You', text: "No problem. Could you show me the location on the map in the app?", vietnamese: 'Không sao. Bạn chỉ giúp tôi vị trí trên bản đồ trong ứng dụng được không?' },
        { speaker: 'other', speakerLabel: 'Passenger', text: "Sure, here it is — near the night market.", vietnamese: 'Được, đây rồi — gần chợ đêm.' },
        { speaker: 'you', speakerLabel: 'You', text: "Got it, I know that area well. Please put on this helmet, and let's go!", vietnamese: 'Rõ rồi, tôi biết khu đó rõ. Vui lòng đội nón bảo hiểm, chúng ta đi thôi!' },
        { speaker: 'other', speakerLabel: 'Passenger', text: "Thank you so much!", vietnamese: 'Cảm ơn bạn rất nhiều!' },
        { speaker: 'you', speakerLabel: 'You', text: "You're welcome. If you're not sure of the way, I can also ask locals for directions when we get closer.", vietnamese: 'Không có gì. Nếu bạn không chắc đường, gần tới nơi tôi cũng có thể hỏi người dân địa phương.' },
      ],
      keyPoints: ['Confirming pickup point', 'Using the app map together', 'Offering to ask for directions', 'Reassuring a nervous tourist'],
    },
    {
      id: 'gbd-3',
      title: 'Traffic Jam & Route Change',
      titleVi: 'Kẹt xe và đổi lộ trình',
      situation: 'The driver hits heavy traffic and needs to explain a delay and ask about a route change',
      situationVi: 'Tài xế gặp kẹt xe nặng và cần giải thích chậm trễ và hỏi về đổi lộ trình',
      level: 3,
      lines: [
        { speaker: 'you', speakerLabel: 'You', text: "Sorry, there is heavy traffic ahead. It might take a few more minutes.", vietnamese: 'Xin lỗi, phía trước kẹt xe. Có thể sẽ mất thêm vài phút.' },
        { speaker: 'other', speakerLabel: 'Passenger', text: "That's okay, I'm not in a big hurry. Is there another way?", vietnamese: 'Không sao, tôi không vội lắm. Có đường nào khác không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Is it okay if I take a shortcut through this street? It's a bit narrow but faster.", vietnamese: 'Tôi đi đường tắt qua con đường này được không ạ? Hơi nhỏ nhưng nhanh hơn.' },
        { speaker: 'other', speakerLabel: 'Passenger', text: "Sure, that's fine with me.", vietnamese: 'Được, tôi đồng ý.' },
        { speaker: 'you', speakerLabel: 'You', text: "Thanks for your patience. We are almost there, about 5 more minutes.", vietnamese: 'Cảm ơn bạn đã kiên nhẫn. Chúng ta sắp tới rồi, khoảng 5 phút nữa.' },
        { speaker: 'other', speakerLabel: 'Passenger', text: "No worries at all.", vietnamese: 'Không sao đâu.' },
        { speaker: 'you', speakerLabel: 'You', text: "Here we are! This is your destination. The total fare is $3.20 — would you like to pay by cash or app?", vietnamese: 'Đến nơi rồi! Đây là điểm đến của bạn. Tổng tiền là 3.20 đô — bạn muốn trả tiền mặt hay qua ứng dụng?' },
        { speaker: 'other', speakerLabel: 'Passenger', text: "Cash, please. Here you go, and thank you for finding a faster way!", vietnamese: 'Tiền mặt nhé. Của bạn đây, và cảm ơn đã tìm đường nhanh hơn!' },
        { speaker: 'you', speakerLabel: 'You', text: "You're welcome. Thank you for riding with me. Have a safe trip!", vietnamese: 'Không có gì. Cảm ơn bạn đã đi xe cùng tôi. Chúc bạn an toàn!' },
      ],
      keyPoints: ['Explaining a delay politely', 'Asking permission for a route change', 'Giving time updates', 'Closing the trip and payment'],
    },
  ],
  vocabulary: [
    { id: 'gbv-1', word: 'pickup point', partOfSpeech: 'noun', definition: 'The location where the driver meets the passenger', definitionVi: 'Điểm đón khách', example: 'Can you confirm the pickup point?', exampleVi: 'Bạn xác nhận điểm đón được không?', phonetic: '/ˈpɪkʌp pɔɪnt/' },
    { id: 'gbv-2', word: 'drop-off point', partOfSpeech: 'noun', definition: 'The location where the passenger gets off', definitionVi: 'Điểm trả khách', example: 'This is your drop-off point.', exampleVi: 'Đây là điểm trả khách của bạn.', phonetic: '/ˈdrɒp ɒf pɔɪnt/' },
    { id: 'gbv-3', word: 'fare', partOfSpeech: 'noun', definition: 'The amount of money charged for a trip', definitionVi: 'Tiền cước, giá chuyến đi', example: 'The total fare is $2.50.', exampleVi: 'Tổng tiền cước là 2.50 đô.', phonetic: '/feər/' },
    { id: 'gbv-4', word: 'shortcut', partOfSpeech: 'noun', definition: 'A quicker route than the usual way', definitionVi: 'Đường tắt', example: 'I know a shortcut through this street.', exampleVi: 'Tôi biết một đường tắt qua con đường này.', phonetic: '/ˈʃɔːrtkʌt/' },
    { id: 'gbv-5', word: 'traffic jam', partOfSpeech: 'noun', definition: 'A line of vehicles that cannot move or moves slowly', definitionVi: 'Kẹt xe', example: 'There is heavy traffic ahead.', exampleVi: 'Phía trước bị kẹt xe.', phonetic: '/ˈtræfɪk dʒæm/' },
    { id: 'gbv-6', word: 'helmet', partOfSpeech: 'noun', definition: 'A hard hat worn for head protection on a motorbike', definitionVi: 'Nón bảo hiểm', example: 'Please put on this helmet for safety.', exampleVi: 'Vui lòng đội nón bảo hiểm này để an toàn.', phonetic: '/ˈhelmɪt/' },
    { id: 'gbv-7', word: 'landmark', partOfSpeech: 'noun', definition: 'A recognizable place used to describe a location', definitionVi: 'Điểm mốc, địa danh nổi bật', example: "Let's meet near that landmark.", exampleVi: 'Chúng ta gặp nhau gần điểm mốc đó nhé.', phonetic: '/ˈlændmɑːrk/' },
    { id: 'gbv-8', word: 'route', partOfSpeech: 'noun', definition: 'The road or path taken to get somewhere', definitionVi: 'Lộ trình, tuyến đường', example: 'Is there another route we can take?', exampleVi: 'Có lộ trình nào khác chúng ta có thể đi không?', phonetic: '/ruːt/' },
  ],
  readingPassages: [
    {
      id: 'gbr-1',
      title: 'A GrabBike Driver\'s Daily Checklist',
      titleVi: 'Danh sách kiểm tra hằng ngày của tài xế GrabBike',
      content: `Being a great GrabBike driver means more than just knowing the roads. Here is a quick checklist for every trip.

**Before the trip**
Check the passenger's name and pickup point in the app. Message the passenger if you cannot find the exact location: "Hi, I'm near your pickup point. Could you confirm where you are standing?"

**During the trip**
Always offer a clean helmet before starting. Confirm the destination out loud: "We are going to [place], right?" If there is traffic, let the passenger know politely: "Sorry, there is heavy traffic ahead. It might take a few more minutes."

**Asking for directions**
If you are unsure of the way, it is completely fine to ask a passenger or a local: "Excuse me, could you tell me how to get to [place name]?" Most people are happy to help.

**At drop-off**
Confirm you have arrived at the correct place, state the fare clearly, and thank the passenger. A polite, safe, and friendly driver almost always earns a good rating.`,
      questions: [
        { question: 'What should a driver do before starting the trip if they cannot find the pickup point?', options: ['Cancel the trip', 'Message the passenger to confirm their location', 'Wait without contacting the passenger', 'Ask another driver'], correctIndex: 1, explanation: 'The passage says to message the passenger to confirm where they are standing.' },
        { question: 'What should the driver offer before starting the ride?', options: ['A snack', 'A clean helmet', 'A phone charger', 'A map'], correctIndex: 1, explanation: 'The passage says to always offer a clean helmet before starting.' },
        { question: 'What is a polite way to tell a passenger about traffic?', options: ['"We are stuck, sorry."', '"Sorry, there is heavy traffic ahead. It might take a few more minutes."', '"Traffic is bad here."', 'Say nothing and keep driving'], correctIndex: 1, explanation: 'This exact polite phrase is given in the passage.' },
        { question: 'According to the passage, is it okay to ask a passenger for directions?', options: ['No, drivers should never ask', 'Yes, it is completely fine to ask', 'Only if the passenger offers first', 'Only for long trips'], correctIndex: 1, explanation: 'The passage states it is completely fine to ask a passenger or a local for directions.' },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'gbw-1',
      title: 'Reply to a Passenger About a Delay',
      titleVi: 'Trả lời khách về việc chuyến đi bị trễ',
      instructions: 'A passenger messages you: "Hi, are you close? I have a meeting in 10 minutes." Write a short, polite reply explaining that there is traffic and giving an updated time.',
      instructionsVi: 'Một khách nhắn: "Chào, bạn gần tới chưa? Tôi có cuộc họp trong 10 phút nữa." Hãy viết một tin nhắn trả lời ngắn gọn, lịch sự giải thích về việc kẹt xe và cho biết thời gian dự kiến mới.',
      sampleAnswer: `Hi! Sorry for the delay, there is heavy traffic on the main road right now. I'm taking a shortcut and should be there in about 4 minutes. Thank you for your patience — I'll message you as soon as I arrive!`,
      keyPhrases: ['sorry for the delay', 'heavy traffic', 'taking a shortcut', 'thank you for your patience', 'as soon as I arrive'],
    },
  ],
};
