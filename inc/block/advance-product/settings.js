/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

import {AlignmentToolbar, __experimentalColorGradientControl as ColorGradientControl,InspectorControls} from '@wordpress/block-editor';

import {
    PanelBody,
    RangeControl,
    SelectControl,
    Placeholder,
    Spinner,
    ToggleControl,
    QueryControls,
    PanelRow
} from '@wordpress/components';

import { useSelect } from '@wordpress/data';

import {Fragment,useState,Suspense,useEffect} from '@wordpress/element';


import { pick } from 'lodash';
/**
* Internal dependencies
*/
import Select from 'react-select';
import {
   InsSettingHeader,
   ResponsiveControl,
   SizingControl,
   HoverControl,
   ControlPanelControl,
   BackgroundSelectorControl,
   UnitChooser,
   ToogleGroupControl,
   GoogleFontsControl,
} from '../../../src/components/index.js';

const InsSettings = ({
    attributes,
    setAttributes
}) => {
    const [ tab, setTab ] = useState( 'setting' );
   
    const homeUrl = ThBlockData.homeUrl;
    
    const [SelectCategories, setSelectCategories] = useState([]);

    useEffect(() => {
        // Fetch product categories
        fetch(`${homeUrl}/wp-json/wc/store/v1/products/categories`)
          .then((response) => response.json())
          .then((data) => {
            // Map through the data and convert it to the expected format
            const mappedCategories = data.map((category) => ({
              value: category.slug,
              label: category.name,
            }));
            setSelectCategories(mappedCategories);
          })
          .catch((error) => {
            console.error('Error fetching categories:', error);
          });
      }, []);

    return (
        <Fragment>
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

            <Fragment>
            <PanelBody title={ __( 'General', 'themehunk-block' ) }
                className="th-adv-product-panel" initialOpen={ true }
                
            >
            <Select
            value={attributes.productCategories || [] }
            onChange={(value) => {
                setAttributes({ productCategories: value ? value : [] });
            }}
            id="terms-selection"
            options={SelectCategories}
            isMulti
            isClearable
            maxMenuHeight={300}
            placeholder={__('Choose Category', 'themehunk-block')}
            />
            </PanelBody>
            </Fragment>
             ) || 'advanced' === tab && (
            <Fragment>
                <PanelBody title={ __( 'General', 'themehunk-block' ) }
                            className="th-adv-h-panel" initialOpen={ true }
                            
                >

             </PanelBody>
            </Fragment>
         )}
           </InspectorControls>
        </Fragment>
        );

}
export default InsSettings;