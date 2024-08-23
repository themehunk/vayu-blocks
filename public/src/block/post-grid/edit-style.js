import { __ } from '@wordpress/i18n';
import { useSelect } from "@wordpress/data";

const blockStyles = () => ({
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
            gridTemplateColumns: `repeat(${view === 'Desktop' ? attributes.pg_postLayoutColumns : attributes[`pg_postLayoutColumns${view}`]}, minmax(0, 1fr))`
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
        ...gapStyle,
        gridAutoRows: 'minmax(100px, auto)' // Corrected line
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

const getLayoutBorderRadiusStyle = (attributes, view) => {
    switch (view) {
        case 'Desktop':
            return {
                borderTopLeftRadius: attributes.pg_layoutTopBorderRadius ? `${attributes.pg_layoutTopBorderRadius}${attributes.pg_layoutBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_layoutRightBorderRadius ? `${attributes.pg_layoutRightBorderRadius}${attributes.pg_layoutBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_layoutBottomBorderRadius ? `${attributes.pg_layoutBottomBorderRadius}${attributes.pg_layoutBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_layoutLeftBorderRadius ? `${attributes.pg_layoutLeftBorderRadius}${attributes.pg_layoutBorderRadiusunit || 'px'}` : undefined
            };
        case 'Tablet':
            return {
                borderTopLeftRadius: attributes.pg_layoutTopBorderRadiusTablet ? `${attributes.pg_layoutTopBorderRadiusTablet}${attributes.pg_layoutBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_layoutRightBorderRadiusTablet ? `${attributes.pg_layoutRightBorderRadiusTablet}${attributes.pg_layoutBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_layoutBottomBorderRadiusTablet ? `${attributes.pg_layoutBottomBorderRadiusTablet}${attributes.pg_layoutBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_layoutLeftBorderRadiusTablet ? `${attributes.pg_layoutLeftBorderRadiusTablet}${attributes.pg_layoutBorderRadiusunit || 'px'}` : undefined
            };
        case 'Mobile':
            return {
                borderTopLeftRadius: attributes.pg_layoutTopBorderRadiusMobile ? `${attributes.pg_layoutTopBorderRadiusMobile}${attributes.pg_layoutBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_layoutRightBorderRadiusMobile ? `${attributes.pg_layoutRightBorderRadiusMobile}${attributes.pg_layoutBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_layoutBottomBorderRadiusMobile ? `${attributes.pg_layoutBottomBorderRadiusMobile}${attributes.pg_layoutBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_layoutLeftBorderRadiusMobile ? `${attributes.pg_layoutLeftBorderRadiusMobile}${attributes.pg_layoutBorderRadiusunit || 'px'}` : undefined
            };
        default:
            return {};
    }
};

const getWidthStyle = (attributes, view) => {
    switch (view) {
        case 'Desktop':
            return {
                width: attributes.layoutcustomWidth ? `${attributes.layoutcustomWidth}${attributes.layoutcustomWidthUnit || '%'}` : '100%',
            };
        case 'Tablet':
            return {
                width: attributes.layoutcustomWidthTablet ? `${attributes.layoutcustomWidthTablet}${attributes.layoutcustomWidthUnit || '%'}` : '100%',
            };
        case 'Mobile':
            return {
                width: attributes.layoutcustomWidthMobile ? `${attributes.layoutcustomWidthMobile}${attributes.layoutcustomWidthUnit || '%'}` : '100%',
            };
        default:
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
    const borderradiusstyles = getLayoutBorderRadiusStyle(attributes,view);
    const widthstyle = getWidthStyle(attributes,view);
   
        
    return {
        width: `${attributes.width === 'customwidth' ? attributes.customWidthlayout : attributes.width}`,

        ...paddingStyles,
        ...backgroundStyle(attributes),
        ...borderradiusstyles,
        ...widthstyle,
        
        lineHeight : `${attributes.pg_spacing}`,

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
const getfeaturedImageBorderRadiusStyle = (attributes, view) => {
    switch (view) {
        case 'Desktop':
            return {
                borderTopLeftRadius: attributes.pg_featuredImageTopBorderRadius ? `${attributes.pg_featuredImageTopBorderRadius}${attributes.pg_featuredImageBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_featuredImageRightBorderRadius ? `${attributes.pg_featuredImageRightBorderRadius}${attributes.pg_featuredImageBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_featuredImageBottomBorderRadius ? `${attributes.pg_featuredImageBottomBorderRadius}${attributes.pg_featuredImageBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_featuredImageLeftBorderRadius ? `${attributes.pg_featuredImageLeftBorderRadius}${attributes.pg_featuredImageBorderRadiusunit || 'px'}` : undefined
            };
        case 'Tablet':
            return {
                borderTopLeftRadius: attributes.pg_featuredImageTopBorderRadiusTablet ? `${attributes.pg_featuredImageTopBorderRadiusTablet}${attributes.pg_featuredImageBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_featuredImageRightBorderRadiusTablet ? `${attributes.pg_featuredImageRightBorderRadiusTablet}${attributes.pg_featuredImageBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_featuredImageBottomBorderRadiusTablet ? `${attributes.pg_featuredImageBottomBorderRadiusTablet}${attributes.pg_featuredImageBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_featuredImageLeftBorderRadiusTablet ? `${attributes.pg_featuredImageLeftBorderRadiusTablet}${attributes.pg_featuredImageBorderRadiusunit || 'px'}` : undefined
            };
        case 'Mobile':
            return {
                borderTopLeftRadius: attributes.pg_featuredImageTopBorderRadiusMobile ? `${attributes.pg_featuredImageTopBorderRadiusMobile}${attributes.pg_featuredImageBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_featuredImageRightBorderRadiusMobile ? `${attributes.pg_featuredImageRightBorderRadiusMobile}${attributes.pg_featuredImageBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_featuredImageBottomBorderRadiusMobile ? `${attributes.pg_featuredImageBottomBorderRadiusMobile}${attributes.pg_featuredImageBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_featuredImageLeftBorderRadiusMobile ? `${attributes.pg_featuredImageLeftBorderRadiusMobile}${attributes.pg_featuredImageBorderRadiusunit || 'px'}` : undefined
            };
        default:
            return {};
    }
};

const featuredImageStyles = (attributes) => {
    const view = useSelect((select) => {
        const { getView } = select('vayu-blocks/data');
        const { __experimentalGetPreviewDeviceType } = select('core/edit-post') || {};
        
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []);

    // Assuming getfeaturedImageBorderRadiusStyle is defined elsewhere
    const borderRadiusStyles = getfeaturedImageBorderRadiusStyle(attributes, view);

    return {
        display: 'block',
        width: '100%',
        height: 'auto',
        
        // Border styles
        border: `${attributes.featuredImageborderType || 'solid'} ${attributes.pg_featuredImageBorder || '0px'} ${attributes.pg_featuredImageBorderColor || 'black'}`,
        borderTop: `${attributes.featuredImageTopborderType || 'solid'} ${attributes.pg_featuredImageTopBorder || '0px'} ${attributes.pg_featuredImageTopBorderColor || 'black'}`,
        borderBottom: `${attributes.featuredImageBottomborderType || 'solid'} ${attributes.pg_featuredImageBottomBorder || '0px'} ${attributes.pg_featuredImageBottomBorderColor || 'black'}`,
        borderLeft: `${attributes.featuredImageLeftborderType || 'solid'} ${attributes.pg_featuredImageLeftBorder || '0px'} ${attributes.pg_featuredImageLeftBorderColor || 'black'}`,
        borderRight: `${attributes.featuredImageRightborderType || 'solid'} ${attributes.pg_featuredImageRightBorder || '0px'} ${attributes.pg_featuredImageRightBorderColor || 'black'}`,

        // Include border-radius styles if any
        ...borderRadiusStyles
    };
};

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

const getcategoryBorderRadiusStyle = (attributes, view) => {
    switch (view) {
        case 'Desktop':
            return {
                borderTopLeftRadius: attributes.pg_categoryTopBorderRadius ? `${attributes.pg_categoryTopBorderRadius}${attributes.pg_categoryBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_categoryRightBorderRadius ? `${attributes.pg_categoryRightBorderRadius}${attributes.pg_categoryBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_categoryBottomBorderRadius ? `${attributes.pg_categoryBottomBorderRadius}${attributes.pg_categoryBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_categoryLeftBorderRadius ? `${attributes.pg_categoryLeftBorderRadius}${attributes.pg_categoryBorderRadiusunit || 'px'}` : undefined
            };
        case 'Tablet':
            return {
                borderTopLeftRadius: attributes.pg_categoryTopBorderRadiusTablet ? `${attributes.pg_categoryTopBorderRadiusTablet}${attributes.pg_categoryBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_categoryRightBorderRadiusTablet ? `${attributes.pg_categoryRightBorderRadiusTablet}${attributes.pg_categoryBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_categoryBottomBorderRadiusTablet ? `${attributes.pg_categoryBottomBorderRadiusTablet}${attributes.pg_categoryBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_categoryLeftBorderRadiusTablet ? `${attributes.pg_categoryLeftBorderRadiusTablet}${attributes.pg_categoryBorderRadiusunit || 'px'}` : undefined
            };
        case 'Mobile':
            return {
                borderTopLeftRadius: attributes.pg_categoryTopBorderRadiusMobile ? `${attributes.pg_categoryTopBorderRadiusMobile}${attributes.pg_categoryBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_categoryRightBorderRadiusMobile ? `${attributes.pg_categoryRightBorderRadiusMobile}${attributes.pg_categoryBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_categoryBottomBorderRadiusMobile ? `${attributes.pg_categoryBottomBorderRadiusMobile}${attributes.pg_categoryBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_categoryLeftBorderRadiusMobile ? `${attributes.pg_categoryLeftBorderRadiusMobile}${attributes.pg_categoryBorderRadiusunit || 'px'}` : undefined
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
    const categoryBorderRadiusStyles =  getcategoryBorderRadiusStyle(attributes, view);

    return {
        ...categoryStyles,
        ...categoryBorderRadiusStyles,
        color: `${attributes.pg_categoryTextColor}`,
        background: attributes.category_backgroundType === 'color' ? attributes.category_backgroundColor : attributes.category_backgroundType === 'gradient' ? `${attributes.category_backgroundGradient}` : 'none',
        fontSize: `${attributes.pg_categoryTextSize}px`,
        marginLeft:'5px',
        fontWeight:'600',
        marginBlockStart: `${attributes.pg_spacing}%`,
        textDecoration: "none",
        border: `${attributes.categoryborderType || 'solid'} ${attributes.pg_categoryBorder || '0px'} ${attributes.pg_categoryBorderColor || 'black'}`,
        borderTop: `${attributes.categoryTopborderType || 'solid'} ${attributes.pg_categoryTopBorder || '0px'} ${attributes.pg_categoryTopBorderColor || 'black'}`,
        borderBottom: `${attributes.categoryBottomborderType || 'solid'} ${attributes.pg_categoryBottomBorder || '0px'} ${attributes.pg_categoryBottomBorderColor || 'black'}`,
        borderLeft: `${attributes.categoryLeftborderType || 'solid'} ${attributes.pg_categoryLeftBorder || '0px'} ${attributes.pg_categoryLeftBorderColor || 'black'}`,
        borderRight: `${attributes.categoryRightborderType || 'solid'} ${attributes.pg_categoryRightBorder || '0px'} ${attributes.pg_categoryRightBorderColor || 'black'}`,
        lineHeight: 'initial',
    };
};
  
//Title
const titleTagStyles = (attributes) => {
    // Initialize the base style object

    const styles = {
        fontSize: `${attributes.pg_TitleSize}px`,
        marginBlockStart: `${attributes.pg_spacing}%`,
        lineHeight: `${attributes.pg_TitlelineHeight}`,
        marginBlockEnd: '0.05em',
        fontWeight: '600',
        marginLeft: '5px',
        textDecoration: 'none',
        display:'flex',
        justifyContent:`${attributes.pg_layoutalignment}`,
    };

    // Conditionally add styles based on titlechoice
    if (attributes.titlechoice === 'color') {
        styles.color = attributes.pg_TitleColor;
    } else if (attributes.titlechoice === 'gradient') {
        styles.background = `${attributes.pg_TitleColor} text` ;
        styles.WebkitTextFillColor = 'transparent';
        styles.WebkitBackgroundClip = 'text';
        styles.backgroundClip = 'text';
    }

    return styles;
};

const titleTagStylesatag = (attributes) => {
    // Initialize the base style object

    const styles = {
        textDecoration: 'none',
    };

    // Conditionally add styles based on titlechoice
    if (attributes.titlechoice === 'color') {
        styles.color = attributes.pg_TitleColor;
    } else if (attributes.titlechoice === 'gradient') {
        styles.background = `${attributes.pg_TitleColor} text` ;
        styles.WebkitTextFillColor = 'transparent';
        styles.WebkitBackgroundClip = 'text';
        styles.backgroundClip = 'text';
    }

    return styles;
};

//Author
const authorAndDateContainerStyles = (attributes) =>( {
    display: 'flex', 
    alignItems: 'flex-start',
    flexWrap:'wrap',
    marginLeft:'2px',
    justifyContent:`${attributes.pg_layoutalignment}`,
    
});

const dateSectionStyles = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap', 
};

const authorImageStyles = (pg_authorTextSize, pg_authorTextColor, pg_authorImageScale) => ({
    width: '20px',
    alignItems: 'center',
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

const gettagsBorderRadiusStyle = (attributes, view) => {
    switch (view) {
        case 'Desktop':
            return {
                borderTopLeftRadius: attributes.pg_tagsTopBorderRadius ? `${attributes.pg_tagsTopBorderRadius}${attributes.pg_tagsBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_tagsRightBorderRadius ? `${attributes.pg_tagsRightBorderRadius}${attributes.pg_tagsBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_tagsBottomBorderRadius ? `${attributes.pg_tagsBottomBorderRadius}${attributes.pg_tagsBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_tagsLeftBorderRadius ? `${attributes.pg_tagsLeftBorderRadius}${attributes.pg_tagsBorderRadiusunit || 'px'}` : undefined
            };
        case 'Tablet':
            return {
                borderTopLeftRadius: attributes.pg_tagsTopBorderRadiusTablet ? `${attributes.pg_tagsTopBorderRadiusTablet}${attributes.pg_tagsBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_tagsRightBorderRadiusTablet ? `${attributes.pg_tagsRightBorderRadiusTablet}${attributes.pg_tagsBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_tagsBottomBorderRadiusTablet ? `${attributes.pg_tagsBottomBorderRadiusTablet}${attributes.pg_tagsBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_tagsLeftBorderRadiusTablet ? `${attributes.pg_tagsLeftBorderRadiusTablet}${attributes.pg_tagsBorderRadiusunit || 'px'}` : undefined
            };
        case 'Mobile':
            return {
                borderTopLeftRadius: attributes.pg_tagsTopBorderRadiusMobile ? `${attributes.pg_tagsTopBorderRadiusMobile}${attributes.pg_tagsBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_tagsRightBorderRadiusMobile ? `${attributes.pg_tagsRightBorderRadiusMobile}${attributes.pg_tagsBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_tagsBottomBorderRadiusMobile ? `${attributes.pg_tagsBottomBorderRadiusMobile}${attributes.pg_tagsBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_tagsLeftBorderRadiusMobile ? `${attributes.pg_tagsLeftBorderRadiusMobile}${attributes.pg_tagsBorderRadiusunit || 'px'}` : undefined
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
    const tagBorderRadiusStyle = gettagsBorderRadiusStyle(attributes, view);

    return {
        ...tagPaddingStyle,
        // marginLeft:'5px',
        color: `${attributes.pg_tagTextColor}`,
        background: attributes.tag_backgroundType === 'color' ? attributes.tag_backgroundColor : attributes.tag_backgroundType === 'gradient' ? `${attributes.tag_backgroundGradient}` : 'none',
        fontSize: `${attributes.pg_tagTextSize}px`,
        fontWeight:'600',
        boxSizing: 'border-box', // Ensure padding and border are included in width/height
        textDecoration: 'none',
        lineHeight: 'initial',

       ...tagBorderRadiusStyle,
       
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
    display:'flex',
    justifyContent:`${attributes.pg_layoutalignment}`,
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

const getPaginationBorderRadiusStyle = (attributes, view) => {
    switch (view) {
        case 'Desktop':
            return {
                borderTopLeftRadius: attributes.pg_paginationTopBorderRadius ? `${attributes.pg_paginationTopBorderRadius}${attributes.pg_paginationBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_paginationRightBorderRadius ? `${attributes.pg_paginationRightBorderRadius}${attributes.pg_paginationBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_paginationBottomBorderRadius ? `${attributes.pg_paginationBottomBorderRadius}${attributes.pg_paginationBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_paginationLeftBorderRadius ? `${attributes.pg_paginationLeftBorderRadius}${attributes.pg_paginationBorderRadiusunit || 'px'}` : undefined
            };
        case 'Tablet':
            return {
                borderTopLeftRadius: attributes.pg_paginationTopBorderRadiusTablet ? `${attributes.pg_paginationTopBorderRadiusTablet}${attributes.pg_paginationBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_paginationRightBorderRadiusTablet ? `${attributes.pg_paginationRightBorderRadiusTablet}${attributes.pg_paginationBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_paginationBottomBorderRadiusTablet ? `${attributes.pg_paginationBottomBorderRadiusTablet}${attributes.pg_paginationBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_paginationLeftBorderRadiusTablet ? `${attributes.pg_paginationLeftBorderRadiusTablet}${attributes.pg_paginationBorderRadiusunit || 'px'}` : undefined
            };
        case 'Mobile':
            return {
                borderTopLeftRadius: attributes.pg_paginationTopBorderRadiusMobile ? `${attributes.pg_paginationTopBorderRadiusMobile}${attributes.pg_paginationBorderRadiusunit || 'px'}` : undefined,
                borderTopRightRadius: attributes.pg_paginationRightBorderRadiusMobile ? `${attributes.pg_paginationRightBorderRadiusMobile}${attributes.pg_paginationBorderRadiusunit || 'px'}` : undefined,
                borderBottomRightRadius: attributes.pg_paginationBottomBorderRadiusMobile ? `${attributes.pg_paginationBottomBorderRadiusMobile}${attributes.pg_paginationBorderRadiusunit || 'px'}` : undefined,
                borderBottomLeftRadius: attributes.pg_paginationLeftBorderRadiusMobile ? `${attributes.pg_paginationLeftBorderRadiusMobile}${attributes.pg_paginationBorderRadiusunit || 'px'}` : undefined
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
    const BorderRadiusStyles = getPaginationBorderRadiusStyle(attributes,view);

    return {
        ...paddingStyles,
        ...BorderRadiusStyles,
        cursor:'pointer',
        fontSize: `${attributes.pg_PaginationSize}px`,
        color: `${attributes.pg_PaginationColor} !important`,
        background: attributes.pg_PaginationbackgroundType === 'color' ? attributes.pg_PaginationbackgroundColor : attributes.pg_PaginationbackgroundType === 'gradient' ? `${attributes.pg_PaginationbackgroundGradient}` : 'none',
        margin: '20px 5px',

        border: `${attributes.paginationborderType || 'solid'} ${attributes.pg_paginationBorder || '0px'} ${attributes.pg_paginationBorderColor || 'blue'}`,
        borderTop: `${attributes.paginationTopborderType || 'solid'} ${attributes.pg_paginationTopBorder || '0px'} ${attributes.pg_paginationTopBorderColor || 'blue'}`,
        borderBottom: `${attributes.paginationBottomborderType || 'solid'} ${attributes.pg_paginationBottomBorder || '0px'} ${attributes.pg_paginationBottomBorderColor || 'blue'}`,
        borderLeft: `${attributes.paginationLeftborderType || 'solid'} ${attributes.pg_paginationLeftBorder || '0px'} ${attributes.pg_paginationLeftBorderColor || 'blue'}`,
        borderRight: `${attributes.paginationRightborderType || 'solid'} ${attributes.pg_paginationRightBorder || '0px'} ${attributes.pg_paginationRightBorderColor || 'blue'}`,
    };
};

const paginationnewstyle = (attributes) => ({
    textAlign: `${attributes.pg_Paginationalignment}`,
});


export {
    PaginationStyles,
    blockStyles,
    gridContainerStyles,
    postStyles,
    fullContentStyle,
    showOnlyDateStyles,
    authorAndDateContainerStyles,
    dateSectionStyles,
    tagButtonStyles,
    authorImageStyles,
    titleTagStyles,
    categoryButtonStyles,
    featuredImageStyles,
    authorLinkStyles,
    dateImageStyles,
    titleTagStylesatag,
    paginationnewstyle
};