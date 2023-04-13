import { __ } from '@wordpress/i18n';
import {AlignmentToolbar, __experimentalColorGradientControl as ColorGradientControl,InspectorControls} from '@wordpress/block-editor';

import {
    PanelBody,
    RangeControl,
    SelectControl,
    Placeholder,
    Spinner,
    ToggleControl,
} from '@wordpress/components';

import { useSelect } from '@wordpress/data';

import {
    Fragment,
    useState,
    Suspense
} from '@wordpress/element';

import { pick } from 'lodash';

/**
 * Internal dependencies
 */
import InsSettingHeader from '../../../src/components/ins-setting-header/index.js';

const InsSettings = ({
    attributes,
    setAttributes
}) => {
    const [ tab, setTab ] = useState( 'setting' );

    const customTooltipHeight = value => `${value}px`;

    return (<Fragment>
        <InspectorControls>
        <InsSettingHeader value={ tab }
					options={[
						{
							label: __( 'Setting', 'themehunk-block' ),
							value: 'setting'
						},
						{
							label: __( 'Advanced', 'themehunk-block' ),
							value: 'advanced'
						}
					]}
					onChange={ setTab }
            />

            {'setting' === tab && (
            
            <RangeControl
							    label={ __( 'Height', 'themehunk-block' ) }
							    renderTooltipContent={ customTooltipHeight }
								value={ attributes.height }
								onChange={ height => setAttributes({ height }) }
								step={ 0.1 }
								min={ 0 }
								max={ 3 }
								allowReset={ true }
				/>
		

            ) 
            
          }


        </InspectorControls>


      
    </Fragment>);
}

export default InsSettings;