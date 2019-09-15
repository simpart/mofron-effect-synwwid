/**
 * @file mofron-effect-synwwid/index.js
 * @author simpart
 */
const mf = require('mofron');
const Syncwin = require('mofron-effect-syncwin');

mf.effect.Synwwid = class extends Syncwin {
    
    constructor (po) {
        try {
            super();
            this.name('Synwwid');
            this.prmMap('offset');
            this.valid(true, false);
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    offset (prm) {
        try {
            return super.offset((undefined === prm) ? undefined : '0px', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.Synwwid;
