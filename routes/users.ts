import express, { Request, Response } from "express";
import { DateTime } from "luxon";
import { AppDataSource } from "../config/mysql-data-source";
//import User from "../models/UserSequelize"
import UserTypeORMDataMapper from "../models/UserTypeORMDataMapper";
import iUser from "../interaces/iUser";

var router = express.Router();

/* GET users listing. */
/* router.get('/', async function(req: Request, res: Response, next) {
  let uu = User.build();
  uu.loadThings();
  console.log(uu)
  const users = await User.findAll()
  //const userDel = await User.findByPk(3);
  //userDel.destroy();
  //console.log(userDel)

  users.forEach(u => {
    console.log(u.getStuff())
  });

  res.send(users);
}); */

router.get(
  "/typeormddatamapper",
  async function (req: Request, res: Response, next) {
    const userRepository = AppDataSource.getRepository(UserTypeORMDataMapper);

    /* const user: iUser = new UserTypeORMDataMapper()
    user.name = "Bob Dole"
    user.email = "bob.dole@gmail.com"

    const insRes = await userRepository.save(user)
    console.log('save res is: ', insRes) */

    const allUsers = await userRepository.find();
    const firstUser = await userRepository.findOneBy({
      id: 1,
    }); // find by id
    const sean: iUser = await userRepository.findOneBy({
      name: "Sean Loughrey",
    }); // find by name

    console.log("all users", allUsers);
    console.log("first user is", firstUser);
    console.log("sean is", sean);

    sean.email_verified_at = DateTime.utc().toJSDate();
    userRepository.save(sean);

    res.send("done");
    //await userRepository.remove(timber)
  }
);

router.post("/", async function (req: Request, res: Response) {});

module.exports = router;
