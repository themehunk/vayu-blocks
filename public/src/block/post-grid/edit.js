import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import './editor.scss';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import { Spinner } from '@wordpress/components';
import { InnerBlocks} from '@wordpress/block-editor';

import {
    blockStyles,
    gridContainerStyles,
    postStyles,
    featuredImageStyles,
    categoryButtonStyles,
    titleTagStyles,
    authorImageStyles,
    authorLinkStyles,
    tagButtonStyles,
    authorAndDateContainerStyles,
    showOnlyDateStyles,
    fullContentStyle,
    dateImageStyles,
    PaginationStyles
} from './edit-style';
import { useSelect } from '@wordpress/data';

const Edit = ({ attributes, setAttributes }) => {

    const {
        sortByOrder,
        sortByField,
        pg_allPosts,
        selectedCategories,
        pg_ContentWeight,
        pg_spacing,
        pg_paginationTopBorderRadius,
		pg_paginationBottomBorderRadius,
		pg_paginationLeftBorderRadius,
		pg_paginationRightBorderRadius,

		paginationTopborderType,
        paginationBottomborderType,
        paginationLeftborderType,
        paginationRightborderType,
		pg_paginationTopBorder,
        pg_paginationBottomBorder,
        pg_paginationLeftBorder,
        pg_paginationRightBorder,
        pg_paginationTopBorderColor,
        pg_paginationBottomBorderColor,
        pg_paginationLeftBorderColor,
        pg_paginationRightBorderColor,
        
        pg_categoryTopBorderRadius,
		pg_categoryBottomBorderRadius,
		pg_categoryLeftBorderRadius,
		pg_categoryRightBorderRadius,

		categoryTopborderType,
        categoryBottomborderType,
        categoryLeftborderType,
        categoryRightborderType,
		pg_categoryTopBorder,
        pg_categoryBottomBorder,
        pg_categoryLeftBorder,
        pg_categoryRightBorder,
        pg_categoryTopBorderColor,
        pg_categoryBottomBorderColor,
        pg_categoryLeftBorderColor,
        pg_categoryRightBorderColor,

        
		pg_tagTopBorderRadius,
		pg_tagBottomBorderRadius,
		pg_tagLeftBorderRadius,
		pg_tagRightBorderRadius,

		tagTopborderType,
        tagBottomborderType,
        tagLeftborderType,
        tagRightborderType,
		pg_tagTopBorder,
        pg_tagBottomBorder,
        pg_tagLeftBorder,
        pg_tagRightBorder,
        pg_tagTopBorderColor,
        pg_tagBottomBorderColor,
        pg_tagLeftBorderColor,
        pg_tagRightBorderColor,


        pg_dateImageScale,
        pg_numberOfCategories,
        pg_TitlelineHeight,
		pg_TitleSize,
		pg_TitleColor,
        pg_posts,
        pg_showExcerpt,
        pg_showFullContent,
        pg_showFullContentTablet,
        pg_showFullContentMobile,
        pg_showFeaturedImageTablet,
        pg_showFeaturedImageMobile,
        pg_showCategoriesTablet,
        pg_showCategoriesMobile,
        pg_showAuthorTablet,
        pg_showAuthorMobile,
        pg_showDateTablet,
        pg_showDateMobile,
        pg_showTagTablet,
        pg_showTagMobile,

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
        pg_blockTitleColor,
        pg_blockTitleSize,
        pg_imageBorderRadius,
        pg_excerptWords,
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
        pg_layoutPaddingTop,
        pg_layoutPaddingBottom,
        pg_layoutPaddingLeft,
        pg_layoutPaddingRight,
        pg_authorImageScale,
        pg_excerptSelector,
        pg_showExcerptTablet,
        pg_showExcerptMobile,
        pg_excerptWordsTablet,
        pg_excerptWordsMobile,
        pg_excerptSelectorTablet,
        pg_excerptSelectorMobile,
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
        layoutTopborderType,
        layoutBottomborderType,
        layoutLeftborderType,
        layoutRightborderType,
        pg_layoutTopBorder,
        pg_layoutBottomBorder,
        pg_layoutLeftBorder,
        pg_layoutRightBorder,
        pg_layoutTopBorderColor,
        pg_layoutBottomBorderColor,
        pg_layoutLeftBorderColor,
        pg_layoutRightBorderColor,
        pg_layoutBorderColor,
        pg_layoutBorder,
        layoutborderType,
        pg_postTopBorderRadius,
		pg_postBottomBorderRadius,
		pg_postLeftBorderRadius,
		pg_postRightBorderRadius,
        
        layout_backgroundType,
        layout_backgroundColor,
        layout_backgroundImage,
        layout_backgroundGradient,
        layout_backgroundPosition,
        layout_backgroundAttachment,
        layout_backgroundRepeat,
        layout_backgroundSize,
        categoryborderType,

        pg_featuredImageTopBorderRadius,
        pg_featuredImageBottomBorderRadius,
        pg_featuredImageLeftBorderRadius,
        pg_featuredImageRightBorderRadius,

        featuredImageTopborderType,
        featuredImageBottomborderType,
        featuredImageLeftborderType,
        featuredImageRightborderType,
        pg_featuredImageTopBorder,
        pg_featuredImageBottomBorder,
        pg_featuredImageLeftBorder,
        pg_featuredImageRightBorder,
        pg_featuredImageTopBorderColor,
        pg_featuredImageBottomBorderColor,
        pg_featuredImageLeftBorderColor,
        pg_featuredImageRightBorderColor,
		
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
        currentPage,
        showpagination,
        layout_backgroundtype,  
        pg_showcategoriesMenu,
        pg_layoutpaddingType,
        pg_layoutpaddingTypeTablet,
        pg_layoutpaddingTypeMobile,
        pg_layoutpadding,
        pg_layoutpaddingTop,
        pg_layoutpaddingRight,
        pg_layoutpaddingBottom,
        pg_layoutpaddingLeft,
        pg_layoutpaddingTablet,
        pg_layoutpaddingTopTablet,
        pg_layoutpaddingRightTablet,
        pg_layoutpaddingBottomTablet,
        pg_layoutpaddingLeftTablet,
        pg_layoutpaddingMobile,
        pg_layoutpaddingTopMobile,
        pg_layoutpaddingRightMobile,
        pg_layoutpaddingBottomMobile,
        pg_layoutpaddingLeftMobile,
        pg_layoutpaddingUnit,
        pg_CategorypaddingType,
        pg_CategorypaddingTypeTablet,
        pg_CategorypaddingTypeMobile,
        pg_Categorypadding,
        pg_CategorypaddingTop,
        pg_CategorypaddingRight,
        pg_CategorypaddingBottom,
        pg_CategorypaddingLeft,
        pg_CategorypaddingTablet,
        pg_CategorypaddingTopTablet,
        pg_CategorypaddingRightTablet,
        pg_CategorypaddingBottomTablet,
        pg_CategorypaddingLeftTablet,
        pg_CategorypaddingMobile,
        pg_CategorypaddingTopMobile,
        pg_CategorypaddingRightMobile,
        pg_CategorypaddingBottomMobile,
        pg_CategorypaddingLeftMobile,
        pg_TagpaddingType,
        pg_TagpaddingTypeTablet,
        pg_TagpaddingTypeMobile,
        pg_Tagpadding,
        pg_TagpaddingTop,
        pg_TagpaddingRight,
        pg_TagpaddingBottom,
        pg_TagpaddingLeft,
        pg_TagpaddingTablet,
        pg_TagpaddingTopTablet,
        pg_TagpaddingRightTablet,
        pg_TagpaddingBottomTablet,
        pg_TagpaddingLeftTablet,
        pg_TagpaddingMobile,
        pg_TagpaddingTopMobile,
        pg_TagpaddingRightMobile,
        pg_TagpaddingBottomMobile,
        pg_TagpaddingLeftMobile,

        pg_postLayoutColumns,
        pg_postLayoutColumnsTablet,
        pg_postLayoutColumnsMobile,

        pg_numberOfRow,
        pg_numberOfRowTablet,
        pg_numberOfRowMobile,

        pg_gap,
        pg_gapTablet,
        pg_gapMobile,
        pg_gapup,
        pg_gapupTablet,
        pg_gapupMobile,
        pg_numberOfTags,

        pg_PaginationpaddingUnit,
        pg_PaginationpaddingTop,
        pg_PaginationpaddingRight,
        pg_PaginationpaddingBottom,
        pg_PaginationpaddingLeft,
        pg_PaginationpaddingTablet,
        pg_PaginationpaddingTopTablet,
        pg_PaginationpaddingRightTablet,
        pg_PaginationpaddingBottomTablet,
        pg_PaginationpaddingLeftTablet,
        pg_PaginationpaddingMobile,
        pg_PaginationpaddingTopMobile,
        pg_PaginationpaddingRightMobile,
        pg_PaginationpaddingBottomMobile,
        pg_PaginationpaddingLeftMobile,
        pg_PaginationBorder,
        pg_PaginationBorderColor,
        pg_PaginationBorderRadius,
        PaginationborderType,
        pg_PaginationbackgroundType,
        pg_PaginationbackgroundColor,
        pg_PaginationbackgroundGradient,
        pg_paginationBorderRadius,
        pg_PaginationColor,
        pg_PaginationSize,
        pg_featuredImageOnly,
    } = attributes;

    const [authors, setAuthors] = useState({});
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, settags] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [isSolid, setIsSolid] = useState(true);
    const [totalPages, setTotalPages] = useState(1); 
    const [loading, setLoading] = useState(true);
    const [CurrentPage, setCurrentPage] = useState(1);
    const [isFullContentVisible, setFullContentVisible] = useState(false);

    // Function to toggle content visibility
    const toggleContentVisibility = () => {
        setFullContentVisible(!isFullContentVisible);
    };
  

    const TitleTag = pg_blockTitleTag || 'h2';

    //style
    const blockStyle = blockStyles(pg_textColor, pg_lineHeight);

    const gridContainerStyle = gridContainerStyles(attributes);
    
    const featuredImageStyle = featuredImageStyles(attributes);

    const categoryButtonStyle = categoryButtonStyles(attributes);

    const titleTagStyle = titleTagStyles(attributes);

    const dateImageStyle = dateImageStyles(attributes);

    const authorImageStyle = authorImageStyles(pg_authorTextSize, pg_authorTextColor, pg_authorImageScale);

    const authorLinkStyle = authorLinkStyles(pg_authorTextSize, pg_authorTextColor);

    const tagButtonStyle = tagButtonStyles(attributes);

    const postStyle = postStyles(attributes);

    const authorAndDateContainerStyle = authorAndDateContainerStyles;

    const PaginationStyle = PaginationStyles(attributes);
    
    const showOnlyDateStyle = showOnlyDateStyles(attributes);

    const fullContentStyles = fullContentStyle(attributes);


    const getView = useSelect( select => {
		const { getView } = select( 'vayu-blocks/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);
    
    const numberOfRow= () => getView === 'Desktop' ? pg_numberOfRow : getView === 'Tablet' ? pg_numberOfRowTablet : pg_numberOfRowMobile;
    const numberOfColumns= () => getView === 'Desktop' ? pg_postLayoutColumns : getView === 'Tablet' ? pg_postLayoutColumnsTablet : pg_postLayoutColumnsMobile;
        
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Start loading
            try {
                let searchParams = '';
                if (searchKeyword) {
                    searchParams = `&search=${encodeURIComponent(searchKeyword)}`;
                }
                const fetchedCategories = await apiFetch({ path: '/wp/v2/categories' });
                setCategories(fetchedCategories);
    
                // Fetch all posts
                const fetchedPosts = await apiFetch({ path: `/wp/v2/posts?per_page=100${searchParams}` });
    
                // Fetch featured media for each post
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
    
                // Filter posts based on categories and featured image
                const filteredPosts = postsWithMedia.filter(post => {
                    // Map post category IDs to category names
                    const postCategoryNames = post.categories.map(categoryId => {
                        const category = fetchedCategories.find(cat => cat.id === categoryId);
                        return category ? category.name : null;
                    }).filter(name => name !== null);
    
                    // Check if all selected category names are present in the post's category names
                    const matchesAll = selectedCategories.every(selectedCategoryName =>
                        postCategoryNames.includes(selectedCategoryName)
                    );
    
                    // Check if the post has a featured image if the filter is enabled
                    const hasFeaturedImage = pg_featuredImageOnly ? !!post.featured_media : true;
    
                    return matchesAll && hasFeaturedImage;
                });
    
                // Check if there are no filtered posts
                if (filteredPosts.length === 0) {
                    setAttributes({ pg_posts: []});
                    setLoading(false);
                    return;
                }
            
                // Generate unique IDs for the posts
                const postsWithIDs = filteredPosts.map(post => ({ ...post, uniqueID: generateUniqueID() }));
    
                // Sort posts
                const sortedPosts = postsWithIDs.sort((a, b) => {
                    const field = sortByField || 'id';
                    let valueA = a[field];
                    let valueB = b[field];
    
                    if (field === 'date' || field === 'modified') {
                        valueA = new Date(valueA).getTime();
                        valueB = new Date(valueB).getTime();
                    } else if (field === 'id') {
                        valueA = Number(valueA);
                        valueB = Number(valueB);
                    } else if (field === 'title') {
                        const firstWordA = String(a.title.rendered).split(/\s+/)[0].toLowerCase();
                        const firstWordB = String(b.title.rendered).split(/\s+/)[0].toLowerCase();
    
                        if (firstWordA < firstWordB) return sortByOrder === 'asc' ? -1 : 1;
                        if (firstWordA > firstWordB) return sortByOrder === 'asc' ? 1 : -1;
    
                        const fullTitleA = String(a.title.rendered).toLowerCase();
                        const fullTitleB = String(b.title.rendered).toLowerCase();
    
                        for (let i = 0; i < Math.min(fullTitleA.length, fullTitleB.length); i++) {
                            if (fullTitleA[i] < fullTitleB[i]) return sortByOrder === 'asc' ? -1 : 1;
                            if (fullTitleA[i] > fullTitleB[i]) return sortByOrder === 'asc' ? 1 : -1;
                        }
    
                        return fullTitleA.length - fullTitleB.length;
                    }
    
                    if (sortByOrder === 'asc') {
                        if (valueA < valueB) return -1;
                        if (valueA > valueB) return 1;
                        return 0;
                    } else if (sortByOrder === 'desc') {
                        if (valueA > valueB) return -1;
                        if (valueA < valueB) return 1;
                        return 0;
                    } else {
                        return 0;
                    }
                });
    
                // Paginate posts
                const itemsPerPage = numberOfColumns() * numberOfRow();
                const totalPosts = sortedPosts.length;
                const totalPages = Math.ceil(totalPosts / itemsPerPage);
                setTotalPages(totalPages);
                if (CurrentPage > 1 && totalPages<2) {
                    setCurrentPage(1);
                }
                const startIndex = (CurrentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

                setAttributes({ pg_posts: paginatedPosts });
    
                const uniqueAuthorIds = paginatedPosts.map(post => post.author).filter((value, index, self) => self.indexOf(value) === index);
    
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
    
                const fetchedTags = await apiFetch({ path: '/wp/v2/tags' });
                settags(fetchedTags);
    
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Stop loading
            }
        };
    
        fetchData();
    }, [pg_featuredImageOnly, selectedCategories, CurrentPage, numberOfColumns(), numberOfRow(), setAttributes, searchKeyword, sortByOrder, sortByField]);
    
    // Filter
    useEffect(() => {
        if (pg_posts.length > 0 && categories.length > 0) {
            setFilteredPosts(pg_posts);
        }else{
            setFilteredPosts(pg_posts);
        }
    }, [pg_posts]);
   
    const handlePageChange = async (page) => {
        if (page!=CurrentPage){
            setCurrentPage(page);
        }
    }

    const handleSearchChange = (value) => {
        setSearchKeyword(value);
    };

    const limitExcerpt = (content, words) => {
        const text = content.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
        const wordsArray = text.split(" ");
        return wordsArray.slice(0, words).join(" ") + (wordsArray.length > words ? "..." : "");
    };

    function generateUniqueID() {
        return  Math.random().toString(36).substr(2, 9);
    }
	
    const parseHTML = (html) => {
        const element = document.createElement('div');
        element.innerHTML = html;
        return Array.from(element.childNodes).map((node, index) => {
            switch (node.nodeName) {
                case '#text':
                    return node.nodeValue;
                case 'P':
                    return <p key={index}>{parseHTML(node.innerHTML)}</p>;
                case 'STRONG':
                    return <strong key={index}>{parseHTML(node.innerHTML)}</strong>;
                // Add cases for other HTML tags as needed
                default:
                    return <span key={index}>{parseHTML(node.innerHTML)}</span>;
            }
        });
    };

    const FeaturedImage = () => getView === 'Desktop' ? pg_showFeaturedImage : getView === 'Tablet' ? pg_showFeaturedImageTablet : pg_showFeaturedImageMobile;

    const Category = () => getView === 'Desktop' ? pg_showCategories : getView === 'Tablet' ? pg_showCategoriesTablet : pg_showCategoriesMobile;

    const Author = () => getView === 'Desktop' ? pg_showAuthor : getView === 'Tablet' ? pg_showAuthorTablet : pg_showAuthorMobile;

    const ShowDate = () => getView === 'Desktop' ? pg_showDate : getView === 'Tablet' ? pg_showDateTablet : pg_showDateMobile;

    const Tags = () => getView === 'Desktop' ? pg_showTags : getView === 'Tablet' ? pg_showTagTablet : pg_showTagMobile;

    const Excerpt= () => getView === 'Desktop' ? pg_showExcerpt : getView === 'Tablet' ? pg_showExcerptTablet : pg_showExcerptMobile;

    const ExcerptWords= () => getView === 'Desktop' ? pg_excerptWords : getView === 'Tablet' ? pg_excerptWordsTablet : pg_excerptWordsMobile;

    const ExcerptSelector= () => getView === 'Desktop' ? pg_excerptSelector : getView === 'Tablet' ? pg_excerptSelectorTablet : pg_excerptSelectorMobile;

    const FullContent = () => getView === 'Desktop' ? pg_showFullContent : getView === 'Tablet' ? pg_showFullContentTablet : pg_showFullContentMobile;

    const postsToShow = filteredPosts.length > 0 ? filteredPosts : pg_posts;
    
    return (
        <>
            <PanelSettings
                attributes={attributes}
                setAttributes={setAttributes}
            />
            <AdvanceSettings attributes={attributes}>
                <div style={blockStyle}>
                    {filteredPosts && filteredPosts.length > 0 ? (
                        <div style={gridContainerStyle}>
                            {postsToShow.length > 0 ? (
                                postsToShow.map((post) => (
                                    <div key={post.uniqueID} style={postStyle}>
                                        {loading ? (
                                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Spinner /></div>
                                        ) : (
                                            <>
                                                {FeaturedImage() && post.featured_media_url && (
                                                    <div style={authorAndDateContainerStyle}>
                                                        <img
                                                            src={post.featured_media_url}
                                                            alt={post.title.rendered}
                                                            style={featuredImageStyle}
                                                        />
                                                    </div>
                                                )}
    
                                                {Category() && (
                                                    <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom : "15px",}}>
                                                        {post.categories.slice(0, pg_numberOfCategories).map((categoryId) => {
                                                            const category = categories.find(cat => cat.id === categoryId);
                                                            if (!category) return null;
    
                                                            return (
                                                                <a key={categoryId} href={category.link} style={categoryButtonStyle}>
                                                                    {category.name}
                                                                </a>
                                                            );
                                                        })}
                                                    </div>
                                                )}
    
                                                <div>
                                                    <a href={post.link} style={{ textDecoration: "none" }}>
                                                        <TitleTag style={titleTagStyle}>
                                                            {post.title.rendered}
                                                        </TitleTag>
                                                    </a>
                                                </div>
    
                                                {(Author() || ShowDate()) && (
                                                    <div style={authorAndDateContainerStyles}>
                                                        {Author() && authors[post.author] && (
                                                            <>
                                                                <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Author Logo" style={authorImageStyle} />
                                                                <a href={authors[post.author].authorLink} style={authorLinkStyle}>
                                                                    By {authors[post.author]}
                                                                </a>
                                                            </>
                                                        )}
                                                        {ShowDate() && (
                                                            <>
                                                                <img src="https://cdn-icons-png.flaticon.com/512/2782/2782901.png" style={dateImageStyle} alt="" />
                                                                <span style={showOnlyDateStyle}>
                                                                    {new Date(post.date).toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                )}
    
                                                {Excerpt() && (
                                                    <div style={fullContentStyles}>
                                                        {limitExcerpt(post.excerpt.rendered, ExcerptWords())} {ExcerptSelector()}
                                                    </div>
                                                )}
    
                                                {FullContent() && (
                                                    <div style={fullContentStyles}>
                                                        {parseHTML(post.content.rendered)}
                                                    </div>
                                                )}
    
                                                {Tags() && (
                                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                                        {post.tags.slice(0, pg_numberOfTags).map((tagId) => {
                                                            const tag = tags.find(t => t.id === tagId);
                                                            if (!tag) return null;
    
                                                            return (
                                                                <a key={tagId} href={tag.link} style={tagButtonStyle}>
                                                                    {tag.name}
                                                                </a>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>{__('No post to display', 'pg-block')}</p>
                            )}
                        </div>
                    ) : (
                        <>
                            <p>{__('No post to display', 'pg-block')}</p>
                            <Spinner />
                        </>
                    )}
    
                    {/* Pagination */}
                    {showpagination && totalPages > 1 && (
                        <div className="pg-pagination" style={{ marginLeft: "45%" }}>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    style={PaginationStyle}
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`pg-pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </AdvanceSettings>
        </>
    );
    
		
};
	
export default Edit;


