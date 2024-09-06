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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_06_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY4LFxuICAgICAgICA0MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwLFxuICAgICAgICA3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NixcbiAgICAgICAgMTU1LFxuICAgICAgICA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNixcbiAgICAgICAgNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDY3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDkzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNixcbiAgICAgICAgMTAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAzLFxuICAgICAgICAyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYnJyRW5wcUZtT1QrbGJHUTkxOFJhc2QvU1VBcnhENkoycE1OSlNsWGc4TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQWhPZ0N6MlFROHVVMDFKMTNKNUhuZ1wiLFxuICBcInBob25lSWRcIjogXCI3MTBkMDg0NC04MGEyLTQxM2QtOTFmMi0wNjRiODg2YmM2YzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDE3LFxuICAgICAgNzIsXG4gICAgICA5OCxcbiAgICAgIDE0OSxcbiAgICAgIDU1LFxuICAgICAgNjEsXG4gICAgICAxNzIsXG4gICAgICAxNzUsXG4gICAgICA3NixcbiAgICAgIDgwLFxuICAgICAgMjA2LFxuICAgICAgMTc3LFxuICAgICAgNjcsXG4gICAgICAxMzUsXG4gICAgICAyMTcsXG4gICAgICAxLFxuICAgICAgMjQyLFxuICAgICAgMTc5LFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMTE5LFxuICAgICAgMTIzLFxuICAgICAgNyxcbiAgICAgIDIzMixcbiAgICAgIDY1LFxuICAgICAgMTEzLFxuICAgICAgNjgsXG4gICAgICAyNTQsXG4gICAgICAyLFxuICAgICAgMTYzLFxuICAgICAgMTQxLFxuICAgICAgNCxcbiAgICAgIDkxLFxuICAgICAgNjYsXG4gICAgICAxMDQsXG4gICAgICA1NSxcbiAgICAgIDE4OSxcbiAgICAgIDAsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlgxREtZUFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzk1OTg5ODU6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc3MjY2NjQ2MjQ5NTU4OjQyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pLdDFENFE5cGpzdGdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZVc5THNteUZMTWYyWEFJNk53SXVMSmtpcGV1MjB0WFgxZDR1U2ZWS0pTZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6Tjl1OTNlUDB6ZDNhOHJzbjVLcVd3OTUvR1FIbkQ3UStPeTgzbzNaM1B3UzFuRmlMY2Jrbm9mSGx5OVRJNC9TT1FTRFQ0YTd4NkVBZkplekxaSnhBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHQXFGc0lheG8zang5QnlmNDNYSVVmb2VrRG9EZzRXdis4VDE4YmpLOWg3ODZJTGQzQlhiUldkVVNRT2JJKzB3dkhvTVdadFNUZDBvVGhGQ0xEeElDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM5NTk4OTg1OjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTYzMTYxMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
