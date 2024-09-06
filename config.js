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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_01_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDI5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzLFxuICAgICAgICA2NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDY2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQyLFxuICAgICAgICA4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgODksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkxLFxuICAgICAgICA5NCxcbiAgICAgICAgODMsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWbEIxem15T0hRZlQ4d2t1NGgvUmNud0Ezbm51cGltVlhUd09BZDZKOXlFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkQldobHFPTFEzbVJTMHQyOEpfZUdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImFlZjdhMDAyLTA4MWQtNDMxYi05OWQwLTBlYTI0MDUyY2Y5N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICA0NSxcbiAgICAgIDExNyxcbiAgICAgIDE5MCxcbiAgICAgIDE5NSxcbiAgICAgIDIzOCxcbiAgICAgIDYzLFxuICAgICAgMjA0LFxuICAgICAgMjI2LFxuICAgICAgODEsXG4gICAgICAzNSxcbiAgICAgIDIwNCxcbiAgICAgIDAsXG4gICAgICAxNTAsXG4gICAgICAxOTIsXG4gICAgICA2NCxcbiAgICAgIDExMCxcbiAgICAgIDIyNixcbiAgICAgIDc2LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAyLFxuICAgICAgMTU5LFxuICAgICAgMTQ2LFxuICAgICAgMjM1LFxuICAgICAgMTc4LFxuICAgICAgMjUyLFxuICAgICAgMTU2LFxuICAgICAgMTc2LFxuICAgICAgMTU3LFxuICAgICAgMjUwLFxuICAgICAgMjA1LFxuICAgICAgMTMwLFxuICAgICAgMjYsXG4gICAgICAxNzIsXG4gICAgICAxMSxcbiAgICAgIDEyMCxcbiAgICAgIDE0MSxcbiAgICAgIDQwLFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFJFTkZZWlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzk1OTg5ODU6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc3MjY2NjQ2MjQ5NTU4OjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pHdDFENFErNmpwdGdZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZVc5THNteUZMTWYyWEFJNk53SXVMSmtpcGV1MjB0WFgxZDR1U2ZWS0pTZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2b0E2MmM3VkxQZDBVVHlvaStXTWRCTEs4cnJpckd6WU04TUh1amw5ci9ja1RiN0gzcHB2anhjMWluYm9LREgxNU42eXlOemhyWndLL25VVVM2UXhCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxckpuQjNIZGtxMDJiN3Y1bkJXK0hyWTVSWk1PUGs0K1REdVJQV3NDOVRqT084d1FZd2l6bm9zcDNnaW1UNThIcjI5eXY0TDlBbmNKTUY5YmZ3bkFCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM5NTk4OTg1OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTU4NDUxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlxaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXFpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS2pGa3cvelpMdVlCNldqd2J2ekNOSzhZVzRYRWc3dnlNNEZDV0RDcjRrRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzE0MDU0NTUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjU0NTE4NjA4NjFcIn0iCn0="  // PUT your SESSION_ID 


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
