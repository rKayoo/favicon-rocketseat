const express = require ('express');
const nunjucks = require ('nunjucks');

const server = express();
const courses = require('./data')

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server
});

server.get('/', function(req, res) {
  const about = {
    avatar_url: 'https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0.jpg',
    name: 'Rocketseat',
    description: 'Focado em passar o melhor conteúdo online, além de ajudar muitos a conseguirem seu primeiro emprego como desenvolvedor.',
    technologies:['HTML', 'CSS', 'Node.js', 'React', 'Javascript'],
    links: [
      { name: 'Github', url: 'https://github.com/Rocketseat'},
      { name: 'Instagram', url: 'https://www.instagram.com/rocketseat_oficial/?hl=pt-br'},
      { name: 'Facebook', url: 'https://pt-br.facebook.com/rocketseat/'},
    ]
  }

  return res.render('about', {about});
});

server.get('/courses', function(req, res) {
  return res.render('courses', {items: courses});
});

server.get('/layout', function(req, res) {
  return res.render('layout');
});

server.use(function(req, res) {
  return res.status(404).render('not-found');
});

server.listen(5000, function() {
  console.log('server is running');
})