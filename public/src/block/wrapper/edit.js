/**
 * External dependencies
 */
import clsx from 'clsx';
import {  __, _x  } from '@wordpress/i18n';
import {
	Fragment,
	useEffect,
	useState,
	useRef,
	memo, useMemo,
} from '@wordpress/element';
import { useSelect, useDispatch  } from '@wordpress/data';
import {
	BlockControls,
	BlockContextProvider,
	__experimentalUseBlockPreview as useBlockPreview,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
	InnerBlocks
} from '@wordpress/block-editor';
import { Spinner, ToolbarGroup } from '@wordpress/components';
import { store as coreStore } from '@wordpress/core-data';
import { list, grid } from '@wordpress/icons';
import './editor.scss';

const TEMPLATE = [
    ['vayu-blocks/advance-container', {}, [
		['vayu-blocks/advance-heading',
	    { 
		title: __('Post Title', 'vayu-blocks'),	
		placeholder: __('Enter heading here', 'vayu-blocks') 
	    }
	    ],
		['vayu-blocks/advance-heading', 
		{ 
			title: __('Post Date', 'vayu-blocks'),
            tag: 'span',
			selectedSourceField:'post_date',
			fontSize:'16',
			fontSizeUnit:'px'

        }],
		['vayu-blocks/advance-heading', 
		{ 
			title: __('Post Excerpt', 'vayu-blocks'),
            tag: 'p',
			selectedSourceField:'excerpt',
			fontSize:'18',
			fontSizeUnit:'px'
        }]
	]],
];

function PostTemplateInnerBlocks( { classList } ) {
	const innerBlocksProps = useInnerBlocksProps(
		{ className: clsx( 'wp-block-post', classList ) },
		{ template: TEMPLATE, __unstableDisableLayoutClassNames: true }
	);
	return <li { ...innerBlocksProps } />;
}

function PostTemplateBlockPreview( {
	blocks,
	blockContextId,
	classList,
	isHidden,
	setActiveBlockContextId,
} ) {
	const blockPreviewProps = useBlockPreview( {
		blocks,
		props: {
			className: clsx( 'wp-block-post', classList ),
		},
	} );

	const handleOnClick = () => {
		setActiveBlockContextId( blockContextId );
	};

	const style = {
		display: isHidden ? 'none' : undefined,
	};

	return (
		<li
			{ ...blockPreviewProps }
			tabIndex={ 0 }
			role="button"
			onClick={ handleOnClick }
			onKeyPress={ handleOnClick }
			style={ style }
		/>
	);
}

const MemoizedPostTemplateBlockPreview = memo( PostTemplateBlockPreview );

