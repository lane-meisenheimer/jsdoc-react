/**
 * A component to test even more stuff out on.
 * @component
 */
class AnotherTestComponent extends Component {

    static propTypes = {
        /**
         * @reactProp {boolean} optionalBool - an optional boolean.
         **/
        optionalBool: React.PropTypes.bool
    }
    render() {
        return null;
    }
}

AnotherTestComponent.defaultProps = {
    optionalBool: false
};

export default TestComponent;