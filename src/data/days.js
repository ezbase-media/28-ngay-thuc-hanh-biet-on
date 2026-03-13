export const daysData = [
  { 
    id: 1, 
    day: 1,
    title: 'NGÀY 1: ĐẾM NHỮNG MẦM XANH', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Chào bạn, hôm nay chúng ta sẽ bắt đầu hành trình bằng việc tìm kiếm những niềm vui nhỏ bé đang hiện hữu xung quanh mình. Việc chủ động nhận diện những điều tốt đẹp sẽ giúp tâm trí bạn chuyển hướng từ sự lo âu sang trạng thái bình an.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Dành 10 phút tĩnh lặng trong ngày (tốt nhất là buổi sáng sớm).</li>\n<li><strong>Bước 2:</strong> Viết ra danh sách 10 điều khiến bạn cảm thấy may mắn hoặc biết ơn (có thể là sức khỏe, một bữa ăn ngon, hay một người thân).</li>\n<li><strong>Bước 3:</strong> Quan trọng nhất: Bên cạnh mỗi điều, hãy viết rõ LÝ DO vì sao bạn lại biết ơn điều đó.</li>\n<li><strong>Bước 4:</strong> Đọc nhẩm lại danh sách vừa viết. Sau mỗi điều, hãy dừng lại một nhịp và nói từ "Cảm ơn" ba lần để cảm nhận sự trân trọng.</li>\n</ul>',
    specialTask: null
  },
  { 
    id: 2, 
    day: 2,
    title: 'NGÀY 2: VẬT NHỎ NEO GIỮ BÌNH YÊN', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Hôm nay, chúng ta sẽ học cách "lưu trữ" lại những năng lượng tích cực của một ngày dài vào một vật thể nhỏ bé, để bạn luôn có thể mang theo sự bình yên bên mình.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Hãy tìm một vật nhỏ gọn mà bạn có thể nắm trọn trong lòng bàn tay (một viên sỏi nhẵn, một vỏ sò, hay một mặt dây chuyền). Hãy gọi nó là "vật neo giữ" của bạn.</li>\n<li><strong>Bước 2:</strong> Đặt vật đó ở ngay cạnh giường ngủ.</li>\n<li><strong>Bước 3:</strong> Tối nay, ngay trước khi nhắm mắt ngủ, hãy cầm vật đó trong tay. Nhớ lại tất cả những chuyện đã xảy ra từ sáng đến giờ.</li>\n<li><strong>Bước 4:</strong> Chọn ra MỘT điều tốt đẹp nhất đã xảy ra trong ngày hôm nay. Giữ chặt vật nhỏ đó, nói "Cảm ơn" với điều tốt đẹp ấy, rồi chìm vào giấc ngủ.</li>\n</ul>\n<br/><p><em>Lưu ý: Đừng quên hoàn thành danh sách 10 điều biết ơn mới của ngày hôm nay nhé!</em></p>',
    specialTask: {
      title: 'Khoảnh Khắc Lấp Lánh Nhất',
      fields: [
        { id: 'bestThing', type: 'textarea', label: 'Điều tốt đẹp nhất hôm nay là gì?', placeholder: 'Điều khiến tôi mỉm cười hôm nay là...' }
      ]
    }
  },
  { 
    id: 3, 
    day: 3,
    title: 'NGÀY 3: DẤU ẤN CỦA NGƯỜI THƯƠNG', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Mối quan hệ là tấm gương phản chiếu chính chúng ta. Hôm nay, hãy dành sự trân trọng và một khoảng không gian tĩnh lặng cho những người đã luôn đồng hành, nâng đỡ và yêu thương bạn.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Chọn ra 3 người quan trọng nhất đối với bạn hiện tại (có thể là ba mẹ, con cái, vợ/chồng, hoặc một người bạn tri kỷ).</li>\n<li><strong>Bước 2:</strong> Tìm 3 bức ảnh của họ (ảnh chụp chung hoặc chụp riêng đều được).</li>\n<li><strong>Bước 3:</strong> Nhìn vào từng bức ảnh, nghĩ về những kỷ niệm đẹp nhất. Viết ra 5 điều bạn cảm thấy biết ơn nhất về con người này.</li>\n<li><strong>Bước 4:</strong> Bắt đầu mỗi dòng bằng câu: "Cảm ơn [Tên người đó] vì...".</li>\n</ul>\n<br/><p><em>Lưu ý: Sau khi hoàn thành phần này, đừng quên viết tiếp 10 điều biết ơn chung của ngày hôm nay nhé!</em></p>',
    specialTask: {
      title: 'Dấu Ấn Người Thương',
      fields: [
        { id: 'rel1Photo', type: 'photo', label: '📷 Ảnh người thứ 1' },
        { id: 'rel1Reasons', type: 'textarea', label: '✍️ 5 điều biết ơn về người thứ 1:', placeholder: 'Cảm ơn [Tên] vì...' },
        { id: 'rel2Photo', type: 'photo', label: '📷 Ảnh người thứ 2' },
        { id: 'rel2Reasons', type: 'textarea', label: '✍️ 5 điều biết ơn về người thứ 2:', placeholder: 'Cảm ơn [Tên] vì...' },
        { id: 'rel3Photo', type: 'photo', label: '📷 Ảnh người thứ 3' },
        { id: 'rel3Reasons', type: 'textarea', label: '✍️ 5 điều biết ơn về người thứ 3:', placeholder: 'Cảm ơn [Tên] vì...' }
      ]
    }
  },
  { 
    id: 4, 
    day: 4, 
    title: 'NGÀY 4: MÓN QUÀ CỦA SỨC KHỎE', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Sức khỏe là tài sản quý giá nhất mà đôi khi vì guồng quay bận rộn, chúng ta thường hay bỏ quên. Trân trọng cơ thể chính là cách tốt nhất để duy trì một nguồn năng lượng sống dồi dào.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Dành vài phút nghĩ về đôi chân đã đưa bạn đi khắp nơi, đôi mắt giúp bạn nhìn ngắm thế giới, và trái tim đang đập bền bỉ để duy trì sự sống.</li>\n<li><strong>Bước 2:</strong> Chuẩn bị một tờ giấy nhỏ (hoặc một tấm thẻ/sticker).</li>\n<li><strong>Bước 3:</strong> Viết lên đó dòng chữ: "Biết ơn món quà sức khỏe đã giúp tôi tận hưởng cuộc sống này".</li>\n<li><strong>Bước 4:</strong> Đặt tấm thẻ ở nơi bạn dễ nhìn thấy nhất hôm nay (bàn làm việc, gương soi, góc sổ tay). Mỗi lần nhìn thấy, hãy đọc nhẩm dòng chữ đó với sự trân trọng sâu sắc.</li>\n</ul>\n<br/><p><em>Lưu ý: Cuối ngày, hãy duy trì thói quen viết 10 điều bạn thấy biết ơn.</em></p>', 
    specialTask: {
      title: 'Lắng Nghe Cơ Thể',
      fields: [
        { id: 'healthNote', type: 'textarea', label: 'Cảm nhận về cơ thể/sức khỏe hôm nay:', placeholder: 'Tôi biết ơn cơ thể vì...' }
      ]
    }
  },
  { 
    id: 5, 
    day: 5, 
    title: 'NGÀY 5: DÒNG CHẢY CỦA SỰ ĐỦ ĐẦY', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Sự trù phú không chỉ là số dư trong tài khoản, mà là tất cả những giá trị vật chất bạn từng được nhận. Khi ta biết ơn những gì mình đã có, ta sẽ mở rộng "dung lượng" để đón nhận thêm những điều tốt đẹp.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Ngồi xuống tĩnh lặng. Nhớ lại những năm tháng tuổi thơ, những bữa ăn, quần áo, hay những cuốn sách bạn đã được nhận từ gia đình mà không phải lo lắng về tiền bạc.</li>\n<li><strong>Bước 2:</strong> Lấy ra một tờ tiền (mệnh giá nào cũng được).</li>\n<li><strong>Bước 3:</strong> Dán lên tờ tiền đó một mẩu giấy nhỏ với dòng chữ: "Cảm ơn tất cả những sự đủ đầy mà tôi đã nhận được trong suốt cuộc đời".</li>\n<li><strong>Bước 4:</strong> Mang theo tờ tiền này trong ví của bạn ngày hôm nay. Ít nhất một lần vào buổi sáng và chiều, hãy lấy nó ra, đọc dòng chữ và cảm nhận sự dư dả thực sự trong tâm trí.</li>\n</ul>\n<br/><p><em>Lưu ý: Ghi lại danh sách 10 điều biết ơn của ngày hôm nay.</em></p>', 
    specialTask: {
      title: 'Dòng Chảy Đủ Đầy',
      fields: [
        { id: 'moneyPhoto', type: 'photo', label: '📷 Tải ảnh Tờ Tiền Trân Quý của bạn lên đây' }
      ]
    }
  },
  { 
    id: 6, 
    day: 6, 
    title: 'NGÀY 6: NĂNG LƯỢNG NƠI LÀM VIỆC', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Công việc không chỉ là nơi tạo ra thu nhập, mà còn là không gian để bạn trao đi giá trị và rèn luyện bản thân. Khi làm việc với sự trân trọng, bạn sẽ thấy những cơ hội và nguồn cảm hứng tự động tìm đến.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Hôm nay, hãy tưởng tượng có một "người quản lý vô hình" luôn đi theo để ghi chép lại mọi suy nghĩ tích cực của bạn về công việc.</li>\n<li><strong>Bước 2:</strong> Bất cứ khi nào bạn tìm thấy một điều đáng quý (một người đồng nghiệp hỗ trợ nhiệt tình, chiếc máy tính đang chạy tốt, hay một góc bàn ngập nắng), hãy ghi nhận nó ngay.</li>\n<li><strong>Bước 3:</strong> Cố gắng tìm ra càng nhiều điều để "người quản lý" ghi chép càng tốt. Viết ra câu: "Tôi vô cùng biết ơn [điều gì/ai đó] vì..."</li>\n</ul>\n<br/><p><em>Lưu ý: Đừng quên hoàn thành danh sách 10 điều biết ơn của ngày hôm nay vào cuối ngày.</em></p>', 
    specialTask: {
      title: 'Niềm Vui Nơi Làm Việc',
      fields: [
        { id: 'workNote', type: 'textarea', label: 'Những điều tích cực trong giờ làm việc hôm nay:', placeholder: 'Tôi vô cùng biết ơn...' }
      ]
    }
  },
  { 
    id: 7, 
    day: 7, 
    title: 'NGÀY 7: CHUYỂN HÓA NHỮNG GÓC KHUẤT', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Bất kỳ tình huống khó khăn nào cũng chứa đựng một bài học hoặc một cơ hội ẩn giấu. Hôm nay, chúng ta sẽ dùng sự tĩnh tại để "dọn dẹp" một góc tối đang khiến bạn vướng bận trong lòng.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Chọn ra MỘT tình huống hoặc một vấn đề đang khiến bạn cảm thấy tiêu cực, bế tắc nhất hiện tại.</li>\n<li><strong>Bước 2:</strong> Ngồi xuống, hít thở sâu, và cố gắng tìm ra 10 điều bạn có thể cảm thấy biết ơn từ chính tình huống khó khăn đó (ví dụ: nó giúp bạn mạnh mẽ hơn, nhận ra ai là người bên cạnh mình...).</li>\n<li><strong>Bước 3:</strong> Sau khi viết xong 10 điều, hãy chốt lại bằng câu: "Cảm ơn, cảm ơn, cảm ơn vì giải pháp hoàn hảo đang đến".</li>\n</ul>\n<br/><p><em>Lưu ý: Chỉ cần làm bài tập này là đủ cho ngày hôm nay (thay thế cho 10 điều biết ơn cơ bản).</em></p>', 
    specialTask: {
      title: 'Chuyển Hóa Cơn Mưa',
      fields: [
        { id: 'negativeIssue', type: 'textarea', label: 'Tình huống/vấn đề cần chuyển hóa:', placeholder: 'Góc khuất tôi đang đối diện...' },
        { id: 'positiveReasons', type: 'list', count: 10, label: '10 điều tôi có thể cảm thấy biết ơn từ hiện thực này:' }
      ]
    }
  },
  { 
    id: 8, 
    day: 8, 
    title: 'NGÀY 8: NGUỒN NUÔI DƯỠNG TỪ TRÁI ĐẤT', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Thức ăn và nước uống là món quà duy trì sự sống mỗi ngày. Chậm lại một chút trước mỗi bữa ăn để gửi lời tri ân đến vạn vật và những người đã cất công tạo ra chúng sẽ giúp dưỡng chất hấp thụ vào cơ thể tốt hơn.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Trước khi ăn hoặc uống bất cứ thứ gì trong ngày hôm nay, hãy dừng lại khoảng 3 giây.</li>\n<li><strong>Bước 2:</strong> Nhìn vào món ăn hoặc ly nước trước mặt, và nói từ "Cảm ơn" bằng tất cả sự chân thành.</li>\n<li><strong>Bước 3:</strong> Nếu muốn, bạn có thể rắc một chút "gia vị niệm lành" (tưởng tượng) lên món ăn để thanh lọc năng lượng của nó.</li>\n</ul>\n<br/><p><em>Lưu ý: Duy trì thói quen viết 10 điều biết ơn chung vào mỗi buổi sáng hoặc tối.</em></p>', 
    specialTask: null 
  },
  { 
    id: 9, 
    day: 9, 
    title: 'NGÀY 9: DÒNG CHẢY TÀI CHÍNH HANH THÔNG', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Thay vì lo lắng mỗi khi nhìn thấy các khoản chi tiêu hay hóa đơn, hãy biến chúng thành lời nhắc nhở về những tiện ích bạn đã được tận hưởng. Đổi góc nhìn, bạn sẽ khơi thông được dòng chảy tài chính của mình.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Lấy ra các hóa đơn bạn đang cần thanh toán (tiền điện, nước, internet...). Viết lên đó dòng chữ: "Cảm ơn vì số tiền". Cảm nhận sự trân trọng vì mình đã được sử dụng các dịch vụ này trước khi phải trả tiền.</li>\n<li><strong>Bước 2:</strong> Lấy ra 10 tờ hóa đơn bạn ĐÃ thanh toán trong quá khứ. Viết lên mặt trước chữ: "Cảm ơn - Đã thanh toán".</li>\n<li><strong>Bước 3:</strong> Cảm nhận niềm vui vì bạn đã có đủ nguồn lực tài chính để chi trả cho những hóa đơn đó.</li>\n</ul>\n<br/><p><em>Lưu ý: Ghi lại danh sách 10 điều biết ơn của ngày hôm nay.</em></p>', 
    specialTask: {
      title: 'Nhìn Nhận Chi Tiêu',
      fields: [
        { id: 'spendingNote', type: 'textarea', label: 'Cảm xúc khi nhìn nhận lại các khoản chi tiêu hôm nay:', placeholder: 'Tôi trân trọng vì số tiền đã giúp tôi...' }
      ]
    }
  },
  { 
    id: 10, 
    day: 10, 
    title: 'NGÀY 10: LAN TỎA NIỆM LÀNH', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Mỗi người bạn gặp gỡ và tiếp xúc hôm nay, dù là bác bảo vệ, chị lao công hay người phục vụ nhà hàng, đều đang âm thầm đóng góp sự tiện nghi cho cuộc sống của bạn. Hãy gửi tặng họ sự tri ân.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Hôm nay, hãy đặt mục tiêu gửi lời cảm ơn đến ít nhất 10 người đã cung cấp dịch vụ hoặc giúp đỡ bạn.</li>\n<li><strong>Bước 2:</strong> Bạn có thể nói trực tiếp với họ, kèm theo ánh mắt chân thành và nụ cười.</li>\n<li><strong>Bước 3:</strong> Nếu không thể nói trực tiếp, hãy thầm nói lời cảm ơn họ trong tâm trí ngay lúc đó. Tưởng tượng bạn đang rắc một lớp "bụi lấp lánh" mang năng lượng bình an lên người họ.</li>\n</ul>\n<br/><p><em>Lưu ý: Cuối ngày, hãy viết 10 điều biết ơn chung của bạn.</em></p>', 
    specialTask: {
      title: 'Lan Tỏa Niệm Lành',
      fields: [
        { id: 'thankedPeople', type: 'list', count: 10, label: 'Tên/vai trò của 10 người tôi đã cảm ơn trong ngày:' }
      ]
    }
  },
  { 
    id: 11, 
    day: 11, 
    title: 'NGÀY 11: BÌNH MINH TỈNH THỨC', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Cách bạn bắt đầu buổi sáng sẽ định hình năng lượng cho cả một ngày dài. Hãy lấp đầy tâm trí bằng sự trân trọng ngay từ khoảnh khắc mở mắt thức dậy để đẩy lùi mọi lo âu.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Ngay khi vừa thức giấc, trước khi chạm vào điện thoại hay làm bất cứ việc gì, hãy thầm nói từ "Cảm ơn".</li>\n<li><strong>Bước 2:</strong> Cảm ơn giấc ngủ ngon, cảm ơn chiếc giường êm ái, và cảm ơn vì bạn có thêm một ngày nữa để sống.</li>\n<li><strong>Bước 3:</strong> Khi bạn bước chân xuống giường, đi vào nhà tắm, đánh răng, rửa mặt, hay thay quần áo... hãy liên tục gửi lời biết ơn đến mọi đồ vật bạn chạm vào (nước sạch, chiếc khăn ấm, v.v.).</li>\n</ul>\n<br/><p><em>Lưu ý: Sau khi đã hoàn tất việc chuẩn bị buổi sáng, hãy ngồi xuống và viết 10 điều bạn thấy trân quý nhất hôm nay.</em></p>', 
    specialTask: null 
  },
  { 
    id: 12, 
    day: 12, 
    title: 'NGÀY 12: NHỮNG NGƯỜI DẪN ĐƯỜNG TẬN TỤY', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Trong hành trình trưởng thành, luôn có những người xuất hiện đúng lúc để gỡ rối, truyền cảm hứng hoặc thay đổi hoàn toàn quỹ đạo cuộc đời bạn. Hôm nay là ngày không gian tĩnh lặng này dành để tri ân họ.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Tìm một không gian yên tĩnh. Nhớ về 3 người đã tạo ra bước ngoặt lớn, mang lại sự thay đổi tích cực cho bạn (thầy cô, một người sếp cũ, người bạn tri kỷ, hay thậm chí là một người lạ mặt).</li>\n<li><strong>Bước 2:</strong> Với mỗi người, hãy viết ra lý do tại sao họ lại quan trọng và sự xuất hiện của họ đã giúp bạn như thế nào.</li>\n<li><strong>Bước 3:</strong> Hãy viết (hoặc trò chuyện trong tâm trí) như thể họ đang ngồi ngay trước mặt bạn. Nói với họ rằng bạn trân trọng sự hiện diện của họ ra sao.</li>\n</ul>\n<br/><p><em>Lưu ý: Duy trì thói quen viết 10 điều biết ơn cơ bản.</em></p>', 
    specialTask: {
      title: 'Người Dẫn Đường',
      fields: [
        { id: 'guide1', type: 'textarea', label: 'Người dẫn đường thứ 1:', placeholder: 'Tôi trân trọng...' },
        { id: 'guide2', type: 'textarea', label: 'Người dẫn đường thứ 2:', placeholder: 'Tôi trân trọng...' },
        { id: 'guide3', type: 'textarea', label: 'Người dẫn đường thứ 3:', placeholder: 'Tôi trân trọng...' }
      ]
    }
  },
  { 
    id: 13, 
    day: 13, 
    title: 'NGÀY 13: HẠT GIỐNG CỦA NHỮNG ƯỚC MƠ', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Sự trân trọng không chỉ dành cho quá khứ hay hiện tại, mà còn là thỏi nam châm thu hút những điều bạn mong muốn trong tương lai. Hãy biến ước mơ thành hiện thực bằng cách "sống" trong cảm giác biết ơn ngay từ bây giờ.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Nghĩ về những khao khát lớn nhất của bạn lúc này (sức khỏe, công việc, tình cảm...). Hãy chọn ra 10 ước mơ bạn muốn thực hiện nhất.</li>\n<li><strong>Bước 2:</strong> Viết 10 ước mơ đó ra, nhưng viết dưới dạng đã hoàn thành, bắt đầu bằng câu: "Cảm ơn, cảm ơn, cảm ơn vì tôi đã đạt được..." (Ví dụ: Cảm ơn vì tôi đã có một chuyến du lịch tuyệt vời cùng gia đình).</li>\n<li><strong>Bước 3:</strong> Dành 1 phút nhắm mắt lại cho mỗi ước mơ, hình dung bạn đang sống trong khoảnh khắc đó. Hãy để niềm vui lấp đầy lồng ngực bạn.</li>\n</ul>\n<br/><p><em>Lưu ý: Viết 10 điều biết ơn của ngày hôm nay như thường lệ.</em></p>', 
    specialTask: {
      title: 'Hạt Giống Ước Mơ',
      fields: [
        { id: 'topDreams', type: 'list', count: 10, label: '10 ước mơ tôi muốn thực hiện nhất:' }
      ]
    }
  },
  { 
    id: 14, 
    day: 14, 
    title: 'NGÀY 14: KIẾN TẠO MỘT NGÀY TRỌN VẸN', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Bạn hoàn toàn có thể chủ động thiết kế một ngày trôi chảy bằng cách gửi năng lượng tích cực đến mọi kế hoạch trước khi chúng thực sự diễn ra.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Vào buổi sáng, hãy xem lướt qua lịch trình hoặc những việc bạn định làm trong ngày hôm nay (từ việc dọn dẹp, họp hành, đến đi siêu thị hay nấu ăn).</li>\n<li><strong>Bước 2:</strong> Với mỗi công việc, hãy nhẩm nói "Cảm ơn vì [tên công việc] đã diễn ra vô cùng tốt đẹp".</li>\n<li><strong>Bước 3:</strong> Hình dung bạn đang mỉm cười hài lòng vào cuối ngày vì mọi thứ đều suôn sẻ đúng như kỳ vọng.</li>\n</ul>\n<br/><p><em>Lưu ý: Kết thúc ngày bằng việc đếm lại 10 điều bạn thấy trân quý.</em></p>', 
    specialTask: null 
  },
  { 
    id: 15, 
    day: 15, 
    title: 'NGÀY 15: CHỮA LÀNH MỘT KẾT NỐI', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Sự rạn nứt hay mệt mỏi trong các mối quan hệ thường xuất phát từ việc chúng ta tập trung quá nhiều vào khuyết điểm của đối phương. Hôm nay, chúng ta sẽ dùng sự bao dung để xoa dịu một mối quan hệ đang gặp khó khăn.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Chọn MỘT mối quan hệ mà bạn đang cảm thấy bế tắc, xa cách hoặc muốn cải thiện (người thân, đồng nghiệp, bạn cũ...).</li>\n<li><strong>Bước 2:</strong> Tạm gác lại những tổn thương hay phán xét hiện tại. Hãy ngồi xuống và cố gắng tìm ra 10 điều tốt đẹp nhất về người đó, hoặc về khoảng thời gian hai người từng vui vẻ bên nhau.</li>\n<li><strong>Bước 3:</strong> Viết theo cú pháp: "Tôi biết ơn [Tên người đó] vì [Điều tốt đẹp]". Sự tập trung vào điểm sáng sẽ làm tan chảy những khúc mắc trong lòng bạn.</li>\n</ul>\n<br/><p><em>Lưu ý: Đừng quên danh sách 10 mầm xanh (10 điều biết ơn cơ bản) của ngày hôm nay.</em></p>', 
    specialTask: {
      title: 'Chữa Lành Kết Nối',
      fields: [
        { id: 'relationshipIssue', type: 'textarea', label: 'Tên người cần chữa lành:', placeholder: 'Tên người đó...' },
        { id: 'relationshipReasons', type: 'list', count: 10, label: '10 điều tốt đẹp về họ:' }
      ]
    }
  },
  { 
    id: 16, 
    day: 16, 
    title: 'NGÀY 16: LỜI HỨA VỚI CƠ THỂ', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Cơ thể bạn là một cỗ máy kỳ diệu, có khả năng tự phục hồi phi thường nếu được cung cấp đủ tình yêu thương. Hôm nay, chúng ta sẽ "trò chuyện" với sức khỏe của mình ở cả ba thì: Quá khứ, Hiện tại và Tương lai.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Nhớ lại những năm tháng tuổi thơ và thanh xuân, khi cơ thể bạn tràn đầy nhựa sống. Chọn ra 3 khoảnh khắc bạn cảm thấy khỏe mạnh, dẻo dai nhất và viết lời cảm ơn.</li>\n<li><strong>Bước 2:</strong> Nhìn nhận lại cơ thể hiện tại. Chọn ra 5 bộ phận đang hoạt động tốt (đôi mắt sáng, nhịp tim đều, đôi chân khỏe...) và gửi lời tri ân sâu sắc đến chúng.</li>\n<li><strong>Bước 3:</strong> Nghĩ về một bộ phận hoặc tình trạng sức khỏe mà bạn ĐANG MUỐN cải thiện. Thay vì lo lắng, hãy tưởng tượng nó đã hoàn toàn khỏe mạnh. Viết 1 câu cảm ơn vì trạng thái lý tưởng đó (Ví dụ: "Cảm ơn vì dạ dày của tôi đang tiêu hóa thức ăn tuyệt vời").</li>\n</ul>\n<br/><p><em>Lưu ý: Cuối ngày, hãy duy trì thói quen đếm 10 mầm xanh (điều biết ơn cơ bản).</em></p>', 
    specialTask: {
      title: 'Lời Hứa Với Cơ Thể',
      fields: [
        { id: 'pastHealth', type: 'list', count: 3, label: '3 khoảnh khắc khỏe mạnh, dẻo dai nhất trong quá khứ:' },
        { id: 'presentHealth', type: 'list', count: 5, label: '5 bộ phận đang hoạt động tốt hiện tại:' },
        { id: 'futureHealth', type: 'textarea', label: 'Tương lai: Lời cảm ơn cho trạng thái sức khỏe lý tưởng:', placeholder: 'Cảm ơn vì...' }
      ]
    }
  },
  { 
    id: 17, 
    day: 17, 
    title: 'NGÀY 17: CHIẾC VÍ ĐỦ ĐẦY', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Sự thiếu thốn tài chính thường bắt nguồn từ cảm giác sợ hãi và ghen tị. Hôm nay, chúng ta sẽ chuyển hóa tần số đó thành sự biết ơn thuần khiết, kể cả với những tờ tiền nhỏ nhất hay những món đồ người khác đang sở hữu.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Lấy một tờ tiền bất kỳ và đặt nó ở nơi bạn dễ nhìn thấy nhất (trong ví, trên bàn, dán lên gương...).</li>\n<li><strong>Bước 2:</strong> Ít nhất hai lần trong ngày, hãy cầm tờ tiền đó lên, nhìn vào dòng chữ "Cảm ơn tất cả những sự đủ đầy mà tôi đã nhận được trong suốt cuộc đời" (nếu bạn còn giữ tờ tiền từ Ngày 5).</li>\n<li><strong>Bước 3:</strong> Quan trọng hơn: Bất cứ khi nào bạn có ý định mua một món đồ mới, hoặc nhìn thấy ai đó có thứ bạn thích (một chiếc xe đẹp, một ngôi nhà khang trang), thay vì ao ước, hãy thực sự vui mừng cho họ. Sự chúc phúc chính là cách bạn thu hút điều đó về mình.</li>\n</ul>\n<br/><p><em>Lưu ý: Đừng quên 10 điều trân quý của ngày hôm nay.</em></p>', 
    specialTask: null 
  },
  { 
    id: 18, 
    day: 18, 
    title: 'NGÀY 18: DANH SÁCH NHIỆM MÀU', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Đôi khi khối lượng công việc khổng lồ khiến bạn kiệt sức. Hãy thử "giao phó" những việc khó nhằn nhất cho vũ trụ, và bạn sẽ bất ngờ trước cách mọi thứ được sắp xếp gọn gàng.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Viết ra một "Danh sách việc cần làm" hôm nay. Đó có thể là những việc nhỏ nhặt chưa kịp làm, hoặc những rắc rối bạn chưa biết cách giải quyết.</li>\n<li><strong>Bước 2:</strong> Chọn ra 3 việc quan trọng nhất trong danh sách đó.</li>\n<li><strong>Bước 3:</strong> Lần lượt tưởng tượng rằng từng việc một đã được giải quyết xong xuôi một cách hoàn hảo. Dành 1 phút nhắm mắt, mỉm cười và nói từ "Cảm ơn" thật lớn cho mỗi việc đã hoàn thành.</li>\n</ul>\n<br/><p><em>Lưu ý: Ghi lại danh sách 10 điều biết ơn cơ bản vào cuối ngày.</em></p>', 
    specialTask: {
      title: 'Danh Sách Nhiệm Màu',
      fields: [
        { id: 'todoList', type: 'textarea', label: 'Danh sách việc cần làm / rắc rối cần giải quyết:', placeholder: 'Những dằm nhỏ trong lòng...' },
        { id: 'topThreeTodos', type: 'list', count: 3, label: '3 việc quan trọng nhất cần giao phó cho vũ trụ:' }
      ]
    }
  },
  { 
    id: 19, 
    day: 19, 
    title: 'NGÀY 19: DẤU CHÂN CỦA SỰ TỬ TẾ', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Mỗi bước chân bạn đi đều là một sự tương tác với Trái Đất. Việc bước đi trong chánh niệm không chỉ giúp bạn tĩnh tâm mà còn khơi dậy nguồn năng lượng bình an lan tỏa xung quanh.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Hôm nay, hãy dành ra vài phút để bước đi thật chậm rãi. Có thể là lúc bạn đi từ phòng này sang phòng khác, hoặc đi bộ trong công viên.</li>\n<li><strong>Bước 2:</strong> Với mỗi bước chân chạm đất, hãy nói thầm một từ "Cảm ơn".</li>\n<li><strong>Bước 3:</strong> Hãy đặt mục tiêu bước đủ 100 "bước chân nhiệm màu". (Khoảng 1 phút rưỡi đi bộ thong thả là bạn đã hoàn thành rồi).</li>\n<li><strong>Bước 4:</strong> Đừng đếm số bước một cách máy móc, hãy cảm nhận sự vững chãi của đôi chân và tình yêu thương bạn đang gieo xuống từng tấc đất.</li>\n</ul>\n<br/><p><em>Lưu ý: Viết 10 điều biết ơn của ngày hôm nay.</em></p>', 
    specialTask: null 
  },
  { 
    id: 20, 
    day: 20, 
    title: 'NGÀY 20: LỜI NHẮN TỪ VŨ TRỤ', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Cuộc sống luôn giao tiếp với chúng ta qua những tín hiệu nhỏ nhặt. Khi bạn mở lòng, bạn sẽ nhận ra vũ trụ đang liên tục gợi ý để bạn thực hành lòng biết ơn.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Hãy nâng cao sự quan sát trong ngày hôm nay. Coi mọi sự việc xảy ra quanh mình như những "lời nhắc nhở" ngầm.</li>\n<li><strong>Bước 2:</strong> Ví dụ: Nghe thấy tiếng xe cứu thương -&gt; Vũ trụ đang nhắc bạn "Hãy biết ơn vì mình và người thân đang khỏe mạnh". Thấy một người đang tập thể dục -&gt; "Hãy biết ơn cơ thể dẻo dai này". Mở ví ra -&gt; "Hãy biết ơn vì mình có tiền để chi tiêu".</li>\n<li><strong>Bước 3:</strong> Tìm ra ít nhất 7 "lời nhắn" như vậy trong ngày hôm nay. Mỗi lần nhận ra, hãy dừng lại một nhịp và nói lời cảm ơn.</li>\n</ul>\n<br/><p><em>Lưu ý: Buổi tối, hãy duy trì thói quen viết 10 điều bạn thấy trân quý.</em></p>', 
    specialTask: null 
  },
  { 
    id: 21, 
    day: 21, 
    title: 'NGÀY 21: KẾT QUẢ TUYỆT DIỆU', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Thói quen lo lắng trước mỗi sự kiện (một cuộc họp, một chuyến bay, hay một bài kiểm tra) thường thu hút những điều không mong muốn. Hôm nay, chúng ta sẽ "đặt hàng" trước vũ trụ một kết quả hoàn hảo.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Đầu ngày, hãy chọn ra 3 sự việc quan trọng mà bạn sắp thực hiện và mong muốn chúng diễn ra suôn sẻ nhất.</li>\n<li><strong>Bước 2:</strong> Với mỗi sự việc, hãy tưởng tượng nó đã kết thúc thành công mỹ mãn. Viết ra câu: "Cảm ơn vì [tên sự việc] đã mang lại kết quả tuyệt diệu!"</li>\n<li><strong>Bước 3:</strong> Bất cứ khi nào có một việc phát sinh bất ngờ trong ngày (ví dụ: bị kẹt xe, nhận một cuộc gọi lạ), trước khi phản ứng, hãy nhẩm nhanh: "Cảm ơn vì kết quả tuyệt diệu". Sự tĩnh tại này sẽ hóa giải mọi căng thẳng.</li>\n</ul>\n<br/><p><em>Lưu ý: Cuối ngày, hãy duy trì thói quen viết 10 điều biết ơn cơ bản.</em></p>', 
    specialTask: {
      title: 'Kết Quả Tuyệt Diệu',
      fields: [
        { id: 'excellentResults', type: 'list', count: 3, label: '3 sự việc tôi "đặt hàng" kết quả tuyệt diệu:' }
      ]
    }
  },
  { 
    id: 22, 
    day: 22, 
    title: 'NGÀY 22: NHỮNG ĐIỀU TỐT ĐẸP ĐANG TỚI', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Niềm tin là chiếc chìa khóa vạn năng. Khi bạn giữ vững niềm tin rằng những điều tốt đẹp đang trên đường đến với mình, bạn sẽ không còn bị xáo động bởi những khó khăn tạm thời.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Đọc lại danh sách 10 ước mơ bạn đã viết ở Ngày 13.</li>\n<li><strong>Bước 2:</strong> Dành 1 phút nhắm mắt lại cho mỗi ước mơ. Hình dung bạn đang vỡ òa hạnh phúc khi cầm trên tay kết quả (tờ giấy báo đỗ, chìa khóa ngôi nhà mới, hay kết quả khám sức khỏe tốt).</li>\n<li><strong>Bước 3:</strong> Hôm nay, hãy đi đứng, nói năng và hành động như thể bạn ĐÃ SỞ HỮU những điều đó. Hãy để niềm vui tràn ngập trong ánh mắt bạn.</li>\n</ul>\n<br/><p><em>Lưu ý: Viết 10 điều bạn thấy trân quý nhất hôm nay.</em></p>', 
    specialTask: null 
  },
  { 
    id: 23, 
    day: 23, 
    title: 'NGÀY 23: DÒNG KHÍ NHIỆM MÀU', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Bạn có thể nhịn ăn vài ngày, nhịn uống vài giờ, nhưng không thể nhịn thở quá vài phút. Không khí là món quà vĩ đại nhất nhưng cũng là thứ ta dễ lãng quên nhất. Hôm nay, chúng ta sẽ "chạm" vào món quà vô giá này.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Ít nhất 5 lần trong ngày hôm nay, hãy dừng lại mọi việc đang làm.</li>\n<li><strong>Bước 2:</strong> Hít vào thật sâu 5 nhịp thở chậm rãi. Cảm nhận luồng không khí mát lành đi vào cơ thể và mang lại sự sống cho từng tế bào.</li>\n<li><strong>Bước 3:</strong> Sau mỗi 5 nhịp thở, hãy nhẩm nói bằng tất cả sự chân thành: "Cảm ơn dòng khí nhiệm màu tôi đang hít thở".</li>\n</ul>\n<br/><p><em>Lưu ý: Kết thúc ngày bằng việc đếm lại 10 mầm xanh (điều biết ơn cơ bản).</em></p>', 
    specialTask: null 
  },
  { 
    id: 24, 
    day: 24, 
    title: 'NGÀY 24: CHIẾC ĐŨA PHÉP CỦA TÌNH YÊU THƯƠNG', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Khi bạn khao khát giúp đỡ một người thân đang gặp khó khăn (về sức khỏe, tài chính, hay tinh thần) nhưng cảm thấy bất lực, sự trân trọng chính là "chiếc đũa phép" mạnh mẽ nhất bạn có thể trao đi.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Chọn ra 3 người bạn biết đang rất cần sự giúp đỡ (có thể là họ đang ốm, gặp rắc rối công việc, hoặc đang buồn bã). Lấy ảnh của họ ra (nếu có).</li>\n<li><strong>Bước 2:</strong> Nhìn vào bức ảnh đầu tiên (hoặc nhắm mắt hình dung khuôn mặt họ). Tưởng tượng bạn nhận được tin nhắn rằng vấn đề của họ đã được giải quyết hoàn toàn.</li>\n<li><strong>Bước 3:</strong> Mỉm cười thật tươi, cảm nhận sự nhẹ nhõm và nói to: "Cảm ơn, cảm ơn, cảm ơn vì [tên người đó] đã có lại sức khỏe/tài chính/niềm vui". Lặp lại với 2 người còn lại.</li>\n</ul>\n<br/><p><em>Lưu ý: Duy trì thói quen viết 10 điều trân quý.</em></p>', 
    specialTask: null 
  },
  { 
    id: 25, 
    day: 25, 
    title: 'NGÀY 25: GỢI Ý TỪ VŨ TRỤ', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Hôm nay là phiên bản nâng cấp của Ngày 20. Trò chơi quan sát này sẽ giúp bạn luôn ở trong trạng thái tỉnh thức và kết nối sâu sắc với vạn vật xung quanh.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Giữ cho tâm trí tĩnh lặng và cởi mở. Vũ trụ sẽ gửi cho bạn những "gợi ý" để biết ơn thông qua những sự việc ngẫu nhiên.</li>\n<li><strong>Bước 2:</strong> Ví dụ: Nghe thấy tiếng chim hót -&gt; "Cảm ơn thiên nhiên tươi đẹp". Thấy một em bé cười -&gt; "Cảm ơn sự hồn nhiên". Nhìn thấy một chiếc lá rơi -&gt; "Cảm ơn chu kỳ của sự sống". Nhận được email -&gt; "Cảm ơn công nghệ kết nối".</li>\n<li><strong>Bước 3:</strong> Hãy nhạy bén "bắt" lấy ít nhất 7 gợi ý như vậy trong ngày hôm nay. Đừng bỏ lỡ bất kỳ cơ hội nào để nói lời cảm ơn.</li>\n</ul>\n<br/><p><em>Lưu ý: Viết 10 điều biết ơn của ngày hôm nay.</em></p>', 
    specialTask: {
      title: 'Gợi Ý Từ Vũ Trụ',
      fields: [
        { id: 'magicHints', type: 'list', count: 7, label: '7 gợi ý tôi nhận được từ vũ trụ trong ngày:' }
      ]
    }
  },
  { 
    id: 26, 
    day: 26, 
    title: 'NGÀY 26: BIẾN SAI LẦM THÀNH BÀI HỌC', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Không ai hoàn hảo cả. Những lỗi lầm trong quá khứ thường để lại cảm giác dằn vặt. Tuy nhiên, nếu bạn tìm được bài học ẩn giấu phía sau sự cố đó, bạn sẽ giải phóng được năng lượng tắc nghẽn và không bao giờ lặp lại nó nữa.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Chọn MỘT lỗi lầm lớn (hoặc nhỏ) trong quá khứ mà bạn vẫn còn áy náy mỗi khi nghĩ về (ví dụ: lỡ lời làm tổn thương ai đó, quyết định sai lầm trong công việc).</li>\n<li><strong>Bước 2:</strong> Gạt bỏ cảm giác tự trách móc. Hãy tìm ra 10 điều bạn có thể cảm thấy biết ơn TỪ CHÍNH sai lầm đó (Ví dụ: "Tôi biết ơn vì bài học này giúp tôi cẩn trọng hơn", "Tôi biết ơn vì nhận ra giá trị thực sự của...").</li>\n<li><strong>Bước 3:</strong> Viết 10 điều đó ra. Phép màu sẽ xảy ra khi bạn nhận ra sai lầm là một món quà.</li>\n</ul>\n<br/><p><em>Lưu ý: Chỉ cần làm bài tập này là đủ cho ngày hôm nay (thay thế cho 10 điều biết ơn cơ bản).</em></p>', 
    specialTask: {
      title: 'Hoa Sen Nở Giữa Bùn',
      fields: [
        { id: 'theMistake', type: 'textarea', label: 'Lỗi lầm cần chuyển hóa:', placeholder: 'Sự việc ngày ấy...' },
        { id: 'mistakeLessons', type: 'list', count: 10, label: '10 điều biết ơn / bài học từ sai lầm đó:' }
      ]
    }
  },
  { 
    id: 27, 
    day: 27, 
    title: 'NGÀY 27: TẤM GƯƠNG NHIỆM MÀU', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Người xứng đáng nhận được lòng biết ơn nhiều nhất chính là BẠN. Khi bạn trân trọng bản thân, thế giới bên ngoài sẽ tự động phản chiếu lại tình yêu thương đó.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Hãy đứng trước gương (bất kỳ lúc nào trong ngày).</li>\n<li><strong>Bước 2:</strong> Nhìn thẳng vào mắt mình trong gương. Gạt bỏ mọi phán xét về ngoại hình hay những điều chưa hoàn hảo.</li>\n<li><strong>Bước 3:</strong> Nói từ "Cảm ơn" bằng tất cả sự chân thành và sâu sắc nhất mà bạn có thể dành cho chính mình.</li>\n<li><strong>Bước 4:</strong> Tìm ra 3 điều bạn thực sự yêu thích ở bản thân mình và nói to chúng trước gương.</li>\n</ul>\n<br/><p><em>Lưu ý: Cuối ngày, hãy duy trì thói quen viết 10 điều biết ơn cơ bản.</em></p>', 
    specialTask: null 
  },
  { 
    id: 28, 
    day: 28, 
    title: 'NGÀY 28: NHỚ LẠI PHÉP MÀU', 
    instruction: '<p><strong>Hành động hôm nay:</strong></p>\n<p>Chúc mừng bạn đã đi đến ngày cuối cùng của chu kỳ! Hôm nay là lúc chúng ta ôn lại hành trình và biến sự biết ơn thành một "hơi thở" tự nhiên, không cần gắng gượng.</p>\n<br/><p><strong>Các bước thực hiện:</strong></p>\n<ul>\n<li><strong>Bước 1:</strong> Nhớ lại ngày hôm qua (Ngày 27). Hãy đếm xem có bao nhiêu điều tốt đẹp đã xảy ra từ lúc bạn thức dậy cho đến khi đi ngủ.</li>\n<li><strong>Bước 2:</strong> Tìm ra những điểm sáng dù là nhỏ nhất (một ly cà phê ngon, một cuộc trò chuyện vui vẻ, hoàn thành xong một việc khó).</li>\n<li><strong>Bước 3:</strong> Viết lại (hoặc nhẩm trong đầu) tất cả những khoảnh khắc lấp lánh đó và nói "Cảm ơn".</li>\n<li><strong>Bước 4:</strong> Hãy tiếp tục mang theo cuốn sổ tay "Soul Space" này. Bạn có thể lặp lại chu kỳ 28 ngày, hoặc đơn giản là mở ngẫu nhiên một ngày bất kỳ để thực hành mỗi khi thấy cần tìm lại sự tĩnh tại.</li>\n</ul>\n<br/><p><em>Lưu ý: Viết 10 điều biết ơn của ngày hôm nay.</em></p>', 
    specialTask: null 
  }
];
