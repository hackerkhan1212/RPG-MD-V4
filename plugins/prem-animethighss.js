import axios from "axios"
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let handler = async (m, {command, conn}) => {
let res = await axios(`https://api.lolhuman.xyz/api/random/nsfw/animethighss?apikey=${global.lolkeysapi}`)
await conn.sendButton(m.chat, res, 'nsfw.jpg', `It is finished`, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
            
}
handler.help = ['animethighss']
handler.tags = ['nsfw', 'premium']
handler.command = /^(animethighss)$/i
export default handler
