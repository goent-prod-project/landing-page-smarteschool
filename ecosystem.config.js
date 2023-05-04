module.exports = {
  apps: [
    {
      name: "landing-ses",
      script: "npm",
      args: "start",
      exec_mode: "fork",
    },
  ],
  deploy: {
    production: {
      user: "root",
      host: "128.199.243.153",
      path: "/root/landing-ses",
      repo: "git@github.com:produksi-dev/landing-page-smarteschool.git",
      ref: "origin/main",
      key: "~/.ssh/id_rsa",
      "post-deploy": "npm i; npx next build; pm2 reload ecosystem.config.js",
    },
  },
};
