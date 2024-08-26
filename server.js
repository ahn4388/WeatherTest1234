const express = require('express');
const request = require('request');
const cors = require('cors');  // CORS 패키지 추가

const app = express();
const port = 3000;

app.use(cors());  // CORS 미들웨어 추가

app.get('/weather', (req, res) => {
    const apiUrl = 'https://apihub.kma.go.kr/api/typ02/openApi/VilageFcstInfoService_2.0/getUltraSrtNcst?pageNo=1&numOfRows=1000&dataType=XML&base_date=20240826&base_time=0600&nx=55&ny=127&authKey=bk3BjbGWRpmNwY2xljaZNg';
    
    request(apiUrl).pipe(res);
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
