//we will use this to generate a unique ID's'
module.exports = () => 
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

