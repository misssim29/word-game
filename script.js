//단어 입력
function addWord(){
    const result = document.getElementById('TxtResult');
    let InputTxt = document.getElementById('TxtWord').value.slice(-1);
    let StartRand = Math.floor(Math.random() * 10);
    axios({
        method: 'get',
        url:'https://cors-anywhere.herokuapp.com/https://stdict.korean.go.kr/api/search.do',
        params: {
            key : "9311B28987B0F92D920BE18F75AD1D2D",
            q :InputTxt,
            req_type : "json",
            part : "word",
            start : 1,
            sort : "dict",
            advanced : "y",
            method : "start",
            type1 : "word",
            type3 : "general",
            pos : 1,
            letter_s : 2,
            letter_e : 4,
        }
        })
        .then(function (res) {
            let array = res.data.channel.item;
            console.log(res.data);
            array.forEach(element => {
                if(!element.word.includes("-")){
                    result.innerText = element.word;
                    return false;
                }
            });
        })
        .catch(function (error) {
            console.log(error);
    });
}

