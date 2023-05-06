const save = ({ attributes }) => {
    const {
      id,
      containerHTMLTag,
      contentWidthType,
      boxedcontentWidth,
      boxedcontentWidthTablet,
      boxedcontentWidthMobile,
      boxedcontentWidthUnit,
      fullcontentWidth,
      fullcontentWidthTablet,
      fullcontentWidthMobile,
      fullcontentWidthUnit,
      contentMinHgt,
      contentMinHgtTablet,
      contentMinHgtMobile,
      contentMinHgtUnit,
      direction,
      directionTablet,
      directionMobile,
      Justify,
      JustifyTablet,
      JustifyMobile,
      AlignItem,
      AlignItemTablet,
      AlignItemMobile,
      Wrap,
      WrapTablet,
      WrapMobile,
      AlignContent,
      AlignContentTablet,
      AlignContentMobile,
    } = attributes;
  
    const containerClasses = classNames({
      [`${contentWidthType}-content`]: true,
      [`${direction}-direction`]: direction,
      [`${Justify}-justify`]: Justify,
      [`${AlignItem}-align-item`]: AlignItem,
      [`${Wrap}-wrap`]: Wrap,
      [`${AlignContent}-align-content`]: AlignContent,
    });
  
    const containerStyles = {
      '--container-max-width': `${fullcontentWidth}${fullcontentWidthUnit}`,
      '--container-max-width-tablet': `${fullcontentWidthTablet}${fullcontentWidthUnit}`,
      '--container-max-width-mobile': `${fullcontentWidthMobile}${fullcontentWidthUnit}`,
      '--boxed-container-max-width': `${boxedcontentWidth}${boxedcontentWidthUnit}`,
      '--boxed-container-max-width-tablet': `${boxedcontentWidthTablet}${boxedcontentWidthUnit}`,
      '--boxed-container-max-width-mobile': `${boxedcontentWidthMobile}${boxedcontentWidthUnit}`,
      '--container-min-height': `${contentMinHgt}${contentMinHgtUnit}`,
      '--container-min-height-tablet': `${contentMinHgtTablet}${contentMinHgtUnit}`,
      '--container-min-height-mobile': `${contentMinHgtMobile}${contentMinHgtUnit}`,
    };
  
    return (
      <Tag
        { ...(id && { id }) }
        { ...containerStyles }
        className={ containerClasses }
        tagName={ containerHTMLTag }
      >
        <InnerBlocks.Content />
      </Tag>
    );
  };
  