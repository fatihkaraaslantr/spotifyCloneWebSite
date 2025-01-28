export class UI {
  constructor() {
    this.form = document.querySelector("form");
    this.list = document.querySelector(".list");
    this.title = document.querySelector("#title");
    this.player = document.querySelector(".player");
  }

  //**Şarkı(title) içeriğini kısıtlama...
  sliceText(text) {
    if (text.length > 15) {
      return text.slice(0, 15) + "...";
    }
    return text;
  }

  //**Şarkıları render eden fonksiyon
  renderCards(songs) {
    this.list.innerHTML = "";
    songs.forEach((song) => {
      const card = document.createElement("div");
      card.className = "card";

      //card elemanına data özellikleri ekleme..
      card.dataset.title = song.title;
      card.dataset.subtitle = song.subtitle;
      card.dataset.img = song.images.coverarthq;
      card.dataset.mp3 = song.hub.actions[1].uri;

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

  //**Loader render eden fonksiyon..
  renderLoader() {
    this.list.innerHTML = `
<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>
    
    
    `;
  }

  //**Title güncelleyen fonksiyon..
  updateTitle(text) {
    this.title.textContent = text;
  }

  //**Animasyon ayarlaması yapan fonksiyon */
  toogleAnimation() {
    const image = document.querySelector(".info img");
    image.classList.toggle("animate");
  }

  //**Player alanını render eden fonksiyon */
  renderPlayer(song) {
    this.player.innerHTML = `    
      <div class="info">
        <img
          src="${song.img}"
          alt=""
        />
        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>
      <audio src="${song.mp3}"
       controls
       autoplay
       ></audio>
      <!-- right -->
      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
      </div>`;

    //oynatılıyorsa image elemanının olayını izle..
    const audio = this.player.querySelector("audio");
    audio.addEventListener("play", this.toogleAnimation);
    audio.addEventListener("pause", this.toogleAnimation);
  }
}
