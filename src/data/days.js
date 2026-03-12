export const daysData = [
  { 
    id: 1, 
    day: 1,
    title: 'NGÀY 1 - CẢM THẤY MÌNH THẬT HẠNH PHÚC', 
    instruction: '**Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\n\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn về bản thân, cơ thể, các giác quan, những gì bạn tiếp xúc, con người, công việc,... mọi thứ xung quanh bạn.\n\n**Viết ra lí do vì sao bạn biết ơn điều đó**\n\n- Tôi thật sự may mắn/hạnh phúc khi có được... vì...\n*Cảm Ơn, Cảm Ơn, Cảm Ơn*\n\n- Tôi rất hạnh phúc và biết ơn ... vì...\n*Cảm Ơn, Cảm Ơn, Cảm Ơn*\n\n- Từ tận đáy lòng tôi chân thành biết ơn...vì...\n*Cảm Ơn, Cảm Ơn, Cảm Ơn*\n\nĐọc lại những điều đã viết,\nnói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nvà đặt tay lên trái tim mình cảm nhận tất cả.',
    specialTask: null
  },
  { 
    id: 2, 
    day: 2,
    title: 'NGÀY 2 - HÒN ĐÁ NHIỆM MÀU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết, nói lời: **Cảm ơn! Cảm ơn! Cảm Ơn** và đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Tìm một hòn đá tự nhiên để làm Hòn Đá Nhiệm Màu**\nKể từ giây phút được tạo ra, hòn đá dành cho bạn, và được bạn chọn đi cùng trong suốt hành trình thực thi lòng biết ơn này.\nHãy giữ gìn nó bên cạnh như một người bạn đồng hành để chia sẻ, lắng nghe và cảm nhận Phép Màu\n\n**3. Mỗi tối trước khi đi ngủ trong suốt hành trình, Hãy cầm Hòn Đá Nhiệm Màu trong tay và nghĩ về những Điều Tốt Đẹp đã xảy ra.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.',
    specialTask: null
  },
  { 
    id: 3, 
    day: 3,
    title: 'NGÀY 3 - MỐI QUAN HỆ NHIỆM MÀU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Tìm 03 mối quan hệ thân thiết và hình ảnh của từng người để thực thi lòng biết ơn,**\nCảm nhận sự kì diệu của Mối Quan Hệ Nhiệm Màu\nĐặt bức ảnh của họ trước mặt mình và\nViết ra 05 điều bạn cảm thấy biết ơn nhất về mỗi người\nBắt đầu mỗi câu với từ nhiệm màu **Cảm Ơn** cùng với tên người đó và điều cụ thể bạn cảm thấy biết ơn họ.\nMang theo bức ảnh trong ngày hôm nay, hoặc đặt nó ở vị trí bạn dễ dàng nhìn thấy trong ngày, ít nhất 03 lần, hãy nhìn hình của họ - trực tiếp gọi tên họ - nói với họ từ nhiệm màu **Cảm Ơn** để thể hiện lòng biết ơn của mình đối với họ một cách chân thành nhất có thể.\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu trong tay và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.',
    specialTask: {
      title: 'Mối Quan Hệ Nhiệm Màu',
      fields: [
        { id: 'relPhoto', type: 'photo', label: 'Tải ảnh 3 người thân thiết của bạn lên đây để lưu trữ (Không bắt buộc)' },
        { id: 'relReasons', type: 'textarea', label: 'Viết ra 5 điều bạn cảm thấy biết ơn nhất về mỗi người:', placeholder: 'Cảm ơn [Tên] vì...' }
      ]
    }
  },
  { 
    id: 4, 
    day: 4, 
    title: 'NGÀY 4 - SỨC KHỎE NHIỆM MÀU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nnói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nvà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Lấy một mẩu giấy hoặc một tấm thẻ viết lên đó dòng chữ:**\n\n*"Món Quà Sức Khỏe Đang Giúp Tôi Được Sống"*\n*Cảm ơn, Cảm Ơn, Cảm ơn*\n\nMang theo tấm thẻ trong ngày hôm nay, hoặc đặt nó ở vị trí bạn dễ dàng nhìn thấy trong ngày\nÍt nhất 04 lần, hãy nhìn vào dòng chữ này, đọc chúng thật chậm, từng từ một và cảm nhận Lòng Biết Ơn về món quà sức khỏe mình đang có càng nhiều càng tốt.\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\n\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  },
  { 
    id: 5, 
    day: 5, 
    title: 'NGÀY 5 - TIỀN BẠC NHIỆM MÀU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết, nói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nvà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Dành vài phút để nghĩ**\nVề tuổi thơ của mình, về tất cả những thứ mình đã được nhận, hoàn toàn miễn phí.\nNhớ lại những kí ức mà ở đó, tiền bạc được người khác chi trả giúp bạn.\nBằng cả tấm lòng hãy nói từ nhiệm màu **Cảm Ơn** đối với mỗi kỉ niệm ấy.\n\n**3. Lấy một mẩu giấy dán vào tờ tiền với nội dung:**\n*"Cảm Ơn Tất Cả Những Khoản Tiền Tôi Nhận Được Trong Cuộc Sống"*\nMang theo tờ Tiền Nhiệm Màu trong ngày hôm nay, ít nhất 2 lần buổi sáng và buổi chiều, cầm tờ tiền trong tay và đọc những dòng bạn viết với Lòng Biết Ơn chân thành dành cho sự đủ đầy về tiền bạc mà bạn đã nhận được.\nSau ngày hôm nay, hãy đặt Tờ Tiền Nhiệm Màu ở nơi bạn có thể nhìn thấy thường xuyên mỗi ngày\n\n**4. Trước khi đi ngủ, Hòn Đá Nhiệm Màu trong tay và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: {
      title: 'Tờ Tiền Nhiệm Màu',
      fields: [
        { id: 'moneyPhoto', type: 'photo', label: 'Tải ảnh Tờ Tiền Nhiệm Màu của bạn lên đây để lưu trữ (Không bắt buộc)' }
      ]
    }
  },
  { 
    id: 6, 
    day: 6, 
    title: 'NGÀY 6 - CÔNG VIỆC NHIỆM MÀU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nnói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nvà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Người Quản Lý Màu Nhiệm**\n\nNgười Quản Lý Vô Hình Của Lòng Biết Ơn\nKhi làm việc: Hãy tưởng tượng có một người quản lý vô hình đi theo bạn và ghi chú lại mỗi khi bạn cảm thấy điều gì đó để biết ơn.\nBằng cả tấm lòng hãy nói từ nhiệm màu:\n**Cảm Ơn/ Tôi Rất Biết Ơn vì...**\nĐể người quản lý vô hình trong bạn có thể ghi chú lại sự Biết Ơn những gì bạn đã nhận được trong công việc suốt ngày hôm nay\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\n\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  },
  { 
    id: 7, 
    day: 7, 
    title: 'NGÀY 7 - CÁNH CỬA THOÁT KHỎI SỰ TIÊU CỰC', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời: **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Chọn một vấn đề / tình huống tiêu cực trong cuộc sống mà bạn muốn giải quyết**\nLiệt kê 10 điều bạn cảm thấy biết ơn vì tình huống tiêu cực ấy. Bên dưới danh sách, hãy viết:\n*"Cảm ơn, cảm ơn, cảm ơn\nvì đã cho tôi thấy giải pháp hoàn hảo"*\n\n**3. Cam kết trong suốt ngày hôm nay bạn sẽ không nghĩ và nói bất cứ điều gì tiêu cực.**\nKhi lỡ phá vỡ cam kết, hãy dừng lại ngay và nói:\n*"Nhưng tôi phải nói rằng mình cảm thấy rất biết ơn vì... đã giúp tôi...,\nCảm ơn, cảm ơn, cảm ơn"*\n\n**4. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: {
      title: 'Cánh Cửa Thoát Khỏi Sự Tiêu Cực',
      fields: [
        { id: 'negativeIssue', type: 'textarea', label: '1. Vấn đề / tình huống tiêu cực cần giải quyết:', placeholder: 'Viết ra vấn đề bạn đang đối mặt...' },
        { id: 'positiveReasons', type: 'list', count: 10, label: '2. Liệt kê 10 điều bạn cảm thấy biết ơn vì tình huống này:' }
      ]
    }
  },
  { 
    id: 8, 
    day: 8, 
    title: 'NGÀY 8 - GIA VỊ NHIỆM MÀU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Trước khi ăn hay uống bất cứ món gì, hãy dành thời gian nhìn vào món ấy và nói từ nhiệm màu Cảm Ơn**\nHãy nếm chúng và thật sự tập trung\n(nhai kỹ, nuốt chậm) tăng cường cảm quan mùi vị,\nTận hưởng món ăn, thức uống với Lòng Biết Ơn sâu sắc.\n\nLòng Biết Ơn là một loại gia vị nhiệm màu.\nNếu cần bạn có thể tưởng tượng mình đang có trong tay một lọ bụi phép thuật.\nHãy rắc chúng bụi phép thuật của Lòng Biết Ơn lên mọi loại thức ăn và nước uống trước khi bạn sử dụng để có những bữa ăn nhiệm màu.\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu trong tay và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  },
  { 
    id: 9, 
    day: 9, 
    title: 'NGÀY 9 - NAM CHÂM TIỀN BẠC', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Lấy ra các hóa đơn chưa thanh toán và viết lên đó dòng chữ:**\n\n*"Cảm Ơn Vì Số Tiền"*\nCảm nhận Lòng Biết Ơn vì mình có tiền để thanh toán những hóa đơn ấy, bất kể bạn đang có tiền thật sự hay không.\n\n**2\'. Tìm 10 hóa đơn đã thanh toán và viết lên đó dòng chữ:**\n\n*"Cảm Ơn - Đã Thanh Toán"*\nCảm nhận Lòng Biết Ơn vì mình đã có tiền để thanh toán những hóa đơn ấy\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu trong tay và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  },
  { 
    id: 10, 
    day: 10, 
    title: 'NGÀY 10 - BỤI PHÉP THUẬT DÀNH CHO MỌI NGƯỜI', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Rắc bụi phép thuật lên 10 người**\n\nNói trực tiếp hoặc thầm cảm ơn người đã đem lại lợi ích cho bạn, phục vụ bạn.\n\nCảm nhận Lòng Biết Ơn vì những điều mình đã được nhận từ những dịch vụ, lợi ích họ mang đến\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp xảy ra trong ngày.**\n\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  },
  { 
    id: 11, 
    day: 11, 
    title: 'NGÀY 11 - BUỔI SÁNG NHIỆM MÀU', 
    instruction: '**1. Nói từ nhiệm màu Cảm Ơn cho buổi sáng nhiệm màu**\n\nNói từ nhiệm màu **Cảm Ơn** ngay khi thức dậy\n\nNói từ nhiệm màu **Cảm ơn** trong tâm trí\nMỗi khi bạn chạm vào hay sử dụng bất cứ thứ gì,\nTừ lúc bạn mở mắt, đến khi đã chuẩn bị mọi thứ sẵn sàng cho ngày mới.\n\n**2. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nnói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nvà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp đã xảy ra**\n\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  },
  { 
    id: 12, 
    day: 12, 
    title: 'NGÀY 12 - NHỮNG CON NGƯỜI NHIỆM MÀU ĐÃ THAY ĐỔI CUỘC ĐỜI BẠN', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó.\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Tìm ra 03 Người Nhiệm Màu Đã Thay Đổi Cuộc Sống Của Bạn**\n\nTrong một không gian tĩnh lặng,\nHãy nhớ đến 03 con người nhiệm màu đã xuất hiện trong cuộc đời bạn.\nChia sẻ lần lượt với từng người một như thể họ đang có mặt cùng bạn lí do tại sao bạn biết ơn họ,\nNhờ họ mà cuộc sống của bạn đã thay đổi như thế nào.\n\nNói lời **Cảm Ơn** đến từng con người nhiệm màu ấy bằng tất cả những rung động từ sâu trong trái tim tràn ngập Lòng Biết Ơn.\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu trong tay và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: {
      title: 'Người Nhiệm Màu Đã Thay Đổi Cuộc Đời Bạn',
      fields: [
        { id: 'magicPerson1', type: 'textarea', label: 'Người nhiệm màu thứ 1 (Tên & Lý do biết ơn):', placeholder: 'Biết ơn bạn... vì đã...' },
        { id: 'magicPerson2', type: 'textarea', label: 'Người nhiệm màu thứ 2 (Tên & Lý do biết ơn):', placeholder: 'Biết ơn bạn... vì đã...' },
        { id: 'magicPerson3', type: 'textarea', label: 'Người nhiệm màu thứ 3 (Tên & Lý do biết ơn):', placeholder: 'Biết ơn bạn... vì đã...' }
      ]
    }
  },
  { 
    id: 13, 
    day: 13, 
    title: 'NGÀY 13 - HIỆN THỰC HÓA MỌI MƠ ƯỚC', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Viết ra danh sách 10 điều mong muốn.**\nViết *Cảm Ơn, Cảm Ơn, Cảm Ơn* trước mỗi điều mong muốn như thể bạn đã nhận được.\nDùng trí tưởng tượng của bạn để trả lời 3 câu hỏi:\n*Cảm xúc của bạn khi nhận được điều mình mong muốn?*\n*Ai là người bạn báo tin đầu tiên và bạn sẽ nói gì với họ?*\n*Điều tuyệt vời bạn làm sau khi có được mong muốn là gì?*\nĐọc lại những mong muốn ấy, cảm nhận sâu sắc những rung động khi nói từ nhiệm màu **Cảm Ơn**\n\n**2\'. Sáng tạo một tấm Bảng Nhiệm Màu**\nChuẩn bị một tấm bảng với hình ảnh, câu chữ được sưu tầm, cắt ghép... Thể hiện những mong muốn và đặt ở nơi thường xuyên nhìn thấy.\nĐặt tiêu đề cho tấm bảng là **"Cảm Ơn, Cảm Ơn, Cảm Ơn"** với cỡ chữ lớn ở đầu bảng.\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu trong tay và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: {
      title: 'Hiển Thực Hóa Mọi Mơ Ước',
      fields: [
        { id: 'topDreams', type: 'list', count: 10, label: 'Danh sách 10 điều mong muốn:' },
        { id: 'visionBoardPhoto', type: 'photo', label: 'Ảnh Tấm Bảng Nhiệm Màu của bạn (Tùy chọn)' }
      ]
    }
  },
  { 
    id: 14, 
    day: 14, 
    title: 'NGÀY 14 - MỘT NGÀY NHIỆM MÀU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nnói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nvà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Biết ơn những kế hoạch nhiệm màu**\n\nVào đầu ngày, lướt qua đầu kế hoạch cho cả hôm đó, từ buổi sáng đến buổi tối và cả lúc đi ngủ.\n\nVới mỗi kế hoạch/sự kiện hãy tưởng tượng bạn đang cực kì biết ơn những điều hoàn hảo vào cuối ngày và nói từ nhiệm màu **Cảm Ơn** vì mọi thứ diễn ra suôn sẻ.\nSau khi thể hiện lòng biết ơn với tất cả những kế hoạch diễn ra trong ngày, Hãy kết thúc phương pháp nhiệm màu bằng câu nói:\n*"Và cảm ơn cho những tin tức tốt lành đến vào ngày hôm nay. Cảm Ơn, Cảm Ơn, Cảm Ơn"*\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu trong tay và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  },
  { 
    id: 15, 
    day: 15, 
    title: 'NGÀY 15 - PHÉP MÀU CẢI THIỆN MỐI QUAN HỆ', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Phương pháp nhiệm màu cải thiện mối quan hệ**\n\nChọn một mối quan hệ khó khăn hay đổ vỡ mà bạn muốn cải thiện\n\nNgồi xuống và liệt kê danh sách 10 điều mà bạn cảm thấy biết ơn về người ấy\nHãy viết theo cấu trúc:\n\n*Tên người ấy ..., tôi chân thành biết ơn ... vì điều gì đó?\nCảm ơn, Cảm ơn, Cảm ơn*\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp đã xảy ra**\n\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: {
      title: 'Phép Màu Cải Thiện Mối Quan Hệ',
      fields: [
        { id: 'relationshipIssue', type: 'textarea', label: 'Tên người có mối quan hệ cần cải thiện:', placeholder: 'Ví dụ: Cảm ơn chồng/vợ tôi vì...' },
        { id: 'relationshipReasons', type: 'list', count: 10, label: '10 điều bạn cảm thấy biết ơn về người ấy:' }
      ]
    }
  },
  { 
    id: 16, 
    day: 16, 
    title: 'NGÀY 16 - PHÉP MÀU VÀ ĐIỀU KỲ DIỆU CỦA SỨC KHỎE', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Biết ơn Sức Khỏe bạn đã nhận được trong quá khứ**\nHãy nhớ lại 03 thời điểm bạn cảm thấy tuyệt vời và nói từ nhiệm màu **Cảm Ơn**.\nCảm nhận lòng biết ơn đối với những thời điểm đó.\n\n**2\'. Biết ơn Sức Khỏe bạn đang nhận được trong hiện tại**\nHãy chọn 05 bộ phận trong cơ thể đang hoạt động tốt\nLần lượt nói từ nhiệm màu **Cảm Ơn** cho từng bộ phận trong tâm trí và Cảm nhận lòng biết ơn chân thành đối với những bộ phận ấy\n\n**2\'\'. Biết Ơn sức Khỏe bạn muốn có trong tương lai**\nChọn 01 điều về cơ thể mà bạn muốn cải thiện\nDành 01 phút để hình dung ra bản thân đang có được trạng thái sức khỏe lý tưởng ấy, nói từ nhiệm màu **Cảm Ơn** và Cảm nhận lòng biết ơn sâu sắc đối với những cải thiện tốt đẹp ngoài sức tưởng tượng ấy.\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu trong tay và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: {
      title: 'Điều Kỳ Diệu Của Sức Khỏe',
      fields: [
        { id: 'pastHealth', type: 'list', count: 3, label: '3 thời điểm bạn cảm thấy tuyệt vời trong MỘT QUÁ KHỨ:' },
        { id: 'presentHealth', type: 'list', count: 5, label: '5 bộ phận trong cơ thể đang hoạt động tốt ở HIỆN TẠI:' },
        { id: 'futureHealth', type: 'textarea', label: '1 điều về cơ thể mà bạn muốn cải thiện trong TƯƠNG LAI:', placeholder: 'Viết ra điều bạn mong muốn sức khỏe của mình đạt được...' }
      ]
    }
  },
  { 
    id: 17, 
    day: 17, 
    title: 'NGÀY 17 - TẤM SÉC NHIỆM MÀU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Tấm Séc Nhiệm Màu**\n\n**2.1- Điền đầy đủ thông tin vào Tấm Séc Nhiệm Màu.**\nCầm Tấm Séc Nhiệm Màu trong tay và tưởng tượng việc bạn dùng số tiền có được để làm điều bạn muốn.\nHãy cảm nhận niềm vui và lòng biết ơn như thể bạn đã thật sự có được.\n\n**2.2- Đem theo Tấm Séc Nhiệm Màu trong ngày, để nó ở nơi dễ dàng nhìn thấy.**\nÍt nhất 02 lần trong ngày, cầm Tấm Séc Nhiệm Màu và tưởng tượng việc bạn đang dùng số tiền có được.\nHãy cảm nhận niềm vui và lòng biết ơn như thể bạn đã thật sự có được số tiền đó.\n\n**2.3- Cuối ngày hôm nay, hãy để Tấm Séc Nhiệm Màu ở nơi dễ dàng nhìn thấy hàng ngày.**\nKhi nhận được số tiền đã viết, hãy viết một tấm Séc khác và lặp lại các bước trên để tiếp tục thực thi phương pháp Tấm Séc Nhiệm Màu\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu trong tay và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  },
  { 
    id: 18, 
    day: 18, 
    title: 'NGÀY 18 - DANH SÁCH NHIỆM MÀU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nnói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nvà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Lập Danh sách nhiệm màu**\n\nHãy viết ra danh sách những điều quan trọng nhất bạn muốn thực hiện hay giải quyết.\n\nChọn ra 03 việc quan trọng nhất để tập trung, lần lượt tưởng tượng mỗi việc đã được giúp thực hiện hay giải quyết xong.\n\nDành ít nhất một phút cho mỗi việc, tin tưởng rằng nó đã được thực hiện và thể hiện Lòng Biết Ơn thật nhiều để đáp lại\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu trong tay và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: {
      title: 'Danh Sách Nhiệm Màu',
      fields: [
        { id: 'todoList', type: 'textarea', label: 'Danh sách những điều quan trọng nhất muốn thực hiện/giải quyết:', placeholder: 'Cần giải quyết nợ nần, dự án X...' },
        { id: 'topThreeTodos', type: 'list', count: 3, label: '3 công việc quan trọng nhất cần tập trung giải quyết:' }
      ]
    }
  },
  { 
    id: 19, 
    day: 19, 
    title: 'NGÀY 19 - BƯỚC CHÂN NHIỆM MÀU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nnói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nvà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Thực hành 100 Bước Chân Nhiệm Màu**\n\nBước 100 bước chân nhiệm màu trong khoảng 90s\nVới lòng biết ơn bất cứ lúc nào trong ngày\nVới mỗi bước chân, hãy nói và cảm nhận từ nhiệm màu **Cảm Ơn**\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp đã xảy ra**\n\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  },
  { 
    id: 20, 
    day: 20, 
    title: 'NGÀY 20 - PHÉP MÀU CỦA TRÁI TIM', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nnói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nvà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Thực hành Phép Màu của Trái Tim**\n\nTập trung sự chú ý của bạn vào khu vực gần trái tim\nNhắm mắt lại, tiếp tục tập trung đầu óc vào trái tim, và nói từ nhiệm màu **Cảm Ơn**\n\nLấy Danh Sách 10 Điều Mong Muốn ra để thực hiện Phép Màu của Trái Tim bằng cách:\nĐọc mỗi điều, nhắm mắt lại,\ntập trung tâm trí của bạn vào khu vực trái tim cảm nhận và nói thật chậm\n**Cảm Ơn, Cảm Ơn, Cảm Ơn**\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp đã xảy ra**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  },
  { 
    id: 21, 
    day: 21, 
    title: 'NGÀY 21 - KẾT QUẢ TUYỆT DIỆU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Cảm Ơn Vì Kết Quả Tuyệt Diệu**\n\nVào đầu ngày, viết ra danh sách 03 sự việc hoặc tình huống quan trọng bạn muốn có kết quả tuyệt diệu.\nHãy viết như thể bạn đang viết sau khi nó đã xảy ra cùng câu: *Cảm Ơn Vì Kết Quả Tuyệt Diệu!*\n\nTrong ngày, khi có sự việc bất ngờ phát sinh hãy sử dụng sức mạnh nhiệm màu của lòng biết ơn để có kết quả tuyệt diệu.\nMỗi lần như thế, hãy nhắm mắt lại, nói thầm và cảm nhận câu: *Cảm Ơn Vì Kết Quả Tuyệt Diệu!*\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp đã xảy ra**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: {
      title: 'Kết Quả Tuyệt Diệu',
      fields: [
        { id: 'excellentResults', type: 'list', count: 3, label: '3 sự việc hoặc tình huống bạn muốn có kết quả tuyệt diệu hôm nay (Viết như đã xảy ra):' }
      ]
    }
  },
  { 
    id: 22, 
    day: 22, 
    title: 'NGÀY 22 - PHÉP MÀU NGAY TRƯỚC MẮT', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Phép Màu Ngay Trước Mắt**\nVào đầu ngày, lấy ra danh sách 10 Điều Mong Muốn\nĐọc qua mỗi mong muốn. Trong khoảng 01 phút, hãy tưởng tượng rằng bạn đã nhận được điều đó.\nCảm nhận lòng biết ơn càng nhiều càng tốt\n\nTrong ngày, mang theo Danh Sách Mong Muốn.\nÍt nhất 02 lần trong ngày, hãy lấy nó ra, đọc qua và cảm nhận lòng biết ơn càng nhiều càng tốt.\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp đã xảy ra**\n\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  },
  { 
    id: 23, 
    day: 23, 
    title: 'NGÀY 23 - DÒNG KHÍ NHIỆM MÀU BẠN ĐANG HÍT THỞ', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Bạn Đang Hít Thở Dòng Khí Nhiệm Màu**\n05 lần trong ngày hãy nghĩ về dòng khí tuyệt vời bạn đang hít thở.\nHít vào thở ra 05 lần thật chậm, cảm nhận luồng khí bên trong cơ thể bạn khi hít vào và niềm vui khi thở ra.\nSau đó hãy nói câu nhiệm màu:\n*Cảm Ơn dòng khí nhiệm màu tôi đang hít thở.*\nCảm nhận lòng biết ơn chân thành nhất đối với dòng khí quý giá và quan trọng mà bạn đang được hít thở!\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp đã xảy ra**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  },
  { 
    id: 24, 
    day: 24, 
    title: 'NGÀY 24 - CHIẾC ĐŨA PHÉP', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Chiếc Đũa Phép**\nChọn 03 người mà bạn yêu quý, đang thiếu thốn sức khỏe, tiền tài, hạnh phúc hoặc cả ba.\n*(Tìm một tấm ảnh của mỗi người và để nó trước mặt khi thực hiện phương pháp này nếu có thể )*\n\nThực hiện lần lượt từng người một như sau:\nCầm trên tay tấm ảnh của họ,\nnhắm mắt lại và trong vòng một phút hãy hình dung bạn nhận được tin rằng người đó đã có được điều họ muốn.\nMở mắt ra, và trong khi vẫn cầm tấm ảnh trên tay hãy nói:\n\n*"Cảm Ơn, Cảm Ơn, Cảm Ơn vì tên người đó đã có sức khỏe, tiền tài và hạnh phúc"*\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu trong tay và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: {
      title: 'Chiếc Đũa Phép',
      fields: [
        { id: 'wandPhoto', type: 'photo', label: 'Tải ảnh 3 người bạn muốn sử dụng chiếc đũa phép lên đây (Không bắt buộc)' },
        { id: 'wandWishes', type: 'textarea', label: 'Lời chúc sức khỏe, tiền tài và hạnh phúc cho họ:', placeholder: 'Cảm ơn, cảm ơn, cảm ơn vì [Tên] đã có...' }
      ]
    }
  },
  { 
    id: 25, 
    day: 25, 
    title: 'NGÀY 25 - GỢI Ý NHIỆM MÀU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\n\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Gợi Ý Nhiệm Màu**\n\nHãy tỉnh thức, sáng suốt để quan sát xung quanh và nhận ra ít nhất 07 gợi ý nhiệm màu trong ngày vũ trụ dành cho bạn.\n\nCảm nhận và nói từ nhiệm màu **Cảm Ơn** chân thành đối với mỗi gợi ý nhiệm màu ấy\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp đã xảy ra**\n\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: {
      title: 'Gợi Ý Nhiệm Màu',
      fields: [
        { id: 'magicHints', type: 'list', count: 7, label: '7 gợi ý nhiệm màu bạn nhận ra trong ngày hôm nay:' }
      ]
    }
  },
  { 
    id: 26, 
    day: 26, 
    title: 'NGÀY 26 - PHÉP MÀU BIẾN LỖI LẦM THÀNH HẠNH PHÚC', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\n\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Phép Màu Biến Lỗi Lầm Thành Hạnh Phúc**\n\nChọn 01 lỗi lầm bạn mắc phải trong cuộc sống\n\nTìm và viết 10 điều hạnh phúc là kết quả của sai lầm đó khiến bạn cảm thấy biết ơn\n\nĐể tìm kiếm những điều hạnh phúc dễ dàng hơn, bạn có thể tự hỏi: *Tôi học được gì từ sai lầm này? Sai lầm này mang đến điều tốt đẹp gì?*\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp đã xảy ra**\n\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: {
      title: 'Phép Màu Biến Lỗi Lầm Thành Hạnh Phúc',
      fields: [
        { id: 'theMistake', type: 'textarea', label: 'Lỗi lầm mắc phải:', placeholder: 'Ghi vắn tắt lỗi lầm bạn đã mắc phải...' },
        { id: 'mistakeLessons', type: 'list', count: 10, label: '10 điều hạnh phúc/bài học nhận ra từ lỗi lầm đó:' }
      ]
    }
  },
  { 
    id: 27, 
    day: 27, 
    title: 'NGÀY 27 - TẤM GƯƠNG NHIỆM MÀU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\n\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Tấm Gương Nhiệm Màu**\n\nMỗi khi nhìn chính mình trong gương hãy nói **Cảm Ơn**\nThật sự cảm nhận điều ấy - hơn tất cả những gì bạn đã từng cảm nhận trước đây\n\nKhi sử dụng Tấm Gương Nhiệm Màu hãy nói:\n03 điều bạn cảm thấy biết ơn về chính bản thân mình.\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu và nghĩ về những Điều Tốt Đẹp đã xảy ra**\n\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  },
  { 
    id: 28, 
    day: 28, 
    title: 'NGÀY 28 - NGHIỆM LẠI PHÉP MÀU', 
    instruction: '**1. Lập Danh Sách 10 Điều Bạn Cảm Thấy Biết Ơn**\nBuổi sáng - Viết vào sổ 10 điều bạn cảm thấy biết ơn\nViết ra lí do vì sao bạn biết ơn điều đó\nĐọc lại những điều đã viết,\nNói lời **Cảm ơn! Cảm ơn! Cảm Ơn**\nVà đặt tay lên trái tim mình cảm nhận tất cả.\n\n**2. Nghiệm Lại Phép Màu**\n*Nghiệm lại phép màu bằng cách nhớ lại những điều hạnh phúc trong hôm qua và viết chúng ra.*\nTự hỏi bản thân rằng:\n*Những điều tốt đẹp gì đã xảy ra hôm qua?*\nNhớ lướt qua các sự kiện của ngày hôm trước cho đến khi thấy hài lòng và viết ra tất cả những điều hạnh phúc ấy\nSau đó nói từ nhiệm màu **Cảm Ơn** trong tâm trí mình\n\nTừ hôm nay, bạn có thể thực hiện phương pháp này bằng cách viết, nói hay chỉ nghĩ trong đầu.\n\nBạn có thể lập danh sách tóm tắt về những điều hạnh phúc hoặc 01 danh sách với cụ thể lí do bạn biết ơn cho mỗi điều\n\n**3. Trước khi đi ngủ, cầm Hòn Đá Nhiệm Màu trong tay và nghĩ về những Điều Tốt Đẹp đã xảy ra trong ngày.**\nNói ra từ nhiệm màu: **Cảm Ơn** với điều tốt đẹp nhất và cảm nhận những rung động ngay trái tim mình.', 
    specialTask: null 
  }
];
