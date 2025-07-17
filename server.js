const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Bước 4: Sử dụng middleware CORS
app.use(cors()); // Cho phép tất cả các nguồn

// Hoặc bạn có thể chỉ định nguồn cụ thể
// app.use(cors({ origin: 'http://example.com' }));

// Tạo một endpoint mẫu
app.get('/api', (req, res) => {
    res.json({ message: 'Hello World' });
});

// Bắt đầu server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});