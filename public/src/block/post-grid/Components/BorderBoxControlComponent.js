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
  value, 
  onChange, 
  type = 'border' 
}) => {
  const defaultBorder = {
    color: '#72aee6',
    style: 'solid',
    width: '0px',
  };

  const defaultBorderRadius = {
    top: '0px',
    right: '0px',
    left: '0px',
    bottom: '0px'
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
       // label={__('Border', 'post-grid')}
        colors={colors}
        onChange={handleChange}
        value={borders}
      />
    ) : (
      <BoxControl
        label={__('Border Radius', 'text-domain')}
        values={borderRadius}
        onChange={handleChange}
      />
    )}
  </>
  );
};

export default BorderBoxControlComponent;
