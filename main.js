(function() {
  'use strict';
  const key = 'DOWN_KEY',
    dateFormDiv = document.getElementById('dateFormDiv'),
    dateForm = document.getElementById('dateForm'),
    invalidText = document.getElementById('invalidText'),
    submitButton = document.getElementById('submitButton'),
    downDiv = document.getElementById('downDiv'),
    downDate = document.getElementById('downDate'),
    resetButton = document.getElementById('resetButton'),
    secretButton = document.getElementById('secretButton'),
    secretText = document.getElementById('secretText');

  const lfConfig = {
    driver: [
      localforage.INDEXEDDB,
      localforage.WEBSQL,
      localforage.LOCALSTORAGE
    ],
    name: 'localforage',
    version: '1',
    storeName: 'dv1',
  };

  let debugToggle = false;

  let loadDate = date => {
    downDate.innerHTML = 'It will be ' + moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
    downLeft.innerHTML = moment(date).fromNow() + ' from now.';
    downDiv.style.display = 'block';
  }

  let resetDisplay = () => {
    invalidText.style.display = 'none';
    downDiv.style.display = 'none';
  }

  // Initialize Localforage
  localforage.config(lfConfig);

  // Check if the Key exists
  localforage.getItem(key).then(readValue => {
    resetDisplay();
    if (readValue == null) {
      // if not, load it for first run
      dateFormDiv.style.display = 'block';
    } else {
      // load old value into element
      loadDate(readValue);
    }
  }).catch(err => {
    console.log('Error:');
    console.log(err);
  });

  submitButton.addEventListener('click', event => {
    let input = dateForm.elements['selectedDate'].value;
    if (input === '') {
      invalidText.style.display = 'block';
    } else {
      let date = moment(input);
      localforage.setItem(key, date.valueOf()).then(() => {
        //console.log('DB new, set ' + key + ' as ' + date.valueOf());
        dateFormDiv.style.display = 'none';
        loadDate(date);
      }).catch(err => {
        console.log(err);
      });
    }
  });

  resetButton.addEventListener('click', event => {
    localforage.removeItem(key).then(() => {
      dateFormDiv.style.display = 'block';
      resetDisplay();
    }).catch(err => {
      console.log(err);
    });
  });

  secretButton.addEventListener('click', event => {
    if (debugToggle == false) {
      secretText.innerHTML = 'driver: ' + localforage.driver() + '\', name: \'' + lfConfig.storeName + '\', key: \'' + key + '\'';
      debugToggle = true;
    } else {
      secretText.innerHTML = '';
      debugToggle = false;
    }
  });

  // Setup Service Worker for PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(registration => {
        // Registration was successful
      }, err => {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
})();

