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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_42_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIwLFxuICAgICAgICAzNixcbiAgICAgICAgMjM3LFxuICAgICAgICA5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODQsXG4gICAgICAgIDgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU1LFxuICAgICAgICA4OCxcbiAgICAgICAgNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDcwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDExOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUndBVEFKL1Yxa1VFcHU1Z2U5dVR4RWxVV0pIZmRPTXk0SnZ2SHlXTmJ5dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib05TNGV0THFSSU8zWmJwX2JOQ2NFUVwiLFxuICBcInBob25lSWRcIjogXCI3NTllOTcyOC0xZGQwLTQ5NWMtOGVhYS00NmRiNzI3NDc5ZDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgMjM4LFxuICAgICAgMTgxLFxuICAgICAgMzAsXG4gICAgICA0OCxcbiAgICAgIDE5NSxcbiAgICAgIDE0OSxcbiAgICAgIDM4LFxuICAgICAgMTU3LFxuICAgICAgMTA0LFxuICAgICAgMTg0LFxuICAgICAgMTkyLFxuICAgICAgMTg1LFxuICAgICAgMTY1LFxuICAgICAgMTc0LFxuICAgICAgMTk4LFxuICAgICAgMTk0LFxuICAgICAgMTE4LFxuICAgICAgMTI0LFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgMTQwLFxuICAgICAgMjUsXG4gICAgICAxODgsXG4gICAgICAxNDIsXG4gICAgICAyMjQsXG4gICAgICAxMzQsXG4gICAgICAzLFxuICAgICAgMTQsXG4gICAgICA0LFxuICAgICAgMjQwLFxuICAgICAgMTk1LFxuICAgICAgMTAyLFxuICAgICAgMTExLFxuICAgICAgNzksXG4gICAgICAxMDQsXG4gICAgICAxNDYsXG4gICAgICAxNzksXG4gICAgICAxNDAsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxTUQ1TUpWMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzOTU5ODk4NTo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzcyNjY2NDYyNDk1NTg6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlN0MUQ0UTZJZnd0Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlVzlMc215RkxNZjJYQUk2TndJdUxKa2lwZXUyMHRYWDFkNHVTZlZLSlNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZXdkV2QnFwLzJvcytieGxJMUx3c0trK0wwbDhwQWxidEZyVENWSEpyWlM1blNUUmRYc25tQ2VtRlNhQ2kzU1l0WHJ3cW8vV3hETFFUU2RoNWJzTkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNWdStZOEhYV2UraWJIR3BMU3Y3V2lUK2NzeDhlUDVoVDBXYnh4QkxZbkhXakhGaUdpSmQ5VzN1QnVod0ZzMmpHOGFNZ2d6RGJRVWhWN0crL1ZZWER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzk1OTg5ODU6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1Njk0OTU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXFpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcWkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLakZrdy96Wkx1WUI2V2p3YnZ6Q05LOFlXNFhFZzd2eU00RkNXRENyNGtFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMTQwNTQ1NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTQ1MTg2MDg2MVwifSIKfQ=="  // PUT your SESSION_ID 


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
