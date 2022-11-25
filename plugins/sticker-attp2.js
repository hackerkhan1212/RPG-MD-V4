let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
	conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp2?apikey=${global.lolkeysapi}&text=${response[0]}`, 'attp.webp', '', m, false, { asSticker: true })
}
 handler.help = ['attp2 <teks>']
handler.tags = ['sticker' , 'premium']
handler.command = /^(attp2)$/i
handler.limit = true
handler.premium = true

export default handler