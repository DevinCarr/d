importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/index.html",
    "revision": "c45fc56fd1182aa4697a7ed803843ec8"
  },
  {
    "url": "/static/css/app.a3341da3d4c89e7009bcf2540508cc3b.css",
    "revision": "a3341da3d4c89e7009bcf2540508cc3b"
  },
  {
    "url": "/static/js/app.d3577d7e5ff24e7e7102.js",
    "revision": "92acf7e9c02463579252f745216ee3d3"
  },
  {
    "url": "/static/js/manifest.075229ad826bf099ded5.js",
    "revision": "3fa50f82a3713fa45d02af40b30e6c39"
  },
  {
    "url": "/static/js/vendor.f44cdad92d598bd23a5b.js",
    "revision": "3202fbb7b2a057c7f9e8a21be01b1f2d"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
