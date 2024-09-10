/**
 * WordPress dependencies
 */
import {
	PanelBody,
	SelectControl,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { debounce } from '@wordpress/compose';
import { useEffect, useState, useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { usePostTypes } from './utils/usePostTypes';
import { useTaxonomies } from './utils/useTaxonomies';
import TaxonomyControls from './TaxonomyControls'; 

const InsSettings = ({ attributes, setQuery, setAttributes }) => { // Destructure directly from props
	const { query, displayLayout } = attributes;
	const {
		order,
		orderBy,
		author: authorIds,
		pages,
		postType,
		perPage,
		offset,
		sticky,
		inherit,
		taxQuery,
		parents,
	} = query;

	// Fetch post types and taxonomies
	const { postTypesTaxonomiesMap, postTypesSelectOptions } = usePostTypes();
	const taxonomies = useTaxonomies(postType);

	const onPostTypeChange = ( newValue ) => {
		const updateQuery = { postType: newValue };
		// We need to dynamically update the `taxQuery` property,
		// by removing any not supported taxonomy from the query.
		const supportedTaxonomies = postTypesTaxonomiesMap[ newValue ];
		const updatedTaxQuery = Object.entries( taxQuery || {} ).reduce(
			( accumulator, [ taxonomySlug, terms ] ) => {
				if ( supportedTaxonomies.includes( taxonomySlug ) ) {
					accumulator[ taxonomySlug ] = terms;
				}
				return accumulator;
			},
			{}
		);
		updateQuery.taxQuery = !! Object.keys( updatedTaxQuery ).length
			? updatedTaxQuery
			: undefined;

		if ( newValue !== 'post' ) {
			updateQuery.sticky = '';
		}
		// We need to reset `parents` because they are tied to each post type.
		updateQuery.parents = [];
		setQuery( updateQuery );
	};
	const [ querySearch, setQuerySearch ] = useState( query.search );
	const onChangeDebounced = useCallback(
		debounce( () => {
			if ( query.search !== querySearch ) {
				setQuery( { search: querySearch } );
			}
		}, 250 ),
		[ querySearch, query.search ]
	);
	useEffect( () => {
		onChangeDebounced();
		return onChangeDebounced.cancel;
	}, [ querySearch, onChangeDebounced ] );

	// Order options for SelectControl
	const orderOptions = [
		{ label: __('Newest to oldest', 'vayu-blocks'), value: 'date/desc' },
		{ label: __('Oldest to newest', 'vayu-blocks'), value: 'date/asc' },
		{ label: __('A → Z', 'vayu-blocks'), value: 'title/asc' },
		{ label: __('Z → A', 'vayu-blocks'), value: 'title/desc' },
	];

	// OrderControl Component to handle order selection
	const OrderControl = ({ order, orderBy, onChange }) => (
		<SelectControl
			label={__('Order by', 'vayu-blocks')}
			value={`${orderBy}/${order}`}
			options={orderOptions}
			onChange={(value) => {
				const [newOrderBy, newOrder] = value.split('/');
				onChange({ order: newOrder, orderBy: newOrderBy });
			}}
		/>
	);

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Settings', 'vayu-blocks')}
					initialOpen={true}
					className="th-query-loop-panel"
				>
					{/* Post Type Selector */}
					<SelectControl
						label={__('Post Type', 'vayu-blocks')}
						value={postType}
						options={postTypesSelectOptions}
						onChange={onPostTypeChange}
					/>

					{/* Order Control */}
					<OrderControl
						order={order}
						orderBy={orderBy}
						onChange={(newValues) =>
							setAttributes({ query: { ...attributes.query, ...newValues } })
						}
					/>
				</PanelBody>
				{/* Filters Panel */}
				<ToolsPanel
					className="block-library-query-toolspanel__filters"
					label={__('Filters', 'vayu-blocks')}
					resetAll={ () => {
						setQuery( {
							author: '',
							parents: [],
							search: '',
							taxQuery: null,
						} );
						setQuerySearch( '' );
					} }
				>
					<ToolsPanelItem
							label={ __( 'Taxonomies' ) }
							hasValue={ () =>
								Object.values( taxQuery || {} ).some(
									( terms ) => !! terms.length
								)
							}
							onDeselect={ () => setQuery( { taxQuery: null } ) }
						>
							<TaxonomyControls
								onChange={ setQuery }
								query={ query }
							/>
						</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
		</>
	);
};

export default InsSettings;
