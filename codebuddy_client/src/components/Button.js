import './Button.scss';
import classnames from 'classnames';
import { GoSync } from 'react-icons/go';

const Button = ({
  children,
  className,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  rounded,
  outlined,
  disabled,
  loading,
  ...rest
}) => {
  const classNames = classnames(className, 'button', {
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    rounded,
    outlined,
    disabled,
  });

  let disabledState;
  if (disabled && !loading) {
    disabledState = true;
  } else if (disabled && loading) {
    disabledState = true;
  } else if (!disabled && !loading) {
    disabledState = false;
  } else if (!disabled && loading) {
    disabledState = false;
  }

  const getButtonContent = () => {
    if (disabled && !loading) {
      return children;
    } else if (disabled && loading) {
      return children;
    } else if (!disabled && !loading) {
      return children;
    } else if (!disabled && loading) {
      return <GoSync className="spin-loader" />;
    }
  };

  return (
    <button className={classNames} {...rest} disabled={disabledState}>
      {getButtonContent()}
    </button>
  );
};

Button.propTypes = {
  customProp: function ({
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
  }) {
    if (+primary + +secondary + +success + +danger + +warning + +info > 1) {
      return new Error(
        'Only one of  primary, secondary, success, danger, warning, info can be true'
      );
    }

    // console.log('props : ', props);
    // console.log('propName : ', propName);
    // console.log('componentName : ', componentName);
  },
};

export default Button;
