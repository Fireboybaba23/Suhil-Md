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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_50_09_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyLFxuICAgICAgICA1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUyLFxuICAgICAgICA3NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUzLFxuICAgICAgICA0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDUwLFxuICAgICAgICA1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDgyLFxuICAgICAgICAzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNixcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRVTJuQTZabjBmU1ZsbWJ0S0VFekI0RDB5SnpjaXRHSDhjejFMUC9ReEU0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxVEJaZVRlSFIteTNqbXRnY1hTTVZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjljMDdkYWZmLTM0YTQtNGFlNC1iZWEzLThiYTQ5ODA0NGE0MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDEwLFxuICAgICAgMjU0LFxuICAgICAgOTUsXG4gICAgICA3MyxcbiAgICAgIDIwNCxcbiAgICAgIDEwNCxcbiAgICAgIDE3NCxcbiAgICAgIDI1MixcbiAgICAgIDI1MCxcbiAgICAgIDEzNCxcbiAgICAgIDY4LFxuICAgICAgMTc4LFxuICAgICAgMTU0LFxuICAgICAgMjMzLFxuICAgICAgMSxcbiAgICAgIDQsXG4gICAgICAxOTksXG4gICAgICA2NCxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgNDcsXG4gICAgICAyNTUsXG4gICAgICAxMTEsXG4gICAgICAyNDgsXG4gICAgICAxNzYsXG4gICAgICAyNixcbiAgICAgIDIwNyxcbiAgICAgIDQ3LFxuICAgICAgMjgsXG4gICAgICAxMTIsXG4gICAgICAyMzUsXG4gICAgICAxNTEsXG4gICAgICAxODcsXG4gICAgICAzNyxcbiAgICAgIDE2MixcbiAgICAgIDY5LFxuICAgICAgOTMsXG4gICAgICAyNTMsXG4gICAgICA5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYQTgxWVoxVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzOTU5ODk4NTo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzcyNjY2NDYyNDk1NTg6NjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2V0MUQ0UXQ0YmZ0d1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlVzlMc215RkxNZjJYQUk2TndJdUxKa2lwZXUyMHRYWDFkNHVTZlZLSlNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRkdnMraEN3Ym00WElGdEZNSER5dnFtYXl0WEoxb3NpNFdEZ3RPeDVZMTV0TFU1b042QUNjYzRCUS8xRkltLzcrR2pXczhjVDJnL2F1Mi83azNYb0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZFTlVPdnI0eDlLbCs5MTZCNzB4MTN1SGV1S2NhMTlxNnJJQnczR21remdOVEdSVDBFUVVaTkN1T2daWllVR29sRXNSMWxRQlZybk5JSS94dEExdGh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzk1OTg5ODU6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3NTEzNDAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS3dJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLd0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2UXREQVg1dmt5elFqRXo2Ti93MlZTUm9INk5nb1dxdjVKditKYm1MUUFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMTQwNTQ3MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzA5MTM5MDQwOFwifSIKfQ=="  // PUT your SESSION_ID 


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
