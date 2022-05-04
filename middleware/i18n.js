export default function ({ isHMR, app, store, route, error }) {
  //   const defaultLocale = app.i18n.fallbackLocale;
  //   const locale = route.query.lang || defaultLocale;

  console.log("hello from middleWare");

  //   // If middleware is called from hot module replacement, ignore it
  //   if (isHMR) return;
  //   if (store.state.app.locales.indexOf(locale) === -1) {
  //     return error({ message: "This page could not be found.", statusCode: 404 });
  //   }
  //   //Mutate the store's locale once we understand which locale is being requested prior to each page render
  //   // store.commit("app/SET_LANG", locale);
  //   // Set locale from the query string '?lang='**''
  //   app.i18n.locale = store.state.app.locale;
}
