module.exports = {
  apps: [{
    name: 'tyler',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-218-160-12.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/FECCarousel.pem',
      ref: 'origin/master',
      repo: 'git@github.com:landon-baker/tylerSearch.git',
      path: '/home/ubuntu/tyler',
      'post-deploy': 'npm install && pm2 startOrRestart ./ecosystem.config.js'
    }
  }
}