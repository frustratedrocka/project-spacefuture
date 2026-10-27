const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const code = fs.readFileSync(__dirname + '/../templates/image-sizing.njk', 'utf8')
  .replace(/^\s*<script>\s*|\s*<\/script>\s*$/g, '');
const images = [];
class Image {
  constructor(alt) {
    this.nodeType = 1;
    this.alt = alt;
    this.rules = {};
    this.style = {
      setProperty: (name, value, importance) => { this.rules[name] = [value, importance]; },
      removeProperty: (name) => { delete this.rules[name]; }
    };
  }
  getAttribute(name) { return name === 'alt' ? this.alt : null; }
  matches(s) { return s === '.content img[alt]'; }
  querySelectorAll() { return []; }
}
const body = {nodeType: 1, matches: () => false, querySelectorAll: () => images};
const document = {readyState: 'complete', body};
let observer;
class MutationObserver {
  constructor(cb) { this.cb = cb; observer = this; }
  observe() {}
}
vm.runInNewContext(code, {document, MutationObserver, WeakMap, Number});
function add(alt, width, height, fit) {
  const img = new Image(alt);
  images.push(img);
  observer.cb([{type:'childList', addedNodes:[img]}]);
  assert.deepEqual(img.rules.width, [width, 'important'], `Width: ${alt}`);
  assert.deepEqual(img.rules.height, [height, 'important'], `Height: ${alt}`);
  if (fit) assert.deepEqual(img.rules['object-fit'], [fit, 'important'], `Fit: ${alt}`);
  else assert.equal(img.rules['object-fit'], undefined);
  assert.deepEqual(img.rules['max-width'], ['100%', 'important']);
  return img;
}
// Original v1 numeric support
add('Admin/Attachments/Sven_SQ.webpcover250x250', '250px', '250px', 'cover');
add('Admin/Attachments/Akoni-E_SQ.webpcover250x350', '250px', '350px', 'cover');
add('Something/Mech.pngcover|300x225', '300px', '225px', 'cover');
add('Something/Pilot.webp250x275', '250px', '275px', 'contain');
// HarOS reproduction
add('Haro.webpws-med right', '300px', 'auto');
// Named presets, with natural aspect ratio when only one size is set
add('Portrait.webphs-med', 'auto', '300px');
add('Ship.webpcover wsmall hs-med', '200px', '300px', 'cover');
add('Name.png wtall', '700px', 'auto');
add('Name.png hm-tl', 'auto', '600px');
add('Name.webpwm-sm htiny', '400px', '100px', 'contain');
add('Mech.webpcover250x250 right', '250px', '250px', 'cover');
add('Other.pngcover|250x300', '250px', '300px', 'cover');
add('Other.png ws-med wsmall', '200px', 'auto');
add('Other.webp ws-med 250x320', '250px', '320px', 'contain');
// Unknown/normal image and text in path must stay untouched
const unchanged = new Image('Regular image.jpg');
images.push(unchanged);
observer.cb([{type:'childList', addedNodes:[unchanged]}]);
assert.deepEqual(unchanged.rules, {});
const unknown = new Image('Admin/ws-med/Artwork.jpg');
images.push(unknown);
observer.cb([{type:'childList', addedNodes:[unknown]}]);
assert.deepEqual(unknown.rules, {});
// MutationObserver changes to alt
const edited = add('Somewhere/a.webpcover250x250', '250px', '250px', 'cover');
edited.alt = 'Somewhere/a.webpws-med right';
observer.cb([{type:'attributes', target:edited}]);
assert.deepEqual(edited.rules.width, ['300px','important']);
assert.deepEqual(edited.rules.height, ['auto','important']);
assert.equal(edited.rules['object-fit'], undefined);
console.log('All v1.1 image sizing tests passed.');
