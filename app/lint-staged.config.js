module.exports = {
  '*.+(js|jsx)': ['eslint'],
  '**/*.+(js|jsx|json|yml|css)': ['prettier --write', 'git add'],
};
