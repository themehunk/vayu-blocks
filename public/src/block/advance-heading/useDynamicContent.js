import { useSelect } from '@wordpress/data';

const useDynamicContent = (dynamicType, attributes) => {

    const getPostContent = (coreStore, postType, field) => {
        const posts = coreStore.getEntityRecords('postType', postType);
        return posts && posts.length > 0 ? posts[0][field].rendered : '';
    };

    return useSelect((select) => {
        
        const coreStore = select('core'); // Define coreStore here

        switch (dynamicType) {
            case 'post_title':
                return getPostContent(coreStore, 'post', 'title');
            case 'post_excerpt':
                return getPostContent(coreStore, 'post', 'excerpt');
            case 'page_title':
                return getPostContent(coreStore, 'page', 'title');
            case 'page_excerpt':
                return getPostContent(coreStore, 'page', 'excerpt');
            case 'product_title':
                return getPostContent(coreStore, 'product', 'title');
            case 'product_excerpt':
                return getPostContent(coreStore, 'product', 'excerpt');
            case 'site_title': {
                const siteInfo = coreStore.getEntityRecord('root', 'site');
                return siteInfo ? siteInfo.title : '';
            }
            case 'site_tagline': {
                const siteInfo = coreStore.getEntityRecord('root', 'site');
                return siteInfo ? siteInfo.description : '';
            }
            default:
                return attributes.content;
        }
    }, [dynamicType]);
};

export default useDynamicContent;