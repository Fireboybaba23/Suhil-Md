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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_15_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAxLFxuICAgICAgICA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNixcbiAgICAgICAgODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQxLFxuICAgICAgICA0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzksXG4gICAgICAgIDQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDQzLFxuICAgICAgICA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDYxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMUwvUm55Q3JQdUZ1bzRURFN4eW52UGRJQ1prNElJcUZPWkUzdEJHTXhxdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaGFOWGtFR0VSanVlU1hnbEZVZlZRQVwiLFxuICBcInBob25lSWRcIjogXCIyOTY1OTJmYS00Nzc3LTRkODctOTY1Yy00OWY2ZWY3Yjk4M2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgNzUsXG4gICAgICAxMzksXG4gICAgICAyNDMsXG4gICAgICAxNDAsXG4gICAgICAxODMsXG4gICAgICAxNzcsXG4gICAgICAyNDgsXG4gICAgICAxODAsXG4gICAgICAyNTEsXG4gICAgICAxNTgsXG4gICAgICAxMjQsXG4gICAgICAxODIsXG4gICAgICA4LFxuICAgICAgODcsXG4gICAgICAxMSxcbiAgICAgIDEwMSxcbiAgICAgIDEyNixcbiAgICAgIDQ0LFxuICAgICAgMTI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDE3MyxcbiAgICAgIDE3MixcbiAgICAgIDIxMSxcbiAgICAgIDI0OSxcbiAgICAgIDg2LFxuICAgICAgMzAsXG4gICAgICAyNDQsXG4gICAgICA5NixcbiAgICAgIDI3LFxuICAgICAgMixcbiAgICAgIDE2NyxcbiAgICAgIDc5LFxuICAgICAgMjQ5LFxuICAgICAgMjE4LFxuICAgICAgMjQwLFxuICAgICAgODAsXG4gICAgICAyNCxcbiAgICAgIDExNixcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNNjZFNUdBWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzOTU5ODk4NTo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzcyNjY2NDYyNDk1NTg6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSk90MUQ0UWxQSHN0Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlVzlMc215RkxNZjJYQUk2TndJdUxKa2lwZXUyMHRYWDFkNHVTZlZLSlNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlc5VjJFdzRxMk9VWlkvSjRzUzBJcTd5WTRrRzRWK3FoeGpHN1NBaVlUUzNPek40dGFpaTVzbWF5N2NrcnVSdE82WGl4WEVienpRUnYyRVl0cjRCTEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdkZlQva3ppVEFtaWF0ZTMrelRpOVk1enJSQXI5TTlwWWpjdjZQM3JpVU82Sm1VR0FmY21kcGlWMTJtbEZuTERtTVlUWU9obUJxTlpvSkIweTZNWEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzk1OTg5ODU6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1NjQyOTAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXFpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcWkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLakZrdy96Wkx1WUI2V2p3YnZ6Q05LOFlXNFhFZzd2eU00RkNXRENyNGtFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMTQwNTQ1NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTQ1MTg2MDg2MVwifSIKfQ=="  // PUT your SESSION_ID 


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
