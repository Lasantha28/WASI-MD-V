//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU9JeXA2WW1WVGJMbHJac2lnb012U094V1NNcHlGWFFpWitIZXJVcGludz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWVUMEhQcWtKR3NBbEw0N3lzZGFXMGNJMVZobG9KSlNxaTdpa29PV3NuTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSlVGRm5oTXdYU1BrWUJqQ0FRTkxmT0pWYmlheVRKR1VJV3dUOG1yeTF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyZ09sd3MxN2w5VXZKemdrNEowbXA2QzQwdVRkWGVHL0I3cnJ6cXlBSWpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklEaFhzVGNDNm55SEFaWHY5U0pnb0t2eXQwZiszMlN2TlA5YVFIcXA5ME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRud0xQcDBwZE1MUFl2czV3NmpXdy9wKzcyQmJMRTBkZ295czV6bE0zVDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU95b2Z5ODFIekU2ZmxZRERjSk9EcEdvOXVrd2Z0UHA2SlFCQ3hsNngxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkJRcmFybEE4TEVKbktqMlNzdHFwRDZLVDRZYUFxd1NWd1g2dElCOHhnaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhIOEU1aEZ4ajhSWlUreFJ4TTZ3dlpSdGM0dWNRWGZXL0VDVDRMajZyT3dSakc2VldDTlJYeWtJZTIrUU5kVTZpR1BrL09MNGRIMTBzTXBIRGQyeUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM3LCJhZHZTZWNyZXRLZXkiOiJBZVJWcjNTMklqZnQ3NkNYcmJUbjBsS0JVdlNwbXBISjdUUDNuNlR2UHZzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjNEdKcHlCMVMyU19SX2hXUVd6V09RIiwicGhvbmVJZCI6IjJjY2UxYzNlLTU4Y2UtNDhkYi1hZWIwLTJlNzM1OGEwYTkwNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDclZrRWVFc0RtU1h3ZEJkWi9TOStnZ2FKcXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZyaWNuWTUydHRDQ1FRUmNNOGJzT3d2ZTlnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNMWTZNMko5IiwibWUiOnsiaWQiOiI5NDc1OTQ5MTUwNjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNoYXRodXJhIHMucyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWpUbUxVREVPVGptTGtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUDFRK0lwWkJGc0hsNkE4b3JGbndhYkw1eFZBT0RXVHk5Nm1oZ2JRSUh3Zz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUk9GcEVza0h2T1FkRHhORFE3SWJrOS9VclczN1lla0xTNFZra0JuU0ZxSlpFbGJ4d0hjbEVicHE5YUZwVjFRZ29OYmhKY0Q2WURuWTZKcGRnd0p4Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6IkV4Nmo4bHdqRmZxNDR3ajUyTitQRHQxM1FsZG5leEc0RzRVUHA1ZnB0T1J3dnh0eGpjNFo2YWpvRi9RSmIxY3k1WTNnbk83R05YL2d0OFBNK0xFbkN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTk0OTE1MDY6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUOVVQaUtXUVJiQjVlZ1BLS3haOEdteStjVlFEZzFrOHZlcG9ZRzBDQjhJIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNTU2NDAyfQ==";
module.exports = {
  menu: process.env.MENU || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUhLVFdKRFU3N2cxUzFsYWhxYWpRdTlwODVoekh4N0xTR3B2eXlLZG0zMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3pqbkxCUTcrS3FkTkdCNWRmZVBoa2pqVE42QjFXc1RiNlBjUkxNUWJEST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRFBWWEI2WVRIT2hvRlltUUFIVklMdGcrTy9vRTkyV010UmluK0NsZG5NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5ZlBQc0lON1kzQmhjdmlSUnFLWFJjZHFVNXMxQ2h6MS9wcTkrb2tRcVZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklMbXVmOTU1dXZmUmdDcC9ER3psck1NbXpIUTNtYVZZSFVUb2hQSXVkbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZWcGF0NUR4VmVWc0pDTUdZenJWWEt1MENMTGZ2ZzZRWHY3Nm5DTzNSVzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEMwbEJtZlJFbUhSNjVUdUc1VDJOOGRCM3JxT0FVZXBITExJb29PTkkxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVliaGE0aXhoaXVPd05NYXYxc0txQUtxWER2U1VOMGsrNlJVRjloc2JXaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpIaVhwL3FaUTliWlZXQnR1QmhuczlYeHhBVEVKUjJYSkRxeDQzTkZ0cDM0Szk1czBCT1NJRnpMM1pEZWkvd2ZKa1RkTlVySzh5MG85SUxvS21kakJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJMRGY2N3B0d2xxRDNSNnMvTS9JZ3ZQd3dUYjd0WEh5QXZveEVjREVFLy84PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItWGFrSUxzMVE0eUl5N0U5XzRTUkNRIiwicGhvbmVJZCI6Ijg0NjYxMzJhLWY2MDAtNGQ0Ny1iN2ExLTM4NzliYmIwMDc5NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrZjlXMVF3ejFYem4yVy9ueW8xTGc3cFREcUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidys5TGpzNnZWdUZrSnNpbmowWnVwOE9HbXJVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkE4WU5WQzJTIiwibWUiOnsiaWQiOiI5NDc1OTQ5MTUwNjozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNoYXRodXJhIHMucyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXJUbUxVREVLU0ltYmtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUDFRK0lwWkJGc0hsNkE4b3JGbndhYkw1eFZBT0RXVHk5Nm1oZ2JRSUh3Zz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicWhLUHFlTFNsRTQraXFWSzBaZUhuVmVJbW92U0owenNHa3l1TmRtL05nYkZ5ZC9ZcDdYeTRGcE0wNXRKK01FRjh2STVYZDZPUGJhLzlVZUZDeFhmQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Ilc4QitmMEg2RkxrWG9YYWVGYnhycll6Mmp3MFBtcUFuMzdEekh2Z3N0bzM0eDMyejNQakpwY3pPdGhCRm5qMm8vbjFIdEd3UzFQbDllT1QxbEhXQkJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTk0OTE1MDY6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUOVVQaUtXUVJiQjVlZ1BLS3haOEdteStjVlFEZzFrOHZlcG9ZRzBDQjhJIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNTYxMDc0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU00WSJ9",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
