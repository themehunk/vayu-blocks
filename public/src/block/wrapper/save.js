import { InnerBlocks } from '@wordpress/block-editor';
import {
	useBlockProps
} from '@wordpress/block-editor';

const Save = () => {
    const blockProps = useBlockProps.save();

    return (
        <div { ...blockProps } className="vayu-wrapper-block">
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;