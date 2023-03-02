{
  apps : [{
    name: "sites",
    script: "/src/index.js",
    watch: true,
    env: {
"PORT": 3000, 
"NODE_ENV": "production"
    }
  }]
}
