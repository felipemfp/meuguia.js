# meuguia.js [![npm version](https://badge.fury.io/js/meuguia.svg)](https://badge.fury.io/js/meuguia)

> :tv: meuguia.TV as npm module

## Installation

```
npm i --save meuguia
```

## Example

```javascript
import meuguia from 'meuguia'

meuguia.getAll().then(console.log)

/*
[ { title: 'Igreja Internacional da Graça de Deus',
    time: '05h00',
    channel: { description: 'Rede TV', id: 'RTV' } },
  { title: 'Igreja Universal',
    time: '06h00',
    channel: { description: 'Canal 21', id: 'C21' } },
  { title: 'Hiper TV',
    time: '06h00',
    channel: { description: 'HTV', id: 'HTV' } },
  { title: 'Primeiro Impacto',
    time: '06h00',
    channel: { description: 'SBT', id: 'SBT' } },
  { title: 'Os Descendentes',
    time: '06h35',
    channel: { description: 'Megapix', id: 'MPX' } },
  ... and more items ]
*/

```

## Where is this library used?

If you are using this library in one of your projects, add it in this list.

* [passando-na-tv](https://github.com/felipemfp/passando-na-tv) - A CLI tool for brazilian TV broadcasters

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need __[Node.js](https://docs.npmjs.com/getting-started/installing-node)__ and __npm__ installed

```
node --version
npm --version
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone the repository into your machine

```
git clone https://github.com/felipemfp/meuguia.js
cd meuguia.js
```

And install the dependencies 

```
npm install
```

## Running the tests

```
npm test
```

## Built With

* [x-ray](https://github.com/lapwinglabs/x-ray)
* [jest](https://github.com/facebook/jest)
* [nock](https://github.com/node-nock/nock)
* [babel](https://github.com/babel/babel)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/felipemfp/meuguia.js/tags). 

## Authors

* **Felipe Pontes** - *Initial work* - [felipemfp](https://github.com/felipemfp)

See also the list of [contributors](https://github.com/felipemfp/meuguia.js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
