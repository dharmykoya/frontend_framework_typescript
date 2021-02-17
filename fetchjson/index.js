"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/posts/1";
axios_1["default"].get(url)
    .then(function (response) {
    console.log(44, response.data);
    var _a = response.data, id = _a.id, yitle = _a.yitle, body = _a.body;
    console.log("\n            The Todo with ID: " + id + "\n            Has a title of: " + yitle + "\n            Is it finished?\n        ");
});
