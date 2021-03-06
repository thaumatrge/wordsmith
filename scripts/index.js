var darkmode = Boolean(sessionStorage.getItem('darkmode'));
console.log(darkmode)

var pronouns = [];
var t_pronouns = [];

var conjugation = false;
var conjugation_groups = [];
var t_conjugations = [];

var adjective_groups = [];

if (darkmode == true) {
	document.getElementById('document').classList.add("dark");
}else if (darkmode == false){
	document.getElementById('document').classList.remove("dark");
}

function dark() {
	var element = document.getElementById('document');
	element.classList.toggle("dark");
	let darkmode = true;
	sessionStorage.setItem('darkmode', JSON.stringify(darkmode));
}

function get_unnused(arr) {
    for (i = 0; i < Infinity; i++) {
        if (arr[i] === undefined) {
            return(i)
        }
    }
}

function ph() {
    var ph_val = document.getElementById('phonetics').value;

    if (ph_val == 'ol') {
        sessionStorage.setItem("vowels", "'i', 'ĩ', 'iː', 'ĩː', 'y', 'ỹ', 'yː', 'ỹː', '', '', 'u', 'ũ', 'uː', 'ũː', '\n','e', 'ẽ', 'eː', 'ẽː', 'ø', 'ø̃ ', 'øː', 'ø̃ː', '', '', 'o', 'õ', 'oː', 'õː', '\n', 'ɛ', 'ɛ̃', 'ɛː', 'ɛ̃ː', 'œ', 'œ̃', '', 'a', 'ã', 'aː', 'ãː', 'ɔ', 'ɔ̃', 'ɔː', 'ɔ̃ː'");
        sessionStorage.setItem("consonants", "'i','iː','y','yː',',','u','uː','\n','e','eː','ø','øː','','','o','oː','\n','ɛ','ɛː','','','a','aː','',''");
        window.location.href = "../pages/pronouns.html";
    }
    else if (ph_val == 'en') {
        sessionStorage.setItem("vowels", "'ɪ','iː','ʊ','uː','','ɔː','\n','e','eə','ə','ɜː','ɒ','','\n','æ','','ʌ','','','ɑː','\n','eɪ','aɪ','ɔɪ','aʊ','əʊ','ɪə','ʊə','\n','(eɪə','aɪə','ɔɪə','aʊə','əʊə)'");
        sessionStorage.setItem("consonants", "'m','','n','','','ŋ','','\n','p','','t','tʃ','','k','','\n','b','','d','dʒ','','g','','\n','f','θ','s','ʃ','','x','h','\n','v','ð','z','ʒ','','','h','\n','','','l','r','j','w',''");
        window.location.href = "../pages/pronouns.html";
    }
    else if (ph_val == 'sp') {
        sessionStorage.setItem("vowels", "'i','','u','\n','e','','o','\n','','a',''");
        sessionStorage.setItem("consonants", "'m','','n','ɲ','','\n','p','b','t','d','','tʃ','ʝ','k','g','\n','f','b','θ','d','s','(ʃ)','ʝ','x','g','\n','','','l','ʎ','','\n','','','ɾ','','','\n','','','r','',''");
        window.location.href = "../pages/pronouns.html";
    }
    else {
        alert('Please select a valid option.')
    }
}

