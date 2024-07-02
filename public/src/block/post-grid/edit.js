import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import './editor.scss';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import { Spinner } from '@wordpress/components';
import { post } from '@wordpress/icons/build-types';

const Edit = ({ attributes, setAttributes }) => {
    const {
        pg_posts,
        pg_showExcerpt,
        pg_showFullContent,
        pg_gapup,
        pg_showAuthor,
        pg_showDate,
        pg_showCategories,
        pg_showTags,
        pg_selectedTag,
        pg_selectedCategory,
        pg_textSize,
        pg_textColor,
        pg_backgroundColor,
        pg_lineHeight,
        pg_numberOfRow,
        pg_blockTitleColor,
        pg_blockTitleSize,
        pg_postLayoutColumns,
        pg_imageBorderRadius,
        pg_excerptWords,
        pg_gap,
        pg_blockTitleTag,
        pg_backgroundType,
        pg_showFeaturedImage,
        pg_categoryTextSize,
        pg_categoryBackgroundColor,
        pg_categoryTextColor,
        pg_tagTextSize,
        pg_tagBackgroundColor,
        pg_tagTextColor,
        pg_authorTextSize,
        pg_authorTextColor,
        pg_postBorderRadius,
        pg_showCategoriesOnImage,
        pg_layoutBorder,
        pg_layoutBorderColor,
        pg_layoutPaddingTop,
        pg_layoutPaddingBottom,
        pg_layoutPaddingLeft,
        pg_layoutPaddingRight,
        pg_authorImageScale,
        pg_excerptSelector,
        pg_categoryPaddingTop,
        pg_categoryPaddingBottom,
        pg_categoryPaddingLeft,
        pg_categoryPaddingRight,
        pg_tagPaddingTop,
        pg_tagPaddingBottom,
        pg_tagPaddingLeft,
        pg_tagPaddingRight,
        pg_tagBorderRadius,
        pg_tagBorder,
        pg_tagBorderColor,
        pg_categoryBorder,
        pg_categoryBorderRadius,
        pg_categoryBorderColor,
        pg_showCategoriesMenu,
        pg_showTagsMenu,
        pg_showAuthorMenu,
        pg_dateTextSize,
        pg_dateColor,
        pg_showDateMenu,
        buttonpaddingUnit,
        categorypaddingUnit,
        tagpaddingUnit,
        layoutborderType,
        
        layout_backgroundType,
        layout_backgroundColor,
        layout_backgroundImage,
        layout_backgroundGradient,
        layout_backgroundPosition,
        layout_backgroundAttachment,
        layout_backgroundRepeat,
        layout_backgroundSize,
        categoryborderType,
		
		category_backgroundType,
        category_backgroundColor,
        category_backgroundImage,
        category_backgroundGradient,
        category_backgroundPosition,
        category_backgroundAttachment,
        category_backgroundRepeat,
        category_backgroundSize,

        tagborderType,
		tag_backgroundType,
        tag_backgroundColor,
        tag_backgroundImage,
        tag_backgroundGradient,
        tag_backgroundPosition,
        tag_backgroundAttachment,
        tag_backgroundRepeat,
        tag_backgroundSize,
    } = attributes;

    const [authors, setAuthors] = useState({});
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    const TitleTag = pg_blockTitleTag || 'h2';

    useEffect(() => {
        const fetchData = async () => {
            try {
                let searchParams = '';
                if (searchKeyword) {
                    searchParams = `&search=${encodeURIComponent(searchKeyword)}`;
                }

                const fetchedPosts = await apiFetch({ path: `/wp/v2/posts?per_page=${pg_postLayoutColumns * pg_numberOfRow}${searchParams}` });

                const postsWithMedia = await Promise.all(fetchedPosts.map(async (post) => {
                    try {
                        if (!post.featured_media) {
                            return { ...post, featured_media_url: '' };
                        }

                        const mediaResponse = await apiFetch({ path: `/wp/v2/media/${post.featured_media}` });

                        if (!mediaResponse || mediaResponse.code === 'rest_post_invalid_id') {
                            throw new Error(`Invalid or missing featured media for post ID ${post.id}`);
                        }

                        const featuredMediaUrl = mediaResponse?.source_url || '';

                        return { ...post, featured_media_url: featuredMediaUrl };
                    } catch (error) {
                        console.error(`Error fetching featured media for post ID ${post.id}:`, error);
                        return { ...post, featured_media_url: '' };
                    }
                }));

                const postsWithIDs = postsWithMedia.map(post => ({ ...post, uniqueID: generateUniqueID() }));
                setAttributes({ pg_posts: postsWithIDs });
                
                

                const uniqueAuthorIds = postsWithIDs.map(post => post.author).filter((value, index, self) => self.indexOf(value) === index);

                const authors = await Promise.all(uniqueAuthorIds.map(async (authorId) => {
                    try {
                        const author = await apiFetch({ path: `/wp/v2/users/${authorId}` });
                        const authorWithLink = { ...author, link: `/author/${author.slug}` };
                        return { id: author.id, name: author.name, authorLink: authorWithLink };
                    } catch (error) {
                        console.error('Error fetching author:', error);
                        return null;
                    }
                }));

                const authorMap = {};
                authors.forEach(author => {
                    if (author) {
                        authorMap[author.id] = author.name;
                    }
                });

                setAuthors(authorMap);

                const fetchedCategories = await apiFetch({ path: '/wp/v2/categories' });
                setCategories(fetchedCategories);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [pg_postLayoutColumns, pg_numberOfRow, setAttributes, searchKeyword]);

    useEffect(() => {
        if (pg_selectedTag || pg_selectedCategory) {
            const filtered = pg_posts.filter(post => {
                let tagMatch = true;
                let categoryMatch = true;

                if (pg_selectedTag) {
                    tagMatch = post.tags && post.tags.some(tag => tag.name && tag.name.toLowerCase() === pg_selectedTag.toLowerCase());
                }

                if (pg_selectedCategory) {
                    categoryMatch = post.categories && post.categories.some(category => category.id === pg_selectedCategory);
                }

                return tagMatch && categoryMatch;
            });

            setFilteredPosts(filtered);
        } else {
            setFilteredPosts(pg_posts || []);
        }
    }, [pg_selectedTag, pg_selectedCategory, pg_posts]);

    const handleSearchChange = (value) => {
        setSearchKeyword(value);
    };

    const getCategoryNames = (categoryIds) => {
        return categoryIds.map(categoryId => {
            const foundCategory = categories.find(cat => cat.id === categoryId);
            return foundCategory ? foundCategory.name : '';
        }).join(', ');
    };

    const getTagNames = (tagIds) => {
        return tagIds.map(tagId => `Tag ${tagId}`).join(', ');
    };

    const limitExcerpt = (content, words) => {
        const text = content.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
        const wordsArray = text.split(" ");
        return wordsArray.slice(0, words).join(" ") + (wordsArray.length > words ? "..." : "");
    };

    const blockStyles = {
        color: pg_textColor,
        lineHeight: pg_lineHeight,
        maxWidth: "100%",
    };
    function generateUniqueID() {
        return  Math.random().toString(36).substr(2, 9);
    }
    console.log(attributes);
	const [isSolid, setIsSolid] = useState(true);
   
    // console.log(pg_posts.uniqueID);
    return (
        <>
            <PanelSettings
			    attributes={attributes}
			    setAttributes={setAttributes}
		    />
            <AdvanceSettings  attributes={attributes}>
		    <div  style={blockStyles}>
		    {filteredPosts && filteredPosts.length > 0 ? (
                
                <div  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${pg_postLayoutColumns}, 1fr)`,
                    maxWidth: '100%',
                    gridGap: `${pg_gapup}px ${pg_gap}px`,
                    gridAutoRows: `minmax(100px, auto)`,
                    fontFamily: 'gilroy',
                }}>
                    {filteredPosts.map((post) => (
                        
                        <div key={post.uniqueID} style={{
                            paddingTop: `${pg_layoutPaddingTop}${buttonpaddingUnit}`,
                            paddingBottom: `${pg_layoutPaddingBottom}${buttonpaddingUnit}`,
                            paddingLeft: `${pg_layoutPaddingLeft}${buttonpaddingUnit}`,
                            paddingRight: `${pg_layoutPaddingRight}${buttonpaddingUnit}`,
                            display: 'grid',
                            background: layout_backgroundColor,
                            borderRadius: `${pg_postBorderRadius}px`,
                            fontSize: `${pg_textSize}px`,
                            border: `${layoutborderType} ${pg_layoutBorder}px ${pg_layoutBorderColor}`,
                            color: `${pg_textColor}`,
                            position: 'relative',
                            backgroundImage: layout_backgroundImage ? `url(${layout_backgroundImage.url})` : 'none',
                            backgroundAttachment: layout_backgroundAttachment,
                            backgroundRepeat: layout_backgroundRepeat,
                            backgroundSize: layout_backgroundSize,
                        }}>
                          
                        
                            {pg_showFeaturedImage && post.featured_media_url && (
                                <div style={{
                                    position: 'relative',
                                    marginBottom: '10px',
                                }}>
                                    <img
                                        src={post.featured_media_url}
                                        alt={post.title.rendered}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: `${pg_imageBorderRadius}px`,
                                        }}
                                    />
                                    {pg_showCategories && pg_showCategoriesOnImage && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            display: 'flex',
                                            gap: '10px',
                                        }}>
                                            {post.categories.map((category) => (
                                                <button key={category.id} style={{
                                                    paddingTop: `${pg_categoryPaddingTop}${categorypaddingUnit}`,
                                                    paddingBottom: `${pg_categoryPaddingBottom}${categorypaddingUnit}`,
                                                    paddingLeft: `${pg_categoryPaddingLeft}${categorypaddingUnit}`,
                                                    paddingRight: `${pg_categoryPaddingRight}${categorypaddingUnit}`,
                                                    color: `${pg_categoryTextColor}`,
                                                    background: `${category_backgroundColor}`,
                                                    backgroundImage: category_backgroundImage ? `url(${category_backgroundImage.url})` : 'none',
                                                    backgroundAttachment: category_backgroundAttachment,
                                                    backgroundRepeat: category_backgroundRepeat,
                                                    backgroundSize: category_backgroundSize,
                                                    fontSize: `${pg_categoryTextSize}px`,
                                                    borderRadius: `${pg_categoryBorderRadius}px`,
                                                    border: `${categoryborderType} ${pg_categoryBorder}px  ${pg_categoryBorderColor}`,
                                                }}>
                                                    {getCategoryNames([category])}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                            {pg_showCategories && !pg_showCategoriesOnImage && (
                                <div style={{ marginBottom: '5px' }}>
                                    {post.categories.map((category) => (
                                        <button key={category.id} style={{
                                            paddingTop: `${pg_categoryPaddingTop}${categorypaddingUnit}`,
                                            paddingBottom: `${pg_categoryPaddingBottom}${categorypaddingUnit}`,
                                            paddingLeft: `${pg_categoryPaddingLeft}${categorypaddingUnit}`,
                                            paddingRight: `${pg_categoryPaddingRight}${categorypaddingUnit}`,
                                            color: `${pg_categoryTextColor}`,
                                            background: `${category_backgroundColor}`,
                                            backgroundImage: category_backgroundImage ? `url(${category_backgroundImage.url})` : 'none',
                                            backgroundAttachment: category_backgroundAttachment,
                                            backgroundRepeat: category_backgroundRepeat,
                                            backgroundSize: category_backgroundSize,
                                            fontSize: `${pg_categoryTextSize}px`,
                                            borderRadius: `${pg_categoryBorderRadius}px`,
                                            border: `${categoryborderType} ${pg_categoryBorder}px  ${pg_categoryBorderColor}`,
                                        }}>
                                            {getCategoryNames([category])}
                                        </button>
                                    ))}
                                </div>
                            )}
                            <div style={{ marginBottom: '10px' }}>
                                <TitleTag style={{ color: `${pg_blockTitleColor}`, fontSize: `${pg_blockTitleSize}px` }}>
                                    <a href={post.link} style={{textDecoration:"none"}}>{post.title.rendered}</a>
                                </TitleTag>
                            </div>
                            <div style={{ fontSize: '14px', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                                {!pg_showAuthor && pg_showDate && (
                                    <span style={{ fontSize: `${pg_dateTextSize}px`, color: `${pg_dateColor}`, marginBottom: '8px' }}>
                                        {new Date(post.date).toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </span>
                                )}

                                {pg_showAuthor && authors[post.author] && (
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                        <div style={{ 
                                            marginRight: '8px',
                                            fontSize: `${pg_authorTextSize}px`,
                                            color: `${pg_authorTextColor}`,
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                            scale:`${pg_authorImageScale}`
                                        }}>
                                            <img src="https://tinyurl.com/4tu8dsee" alt="Author Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <a href={authors[post.author].authorLink} style={{textDecoration:"none", fontSize: `${pg_authorTextSize}px`, color: `${pg_authorTextColor}` }}>
                                                By {authors[post.author]}
                                            </a>
                                            {pg_showDate && (
                                                <span style={{ fontSize: `${pg_dateTextSize}px`, color: `${pg_dateColor}`, marginLeft: '65px',marginTop:'-19px' }}>
                                                    {new Date(post.date).toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </span>
                                            )}
                </div>
            </div>
        )}
    </div>


                        
                            {pg_showExcerpt && (
                                <div>
                                    {limitExcerpt(post.excerpt.rendered, pg_excerptWords)} {pg_excerptSelector}
                                </div>
                            )}
                            {pg_showFullContent && (
                                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                            )}
                            {pg_showTags && (
                                <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {post.tags.map((tag) => (
                                        <button key={tag} style={{
                                            paddingTop: `${pg_tagPaddingTop}${tagpaddingUnit}`,
                                            paddingBottom: `${pg_tagPaddingBottom}${tagpaddingUnit}`,
                                            paddingLeft: `${pg_tagPaddingLeft}${tagpaddingUnit}`,
                                            paddingRight: `${pg_tagPaddingRight}${tagpaddingUnit}`,
                                            color: `${pg_tagTextColor}`,
                                            background: `${tag_backgroundColor}`,
                                            backgroundImage: tag_backgroundImage ? `url(${tag_backgroundImage.url})` : 'none',
                                            backgroundAttachment: tag_backgroundAttachment,
                                            backgroundRepeat: tag_backgroundRepeat,
                                            backgroundSize: tag_backgroundSize,
                                            fontSize: `${pg_tagTextSize}px`,
                                            borderRadius: `${pg_tagBorderRadius}px`,
                                            minWidth: '50px', // Example: Set a minimum width
                                            maxWidth: '100px', // Example: Set a maximum width
                                            minHeight: '10px', // Example: Set a minimum height
                                            maxHeight: '30px', // Example: Set a maximum height
                                            boxSizing: 'border-box', // Ensure padding and border are included in width/height
                                            border: `${tagborderType} ${pg_tagBorder}px  ${pg_tagBorderColor}`,
                                        }}>
                                            {getTagNames([tag])}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
			    </div>
		    ) : (
                <>
                    <p>{__('Loading Post...', 'pg-block')}</p>
                    <Spinner />
                </>
		    )}
	        </div></AdvanceSettings>
        </>
	);
		
};
	
	export default Edit;


