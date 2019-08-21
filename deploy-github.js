const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:kyranjamie/kyranjamie.github.io.git',
  },
  error => {
    console.log(error)
  }
)
