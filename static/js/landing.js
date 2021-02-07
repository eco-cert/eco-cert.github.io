(function() {
  'use strict';
  var dialogButton = document.querySelector('.dialog-button');
  var dialog = document.querySelector('#dialog');
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }

  // var shortlinkBtn = document.querySelector('#shortlink-btn');
  // shortlinkBtn.addEventListener('click', function() {
  //   if (!firebase.auth().currentUser) {
  //     dialog.showModal();
  //   }
  // });

  dialogButton.addEventListener('click', function() {
    dialog.showModal();
  });

  var closeBtn = dialog.querySelector('.close-button');
  var facebookBtn = dialog.querySelector('.facebook-login');
  var googleBtn = dialog.querySelector('.google-login');
  var twitterBtn = dialog.querySelector('.twitter-login');
  var vkontakteBtn = dialog.querySelector('.vkontakte-login');
  var odnoklasnikiBtn = dialog.querySelector('.odnoklasniki-login');

  closeBtn.addEventListener('click', function() {
    dialog.close();
  });

  facebookBtn.addEventListener('click', function() {
    dialog.close();
    facebookSignin();
  });

  googleBtn.addEventListener('click', function() {
    dialog.close();
    googleSignin();
  });

  twitterBtn.addEventListener('click', function() {
    dialog.close();
    twitterSignin();
  });

  vkontakteBtn.addEventListener('click', function() {
    dialog.close();
    vkontakteSignin();
  });

  odnoklasnikiBtn.addEventListener('click', function() {
    dialog.close();
    odnoklasnikiSignin();
  });
  // 2.0
  // --> {"jsonrpc": "2.0", "method": "subtract", "params": {"minuend": 42, "subtrahend": 23}, "id": 3}
  // <-- {"jsonrpc": "2.0", "result": 19, "id": 3}

  // 1.1
  // --> {"version": "1.1", "method": "confirmFruitPurchase", "params": [["apple", "orange", "mangoes"], 1.123], "id": "194521489"}
  // <-- {"version": "1.1", "result": "done", "error": null, "id": "194521489"}

  // 1.0
  // --> {"method": "echo", "params": ["Hello JSON-RPC"], "id": 1}
  // <-- {"result": "Hello JSON-RPC", "error": null, "id": 1}

  // var data = {"jsonrpc": "2.0",
  //   "method": "Api.Auth",
  //   "params": user,
  //   "id": Math.floor(Math.random() * 0xffffffff)
  // };

  var checkUuid = function(){
    var data = {
      "jsonrpc": "2.0",
      "method": "User.RequestUuid",
      "params": {},
      "id": Math.floor(Math.random() * 0xffffffff)
    };

    var body = JSON.stringify(data);
    nanoajax.ajax({url: '/api/v1/', headers: {'Content-Type': 'application/json'}, body: body}, function (code, responseText, request) {
      console.log("CODE:", code);
      if (code == 200) {
        var response = JSON.parse(responseText);
        if (response) {
          var result = response.result;
          if (result && result.data) {
            localStorage.setItem('uuid', result.data);
            window.location = '/app';
          }
        }
      } else {
        console.log("ERROR: ", responseText);
      }
    });
  }
  
  window.goToApplication = function() {
    checkUuid();
  };

  checkUuid();
}());


/**
 * Function called when clicking the Login/Logout button.
 */

function facebookSignin() {
  var data = {
    "jsonrpc": "2.0",
    "method": "User.RequestAuthUrl",
    "params": {
      "provider": "facebook"
    },
    "id": Math.floor(Math.random() * 0xffffffff)
  };

  var body = JSON.stringify(data);
  nanoajax.ajax({url: '/api/v1/', headers: {'Content-Type': 'application/json'}, body: body}, function (code, responseText, request) {
    console.log("CODE:", code);
    if (code === 200) {
      var response = JSON.parse(responseText);
      if (response) {
        var result = response.result;
        window.location = result.auth_url;
      }
    }
  });
}

/**
 * Function called when clicking the Login/Logout button.
 */

function googleSignin() {
  var data = {
    "jsonrpc": "2.0",
    "method": "User.RequestAuthUrl",
    "params": {
      "provider": "google"
    },
    "id": Math.floor(Math.random() * 0xffffffff)
  };

  var body = JSON.stringify(data);
  nanoajax.ajax({url: '/api/v1/', headers: {'Content-Type': 'application/json'}, body: body}, function (code, responseText, request) {
    console.log("CODE:", code);
    var response = JSON.parse(responseText);
    if (response) {
      var result = response.result;
      window.location = result.auth_url;
    }
  });
}

function vkontakteSignin() {
  var data = {
    "jsonrpc": "2.0",
    "method": "User.RequestAuthUrl",
    "params": {
      "provider": "vkontakte"
    },
    "id": Math.floor(Math.random() * 0xffffffff)
  };

  var body = JSON.stringify(data);
  nanoajax.ajax({url: '/api/v1/', headers: {'Content-Type': 'application/json'}, body: body}, function (code, responseText, request) {
    console.log("CODE:", code);
    var response = JSON.parse(responseText);
    if (response) {
      var result = response.result;
      window.location = result.auth_url;
    }
  });
}

function odnoklasnikiSignin() {
  var data = {
    "jsonrpc": "2.0",
    "method": "User.RequestAuthUrl",
    "params": {
      "provider": "odnoklasniki"
    },
    "id": Math.floor(Math.random() * 0xffffffff)
  };

  var body = JSON.stringify(data);
  nanoajax.ajax({url: '/api/v1/', headers: {'Content-Type': 'application/json'}, body: body}, function (code, responseText, request) {
    console.log("CODE:", code);
    var response = JSON.parse(responseText);
    if (response) {
      var result = response.result;
      window.location = result.auth_url;
    }
  });
}

/**
 * Function called when clicking the Login/Logout button.
 */
function twitterSignin() {
  var data = {
    "jsonrpc": "2.0",
    "method": "User.RequestAuthUrl",
    "params": {
      "provider": "twitter"
    },
    "id": Math.floor(Math.random() * 0xffffffff)
  };

  var body = JSON.stringify(data);
  nanoajax.ajax({url: '/api/v1/', headers: {'Content-Type': 'application/json'}, body: body}, function (code, responseText, request) {
    console.log("CODE:", code);
    var response = JSON.parse(responseText);
    if (response) {
      var result = response.result;
      window.location = result.auth_url;
    }
  });
}
