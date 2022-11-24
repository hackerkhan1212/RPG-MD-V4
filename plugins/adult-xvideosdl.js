import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] The +18 commands are disabled in this group, if you are admin and want to enable them use the command #enable modohorny*'
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] Please enter a valid 𝚇𝚅𝙸𝙳𝙴𝙾S link , 𝗘𝘅𝗮𝗺𝗽𝗹𝗲: ${usedPrefix + command} https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`
try {
await conn.reply(m.chat, '[❗] The video is being processed, wait a moment while it is sent..\n\n﹣ The video is too much in size it will take time', m)
let res = await fetch(`https://zenzapis.xyz/downloader/xvideos?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐫𝐫𝐨𝐫, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐭𝐫𝐲 𝐚𝐠𝐚𝐢𝐧*\n\n*- 𝐂𝐡𝐞𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐡𝐞 𝐥𝐢𝐧𝐤 𝐢𝐬 𝐬𝐢𝐦𝐢𝐥𝐚𝐫 𝙰:*\n*◉ https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*')
}}
handler.command = /^(xvideosdl)$/i
export default handler
