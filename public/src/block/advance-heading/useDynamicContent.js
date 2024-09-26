import { useSelect } from '@wordpress/data';

const useDynamicContent = (attributes) => {

    const { dynamicPostType, selectedPost, selectedSourceField } = attributes;

    const getPostContentRender = (coreStore, postType, field) => {
        const posts = coreStore.getEntityRecords('postType', postType, { include: [selectedPost] });
        return posts && posts.length > 0 ? posts[0][field].rendered : '';
    };
    const getPostContent = (coreStore, postType, field) => {
        const posts = coreStore.getEntityRecords('postType', postType, { include: [selectedPost] });
        return posts && posts.length > 0 ? posts[0][field] : ''; // Return the raw field value
    };

    return useSelect((select) => {

        const coreStore = select('core'); // Define coreStore here

        // Fetch the appropriate content based on the selectedSourceField
        switch (selectedSourceField) {
            case 'title':
                return getPostContentRender(coreStore, dynamicPostType, 'title'); // Use 'title.rendered' for full HTML
            case 'excerpt':
                return getPostContentRender(coreStore, dynamicPostType, 'excerpt'); // Use 'excerpt.rendered' for full HTML
            case 'slug':
                return getPostContent(coreStore, dynamicPostType, 'slug'); // Directly access the slug
            default:
                return attributes.content; // Default case
        }
    }, [dynamicPostType, selectedPost, selectedSourceField]);
};

export default useDynamicContent;
