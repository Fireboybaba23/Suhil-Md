const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348139598985";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_29_09_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY2LFxuICAgICAgICA0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzLFxuICAgICAgICA0MixcbiAgICAgICAgMCxcbiAgICAgICAgODksXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgOTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk5LFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZaEFSTVU5b2F1N0UydW1CQnRRbVc1WDhHS3ZyWU05djR0eWk5c2J3SmI4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEbF9QVTdTOVN2eS1DOTl3UndKRlBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNmOGJkZTFlLWY3MzctNDk2Mi05NmIwLTc2OTMwMGVjM2U2YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDIwNSxcbiAgICAgIDIxMyxcbiAgICAgIDI1NCxcbiAgICAgIDU1LFxuICAgICAgNDMsXG4gICAgICA4OSxcbiAgICAgIDIyMyxcbiAgICAgIDE3MixcbiAgICAgIDE1MyxcbiAgICAgIDE2NSxcbiAgICAgIDIwMCxcbiAgICAgIDQwLFxuICAgICAgNTIsXG4gICAgICA1NyxcbiAgICAgIDIxMSxcbiAgICAgIDgsXG4gICAgICAxNjgsXG4gICAgICA1LFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgOTIsXG4gICAgICA2NSxcbiAgICAgIDczLFxuICAgICAgMTgsXG4gICAgICA2MyxcbiAgICAgIDEwLFxuICAgICAgNSxcbiAgICAgIDIzMyxcbiAgICAgIDQwLFxuICAgICAgMTk1LFxuICAgICAgMjQ4LFxuICAgICAgMzMsXG4gICAgICAxODAsXG4gICAgICAyMDIsXG4gICAgICA3MSxcbiAgICAgIDI1MCxcbiAgICAgIDE3OCxcbiAgICAgIDQ4LFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhMTkNCWVJKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM5NTk4OTg1OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NzI2NjY0NjI0OTU1ODo2NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLU3QxRDRROHViR3R3WVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVXOUxzbXlGTE1mMlhBSTZOd0l1TEpraXBldTIwdFhYMWQ0dVNmVktKU2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVzRzQnBINWhTK2FtK3ZydHI3bkxNNXVjcUZwR2hXbi9WeTNuSVhXYk81YUx0Z0NGT2J1WGg1TGxXdEtvYzBnNCtGcmQ5NnFnL3FuRkw2ZERPUzRiQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQncvcVErc1hFNWZoSDNPS1JBcG0zeEVNRnhic2gyU2JHVS85MnF6aVpSZzBmN3Jka1gzd0pkaG52RGI2bHdjTHFWM3dOYWt3SDhYYm4wVGNNQ0t3aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzOTU5ODk4NTo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjcxMTYxNDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLd0lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUt3SS5qc29uIjogIntcImtleURhdGFcIjpcInZRdERBWDV2a3l6UWpFejZOL3cyVlNSb0g2TmdvV3F2NUp2K0pibUxRQU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMxNDA1NDczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI3MDkxMzkwNDA4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Cr7 supreme",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
