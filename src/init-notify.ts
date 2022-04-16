import Notify from 'bnc-notify'

const networkId = 4
const dappId = '7a0a4da1-7c92-46af-a12e-e810c1b39d3e'

export function initNotify() {
    const notify = Notify
    return notify({
        dappId,
        networkId,
        darkMode: true,
        onerror: error => console.log(`Notify error: ${error.message}`)
    })
}