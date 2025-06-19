//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtIRzVuQ0Q3QS91VC9tQ2FOcUJBaGRNMmdPQzVmaWkzcE1mNXJuQmUyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2xUUXN2U0EzUGFoa2M0ODNlTEJuT01jVlp0ZWNBeWkvU0taUXAyZDVpdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBR3BlREc2aVFoNjR1NFJ6U1BreG1uNGIyWXdQUmpETmRKdG8vaU1BL1VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTVCtVdGhqZkFPR3BvbCtYNnNScFNHSDJMMGl0azEvalJlblZCcSt5SnpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJLdE1rMkI1TStYV1N2YWJ1RURrUWRWR0dIOW1KZEhuNk8vUlUxM2ZuWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZITWk2RSt3VXJsTFZtdG5tUUJOdEU0b3o2bXhDV3Z1UDNqb0ptWWRLbE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUxNdmdQSVNmZjNKMWNhUHE4SnFqK2t4TkpueWt2dGpaSFRneURZby9GST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3VQVU5KQmdhWmZXalJQSzk5NE4xR3d5Wms5ZDR5YXF6OHdLMDdsaEtFUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1tcjA4QW43Nmc4ZXpYQWJ6YlBKZ2FTM1BMSmVLRjkxWS9lZTVMTWtpd3dsbVFpL3B1eU1uQWZ4TzlUbml0UHE4SUpFMFZmWmcxd3VOMWhuQ0luZml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6ImwvM2NhZ2Fld1IzNnZ3dnlkZ1A1TUs2bFdSTXA4d3hQMHY4a1A5aklDeXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlZFZGpUdlEwUi1HS1pqT1p2VS1pLUEiLCJwaG9uZUlkIjoiNzQzNzEzMTQtNWNiZC00YmM3LTgzNzUtYjY4ZWFlNzEzZmNlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktLc0NhNU12QVNCVlNpdC8vbmtNZXJtK3ByMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2NnZIdmt1ZjNJLzExdFdYTkxvc0VOdlJCYzA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRlFFTFpZOTMiLCJtZSI6eyJpZCI6Ijk0NzIzNjI4MDcyOjNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI0NDY4MTI0OTQ1MjI0OTozQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmpQelk0Q0VMVDZ6OElHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUC9CVlJqUFFwckNVQnVXNFRUZGhkZWpMRzB3UG54d3YzWFdyRmJvQ3BtTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRHJzU3dLaEZQN0NWQkY0VDNwVE03OVpweTYxYm9Yc0MwdVAyb1lsdEREMVBPcnpsbzlJaVN2TmtiOWFLMmNhSDRJaU50RDdIcHpIekJLd0JZN3dyQnc9PSIsImRldmljZVNpZ25hdHVyZSI6ImVnMS91bEY4TDFGWWI0dzJDNmd3Z2hTdEpUZVlCaEdFd1cwU3F5UW5DRjBzd2pVeHUxY29IdkhwbGxtWEN2U0w1K0prb21OUzQxbEZ6MzVoZ04xSGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjM2MjgwNzI6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUL3dWVVl6MEthd2xBYmx1RTAzWVhYb3l4dE1ENThjTDkxMXF4VzZBcVpqIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQXNJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTAzMzQ3ODUsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOVGUifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94723628072",
  PASSWORD: 
    process.env.PASSWORD || "1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
