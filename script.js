

//단어 입력
function addWord(){
    axios({
        method: 'get',
        url:'https://opendict.korean.go.kr/api/search',
        params: {
            key : "7C2ADF260104EE196F0AF53D1BCE90ED",
            q :"나무",
            sort : "dict"
        },
        })
        .then(function (res) {
            console.log(red);
        })
        .catch(function (error) {
            console.log(error);
    });
}