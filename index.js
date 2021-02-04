let history = '';
let phonetics_v = [];
let phonetcs_c = [];
let pronouns = [];
let conjugation = false;
let adjectives = false;
let pre_post_postions = false;
let sentence_structure = false;

function ph() {
    var ph = document.getElementById('phonetics');
    var ph_val = ph.value;
    if (ph_val == 'ol') {
        phonetics_v = ['i', 'ĩ', 'iː', 'ĩː', 'y', 'ỹ', 'yː', 'ỹː', '', '', 'u', 'ũ', 'uː', 'ũː', '\n','e', 'ẽ', 'eː', 'ẽː', 'ø', 'ø̃ ', 'øː', 'ø̃ː', '', '', 'o', 'õ', 'oː', 'õː', '\n', 'ɛ', 'ɛ̃', 'ɛː', 'ɛ̃ː', 'œ', 'œ̃', '', 'a', 'ã', 'aː', 'ãː', 'ɔ', 'ɔ̃', 'ɔː', 'ɔ̃ː'];
        phonetics_c = ['i','iː','y','yː',',','u','uː','\n','e','eː','ø','øː','','','o','oː','\n','ɛ','ɛː','','','a','aː','',''];
        window.location.href = "pronouns.html";
    }else if (ph_val == 'en') {
        phonetics_v = ['ɪ','iː','ʊ','uː','','ɔː','\n','e','eə','ə','ɜː','ɒ','','\n','æ','','ʌ','','','ɑː','\n','eɪ','aɪ','ɔɪ','aʊ','əʊ','ɪə','ʊə','\n','(eɪə','aɪə','ɔɪə','aʊə','əʊə)'];
        phonetics_c = ['m','','n','','','ŋ','','\n','p','','t','tʃ','','k','','\n','b','','d','dʒ','','g','','\n','f','θ','s','ʃ','','x','h','\n','v','ð','z','ʒ','','','h','\n','','','l','r','j','w',''];
        window.location.href = "pronouns.html";
    }else if (ph_val == 'sp') {
        phonetics_v = ['i','','u','\n','e','','o','\n','','a',''];
        phonetics_c = ['m','','n','ɲ','','\n','p','b','t','d','','tʃ','ʝ','k','g','\n','f','b','θ','d','s','(ʃ)','ʝ','x','g','\n','','','l','ʎ','','\n','','','ɾ','','','\n','','','r','',''];
        window.location.href = "pronouns.html";
    }else {
        phonetics_v = [];
        phonetics_c = [];
        alert('Please select a valid option.')
    }
}

function pr() {
    alert('big man');
    var pr = document.getElementById('pronouns');
    var pr_val = pr.value();
    alert('large man');
}