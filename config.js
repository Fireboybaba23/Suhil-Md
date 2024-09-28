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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_51_09_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDgzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDY0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAsXG4gICAgICAgIDcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NixcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQxLFxuICAgICAgICA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICA4MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTksXG4gICAgICAgIDY0LFxuICAgICAgICA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUyLFxuICAgICAgICA2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDUzLFxuICAgICAgICAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NSxcbiAgICAgICAgOSxcbiAgICAgICAgODAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieTJEMnZUTmxzUVQ5S2pSRHpVYlp5eGdicUVmTUlLU0U0MUtMUWZCMklBND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQm5XVGV3VXVSbnlkWE5rZXBpMWpSUVwiLFxuICBcInBob25lSWRcIjogXCJhMzY1ZmJjNC1lNmZkLTQ5YTktOWUxNS1kODg0ZjFmMjQ2MTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAxNzMsXG4gICAgICA3NyxcbiAgICAgIDQyLFxuICAgICAgMTE4LFxuICAgICAgMjE3LFxuICAgICAgMjIwLFxuICAgICAgMTg3LFxuICAgICAgMTMwLFxuICAgICAgMTg2LFxuICAgICAgMTY4LFxuICAgICAgNzIsXG4gICAgICAxNzcsXG4gICAgICAxNzIsXG4gICAgICAxNTcsXG4gICAgICAyMjgsXG4gICAgICA1MSxcbiAgICAgIDI4LFxuICAgICAgNDIsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICAyMzcsXG4gICAgICAxMzksXG4gICAgICA1MixcbiAgICAgIDE2OSxcbiAgICAgIDEyMCxcbiAgICAgIDI0MixcbiAgICAgIDc1LFxuICAgICAgOTIsXG4gICAgICAxNTcsXG4gICAgICAzNSxcbiAgICAgIDgsXG4gICAgICA2NyxcbiAgICAgIDE3NyxcbiAgICAgIDE5NixcbiAgICAgIDIzOSxcbiAgICAgIDE1OSxcbiAgICAgIDY4LFxuICAgICAgMTM3LFxuICAgICAgMjMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFUWjhHTVFUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM5NTk4OTg1OjY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NzI2NjY0NjI0OTU1ODo2OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLaXQxRDRRdU52ZnR3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVXOUxzbXlGTE1mMlhBSTZOd0l1TEpraXBldTIwdFhYMWQ0dVNmVktKU2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidXFhcVM0SWZXSzcxdmdJVm5idmlhT1pEWUQwM3FLWVJMc3NWNm1iWVdRaFk0NnBzSno5UURGcjJWSHRMY0JNdjFNYWhOSEhxbGN4MkdnZ0NYYWV2QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieXRuZEhVNTFoSEV3WE91Z2hCZTNtL2k3Tmp0SzYyS1cwU3Q3Q3YyM05DUHFvYW9RK3lKZklkQUM1MjgxejkxTU1pUW9KNStCUURkaklzTjYzeUlQREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzOTU5ODk4NTo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc1MjQyODUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLd0lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUt3SS5qc29uIjogIntcImtleURhdGFcIjpcInZRdERBWDV2a3l6UWpFejZOL3cyVlNSb0g2TmdvV3F2NUp2K0pibUxRQU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMxNDA1NDczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI3MDkxMzkwNDA4XCJ9Igp9"  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
