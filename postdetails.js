const tracker = require('./datetracker')
const errorpage = require('./errorpage')

function details(page) {if (!page.id) {
    return errorpage.error
  } else { return `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel='stylesheet' href='/style.css'/>
    <link rel="icon" href="/logo.png">
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      <div class='news-item'>
        <p>
          <span class="news-position">${page.id}. ▲</span>${page.title}

          <small>(by ${page.name})</small>
            <p>${page.content}</p>
          <small class="news-info">
              ${page.upvotes} upvotes | ${tracker.dateTracker(page.postDate)}
          </small>
        </p>
      </div>
    </div>
  </body>
  <html>`
//   res.send(postPage);
}}


module.exports = {details : details}