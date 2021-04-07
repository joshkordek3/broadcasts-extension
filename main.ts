//% color=#37E0FF weight=0 icon="\uf1d8" block="Broadcasts"
namespace Broadcasts {
    let broadcast_active = -1
    //% shim=ENUM_GET2938
    //% blockId=broadcasts82932938283929323232323
    //% block="$Broadcast"
    //% enumName="Broadcasts"
    //% enumMemberName="Broadcast"
    //% enumPromptHint="Broadcast..."
    //% enumInitialMembers="message1"
    //% blockHidden=true
    export function dummy (Broadcast: number) {
        return Broadcast
    }
    //% blockId=stuff032382932
    //% block="broadcast $broadcast"
    //% broadcast.shadow="broadcasts82932938283929323232323"
    export function broadcast (broadcast: number) {
        broadcast_active = broadcast
    }
    //% blockId=stuff032382932898
    //% block="when I receive $broadcast"
    //% broadcast.shadow="broadcasts82932938283929323232323"
    export function broadcast_receive (broadcast: number, a: () => void) {
        basic.forever(function () {
            if (broadcast_active == broadcast) {
                broadcast_active = -1
                control.inBackground(a)
            }
        })
    }
}