var history = '';
var phonetics_v = [];
var phonetcs_c = [];
var pronouns = [];
var conjugation = false;
var adjectives = false;
var pre_post_postions = false;
var sentence_structure = false;

function ph() {
    var ph_val = document.getElementById('phonetics').value;
    if (ph_val == 'ol') {
        v = ['i', 'ĩ', 'iː', 'ĩː', 'y', 'ỹ', 'yː', 'ỹː', '', '', 'u', 'ũ', 'uː', 'ũː', '\n','e', 'ẽ', 'eː', 'ẽː', 'ø', 'ø̃ ', 'øː', 'ø̃ː', '', '', 'o', 'õ', 'oː', 'õː', '\n', 'ɛ', 'ɛ̃', 'ɛː', 'ɛ̃ː', 'œ', 'œ̃', '', 'a', 'ã', 'aː', 'ãː', 'ɔ', 'ɔ̃', 'ɔː', 'ɔ̃ː'];
        c = ['i','iː','y','yː',',','u','uː','\n','e','eː','ø','øː','','','o','oː','\n','ɛ','ɛː','','','a','aː','',''];
        window.location.href = "pronouns.html";
    }else if (ph_val == 'en') {
        v = ['ɪ','iː','ʊ','uː','','ɔː','\n','e','eə','ə','ɜː','ɒ','','\n','æ','','ʌ','','','ɑː','\n','eɪ','aɪ','ɔɪ','aʊ','əʊ','ɪə','ʊə','\n','(eɪə','aɪə','ɔɪə','aʊə','əʊə)'];
        c = ['m','','n','','','ŋ','','\n','p','','t','tʃ','','k','','\n','b','','d','dʒ','','g','','\n','f','θ','s','ʃ','','x','h','\n','v','ð','z','ʒ','','','h','\n','','','l','r','j','w',''];
        window.location.href = "pronouns.html";
    }else if (ph_val == 'sp') {
        v = ['i','','u','\n','e','','o','\n','','a',''];
        c = ['m','','n','ɲ','','\n','p','b','t','d','','tʃ','ʝ','k','g','\n','f','b','θ','d','s','(ʃ)','ʝ','x','g','\n','','','l','ʎ','','\n','','','ɾ','','','\n','','','r','',''];
        window.location.href = "pronouns.html";
    }else {
        v = [];
        c = [];
        alert('Please select a valid option.')
    }
    phonetics_v = v;
    phonetics_c = c;
}

function pr() {
    var pr_val = document.getElementById('pronouns').value;
    pronouns.push([pr_val]['']);
    var para = document.createElement("P");
    var input = document.createElement("INPUT");
    var br = document.createElement("BR");
    input.type = "text";
    input.id = String(get_unnused(pronouns));
    para.style = "display: inline-block";
    input.style = "display: inline-block; border-top: none; border-left: none; border-right: none; font-family: 'IM FELL DW Pica'; border-radius: 0px; letter-spacing: 1px; font-size: 15px; position: relative; left: 1%";
    input.innerHtml = "";
    para.innerHTML = pr_val + ' ';
    document.getElementById("main").appendChild(para);
    document.getElementById("main").appendChild(input);
    document.getElementById("main").appendChild(br);
    alert(pronouns.length);
}

function pr_submit() {
    for (i = 0; i < pronouns.length; i++) {
        alert(i);
        var el = document.getElementById(i).value;
        pronouns[i][1] = String(el);
    }
    alert(pronouns);
}

function get_unnused(arr) {
    for (i = 0; i > 0; i++) {
        if (arr[i][0] == undefined) {
            return i;
        }
    }
}