

//단어 입력
function addWord(){
    axios({
        method: 'get',
        url:'https://krdict.korean.go.kr/api/search',
        params: {
            key : "E1269047A2AD9D16BB5CBEF9BA664EC9",
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