import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝗧𝗵𝗲 +𝟭𝟴 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗮𝗿𝗲 𝗱𝗶𝘀𝗮𝗯𝗹𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽, 𝗶𝗳 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗮𝗱𝗺𝗶𝗻 𝗮𝗻𝗱 𝘄𝗮𝗻𝘁 𝘁𝗼 𝗲𝗻𝗮𝗯𝗹𝗲 𝘁𝗵𝗲𝗺 𝘂𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 #𝗲𝗻𝗮𝗯𝗹𝗲 𝗺𝗼𝗱𝗼𝗵𝗼𝗿𝗻𝘆'
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗]𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐔𝐬𝐚𝐠𝐞 𝐄𝐱𝐚𝐦𝐩𝐥𝐞 ${usedPrefix + command} with me first*`
try {
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `videos related to: ${args.join(" ")}`
const sections = [{
title: `ⓗⓜⓜⓜⓜ`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '𝗰𝗵𝗼𝗼𝘀𝗲 𝗮𝗻 𝗼𝗽𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗽𝗿𝗲𝘀𝘀 𝘀𝗲𝗻𝗱',
title: " 『 𝙧𝙚𝙡𝙖𝙩𝙚𝙙 𝙫𝙞𝙙𝙚𝙤𝙨 』",
buttonText: "[♦ 𝙧𝙚𝙨𝙪𝙡𝙩𝙨 ♦]",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: '⇧ 𝙨𝙚𝙡𝙚𝙘𝙩 𝙩𝙝𝙞𝙨 𝙤𝙥𝙩𝙞𝙤𝙣 𝙩𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙩𝙝𝙞𝙨 𝙫𝙞𝙙𝙚𝙤 ⇧', rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐫𝐫𝐨𝐫, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐭𝐫𝐲 𝐚𝐠𝐚𝐢𝐧*')
}}
handler.command = /^xnxxsearch$/i
export default handler
