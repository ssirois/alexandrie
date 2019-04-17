const Bundler = require('parcel-bundler');
const Path = require('path');
const util = require('util');

const exec = util.promisify(require('child_process').exec);

appBundle().then(() => {
  runElectron();
});

async function appBundle() {
  await bundleFrontend();
  await bundleBackend();
}

async function bundleFrontend() {
  await bundle(Path.join(__dirname, './index.html'), {
    publicUrl: Path.join(__dirname, './dist'),
    hmr: false,
  });
}

async function bundleBackend() {
  await bundle(Path.join(__dirname, './main.ts'));
}

async function bundle(path, config) {
  const bundler = new Bundler(path, {
    watch: true,
    target: 'electron',
    ...config,
  });
  await bundler.bundle();
}

async function runElectron() {
  await exec('electron .');
  runElectron();
}
