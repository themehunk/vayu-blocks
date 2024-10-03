    import { useSelect } from '@wordpress/data';
    const useDynamicContent = (attributes) => {
    const { dynamicPostType, selectedPost, selectedSourceField, contentLinkEnable, contentLinkUrl } = attributes;
    const fetchPostData = (coreStore) => {
        const posts = coreStore.getEntityRecords('postType', dynamicPostType, { include: [selectedPost] });
        return posts && posts.length > 0 ? posts[0] : null;
    };
    
    const getAuthorDetails = (coreStore, post) => {
        if (post && post.author) {
            const author = coreStore.getEntityRecord('root', 'user', post.author);
            return author ? {
                name: author.name || '',
                bio: author.description || '',
                email: author.email || '',
                link: author.link || ''
            } : { name: '', bio: '', email: '', link: '' };
        }
        return { name: '', bio: '', email: '', link: '' };
    };

    const formatDateTime = (rawDate, type = 'date') => {
        if (!rawDate) return '';
        const date = new Date(rawDate);
        return type === 'date'
            ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            : date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    const getFeaturedImageURL = (coreStore, post) => {
        if (post && post.featured_media) {
            const media = coreStore.getEntityRecord('postType', 'attachment', post.featured_media);
            return media ? media.source_url : '';
        }
        return '';
    };

    return useSelect((select) => {

        const coreStore = select('core');
        
        const post = fetchPostData(coreStore); 
        const author = getAuthorDetails(coreStore, post);
        const featuredImageURL = getFeaturedImageURL(coreStore, post);

        const wrapWithLink = (content) => {

            let dynamicUrl;

            if (contentLinkUrl === 'post_url') {
                dynamicUrl = post ? post.link : '';
            } else if (contentLinkUrl === 'site_url') {
                const siteInfo = coreStore.getEntityRecord('root', 'site');
                dynamicUrl = siteInfo ? siteInfo.url : '';
            }else if (contentLinkUrl === 'author_url') {
                dynamicUrl = author ? author.link:'';
            }else if (contentLinkUrl === 'archive_url') {
                dynamicUrl = post ? post.link.replace(/\/[^\/]*$/, '') : '';
            } else if (contentLinkUrl === 'comments_url') {
                dynamicUrl = post ? post.link + '#comments' : ''; 
            }else if (contentLinkUrl === 'featured_img_url') {
                dynamicUrl = featuredImageURL;
            } else {
                dynamicUrl = ''; 
            }
            
            return contentLinkEnable && dynamicUrl
                ? `<a href="${dynamicUrl}" target="_blank" rel="noopener noreferrer">${content}</a>`
                : content;
        };

        if (!post) return ''; 

        switch (selectedSourceField) {
            case 'title':
                return wrapWithLink(post.title?.rendered || '');
            case 'excerpt':
                return wrapWithLink(post.excerpt?.rendered || '');
            case 'slug':
                return wrapWithLink(post.slug || '');
            case 'post_date':
                return wrapWithLink(formatDateTime(post.modified, 'date'));
            case 'post_time':
                return wrapWithLink(formatDateTime(post.modified, 'time'));
            case 'post_id':
                return wrapWithLink(selectedPost ? selectedPost.toString() : '');
            case 'post_image':
                return wrapWithLink(featuredImageURL ? `<img src="${featuredImageURL}" alt="Featured Image" />` : '');
            case 'author_name':
                return wrapWithLink(author.name);
            case 'author_bio':
                return wrapWithLink(author.bio);
            case 'author_email':
                return wrapWithLink(author.email);
            default:
                return wrapWithLink(attributes.content);
        }
    }, [dynamicPostType, selectedPost, selectedSourceField, contentLinkEnable, contentLinkUrl]);
};

export default useDynamicContent;