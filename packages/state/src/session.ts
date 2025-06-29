import type { Session } from "@agencore/types";
import { createUUID } from "./uuid";
export async function createSession(){
    const session: Session = {
        id: createUUID(),
        timeStart: new Date(),
        timeEnd: null,
        data: []
    };
    return session;

}