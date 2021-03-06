'use strict';

/**
 * travis.js
 *
 * This script is used by travis test tool.
 *
 */

var path    = require('path');
var fs      = require('fs');
var args    = process.argv.slice(2);
var APP_ROOT = path.join(__dirname, '..');

var argv = require('yargs')
    .command('install', 'travis install trigger', function(yargs){

    })
    .strict()
    .argv;

var command = argv._[0];

console.log('Travis node script, command:', command);
console.info('Travis node script, command:', command);

switch(command){
    case 'install':
        applyLocalConfig();
        break;
}

/**
 * Rename /config/env/testing/local.travis.js to ../local.js
 */
function applyLocalConfig(){
    fs.renameSync(path.join(APP_ROOT, 'config/env/testing/local.js.travis'), path.join(__dirname, 'config/env/testing/local.js'));
}