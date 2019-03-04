import Xray from "x-ray";
const x = Xray();

const URL_BASE = "https://meuguia.tv";

const ENDPOINTS = {
  MOVIES: "/programacao/categoria/Filmes",
  TVSERIES: "/programacao/categoria/Series",
  SPORTS: "/programacao/categoria/Esportes",
  KIDS: "/programacao/categoria/Infantil",
  DOCUMENTARIES: "/programacao/categoria/Documentarios",
  NEWS: "/programacao/categoria/Noticias",
  OPEN: "/programacao/categoria/Aberta",
  ENTERTAINMENT: "/programacao/categoria/Variedades"
};

const url = (urlBase, endpoint) => `${urlBase}${endpoint}`;

const scrape = url => x(url, "li", [
  {
    title: "li a@title",
    time: "li h3.dark strong",
    channel: {
      id: "li a@href",
      description: "li h2"
    }
  }
]);

const normalize = (resolve, reject) => (err, results) => {
  if (err) {
    return reject(err);
  }
  return resolve(
    results
      .map(result => {
        if (!result.title) {
          return;
        }
        let { id, description } = result.channel;
        return {
          ...result,
          channel: {
            id: id
              .split("/")
              .slice(-1)[0]
              .trim(),
            description
          }
        };
      })
      .filter(result => result)
  );
};

const get = url => new Promise((resolve, reject) => {
  scrape(url)(normalize(resolve, reject));
});

export const getAll = () => new Promise((resolve, reject) => {
  Promise.all(
    Object.keys(ENDPOINTS).map(category =>
      get(url(URL_BASE, ENDPOINTS[category]))
    )
  ).then(data => {
    const channels = {};

    resolve(
      data.reduce((arr, curr) => {
        const found = curr.filter(({channel}) => {
          if (!channels[channel.id]) {
            channels[channel.id] = true;
            return true;
          }
          return false;
        });

        return arr.concat(found);
      }, [])
    );
  }, reject);
});

export const getMovies = () => get(url(URL_BASE, ENDPOINTS.MOVIES));

export const getTvSeries = () => get(url(URL_BASE, ENDPOINTS.TVSERIES));

export const getSports = () => get(url(URL_BASE, ENDPOINTS.SPORTS));

export const getKids = () => get(url(URL_BASE, ENDPOINTS.KIDS));

export const getDocumentaries = () =>
  get(url(URL_BASE, ENDPOINTS.DOCUMENTARIES));

export const getNews = () => get(url(URL_BASE, ENDPOINTS.NEWS));

export const getOpen = () => get(url(URL_BASE, ENDPOINTS.OPEN));

export const getEntertainment = () =>
  get(url(URL_BASE, ENDPOINTS.ENTERTAINMENT));
