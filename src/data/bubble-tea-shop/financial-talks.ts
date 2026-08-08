import { Context } from '../types';

export const financialTalksContext: Context = {
  id: 'financial-talks',
  title: 'Financial Conversations',
  titleVi: 'Hội thoại tài chính',
  description: 'Discuss revenue, costs, and business finances with partners and banks.',
  descriptionVi: 'Thảo luận về doanh thu, chi phí và tài chính kinh doanh với đối tác và ngân hàng.',
  icon: '💰',
  level: 4,
  phrases: [
    { id: 'fin-1', english: "Our monthly revenue has increased by 15% compared to last quarter.", vietnamese: 'Doanh thu hàng tháng của chúng tôi tăng 15% so với quý trước.', phonetic: '/aʊər/ /ˈmʌnθli/ /ˈrevənjuː/ /hæz/ /ɪnˈkriːst/', category: 'report' },
    { id: 'fin-2', english: "Our profit margin is around 40% after operating costs.", vietnamese: 'Biên lợi nhuận của chúng tôi khoảng 40% sau chi phí vận hành.', phonetic: '/ˈprɒfɪt/ /ˈmɑːrdʒɪn/', category: 'report' },
    { id: 'fin-3', english: "I'd like to apply for a small business loan to open a second location.", vietnamese: 'Tôi muốn vay vốn doanh nghiệp nhỏ để mở chi nhánh thứ hai.', phonetic: '/aɪd/ /laɪk/ /tuː/ /əˈplaɪ/ /fɔːr/ /ə/ /smɔːl/ /ˈbɪznɪs/ /loʊn/', category: 'loan' },
    { id: 'fin-4', english: "What is the interest rate on this loan?", vietnamese: 'Lãi suất của khoản vay này là bao nhiêu?', phonetic: '/wɒt/ /ɪz/ /ðə/ /ˈɪntrəst/ /reɪt/', category: 'loan' },
    { id: 'fin-5', english: "Our break-even point is approximately 200 drinks per day.", vietnamese: 'Điểm hòa vốn của chúng tôi là khoảng 200 ly mỗi ngày.', phonetic: '/ˈbreɪk ˌiːvən/ /pɔɪnt/', category: 'analysis' },
    { id: 'fin-6', english: "We need to reduce our overhead costs by about 10%.", vietnamese: 'Chúng tôi cần giảm chi phí cố định khoảng 10%.', phonetic: '/wiː/ /niːd/ /tuː/ /rɪˈdjuːs/ /aʊər/ /ˈoʊvərhed/ /kɒsts/', category: 'analysis' },
    { id: 'fin-7', english: "Our cash flow has been strong this quarter.", vietnamese: 'Dòng tiền của chúng tôi rất mạnh trong quý này.', phonetic: '/aʊər/ /kæʃ/ /floʊ/ /hæz/ /biːn/ /strɒŋ/', category: 'report' },
    { id: 'fin-8', english: "Could you walk me through the repayment schedule?", vietnamese: 'Bạn có thể giải thích cho tôi lịch trả nợ không?', phonetic: '/kʊd/ /juː/ /wɔːk/ /miː/ /θruː/ /ðə/ /rɪˈpeɪmənt/ /ˈʃedjuːl/', category: 'loan' },
  ],
  dialogs: [
    {
      id: 'find-1',
      title: 'Monthly Review with Accountant',
      titleVi: 'Họp đánh giá hàng tháng với kế toán',
      situation: 'You review last month\'s financial performance with your accountant',
      situationVi: 'Bạn xem xét hiệu suất tài chính tháng vừa rồi với kế toán',
      level: 4,
      lines: [
        { speaker: 'other', speakerLabel: 'Accountant', text: "Good morning Minh. I've prepared the monthly report. Overall it was a strong month — revenue came in at $28,500.", vietnamese: 'Chào buổi sáng Minh. Tôi đã chuẩn bị báo cáo hàng tháng. Nhìn chung đây là tháng tốt — doanh thu đạt 28.500 đô.' },
        { speaker: 'you', speakerLabel: 'You', text: "That's up from last month, right? What was it — around $25,000?", vietnamese: 'Đó là tăng so với tháng trước, đúng không? Tháng trước khoảng 25.000 đô?' },
        { speaker: 'other', speakerLabel: 'Accountant', text: "Exactly, so that's a 14% increase month-on-month. The lunch and afternoon rush performed particularly well.", vietnamese: 'Đúng vậy, tức là tăng 14% so với tháng trước. Buổi trưa và giờ cao điểm chiều hoạt động đặc biệt tốt.' },
        { speaker: 'you', speakerLabel: 'You', text: "Great. And what about costs? I feel like our supply costs went up this month.", vietnamese: 'Tốt. Còn chi phí thì sao? Tôi cảm thấy chi phí nguyên liệu tháng này tăng lên.' },
        { speaker: 'other', speakerLabel: 'Accountant', text: "You're right. Total operating costs were $16,200 — that's about $1,800 more than last month. The main driver is ingredient costs, which went up about 8%.", vietnamese: 'Bạn đúng. Tổng chi phí vận hành là 16.200 đô — nhiều hơn tháng trước khoảng 1.800 đô. Nguyên nhân chính là chi phí nguyên liệu, tăng khoảng 8%.' },
        { speaker: 'you', speakerLabel: 'You', text: "So our net profit for the month was roughly $12,000. That's a profit margin of about 42%, which is solid.", vietnamese: 'Vậy lợi nhuận ròng tháng này khoảng 12.000 đô. Đó là biên lợi nhuận khoảng 42%, khá tốt.' },
        { speaker: 'other', speakerLabel: 'Accountant', text: "Correct. But I want to flag something — your staff overtime costs have been creeping up. It's currently about 12% of your payroll. Industry average is closer to 7%.", vietnamese: 'Đúng. Nhưng tôi muốn lưu ý điều gì đó — chi phí làm thêm giờ của nhân viên đang tăng dần. Hiện tại khoảng 12% tổng lương. Mức trung bình ngành gần hơn là 7%.' },
        { speaker: 'you', speakerLabel: 'You', text: "That's a good catch. I think we need an extra part-time person during the lunch peak rather than asking existing staff to stay late. It would actually cost less.", vietnamese: 'Phát hiện tốt. Tôi nghĩ chúng ta cần thêm một người bán thời gian trong giờ cao điểm buổi trưa thay vì yêu cầu nhân viên hiện tại ở lại muộn. Thực ra sẽ ít tốn kém hơn.' },
        { speaker: 'other', speakerLabel: 'Accountant', text: "That analysis is correct. Hiring a part-timer at $8/hour for 15 hours a week would cost about $480 a month — much less than the $900 in overtime you're currently paying.", vietnamese: 'Phân tích đó đúng. Thuê người bán thời gian 8 đô/giờ cho 15 giờ một tuần sẽ tốn khoảng 480 đô một tháng — ít hơn nhiều so với 900 đô làm thêm giờ bạn đang trả.' },
        { speaker: 'you', speakerLabel: 'You', text: "Let's make that happen. I'll start the hiring process this week. Anything else I should focus on?", vietnamese: 'Hãy thực hiện điều đó. Tôi sẽ bắt đầu quy trình tuyển dụng tuần này. Còn điều gì khác tôi nên tập trung không?' },
        { speaker: 'other', speakerLabel: 'Accountant', text: "Just watch the cash flow closely next month — you have a large equipment payment due on the 15th. Make sure you have at least $5,000 in reserve.", vietnamese: 'Chỉ cần theo dõi chặt dòng tiền tháng tới — bạn có khoản thanh toán thiết bị lớn vào ngày 15. Hãy đảm bảo bạn có ít nhất 5.000 đô trong quỹ dự phòng.' },
      ],
      keyPoints: ['Reading financial reports', 'Calculating profit margins', 'Identifying cost issues', 'Making data-driven decisions'],
    },
    {
      id: 'find-2',
      title: 'Applying for a Business Loan',
      titleVi: 'Vay vốn kinh doanh',
      situation: 'You meet with a bank officer to apply for a loan to open a second shop',
      situationVi: 'Bạn gặp nhân viên ngân hàng để vay vốn mở cửa hàng thứ hai',
      level: 4,
      lines: [
        { speaker: 'other', speakerLabel: 'Bank Officer', text: "Good afternoon. I understand you're interested in a small business loan. Can you tell me more about your business?", vietnamese: 'Chào buổi chiều. Tôi hiểu bạn quan tâm đến vay vốn doanh nghiệp nhỏ. Bạn có thể cho tôi biết thêm về doanh nghiệp của bạn không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Of course. I own a bubble tea shop called Boba Heaven. We've been operating for three years, and we've been profitable from month six onwards. Right now we're generating about $28,000 in monthly revenue with a 40% profit margin.", vietnamese: 'Tất nhiên. Tôi sở hữu một quán trà sữa tên Boba Heaven. Chúng tôi đã hoạt động ba năm và có lợi nhuận từ tháng thứ sáu. Hiện tại chúng tôi tạo ra khoảng 28.000 đô doanh thu hàng tháng với biên lợi nhuận 40%.' },
        { speaker: 'other', speakerLabel: 'Bank Officer', text: "That's impressive for a small food business. How much are you looking to borrow, and what will the funds be used for?", vietnamese: 'Đó là điều ấn tượng đối với doanh nghiệp thực phẩm nhỏ. Bạn muốn vay bao nhiêu và tiền sẽ dùng để làm gì?' },
        { speaker: 'you', speakerLabel: 'You', text: "I'm looking to borrow $50,000 to open a second location. That covers the security deposit on the new premises, fit-out costs, equipment, and three months of working capital.", vietnamese: 'Tôi muốn vay 50.000 đô để mở cơ sở thứ hai. Số tiền đó bao gồm tiền đặt cọc cho mặt bằng mới, chi phí trang bị nội thất, thiết bị và ba tháng vốn lưu động.' },
        { speaker: 'other', speakerLabel: 'Bank Officer', text: "Do you have a business plan outlining your projected revenue for the new location?", vietnamese: 'Bạn có kế hoạch kinh doanh nêu rõ doanh thu dự kiến cho cơ sở mới không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Yes, I've prepared a full business plan. Based on foot traffic analysis of the new area, we project to break even within four months and reach $20,000 monthly revenue within the first year.", vietnamese: 'Có, tôi đã chuẩn bị kế hoạch kinh doanh đầy đủ. Dựa trên phân tích lưu lượng người ở khu vực mới, chúng tôi dự kiến hòa vốn trong vòng bốn tháng và đạt 20.000 đô doanh thu hàng tháng trong năm đầu tiên.' },
        { speaker: 'other', speakerLabel: 'Bank Officer', text: "What's the interest rate you were hoping for?", vietnamese: 'Lãi suất bạn kỳ vọng là bao nhiêu?' },
        { speaker: 'you', speakerLabel: 'You', text: "I was hoping for something around 6 to 7% per annum. I've reviewed your current offerings online and I believe we meet the criteria for your small business growth package.", vietnamese: 'Tôi hy vọng khoảng 6 đến 7% mỗi năm. Tôi đã xem xét các gói hiện tại của ngân hàng trực tuyến và tôi tin chúng tôi đáp ứng tiêu chí cho gói tăng trưởng doanh nghiệp nhỏ của bạn.' },
        { speaker: 'other', speakerLabel: 'Bank Officer', text: "That's within range. I'll need to review your financial statements for the past two years, your tax returns, and the business plan. Can you have those ready within a week?", vietnamese: 'Điều đó trong phạm vi. Tôi cần xem xét báo cáo tài chính hai năm qua, hồ sơ thuế và kế hoạch kinh doanh. Bạn có thể chuẩn bị sẵn trong vòng một tuần không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Absolutely. I'll have everything prepared by Thursday. What's the typical processing time once documents are submitted?", vietnamese: 'Chắc chắn rồi. Tôi sẽ chuẩn bị mọi thứ trước thứ Năm. Thời gian xử lý thông thường sau khi nộp tài liệu là bao lâu?' },
        { speaker: 'other', speakerLabel: 'Bank Officer', text: "Usually 5 to 7 business days. If approved, funds can be disbursed within two weeks.", vietnamese: 'Thường là 5 đến 7 ngày làm việc. Nếu được chấp thuận, tiền có thể được giải ngân trong vòng hai tuần.' },
      ],
      keyPoints: ['Presenting business credentials', 'Stating loan purpose clearly', 'Discussing interest rates', 'Knowing what documents to prepare'],
    },
    {
      id: 'find-3',
      title: 'Discussing Costs with a Business Partner',
      titleVi: 'Thảo luận chi phí với đối tác kinh doanh',
      situation: 'You and your business partner review rising costs and plan how to manage them',
      situationVi: 'Bạn và đối tác kinh doanh xem xét chi phí tăng và lên kế hoạch quản lý',
      level: 4,
      lines: [
        { speaker: 'other', speakerLabel: 'Partner', text: "Minh, I've been looking at this month's numbers. Our ingredient costs are up again — I'm a little worried.", vietnamese: 'Minh, tôi vừa xem số liệu tháng này. Chi phí nguyên liệu lại tăng — tôi hơi lo ngại.' },
        { speaker: 'you', speakerLabel: 'You', text: "I know. Tapioca prices went up again because of the dry season. It's about 12% higher than six months ago.", vietnamese: 'Tôi biết. Giá trân châu tăng lại vì mùa khô. Cao hơn khoảng 12% so với sáu tháng trước.' },
        { speaker: 'other', speakerLabel: 'Partner', text: "Should we raise our prices? We haven't changed the menu prices in over a year.", vietnamese: 'Chúng ta có nên tăng giá không? Chúng ta chưa thay đổi giá menu hơn một năm rồi.' },
        { speaker: 'you', speakerLabel: 'You', text: "I've been thinking about that. A small price increase — maybe 5 to 10% on select items — could offset the cost rise without pushing away too many customers. We'd need to be strategic about which items we adjust.", vietnamese: 'Tôi đã suy nghĩ về điều đó. Tăng giá nhỏ — có thể 5 đến 10% cho một số mặt hàng chọn lọc — có thể bù đắp chi phí tăng mà không đẩy đi quá nhiều khách. Chúng ta cần chiến lược về việc điều chỉnh mặt hàng nào.' },
        { speaker: 'other', speakerLabel: 'Partner', text: "What about looking at the less popular items first? Items that people are less price-sensitive about?", vietnamese: 'Còn việc xem xét các mặt hàng ít phổ biến hơn trước thì sao? Những mặt hàng mà mọi người ít nhạy cảm về giá hơn?' },
        { speaker: 'you', speakerLabel: 'You', text: "Exactly. I'd suggest increasing the specialty drinks by $0.50 and keeping the classic milk teas at current prices. Our bestsellers need to stay accessible.", vietnamese: 'Đúng vậy. Tôi đề nghị tăng đồ uống đặc biệt thêm 0,50 đô và giữ nguyên giá trà sữa cổ điển. Các món bán chạy nhất cần được giữ ở mức tiếp cận được.' },
        { speaker: 'other', speakerLabel: 'Partner', text: "That makes sense. We should also look at whether we can reduce waste — I've noticed quite a bit of leftover syrup at end of day.", vietnamese: 'Điều đó hợp lý. Chúng ta cũng nên xem xét có thể giảm lãng phí không — tôi nhận thấy khá nhiều syrup thừa vào cuối ngày.' },
        { speaker: 'you', speakerLabel: 'You', text: "Good point. Let's implement stricter portioning and track daily inventory more carefully. Even small reductions in waste add up to significant savings over a month.", vietnamese: 'Điểm hay đấy. Hãy thực hiện chia lượng chặt chẽ hơn và theo dõi tồn kho hàng ngày cẩn thận hơn. Ngay cả việc giảm lãng phí nhỏ cũng tích lũy thành tiết kiệm đáng kể trong một tháng.' },
        { speaker: 'other', speakerLabel: 'Partner', text: "Agreed. Let's draft the new price list and run it by our regular customers before making it official.", vietnamese: 'Đồng ý. Hãy soạn bảng giá mới và tham khảo ý kiến khách quen trước khi chính thức hóa.' },
      ],
      keyPoints: ['Discussing cost pressures', 'Strategic price increases', 'Reducing waste', 'Making decisions together'],
    },
  ],
  vocabulary: [
    { id: 'finv-1', word: 'revenue', partOfSpeech: 'noun', definition: 'Total income generated by the business', definitionVi: 'Doanh thu', example: 'Our monthly revenue grew to $50,000.', exampleVi: 'Doanh thu hàng tháng tăng lên 50.000 đô.', phonetic: '/ˈrevənjuː/' },
    { id: 'finv-2', word: 'profit margin', partOfSpeech: 'noun', definition: 'The percentage of revenue that becomes profit', definitionVi: 'Biên lợi nhuận', example: 'A 40% profit margin is very healthy for our industry.', exampleVi: 'Biên lợi nhuận 40% rất tốt cho ngành của chúng tôi.', phonetic: '/ˈprɒfɪt ˈmɑːrdʒɪn/' },
    { id: 'finv-3', word: 'cash flow', partOfSpeech: 'noun', definition: 'The movement of money in and out of the business', definitionVi: 'Dòng tiền', example: 'Managing cash flow is crucial for small businesses.', exampleVi: 'Quản lý dòng tiền rất quan trọng với doanh nghiệp nhỏ.', phonetic: '/kæʃ floʊ/' },
    { id: 'finv-4', word: 'break-even point', partOfSpeech: 'noun', definition: 'The point where income equals expenses (no profit or loss)', definitionVi: 'Điểm hòa vốn', example: 'We reached our break-even point after 3 months.', exampleVi: 'Chúng tôi đạt điểm hòa vốn sau 3 tháng.', phonetic: '/ˈbreɪk ˌiːvən pɔɪnt/' },
    { id: 'finv-5', word: 'overhead costs', partOfSpeech: 'noun', definition: 'Fixed costs of running the business (rent, utilities, salaries)', definitionVi: 'Chi phí cố định (thuê mặt bằng, điện nước, lương)', example: 'Rent is our biggest overhead cost.', exampleVi: 'Tiền thuê mặt bằng là chi phí cố định lớn nhất của chúng tôi.', phonetic: '/ˈoʊvərhed kɒsts/' },
    { id: 'finv-6', word: 'disbursed', partOfSpeech: 'verb (past)', definition: 'Money paid out or distributed', definitionVi: 'Giải ngân (tiền được trả ra)', example: 'The loan will be disbursed within two weeks of approval.', exampleVi: 'Khoản vay sẽ được giải ngân trong vòng hai tuần kể từ khi được chấp thuận.', phonetic: '/dɪsˈbɜːrsd/' },
  ],
  readingPassages: [
    {
      id: 'fin-read-1',
      title: 'Monthly Financial Report — Boba Heaven',
      titleVi: 'Báo cáo tài chính hàng tháng — Boba Heaven',
      content: `BOBA HEAVEN — MONTHLY FINANCIAL SUMMARY
Period: March 2024

REVENUE
Total Sales: $28,500
- Drink Sales: $25,200
- Merchandise: $1,800
- Catering Orders: $1,500

OPERATING COSTS
Total Expenses: $16,200
- Ingredients & Supplies: $8,100 (28.4% of revenue)
- Staff Wages: $5,400 (18.9% of revenue)
- Rent & Utilities: $2,000 (7.0% of revenue)
- Miscellaneous: $700

NET PROFIT: $12,300
Profit Margin: 43.2%

NOTES:
Ingredient costs rose approximately 8% this month due to tapioca price increases from our primary supplier. Staff overtime costs were higher than expected at 12% of payroll — industry average is 7%. We recommend hiring one additional part-time team member to cover the lunch peak (12:00–14:00) at an estimated cost of $480/month, which would reduce overtime spending by roughly $900/month.

Cash flow remains healthy. A major equipment payment of $5,000 is due on the 15th of next month — ensure adequate reserves are in place before that date.

RECOMMENDATION:
Implement stricter ingredient portioning to reduce waste. Consider a 5–10% price increase on specialty drinks in Q2 to offset rising costs without impacting core bestsellers.`,
      questions: [
        {
          question: 'What was the total net profit for March 2024?',
          options: ['$28,500', '$16,200', '$12,300', '$25,200'],
          correctIndex: 2,
          explanation: 'Net profit = Total Sales ($28,500) minus Total Expenses ($16,200) = $12,300.',
        },
        {
          question: 'What is the main reason ingredient costs increased this month?',
          options: ['Staff hired more hours', 'New menu items added', 'Tapioca price increases from the supplier', 'Catering orders increased'],
          correctIndex: 2,
          explanation: 'The report states ingredient costs rose about 8% due to tapioca price increases from the primary supplier.',
        },
        {
          question: 'How much would hiring a part-time worker cost per month?',
          options: ['$900', '$700', '$480', '$5,000'],
          correctIndex: 2,
          explanation: 'The report estimates a part-time team member would cost approximately $480/month.',
        },
        {
          question: 'What should the business ensure before the 15th of next month?',
          options: ['Hire a new accountant', 'Have at least $5,000 in reserve for an equipment payment', 'Raise all drink prices', 'Reduce opening hours'],
          correctIndex: 1,
          explanation: 'The report warns that a $5,000 equipment payment is due on the 15th and adequate reserves must be in place.',
        },
      ],
    },
    {
      id: 'fin-read-2',
      title: 'Small Business Loan Application — Cover Letter',
      titleVi: 'Thư xin vay vốn doanh nghiệp nhỏ',
      content: `To: Small Business Lending Team
VietBank — Commercial Division

Re: Loan Application — Boba Heaven Expansion

Dear Loan Officer,

I am writing to formally apply for a small business loan of $50,000 to fund the opening of a second location of my bubble tea business, Boba Heaven.

BUSINESS BACKGROUND
Boba Heaven has been operating for three years at 45 Nguyen Hue Street, District 1. We have maintained consistent profitability since month six of operation, with current monthly revenue of $28,500 and a net profit margin of 43%. Our business has never required external financing — all growth to date has been funded through operating revenue.

LOAN PURPOSE
The requested $50,000 will be allocated as follows:
- Security deposit for new premises: $10,000
- Interior fit-out and signage: $18,000
- Equipment (machines, refrigeration, POS): $15,000
- Working capital reserve (3 months): $7,000

REPAYMENT CAPACITY
Based on our current financial trajectory, we project the new location to reach break-even within four months and generate $20,000 in monthly revenue by month twelve. We are confident we can service the loan comfortably at a monthly repayment of approximately $1,100 over 48 months.

I have enclosed our financial statements for the past two years, tax returns, and a full business plan including market analysis for the proposed location.

I look forward to discussing this application further.

Sincerely,
Nguyen Van Minh
Owner, Boba Heaven`,
      questions: [
        {
          question: 'How much money is Boba Heaven requesting from the bank?',
          options: ['$28,500', '$50,000', '$20,000', '$15,000'],
          correctIndex: 1,
          explanation: 'The letter clearly states the application is for a loan of $50,000.',
        },
        {
          question: 'How long has Boba Heaven been profitable?',
          options: ['Since opening day', 'Since month six', 'For the last two years', 'Since month twelve'],
          correctIndex: 1,
          explanation: 'The letter states the business has been profitable "since month six of operation."',
        },
        {
          question: 'What is the largest single expense in the loan allocation?',
          options: ['Security deposit ($10,000)', 'Working capital ($7,000)', 'Interior fit-out and signage ($18,000)', 'Equipment ($15,000)'],
          correctIndex: 2,
          explanation: 'Interior fit-out and signage at $18,000 is the largest single item in the breakdown.',
        },
        {
          question: 'What documents has the applicant enclosed with the letter?',
          options: [
            'Only financial statements',
            'Financial statements, tax returns, and a full business plan',
            'A business plan and employee contracts',
            'Tax returns and a loan repayment schedule',
          ],
          correctIndex: 1,
          explanation: 'The letter lists: financial statements for the past two years, tax returns, and a full business plan including market analysis.',
        },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'finw-1',
      title: 'Write a Monthly Summary Email to Your Business Partner',
      titleVi: 'Viết email tóm tắt tháng cho đối tác kinh doanh',
      instructions: 'Write a short monthly financial summary email to your business partner. Include: total revenue, total costs, net profit, the biggest issue this month, and your plan to address it next month. Use the figures: Revenue $28,500 / Costs $16,200 / Issue: overtime costs too high.',
      instructionsVi: 'Viết email tóm tắt tài chính hàng tháng cho đối tác kinh doanh. Bao gồm: doanh thu, chi phí, lợi nhuận ròng, vấn đề lớn nhất tháng này và kế hoạch giải quyết. Dùng số liệu: Doanh thu 28.500đ / Chi phí 16.200đ / Vấn đề: chi phí làm thêm giờ quá cao.',
      sampleAnswer: `Subject: March Financial Summary — Boba Heaven

Hi Chi,

Here's a quick summary of our March numbers:

💰 Revenue: $28,500 (+14% vs February)
💸 Operating Costs: $16,200
📈 Net Profit: $12,300 (Profit margin: 43.2%)

The good news: our busiest month yet. The afternoon rush has been particularly strong, especially on weekends.

The main issue this month: staff overtime costs came in at 12% of payroll, which is well above the industry average of 7%. This added approximately $900 in unexpected costs.

Our plan for April: hire one part-time team member to cover the lunch peak (12:00–14:00). Estimated cost is $480/month — which should cut overtime by roughly $900 and actually save us money overall.

I'll put together the job listing this week. Let me know if you have any questions or want to review the full report.

Cheers,
Minh`,
      keyPhrases: ['profit margin', 'operating costs', 'industry average', 'overtime costs', 'part-time', 'lunch peak', 'save us money'],
    },
    {
      id: 'finw-2',
      title: 'Write a Loan Request Follow-Up Email',
      titleVi: 'Viết email theo dõi hồ sơ vay vốn',
      instructions: 'You submitted your business loan application 10 days ago and have not heard back. Write a polite follow-up email to your bank contact asking for a status update, referencing your application details.',
      instructionsVi: 'Bạn đã nộp hồ sơ vay vốn kinh doanh 10 ngày trước và chưa nhận được phản hồi. Hãy viết email theo dõi lịch sự cho liên hệ ngân hàng để hỏi tình trạng, đề cập thông tin hồ sơ của bạn.',
      sampleAnswer: `Subject: Follow-Up — Business Loan Application (Boba Heaven)

Dear Ms. Nguyen,

I hope this email finds you well. I am writing to follow up on my small business loan application, which I submitted on [Date] for the amount of $50,000 to fund the expansion of Boba Heaven.

At our initial meeting, you mentioned that the processing time is typically 5 to 7 business days. It has now been 10 business days since I submitted all required documents (financial statements, tax returns, and business plan), so I wanted to check in on the status.

Please let me know if there is any additional information or documentation required from my side. I am happy to provide anything that would help move the process forward.

I look forward to hearing from you at your earliest convenience.

Kind regards,
Nguyen Van Minh
Owner, Boba Heaven
Phone: [phone number]`,
      keyPhrases: ['follow up', 'submitted on', 'processing time', 'required documents', 'additional information', 'move the process forward', 'at your earliest convenience'],
    },
  ],
};
