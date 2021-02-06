var pronouns = [];
var history = '';
var conjugation = false;
var adjectives = false;
var pre_post_postions = false;
var sentence_structure = false;

function ph() {
    var ph_val = document.getElementById('phonetics').value;

    if (ph_val == 'ol') {
        sessionStorage.setItem("vowels", "'i', 'ĩ', 'iː', 'ĩː', 'y', 'ỹ', 'yː', 'ỹː', '', '', 'u', 'ũ', 'uː', 'ũː', '\n','e', 'ẽ', 'eː', 'ẽː', 'ø', 'ø̃ ', 'øː', 'ø̃ː', '', '', 'o', 'õ', 'oː', 'õː', '\n', 'ɛ', 'ɛ̃', 'ɛː', 'ɛ̃ː', 'œ', 'œ̃', '', 'a', 'ã', 'aː', 'ãː', 'ɔ', 'ɔ̃', 'ɔː', 'ɔ̃ː'");
        sessionStorage.setItem("consonants", "'i','iː','y','yː',',','u','uː','\n','e','eː','ø','øː','','','o','oː','\n','ɛ','ɛː','','','a','aː','',''");
        window.location.href = "pronouns.html";
    }
    else if (ph_val == 'en') {
        sessionStorage.setItem("vowels", "'ɪ','iː','ʊ','uː','','ɔː','\n','e','eə','ə','ɜː','ɒ','','\n','æ','','ʌ','','','ɑː','\n','eɪ','aɪ','ɔɪ','aʊ','əʊ','ɪə','ʊə','\n','(eɪə','aɪə','ɔɪə','aʊə','əʊə)'");
        sessionStorage.setItem("consonants", "'m','','n','','','ŋ','','\n','p','','t','tʃ','','k','','\n','b','','d','dʒ','','g','','\n','f','θ','s','ʃ','','x','h','\n','v','ð','z','ʒ','','','h','\n','','','l','r','j','w',''");
        window.location.href = "pronouns.html";
    }
    else if (ph_val == 'sp') {
        sessionStorage.setItem("vowels", "'i','','u','\n','e','','o','\n','','a',''");
        sessionStorage.setItem("consonants", "'m','','n','ɲ','','\n','p','b','t','d','','tʃ','ʝ','k','g','\n','f','b','θ','d','s','(ʃ)','ʝ','x','g','\n','','','l','ʎ','','\n','','','ɾ','','','\n','','','r','',''");
        window.location.href = "pronouns.html";
    }
    else {
        alert('Please select a valid option.')
    }
}

function pr() {
    var pr_val = document.getElementById('pr_input').value;

    document.getElementById('pr_input').value = "";

    var para = document.createElement("P");
    var input = document.createElement("INPUT");
    var br = document.createElement("BR");
    var placehold = "ph";

    pronouns.push([pr_val,placehold]);

    input.type = "text";
    var id = get_unnused(pronouns);
    input.id = id;

    para.style = "display: inline-block";
    input.style = "display: inline-block; border-top: none; border-left: none; border-right: none; font-family: 'IM FELL DW Pica'; border-radius: 0px; letter-spacing: 1px; font-size: 15px; position: relative; left: 1%";

    input.innerHtml = '';
    para.innerHTML = pr_val;

    document.getElementById("main").appendChild(para);
    document.getElementById("main").appendChild(input);
    document.getElementById("main").appendChild(br);

    sessionStorage.setItem('pronouns', pronouns);
}

function pr_submit() {
    var pr = sessionStorage.getItem('pronouns');
    for (var i = 1; i < pr.length; i++) {
        var el = document.getElementById(i).value;
        alert(el);
        pr[i][1] = el;
        alert(pr);
        sessionStorage.setItem('pronouns', pr);
    }
}

function get_unnused(arr) {
    for (i = 0; i < Infinity; i++) {
        if (arr[i] === undefined) {
            return(i)
        }
    }
}