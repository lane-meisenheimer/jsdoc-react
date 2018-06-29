const logger = require('jsdoc/util/logger');
module.exports = {
    astNodeVisitor: {
        visitNode: (node, e, parser, currentSourceName) => {
            // we dont care about these ones, just bail
            if(!e || e.comment == '@undocumented' || e.event != 'symbolFound') {
                return;
            }

            logger.warn('hey man', node);
        }
    }
};
