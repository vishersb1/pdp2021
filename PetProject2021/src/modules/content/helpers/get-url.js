const getUrl = (location) => {
  let url = location.pathname;
  url = url.split("/");
  url = url[url.length - 1];
  return url;
};

export default getUrl;
