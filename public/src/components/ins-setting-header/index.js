/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

import {
  Button,
  PanelBody
} from '@wordpress/components';

import { IoEllipsisVerticalCircleOutline, IoColorPaletteOutline } from 'react-icons/io5';
import { RiSettings5Fill } from 'react-icons/ri';

/**
 * Internal dependencies.
 */

const InsSettingHeader = ({
  value,
  options,
  onChange
}) => {
  const getIconComponent = (icon) => {
    switch (icon) {
      case 'colorwand':
        return IoEllipsisVerticalCircleOutline;
      case 'diamond':
        return IoColorPaletteOutline;
      case 'colorpalette':
        return RiSettings5Fill;
      default:
        return null; // or a fallback component
    }
  };

  return (
    <PanelBody className="th-setting-header">
      {options.map((option, index) => {
        const IconComponent = getIconComponent(option.icon); // Dynamically generated component

        if (!IconComponent) {
          return null; // Skip rendering if the icon component is not found
        }

        return (
          <div key={index} className='th-tab-wrap'>
            <Button
              key={index}
              className={classnames({
                'is-active': option.value === value
              })}
              onClick={() => onChange(option.value)}
            >
			<IconComponent />
              {option.label}
            </Button>
          </div>
        );
      })}
    </PanelBody>
  );
};

export default InsSettingHeader;
