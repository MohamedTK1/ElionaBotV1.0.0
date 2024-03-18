module.exports.config = {
	name: "ر",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "عمر",
	description: "اعاده تشغيل البوت",
	commandCategory: "SYS | نظام", 
	cooldowns: 5000,
	dependencies: {
		"eval": ""
	}
};

module.exports.run = async ({ api, event, args, client, utils }) => {
    const eval = require("eval");
    const permission = global.config.ADMINBOT;
    
    
    if (!permission.includes(event.senderID)) return api.sendMessage(" ╰┈➤ SYS | ليس لديك الصلاحية ☹️. ", event.threadID, event.messageID);
    return api.sendMessage("╰┈➤ SYS | جارٍ إعادة التشغيل 🕊📿✨.", event.threadID, () => eval("module.exports = process.exit(1)", true), event.messageID);

   }
