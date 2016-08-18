import {CustomRenderer} from './custom-renderer';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-validatejs', config => {
      config.setRenderer(CustomRenderer);
    });

  aurelia.start().then(a => {
    a.setRoot('app');

    System.config({
      paths: {
        "*": "dist/*"
      }
    })
  });
}
