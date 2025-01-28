import { API } from "./api.js";
import { UI } from "./ui.js";

const ui = new UI();
const api = new API();

//**Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", async () => {
  //loader render
  ui.renderLoader();
  //api istek ve render
  api
    .getPopular()
    .then((data) => ui.renderCards(data))
    .catch((err) => {
      console.log(err);
    });
});

//**Form gönderildiğinde....
ui.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target[0].value;

  if (!query.trim()) {
    return alert("lürfen geçerli bir arama yapınız");
  }
  //render loader
  ui.renderLoader();
  //title text güncelleme
  ui.updateTitle(query + " için sonuçlar");
  //api istek ve render
  api
    .searchMusic(query)
    .then((data) => ui.renderCards(data))
    .catch((err) => alert(err));
});

//**Play iconuna tıklanınca  */
ui.list.addEventListener("click", (e) => {
  if (e.target.className == "play") {
    const card = e.target.closest(".card");
    const data = card.dataset;

    ui.renderPlayer(data);
  }
});
