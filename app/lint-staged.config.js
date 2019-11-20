module.exports = {
  '*.js': ['eslint'],
  '**/*.+(js|jsx|json|yml|css)': ['prettier --write', 'git add'],
}
