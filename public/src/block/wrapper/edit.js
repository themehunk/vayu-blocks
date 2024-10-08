import { __ } from '@wordpress/i18n';
import {
	Fragment,
	useEffect,
	useState,
	useRef
} from '@wordpress/element';
import { useSelect, useDispatch  } from '@wordpress/data';
import { InnerBlocks, useBlockProps , useInnerBlocksProps , store as blockEditorStore} from '@wordpress/block-editor';
import getUniqueId from '../../helpers/get-unique-id.js';

const Edit = ({
    attributes, 
	setAttributes, 
	clientId,
	uniqueID,
    context
}) => {
    const { id } = attributes;
    const { addUniqueID } = useDispatch( 'vayu-blocks/data' );
			const { isUniqueID, isUniqueBlock} = useSelect(
				( select ) => {
					return {
						isUniqueID: ( value ) => select( 'vayu-blocks/data' ).isUniqueID( value ),
						isUniqueBlock: ( value, clientId ) => select( 'vayu-blocks/data' ).isUniqueBlock( value, clientId ),
						
					};
				},
				[ clientId ]
			);

			useEffect( () => {
			const uniqueId = getUniqueId( uniqueID, clientId, isUniqueID, isUniqueBlock );
			if ( uniqueId !== uniqueID ) {
				attributes.uniqueID = uniqueId;
				setAttributes( { uniqueID: uniqueId } );
				addUniqueID( uniqueId, clientId );
			} else {
				addUniqueID( uniqueId, clientId );
			}
			}, [] );        

    const blockProps = useBlockProps({
				id:`th-block-wrapper-${attributes.uniqueID}`
			});

    return (
        <div {...blockProps} className="vayu-wrapper-block">
            <InnerBlocks
                template={[
                    ['vayu-blocks/advance-container', {}, [
                        ['vayu-blocks/advance-heading', { placeholder: __('Enter heading here', 'vayu-blocks') }],
                    ]],
                ]}
                templateLock={false} // Allow customization
                allowedBlocks={['vayu-blocks/advance-heading', 'core/paragraph']}
            />
        </div>
    );
};

export default Edit;
