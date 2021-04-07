//% color=#37E0FF weight=0 icon="\uf1d8" block="Broadcasts"
namespace Broadcasts {
    let broadcat_active = -1
    //% shim=ENUM_GET2938
    //% blockId=broadcasts82932938283929323232323
    //% block="%Broadcat"
    //% enumName="Broadcats"
    //% enumMemberName="Broadcat"
    //% enumPromptHint="Broadcast..."
    //% enumInitialMembers="message1"
    //% blockHidden=true
    export function dummy (Broadcat: number) {
        return Broadcat
    }
    //% blockId=stuff032382932
    //% block="broadcast %broadcat"
    //% broadcat.shadow="broadcasts82932938283929323232323"
    export function broadcast (broadcat: number) {
        broadcat_active = broadcat
    }
    //% blockId=stuff032382932898988
    //% block="I receive %broadcast"
    //% broadcat.shadow="broadcasts82932938283929323232323"
    export function broadcast_receive2 (broadcat: number) {
        return broadcat_active == broadcat
    }
    //% blockId=stuff032382932898
    //% block="when I receive %broadcast"
    //% broadcat.shadow="broadcasts82932938283929323232323"
    export function broadcast_receive (broadcat: number, a: () => void) {
        basic.forever(function () {
            if (broadcast_receive2(broadcat)) {
                broadcat_active = -1
                control.inBackground(a)
            }
        })
    }
}