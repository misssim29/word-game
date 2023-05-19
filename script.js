let lastWord = '';
let wordList = [];

//단어 입력
function addWord(){
    let InputTxt = document.getElementById('TxtWord').value;
    wordCheck(InputTxt);
}

// 단어체크
function wordCheck(InputTxt){
    const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g; 
    if(!regExp.test(InputTxt)){
        alert("한글로 입력해주세요.");
        return false;
    }
    if(lastWord != '' && lastWord != InputTxt.slice(0,1)){
        alert("시작단어를 다시 확인해주세요.");
    } else{
        if(wordList.includes(InputTxt)){
            alert("이미 사용된 단어입니다.");
            return false;
        }
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
                method : "exact",
                type1 : "word",
                type3 : "general",
                pos : 1,
                letter_s : 2,
                letter_e : 4,
            }
            })
            .then(function (res) {
                if(res.data.channel == undefined){
                    alert("결과값이 없습니다.");
                    return false;
                } else{
                    wordList.push(InputTxt);
                    createWord(InputTxt);
                }
            })
            .catch(function (error) {
                console.log(error);
        });
    }
}

//단어 생성
function createWord(InputTxt){
    let InputTxtLast = InputTxt.slice(-1);
    const result = document.getElementById('TxtResult');
    axios({
        method: 'get',
        url:'https://cors-anywhere.herokuapp.com/https://stdict.korean.go.kr/api/search.do',
        params: {
            key : "9311B28987B0F92D920BE18F75AD1D2D",
            q :InputTxtLast,
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
            let Rand = Math.floor(Math.random() * 10);
            let Txt;
            if(res.data.channel == undefined){
                alert("승리!");
            } else{
                if(res.data.channel.item.length < 10){
                    Txt = res.data.channel.item[0].word;
                    Rand = 0;
                } else{
                    Txt = res.data.channel.item[Rand].word;
                }
                Txt = Txt.replace("-","");
                if(wordList.includes(Txt)){
                    if(res.data.channel.item.length > 1){
                        Txt = res.data.channel.item[Rand+1].word;
                        if(wordList.includes(Txt)){
                            alert("승리!");
                        }
                    } else{
                        alert("승리!");
                    }
                }
                lastWord = Txt.slice(-1);
                wordList.push(Txt);
                result.innerText = Txt;
                console.log(wordList);
            }
        })
        .catch(function (error) {
            console.log(error);
    });
}
function addEnter(event){
    if(event.key === 'Enter'){
        addWord();
    }
}

function retry(){
    location.reload();
}
