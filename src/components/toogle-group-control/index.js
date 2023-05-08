/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	ButtonGroup,
	Button
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';


const ToogleGroupControl = ({
	value,
	options,
	onChange,
	hasIcon = false
  }) => {
	const handleClick = (option) => {
	  const newValue = value === option.value ? null : option.value;
	  onChange(newValue);
	};
  
	return (
	  <ButtonGroup
		className={classNames('th-toggle-group-control', {
		  'has-icon': hasIcon
		})}
	  >
		{options?.map((option) => {
		  return (
			<div key={option.value} className="th-toggle-option">
			  <Button
				isPrimary={value === option.value}
				variant={value === option.value ? 'primary' : 'secondary'}
				icon={option.icon}
				label={option.label}
				onClick={() => handleClick(option)}
				showTooltip={hasIcon}
			  >
				{hasIcon ? '' : option.label}
			  </Button>
			</div>
		  );
		})}
	  </ButtonGroup>
	);
  };
  

export default ToogleGroupControl;
