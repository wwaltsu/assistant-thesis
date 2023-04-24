module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'rules': {
    'quotes': ['error', 'single'],
    // we want to force semicolons
    'indent': ['error', 2],
    // we want to avoid extraneous spaces
    'no-multi-spaces': ['error']
  },
  
};