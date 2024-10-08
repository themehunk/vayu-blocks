import { InnerBlocks } from '@wordpress/block-editor';
import {
	useBlockProps
} from '@wordpress/block-editor';


const Save = ({attributes}) => {
    const blockProps = useBlockProps.save({
		id: attributes.uniqueID
	});

    return (
        <div { ...blockProps } className="vayu-wrapper-block">
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;