import { injectable } from "inversify";
import { iLogger } from "../interaces/iLogger";

@injectable()
class ElasticLogger implements iLogger {
    public log(msg: string = "in ElasticLogger class logging to Elastic index"): void {
        console.log(msg);
    }
}

export default ElasticLogger;