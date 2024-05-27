import { injectable } from "inversify";
import { iLogger } from "../interaces/iLogger";

@injectable()
class MockLogger implements iLogger {
    public log(msg: string = "in MockLogger class logging to console"): void {
        console.log(msg);
    }
}

export default MockLogger;