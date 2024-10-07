import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

    const useDynamicContentLoop = ({ postId, postType, selectedSourceField = 'title' , attributes}) => {
    // Fetch post data using useSelect
    const postData = useSelect(
        (select) => {
            return postId
                ? select(coreStore).getEntityRecord('postType', postType, postId)
                : null;
        },
        [postId, postType]
    );

    const getAuthorDetails = (post) => {
        return useSelect(
            (select) => {
                if (!post) {
                    return { name: '', bio: '', email: '', link: '' };
                }
                const author = select(coreStore).getEntityRecord('root', 'user', post.author);
                return author
                    ? {
                          name: author.name || '',
                          bio: author.description || '',
                          email: author.email || '',
                          link: author.link || ''
                      }
                    : { name: '', bio: '', email: '', link: '' };
            },
            [post]
        );
    };

    const formatDateTime = (rawDate, type = 'date') => {
        if (!rawDate) return '';
        const date = new Date(rawDate);
        return type === 'date'
            ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            : date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    const getFeaturedImageURL = (post) => {
        return useSelect(
            (select) => {
                if (!post) {
                    return '';
                }
                const media = select(coreStore).getEntityRecord('postType', 'attachment', post.featured_media);
                return media ? media.source_url : '';
            },
            [post]
        );
    };
   
    
    const wrapWithLink = (content, { contentLinkUrl, contentLinkEnable, post, author, featuredImageURL }) => {
    
        const dynamicUrl = useSelect((select) => {
            let url = '';
            if (contentLinkUrl === 'post_url') {
                url = post ? post.link : '';
            } else if (contentLinkUrl === 'site_url') {
                const siteInfo = select(coreStore).getEntityRecord('root', 'site');
                url = siteInfo ? siteInfo.url : '';
            } else if (contentLinkUrl === 'author_url') {
                url = author ? author.link : '';
            } else if (contentLinkUrl === 'archive_url') {
                url = post ? post.link.replace(/\/[^\/]*$/, '') : '';
            } else if (contentLinkUrl === 'comments_url') {
                url = post ? post.link + '#comments' : '';
            } else if (contentLinkUrl === 'featured_img_url') {
                url = featuredImageURL || '';
            }
            
            return url;
        }, [contentLinkUrl, post, author, featuredImageURL]);
        
        return contentLinkEnable && dynamicUrl
            ? `<a href="${dynamicUrl}" target="_blank" rel="noopener noreferrer">${content}</a>`
            : content;
    };
    
    const author = getAuthorDetails(postData);
    const featuredImageURL = getFeaturedImageURL(postData);
    // Determine content based on the selected source field
    const getContentToSet = () => {
        let contentToSet = '';
        if (postId) {
            switch (selectedSourceField) {
                case 'title':
                    contentToSet = postData?.title?.rendered || '';
                    break;
                case 'slug':
                    contentToSet = postData?.slug || '';
                    break;
                case 'post_date':
                    contentToSet = formatDateTime(postData.modified, 'date');
                    break;
                case 'post_time':
                    contentToSet = formatDateTime(postData.modified, 'time');
                    break;
                case 'excerpt':
                    contentToSet = postData?.excerpt?.rendered || '';
                    break;
                case 'post_id':
                    contentToSet = postId.toString() || '';
                    break;
                case 'author_name':
                    contentToSet = author.name;
                    break;
                case 'author_bio':
                    contentToSet = author.bio;
                    break;
                case 'author_email':
                    contentToSet = author.email;
                    break;
                case 'post_image':
                    contentToSet = featuredImageURL ? `<img src="${featuredImageURL}" alt="Featured Image" />` : '';
                    break;
                default:
                    contentToSet = postData?.title?.rendered || '';
            }
        }

        return contentToSet;
    };

    // Return the content fetched
    const content = getContentToSet();
    const { contentLinkEnable, contentLinkUrl } = attributes;
    return wrapWithLink(content, {
        contentLinkUrl,
        contentLinkEnable,
        post: postData,
        author,
        featuredImageURL
    });
};
export default useDynamicContentLoop;
