import { Container, interfaces } from "inversify";
import TYPES from "./types/inversifyTypes";
import { iLogger } from "./interaces/iLogger";
import ConsoleLogger from "./classes/MockLogger";
import ElasticLogger from "./classes/ElasticLogger";
import User from "./models/UserTypeORMDataMapper";
import iUser from "./interaces/iUser";

var container = new Container();

// bind all our of our dependencies
container.bind<iLogger>(TYPES.iLogger).to(ElasticLogger);
container.bind<User>(TYPES.User).to(User)

export default container;