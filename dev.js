const Bundler = require('parcel-bundler');
const Path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

bundle().then(() => {
  runElectron();
});

async function bundle() {
  const bundler = new Bundler(Path.join(__dirname, './index.html'), {
    publicUrl: Path.join(__dirname, './dist'),
    watch: true,
    target: 'electron',
    hmr: false
  });
  await bundler.bundle();
  const bundler2 = new Bundler(Path.join(__dirname, './main.ts'), {
    watch: true,
    target: 'electron'
  });
  await bundler2.bundle();
}

async function runElectron() {
  await exec('electron .');
  runElectron();
}
