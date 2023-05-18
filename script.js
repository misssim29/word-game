

//단어 입력
function addWord(){
    axios({
        method: 'get',
        url:'https://stdict.korean.go.kr/api/search.do',
        params: {
            key : "9311B28987B0F92D920BE18F75AD1D2D",
            q :"나무",
            req_type : "json",
            sort : "dict"
        },
        withCredentials : true,
        headers:{
            'Access-Control-Allow-Origin': 'https://misssim29.github.io'
        }
        })
        .then(function (res) {
            console.log(red);
        })
        .catch(function (error) {
            console.log(error);
    });
}