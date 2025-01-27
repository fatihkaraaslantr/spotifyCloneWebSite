const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "648dda15b6msh1f39168b70d7fa6p1b7877jsn3537f2980da4",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

export class API {
  //api istek
  async getPopular() {
    const url = "https://shazam.p.rapidapi.com/search?term=eminem";

    const response = await fetch(url, options);
    const data = await response.json();

    const formattedData = data.tracks.hits.map((item) => item.track);
    return formattedData;
  }

  //aratılan şarkı verisini çekme..
  async searchMusic(query) {
    const url = `https://shazam.p.rapidapi.com/search?term=${query}`;

    const res = await fetch(url, options);
    const data = await res.json();

    const formatedData = data.tracks.hits.map((item) => item.track);
    return formatedData;
  }
}
