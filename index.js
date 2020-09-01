/**
 * @file mofron-effect-synwwid/index.js
 * @brief effect for synchronize component width with window
 * @license MIT
 */
const Syncwin = require('mofron-effect-syncwin');

module.exports = class extends Syncwin {
    /**
     * initialize effect
     * 
     * @param (mixed) offset parameter
     *                effect config
     * @short x_offset
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname('Synwwid');
            this.shortForm('x_offset');
            this.valid(true, false);
            
	    /* set config */
	    if (undefined !== prm) {
                this.config(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
