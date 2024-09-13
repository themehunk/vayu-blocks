import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PostExcludeControls } from './post-exclude-controls';
/**
 * Higher-Order Component to add custom controls
 */
const withAdvancedQueryControls = (BlockEdit) => (props) => {

    const { attributes, setAttributes } = props;

    const { query: { perPage, offset = 0 } = {} } = attributes;
    
    if (props.name !== 'core/query') {
        return <BlockEdit {...props} />;
    }

    // Check if the current block variation is the advanced query loop
    const isAdvancedQueryLoop = attributes.namespace === 'vayu-blocks/advance-query-loop';

    return (
        <>
            <BlockEdit {...props} />
            {isAdvancedQueryLoop && (
                <InspectorControls>
                    <PanelBody title={__('Advanced Query Settings', 'vayu-blocks')}>
                        <RangeControl
                            label={ __( 'Posts Per Page', 'advanced-query-loop' ) }
                            min={ 1 }
                            max={ 50 }
                            onChange={ ( newCount ) => {
                                setAttributes( {
                                    query: {
                                        ...attributes.query,
                                        perPage: newCount,
                                        offset,
                                    },
                                } );
                            } }
                            value={ perPage }
                        />
                         <PostExcludeControls { ...props } />
                    </PanelBody>
                </InspectorControls>
            )}
        </>
    );
};

// Apply the custom controls to the block editor
wp.hooks.addFilter(
    'editor.BlockEdit',
    'vayu-blocks/with-advanced-query-controls',
    withAdvancedQueryControls
);