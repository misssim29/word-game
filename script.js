

//단어 입력
function addWord(){
    axios({
        method: 'get',
        url:'https://kauth.kakao.com/oauth/token',
        params: {
            "grant_type" : "authorization_code",
            "client_id" : "29e1cf04bde0d471d7acce5246a16d28",
            "redirect_url" : SITEURL+"index.html",
            "code" : kakaoCode
        },
        })
        .then(function (res) {
            console.log(red);
        })
        .catch(function (error) {
            console.log(error);
    });
}