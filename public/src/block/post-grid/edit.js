import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import './editor.scss';
import PanelSettings from './AdvanceSettings/PanelSettings';
import AdvanceSettings from './AdvanceSettings/AdvanceSettings';
import { Spinner } from '@wordpress/components';
import { useSelect } from '@wordpress/data';


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
    PaginationStyles,
    dateSectionStyles,
    titleTagStylesatag,
    paginationnewstyle
} from './edit-style';


const Edit = ({ attributes, setAttributes }) => {

    const {
        globalwidth,
        sortByOrder,
        sortByField,
        selectedCategories,
        pg_numberOfCategories,
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
        pg_textColor,
        pg_lineHeight,
        pg_excerptWords,
        pg_blockTitleTag,
        pg_showFeaturedImage,
        pg_authorTextSize,
        pg_authorTextColor,
        pg_authorImageScale,
        pg_excerptSelector,
        pg_showExcerptTablet,
        pg_showExcerptMobile,
        pg_excerptWordsTablet,
        pg_excerptWordsMobile,
        pg_excerptSelectorTablet,
        pg_excerptSelectorMobile,
        showpagination,
        pg_postLayoutColumns,
        pg_postLayoutColumnsTablet,
        pg_postLayoutColumnsMobile,
        pg_numberOfRow,
        pg_numberOfRowTablet,
        pg_numberOfRowMobile,
        pg_numberOfTags,
        pg_PaginationColor,
        pg_featuredImageOnly,
    } = attributes;

    const [filteredPosts, setFilteredPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(1); 
    const [CurrentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState({ featuredImage: false, categories: []});
    const [Loading, setLoading] = useState(false);

    // Global Settings Vayu Blocks
	const globalcontainerWidth = ThBlockData.container_width;
    setAttributes({globalwidth:globalcontainerWidth});
    
	// const globalcontainerGap = ThBlockData.container_gap;
	// const globalpadding = ThBlockData.container_padding;

    //TitleTag Define
    const TitleTag = pg_blockTitleTag || 'h2';

    //style
    const blockStyle = blockStyles();

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
    
    const titleTagStylesatagq = titleTagStylesatag(attributes);

    const paginationnew = paginationnewstyle(attributes);

    //View
    const getView = useSelect( select => {
		const { getView } = select( 'vayu-blocks/data' );
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
	}, []);
    
    const numberOfRow= () => getView === 'Desktop' ? pg_numberOfRow : getView === 'Tablet' ? pg_numberOfRowTablet : pg_numberOfRowMobile;
    const numberOfColumns= () => getView === 'Desktop' ? pg_postLayoutColumns : getView === 'Tablet' ? pg_postLayoutColumnsTablet : pg_postLayoutColumnsMobile;
    
    //load ppost
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Construct the filter query parameters
                const queryParams = [];
    
                if (filter.featuredImage) {
                    queryParams.push('with_featured_image=true');
                }
                if (filter.categories.length > 0) {
                    const categoryIds = filter.categories.join(',');
                    queryParams.push(`categories=${categoryIds}`);
                }
    
                const per_page= numberOfColumns() * numberOfRow();
                // Build the final API path with filters
                const queryString = queryParams.length ? `&${queryParams.join('&')}` : '';

                const apiPath = `/wp/v2/posts?page=${CurrentPage}&per_page=${per_page}&_embed&order=${sortByOrder}&orderby=${sortByField}${queryString}`;
                //const fetchedPosts = await apiFetch({ path: apiPath });

                const response = await apiFetch({
                    path: apiPath,
                    parse: false
                  });
              
                // Log results
                const fetchedPosts = await response.json();
                const pages = await response.headers.get('X-WP-TotalPages');
                const postsWithIDs = fetchedPosts.map(post => ({ ...post, uniqueID: generateUniqueID() }));
                setAttributes({pg_posts:postsWithIDs})
                setFilteredPosts(postsWithIDs);
                setTotalPages(pages);

            } catch (error) {
                console.error('Error fetching data:', error);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    }, [filter, sortByOrder, sortByField,numberOfColumns(),numberOfRow(),selectedCategories,pg_featuredImageOnly,CurrentPage]);
    
    useEffect(() => {
        const fetchCategoriesAndUpdateFilter = async () => {
            try {
                // Fetch categories to get IDs
                const fetchedCategories = await apiFetch({ path: '/wp/v2/categories' });
                setAttributes({pg_allCategories:fetchedCategories});
                // Create a mapping of category names to IDs
                const categoryNameToIdMap = fetchedCategories.reduce((acc, category) => {
                    acc[category.name] = category.id;
                    return acc;
                }, {});
    
                // Map selected category names to their IDs
                const categoryIds = selectedCategories.map(categoryName => 
                    categoryNameToIdMap[categoryName] || null
                ).filter(id => id !== null);

                // const allCategoriesFound = selectedCategories.every(categoryName =>
                //     categoryNameToIdMap[categoryName] !== undefined
                // );

                // if (!allCategoriesFound) {
                //     setLoading(true);
                //     return;
                // }else{
                //     setLoading(false);
                // }
                // Update filter state with IDs and other parameters
                setFilter(prevFilter => ({
                    ...prevFilter,
                    featuredImage: pg_featuredImageOnly,
                    categories: categoryIds,
                }));
    
            } catch (error) {
                console.error('Error fetching categories or updating filter:', error);
            }
        };
    
        fetchCategoriesAndUpdateFilter();
    }, [pg_featuredImageOnly, selectedCategories,pg_posts]);
    
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    
    const limitExcerpt = (content, words) => {
        const text = content.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
        const wordsArray = text.split(" ");
        return wordsArray.slice(0, words).join(" ") ;
    };

    function generateUniqueID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0,
                  v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
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
            <>
                {filteredPosts && filteredPosts.length > 0 ? (
                    <div style={gridContainerStyle}>
                    {postsToShow.length > 0 ? (
                        postsToShow.map((post) => (
                            <div key={post.uniqueID} style={postStyle}>
                                {Loading ? (
                                        <div className="loader">
                                         <Spinner/>
                                         <h6 style={{fontSize:'15px'}}>Please Wait...</h6>
                                         {/* This is the animated loader div */}
                                    </div>
                                   
                                ) : (
                                    <>
                                        {FeaturedImage() && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
                                            <div>
                                                <img
                                                    src={post._embedded['wp:featuredmedia'][0].source_url}
                                                    alt="Featured"
                                                    style={featuredImageStyle}
                                                />
                                            </div>
                                        )}
                
                                        {Category() && (
                                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                {post._embedded['wp:term'][0].slice(0, pg_numberOfCategories).map((category) => (
                                                    <a key={category.id} href={category.link} style={categoryButtonStyle}>
                                                        {category.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                
                                        <div>
                                            <TitleTag className="titletag" style={titleTagStyle}>
                                                <a href={post.link} style={titleTagStylesatagq} 
                                                    onMouseEnter={(e) => {
                                                        e.target.style.color = 'transparent';
                                                        e.target.style.background = `${attributes.pg_TitleColorhvr}`; 
                                                        e.target.style.backgroundClip = 'text'; 
                                                        e.target.style.WebkitBackgroundClip = 'text';
                                                        e.target.style.WebkitTextFillColor = 'transparent';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.color = `${attributes.pg_TitleColor}`; 
                                                        e.target.style.background = 'initial'; 
                                                        e.target.style.backgroundClip = 'initial'; 
                                                        e.target.style.WebkitBackgroundClip = 'initial';
                                                        e.target.style.WebkitTextFillColor = 'initial'; 
                                                    }}
                                                >
                                                    {post.title.rendered}
                                                </a>
                                            </TitleTag>
                                        </div>
                
                                        {(Author() || ShowDate()) && (
                                            <div style={authorAndDateContainerStyles}>
                                                {Author() && (
                                                    <div style={dateSectionStyles}>
                                                        <img
                                                            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                                                            alt="Author Logo"
                                                            style={authorImageStyle}
                                                        />
                                                        <a
                                                            href={post._embedded['author'][0].link}
                                                            style={authorLinkStyle}
                                                        >
                                                            By {post._embedded['author'][0].name}
                                                        </a>
                                                    </div>
                                                )}
                
                                                {ShowDate() && (
                                                    <div style={dateSectionStyles}>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/2782/2782901.png" style={dateImageStyle} alt="" />
                                                        <span style={showOnlyDateStyle}>
                                                            {new Date(post.date).toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                        </span>
                                                        </div>
                                                )}
                                            </div>
                                        )}
                
                                        {Excerpt() && (
                                            <div style={fullContentStyles}>
                                                {limitExcerpt(post.excerpt.rendered, ExcerptWords())} {' '} {ExcerptSelector()}
                                            </div>
                                        )}
                
                                        {FullContent() && (
                                            <div style={fullContentStyles}>
                                                {parseHTML(post.content.rendered)}
                                            </div>
                                        )}
                
                                        {Tags() && (
                                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                {post._embedded['wp:term'][1].slice(0, pg_numberOfTags).map((tag) => (
                                                    <a key={tag.id} href={tag.link} style={tagButtonStyle}>
                                                        {tag.name}
                                                    </a>
                                                ))}
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
                        <p>{__('Loading...', 'pg-block')}</p>
                        <Spinner />
                    </>
                )}

                {/* Pagination */}
                {showpagination && totalPages > 1 && (
                    <div className="pg-pagination" style={paginationnew}>
                        {CurrentPage > 1 && (
                            <button
                                style={{...PaginationStyle,
                                color:attributes.pg_PaginationColor}}
                                onClick={() => handlePageChange(CurrentPage - 1)}
                                className="pg-pagination-button"
                            >
                                &laquo;
                            </button>
                        )}

                        {Array.from({ length: totalPages }, (_, index) => {
                            const page = index + 1;
                            const isCurrentPage = page === CurrentPage;
                            const isFirstPages = page <= 2; // Always show first 2 pages
                            const isLastPages = page >= totalPages - 1; // Always show last 2 pages
                            const isNearbyCurrentPage = Math.abs(page - CurrentPage) <= 1; // Show pages next to current page

                            if (isFirstPages || isLastPages || isNearbyCurrentPage) {
                                return (
                                    <button
                                        style={{
                                            ...PaginationStyle,
                                            color: isCurrentPage ? `${attributes.pg_PaginationactiveColor}` : `${pg_PaginationColor}`,
                                        }}
                                        key={index}
                                        onClick={() => handlePageChange(page)}
                                        className={`pg-pagination-button ${isCurrentPage ? 'active' : ''}`}
                                    >
                                        {page}
                                    </button>
                                );
                            } else if (page === 3 && CurrentPage > 4) {
                                return <span key={index} className="pg-pagination-separator">...</span>;
                            } else if (page === totalPages - 2 && CurrentPage < totalPages - 3) {
                                return <span key={index} className="pg-pagination-separator">...</span>;
                            } else {
                                return null;
                            }
                        })}

                        {CurrentPage < totalPages && (
                            <button
                                style={{...PaginationStyle,
                                color:attributes.pg_PaginationColor}}
                                onClick={() => handlePageChange(CurrentPage + 1)}
                                className="pg-pagination-button"
                            >
                                &raquo;
                            </button>
                        )}
                    </div>
                )}
            </>


            </AdvanceSettings>
        </>
    );
    
		
};
	
export default Edit;