const Edit = ({
	attributes,
	setAttributes,
	clientId,
	uniqueID,
	context: {
		query: {
			perPage,
			offset = 0,
			postType,
			order,
			orderBy,
			author,
			search,
			exclude,
			sticky,
			inherit,
			taxQuery,
			parents,
			pages,
			format,
			// We gather extra query args to pass to the REST API call.
			// This way extenders of Query Loop can add their own query args,
			// and have accurate previews in the editor.
			// Noting though that these args should either be supported by the
			// REST API or be handled by custom REST filters like `rest_{$this->post_type}_query`.
			...restQueryArgs
		} = {},
		templateSlug,
		previewPostType,
	},
	attributes: { layout },
	__unstableLayoutClassNames,
} ) => {
	const { type: layoutType, columnCount = 3 } = layout || {};
	const [ activeBlockContextId, setActiveBlockContextId ] = useState();
	const { posts, blocks } = useSelect(
		( select ) => {
			const { getEntityRecords, getTaxonomies } = select( coreStore );
			const { getBlocks } = select( blockEditorStore );
			const templateCategory =
				inherit &&
				templateSlug?.startsWith( 'category-' ) &&
				getEntityRecords( 'taxonomy', 'category', {
					context: 'view',
					per_page: 1,
					_fields: [ 'id' ],
					slug: templateSlug.replace( 'category-', '' ),
				} );
			const query = {
				offset: offset || 0,
				order,
				orderby: orderBy,
			};
			// There is no need to build the taxQuery if we inherit.
			if ( taxQuery && ! inherit ) {
				const taxonomies = getTaxonomies( {
					type: postType,
					per_page: -1,
					context: 'view',
				} );
				// We have to build the tax query for the REST API and use as
				// keys the taxonomies `rest_base` with the `term ids` as values.
				const builtTaxQuery = Object.entries( taxQuery ).reduce(
					( accumulator, [ taxonomySlug, terms ] ) => {
						const taxonomy = taxonomies?.find(
							( { slug } ) => slug === taxonomySlug
						);
						if ( taxonomy?.rest_base ) {
							accumulator[ taxonomy?.rest_base ] = terms;
						}
						return accumulator;
					},
					{}
				);
				if ( !! Object.keys( builtTaxQuery ).length ) {
					Object.assign( query, builtTaxQuery );
				}
			}
			if ( perPage ) {
				query.per_page = perPage;
			}
			if ( author ) {
				query.author = author;
			}
			if ( search ) {
				query.search = search;
			}
			if ( exclude?.length ) {
				query.exclude = exclude;
			}
			if ( parents?.length ) {
				query.parent = parents;
			}
			if ( format?.length ) {
				query.format = format;
			}

			// If sticky is not set, it will return all posts in the results.
			// If sticky is set to `only`, it will limit the results to sticky posts only.
			// If it is anything else, it will exclude sticky posts from results. For the record the value stored is `exclude`.
			if ( sticky ) {
				query.sticky = sticky === 'only';
			}
			// If `inherit` is truthy, adjust conditionally the query to create a better preview.
			if ( inherit ) {
				// Change the post-type if needed.
				if ( templateSlug?.startsWith( 'archive-' ) ) {
					query.postType = templateSlug.replace( 'archive-', '' );
					postType = query.postType;
				} else if ( templateCategory ) {
					query.categories = templateCategory[ 0 ]?.id;
				}
			}
			// When we preview Query Loop blocks we should prefer the current
			// block's postType, which is passed through block context.
			const usedPostType = previewPostType || postType;
			return {
				posts: getEntityRecords( 'postType', usedPostType, {
					...query,
					...restQueryArgs,
				} ),
				blocks: getBlocks( clientId ),
			};
		},
		[
			perPage,
			offset,
			order,
			orderBy,
			clientId,
			author,
			search,
			postType,
			exclude,
			sticky,
			inherit,
			templateSlug,
			taxQuery,
			parents,
			format,
			restQueryArgs,
			previewPostType,
		]
	);
	const blockContexts = useMemo(
		() =>
			posts?.map( ( post ) => ( {
				postType: post.type,
				postId: post.id,
				classList: post.class_list ?? '',
			} ) ),
		[ posts ]
	);

	const blockProps = useBlockProps( {
		className: clsx( __unstableLayoutClassNames, {
			[ `columns-${ columnCount }` ]:
				layoutType === 'grid' && columnCount, // Ensure column count is flagged via classname for backwards compatibility.
		} ),
	} );
	if ( ! posts ) {
		return (
			<p { ...blockProps }>
				<Spinner />
			</p>
		);
	}

	if ( ! posts.length ) {
		return <p { ...blockProps }> { __( 'No results found.' ) }</p>;
	}

	const setDisplayLayout = ( newDisplayLayout ) =>
		setAttributes( {
			layout: { ...layout, ...newDisplayLayout },
		} );

	const displayLayoutControls = [
		{
			icon: list,
			title: _x( 'List view', 'Post template block display setting' ),
			onClick: () => setDisplayLayout( { type: 'default' } ),
			isActive: layoutType === 'default' || layoutType === 'constrained',
		},
		{
			icon: grid,
			title: _x( 'Grid view', 'Post template block display setting' ),
			onClick: () =>
				setDisplayLayout( {
					type: 'grid',
					columnCount,
				} ),
			isActive: layoutType === 'grid',
		},
	];

    return (
		<>
			<BlockControls>
				<ToolbarGroup controls={ displayLayoutControls } />
			</BlockControls>

			<ul { ...blockProps }>
				{ blockContexts &&
					blockContexts.map( ( blockContext ) => (
						<BlockContextProvider
							key={ blockContext.postId }
							value={ blockContext }
						>
							{ blockContext.postId ===
							( activeBlockContextId ||
								blockContexts[ 0 ]?.postId ) ? (
								<PostTemplateInnerBlocks
									classList={ blockContext.classList }
								/>
							) : null }
							<MemoizedPostTemplateBlockPreview
								blocks={ blocks }
								blockContextId={ blockContext.postId }
								classList={ blockContext.classList }
								setActiveBlockContextId={
									setActiveBlockContextId
								}
								isHidden={
									blockContext.postId ===
									( activeBlockContextId ||
										blockContexts[ 0 ]?.postId )
								}
							/>
						</BlockContextProvider>
					) ) }
			</ul>
		</>
	);
};

export default Edit;
