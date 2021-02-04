let history = '';
let phonetics_v = [];
let phonetcs_c = [];
let pronouns = [];
let conjugation = false;
let adjectives = false;
let pre_post_postions = false;
let sentence_structure = false;

var ph_pick = document.getElementById('ph');
ph_pick.onclick = ph();

function ph() {
    var ph = document.getElementById('phonetics');
    var ph_val = ph.value;
    if (ph_val == 'ol') {
        phonetics_v = ['i', 'ĩ', 'iː', 'ĩː', 'y', 'ỹ', 'yː', 'ỹː', '', '', 'u', 'ũ', 'uː', 'ũː', '\n','e', 'ẽ', 'eː', 'ẽː', 'ø', 'ø̃ ', 'øː', 'ø̃ː', '', '', 'o', 'õ', 'oː', 'õː', '\n', 'ɛ', 'ɛ̃', 'ɛː', 'ɛ̃ː', 'œ', 'œ̃', '', 'a', 'ã', 'aː', 'ãː', 'ɔ', 'ɔ̃', 'ɔː', 'ɔ̃ː'];
        phonetics_c = ['i','iː','y','yː',',','u','uː','\n','e','eː','ø','øː','','','o','oː','\n','ɛ','ɛː','','','a','aː','',''];
    }
    else if (ph_val == 'en') {
        phonetics = 'ol';
    }
    else if (ph_val == 'sp') {
        phonetics = 'ol';
    }
    else if (ph_val == 'fr') {

    }
}