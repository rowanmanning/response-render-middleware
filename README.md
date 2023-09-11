
# @rowanmanning/response-render-middleware

A small convenience utility to generate [Express](https://expressjs.com/) middleware which renders a view.

```js
app.get('/', render('home'));
```


## Table of Contents

  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)


## Requirements

This library requires the following to run:

  * [Node.js](https://nodejs.org/) 18+


## Usage

Install with [npm](https://www.npmjs.com/):

```sh
npm install @rowanmanning/response-render-middleware
```

Load the library into your code with a `require` call:

```js
const render = require('@rowanmanning/response-render-middleware');
```

Use it to generate middleware to render a view:

```js
const app = express();

app.get('/', render('home'));
```

The following are equivalent:

```js
app.get('/', render('home'));
app.get('/', (request, response) => response.render('home'));
```

```js
app.get('/blog', render('blog', {title: 'My Blog'}));
app.get('/blog', (request, response) => response.render('blog', {title: 'My Blog'}));
```

If you need to pass dynamic information into the view, either don't use this middleware, or make use of `response.locals` in a previous middleware:

```js
function getPostById(request, response, next) {
    response.locals.post = await getPostFromDatabase(request.params.postId);
    next();
}

app.get('/blog/:postId', [
    getPostById,
    render('post')
]);
``` 


## Contributing

[The contributing guide is available here](docs/contributing.md). All contributors must follow [this library's code of conduct](docs/code_of_conduct.md).


## License

Licensed under the [MIT](LICENSE) license.<br/>
Copyright &copy; 2020, Rowan Manning
