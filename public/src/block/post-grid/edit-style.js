import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from "@wordpress/data";
import { useEffect } from "react";

const blockStyles = (pg_textColor, pg_lineHeight) => ({
    maxWidth: "100%",
});

const gridContainerStyles = (attributes) => {
    const view = useSelect( select => {
        const { getView } = select( 'vayu-blocks/data' );
        const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;
       
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []);

    const getLayoutColumnStyle = (attributes, view) => {

        return {
            gridTemplateColumns: `repeat(${view === 'Desktop' ? attributes.pg_postLayoutColumns : attributes[`pg_postLayoutColumns${view}`]}, 1fr)`
        };
    };

    const getLayoutRowStyle = (attributes, view) => {
        const numberOfRows = view === 'Desktop' ? attributes.pg_numberOfRow : attributes[`pg_numberOfRow${view}`];
        
        return {
            gridTemplateRows: `repeat(${numberOfRows}, minmax(100px, 1fr))`
        };
    };
    

    const getGapStyle = (attributes, view) => {
        return {
            gridGap: `${view === 'Desktop' ? attributes.pg_gapup + 'px ' + attributes.pg_gap + 'px' : attributes[`pg_gapup${view}`] + 'px ' + attributes[`pg_gap${view}`] + 'px'}`
        };
    };

    const layoutColumnsStyle = getLayoutColumnStyle(attributes, view);
    const layoutRowsStyle = getLayoutRowStyle(attributes, view);
    const gapStyle = getGapStyle(attributes, view);

    return {
        display: 'grid',
        ...layoutColumnsStyle,
        ...layoutRowsStyle,
        ...gapStyle,
        maxWidth: '100%',
    };
};
//post
const getPaddingStyle = (attributes,view) => {
    switch (view) {
        case 'Desktop':
            return {
                paddingTop: attributes.pg_layoutpaddingTop ? `${attributes.pg_layoutpaddingTop}${attributes.pg_layoutpaddingUnit || 'px'}` : undefined,
                paddingBottom: attributes.pg_layoutpaddingBottom ? `${attributes.pg_layoutpaddingBottom}${attributes.pg_layoutpaddingUnit || 'px'}` : undefined,
                paddingLeft: attributes.pg_layoutpaddingLeft ? `${attributes.pg_layoutpaddingLeft}${attributes.pg_layoutpaddingUnit || 'px'}` : undefined,
                paddingRight: attributes.pg_layoutpaddingRight ? `${attributes.pg_layoutpaddingRight}${attributes.pg_layoutpaddingUnit || 'px'}` : undefined
            };
        case 'Tablet':
            return {
                paddingTop: attributes.pg_layoutpaddingTopTablet ? `${attributes.pg_layoutpaddingTopTablet}${attributes.pg_layoutpaddingUnit || 'px'}` : undefined,
                paddingBottom: attributes.pg_layoutpaddingBottomTablet ? `${attributes.pg_layoutpaddingBottomTablet}${attributes.pg_layoutpaddingUnit || 'px'}` : undefined,
                paddingLeft: attributes.pg_layoutpaddingLeftTablet ? `${attributes.pg_layoutpaddingLeftTablet}${attributes.pg_layoutpaddingUnit || 'px'}` : undefined,
                paddingRight: attributes.pg_layoutpaddingRightTablet ? `${attributes.pg_layoutpaddingRightTablet}${attributes.pg_layoutpaddingUnit || 'px'}` : undefined
            };
        case 'Mobile':
            return {
                paddingTop: attributes.pg_layoutpaddingTopMobile ? `${attributes.pg_layoutpaddingTopMobile}${attributes.pg_layoutpaddingUnit || 'px'}` : undefined,
                paddingBottom: attributes.pg_layoutpaddingBottomMobile ? `${attributes.pg_layoutpaddingBottomMobile}${attributes.pg_layoutpaddingUnit || 'px'}` : undefined,
                paddingLeft: attributes.pg_layoutpaddingLeftMobile ? `${attributes.pg_layoutpaddingLeftMobile}${attributes.pg_layoutpaddingUnit || 'px'}` : undefined,
                paddingRight: attributes.pg_layoutpaddingRightMobile ? `${attributes.pg_layoutpaddingRightMobile}${attributes.pg_layoutpaddingUnit || 'px'}` : undefined
            };
        default:
            return {};
    }
};

const backgroundStyle = (attributes) => {
    if (attributes.layout_backgroundType === 'color') {
        return { background: attributes.layout_backgroundColor };
    } else if (attributes.layout_backgroundType === 'gradient') {
        return { background: attributes.layout_backgroundGradient };
    } else if (attributes.layout_backgroundType === 'image') {
        return { backgroundImage: `url(${attributes.layout_backgroundImage.url})`, backgroundSize: 'cover', backgroundPosition: 'center' };
    } else {
        return {};
    }
};

const postStyles = (attributes) => {
    const view = useSelect( select => {
        const { getView } = select( 'vayu-blocks/data' );
        const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;
       
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []);
    const paddingStyles = getPaddingStyle(attributes,view);
   
        
    return {
        ...paddingStyles,
        ...backgroundStyle(attributes),
        lineHeight : `${attributes.pg_spacing}`,
        borderTopLeftRadius: `${attributes.pg_postTopBorderRadius}`,
        borderBottomLeftRadius: `${attributes.pg_postBottomBorderRadius}`,
        borderBottomRightRadius: `${attributes.pg_postLeftBorderRadius}`,
        borderTopRightRadius: `${attributes.pg_postRightBorderRadius}`,

        border: `${attributes.layoutborderType || 'solid'} ${attributes.pg_layoutBorder || '0px'} ${attributes.pg_layoutBorderColor || 'black'}`,
        borderTop: `${attributes.layoutTopborderType || 'solid'} ${attributes.pg_layoutTopBorder || '0px'} ${attributes.pg_layoutTopBorderColor || 'black'}`,
        borderBottom: `${attributes.layoutBottomborderType || 'solid'} ${attributes.pg_layoutBottomBorder || '0px'} ${attributes.pg_layoutBottomBorderColor || 'black'}`,
        borderLeft: `${attributes.layoutLeftborderType || 'solid'} ${attributes.pg_layoutLeftBorder || '0px'} ${attributes.pg_layoutLeftBorderColor || 'black'}`,
        borderRight: `${attributes.layoutRightborderType || 'solid'} ${attributes.pg_layoutRightBorder || '0px'} ${attributes.pg_layoutRightBorderColor || 'black'}`,
        
        position: 'relative',
        backgroundAttachment: attributes.layout_backgroundAttachment,
        backgroundRepeat: attributes.layout_backgroundRepeat,
        backgroundSize: attributes.layout_backgroundSize,
    };
};
//featured Image
const featuredImageStyles = (attributes) => ({
    display: 'block',
    width: '100%',
    height: 'auto',
    borderRadius: `${attributes.pg_imageBorderRadius}px`,
});

//Category
const getCategoryPaddingStyle = (attributes,view) => {
    const getView = useSelect( select => {
        const { getView } = select( 'vayu-blocks/data' );
        const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;
       
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []);
    switch (view) {
        case 'Desktop':
            return {
                paddingTop: attributes.pg_CategorypaddingTop ? `${attributes.pg_CategorypaddingTop}${attributes.categorypaddingUnit || 'px'}` : undefined,
                paddingBottom: attributes.pg_CategorypaddingBottom ? `${attributes.pg_CategorypaddingBottom}${attributes.categorypaddingUnit || 'px'}` : undefined,
                paddingLeft: attributes.pg_CategorypaddingLeft ? `${attributes.pg_CategorypaddingLeft}${attributes.categorypaddingUnit || 'px'}` : undefined,
                paddingRight: attributes.pg_CategorypaddingRight ? `${attributes.pg_CategorypaddingRight}${attributes.categorypaddingUnit || 'px'}` : undefined
            };
        case 'Tablet':
            return {
                paddingTop: attributes.pg_CategorypaddingTopTablet ? `${attributes.pg_CategorypaddingTopTablet}${attributes.categorypaddingUnit || 'px'}` : undefined,
                paddingBottom: attributes.pg_CategorypaddingBottomTablet ? `${attributes.pg_CategorypaddingBottomTablet}${attributes.categorypaddingUnit || 'px'}` : undefined,
                paddingLeft: attributes.pg_CategorypaddingLeftTablet ? `${attributes.pg_CategorypaddingLeftTablet}${attributes.categorypaddingUnit || 'px'}` : undefined,
                paddingRight: attributes.pg_CategorypaddingRightTablet ? `${attributes.pg_CategorypaddingRightTablet}${attributes.categorypaddingUnit || 'px'}` : undefined
            };
        case 'Mobile':
            return {
                paddingTop: attributes.pg_CategorypaddingTopMobile ? `${attributes.pg_CategorypaddingTopMobile}${attributes.categorypaddingUnit || 'px'}` : undefined,
                paddingBottom: attributes.pg_CategorypaddingBottomMobile ? `${attributes.pg_CategorypaddingBottomMobile}${attributes.categorypaddingUnit || 'px'}` : undefined,
                paddingLeft: attributes.pg_CategorypaddingLeftMobile ? `${attributes.pg_CategorypaddingLeftMobile}${attributes.categorypaddingUnit || 'px'}` : undefined,
                paddingRight: attributes.pg_CategorypaddingRightMobile ? `${attributes.pg_CategorypaddingRightMobile}${attributes.categorypaddingUnit || 'px'}` : undefined
            };
        default:
            return {};
    }
};

const categoryButtonStyles = (attributes) => {
    const view = useSelect( select => {
        const { getView } = select( 'vayu-blocks/data' );
        const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;
       
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []); 
    const categoryStyles = getCategoryPaddingStyle(attributes, view);

    return {
        ...categoryStyles,
        color: `${attributes.pg_categoryTextColor}`,
        background: attributes.category_backgroundType === 'color' ? attributes.category_backgroundColor : attributes.category_backgroundType === 'gradient' ? `${attributes.category_backgroundGradient}` : 'none',
        fontSize: `${attributes.pg_categoryTextSize}px`,
        marginLeft:'5px',
        fontWeight:'600',
        marginTop:"3%",

        borderTopLeftRadius: `${attributes.pg_categoryTopBorderRadius}`,
        borderBottomLeftRadius: `${attributes.pg_categoryBottomBorderRadius}`,
        borderBottomRightRadius: `${attributes.pg_categoryLeftBorderRadius}`,
        borderTopRightRadius: `${attributes.pg_categoryRightBorderRadius}`,

        textDecoration: "none",

        border: `${attributes.categoryborderType || 'solid'} ${attributes.pg_categoryBorder || '0px'} ${attributes.pg_categoryBorderColor || 'black'}`,
        borderTop: `${attributes.categoryTopborderType || 'solid'} ${attributes.pg_categoryTopBorder || '0px'} ${attributes.pg_categoryTopBorderColor || 'black'}`,
        borderBottom: `${attributes.categoryBottomborderType || 'solid'} ${attributes.pg_categoryBottomBorder || '0px'} ${attributes.pg_categoryBottomBorderColor || 'black'}`,
        borderLeft: `${attributes.categoryLeftborderType || 'solid'} ${attributes.pg_categoryLeftBorder || '0px'} ${attributes.pg_categoryLeftBorderColor || 'black'}`,
        borderRight: `${attributes.categoryRightborderType || 'solid'} ${attributes.pg_categoryRightBorder || '0px'} ${attributes.pg_categoryRightBorderColor || 'black'}`,

    };
};
  
const titleTagStyles = (attributes) => ({
    color: `${attributes.pg_TitleColor}`,
    fontSize: `${attributes.pg_TitleSize}px`,
    marginBlockStart: '0.07em',
    lineHeight: `${attributes.pg_TitlelineHeight}`,
    marginBlockEnd: '0.05em',
    fontWeight:'600',
    marginLeft:'5px',
});

//Author
const authorAndDateContainerStyles = {
    display: 'flex', 
    alignItems: 'center',
    gap:'3px',
    flexWrap:'wrap',
    marginLeft:"2px",
};

const authorImageStyles = (pg_authorTextSize, pg_authorTextColor, pg_authorImageScale) => ({
    width: '20px',
    borderRadius:"50%",
    transform: `scale(${pg_authorImageScale})`,
});

const authorLinkStyles = (pg_authorTextSize, pg_authorTextColor) => ({
    textDecoration: 'none',
    fontSize: `${pg_authorTextSize}px`,
    color: `${pg_authorTextColor}`, 
    marginRight:'10px',
});

//Date
const dateImageStyles = (attributes) =>({
    transform: `scale(${attributes.pg_dateImageScale})`,
    width: '20px', 
 
});

const showOnlyDateStyles = (attributes) => ({
    fontSize: `${attributes.pg_dateTextSize}px`,
    color: `${attributes.pg_dateColor}`, 
   
});

//Tag
const getTagPaddingStyle = (attributes,view) => {
    switch (view) {
        case 'Desktop':
            return {
                paddingTop: attributes.pg_TagpaddingTop ? `${attributes.pg_TagpaddingTop}${attributes.tagpaddingUnit || 'px'}` : undefined,
                paddingBottom: attributes.pg_TagpaddingBottom ? `${attributes.pg_TagpaddingBottom}${attributes.tagpaddingUnit || 'px'}` : undefined,
                paddingLeft: attributes.pg_TagpaddingLeft ? `${attributes.pg_TagpaddingLeft}${attributes.tagpaddingUnit || 'px'}` : undefined,
                paddingRight: attributes.pg_TagpaddingRight ? `${attributes.pg_TagpaddingRight}${attributes.tagpaddingUnit || 'px'}` : undefined
            };
        case 'Tablet':
            return {
                paddingTop: attributes.pg_TagpaddingTopTablet ? `${attributes.pg_TagpaddingTopTablet}${attributes.tagpaddingUnit || 'px'}` : undefined,
                paddingBottom: attributes.pg_TagpaddingBottomTablet ? `${attributes.pg_TagpaddingBottomTablet}${attributes.tagpaddingUnit || 'px'}` : undefined,
                paddingLeft: attributes.pg_TagpaddingLeftTablet ? `${attributes.pg_TagpaddingLeftTablet}${attributes.tagpaddingUnit || 'px'}` : undefined,
                paddingRight: attributes.pg_TagpaddingRightTablet ? `${attributes.pg_TagpaddingRightTablet}${attributes.tagpaddingUnit || 'px'}` : undefined
            };
        case 'Mobile':
            return {
                paddingTop: attributes.pg_TagpaddingTopMobile ? `${attributes.pg_TagpaddingTopMobile}${attributes.tagpaddingUnit || 'px'}` : undefined,
                paddingBottom: attributes.pg_TagpaddingBottomMobile ? `${attributes.pg_TagpaddingBottomMobile}${attributes.tagpaddingUnit || 'px'}` : undefined,
                paddingLeft: attributes.pg_TagpaddingLeftMobile ? `${attributes.pg_TagpaddingLeftMobile}${attributes.tagpaddingUnit || 'px'}` : undefined,
                paddingRight: attributes.pg_TagpaddingRightMobile ? `${attributes.pg_TagpaddingRightMobile}${attributes.tagpaddingUnit || 'px'}` : undefined
            };
        default:
            return {};
    }
};

const tagButtonStyles = (attributes ) => {
    const view = useSelect((select) => {
        const { getView } = select('vayu-blocks/data');
        const { __experimentalGetPreviewDeviceType } = select('core/edit-post') ? select('core/edit-post') : false;

        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []);

    const tagPaddingStyle = getTagPaddingStyle(attributes, view);
   
    return {
        ...tagPaddingStyle,
        marginLeft:'5px',
        color: `${attributes.pg_tagTextColor}`,
        background: attributes.tag_backgroundType === 'color' ? attributes.tag_backgroundColor : attributes.tag_backgroundType === 'gradient' ? `${attributes.tag_backgroundGradient}` : 'none',
        fontSize: `${attributes.pg_tagTextSize}px`,
        fontWeight:'600',
        boxSizing: 'border-box', // Ensure padding and border are included in width/height
        textDecoration: 'none',
        lineHeight: 1,

        borderTopLeftRadius: `${attributes.pg_tagTopBorderRadius}`,
        borderBottomLeftRadius: `${attributes.pg_tagBottomBorderRadius}`,
        borderBottomRightRadius: `${attributes.pg_tagLeftBorderRadius}`,
        borderTopRightRadius: `${attributes.pg_tagRightBorderRadius}`,

        border: `${attributes.tagborderType || 'solid'} ${attributes.pg_tagBorder || '0px'} ${attributes.pg_tagBorderColor || 'black'}`,
        borderTop: `${attributes.tagTopborderType || 'solid'} ${attributes.pg_tagTopBorder || '0px'} ${attributes.pg_tagTopBorderColor || 'black'}`,
        borderBottom: `${attributes.tagBottomborderType || 'solid'} ${attributes.pg_tagBottomBorder || '0px'} ${attributes.pg_tagBottomBorderColor || 'black'}`,
        borderLeft: `${attributes.tagLeftborderType || 'solid'} ${attributes.pg_tagLeftBorder || '0px'} ${attributes.pg_tagLeftBorderColor || 'black'}`,
        borderRight: `${attributes.tagRightborderType || 'solid'} ${attributes.pg_tagRightBorder || '0px'} ${attributes.pg_tagRightBorderColor || 'black'}`,
        
    };
};

//Content
const fullContentStyle= (attributes) =>({
    color: `${attributes.pg_textColor}`,
    fontSize: `${attributes.pg_textSize}px`,
    lineHeight: `${attributes.pg_lineHeight}`,
    marginLeft:'5px',
    marginBottom: '10px',
    fontWeight : `${attributes.pg_ContentWeight}`,
});

//pagination
const getPaginationPaddingStyle = (attributes,view) => {
    switch (view) {
        case 'Desktop':
            return {
                paddingTop: attributes.pg_PaginationpaddingTop ? `${attributes.pg_PaginationpaddingTop}${attributes.pg_PaginationpaddingUnit || 'px'}` : undefined,
                paddingBottom: attributes.pg_PaginationpaddingBottom ? `${attributes.pg_PaginationpaddingBottom}${attributes.pg_PaginationpaddingUnit || 'px'}` : undefined,
                paddingLeft: attributes.pg_PaginationpaddingLeft ? `${attributes.pg_PaginationpaddingLeft}${attributes.pg_PaginationpaddingUnit || 'px'}` : undefined,
                paddingRight: attributes.pg_PaginationpaddingRight ? `${attributes.pg_PaginationpaddingRight}${attributes.pg_PaginationpaddingUnit || 'px'}` : undefined
            };
        case 'Tablet':
            return {
                paddingTop: attributes.pg_PaginationpaddingTopTablet ? `${attributes.pg_PaginationpaddingTopTablet}${attributes.pg_PaginationpaddingUnit || 'px'}` : undefined,
                paddingBottom: attributes.pg_PaginationpaddingBottomTablet ? `${attributes.pg_PaginationpaddingBottomTablet}${attributes.pg_PaginationpaddingUnit || 'px'}` : undefined,
                paddingLeft: attributes.pg_PaginationpaddingLeftTablet ? `${attributes.pg_PaginationpaddingLeftTablet}${attributes.pg_PaginationpaddingUnit || 'px'}` : undefined,
                paddingRight: attributes.pg_PaginationpaddingRightTablet ? `${attributes.pg_PaginationpaddingRightTablet}${attributes.pg_PaginationpaddingUnit || 'px'}` : undefined
            };
        case 'Mobile':
            return {
                paddingTop: attributes.pg_PaginationpaddingTopMobile ? `${attributes.pg_PaginationpaddingTopMobile}${attributes.pg_PaginationpaddingUnit || 'px'}` : undefined,
                paddingBottom: attributes.pg_PaginationpaddingBottomMobile ? `${attributes.pg_PaginationpaddingBottomMobile}${attributes.pg_PaginationpaddingUnit || 'px'}` : undefined,
                paddingLeft: attributes.pg_PaginationpaddingLeftMobile ? `${attributes.pg_PaginationpaddingLeftMobile}${attributes.pg_PaginationpaddingUnit || 'px'}` : undefined,
                paddingRight: attributes.pg_PaginationpaddingRightMobile ? `${attributes.pg_PaginationpaddingRightMobile}${attributes.pg_PaginationpaddingUnit || 'px'}` : undefined
            };
        default:
            return {};
    }
};

const PaginationStyles = (attributes) => {
    const view = useSelect( select => {
        const { getView } = select( 'vayu-blocks/data' );
        const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' ) ? select( 'core/edit-post' ) : false;
       
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []);
    const paddingStyles = getPaginationPaddingStyle(attributes,view);
        
    return {
        ...paddingStyles,
        cursor:'pointer',
        fontSize: `${attributes.pg_PaginationSize}px`,
        color: `${attributes.pg_PaginationColor}`,
        background: attributes.pg_PaginationbackgroundType === 'color' ? attributes.pg_PaginationbackgroundColor : attributes.pg_PaginationbackgroundType === 'gradient' ? `${attributes.pg_PaginationbackgroundGradient}` : 'none',
        margin: '20px 5px',

        borderTopLeftRadius: `${attributes.pg_paginationTopBorderRadius}`,
        borderBottomLeftRadius: `${attributes.pg_paginationBottomBorderRadius}`,
        borderBottomRightRadius: `${attributes.pg_paginationLeftBorderRadius}`,
        borderTopRightRadius: `${attributes.pg_paginationRightBorderRadius}`,

        border: `${attributes.paginationborderType || 'solid'} ${attributes.pg_paginationBorder || '0px'} ${attributes.pg_paginationBorderColor || 'black'}`,
        borderTop: `${attributes.paginationTopborderType || 'solid'} ${attributes.pg_paginationTopBorder || '0px'} ${attributes.pg_paginationTopBorderColor || 'black'}`,
        borderBottom: `${attributes.paginationBottomborderType || 'solid'} ${attributes.pg_paginationBottomBorder || '0px'} ${attributes.pg_paginationBottomBorderColor || 'black'}`,
        borderLeft: `${attributes.paginationLeftborderType || 'solid'} ${attributes.pg_paginationLeftBorder || '0px'} ${attributes.pg_paginationLeftBorderColor || 'black'}`,
        borderRight: `${attributes.paginationRightborderType || 'solid'} ${attributes.pg_paginationRightBorder || '0px'} ${attributes.pg_paginationRightBorderColor || 'black'}`,
        ':hover': {
            background: `red`, // Change background color on hover
            color: `white`, // Change text color on hover
            // Add other hover styles like border changes, text shadow, etc.
          },
    };
};


export {
    PaginationStyles,
    blockStyles,
    gridContainerStyles,
    postStyles,
    fullContentStyle,
    showOnlyDateStyles,
    authorAndDateContainerStyles,
    tagButtonStyles,
    authorImageStyles,
    titleTagStyles,
    categoryButtonStyles,
    featuredImageStyles,
    authorLinkStyles,
    dateImageStyles
};