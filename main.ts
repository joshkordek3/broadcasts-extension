//% color=#37E0FF weight=0 icon="\uf1d8" block="Broadcasts"
namespace Broadcasts {
    let broadcat_active: any = NaN
    //% blockId=stuff032382932
    //% block="broadcast %broadcat"
    export function broadcast (broadcat: string) {
        broadcat_active = broadcat
    }
    //% blockId=stuff032382932898988
    //% block="I receive %broadcat"
    export function broadcast_receive2 (broadcat: string) {
        if (broadcat_active == broadcat) {
            broadcat_active = NaN
            return true
        } 
        return false
    }
    //% blockId=stuff032382932898
    //% block="when I receive %broadcat"
    //% broadcat.shadow="broadcasts82932938283929323232323"
    export function broadcast_receive (broadcat: string, a: () => void) {
        basic.forever(function () {
            if (broadcast_receive2(broadcat)) {
                control.inBackground(a)
            }
        })
    }
}