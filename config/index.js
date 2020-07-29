process.env.NODE_ENV == 'test' ? process.env.NODE_ENV='stage' : process.env.NODE_ENV
require('dotenv-flow').config({
    node_env: process.env.NODE_ENV || 'stage',
    silent: true
});