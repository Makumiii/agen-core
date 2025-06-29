export type Role = 'user' | 'agent'
export type Message = {
    role:Role,
    content:string,
    time:Date,
}
export type Session = {
    id:string,
    timeStart:Date,
    timeEnd:Date | null ,
    data:Message[]
}