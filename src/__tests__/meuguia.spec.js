import * as meuguia from "../meuguia";
import nock from "nock";
import fs from "fs";

const html = fs.readFileSync("src/__tests__/html/sample.html", "utf8");
const expected = [
  {
    title: "Programação Paga",
    time: "09:30",
    channel: {
      description: "AMC",
      id: "MGM"
    }
  },
  {
    title: "Diários da Floresta",
    time: "09:30",
    channel: {
      description: "Canal Brasil",
      id: "CBR"
    }
  },
  {
    title: "A Outra",
    time: "07:54",
    channel: {
      description: "Cinemax",
      id: "MNX"
    }
  }
];

describe("getAll", () => {
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);

  it("should return expected", () => {
    return meuguia.getAll().then(results => expect(results).toEqual(expected));
  });
});

describe("getMovies", () => {
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);

  it("should return expected", () => {
    return meuguia
      .getMovies()
      .then(results => expect(results).toEqual(expected));
  });
});

describe("getTvSeries", () => {
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);

  it("should return expected", () => {
    return meuguia
      .getTvSeries()
      .then(results => expect(results).toEqual(expected));
  });
});

describe("getSports", () => {
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);

  it("should return expected", () => {
    return meuguia
      .getSports()
      .then(results => expect(results).toEqual(expected));
  });
});

describe("getKids", () => {
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);

  it("should return expected", () => {
    return meuguia.getKids().then(results => expect(results).toEqual(expected));
  });
});

describe("getDocumentaries", () => {
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);

  it("should return expected", () => {
    return meuguia
      .getDocumentaries()
      .then(results => expect(results).toEqual(expected));
  });
});

describe("getNews", () => {
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);

  it("should return expected", () => {
    return meuguia.getNews().then(results => expect(results).toEqual(expected));
  });
});

describe("getOpen", () => {
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);

  it("should return expected", () => {
    return meuguia.getOpen().then(results => expect(results).toEqual(expected));
  });
});

describe("getEntertainment", () => {
  nock("https://meuguia.tv")
    .get(/\/programacao/)
    .reply(200, html);

  it("should return expected", () => {
    return meuguia
      .getEntertainment()
      .then(results => expect(results).toEqual(expected));
  });
});
