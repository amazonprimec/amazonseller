import { fileURLToPath } from 'url';
import axios from 'axios';
import fetch from 'node-fetch';
import { sleep } from '../lib/functions.js';
import { cmd, commands } from '../command.js';
import config from '../config.js';

const __filename = fileURLToPath(import.meta.url);

cmd({
  pattern: "ship",
  alias: ["match", "love"],
  desc: "Randomly pairs the command user with another group member.",
  react: "❤️",
  category: "fun",
  filename: __filename
}, async (conn, m, store, { from, isGroup, groupMetadata, reply, sender }) => {
  try {
    if (!isGroup) return reply("❌ This command can only be used in groups.");

    const specialNumber = config.DEV ? `${config.DEV}@s.whatsapp.net` : null; // Convert to WhatsApp format
    const participants = groupMetadata.participants.map(user => user.id);
    
    let randomPair;

    if (specialNumber && participants.includes(specialNumber) && sender !== specialNumber) {
      randomPair = specialNumber; // Always pair with this number if available
    } else {
      // Pair randomly but ensure user is not paired with themselves
      do {
        randomPair = participants[Math.floor(Math.random() * participants.length)];
      } while (randomPair === sender);
    }

    const message = `💘 *Match Found!* 💘\n❤️ @${sender.split("@")[0]} + @${randomPair.split("@")[0]}\n💖 Congratulations! 🎉`;

    await conn.sendMessage(from, {
      text: message,
      contextInfo: {
        mentionedJid: [sender, randomPair],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363416743041101@newsletter",
          newsletterName: "𝐸𝑅𝐹𝒜𝒩 𝒜𝐻𝑀𝒜𝒟",
          serverMessageId: 143
        }
      }
    });

  } catch (error) {
    console.error("❌ Error in ship command:", error);
    reply("⚠️ An error occurred while processing the command. Please try again.");
  }
});
