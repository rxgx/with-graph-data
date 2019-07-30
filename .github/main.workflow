workflow "New workflow" {
  on = "push"
  resolves = [
    "Typescript",
    "Jest",
  ]
}

action "Install Dependencies" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = " npm ci"
}

action "Typescript" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npx tsc"
  needs = ["Install Dependencies"]
}

action "Jest" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm t"
  needs = ["Install Dependencies"]
}
