exports.encodeUrl = (url) => {
  return url.replace(/ /g, "-").toLocaleLowerCase();
};
