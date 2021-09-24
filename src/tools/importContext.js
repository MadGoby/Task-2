function importAll(context) {
  context.keys().map(context);
}

function importContext() {
  importAll((require.context('./../common', true, /.scss$/)));
  importAll((require.context('./../blocks', true, /.scss$|Init.js/)));
}

export { importContext }