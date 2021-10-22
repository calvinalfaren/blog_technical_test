export function convertDateTimeLocalToTimestamp(value : string) : number {
    return (new Date(value.replace("T", " ")).getTime()) / 1000;
}

// export function convertTimestampToDateTimeLocal(timestamp : number) : string {
//     return (new Date(timestamp)).format("Y-m-dTh:i");
// }