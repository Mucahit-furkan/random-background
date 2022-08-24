const changecolour = () => {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  document.documentElement.style.setProperty("--main-bg-colour", randomColor);
};


document.getElementById("click").addEventListener("click", () => {
    changecolour();
  });