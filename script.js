let userName = "";

function mulaiGame() {
    let input = document.getElementById("namaInput").value.trim();
    if (input === "") {
        alert("Silakan masukkan nama dulu.");
        return;
    }

    userName = input;
    document.getElementById("start-screen").style.display = "none";
    document.querySelector(".container").style.display = "block";
    showQuestion();
}

let soal = [
    "وَمَآ اَنْزَلْنَا عَلٰى قَوْمِهٖ مِنْۢ بَعْدِهٖ مِنْ جُنْدٍ مِّنَ السَّمَاۤءِ وَمَا كُنَّا مُنْزِلِيْنَ",
    "وَيَقُوْلُوْنَ مَتٰى هٰذَا الْوَعْدُ اِنْ كُنْتُمْ صٰدِقِيْنَ",
    "قَالُوْا يٰوَيْلَنَا مَنْۢ بَعَثَنَا مِنْ مَّرْقَدِنَا ۜهٰذَا مَا وَعَدَ الرَّحْمٰنُ وَصَدَقَ الْمُرْسَلُوْنَ",
    "وَمَا تُجۡزَوۡنَ اِلَّا مَا كُنۡتُمۡ تَعۡمَلُوۡنَۙ ",
    "وَاَقْبَلَ بَعْضُهُمْ عَلٰى بَعْضٍ يَّتَسَاۤءَلُوْنَ",
    "وَعَجِبُوْٓا اَنْ جَاۤءَهُمْ مُّنْذِرٌ مِّنْهُمْ",
    "أَءُنۡزِلَ عَلَيۡهِ الذِّكۡرُ مِنۡۢ بَيۡنِنَا​",
    "رَبُّ السَّمٰوٰتِ وَالۡاَرۡضِ وَمَا بَيۡنَهُمَا",
    "مَا لَكُمْ كَيْفَ تَحْكُمُوْنَ",
    "قُلْ مَآ اَسْـَٔلُكُمْ عَلَيْهِ مِنْ اَجْرٍ"
];

let pilihan = [
    ["اِنْ كَانَتْ اِلَّا صَيْحَةً وَّاحِدَةً فَاِذَا هُمْ جَمِيْعٌ لَّدَيْنَا مُحْضَرُوْنَ", "اِنْ كَانَتْ اِلَّا صَيْحَةً وَّاحِدَةً فَاِذَا هُمْ خٰمِدُوْنَ"],
    ["قُلْ اِنَّمَا الْعِلْمُ عِنْدَ اللّٰهِ ۖوَاِنَّمَآ اَنَا۠ نَذِيْرٌ مُّبِيْنٌ","قُلْ لَّكُمْ مِّيْعَادُ يَوْمٍ لَّا تَسْتَأْخِرُوْنَ عَنْهُ سَاعَةً وَّلَا تَسْتَقْدِمُوْنَ ", "مَا يَنْظُرُوْنَ اِلَّا صَيْحَةً وَّاحِدَةً تَأْخُذُهُمْ وَهُمْ يَخِصِّمُوْنَ"],
    ["اِنْ كَانَتْ اِلَّا صَيْحَةً وَّاحِدَةً فَاِذَا هُمْ جَمِيْعٌ لَّدَيْنَا مُحْضَرُوْنَ", "اِنْ كَانَتْ اِلَّا صَيْحَةً وَّاحِدَةً فَاِذَا هُمْ خٰمِدُوْنَ"],
    ["اِلَّا عِبَادَ اللّٰهِ الۡمُخۡلَصِيۡنَ.وَتَرَكۡنَا عَلَيۡهِ فِى الۡاٰخِرِيۡنَ","اِلَّا عِبَادَ اللّٰهِ الۡمُخۡلَصِيۡنَ.اُولٰٓٮِٕكَ لَهُمۡ رِزۡقٌ مَّعۡلُوۡمٌ","اِلَّا عِبَادَ اللّٰهِ الۡمُخۡلَصِيۡنَ.فَاِنَّكُمۡ وَمَا تَعۡبُدُوۡنَ"],
    ["قَالُوْٓا اِنَّكُمْ كُنْتُمْ تَأْتُوْنَنَا عَنِ الْيَمِيْنِ","قَالَ قَاۤىِٕلٌ مِّنْهُمْ اِنِّيْ كَانَ لِيْ قَرِيْنٌ","قَالُـوۡۤا اِنَّا كُـنَّا قَبۡلُ فِىۡۤ اَهۡلِنَا مُشۡفِقِيۡنَ"],
    ["وَقَالَ الْكٰفِرُوْنَ هٰذَا سٰحِرٌ كَذَّابٌۚ","فَقَالَ الْكٰفِرُوْنَ هٰذَا شَيْءٌ عَجِيْبٌ"],
    ["بَلۡ هُوَ كَذَّابٌ اَشِرٌ","بَلْ هُمْ فِيْ شَكٍّ مِّنْ ذِكْرِيْۚ بَلْ لَّمَّا يَذُوْقُوْا عَذَابِ"],
    ["فَاعۡبُدۡهُ وَاصۡطَبِرۡ لِـعِبَادَتِهٖ​ؕ هَلۡ تَعۡلَمُ لَهٗ سَمِيًّا","الۡعَزِيۡزُ الۡغَفَّارُ","اِنۡ كُنۡتُمۡ مُّوۡقِنِيۡنَ"],
    ["اَفَلَا تَذَكَّرُوْنَۚ","اَمْ لَكُمْ كِتٰبٌ فِيْهِ تَدْرُسُوْنَ"],
    [" اِلَّا مَنْ شَاۤءَ اَنْ يَّتَّخِذَ اِلٰى رَبِّهٖ سَبِيْلًا","وَّمَآ اَنَا۠ مِنَ الْمُتَكَلِّفِيْنَ"],
];

