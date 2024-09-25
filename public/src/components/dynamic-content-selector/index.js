import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const DynamicContentSelectorPanel = ( { dynamicType, setAttributes } ) => {
	return (
		<SelectControl
			label={ __( 'Select Content Type', 'vayu-blocks' ) }
			value={ dynamicType }
			onChange={ ( newValue ) => setAttributes( { dynamicType: newValue } ) }
			__nextHasNoMarginBottom
		>   
		   <option value="none">{ __( 'Select', 'vayu-blocks' ) }</option>
			<optgroup label={ __( 'Site', 'vayu-blocks' ) }>
				<option value="site_title">{ __( 'Site Title', 'vayu-blocks' ) }</option>
				<option value="site_tagline">{ __( 'Site Tagline', 'vayu-blocks' ) }</option>
			</optgroup>
			<optgroup label={ __( 'Post', 'vayu-blocks' ) }>
				<option value="post_title">{ __( 'Post Title', 'vayu-blocks' ) }</option>
				<option value="post_excerpt">{ __( 'Post Excerpt', 'vayu-blocks' ) }</option>
			</optgroup>
			<optgroup label={ __( 'Page', 'vayu-blocks' ) }>
				<option value="page_title">{ __( 'Page Title', 'vayu-blocks' ) }</option>
				<option value="page_excerpt">{ __( 'Page Excerpt', 'vayu-blocks' ) }</option>
			</optgroup>
			<optgroup label={ __( 'Product', 'vayu-blocks' ) }>
				<option value="product_title">{ __( 'Product Title', 'vayu-blocks' ) }</option>
				<option value="product_excerpt">{ __( 'Product Excerpt', 'vayu-blocks' ) }</option>
			</optgroup>
		</SelectControl>
	);
};

export default DynamicContentSelectorPanel;
