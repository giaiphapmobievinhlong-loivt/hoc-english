import { Context } from '../types';

export const hiringContext: Context = {
  id: 'hiring',
  title: 'Hiring & HR',
  titleVi: 'Tuyển dụng và nhân sự',
  description: 'Conduct job interviews, explain policies, and handle HR conversations.',
  descriptionVi: 'Thực hiện phỏng vấn, giải thích chính sách và xử lý các cuộc trò chuyện về nhân sự.',
  icon: '💼',
  level: 4,
  phrases: [
    { id: 'hr-1', english: "Tell me about yourself and why you'd like to work here.", vietnamese: 'Hãy kể về bản thân và tại sao bạn muốn làm việc ở đây.', phonetic: '/tel/ /miː/ /əˈbaʊt/ /jɔːrˌself/', category: 'interview' },
    { id: 'hr-2', english: 'The position is part-time, 20 hours per week.', vietnamese: 'Vị trí này làm bán thời gian, 20 giờ mỗi tuần.', phonetic: '/ðə/ /pəˈzɪʃən/ /ɪz/ /ˌpɑːrtˈtaɪm/', category: 'offer' },
    { id: 'hr-3', english: 'What is your availability? Can you work weekends?', vietnamese: 'Bạn có thể làm việc khi nào? Bạn có thể làm cuối tuần không?', phonetic: '/wɒt/ /ɪz/ /jɔːr/ /əˌveɪləˈbɪlɪti/', category: 'interview' },
    { id: 'hr-4', english: 'There will be a two-week probation period.', vietnamese: 'Sẽ có thời gian thử việc hai tuần.', phonetic: '/ðer/ /wɪl/ /biː/ /ə/ /tuː wiːk/ /proʊˈbeɪʃən/ /ˈpɪəriəd/', category: 'terms' },
    { id: 'hr-5', english: 'We offer flexible shifts to work around your schedule.', vietnamese: 'Chúng tôi có ca làm việc linh hoạt để phù hợp với lịch của bạn.', phonetic: '/wiː/ /ˈɒfər/ /ˈfleksɪbəl/ /ʃɪfts/', category: 'benefits' },
    { id: 'hr-6', english: "Do you have any experience in food and beverage service?", vietnamese: 'Bạn có kinh nghiệm trong dịch vụ ăn uống không?', phonetic: '/duː/ /juː/ /hæv/ /ˈeni/ /ɪkˈspɪəriəns/', category: 'interview' },
    { id: 'hr-7', english: "We pay weekly, every Friday, directly to your bank account.", vietnamese: 'Chúng tôi trả lương hàng tuần, mỗi thứ Sáu, trực tiếp vào tài khoản ngân hàng của bạn.', phonetic: '/wiː/ /peɪ/ /ˈwiːkli/ /ˈevri/ /ˈfraɪdeɪ/', category: 'terms' },
    { id: 'hr-8', english: "We expect all staff to be punctual and notify us at least 4 hours in advance if you can't make your shift.", vietnamese: 'Chúng tôi mong tất cả nhân viên đúng giờ và thông báo ít nhất 4 tiếng trước nếu không thể đến ca.', phonetic: '/wiː/ /ɪkˈspekt/ /ɔːl/ /stɑːf/ /tuː/ /biː/ /ˈpʌŋktʃuəl/', category: 'terms' },
  ],
  dialogs: [
    {
      id: 'hrd-1',
      title: 'Job Interview',
      titleVi: 'Phỏng vấn tuyển dụng',
      situation: 'You are interviewing a candidate for a barista position',
      situationVi: 'Bạn đang phỏng vấn ứng viên cho vị trí nhân viên pha chế',
      level: 4,
      lines: [
        { speaker: 'you', speakerLabel: 'You (Manager)', text: "Thanks for coming in today, Anna. Please have a seat. Did you find the place okay?", vietnamese: 'Cảm ơn đã đến hôm nay, Anna. Mời bạn ngồi. Bạn tìm thấy chỗ dễ không?' },
        { speaker: 'other', speakerLabel: 'Candidate', text: "Yes, thank you! Your shop is in a great location.", vietnamese: 'Có, cảm ơn! Quán của bạn ở vị trí rất đẹp.' },
        { speaker: 'you', speakerLabel: 'You', text: "Thanks! So, let's get started. Can you tell me a little about yourself and why you're interested in working here?", vietnamese: 'Cảm ơn! Vậy hãy bắt đầu nhé. Bạn có thể kể một chút về bản thân và tại sao bạn muốn làm việc ở đây không?' },
        { speaker: 'other', speakerLabel: 'Candidate', text: "Of course! I'm 22, currently studying business part-time. I've been a big fan of Boba Heaven for a while — I actually come here almost every week. I love the quality and the vibe, and I'd love to be part of that.", vietnamese: 'Tất nhiên! Tôi 22 tuổi, hiện đang học kinh doanh bán thời gian. Tôi đã là fan của Boba Heaven một thời gian — thật ra tôi đến đây gần như mỗi tuần. Tôi thích chất lượng và không khí ở đây, và tôi muốn trở thành một phần của điều đó.' },
        { speaker: 'you', speakerLabel: 'You', text: "I love the enthusiasm! Do you have any previous experience in food service or customer-facing roles?", vietnamese: 'Tôi thích sự nhiệt tình đó! Bạn có kinh nghiệm trước đây trong dịch vụ ăn uống hoặc công việc tiếp xúc khách hàng không?' },
        { speaker: 'other', speakerLabel: 'Candidate', text: "Yes, I worked at a coffee shop for about a year during high school. I was trained on espresso machines and I handled the counter during peak hours.", vietnamese: 'Có, tôi đã làm việc tại một quán cà phê khoảng một năm khi còn học cấp ba. Tôi được đào tạo về máy espresso và phụ trách quầy trong giờ cao điểm.' },
        { speaker: 'you', speakerLabel: 'You', text: "That's great. How do you handle stressful situations, like when there's a long queue and customers are getting impatient?", vietnamese: 'Rất tốt. Bạn xử lý các tình huống căng thẳng như thế nào, chẳng hạn khi hàng dài và khách bắt đầu mất kiên nhẫn?' },
        { speaker: 'other', speakerLabel: 'Candidate', text: "I try to stay calm and focused. I've learned that speed comes with practice, but smiling and keeping customers updated on wait times goes a long way. I also communicate with my team to keep things moving.", vietnamese: 'Tôi cố gắng giữ bình tĩnh và tập trung. Tôi đã học được rằng tốc độ đến từ kinh nghiệm, nhưng mỉm cười và cập nhật thời gian chờ cho khách cũng rất hiệu quả. Tôi cũng giao tiếp với nhóm để mọi thứ tiến triển.' },
        { speaker: 'you', speakerLabel: 'You', text: "That's exactly the right mindset. We're looking for someone for the afternoon shift, Monday to Saturday, from 1pm to 7pm. Does that work for you?", vietnamese: 'Đó chính xác là tư duy đúng. Chúng tôi đang tìm người cho ca chiều, thứ Hai đến thứ Bảy, từ 1 giờ đến 7 giờ tối. Điều đó phù hợp với bạn không?' },
        { speaker: 'other', speakerLabel: 'Candidate', text: "Yes, that works perfectly around my class schedule.", vietnamese: 'Có, điều đó hoàn toàn phù hợp với lịch học của tôi.' },
        { speaker: 'you', speakerLabel: 'You', text: "Great. The starting pay is $8 per hour, and after the two-week probation period, we review and typically bump that up to $9. We also provide one free drink per shift. Do you have any questions for me?", vietnamese: 'Tốt. Mức lương khởi điểm là 8 đô mỗi giờ, và sau thời gian thử việc hai tuần, chúng tôi xem xét và thường tăng lên 9 đô. Chúng tôi cũng cung cấp một ly đồ uống miễn phí mỗi ca. Bạn có câu hỏi nào cho tôi không?' },
        { speaker: 'other', speakerLabel: 'Candidate', text: "Just one — when would you need someone to start?", vietnamese: 'Chỉ một câu — bạn cần người bắt đầu khi nào?' },
        { speaker: 'you', speakerLabel: 'You', text: "Ideally next Monday. I'll be in touch by end of this week. Thanks for coming in, Anna — it was a pleasure meeting you.", vietnamese: 'Lý tưởng nhất là thứ Hai tới. Tôi sẽ liên hệ trước cuối tuần này. Cảm ơn đã đến, Anna — rất vui được gặp bạn.' },
      ],
      keyPoints: ['Opening the interview warmly', 'Asking about experience', 'Behavioral questions', 'Explaining terms and benefits', 'Closing professionally'],
    },
    {
      id: 'hrd-2',
      title: 'Handling a Resignation',
      titleVi: 'Xử lý nhân viên nghỉ việc',
      situation: 'A good employee tells you they are leaving for another job',
      situationVi: 'Một nhân viên tốt thông báo họ nghỉ việc để đến chỗ khác',
      level: 4,
      lines: [
        { speaker: 'other', speakerLabel: 'Staff', text: "Minh, do you have a minute? I need to talk to you about something important.", vietnamese: 'Minh, bạn có chút thời gian không? Tôi cần nói chuyện về điều gì đó quan trọng.' },
        { speaker: 'you', speakerLabel: 'You', text: "Of course, let's step into the office. Is everything okay?", vietnamese: 'Tất nhiên, hãy vào văn phòng. Mọi thứ ổn chứ?' },
        { speaker: 'other', speakerLabel: 'Staff', text: "I've really appreciated working here, but I've been offered a full-time position at another company that's more in line with my career goals. I wanted to let you know as soon as possible.", vietnamese: 'Tôi thực sự trân trọng thời gian làm việc ở đây, nhưng tôi được nhận vào một vị trí toàn thời gian ở công ty khác phù hợp hơn với mục tiêu nghề nghiệp của mình. Tôi muốn thông báo cho bạn càng sớm càng tốt.' },
        { speaker: 'you', speakerLabel: 'You', text: "I appreciate you telling me directly. Honestly, I'm sad to hear it — you've been one of our best. Can I ask what kind of role it is?", vietnamese: 'Tôi đánh giá cao việc bạn nói thẳng. Thật lòng, tôi buồn khi nghe điều này — bạn là một trong những người tốt nhất của chúng tôi. Tôi có thể hỏi đó là vị trí gì không?' },
        { speaker: 'other', speakerLabel: 'Staff', text: "It's a marketing assistant role at a startup. It's what I've been studying for, so it feels like the right move.", vietnamese: 'Đó là vị trí trợ lý marketing tại một startup. Đó là điều tôi đã học, nên cảm thấy đây là bước đi đúng đắn.' },
        { speaker: 'you', speakerLabel: 'You', text: "That makes complete sense, and I genuinely support your decision. How much notice can you give us?", vietnamese: 'Điều đó hoàn toàn hợp lý, và tôi thực sự ủng hộ quyết định của bạn. Bạn có thể báo trước bao lâu cho chúng tôi?' },
        { speaker: 'other', speakerLabel: 'Staff', text: "I'd like to give you two weeks, if that's okay. I want to make sure the handover goes smoothly.", vietnamese: 'Tôi muốn báo trước hai tuần, nếu được. Tôi muốn đảm bảo quá trình bàn giao diễn ra suôn sẻ.' },
        { speaker: 'you', speakerLabel: 'You', text: "Two weeks is perfect, thank you. Let's spend your last week making sure you train whoever takes your shift. And I'll make sure your final paycheck includes everything owed.", vietnamese: 'Hai tuần là hoàn hảo, cảm ơn bạn. Hãy dành tuần cuối để đào tạo người thay ca của bạn. Và tôi sẽ đảm bảo lương cuối cùng của bạn bao gồm tất cả những gì đã được thanh toán.' },
        { speaker: 'other', speakerLabel: 'Staff', text: "Thank you for being so understanding, Minh. I've really learned a lot here.", vietnamese: 'Cảm ơn bạn đã hiểu, Minh. Tôi thực sự đã học được rất nhiều ở đây.' },
        { speaker: 'you', speakerLabel: 'You', text: "The pleasure was ours. And if you ever need a reference letter, don't hesitate to ask. We wish you all the best.", vietnamese: 'Vinh dự là của chúng tôi. Và nếu bạn cần thư giới thiệu, đừng ngần ngại hỏi nhé. Chúc bạn mọi điều tốt đẹp nhất.' },
      ],
      keyPoints: ['Receiving news gracefully', 'Asking clarifying questions', 'Negotiating notice period', 'Offering a reference', 'Ending on good terms'],
    },
    {
      id: 'hrd-3',
      title: 'Addressing a Performance Issue',
      titleVi: 'Xử lý vấn đề hiệu suất làm việc',
      situation: 'You need to speak with a staff member who has been consistently late',
      situationVi: 'Bạn cần nói chuyện với nhân viên thường xuyên đi trễ',
      level: 4,
      lines: [
        { speaker: 'you', speakerLabel: 'You', text: "Hi James, thanks for stepping aside with me for a moment. I wanted to have a quick check-in.", vietnamese: 'Chào James, cảm ơn đã dành chút thời gian cho tôi. Tôi muốn nói chuyện nhanh một chút.' },
        { speaker: 'other', speakerLabel: 'Staff', text: "Sure, what's up?", vietnamese: 'Được, có chuyện gì vậy?' },
        { speaker: 'you', speakerLabel: 'You', text: "I've noticed that over the past two weeks you've been arriving 10 to 15 minutes late for your shifts — it happened four times. I wanted to check in and see if everything's okay.", vietnamese: 'Tôi nhận thấy trong hai tuần vừa qua bạn đến trễ 10 đến 15 phút — điều này xảy ra bốn lần. Tôi muốn hỏi xem mọi thứ có ổn không.' },
        { speaker: 'other', speakerLabel: 'Staff', text: "Yeah, I'm sorry about that. My bus route changed and I'm still figuring out the new timing.", vietnamese: 'Vâng, tôi xin lỗi về điều đó. Tuyến xe buýt của tôi thay đổi và tôi vẫn đang tìm cách sắp xếp thời gian mới.' },
        { speaker: 'you', speakerLabel: 'You', text: "I appreciate you being honest with me. I understand public transport can be unpredictable. Is there anything we can do to help — like adjusting your shift start time by 15 minutes?", vietnamese: 'Tôi đánh giá cao sự thành thật của bạn. Tôi hiểu giao thông công cộng có thể không đoán trước được. Có điều gì chúng tôi có thể làm để giúp không — như điều chỉnh giờ bắt đầu ca sớm hơn 15 phút?' },
        { speaker: 'other', speakerLabel: 'Staff', text: "Actually, that would really help. If I started at 1:15 instead of 1:00 I'd be able to catch an earlier bus.", vietnamese: 'Thật ra điều đó sẽ rất hữu ích. Nếu tôi bắt đầu lúc 1:15 thay vì 1:00 thì tôi có thể bắt xe buýt sớm hơn.' },
        { speaker: 'you', speakerLabel: 'You', text: "Let's try that for a week and see if it helps. What I need from you is consistency — the team depends on everyone being on time. If this continues to be an issue, we'll need to discuss a more formal arrangement. Does that sound fair?", vietnamese: 'Hãy thử điều đó một tuần và xem có giúp ích không. Điều tôi cần từ bạn là sự đều đặn — nhóm phụ thuộc vào việc mọi người đúng giờ. Nếu điều này tiếp tục là vấn đề, chúng ta sẽ cần thảo luận thêm. Điều đó có công bằng không?' },
        { speaker: 'other', speakerLabel: 'Staff', text: "Yes, absolutely. I'll make sure it doesn't happen again. Thanks for understanding.", vietnamese: 'Vâng, chắc chắn rồi. Tôi sẽ đảm bảo điều này không xảy ra nữa. Cảm ơn bạn đã thông cảm.' },
        { speaker: 'you', speakerLabel: 'You', text: "Thanks James. I know you're a great team member and I want to work this out. Let's check in again next week.", vietnamese: 'Cảm ơn James. Tôi biết bạn là thành viên nhóm tuyệt vời và tôi muốn giải quyết điều này. Hãy kiểm tra lại vào tuần tới nhé.' },
      ],
      keyPoints: ['Raising the issue with specific facts', 'Asking for the employee\'s perspective', 'Offering a solution', 'Setting clear expectations', 'Scheduling follow-up'],
    },
  ],
  vocabulary: [
    { id: 'hrv-1', word: 'probation period', partOfSpeech: 'noun', definition: 'A trial period at the start of a new job', definitionVi: 'Thời gian thử việc', example: 'All new staff have a 2-week probation period.', exampleVi: 'Tất cả nhân viên mới có thời gian thử việc 2 tuần.', phonetic: '/proʊˈbeɪʃən ˈpɪəriəd/' },
    { id: 'hrv-2', word: 'availability', partOfSpeech: 'noun', definition: 'The times when someone is free to work', definitionVi: 'Thời gian có thể làm việc', example: 'Please let me know your availability for next week.', exampleVi: 'Vui lòng cho tôi biết bạn có thể làm việc khi nào tuần tới.', phonetic: '/əˌveɪləˈbɪlɪti/' },
    { id: 'hrv-3', word: 'shift', partOfSpeech: 'noun', definition: 'A scheduled period of work', definitionVi: 'Ca làm việc', example: 'The morning shift starts at 7am.', exampleVi: 'Ca sáng bắt đầu lúc 7 giờ.', phonetic: '/ʃɪft/' },
    { id: 'hrv-4', word: 'resignation', partOfSpeech: 'noun', definition: 'The act of formally leaving a job', definitionVi: 'Sự từ chức, nghỉ việc', example: 'She submitted her resignation letter yesterday.', exampleVi: 'Cô ấy nộp đơn xin nghỉ việc hôm qua.', phonetic: '/ˌrezɪɡˈneɪʃən/' },
    { id: 'hrv-5', word: 'punctual', partOfSpeech: 'adjective', definition: 'Always arriving or doing things at the expected time', definitionVi: 'Đúng giờ', example: 'We expect all staff to be punctual.', exampleVi: 'Chúng tôi mong tất cả nhân viên đúng giờ.', phonetic: '/ˈpʌŋktʃuəl/' },
    { id: 'hrv-6', word: 'handover', partOfSpeech: 'noun', definition: 'The process of passing responsibilities to someone else', definitionVi: 'Bàn giao', example: 'Please do a proper handover before your last day.', exampleVi: 'Hãy bàn giao đúng cách trước ngày cuối cùng của bạn.', phonetic: '/ˈhændoʊvər/' },
  ],
  readingPassages: [
    {
      id: 'hrr-1',
      title: 'Job Posting: Barista / Counter Staff',
      titleVi: 'Thông báo tuyển dụng: Nhân viên pha chế / quầy',
      content: `**NOW HIRING — Boba Heaven**
Position: Barista / Counter Staff
Location: 123 Nguyen Hue Street, District 1
Type: Part-time (20–25 hours/week)
Pay: $8.00/hour (review after 2-week probation)

**About Us**
Boba Heaven is a premium bubble tea shop known for our fresh ingredients, warm service, and consistent quality. We've been open for three years and we're growing! We're looking for enthusiastic, reliable people to join our friendly team.

**What You'll Do**
- Take customer orders with a smile and process payments accurately
- Prepare drinks according to our recipes using precise measurements
- Maintain cleanliness and hygiene standards throughout your shift
- Handle customer inquiries and resolve minor issues professionally
- Restock ingredients and supplies as needed
- Work as part of a team to ensure smooth operations during peak hours

**What We're Looking For**
- A positive attitude and genuine love for customer service
- Reliability: can commit to your scheduled shifts
- Attention to detail: following recipes exactly matters to us
- Ability to stay calm under pressure during busy periods
- Previous experience in food service is a bonus, but NOT required — we train

**What We Offer**
- Competitive hourly pay with performance review after probation
- One free drink per shift
- 20% staff discount on days off
- Flexible shift times (morning: 7am–1pm, afternoon: 1pm–7pm)
- A positive, team-focused work environment
- Opportunity to grow — our operations manager started as a barista!

**How to Apply**
Send your CV and a short paragraph about why you'd like to join our team to: jobs@bobaheavenshop.com

We aim to respond to all applications within 3 business days.`,
      questions: [
        { question: 'Is previous food service experience REQUIRED for this position?', options: ['Yes, at least 1 year is required', 'Yes, but only for the morning shift', 'No, training is provided', 'No, but it is strongly preferred'], correctIndex: 2, explanation: '"Previous experience in food service is a bonus, but NOT required — we train" — clearly stated in the requirements.' },
        { question: 'What is the starting pay, and when is it reviewed?', options: ['$9/hour, reviewed after 1 month', '$8/hour, reviewed after the 2-week probation', '$8/hour, reviewed after 6 months', '$10/hour, reviewed after 3 months'], correctIndex: 1, explanation: '"Pay: $8.00/hour (review after 2-week probation)" — stated at the top of the posting.' },
        { question: 'Which of the following is listed as a benefit for staff?', options: ['Free uniform', 'Paid vacation days', 'One free drink per shift', 'Health insurance'], correctIndex: 2, explanation: '"One free drink per shift" is listed in the What We Offer section.' },
        { question: 'What does the posting say about career growth?', options: ['Managers are hired from outside', 'There are no growth opportunities in a small shop', 'The operations manager started as a barista', 'Growth depends on completing a diploma'], correctIndex: 2, explanation: '"Opportunity to grow — our operations manager started as a barista!" shows internal promotion is possible.' },
      ],
    },
    {
      id: 'hrr-2',
      title: 'Reference Letter Request & Sample',
      titleVi: 'Yêu cầu thư giới thiệu và mẫu thư',
      content: `**Situation:** A former employee, Anna, worked at Boba Heaven for 18 months before leaving for a full-time marketing role. She is now applying for a senior position and has asked her former manager (you) for a reference letter. Read both the request and the sample response.

---

**Anna's Request:**

Hi Minh,

I hope you are doing well! As you know, I've been working as a marketing assistant for the past year and I've really loved it. I've just applied for a Senior Marketing Coordinator position at a bigger company and they've asked for two professional references.

I was wondering if you would be willing to write a reference letter for me? You were my first manager and I learned so much from working at Boba Heaven. I think a reference from you would carry a lot of weight.

The letter is due by April 30th. I am happy to provide any details about the role that would help.

Thank you so much for considering this!

Anna

---

**Manager's Reference Letter:**

To Whom It May Concern,

I am writing in strong support of Anna Tran's application for the Senior Marketing Coordinator position. I had the pleasure of managing Anna at Boba Heaven for 18 months, from January 2022 to June 2023.

During her time with us, Anna consistently demonstrated exceptional customer service skills, a strong work ethic, and an ability to remain calm and professional under pressure. She quickly became one of our most trusted team members, taking on responsibility for training new staff within just six months of joining.

What stood out most was Anna's initiative. Without being asked, she created a simple social media posting schedule for our Instagram that we still use today. This kind of proactive thinking — going beyond her role — made a real difference to our business.

I have no hesitation in recommending Anna for this position. Her professionalism, reliability, and positive attitude would be an asset to any team.

Please feel free to contact me directly if you require any further information.

Kind regards,
Minh — Owner and Manager, Boba Heaven
bobaheavenshop@email.com`,
      questions: [
        { question: 'Why does Anna think a reference from Minh would be valuable?', options: ['Minh is famous in the industry', 'Minh was her first manager and she learned a lot there', 'Minh works in the marketing industry', 'Minh knows the hiring manager at the new company'], correctIndex: 1, explanation: 'Anna says: "You were my first manager and I learned so much from working at Boba Heaven. I think a reference from you would carry a lot of weight."' },
        { question: 'What extra responsibility did Anna take on after just 6 months?', options: ['Managing the shop\'s finances', 'Training new staff', 'Running the supplier orders', 'Creating the menu'], correctIndex: 1, explanation: 'Minh\'s letter states: "She quickly became one of our most trusted team members, taking on responsibility for TRAINING NEW STAFF within just six months of joining."' },
        { question: 'What initiative did Anna show that impressed Minh?', options: ['She redesigned the menu', 'She created a social media posting schedule for Instagram', 'She negotiated a better supplier price', 'She opened the shop an hour earlier'], correctIndex: 1, explanation: '"Without being asked, she created a simple social media posting schedule for our Instagram that we still use today."' },
        { question: 'What is the deadline for the reference letter?', options: ['April 15th', 'April 20th', 'April 30th', 'May 1st'], correctIndex: 2, explanation: 'Anna\'s request states: "The letter is due by April 30th."' },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'hw-1',
      title: 'Write a Job Offer Email',
      titleVi: 'Viết email mời nhận việc',
      instructions: 'You interviewed Linh for a part-time barista position and want to offer her the job. Write a professional job offer email including: the role, start date, working hours, hourly rate, and what she needs to bring on her first day.',
      instructionsVi: 'Bạn vừa phỏng vấn Linh cho vị trí barista bán thời gian và muốn mời cô ấy nhận việc. Hãy viết email mời nhận việc chuyên nghiệp bao gồm: vị trí, ngày bắt đầu, giờ làm, mức lương theo giờ và những gì cô ấy cần mang vào ngày đầu tiên.',
      sampleAnswer: `Subject: Job Offer — Part-Time Barista Position at Boba Heaven

Dear Linh,

Thank you for coming in to interview with us last week. We were very impressed and are pleased to offer you the part-time Barista position at Boba Heaven.

Here are the details of the offer:

Position: Part-Time Barista
Start Date: Monday, 1 May 2024
Working Hours: Tuesday, Thursday, Saturday — 9:00 AM to 3:00 PM (18 hours/week)
Hourly Rate: $8.50/hour, paid fortnightly

On your first day, please bring:
- A valid photo ID (e.g., national ID card or passport)
- Your bank account details for payroll setup
- Any food handler certificates you may have

Please arrive by 8:45 AM and ask for Minh at the front counter.

We look forward to welcoming you to the Boba Heaven family! Please reply to confirm your acceptance by Friday.

Kind regards,
Nguyen Van Minh
Owner, Boba Heaven`,
      keyPhrases: ['we are pleased to offer', 'working hours', 'hourly rate', 'paid fortnightly', 'photo ID', 'payroll setup', 'confirm your acceptance'],
    },
    {
      id: 'hw-2',
      title: 'Write a Rejection Email After an Interview',
      titleVi: 'Viết email từ chối sau phỏng vấn',
      instructions: 'You interviewed three candidates but can only hire one. Write a professional and kind rejection email to one of the candidates you won\'t be moving forward with. Be respectful, thank them, and leave the door open for future opportunities.',
      instructionsVi: 'Bạn phỏng vấn ba ứng viên nhưng chỉ tuyển được một người. Hãy viết email từ chối chuyên nghiệp và lịch sự cho một ứng viên không được chọn. Hãy tôn trọng, cảm ơn họ và để ngỏ cơ hội trong tương lai.',
      sampleAnswer: `Subject: Re: Barista Position — Boba Heaven

Dear Tuan,

Thank you so much for taking the time to come in and interview with us for the Barista position. It was a genuine pleasure meeting you and learning about your experience.

After careful consideration, we have decided to move forward with another candidate whose experience more closely matched our current needs. This was a very difficult decision — the standard of candidates was high.

We were impressed by your enthusiasm and customer service background, and we encourage you to apply again in the future if another suitable position becomes available. We will keep your details on file.

Thank you again for your interest in Boba Heaven. We wish you all the best in your job search.

Kind regards,
Nguyen Van Minh
Owner, Boba Heaven`,
      keyPhrases: ['thank you for your time', 'after careful consideration', 'move forward with another candidate', 'difficult decision', 'keep your details on file', 'wish you all the best'],
    },
  ],
};
