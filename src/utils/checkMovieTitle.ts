export const checkMovieTitle = function (titles: any) {
  let languagesArr = new Set();

  for (let language in titles) {
    languagesArr.add(language);
  }

  if (languagesArr.has('en')) return titles.en;
  if (languagesArr.has('en_jp')) return titles.en_jp;
  if (languagesArr.has('en_us')) return titles.en_us;
  if (languagesArr.has('ja_jp')) return titles.ja_jp;

  return '-';
};
