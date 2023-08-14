import './Button.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';

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
  ...rest
}) => {
  const classNames = classnames(className, {
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    rounded,
    outlined,
  });

  return (
    <button className={classNames} {...rest}>
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
