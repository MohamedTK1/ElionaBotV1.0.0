const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");

/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semver.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const port = process.env.PORT || 5000
     
app.listen(port, () =>
	logger(`Your app is listening a http://localhost:${port}`, "[ ONLINE ]")
     );

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Restarting...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


var _0x3c4cf5=_0x114a;(function(_0x589fd4,_0xd41ff7){var _0xf6a56a=_0x114a,_0xbd08e0=_0x589fd4();while(!![]){try{var _0x2ba5f5=parseInt(_0xf6a56a(0x1b4))/0x1*(-parseInt(_0xf6a56a(0x1a2))/0x2)+-parseInt(_0xf6a56a(0x1c6))/0x3*(-parseInt(_0xf6a56a(0x1b0))/0x4)+-parseInt(_0xf6a56a(0x1bb))/0x5+parseInt(_0xf6a56a(0x1c0))/0x6*(parseInt(_0xf6a56a(0x1a7))/0x7)+parseInt(_0xf6a56a(0x1b3))/0x8*(-parseInt(_0xf6a56a(0x1be))/0x9)+-parseInt(_0xf6a56a(0x1bc))/0xa*(parseInt(_0xf6a56a(0x1b8))/0xb)+parseInt(_0xf6a56a(0x1a6))/0xc*(parseInt(_0xf6a56a(0x1b6))/0xd);if(_0x2ba5f5===_0xd41ff7)break;else _0xbd08e0['push'](_0xbd08e0['shift']());}catch(_0x11e2dc){_0xbd08e0['push'](_0xbd08e0['shift']());}}}(_0x59e7,0x24839));var _0x32daf9=(function(){var _0x4c95ea=!![];return function(_0x434208,_0x85352e){var _0xae73ae=_0x4c95ea?function(){if(_0x85352e){var _0x28e3b4=_0x85352e['apply'](_0x434208,arguments);return _0x85352e=null,_0x28e3b4;}}:function(){};return _0x4c95ea=![],_0xae73ae;};}()),_0x2fde6f=_0x32daf9(this,function(){var _0x33ef38=_0x114a;return _0x2fde6f['toString']()[_0x33ef38(0x1c5)](_0x33ef38(0x1a5))[_0x33ef38(0x1ad)]()['constructor'](_0x2fde6f)[_0x33ef38(0x1c5)](_0x33ef38(0x1a5));});function _0x114a(_0x3feed2,_0x9a4dbf){var _0x5b230b=_0x59e7();return _0x114a=function(_0x2e8f67,_0x10063c){_0x2e8f67=_0x2e8f67-0x1a2;var _0x319096=_0x5b230b[_0x2e8f67];return _0x319096;},_0x114a(_0x3feed2,_0x9a4dbf);}_0x2fde6f();var _0x10063c=(function(){var _0x1bd061=!![];return function(_0x186f56,_0x1c574f){var _0xac50ee=_0x1bd061?function(){var _0x39a683=_0x114a;if(_0x1c574f){var _0x4f5e4b=_0x1c574f[_0x39a683(0x1af)](_0x186f56,arguments);return _0x1c574f=null,_0x4f5e4b;}}:function(){};return _0x1bd061=![],_0xac50ee;};}()),_0x2e8f67=_0x10063c(this,function(){var _0x56c81f=_0x114a,_0x1e8e99=function(){var _0x2a496f=_0x114a,_0x55d009;try{_0x55d009=Function('return\x20(function()\x20'+_0x2a496f(0x1c3)+');')();}catch(_0x44552c){_0x55d009=window;}return _0x55d009;},_0x5793cf=_0x1e8e99(),_0x1de400=_0x5793cf[_0x56c81f(0x1ab)]=_0x5793cf['console']||{},_0x2f14de=[_0x56c81f(0x1ac),_0x56c81f(0x1aa),_0x56c81f(0x1bd),'error',_0x56c81f(0x1c2),_0x56c81f(0x1ae),_0x56c81f(0x1b9)];for(var _0x19bf26=0x0;_0x19bf26<_0x2f14de[_0x56c81f(0x1c1)];_0x19bf26++){var _0x484e72=_0x10063c[_0x56c81f(0x1ba)]['prototype'][_0x56c81f(0x1a9)](_0x10063c),_0x2b56db=_0x2f14de[_0x19bf26],_0x3979ad=_0x1de400[_0x2b56db]||_0x484e72;_0x484e72[_0x56c81f(0x1c4)]=_0x10063c['bind'](_0x10063c),_0x484e72[_0x56c81f(0x1ad)]=_0x3979ad['toString'][_0x56c81f(0x1a9)](_0x3979ad),_0x1de400[_0x2b56db]=_0x484e72;}});function _0x59e7(){var _0x346f84=['18QOruRa','length','exception','{}.constructor(\x22return\x20this\x22)(\x20)','__proto__','search','444eEOPmw','[\x20DESCRIPTION\x20]','description','16746AVgEnZ','[\x20VERSION\x20]','name','(((.+)+)+)+$','5997900UWeaUb','660373iXHlvv','[\x20NAME\x20]','bind','warn','console','log','toString','table','apply','1684eIsrFw','data','then','1224cImfXZ','3JGyEvH','version','13qsTaVD','https://raw.githubusercontent.com/shadow0192/ShadowBot-Media/main/package.json','147818GvreJN','trace','constructor','1212805jGpNUg','130WuRZgp','info','14895NTEyBY','get'];_0x59e7=function(){return _0x346f84;};return _0x59e7();}_0x2e8f67(),axios[_0x3c4cf5(0x1bf)](_0x3c4cf5(0x1b7))[_0x3c4cf5(0x1b2)](_0x5b9d62=>{var _0x5b0505=_0x3c4cf5;logger(_0x5b9d62[_0x5b0505(0x1b1)][_0x5b0505(0x1a4)],_0x5b0505(0x1a8)),logger('Version:\x20'+_0x5b9d62[_0x5b0505(0x1b1)][_0x5b0505(0x1b5)],_0x5b0505(0x1a3)),logger(_0x5b9d62[_0x5b0505(0x1b1)][_0x5b0505(0x1c8)],_0x5b0505(0x1c7));});
startBot();
/*axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2_fix/main/package.json").then((res) => {
    const local = JSON.parse(readFileSync('./package.json'));
    if (semver['lt'](local.version, res['data']['version'])) {
        if (local.autoUpdate == !![]) {
            logger('A new update is available, start update processing...', '[ UPDATE ]');
            const updateBot = {};
            updateBot.cwd = __dirname
            updateBot.stdio = 'inherit' 
            updateBot.shell = !![];
            const child = spawn('node', ['update.js'], updateBot);
            child.on('exit', function () {
                return process.exit(0);
            })
            child.on('error', function (error) {
                logger('Unable to update:' + JSON.stringify(error), '[ CHECK UPDATE ]');
            });
        } else logger('A new update is available! Open terminal/cmd and type "node update" to update!', '[ UPDATE ]'), 
        startBot();
    } else logger('You are using the latest version!', '[ CHECK UPDATE ]'), startBot();
}).catch(err => logger("Unable to check update.", "[ CHECK UPDATE ]"));*/
app.get('/', (req, res) => res.sendFile(__dirname+'/S H A D O W/S H A D O W.html'))