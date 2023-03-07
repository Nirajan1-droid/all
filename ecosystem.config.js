{
  apps : [{
    name: "sites",
    script: "npm",
    watch: true
,"args": ["start", "--", "--port", "3000"],
    env: {

"NODE_ENV": "production"
    }
  }]
}
