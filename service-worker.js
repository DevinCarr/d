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
    "revision": "f0c88a52d8df9ef9fa1b16c8187bccef"
  },
  {
    "url": "/d/static/css/app.a3341da3d4c89e7009bcf2540508cc3b.css",
    "revision": "a3341da3d4c89e7009bcf2540508cc3b"
  },
  {
    "url": "/d/static/js/app.913eede78fc82ead668d.js",
    "revision": "5db512ac80d14feb665f70eca156cf64"
  },
  {
    "url": "/d/static/js/manifest.af0fac4afd4101e031e5.js",
    "revision": "483cc30168cb772dc070581d5e419e86"
  },
  {
    "url": "/d/static/js/vendor.f44cdad92d598bd23a5b.js",
    "revision": "3202fbb7b2a057c7f9e8a21be01b1f2d"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
