export class UI {
  constructor() {
    this.form = document.querySelector("form");
    this.list = document.querySelector(".list");
  }

  //şarkı(title) içeriğini kısıtlama...
  sliceText(text) {
    if (text.length > 15) {
      return text.slice(0, 15) + "...";
    }
    return text;
  }

  //şarkıları render eden fonksiyon
  renderCards(songs) {
    this.list.innerHTML = "";
    songs.forEach((song) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `    
      <figure>
                <img
                  src="${song.images.coverarthq}"
                  alt=""
                />
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>
              <!-- card info -->
              <div class="card-info">
                <h4>${this.sliceText(song.title)}</h4>
                <h4>${song.subtitle}</h4>
              </div>`;
      this.list.appendChild(card);
    });
  }
}