function get(input, get_type, pushto, set, setto, get) {
	if (get_type == 1) {
		var val = document.getElementById(input).value;
		document.getElementById(input).value = "";

		var para = document.createElement("P");
		var inp = document.createElement("INPUT");
		var br = document.createElement("BR");

		pushto.push(val);
		id = "arr_" + get_unnused(pushto);

		inp.type = "text";
		inp.id = id;

		para.style = "display: inline-block";
		inp.style = "display: inline-block; border-top: none; border-left: none; border-right: none; font-family: 'IM FELL DW Pica'; border-radius: 0px; letter-spacing: 1px; font-size: 15px; position: relative; left: 1%";
		para.innerText = val;

		document.getElementById("main").appendChild(para);
		document.getElementById("main").appendChild(inp);
		document.getElementById("main").appendChild(br);

		sessionStorage.setItem(set, setto);
	}
	else if (get_type == 2) {
		get = sessionStorage.getItem(get);
		get = get.split(",");

		var val = document.getElementById(input).value;
		document.getElementById(input).value = "";

		var para = document.createElement("P");
		var inp = document.createElement("INPUT");
		var br = document.createElement("BR");
		var t = document.createElement("P");

		pushto.push(val);

		t.style="font-family: 'IM FELL DW Pica'; letter-spacing: 1px; font-size: 18px; text-align: center";
		t.innerHTML = val;

		document.getElementById("main").appendChild(t);

		for (var i = 0; i < get.length; i++) {
			var para = document.createElement("P");
			var br = document.createElement("BR");
			var inp = document.createElement("INPUT");

			inp.style = "display: inline-block; border-top: none; border-left: none; border-right: none; font-family: 'IM FELL DW Pica'; border-radius: 0px; letter-spacing: 1px; font-size: 15px; position: relative; left: 1%";
			para.style = "display: inline-block";
			para.innerHTML = get[i];

			var id = "arr_" + i;

			inp.type = "text";
			inp.id = id;

			document.getElementById("main").appendChild(para);
			document.getElementById("main").appendChild(inp);
			document.getElementById("main").appendChild(br);
		}
	sessionStorage.setItem(set, setto);
	}
}

function submit(type, get, pushto, set, setto, go_to, get2) {
	alert(pronouns)
	if (type == 1) {
		get = sessionStorage.getItem(get);
		get = get.split(",");
		for (var i = 1; i < get.length; i++) {
			var id = "arr_" + i;
			var el = document.getElementById(id).value;
			pushto.push(el);
			sessionStorage.setItem(set, setto);
		}
		sessionStorage.setItem(set, setto)
	}
	else if (type == 2) {
		var one = sessionStorage.getItem(get);
		var two = sessionStorage.getItem(get2);
		one = one.split(",");
		two = two.split(",");
		for (var i = 0; i < one.length; i++) {
			for (var j = 0; j < two.length; j++) {
				var id = "arr_"+j;
				var el = document.getElementById(id).value;
				pushto.push(el);
				sessionStorage.setItem(set, setto);
			}
		}
	}
	console.log('../pages/'+go_to);
	window.location.href = "../pages/"+go_to;
}

function sen_submit() {
	// Sentence structure
	var sen = document.getElementById("sen").value;	
	var lockone = false;
	var locktwo = false;
	var locktwo1 = false;
	var locktwo2 = false;
	var locktwo3 = false;
	var valid = false;
	senarr = sen.split('')
	senlen = senarr.length;
	if (senarr.length == 3) {
		lockone = true;
	}
	for (var i = 0; i < senarr.length; i++) {
		if (senarr[i] == 'V') {
			locktwo1 = true;
		}else if (senarr[i] == 'S') {
			locktwo2 = true;
		}else if (senarr[i] == 'O') {
			locktwo3 = true;
		}
	}
	if (locktwo1 == true && locktwo2 == true && locktwo3 == true) {
		locktwo = true;
	}
	if (lockone == true && locktwo == true) {
		valid = true;	
	}
	if (valid == true) {
		sessionStorage.setItem('sentence_structure', sen);
	}else {
		alert('A valid sentence structure has to be three characters long and include the letters S, V and O.')
	}
	// Adjectives
	var adj = document.getElementById('adj').checked;
	sessionStorage.setItem('adj', adj);
	//Pre/Postpositions
	var prepost = document.getElementById('pos').checked;
	sessionStorage.setItem('prepost', prepost);
	window.location.href = "adjectives.html"
}

function adj() {
	var adj_val = document.getElementById('adj_input').value;
	document.getElementById('adj_input').value = "";

	var para = document.createElement("P");
	var input = document.createElement("INPUT");
	var br = document.createElement("BR");

	input.style = "display: inline-block; border-top: none; border-left: none; border-right: none; font-family: 'IM FELL DW Pica'; border-radius: 0px; letter-spacing: 1px; font-size: 15px; position: relative; left: 1%";
        para.style = "display: inline-block";
	adjective_groups.push(adj_val);
	para.innerHTML = adj_val;
	input.placeholder = "Adj. group rules";

	document.getElementById('main').appendChild(para);
	document.getElementById('main').appendChild(input);
	document.getElementById('main').appendChild(br);

	sessionStorage.setItem('adjective_groups', adjective_groups);
}
