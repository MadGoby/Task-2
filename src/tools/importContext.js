function importAll(context) {
  context.keys().map(context);
}

function importContext() {
  importAll((require.context('./../common', true, /.scss$/)));
  importAll((require.context('./../blocks', true, /.scss$|Init.js/)));
  importAll((require.context('./../favicons', true, /.png$/)));
}

export { importContext };
