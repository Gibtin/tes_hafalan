let userName = "";
let index = 0;
let score = 0;

let soalEl = document.getElementById("soal");
let pilihanEl = document.getElementById("pilihan");
let hasilEl = document.getElementById("hasil");
let nextBtn = document.getElementById("next");

// Fungsi dijalankan saat user klik "Mulai"
function mulaiGame() {
  const input = document.getElementById("namaInput").value.trim();
  if (input === "") {
    alert("Masukkan nama dulu");
    return;
  }

  userName = input;
  document.getElementById("start-screen").style.display = "none";
  document.querySelector(".container").style.display = "block";

  // tampilkan soal pertama
  showQuestion();
}

function showQuestion() {
  soalEl.textContent = soal[index];
  pilihanEl.innerHTML = "";
  hasilEl.textContent = "";
  nextBtn.style.display = "none";

  pilihan[index].forEach(jawab => {
    const btn = document.createElement("button");
    btn.textContent = jawab;
    btn.onclick = () => checkAnswer(jawab, btn);
    pilihanEl.appendChild(btn);
  });
}

function checkAnswer(answer, btn) {
  const correct = jawaban[index];
  if (answer === correct) {
    hasilEl.textContent = "Mumtaaz!";
    hasilEl.style.color = "green";
    btn.style.backgroundColor = "lightgreen";
    score++;
  } else {
    hasilEl.textContent = "Salah!";
    hasilEl.style.color = "red";
    btn.style.backgroundColor = "#ffaaaa";
  }

  // Nonaktifkan semua tombol
  document.querySelectorAll("#pilihan button").forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) {
      b.style.backgroundColor = "lightgreen";
    }
  });

  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  index++;
  if (index < soal.length) {
    showQuestion();
  } else {
    soalEl.textContent = "Tes Selesai!";
    pilihanEl.innerHTML = "";
    hasilEl.innerHTML = `${userName}, nilai kamu: <strong>${score * 10}</strong><br>Barakallahu fiikum!`;
    hasilEl.style.color = "black";
    nextBtn.style.display = "none";
  }
}