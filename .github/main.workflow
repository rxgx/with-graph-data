workflow "Verify Pull Request" {
  on = "push"
  resolves = [
    "Typescript",
    "Codecov",
  ]
}

action "Install Dependencies" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm"
  args = "ci"
}

action "Jest" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm"
  args = "test"
  needs = ["Install Dependencies"]
}

action "Codecov" {
  uses = "docker://node"
  runs = "npx"
  args = "codecov"
  needs = ["Jest"]
  secrets = ["CODECOV_TOKEN"]
}

action "Typescript" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npx"
  args = "tsc"
  needs = ["Install Dependencies"]
}
