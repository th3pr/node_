const fs = require("fs");

const { create, update, remove, users, user } = require("./crud.js");

const [, , option, arg1, arg2, arg3] = process.argv;

switch (option) {
  case "add":
    {
      const str1 = arg1.split("=");
      const str2 = arg2.split("=");
      if (str1[0] === "name" && str2[0] === "track") {
        create({
          name: str1[1],
          price: str2[1]
        });
      } else console.log("Not Valid Arg!");
    }
    break;

  case "users":
    console.log(users());
    break;
  case "user":
    console.log(user(+arg1));
    break;
  case "edit":
    update(+arg1, {
      name: arg2,
      price: arg3
    });
    break;
  case "remove":
    remove(+arg1);
    break;

  default:
    break;
}
