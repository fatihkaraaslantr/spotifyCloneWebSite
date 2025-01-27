import { API } from "./api.js";
import { UI } from "./ui.js";

const ui = new UI();
const api = new API();

//sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", async () => {
  api
    .getPopular()
    .then((data) => ui.renderCards(data))
    .catch((err) => {
      console.log(err);
    });
});

//form gönderildiğinde....
ui.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target[0].value;

  if (!query.trim()) {
    return alert("lürfen geçerli bir arama yapınız");
  }
  api
    .searchMusic(query)
    .then((data) => ui.renderCards(data))
    .catch((err) => alert(err));
});
