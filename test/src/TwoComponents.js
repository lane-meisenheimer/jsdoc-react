/**
 *
 * @component
 */
const InFileFunctionalComponent = () => {

};

InFileFunctionalComponent.propTypes = {
    /**
     * @reactProp {boolean} optionalBool - an optional boolean.
     **/
    optionalBool: React.PropTypes.bool
}

/**
 * A component to test even more stuff out on.
 * @component
 */
class TwoTestComponent extends Component {
    render() {
        return null;
    }
}

TwoTestComponent.defaultProps = {
    optionalBool: false
};

TwoTestComponent.propTypes = {
    /**
     * @reactProp {boolean} optionalBool - an optional boolean.
     **/
    optionalBool: React.PropTypes.bool
};

export default TwoTestComponent;