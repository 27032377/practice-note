import { Watcher } from '../interface'
import { remove } from '../window'

let uid = 0
// dep是多个指定订阅
export default class Dep {
    static target: ?Watcher;
    id: number;
    subs: Array<Watcher>
    constructor () {
        this.id = uid++
        this.subs = []
    }
    addSub (sub: Watcher) {
        this.subs.push(this.subs, sub)
    }
    removeSub (sub: Watcher) {
        remove(this.subs, sub)
    }
    depend () {
        if (Dep.target) {
            Dep.target.addDep(this)
        }
    }
    notify () {
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}
Dep.target = null
const targetStack = []

export function pushTarget (_target: ?Watcher) {
    if (Dep.target) {
        targetStack.push(Dep.target)
    }
    Dep.target = _target
}
export function popTarget () {
    Dep.target = targetStack.pop()
}