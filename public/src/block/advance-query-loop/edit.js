import { Fragment,useEffect } from '@wordpress/element';
import { InnerBlocks, useBlockProps, __experimentalBlockVariationPicker } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import { Placeholder } from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';

import InsSettings from './settings.js';


const Edit = ({ attributes, setAttributes, clientId }) => {

    const { replaceInnerBlocks } = useDispatch('core/block-editor');

    // Define block variations
    const blockVariations = [
        {
            name: 'layout-one',
            title: __('Layout One', 'vayu-blocks'),
            icon: 'columns',
            innerBlocks: [
                ['vayu-blocks/wrapper', {}],
                [ 'core/query-pagination' ],
                [ 'core/query-no-results' ]
            ],
        },
        {
            name: 'layout-two',
            title: __('Layout Two', 'vayu-blocks'),
            icon: 'columns',
            innerBlocks: [
                ['vayu-blocks/wrapper', {}],
                [ 'core/query-pagination' ],
                [ 'core/query-no-results' ]
            ],
        },
    ];

    // Handle variation selection
    const onSelectVariation = (variation) => {
        if (variation.innerBlocks) {
            const innerBlocks = createBlocksFromInnerBlocksTemplate(variation.innerBlocks);
            replaceInnerBlocks(clientId, innerBlocks, false); // Replace with selected variation blocks
        }
    };

    // Check if there are inner blocks already
    const hasInnerBlocks = useSelect(
        (select) => !!select('core/block-editor').getBlocks(clientId).length,
        [clientId]
    );
    
    const { queryId } = attributes;
    const instanceId = useInstanceId(Edit);

    // Set the queryId if not already set
    useEffect(() => {
        if (!queryId) {
            setAttributes({ queryId: instanceId });
        }
    }, [queryId, instanceId, setAttributes]);


    const blockProps = useBlockProps();
    return (
        <Fragment>
            <InsSettings
                attributes={attributes}
                setAttributes={setAttributes}
            />
            <div {...blockProps}>
                {!hasInnerBlocks && (
                    <Placeholder
                        label={__('Advance Query Block', 'vayu-blocks')}
                        instructions={__('Select a variation to start with:', 'vayu-blocks')}
                    >
                        <__experimentalBlockVariationPicker
                            icon="layout"
                            label={__('Choose a layout', 'vayu-blocks')}
                            variations={blockVariations}
                            onSelect={onSelectVariation}
                        />
                    </Placeholder>
                )}
                {hasInnerBlocks && <InnerBlocks/>
                }
            </div>
        </Fragment>
    );
};

export default Edit;
