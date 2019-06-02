const fs = require("fs");
const login = require("facebook-chat-api");

var mess = ["ngay moi cua ban the nao", "tam trang hom nay cua ban the nao", "minh nhan tin de chuc ban suc khoe ban ko can rep dau", "chuc ban may man"];
login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);
    api.listen((err, message) => {
      api.sendMessage("tin nhan cua ban dong nghia voi viec co them 5 nguoi nhan loi chuc ngay hom nay :) <3 <3 <3", message.threadID);
      api.getFriendsList((err, data) => {
        if(err) return console.error(err); 
        for(var i=1 ; i< 6; i++){
          var id_user = Math.floor(Math.random()*data.length); 
            //console.log(id_user + "");
          api.sendMessage("chao " + data[id_user].fullName + " " + mess[Math.floor(Math.random()*mess.length)] , data[id_user].userID);
        }
      });
    });    
});