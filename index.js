const logger = require('jsdoc/util/logger');
const {getStore} = require('./src/ParsingStore');

module.exports = {
    handlers: {
        parseBegin: function () {
            const store = getStore();
        },
        fileBegin: function ({filename}) {
            logger.warn('FILE START: ' + filename);
        },
        newDoclet: function(e) {
            // e.doclet will refer to the newly created doclet
            // you can read and modify properties of that doclet if you wish
            const {doclet} = e;
            if(!doclet.comment || doclet.comment.length === 0) return;

            if(doclet.isComponent) {
                logger.warn('\n Got a Component');
                logger.warn(`Component Name: ${doclet.componentName}`);
                logger.warn(`ComponentType: ${doclet.componentType}`);
                logger.warn(`ComponentId: ${doclet.componentId}`);
            }

            if(doclet.isReactProp) {
                logger.warn('\n Got a Property');
                logger.warn(`Prop Name: ${doclet.reactPropName}`);
                logger.warn(`Prop Type: ${doclet.reactPropType}`);
                logger.warn(`Description: ${doclet.description}`);
            }

        },
        fileComplete: function ({filename}) {
            logger.warn('FILE END: ' + filename);
        },
        parseComplete: function () {
            const store = getStore();
            store.reset();
        }
    },
    defineTags: function(dictionary) {
        dictionary.defineTag('component', {
            canHaveName: true,
            mustNotHaveValue: true,
            onTagged: function (doclet, tag) {
                const {meta} = doclet;
                if(!meta) return;

                const {code, path, filename} = meta;
                if(!code) return;

                const {name, type} = code;
                if(!name) return;

                doclet.isComponent = true;
                doclet.componentId = code.name + ':' + doclet.meta.path + doclet.meta.filename;
                doclet.componentName = name;
                doclet.componentType = type === 'ClassDeclaration' ? 'STATEFUL' : 'STATELESS';
            }
        });
        dictionary.defineTag('reactProp', {
            mustHaveValue: true,
            canHaveType: true,
            canHaveName: true,
            onTagged: function(doclet, tag) {
                const {meta} = doclet;
                if(!meta) return;

                const {code, path, filename} = meta;
                if(!code) return;

                const {name, type} = code;
                if(!name) return;

                doclet.isReactProp = true;
                const {value} = tag;
                doclet.reactPropType = value.type.names[0] || '*';//TODO what happens if this array doesn't exist.
                doclet.reactPropName = value.name;
                doclet.description = value.description;
                // logger.warn("TAG: ", JSON.stringify(tag, null, 4));
                // logger.warn("DOCLET: ", JSON.stringify(doclet, null, 4));
            }
        });
    }
};
