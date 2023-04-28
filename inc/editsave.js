/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { ResizableBox } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import InsSettings from './settings.js';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { edit } from '@wordpress/icons';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

        

	return (
    <>
      <BlockControls><ToolbarGroup>
                <ToolbarButton
                    icon={ edit }
                    label="Edit"
                    onClick={ () => alert( 'Editing' ) }
                />
            </ToolbarGroup></BlockControls>
    <InsSettings
    attributes={ attributes }
    setAttributes={ setAttributes }
    />
		<ResizableBox
  enable={{
    bottom: true,
    bottomLeft: false,
    bottomRight: false,
    left: false,
    right: false,
    top: false,
    topLeft: false,
    topRight: false
  }}
  onResizeStop={function noRefCheck(){}}
  size={{
    height: 200,
    width: 400
  }}
>
  <div
    style={{
      alignItems: 'center',
      background: '#eee',
      display: 'flex',
      height: '100%',
      justifyContent: 'center'
    }}
  >
    Resize
  </div>
</ResizableBox>
</>
        );
}





/**
 * External dependencies
 */

import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import {
	RichText,
	useBlockProps
} from '@wordpress/block-editor';

const Save = ({
	attributes
}) => {

	const blockProps = useBlockProps.save({
		id: attributes.id,
		className: `wp-block-th-advance-heading-${ attributes.id }`,
	});

	return (
	<RichText.Content
		tagName={ attributes.tag }
		value={ attributes.content }
		{ ...blockProps }
	/>);
	
};

export default Save;