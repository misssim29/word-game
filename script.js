
function addWord(){
    fetch('https://krdict.korean.go.kr/api/search?key=E1269047A2AD9D16BB5CBEF9BA664EC9&q=나무&sort=dict', {
  method: 'GET',
  credentials: 'include', // CORS 정책 처리를 위해 credentials 설정
  headers: {
    'Access-Control-Allow-Origin': 'https://misssim29.github.io' // 허용할 출처 설정
  }
})
  .then(response => {
    if (response.ok) {
      // 응답이 성공인 경우 처리
      return response.json();
    } else {
      // 응답이 실패인 경우 오류 처리
      throw new Error('Error: ' + response.status);
    }
  })
  .then(data => {
    // 데이터 처리
    console.log(data);
  })
  .catch(error => {
    // 오류 처리
    console.error(error);
  });
}
