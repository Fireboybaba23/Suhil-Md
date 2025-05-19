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
global.gdbye = process.env.GOODBYE || "welcome to ur darkness group "; 
global.wlcm  = process.env.WELCOME || "fuck off from this group fool";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_21_05_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICA0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA4LFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc5LFxuICAgICAgICA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY5LFxuICAgICAgICA5OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODksXG4gICAgICAgIDEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDUyLFxuICAgICAgICA1MixcbiAgICAgICAgMjUxLFxuICAgICAgICA2MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU5LFxuICAgICAgICA3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInBhN2tETytjakY3RmFEa0N3S1NjaTVIVDUwYXlxUDBjM0ErcXIrTWVQaHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdSVmxCeEZlVHVpZ0pGVU9JYV9wVHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGRkYTU4MjYtYjk5Mi00Njc5LWE4ZTItYmZlYTJhNjgzMDY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDE3OCxcbiAgICAgIDgsXG4gICAgICA4NixcbiAgICAgIDIzMyxcbiAgICAgIDc2LFxuICAgICAgOTQsXG4gICAgICAxNjMsXG4gICAgICAxMjEsXG4gICAgICAyNSxcbiAgICAgIDExMyxcbiAgICAgIDE0NCxcbiAgICAgIDQ2LFxuICAgICAgMTk3LFxuICAgICAgMTUyLFxuICAgICAgNzUsXG4gICAgICAxOTAsXG4gICAgICAyMTEsXG4gICAgICAxOTEsXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTgsXG4gICAgICAxMixcbiAgICAgIDM4LFxuICAgICAgMzAsXG4gICAgICAxNjksXG4gICAgICAxNTMsXG4gICAgICA1OCxcbiAgICAgIDU2LFxuICAgICAgMTk3LFxuICAgICAgMTY5LFxuICAgICAgMjEwLFxuICAgICAgNjAsXG4gICAgICAxODMsXG4gICAgICAxNTEsXG4gICAgICAyMTEsXG4gICAgICAyMTMsXG4gICAgICA1MyxcbiAgICAgIDEwMSxcbiAgICAgIDE2MixcbiAgICAgIDIzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ015OGs1SUdFTzN5cWNFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVk5Xem1FdFZYM3BCdG5JZ2FLc2w2bEk0cS9hWk1tMGlPNVBnS2IvZ1VrUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0ZHpXaHdqMkMydVROSGIzM3ljL2FybWR1TWluUHlBVXN0MHFJRWc2Ym1CWmpDbUN6eDIvRFNXelo4Y0l2UnNmR3dvYTlJN01TM29DSnB0SkNzcVNCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKUHA2MWlGanczTHlFZTBTTHdudDRLbTBURk5tTGQ2eFViNkdxd3RyNXAwQ1c1dmFXOXc5WW1rV1N0RldBYy9RNkJGMUZzcVVqeGhiV0orWUoweklpQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzk1OTg5ODU6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJILi4uLi4uLi4uIEkuLi4uLi4uLi4uLiBNXCIsXG4gICAgXCJsaWRcIjogXCI3NzI2NjY0NjI0OTU1ODo4OEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzk1OTg5ODU6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDc2MTQwNjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOQnVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5CdS5qc29uIjogIntcImtleURhdGFcIjpcImVlRlRuUEx4djYwR011NmFtT3hnb1RqU3g0NHBqMHF3aU43S3cvMkdvck09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY0ODY4MDUyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ3NjE0MDcyMTcyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
