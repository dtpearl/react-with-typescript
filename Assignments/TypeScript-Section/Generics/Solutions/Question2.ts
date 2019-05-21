type PageComponentReturnType = string;

interface FunctionComponent<Props, InitialProps> {
  // You have to complete this interface.
  (props: Props): PageComponentReturnType;
  getInitialProps(): InitialProps;
}

/**
 * This function doesn't care about the types
 * of the Props and InitialProps interfaces,
 * because it doesn't use them directly.
 * It just gets the initial props object
 * and passes it further to the component function,
 * which renders these props.
 */
function next(component: FunctionComponent<any, any>) {
  const initialProps = component.getInitialProps();
  return component(initialProps);
}

interface User {
  email: string;
}

interface InitialProps {
  user: User;
}

interface Props extends InitialProps {}

const MyPageComponent: FunctionComponent<Props, InitialProps> = ({ user }) => {
  return `<h1>${user.email}</h1>`;
};

MyPageComponent.getInitialProps = () => {
  return {
    user: {
      email: 'john@example.com'
    }
  };
};

console.log(next(MyPageComponent));

// Turning this file into a module, so our
// declarations won't go into the global scope.
export default MyPageComponent;
