import { fileURLToPath } from 'url';
import { cmd } from '../command.js';

const __filename = fileURLToPath(import.meta.url);

cmd({
    pattern: "bot",
    alias: ["start", "hi", "hello"],
    desc: "Check if bot is active",
    react: "✅",
    category: "main",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    try {
        const message = `╭━━━━━━━━━━━━━━━╮
│   ✅ *ʙᴏᴛ ɪꜱ ᴀᴄᴛɪᴠᴇ*
╰━━━━━━━━━━━━━━━╯

ʜᴇʟʟᴏ! 👋 ɪ ᴀᴍ ᴀ ꜰᴀꜱᴛ & ᴘᴏᴡᴇʀꜰᴜʟ
ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴡɪᴛʜ ᴀᴍᴀᴢɪɴɢ ꜰᴇᴀᴛᴜʀᴇꜱ 🚀

╭─❏ *ᴄᴏᴍᴍᴀɴᴅꜱ* ❏
│
│ ◈ ᴛʏᴘᴇ *.ᴍᴇɴᴜ* ➜ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ
│ ◈ ᴛʏᴘᴇ *.ᴘɪɴɢ* ➜ ᴄʜᴇᴄᴋ ꜱᴘᴇᴇᴅ
│ ◈ ᴛʏᴘᴇ *.ᴜᴘᴅᴀᴛᴇ* ➜ ʟᴀᴛᴇꜱᴛ ᴠᴇʀꜱɪᴏɴ
│
╰─────────────────

> *ᴛʏᴘᴇ .ᴍᴇɴᴜ ᴛᴏ ꜱᴛᴀʀᴛ* 🎉`;

        await conn.sendMessage(from, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363416743041101@newsletter',
                    newsletterName: 'ᴍɪɴɪ ʙᴏᴛ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error:", error);
        reply("❌ ᴇʀʀᴏʀ!");
    }
});
