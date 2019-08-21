const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    dotfiles: true,
    branch: 'master',
    repo: 'git@github.com:kyranjamie/kyranjamie.github.io.git',
  },
  error => error || console.log(error)
)
