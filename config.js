const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Africa,Nigeria."


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


global.devs = "2348139598985" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348139598985";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_35_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMyxcbiAgICAgICAgODIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICAyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY5LFxuICAgICAgICA4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDc0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDExMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNixcbiAgICAgICAgMjA1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg3LFxuICAgICAgICA3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1aEtsVVg1UVlGRENPTU9KcUxkVDZ6Z1FlTW9DZFkrVFRWVzJOL2UzM0ZvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMzk1OTg5ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEwN0Y4N0Q4NkE2MUNEMTZFNzZEOEYyNTdDQjYwQTg0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0OTg2MTMwMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFWUVPcXZyY1NZNjA3ZG1NMUtWVFR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjFjMDM4MzNkLTRhZDktNDlkYi05NWVkLTA1ODM5ZGYxODFiOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICAxNjcsXG4gICAgICA1NSxcbiAgICAgIDEyMyxcbiAgICAgIDIxNixcbiAgICAgIDEwNSxcbiAgICAgIDQ0LFxuICAgICAgMyxcbiAgICAgIDcxLFxuICAgICAgMTU3LFxuICAgICAgMTMsXG4gICAgICA2OSxcbiAgICAgIDE4OSxcbiAgICAgIDM0LFxuICAgICAgMjEwLFxuICAgICAgODQsXG4gICAgICAyNDMsXG4gICAgICAyNDUsXG4gICAgICAxOSxcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAyNDIsXG4gICAgICAxNjksXG4gICAgICA1OCxcbiAgICAgIDI1LFxuICAgICAgMTIyLFxuICAgICAgMyxcbiAgICAgIDY3LFxuICAgICAgMjA3LFxuICAgICAgOTAsXG4gICAgICA5MSxcbiAgICAgIDExMixcbiAgICAgIDIsXG4gICAgICAyMTEsXG4gICAgICAxMTIsXG4gICAgICAyNDMsXG4gICAgICA0NyxcbiAgICAgIDE0NSxcbiAgICAgIDkyLFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2lLOGJjQkVLaUhzOElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQcWwzdzM4cXRjUGQ4Q05IVXpGRTFqM0NlMjJLUmExV3FWdVB1REZwUXhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVmR1RPb3ZMWVhQT3ZaeW5QWFUrOFZ2U0VvQTFNQm5XZ29mTEFnNzg1VXc4Ym9SWHgvUVgyMUJvSjhSa2pWWDVnTUJCS2FyWElHWDR5R0lGMnZnUEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImt0amlBRjYza2Z5TUU2L2QyNGRVWDhoTUdhWmJQZ2JGSTFlQlgzd1h2dnNqL2JzWFl5bFQxcDFKeXRxV085d010V3Z2VENnajZ6NUdjOHZ1UTdwVkFnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzOTU5ODk4NTo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzcyNjY2NDYyNDk1NTg6NjZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM5NTk4OTg1OjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0OTg2MTI5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURET1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRERNLmpzb24iOiAie1wia2V5RGF0YVwiOlwic0R6ODF3bCtHOS9DU3AxTHRsNDJnczZCU3ZROUhoeWtkS0FvaWczckxGUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODU2MzE1OTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURETi5qc29uIjogIntcImtleURhdGFcIjpcIm1wWHBLVk00M2xFVytVZWx6OHFZSHhxd3prOEJZYkVUcDNEOFcxejdZYTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mzg1NjMxNTkxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ5ODYxMjAwNjM0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRERPLmpzb24iOiAie1wia2V5RGF0YVwiOlwidUo3Q2U4bmtzaW5IMk1IMjhZeTNhNUNEdHA5aXNLVm1QWG9hWkt5d1dyMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODU2MzE1OTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0OTg2MTMwMTA3OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "him",


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