let jawaban = ["اِنْ كَانَتْ اِلَّا صَيْحَةً وَّاحِدَةً فَاِذَا هُمْ خٰمِدُوْنَ",
     "مَا يَنْظُرُوْنَ اِلَّا صَيْحَةً وَّاحِدَةً تَأْخُذُهُمْ وَهُمْ يَخِصِّمُوْنَ", 
     "اِنْ كَانَتْ اِلَّا صَيْحَةً وَّاحِدَةً فَاِذَا هُمْ جَمِيْعٌ لَّدَيْنَا مُحْضَرُوْنَ",
     "اِلَّا عِبَادَ اللّٰهِ الۡمُخۡلَصِيۡنَ.اُولٰٓٮِٕكَ لَهُمۡ رِزۡقٌ مَّعۡلُوۡمٌ",
     "قَالُوْٓا اِنَّكُمْ كُنْتُمْ تَأْتُوْنَنَا عَنِ الْيَمِيْنِ",
     "وَقَالَ الْكٰفِرُوْنَ هٰذَا سٰحِرٌ كَذَّابٌۚ",
     "بَلْ هُمْ فِيْ شَكٍّ مِّنْ ذِكْرِيْۚ بَلْ لَّمَّا يَذُوْقُوْا عَذَابِ",
     "الۡعَزِيۡزُ الۡغَفَّارُ",
     "اَفَلَا تَذَكَّرُوْنَۚ",
     "وَّمَآ اَنَا۠ مِنَ الْمُتَكَلِّفِيْنَ"
];

let index = 0;
let score = 0;

let soalEl = document.getElementById("soal");
let pilihanEl = document.getElementById("pilihan");
let hasilEl = document.getElementById("hasil");
let nextBtn = document.getElementById("next");

function showQuestion() {
    soalEl.textContent = soal[index];
    pilihanEl.innerHTML = "";
    hasilEl.textContent = "";
    nextBtn.style.display = "none";

    for (let i = 0; i < pilihan[index].length; i++) {
        let btn = document.createElement("button");
        btn.textContent = pilihan[index][i];
        btn.onclick = function(){
            checkAnswer(this.textContent,this);
        };
        pilihanEl.appendChild(btn);
    }
}

function checkAnswer(answer,buttonClicked) {
    let correct = jawaban[index];

    if (answer === correct) {
        hasilEl.textContent = "Mumtaazz !!";
        hasilEl.style.color = "green";
        score++;
        buttonClicked.style.backgroundColor = "lightgreen";
    } else {
        hasilEl.textContent = "Salah !!";
        hasilEl.style.color = "red";
        buttonClicked.style.backgroundColor = "#ffaaaa"
    }
    // nonaktifkan semua tombol

    let allButtons = pilihanEl.getElementsByTagName("button");
for (let i = 0; i < allButtons.length; i++){
    allButtons[i].disabled = true;
    if (allButtons[i].textContent === correct){
    allButtons[i].style.backgroundColor = "lightgreen";
    }
}


nextBtn.style.display = "inline-block";
}

function nextQuestion() {
    index++;
    if (index < soal.length) {
        showQuestion();
    } else {
    soalEl.textContent = "Tes Juz 23 Selesai";
    pilihanEl.innerHTML = "";
    hasilEl.textContent = `${userName}, Nilai kamu: ${score * 10}, Barakallahu fiikum.
    Semangat terus murojaahnya`;
    hasilEl.style.color = "black";
    nextBtn.style.display = "none";

    // Simpan skor ke localStorage
    localStorage.setItem("skor_" + userName, score * 10);
}
}
showQuestion();