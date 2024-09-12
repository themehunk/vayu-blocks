import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

// Save function as a constant
const Save = ({ attributes }) => {
    // Get the block properties for the save context
    const blockProps = useBlockProps.save();
    
    // Get the properties needed to save inner blocks content correctly
    const innerBlocksProps = useInnerBlocksProps.save(blockProps);

    // Use the tagName from attributes
    const TagName = attributes.tagName || 'div';

    return <TagName {...innerBlocksProps}></TagName>;
};

export default Save;