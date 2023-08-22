import './Button.scss';
import classnames from 'classnames';

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

  return (
    <button className={classNames} {...rest} disabled={disabled}>
      {children}
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
