import { useState } from '@wordpress/element';
import { __experimentalBorderBoxControl as BorderBoxControl, __experimentalBoxControl as BoxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const colors = [
  { color: '#72aee6', name: 'Blue 20' },
  { color: '#3582c4', name: 'Blue 40' },
  { color: '#e65054', name: 'Red 40' },
  { color: '#8a2424', name: 'Red 70' },
  { color: '#f2d675', name: 'Yellow 10' },
  { color: '#bd8600', name: 'Yellow 40' }
];

const BorderBoxControlComponent = ({ 
  label = __('Borders', 'text-domain'), 
  value, 
  onChange, 
  type = 'border' 
}) => {
  const defaultBorder = {
    color: '#72aee6',
    style: 'dashed',
    width: '1px',
  };

  const defaultBorderRadius = {
    top: '5px',
    right: '5px',
    left: '5px',
    bottom: '5px'
  };

  const [borders, setBorders] = useState(value || {
    top: defaultBorder,
    right: defaultBorder,
    bottom: defaultBorder,
    left: defaultBorder,
  });

  const [borderRadius, setBorderRadius] = useState(value || defaultBorderRadius);

  const handleChange = (newValues) => {
    if (type === 'border') {
      setBorders(newValues);
      if (onChange) {
        onChange({ borders: newValues, borderRadius });
      }
    } else {
      setBorderRadius(newValues);
      if (onChange) {
        onChange({ borders, borderRadius: newValues });
      }
    }
  };

  return (
    <>
      {type === 'border' ? (
        <BorderBoxControl
          colors={colors}
          //label={label}
          onChange={handleChange}
          value={borders}
        />
      ) : (
        <BoxControl
         // label={__('Border Radius', 'text-domain')}
          values={borderRadius}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default BorderBoxControlComponent;
