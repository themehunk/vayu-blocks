
import React from 'react';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl,ToggleControl,ToogleGroupControl,GradientPicker, ColorPalette, FontSizePicker, RangeControl,  DropdownMenu, SelectControl ,FormTokenField } from '@wordpress/components';

import { useSelect } from '@wordpress/data';

const Editor = ({ attributes, setAttributes }) => {

  const getView = useSelect( select => {
		const { getView } = select( 'vayu-blocks/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView;
	}, []);

  return (
    <>
     <PanelBody title={__('Layout', 'vayu-blocks')} initialOpen={false} >
        
      </PanelBody>
    </>
  )
};

export default Editor;