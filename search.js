const products = [
  {
    id: 'linh-kien-dien-tu',
    title: 'Thu mua linh kiện điện tử – bo mạch',
    description: 'Thu mua linh kiện điện tử, bo mạch, mainboard, IC, chip, tụ – điện trở, hàng tồn kho giá cao.',
    image: './img/sp2.jpg',
    keywords: [
      'linh kiện điện tử', 'linh kien dien tu',
      'bo mạch điện tử', 'bo mach',
      'mainboard', 'ic điện tử', 'chip ic', 
      'thu mua linh kiện', 'linh kiện tồn kho'
    ]
  },
  {
    id: 'nha-xuong-thanh-ly',
    title: 'Thu mua nhà xưởng thanh lý',
    description: 'Thu mua trọn gói nhà xưởng thanh lý, máy móc, tôn mái, sắt thép. Giá cao – thanh toán nhanh.',
    image: './img/sp14.jpg',
    keywords: ['nhà xưởng thanh lý', 'nha xuong thanh ly', 'thanh lý nhà xưởng', 'thanh ly nha xuong', 'tôn mái', 'máy móc thanh lý']
  },
  {
    id: 'xe-co',
    title: 'Thu mua xe cộ hư,xe cũ ',
    description: 'Thu mua xe máy hư, xe đạp cũ, xe cộ phế liệu. Giá cao, thu mua tận nơi, thủ tục nhanh gọn.',
    image: './img/sp12.jpg',
    keywords: ['xe cộ', 'xe co', 'xe máy hư', 'xe đạp cũ', 'xe hỏng', 'phế liệu xe']
  },
  {
    id: 'ton-cu',
    title: 'Thu mua tôn cũ – tôn kẽm cũ',
    description: 'Thu mua tôn cũ, tôn mái nhà xưởng, tôn kẽm. Thu mua tận nơi – giá cao.',
    image: './img/sp15.jpg',
    keywords: ['tôn cũ', 'ton cu', 'tôn kẽm', 'ton kem', 'tôn mái', 'tôn nhà xưởng']
  },
  {
    id: 'lapp-dung-nha-xuong',
    title: 'Lắp dựng nhà xưởng công nghiệp',
    description: 'Thi công – lắp dựng nhà xưởng công nghiệp trọn gói: khung thép, mái tôn, nền xưởng, vách tôn.',
    image: './img/sp16.jpg',
    keywords: [
      'lắp dựng nhà xưởng', 'lap dung nha xuong', 
      'thi công nhà xưởng', 'nha xuong cong nghiep', 
      'khung thép tiền chế', 'lap dung khung thep'
    ]
  },
 
    {
      id: 'dong',
      title: 'Thu mua phế liệu Đồng',
      description: 'Thu mua phế liệu đồng đỏ, đồng vàng, đồng thau với giá cao nhất thị trường. Thanh toán nhanh chóng, uy tín.',
      image: './img/sp5.jpg',
      keywords: ['đồng', 'dong', 'phế liệu đồng', 'đồng đỏ', 'đồng vàng', 'đồng thau']
    },
    {
      id: 'sat',
      title: 'Thu mua phế liệu Sắt',
      description: 'Thu mua sắt phế liệu, sắt thép các loại, sắt vụn giá cao. Đội ngũ chuyên nghiệp, thu mua tận nơi.',
      image: './img/sp3.png',
      keywords: ['sắt', 'sat', 'phế liệu sắt', 'sắt thép', 'sắt vụn', 'thep']
    },
    {
      id: 'nhom',
      title: 'Thu mua phế liệu Nhôm',
      description: 'Thu mua nhôm phế liệu, nhôm thanh, nhôm tấm, nhôm đúc với giá tốt. Thanh toán ngay sau khi thu mua.',
      image: './img/sp1.jpg',
      keywords: ['nhôm', 'nhom', 'phế liệu nhôm', 'nhôm thanh', 'nhôm tấm']
    },
    {
      id: 'day-cap',
      title: 'Thu mua phế liệu dây cáp điện, dây đồng',
      description: 'Thu mua dây cáp điện cũ, dây đồng, cáp điện phế liệu các loại. Giá cao, thu mua số lượng lớn.',
      image: './img/sp6.jpg',
      keywords: ['dây cáp', 'day cap', 'dây điện', 'dây đồng', 'cáp điện', 'cap dien']
    },
    {
      id: 'inox',
      title: 'Thu mua phế liệu Inox',
      description: 'Thu mua inox phế liệu các loại: inox 304, 201, 430. Giá cao, thu mua tận nơi, thanh toán nhanh.',
      image: './img/sp4.jpg',
      keywords: ['inox', 'phế liệu inox', 'inox 304', 'inox 201', 'thép không gỉ']
    },
    {
      id: 'niken',
      title: 'Thu mua phế liệu Niken',
      description: 'Thu mua phế liệu niken, hợp kim niken với giá cao. Chuyên thu mua số lượng lớn cho các xưởng, nhà máy.',
      image: './img/sp7.webp',
      keywords: ['niken', 'nikel', 'phế liệu niken', 'hợp kim niken']
    },
    {
      id: 'hop-kim',
      title: 'Thu mua phế liệu Hợp kim',
      description: 'Thu mua hợp kim các loại: hợp kim nhôm, hợp kim đồng, hợp kim kẽm. Giá cạnh tranh nhất thị trường.',
      image: './img/sp8.jpg',
      keywords: ['hợp kim', 'hop kim', 'phế liệu hợp kim', 'hợp kim nhôm', 'hợp kim đồng']
    },
    {
      id: 'chi',
      title: 'Thu mua phế liệu Chì',
      description: 'Thu mua chì phế liệu, chì ắc quy, chì tấm. Thu mua số lượng lớn, giá cao, thanh toán ngay.',
      image: './img/sp9.jpg',
      keywords: ['chì', 'chi', 'phế liệu chì', 'chì ắc quy', 'ac quy']
    },
    {
      id: 'thiec',
      title: 'Thu mua phế liệu Thiếc',
      description: 'Thu mua thiếc phế liệu, thiếc hàn, hợp kim thiếc. Giá tốt, thu mua tận nơi, thanh toán liền tay.',
      image: './img/sp10.jpg',
      keywords: ['thiếc', 'thiec', 'phế liệu thiếc', 'thiếc hàn', 'hợp kim thiếc']
    },
    {
      id: 'kem',
      title: 'Thu mua phế liệu Kẽm',
      description: 'Thu mua kẽm phế liệu, kẽm tấm, kẽm mạ. Thu mua số lượng lớn với giá cao nhất thị trường.',
      image: './img/sp11.jpg',
      keywords: ['kẽm', 'kem', 'phế liệu kẽm', 'kẽm tấm', 'kẽm mạ']
    },
    {
      id: 'cong-nghiep',
      title: 'Thu mua phế liệu công nghiệp khối lượng lớn',
      description: 'Chuyên thu mua phế liệu công nghiệp với khối lượng lớn. Đội ngũ chuyên nghiệp, xe chuyên dụng, thanh toán ngay.',
      image: './img/thumua1.jpg',
      keywords: ['công nghiệp', 'cong nghiep', 'khối lượng lớn', 'phế liệu công nghiệp', 'nhà máy']
    },
    {
      id: 'nha-xuong',
      title: 'Thu mua xác nhà xưởng khối lượng lớn',
      description: 'Thu mua, tháo dỡ xác nhà xưởng, công trình cũ. Giá cao, thi công an toàn, dọn dẹp sạch sẽ.',
      image: './img/thumua2.jpg',
      keywords: ['nhà xưởng', 'nha xuong', 'xác nhà', 'tháo dỡ', 'công trình cũ']
    },
    {
      id: 'cong-trinh',
      title: 'Thu mua phế liệu công trình khối lượng lớn',
      description: 'Thu mua phế liệu từ các công trình xây dựng, cầu đường, hạ tầng. Thu mua số lượng lớn, giá tốt.',
      image: './img/thumua3.jpg',
      keywords: ['công trình', 'cong trinh', 'xây dựng', 'phế liệu công trình', 'cầu đường']
    },
    {
      id: 'may-moc',
      title: 'Thu mua phế liệu máy móc thanh lý giá cao',
      description: 'Thu mua máy móc cũ, thiết bị công nghiệp thanh lý. Giá cao nhất thị trường, thu mua tận nơi.',
      image: './img/sp13.jpg',
      keywords: ['máy móc', 'may moc', 'thanh lý', 'thiết bị', 'máy móc cũ', 'thiết bị công nghiệp']
    },
    {
      id: 'do-gia-dung',
      title: 'Thu mua đồ gia dụng hỏng',
      description: 'Thu mua đồ gia dụng cũ, hỏng: tủ lạnh, máy giặt, điều hòa, bếp gas. Giá cao, thu mua tận nhà.',
      image: './img/sp6.jpg',
      keywords: ['đồ gia dụng', 'do gia dung', 'tủ lạnh', 'máy giặt', 'điều hòa', 'đồ hỏng']
    },
    
    {
        id: 'thanhhoa',
        title: 'Thu Mua Phế Liệu Tại Thanh Hóa – Cường Hải',
        description: 'Công Ty TNHH Cường Hải chuyên thu mua phế liệu tại Thanh Hóa, giá cao, uy tín, phục vụ toàn tỉnh.',
        image: './img/sp1.jpg',
        keywords: ['phế liệu thanh hóa', 'thu mua phế liệu thanh hóa', 'cường hải', 'thu mua sắt đồng nhôm', 'phế liệu giá cao']
      },
      {
        id: 'hanoi',
        title: 'Thu mua phế liệu Hà Nội',
        description: 'Công Ty TNHH Cường Hải chuyên thu mua phế liệu tại Hà Nội với giá cao, uy tín, phục vụ tận nơi 24/7.',
        image: './img/sp9.jpg',
        keywords: ['phế liệu hà nội', 'thu mua phế liệu hà nội', 'giá phế liệu hà nội', 'cường hải hà nội', 'thu mua đồng nhôm sắt hà nội']
      },
      {
        id: 'danang',
        title: 'Thu mua phế liệu Đà Nẵng',
        description: 'Công Ty TNHH Cường Hải chuyên thu mua phế liệu tại Đà Nẵng với giá cao, uy tín, phục vụ tận nơi nhanh chóng.',
        image: './img/sp11.jpg',
        keywords: ['phế liệu đà nẵng', 'thu mua phế liệu đà nẵng', 'giá phế liệu đà nẵng', 'cường hải đà nẵng', 'thu mua đồng nhôm sắt đà nẵng']
      },
      {
        id: 'ninhbinh',
        title: 'Thu mua phế liệu Ninh Bình',
        description: 'Công Ty TNHH Cường Hải chuyên thu mua phế liệu tại Ninh Bình giá cao, uy tín, phục vụ tận nơi, thanh toán nhanh.',
        image: './img/sp10.jpg',
        keywords: ['phế liệu ninh bình', 'thu mua phế liệu ninh bình', 'giá phế liệu ninh bình', 'cường hải ninh bình', 'thu mua đồng nhôm sắt ninh bình']
      },
      
      
      
      
            
      
      
  ];
  
  function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim().toLowerCase();
  
    if (query === '') {
      return;
    }
  
    const results = products.filter(product => {
      return product.keywords.some(keyword => keyword.includes(query)) ||
             product.title.toLowerCase().includes(query) ||
             product.description.toLowerCase().includes(query);
    });
  
    displayResults(results, query);
  }
  
  function searchByKeyword(keyword) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = keyword;
    performSearch();
  }
  
  function displayResults(results, query) {
    const productsGrid = document.getElementById('productsGrid');
    const resultsHeader = document.getElementById('resultsHeader');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
  
    productsGrid.innerHTML = '';
  
    if (results.length === 0) {
      resultsHeader.style.display = 'none';
      noResults.style.display = 'block';
      return;
    }
  
    noResults.style.display = 'none';
    resultsHeader.style.display = 'block';
    resultsCount.textContent = `Tìm thấy ${results.length} kết quả cho "${query}"`;
  
    results.forEach(product => {
      const productCard = document.createElement('a');
      productCard.href = `chitiet.html?id=${product.id}`;
      productCard.className = 'product-card';
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-description">${product.description}</p>
          <span class="product-price">Liên hệ ngay</span>
        </div>
      `;
  
      productsGrid.appendChild(productCard);
    });
  }
  
  document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  
  window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('q');
  
    if (keyword) {
      document.getElementById('searchInput').value = keyword;
      performSearch();
    }
  };