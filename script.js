import axios from 'axios';

//단어 입력
function addWord(){
    fetchData();
}


const fetchData = async () => {
    try {
      const response = await axios.get('https://opendict.korean.go.kr/api/search', {
        params: {
          key: 'CA34B42695DBE19DDC617C4277B77376 ',
          q: '나무',
          sort: 'dict',
          req_type : 'json',
        },
        withCredentials: true, // CORS 정책 처리를 위해 withCredentials 설정
        headers: {
          'Access-Control-Allow-Origin': 'https://misssim29.github.io' // 허용할 출처 설정
        }
      });
  
      // 데이터 처리
      console.log(response.data);
    } catch (error) {
      // 오류 처리
      console.error(error);
    }
  };
  
