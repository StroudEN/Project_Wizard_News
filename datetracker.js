const express = require("express");
const app = express();
const morgan = require('morgan')

app.use(express.static('public'))
app.use(morgan('dev'));

// within posts, create postDate Variable

// When post is made, set postDate to const postDate=Date.now();
// setinterval function every minute(otherwise 'just now')
// function dateTracker =() => {
// const elapsedTime = Date.now() - posts.postDate
// if (elapsedTime <= 86400000) {return 'just now'} else if ( elapseTime <= 172800000) {return 'today'} else {return 'yesterday'}
// }, 3600000

// Record 'Just Now' 'Today' 'Yesterday'
// -------------------post.postDate goes here
function dateTracker(postedDate) {
    const elapsedTime = Date.now() - postedDate
    if (elapsedTime <= 86400000) {
        return 'posted just now'
    } else if (elapsedTime <= 172800000) {
        return 'posted today'
    } else {
        return 'posted yesterday'
    }
}

module.exports = {dateTracker: dateTracker}