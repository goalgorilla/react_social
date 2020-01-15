const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(cookieParser());
    server.use(nextI18NextMiddleware(nextI18next));

    server.get('/user/login', (req, res) => {
      if (req.cookies.token) {
        res.redirect('/');
        res.end();
      } else {
        return app.render(req, res, '/user/login', req.query);
      }
    });

    server.get('/editprofile', (req, res) => {
      if (!req.cookies.token) {
        res.redirect('/user/login');
        res.end();
      } else {
        console.log(req);
        return app.render(req, res, '/editprofile', req.query);
      }
    });

    server.get('/user', (req, res) => {
      if (!req.cookies.token) {
        res.redirect('/user/login');
        res.end();
      } else {
        return app.render(req, res, '/user', req.query);
      }
    });

    server.get('/user/:id/home', (req, res) => {
      if (!req.cookies.token) {
        res.redirect('/user/login');
        res.end();
      } else {
        return app.render(
          req,
          res,
          '/user/' + req.params.id + '/stream',
          req.query,
        );
      }
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
    });
  })
  .catch(ex => {
    throw new Error(`Error occured: ${ex}`);
  });
