/**
 * A component to test even more stuff out on.
 * @component
 */
class TestComponent extends Component {
    render() {
        return null;
    }
}

TestComponent.defaultProps = {
    optionalBool: false
};

TestComponent.propTypes = {
    /**
     * @reactProp {boolean} optionalBool - an optional boolean.
     **/
    optionalBool: React.PropTypes.bool
};

export default TestComponent;