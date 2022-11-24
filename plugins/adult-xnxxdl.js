import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝗧𝗵𝗲 +𝟭𝟴 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗮𝗿𝗲 𝗱𝗶𝘀𝗮𝗯𝗹𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽, 𝗶𝗳 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗮𝗱𝗺𝗶𝗻 𝗮𝗻𝗱 𝘄𝗮𝗻𝘁 𝘁𝗼 𝗲𝗻𝗮𝗯𝗹𝗲 𝘁𝗵𝗲𝗺 𝘂𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 #𝗲𝗻𝗮𝗯𝗹𝗲 𝗺𝗼𝗱𝗼𝗵𝗼𝗿𝗻𝘆*'
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗]𝗣𝗹𝗲𝗮𝘀𝗲 𝗲𝗻𝘁𝗲𝗿 𝗮 𝘃𝗮𝗹𝗶𝗱 𝘅𝗻𝘅𝘅 𝗹𝗶𝗻𝗸, 𝐄𝐱𝐚𝐦𝐩𝐥𝐞: ${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`
try {
await conn.reply(m.chat, '[❗]The video is being processed, wait a moment while it is sent.\n\n﹣ The shipping time depends on the weight and duration of the video', m)
let res = await fetch(`https://zenzapis.xyz/downloader/xnxx?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗]error, please try again*\n\n*- check that the link is similar to:*\n*◉ https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*')
}}
handler.command = /^(xnxxdl)$/i
export default handler
