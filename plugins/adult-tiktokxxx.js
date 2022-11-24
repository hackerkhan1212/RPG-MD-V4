/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Alberto Y Ashly⚘
-----------------------------------------------------------------------------------------*/

import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐓𝐡𝐞 +𝟏𝟖 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐚𝐫𝐞 𝐝𝐢𝐬𝐚𝐛𝐥𝐞𝐝 𝐢𝐧 𝐭𝐡𝐢𝐬 𝐠𝐫𝐨𝐮𝐩, 𝐢𝐟 𝐲𝐨𝐮 𝐚𝐫𝐞 𝐚𝐝𝐦𝐢𝐧 𝐚𝐧𝐝 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐞𝐧𝐚𝐛𝐥𝐞 𝐭𝐡𝐞𝐦 𝐮𝐬𝐞 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 #𝐞𝐧𝐚𝐛𝐥𝐞 𝐦𝐨𝐝𝐨𝐡𝐨𝐫𝐧𝐲**'
let fgif = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":'Enjoy*`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `🧿 𝗜𝘁𝘅_𝗶𝗯𝗿𝗮𝗵𝗶𝗺 - 𝙱𝚘𝚝 🔮`, 'jpegThumbnail': false }}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let name = await conn.getName[who]
let json = await fetch(`http://mkbot.online/api/tiktok/nsfw/nsfwtt?&apikey=${mkbotkey}`)
let jsons = await json.json()
let res = jsons.result
conn.sendButton(m.chat, `- 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐭𝐢𝐤𝐭𝐨𝐤 𝐠𝐨𝐥𝐝🥵 -`, `*◈•@${who.split("@s.whatsapp.net")[0]}*`, res, [['🔄 𝗙𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴🔄', `/${command}`]], gif { mentions: [who] })}
handler.command = /^(tiktokxxx)$/i
export default handler
global.mkbot = ['YheAV8y5', 'si2igJxE', 'arvhNlGn', 'KpclizKL', 'NQp3ARJH', 'lwSUluWz', 'HSxJ72Rf', 'H6pvVPJc', 'uVAf54xz', 'nwJVzP6v']
global.mkbotkey = mkbot[Math.floor(mkbot.length * Math.random())]
