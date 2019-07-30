workflow "New workflow" {
  on = "push"
  resolves = ["Typescript"]
}

action "Jest" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = " npm t"
}

action "Typescript" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Jest"]
  runs = "npx tsc"
}
