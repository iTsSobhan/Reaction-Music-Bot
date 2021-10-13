module.exports = async (client) => {
  console.log(`${client.guilds.cache.size} Servers`);
  await client.user.setActivity("-play", {
    type: "PLAYING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};

