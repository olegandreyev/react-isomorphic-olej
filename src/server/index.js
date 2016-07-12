/**
 * Created by Olejka on 12.07.2016.
 */
import path from 'path'
import Express from 'express'

import React from 'react'
import createMemoryHistory from 'history/lib/createMemoryHistory';
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { counter } from '../common/reducers'
import getRoutes from '../common/routes'
import configureStore from '../common/configureStore'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const config = require('../../webpack.config');
const compiler = webpack(config);

const app = Express();
const port = 3000;

app.use(webpackDevMiddleware(compiler,{noInfo:true,publicPath:config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
app.use(require('express').static(path.resolve(__dirname,'../client')));
app.use(handleRender);

function handleRender(req, res) {
    const store = configureStore();
    const routes = getRoutes();
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
            res.status(301).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (error) {
            res.status(500).send(error.message)
        } else if (renderProps == null) {
            res.status(404).send('Not found')
        } else {
            getReduxPromise().then(()=> {
                const initialState = store.getState();
                const html = renderToString(
                    <Provider store={store}>
                        { <RouterContext {...renderProps} /> }
                    </Provider>
                );
                res.send(renderFullPage(html, initialState))
            })
        }

        function getReduxPromise () {
            let {  params } = renderProps;
            let comp = renderProps.components[renderProps.components.length - 1].WrappedComponent;
            let promise = comp.fetchData ?
                comp.fetchData({ store, params }) :
                Promise.resolve();
            return promise;
        }

    });
}
function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app"><div>${html}</div></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="./dist/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port);
console.log(`app listening on ${3000} port`);