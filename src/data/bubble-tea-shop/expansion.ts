import { Context } from '../types';

export const expansionContext: Context = {
  id: 'expansion',
  title: 'Expansion & Partnerships',
  titleVi: 'Mở rộng và hợp tác',
  description: 'Talk to investors, discuss franchising, and build partnerships.',
  descriptionVi: 'Nói chuyện với nhà đầu tư, thảo luận nhượng quyền và xây dựng quan hệ đối tác.',
  icon: '🚀',
  level: 5,
  phrases: [
    { id: 'exp-1', english: "We're looking to expand to three more locations by end of year.", vietnamese: 'Chúng tôi muốn mở thêm 3 địa điểm vào cuối năm.', phonetic: '/wɪər/ /ˈlʊkɪŋ/ /tuː/ /ɪkˈspænd/', category: 'expansion' },
    { id: 'exp-2', english: "Our ROI over the past 12 months has been 85%.", vietnamese: 'ROI trong 12 tháng qua của chúng tôi là 85%.', phonetic: '/aʊər/ /ɑːr oʊ aɪ/', category: 'pitch' },
    { id: 'exp-3', english: "We're open to a franchise model for interested partners.", vietnamese: 'Chúng tôi chào đón mô hình nhượng quyền cho các đối tác quan tâm.', phonetic: '/wɪər/ /oʊpən/ /tuː/ /ə/ /ˈfræntʃaɪz/ /ˈmɒdəl/', category: 'franchise' },
    { id: 'exp-4', english: "I'd love to collaborate with you on a special menu item.", vietnamese: 'Tôi rất muốn hợp tác với bạn về một món đặc biệt trong menu.', phonetic: '/aɪd/ /lʌv/ /tuː/ /kəˈlæbəreɪt/ /wɪð/ /juː/', category: 'partnership' },
    { id: 'exp-5', english: "What would the investment terms look like?", vietnamese: 'Các điều khoản đầu tư sẽ như thế nào?', phonetic: '/wɒt/ /wʊd/ /ðə/ /ɪnˈvestmənt/ /tɜːrmz/ /lʊk/ /laɪk/', category: 'invest' },
    { id: 'exp-6', english: "We have a strong brand identity that is easily replicable.", vietnamese: 'Chúng tôi có bản sắc thương hiệu mạnh dễ dàng nhân rộng.', phonetic: '/wiː/ /hæv/ /ə/ /strɒŋ/ /brænd/ /aɪˈdentɪti/', category: 'pitch' },
    { id: 'exp-7', english: "The franchise fee covers training, branding, and ongoing support.", vietnamese: 'Phí nhượng quyền bao gồm đào tạo, thương hiệu và hỗ trợ liên tục.', phonetic: '/ðə/ /ˈfræntʃaɪz/ /fiː/ /ˈkʌvərz/ /ˈtreɪnɪŋ/', category: 'franchise' },
    { id: 'exp-8', english: "We're projecting 25% year-on-year growth for the next three years.", vietnamese: 'Chúng tôi dự kiến tăng trưởng 25% mỗi năm trong ba năm tới.', phonetic: '/wɪər/ /prəˈdʒektɪŋ/ /ˈtwenti faɪv pɜːrsent/', category: 'pitch' },
  ],
  dialogs: [
    {
      id: 'expd-1',
      title: 'Pitching to an Investor',
      titleVi: 'Thuyết phục nhà đầu tư',
      situation: 'You meet a potential investor interested in your bubble tea brand',
      situationVi: 'Bạn gặp nhà đầu tư tiềm năng quan tâm đến thương hiệu trà sữa của bạn',
      level: 5,
      lines: [
        { speaker: 'other', speakerLabel: 'Investor', text: "I've heard good things about Boba Heaven. Tell me — what makes your brand worth investing in?", vietnamese: 'Tôi đã nghe nhiều điều tốt về Boba Heaven. Hãy nói cho tôi nghe — điều gì làm cho thương hiệu của bạn đáng đầu tư?' },
        { speaker: 'you', speakerLabel: 'You', text: "Great question. In three years, we've grown from zero to $28,000 in monthly revenue with a 40% profit margin — and we've never taken on outside investment. That means every dollar of growth has come from the business itself.", vietnamese: 'Câu hỏi hay. Trong ba năm, chúng tôi đã tăng trưởng từ 0 đến 28.000 đô doanh thu hàng tháng với biên lợi nhuận 40% — và chúng tôi chưa bao giờ nhận đầu tư bên ngoài. Điều đó có nghĩa mọi đồng tăng trưởng đều đến từ chính doanh nghiệp.' },
        { speaker: 'other', speakerLabel: 'Investor', text: "Impressive. What do you plan to do with the investment?", vietnamese: 'Ấn tượng. Bạn dự định làm gì với khoản đầu tư?' },
        { speaker: 'you', speakerLabel: 'You', text: "We're seeking $150,000 to open two new locations simultaneously — one in District 7 and one near the university area. Both are high-footfall locations we've already scouted.", vietnamese: 'Chúng tôi đang tìm kiếm 150.000 đô để mở hai cơ sở mới đồng thời — một ở Quận 7 và một gần khu vực trường đại học. Cả hai đều là địa điểm có lưu lượng người cao mà chúng tôi đã khảo sát.' },
        { speaker: 'other', speakerLabel: 'Investor', text: "What's your projected timeline to profitability for the new locations?", vietnamese: 'Thời gian dự kiến để có lợi nhuận cho các cơ sở mới là bao lâu?' },
        { speaker: 'you', speakerLabel: 'You', text: "Based on our original shop's trajectory, we project both locations to break even within 4 months and reach $18,000 in monthly revenue each within the first year.", vietnamese: 'Dựa trên quỹ đạo của cửa hàng gốc, chúng tôi dự kiến cả hai cơ sở sẽ hòa vốn trong vòng 4 tháng và đạt 18.000 đô doanh thu hàng tháng mỗi cơ sở trong năm đầu tiên.' },
        { speaker: 'other', speakerLabel: 'Investor', text: "What are you offering in return for the investment?", vietnamese: 'Bạn đề nghị gì để đổi lấy khoản đầu tư?' },
        { speaker: 'you', speakerLabel: 'You', text: "We're offering a 20% equity stake in the expanded business, with a planned buyback option after year three at a pre-agreed multiple of EBITDA.", vietnamese: 'Chúng tôi đề nghị cổ phần 20% trong doanh nghiệp mở rộng, với tùy chọn mua lại theo kế hoạch sau năm thứ ba theo bội số EBITDA đã thỏa thuận trước.' },
        { speaker: 'other', speakerLabel: 'Investor', text: "I like what I'm hearing. What's your biggest risk and how are you mitigating it?", vietnamese: 'Tôi thích những gì tôi nghe. Rủi ro lớn nhất của bạn là gì và bạn giảm thiểu nó như thế nào?' },
        { speaker: 'you', speakerLabel: 'You', text: "The biggest risk is execution — managing quality and culture across multiple locations. We're mitigating this by standardizing all recipes and training materials, and promoting our best staff member to an operations manager role before we expand.", vietnamese: 'Rủi ro lớn nhất là thực thi — quản lý chất lượng và văn hóa trên nhiều cơ sở. Chúng tôi đang giảm thiểu bằng cách chuẩn hóa tất cả công thức và tài liệu đào tạo, đồng thời thăng chức cho nhân viên tốt nhất lên vai trò quản lý vận hành trước khi mở rộng.' },
        { speaker: 'other', speakerLabel: 'Investor', text: "That's a thoughtful answer. Let me review the financials and I'll come back to you within two weeks.", vietnamese: 'Đó là câu trả lời chu đáo. Để tôi xem xét tài chính và tôi sẽ liên hệ lại trong vòng hai tuần.' },
        { speaker: 'you', speakerLabel: 'You', text: "Thank you for your time. I'll send over the full business plan and audited financials this afternoon.", vietnamese: 'Cảm ơn bạn đã dành thời gian. Tôi sẽ gửi kế hoạch kinh doanh đầy đủ và báo cáo tài chính đã kiểm toán vào chiều nay.' },
      ],
      keyPoints: ['Opening with strong metrics', 'Stating the ask clearly', 'Addressing risk proactively', 'Knowing your numbers', 'Following up with documents'],
    },
    {
      id: 'expd-2',
      title: 'Discussing Franchise Opportunities',
      titleVi: 'Thảo luận cơ hội nhượng quyền',
      situation: 'Someone contacts you interested in buying a franchise of your brand',
      situationVi: 'Có người liên hệ quan tâm đến việc mua nhượng quyền thương hiệu của bạn',
      level: 5,
      lines: [
        { speaker: 'other', speakerLabel: 'Prospect', text: "Hi Minh! I've been following Boba Heaven for a while and I'd be really interested in opening a franchise in my city. Is that something you offer?", vietnamese: 'Xin chào Minh! Tôi đã theo dõi Boba Heaven một thời gian và rất muốn mở nhượng quyền ở thành phố của tôi. Đó có phải là điều bạn cung cấp không?' },
        { speaker: 'you', speakerLabel: 'You', text: "Thanks for reaching out! We are actually in the early stages of developing a franchise program. Can you tell me a bit about your background and the city you have in mind?", vietnamese: 'Cảm ơn đã liên hệ! Chúng tôi thực sự đang trong giai đoạn đầu phát triển chương trình nhượng quyền. Bạn có thể kể một chút về bản thân và thành phố bạn đang nghĩ đến không?' },
        { speaker: 'other', speakerLabel: 'Prospect', text: "I'm based in Da Nang. I've been running a small café for two years, so I have some experience in the food and beverage industry.", vietnamese: 'Tôi đang ở Đà Nẵng. Tôi đã quản lý một quán cà phê nhỏ hai năm rồi, nên tôi có chút kinh nghiệm trong ngành thực phẩm và đồ uống.' },
        { speaker: 'you', speakerLabel: 'You', text: "That's a great start. Da Nang has a growing market for premium drinks. Here's an overview of how our franchise model works: there's an initial franchise fee, and then we provide full training, the recipes, the branding materials, and ongoing operational support.", vietnamese: 'Đó là khởi đầu tốt. Đà Nẵng có thị trường đồ uống cao cấp đang phát triển. Đây là tổng quan về cách hoạt động của mô hình nhượng quyền: có phí nhượng quyền ban đầu, và chúng tôi cung cấp đào tạo đầy đủ, công thức, tài liệu thương hiệu và hỗ trợ vận hành liên tục.' },
        { speaker: 'other', speakerLabel: 'Prospect', text: "What does the initial investment look like?", vietnamese: 'Khoản đầu tư ban đầu trông như thế nào?' },
        { speaker: 'you', speakerLabel: 'You', text: "The franchise fee is $15,000, which covers the license to use the brand for five years. On top of that, you'd need to budget for the fit-out and equipment — typically between $30,000 and $50,000 depending on location size.", vietnamese: 'Phí nhượng quyền là 15.000 đô, bao gồm giấy phép sử dụng thương hiệu trong năm năm. Ngoài ra, bạn cần ngân sách cho trang bị nội thất và thiết bị — thường từ 30.000 đến 50.000 đô tùy thuộc vào quy mô địa điểm.' },
        { speaker: 'other', speakerLabel: 'Prospect', text: "And what kind of ongoing fees are there?", vietnamese: 'Và có những khoản phí liên tục nào không?' },
        { speaker: 'you', speakerLabel: 'You', text: "We charge a monthly royalty of 6% of gross revenue. In return, you get access to our updated recipes, any new menu items we develop, marketing materials, and quarterly check-ins from our team.", vietnamese: 'Chúng tôi tính phí bản quyền hàng tháng là 6% doanh thu gộp. Đổi lại, bạn được truy cập vào công thức cập nhật, bất kỳ mặt hàng menu mới nào chúng tôi phát triển, tài liệu marketing và kiểm tra hàng quý từ đội ngũ của chúng tôi.' },
        { speaker: 'other', speakerLabel: 'Prospect', text: "That sounds reasonable. What's the next step if I'm interested?", vietnamese: 'Nghe có vẻ hợp lý. Bước tiếp theo là gì nếu tôi quan tâm?' },
        { speaker: 'you', speakerLabel: 'You', text: "The next step would be to visit our flagship store so you can experience the operations firsthand. Then if you'd like to proceed, we'd sign a Letter of Intent and move into due diligence.", vietnamese: 'Bước tiếp theo là đến thăm cửa hàng hàng đầu của chúng tôi để bạn có thể trải nghiệm hoạt động trực tiếp. Sau đó nếu bạn muốn tiến hành, chúng ta sẽ ký Thư chấp thuận và chuyển sang thẩm định.' },
      ],
      keyPoints: ['Explaining franchise structure', 'Breaking down costs clearly', 'Describing ongoing support', 'Outlining next steps'],
    },
    {
      id: 'expd-3',
      title: 'Negotiating a Lease for New Location',
      titleVi: 'Đàm phán thuê mặt bằng mới',
      situation: 'You negotiate the lease terms for a new shop location with a landlord',
      situationVi: 'Bạn đàm phán điều khoản thuê mặt bằng quán mới với chủ nhà',
      level: 5,
      lines: [
        { speaker: 'other', speakerLabel: 'Landlord', text: "I have a few parties interested in the space, so I'd like to move fairly quickly. The asking rent is $3,500 per month with a two-year minimum lease.", vietnamese: 'Tôi có một vài bên quan tâm đến không gian này, nên tôi muốn tiến hành khá nhanh. Giá thuê yêu cầu là 3.500 đô mỗi tháng với hợp đồng thuê tối thiểu hai năm.' },
        { speaker: 'you', speakerLabel: 'You', text: "I appreciate the transparency. I've done some research on comparable spaces in this area — similar units are leasing for around $3,000 to $3,200. I'd like to propose $3,100 per month.", vietnamese: 'Tôi đánh giá cao sự minh bạch. Tôi đã nghiên cứu các không gian tương tự trong khu vực này — các đơn vị tương tự đang cho thuê khoảng 3.000 đến 3.200 đô. Tôi muốn đề xuất 3.100 đô mỗi tháng.' },
        { speaker: 'other', speakerLabel: 'Landlord', text: "I can come down to $3,300. I have high foot traffic here — this spot gets over 2,000 people walking past daily.", vietnamese: 'Tôi có thể giảm xuống 3.300 đô. Ở đây có lưu lượng người đi bộ cao — địa điểm này có hơn 2.000 người đi qua mỗi ngày.' },
        { speaker: 'you', speakerLabel: 'You', text: "I acknowledge the foot traffic — that's actually why I'm interested. I could meet you at $3,200, but I'd need a few conditions: a rent-free period of the first two months for fit-out, and an option to renew at no more than 5% increase after two years.", vietnamese: 'Tôi thừa nhận lưu lượng người — đó thực ra là lý do tôi quan tâm. Tôi có thể đồng ý ở mức 3.200 đô, nhưng tôi cần một vài điều kiện: miễn tiền thuê hai tháng đầu để trang bị, và tùy chọn gia hạn với mức tăng không quá 5% sau hai năm.' },
        { speaker: 'other', speakerLabel: 'Landlord', text: "Two months rent-free is a stretch. I can offer one month rent-free for fit-out, and I can agree to cap the renewal increase at 8%.", vietnamese: 'Hai tháng miễn tiền thuê là hơi nhiều. Tôi có thể đề nghị một tháng miễn tiền thuê để trang bị, và tôi có thể đồng ý giới hạn mức tăng gia hạn ở 8%.' },
        { speaker: 'you', speakerLabel: 'You', text: "One month works for me. But on the renewal cap — food and beverage businesses have tight margins, and cost predictability matters a lot to us. Could you do 6%?", vietnamese: 'Một tháng phù hợp với tôi. Nhưng về giới hạn gia hạn — doanh nghiệp thực phẩm và đồ uống có biên độ chặt, và khả năng dự đoán chi phí rất quan trọng với chúng tôi. Bạn có thể làm 6% không?' },
        { speaker: 'other', speakerLabel: 'Landlord', text: "Let's split the difference — 7%. And at $3,200 per month with one rent-free month, I think this is a fair deal for both of us.", vietnamese: 'Hãy chia đôi — 7%. Và với 3.200 đô mỗi tháng cộng một tháng miễn phí, tôi nghĩ đây là thỏa thuận công bằng cho cả hai.' },
        { speaker: 'you', speakerLabel: 'You', text: "I can agree to that. Let's also make sure the lease specifies that we can install our standard shop signage — we have a particular brand look we need to maintain.", vietnamese: 'Tôi có thể đồng ý với điều đó. Hãy cũng đảm bảo hợp đồng thuê quy định rằng chúng tôi có thể lắp đặt biển hiệu quán theo tiêu chuẩn — chúng tôi có phong cách thương hiệu cụ thể cần duy trì.' },
        { speaker: 'other', speakerLabel: 'Landlord', text: "That's fine, as long as it complies with the building's signage guidelines. I'll have the contract drafted by end of week.", vietnamese: 'Điều đó ổn, miễn là tuân thủ hướng dẫn biển hiệu của tòa nhà. Tôi sẽ soạn thảo hợp đồng trước cuối tuần.' },
        { speaker: 'you', speakerLabel: 'You', text: "Perfect. Please have your lawyer send it to my email and I'll have my side review it within three days.", vietnamese: 'Hoàn hảo. Hãy để luật sư của bạn gửi đến email của tôi và bên tôi sẽ xem xét trong vòng ba ngày.' },
      ],
      keyPoints: ['Opening with market research', 'Making a counter-offer', 'Negotiating specific conditions', 'Finding middle ground', 'Closing the deal professionally'],
    },
  ],
  vocabulary: [
    { id: 'expv-1', word: 'franchise', partOfSpeech: 'noun/verb', definition: 'A business model where others pay to use your brand', definitionVi: 'Nhượng quyền', example: "We're planning to franchise our brand next year.", exampleVi: 'Chúng tôi dự định nhượng quyền thương hiệu năm tới.', phonetic: '/ˈfræntʃaɪz/' },
    { id: 'expv-2', word: 'ROI', partOfSpeech: 'noun', definition: 'Return on Investment — profit relative to cost', definitionVi: 'Tỷ suất hoàn vốn', example: 'The ROI on our marketing campaign was impressive.', exampleVi: 'ROI của chiến dịch marketing của chúng tôi rất ấn tượng.', phonetic: '/ɑːr oʊ aɪ/' },
    { id: 'expv-3', word: 'equity stake', partOfSpeech: 'noun', definition: 'A percentage ownership in a company', definitionVi: 'Cổ phần', example: "We're offering a 20% equity stake.", exampleVi: 'Chúng tôi đề nghị cổ phần 20%.', phonetic: '/ˈekwɪti steɪk/' },
    { id: 'expv-4', word: 'royalty', partOfSpeech: 'noun', definition: 'A regular payment made to use a brand or intellectual property', definitionVi: 'Phí bản quyền', example: 'Franchisees pay a 6% monthly royalty.', exampleVi: 'Người nhượng quyền trả phí bản quyền hàng tháng 6%.', phonetic: '/ˈrɔɪəlti/' },
    { id: 'expv-5', word: 'due diligence', partOfSpeech: 'noun', definition: 'Thorough research before making a business decision', definitionVi: 'Thẩm định (nghiên cứu kỹ trước khi đầu tư)', example: 'We need to complete due diligence before signing.', exampleVi: 'Chúng ta cần hoàn thành thẩm định trước khi ký.', phonetic: '/djuː ˈdɪlɪdʒəns/' },
    { id: 'expv-6', word: 'lease', partOfSpeech: 'noun/verb', definition: 'A contract to rent property for a period of time', definitionVi: 'Hợp đồng thuê', example: 'We signed a two-year lease for the new location.', exampleVi: 'Chúng tôi ký hợp đồng thuê hai năm cho cơ sở mới.', phonetic: '/liːs/' },
  ],
  readingPassages: [
    {
      id: 'exp-read-1',
      title: 'Investor Pitch Deck — Executive Summary',
      titleVi: 'Tóm tắt thuyết trình cho nhà đầu tư',
      content: `BOBA HEAVEN — INVESTOR PITCH DECK
Executive Summary

OPPORTUNITY
The Vietnamese bubble tea market is growing at approximately 15% per year. Boba Heaven is positioned to become the leading premium bubble tea brand in Ho Chi Minh City, with a proven business model ready to scale.

THE BUSINESS
Boba Heaven opened in 2021 in District 1. In three years, we have:
- Grown monthly revenue from $0 to $28,500
- Maintained a 40%+ profit margin throughout year 2 and year 3
- Built a loyal customer base of over 3,000 repeat customers
- Earned a 4.8-star average rating across 600+ Google reviews
- Never required external funding — all growth has been organic

THE ASK
We are seeking $150,000 in equity investment to open two new locations simultaneously:
- Location A: District 7 (targeting young professionals, near co-working spaces)
- Location B: University District (targeting students and young families)

USE OF FUNDS
- Fit-out and equipment (2 locations): $90,000
- Working capital (6 months): $35,000
- Marketing launch budget: $15,000
- Legal and franchise setup: $10,000

PROJECTED RETURNS
- Year 1: Combined new-location revenue of $432,000
- Year 2: Total network revenue of $820,000 (including original location)
- Year 3: Buyback option at 4× EBITDA

WHAT WE OFFER
- 20% equity stake in the expanded Boba Heaven group
- Quarterly financial reporting
- Buyback option after year 3 at pre-agreed multiple
- Active input into strategic decisions via advisory role`,
      questions: [
        {
          question: 'How much equity is Boba Heaven offering to the investor?',
          options: ['10%', '25%', '20%', '30%'],
          correctIndex: 2,
          explanation: 'The pitch deck offers a 20% equity stake in the expanded Boba Heaven group.',
        },
        {
          question: 'Where are the two new locations planned?',
          options: [
            'District 1 and District 3',
            'District 7 and the University District',
            'Da Nang and Hanoi',
            'District 2 and District 7',
          ],
          correctIndex: 1,
          explanation: 'The document specifies Location A in District 7 and Location B in the University District.',
        },
        {
          question: 'What is the largest single use of the $150,000 investment?',
          options: ['Marketing launch budget ($15,000)', 'Working capital ($35,000)', 'Fit-out and equipment for 2 locations ($90,000)', 'Legal and franchise setup ($10,000)'],
          correctIndex: 2,
          explanation: 'Fit-out and equipment for both locations at $90,000 is the largest allocation.',
        },
        {
          question: 'After how many years does the investor have a buyback option?',
          options: ['1 year', '2 years', '5 years', '3 years'],
          correctIndex: 3,
          explanation: 'The pitch deck states the investor has a buyback option after year 3 at a pre-agreed EBITDA multiple.',
        },
      ],
    },
    {
      id: 'exp-read-2',
      title: 'Boba Heaven Franchise Information Pack',
      titleVi: 'Tài liệu thông tin nhượng quyền Boba Heaven',
      content: `BOBA HEAVEN FRANCHISE PROGRAM
Information Pack — 2024 Edition

WELCOME
Thank you for your interest in the Boba Heaven franchise. This document provides an overview of our franchise model, fees, support structure, and requirements for prospective partners.

WHO WE ARE
Boba Heaven is a premium bubble tea brand established in Ho Chi Minh City in 2021. We are known for using high-quality, locally sourced ingredients, a consistent customer experience, and a modern café aesthetic. Our current flagship store serves over 400 customers per day.

WHAT YOU GET
As a Boba Heaven franchisee, you receive:
• The right to operate under the Boba Heaven brand for 5 years (renewable)
• Full recipe library — over 35 signature drinks
• Staff training program (on-site at our flagship for 2 weeks)
• Interior design guidelines and approved fit-out suppliers
• Marketing templates, social media assets, and promotional materials
• Quarterly operational review visits from our support team
• Access to our preferred supplier network at negotiated prices

FEES & INVESTMENT
Initial Franchise Fee: $15,000 (one-time, paid upon signing)
Estimated Setup Costs: $30,000 – $50,000 (fit-out, equipment, signage)
Monthly Royalty: 6% of gross revenue
Marketing Contribution: 1% of gross revenue (pooled national marketing fund)

REQUIREMENTS
• Minimum 1 year of food & beverage management experience
• Suitable commercial premises (minimum 40 sqm, approved by Boba Heaven)
• Proof of liquid capital of at least $60,000
• Completion of 2-week training program at flagship store

HOW TO APPLY
Interested partners should submit a completed Expression of Interest form, along with a brief personal and financial background summary. Shortlisted applicants will be invited to visit the flagship store and attend an in-person briefing.`,
      questions: [
        {
          question: 'How long does the initial franchise license last?',
          options: ['2 years', '3 years', '5 years', '10 years'],
          correctIndex: 2,
          explanation: 'The pack states franchisees receive the right to operate under the brand for 5 years, renewable.',
        },
        {
          question: 'What is the monthly royalty fee for franchisees?',
          options: ['1% of gross revenue', '6% of gross revenue', '$15,000 per month', '$1,000 per month'],
          correctIndex: 1,
          explanation: 'The fee structure lists a monthly royalty of 6% of gross revenue.',
        },
        {
          question: 'What is the minimum space requirement for a franchise location?',
          options: ['20 sqm', '60 sqm', '100 sqm', '40 sqm'],
          correctIndex: 3,
          explanation: 'The requirements section states the premises must be a minimum of 40 sqm and approved by Boba Heaven.',
        },
        {
          question: 'How long is the training program at the flagship store?',
          options: ['1 week', '2 weeks', '1 month', '3 days'],
          correctIndex: 1,
          explanation: 'The information pack states the staff training program runs for 2 weeks on-site at the flagship store.',
        },
      ],
    },
  ],
  writingPrompts: [
    {
      id: 'expw-1',
      title: 'Write an Email to an Interested Investor',
      titleVi: 'Viết email cho nhà đầu tư quan tâm',
      instructions: 'After your pitch meeting, an investor asked you to send over your business plan and key financials. Write a professional follow-up email thanking them for their time, attaching the documents, and summarizing your 3 strongest selling points in 1–2 sentences each.',
      instructionsVi: 'Sau buổi thuyết trình, nhà đầu tư yêu cầu bạn gửi kế hoạch kinh doanh và số liệu tài chính chính. Hãy viết email chuyên nghiệp cảm ơn họ vì đã dành thời gian, đính kèm tài liệu và tóm tắt 3 điểm mạnh nhất của bạn trong 1–2 câu mỗi điểm.',
      sampleAnswer: `Subject: Boba Heaven — Business Plan & Financials (as discussed)

Dear Mr. Long,

Thank you for taking the time to meet with me today. It was a pleasure sharing the Boba Heaven story, and I left our meeting feeling genuinely excited about the possibility of working together.

As promised, I have attached:
- Full Business Plan (2024–2026)
- Audited Financial Statements (Year 1–3)
- Market Analysis for the proposed new locations

To summarize our three strongest points:

1. Proven profitability: We have maintained a 40%+ profit margin for two consecutive years with zero external funding — every cent of growth has been generated by the business itself.

2. Replicable model: Our standardized recipes, training program, and supplier network mean we can open a new location in 8 weeks with consistent quality.

3. High-demand locations: Both new sites (District 7 and University District) have been validated through 3 months of foot traffic data showing 2,000+ daily pedestrians.

Please don't hesitate to reach out if you have any questions after reviewing the documents. I look forward to hearing your thoughts.

Kind regards,
Nguyen Van Minh
Owner, Boba Heaven`,
      keyPhrases: ['as promised', 'attached', 'proven profitability', 'replicable model', 'foot traffic', 'validated', 'don\'t hesitate to reach out'],
    },
    {
      id: 'expw-2',
      title: 'Write a Franchise Inquiry Response',
      titleVi: 'Viết thư phản hồi yêu cầu nhượng quyền',
      instructions: 'Someone sent you a message: "Hi! I saw your bubble tea shop and I\'m very interested in opening a franchise in Hanoi. How does it work and how much does it cost?" Write a professional, friendly reply with a brief overview of your franchise program and the next steps.',
      instructionsVi: 'Ai đó nhắn: "Xin chào! Tôi thấy quán trà sữa của bạn và rất muốn mở nhượng quyền ở Hà Nội. Chương trình hoạt động thế nào và chi phí bao nhiêu?" Hãy viết phản hồi chuyên nghiệp, thân thiện với tổng quan ngắn gọn và bước tiếp theo.',
      sampleAnswer: `Subject: Re: Franchise Inquiry — Boba Heaven

Hi Minh Duc,

Thank you so much for your interest in Boba Heaven — we love hearing from people who share our passion for great bubble tea! 🧋

We are currently developing our franchise program, and Hanoi is definitely one of our priority markets, so your timing is great.

Here's a quick overview of how it works:

Initial Investment
- Franchise fee: $15,000 (covers the 5-year brand license, recipes, and training)
- Setup costs: $30,000–$50,000 depending on the size of your location

What You Get
- Full recipe library (35+ drinks)
- 2-week hands-on training at our flagship store in Ho Chi Minh City
- Branded materials, marketing templates, and supplier introductions
- Quarterly support visits from our operations team

Ongoing Fees
- 6% monthly royalty on gross revenue
- 1% marketing contribution

The Next Step
I'd love to set up a call to learn more about your background and answer any questions you have. Would you be available for a 30-minute video call sometime next week?

Looking forward to connecting!

Warm regards,
Nguyen Van Minh
Owner, Boba Heaven`,
      keyPhrases: ['franchise program', 'priority market', 'franchise fee', 'brand license', 'hands-on training', 'royalty', 'marketing contribution', 'set up a call'],
    },
  ],
};
