

//단어 입력
function addWord(){
    axios({
        method: 'get',
        url:'https://opendict.korean.go.kr/api/search',
        params: {
            key : "CA34B42695DBE19DDC617C4277B77376",
            q :"나무",
            req_type : "json",
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