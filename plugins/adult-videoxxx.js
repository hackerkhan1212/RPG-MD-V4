let handler  = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗]𝗧𝗵𝗲 +𝟭𝟴 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗮𝗿𝗲 𝗱𝗶𝘀𝗮𝗯𝗹𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽, 𝗶𝗳 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗮𝗱𝗺𝗶𝗻 𝗮𝗻𝗱 𝘄𝗮𝗻𝘁 𝘁𝗼 𝗲𝗻𝗮𝗯𝗹𝗲 𝘁𝗵𝗲𝗺 𝘂𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 #𝗲𝗻𝗮𝗯𝗹𝗲 𝗺𝗼𝗱𝗼𝗵𝗼𝗿𝗻𝘆*'   
let res = pickRandom(asupan)
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)}
handler.help = ['videoxxx']
handler.tags = ['random']
handler.command = /^videoxxx|vídeoxxx$/i
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const asupan = [
"https://l.top4top.io/m_2235dduf01.mp4",
"https://a.top4top.io/m_2235268m61.mp4",
"https://b.top4top.io/m_2235k7hze2.mp4",
"https://c.top4top.io/m_2235lxohb3.mp4",
"https://d.top4top.io/m_2235jwd2e4.mp4",
"https://e.top4top.io/m_2235h5b1z5.mp4",
"https://f.top4top.io/m_2235gihcu6.mp4",
"https://l.top4top.io/m_2235dp7m41.mp4",
"https://a.top4top.io/m_2235zxue82.mp4",
"https://b.top4top.io/m_2235m3bhf3.mp4",
"https://c.top4top.io/m_2235vjyio4.mp4",
"https://d.top4top.io/m_2235m9tdu5.mp4",
"https://e.top4top.io/m_2235y2kon6.mp4",
"https://f.top4top.io/m_2235rhid57.mp4",
"https://g.top4top.io/m_2235zgsqf8.mp4",
"https://i.top4top.io/m_2235drxxg10.mp4",
"https://d.top4top.io/m_2235fzynm1.mp4",    
"https://e.top4top.io/m_22354t3zk2.mp4",
"https://f.top4top.io/m_2235gyxgh3.mp4",
"https://g.top4top.io/m_22357cmft4.mp4", 
"https://i.top4top.io/m_2235mcizm6.mp4",
"https://j.top4top.io/m_2235gwsn17.mp4",
"https://k.top4top.io/m_2235gzzjc8.mp4",
"https://a.top4top.io/m_2235l9y1310.mp4",  
"https://l.top4top.io/m_2235r1opz1.mp4",    
"https://a.top4top.io/m_22358cuuu2.mp4",
"https://b.top4top.io/m_22350c9br3.mp4",
"https://c.top4top.io/m_22355p2js4.mp4",  
"https://d.top4top.io/m_2235lv7415.mp4",
"https://e.top4top.io/m_2235q8z3f6.mp4",     
"https://b.top4top.io/m_22358oas31.mp4",
"https://c.top4top.io/m_2235xg7o62.mp4",
"https://d.top4top.io/m_2235ut91p3.mp4",
"https://e.top4top.io/m_22352ktoj4.mp4",
"https://f.top4top.io/m_2235hcqj65.mp4",
"https://g.top4top.io/m_2235j81s76.mp4", 
"https://d.top4top.io/m_2235993nu1.mp4",
"https://c.top4top.io/m_22352lrsd1.mp4",
"https://g.top4top.io/m_2235pi8791.mp4",
"https://g.top4top.io/m_22428pnh01.mp4",
"https://i.top4top.io/m_2242jpc3c1.mp4",
"https://f.top4top.io/m_2235sxi5y1.mp4"
]
