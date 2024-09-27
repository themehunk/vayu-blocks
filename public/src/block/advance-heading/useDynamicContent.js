import { useSelect } from '@wordpress/data';

const useDynamicContent = (attributes) => {

    const { dynamicPostType, selectedPost, selectedSourceField } = attributes;

    const getPostContentRender = (coreStore, postType, field) => {
        const posts = coreStore.getEntityRecords('postType', postType, { include: [selectedPost] });
        console.log(posts);
        return posts && posts.length > 0 ? posts[0][field].rendered : '';
    };

    const getPostContent = (coreStore, postType, field) => {
        const posts = coreStore.getEntityRecords('postType', postType, { include: [selectedPost] });
        return posts && posts.length > 0 ? posts[0][field] : ''; // Return the raw field value
    };

    // date
    const getPostContentDate = (coreStore, postType, field) => {
        const posts = coreStore.getEntityRecords('postType', postType, { include: [selectedPost] });
        if (posts && posts.length > 0 && posts[0][field]) {
            const rawDate = posts[0][field]; // Get the raw field value (date)
            const date = new Date(rawDate); // Convert the raw date string to a Date object
            // Format the date (you can adjust this format as needed)
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        }
        
        return ''; 
    };

    const getPostContentTime = (coreStore, postType, field) => {

        const posts = coreStore.getEntityRecords('postType', postType, { include: [selectedPost] });
        
        if (posts && posts.length > 0 && posts[0][field]) {
            const rawDate = posts[0][field]; // Get the raw field value (date)
            const date = new Date(rawDate); // Convert the raw date string to a Date object
            
            // Format the date and time
            const formattedDate = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
    
            const formattedTime = date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });
    
            return `${formattedDate} ${formattedTime}`; // Return combined date and time
        }
        
        return ''; // Return an empty string if no posts or date is found
    };

    // autor
    const getAuthorDetails = (coreStore, postType, field) => {
        const posts = coreStore.getEntityRecords('postType', postType, { include: [selectedPost] });
    
        if (posts && posts.length > 0) {
            const authorId = posts[0].author; // Get the author's ID from the post
            const authorDetails = coreStore.getEntityRecord('root', 'user', authorId); // Fetch author details using correct arguments
    
            if (authorDetails) {
                const authorName = authorDetails.name || ''; // Author's name
                const authorBio = authorDetails.description || ''; // Author's bio
                const authorEmail = authorDetails.email || ''; // Author's email
                
                return {
                    name: authorName,
                    bio: authorBio,
                    email: authorEmail
                };
            }
        }
    
        return { name: '', bio: '', email: '' }; // Return empty values if no author or details are found
    };

    // main render content
    
    return useSelect((select) => {

        const coreStore = select('core');
        const author = getAuthorDetails(coreStore, dynamicPostType, 'author');

        switch (selectedSourceField) {
            case 'title':
                return getPostContentRender(coreStore, dynamicPostType, 'title'); 
            case 'excerpt':
                return getPostContentRender(coreStore, dynamicPostType, 'excerpt');
            case 'slug':
                return getPostContent(coreStore, dynamicPostType, 'slug');
            case 'post_date':
                return getPostContentDate(coreStore, dynamicPostType, 'modified');
            case 'post_time':
                return getPostContentTime(coreStore, dynamicPostType, 'modified');
            case 'post_id':
                return selectedPost ? selectedPost.toString() : ''; 
            case 'author_name':
                return author.name;
            case 'author_bio':
                return author.bio;
            case 'author_email':
                return author.email;
            default:
                return attributes.content; // Default case
        }
    }, [dynamicPostType, selectedPost, selectedSourceField]);
};

export default useDynamicContent;
