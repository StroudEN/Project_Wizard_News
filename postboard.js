const postBank = require('./postBank')
const tracker = require('./datetracker')

const posts= postBank.list();
const html = `<!DOCTYPE html>
<html>
<head>
  <title>Wizard News</title>
  <link rel='stylesheet' href='/style.css'/>
  <link rel="icon" href="/logo.png">
</head>
<body>
  <div class="news-list">
    <header><img src="/logo.png"/>Wizard News</header>
    ${posts.map(post => `
      <div class='news-item'>
        <p>
          <span class="news-position">${post.id}. ▲</span>
          <a href="/posts/${post.id}">${post.title}</a>

          <small>(by ${post.name})</small>
        </p>
        <small class="news-info">
          ${post.upvotes} upvotes | ${tracker.dateTracker(post.postDate)}
        </small>
      </div>`
    ).join('')}
  </div>
</body>
<html>`;

module.exports = {site: html} 