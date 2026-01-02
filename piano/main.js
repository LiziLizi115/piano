const keys = document.querySelectorAll(".key");
const key2 = document.querySelectorAll(".key_2");
let keyInstruction = ["Do", "re", "mi", "fa", "so", "la", "si"];
let key2Insturctior = ["Do-Re", "Re-Mi", "Fa-So", "So-La", "La-Si", "Si-Do"];

key2.forEach((key, index) => {
  key.addEventListener("click", () => {
    let audio = new Audio("/notes/" + key2Insturctior[index] + ".mp3");
    audio.play();
  });
});
keys.forEach((key, index) => {
  key.addEventListener("click", () => {
    let audio = new Audio("/notes/" + keyInstruction[index] + ".mp3");
    audio.play();
  });

  document.addEventListener("keydown", (e) => {
    let keyInstruction2 = {
      q: "do",
      w: "re",
      e: "mi",
      r: "fa",
      t: "so",
      y: "la",
      u: "si",
      i: "Do-Re",
      o: "Re-Mi",
      p: "Fa-So",
      a: "So-La",
      s: "La-Si",
      d: "Si-Do",
    };

    if (e.key in keyInstruction2) {
      let audio = new Audio("/notes/" + keyInstruction2[e.key] + ".mp3");
      audio.play();
    }
  });
});
