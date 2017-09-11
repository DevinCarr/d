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
    "url": "/d/index.html",
    "revision": "b926d13a72b398b920223552a1d02339"
  },
  {
    "url": "/d/static/css/app.a3341da3d4c89e7009bcf2540508cc3b.css",
    "revision": "a3341da3d4c89e7009bcf2540508cc3b"
  },
  {
    "url": "/d/static/js/app.d3577d7e5ff24e7e7102.js",
    "revision": "92acf7e9c02463579252f745216ee3d3"
  },
  {
    "url": "/d/static/js/manifest.1ab1ae75654a456d6cb1.js",
    "revision": "73ff49b0712c59b493fb07d60f52b139"
  },
  {
    "url": "/d/static/js/vendor.f44cdad92d598bd23a5b.js",
    "revision": "3202fbb7b2a057c7f9e8a21be01b1f2d"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
