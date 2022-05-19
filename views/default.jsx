const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/style.css" />
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = Def
