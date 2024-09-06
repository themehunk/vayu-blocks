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

const InsSettings = ({ attributes, setAttributes }) => {
	const { query } = attributes;
	const { order, orderBy, postType, taxQuery, search } = query;

	// Fetch post types and taxonomies
	const postTypesSelectOptions = usePostTypes();

	const taxonomies = useTaxonomies(postType);

	// State management for search query
	const [querySearch, setQuerySearch] = useState(search);
	
	const onChangeDebounced = useCallback(
		debounce(() => {
			if (query.search !== querySearch) {
				setAttributes({ query: { ...query, search: querySearch } });
			}
		}, 250),
		[querySearch, query.search]
	);

	// Effect to handle debounced changes
	useEffect(() => {
		onChangeDebounced();
		return onChangeDebounced.cancel;
	}, [querySearch, onChangeDebounced]);

	// Handle post type change
	const onPostTypeChange = (newPostType) => {
		const supportedTaxonomies = taxonomies.map((tax) => tax.slug);
		const updatedTaxQuery = Object.entries(taxQuery || {}).reduce(
			(acc, [taxonomySlug, terms]) => {
				if (supportedTaxonomies.includes(taxonomySlug)) {
					acc[taxonomySlug] = terms;
				}
				return acc;
			},
			{}
		);

		// Update query with new post type and taxonomies
		setAttributes({
			query: {
				...query,
				postType: newPostType,
				taxQuery: Object.keys(updatedTaxQuery).length ? updatedTaxQuery : null,
			},
		});
	};

	// Order options for SelectControl
	const orderOptions = [
		{
			label: __('Newest to oldest', 'vayu-blocks'),
			value: 'date/desc',
		},
		{
			label: __('Oldest to newest', 'vayu-blocks'),
			value: 'date/asc',
		},
		{
			label: __('A → Z', 'vayu-blocks'),
			value: 'title/asc',
		},
		{
			label: __('Z → A', 'vayu-blocks'),
			value: 'title/desc',
		},
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
					resetAll={() => {
						setAttributes({
							query: {
								...query,
								author: '',
								parents: [],
								search: '',
								taxQuery: null,
							},
						});
					}}
				>
					<ToolsPanelItem
						label={__('Taxonomies', 'vayu-blocks')}
						hasValue={() =>
							Object.values(taxQuery || {}).some((terms) => terms.length)
						}
						onDeselect={() => setAttributes({ query: { ...query, taxQuery: null } })}
					>
						{/* Dynamically fetch and display taxonomies */}
						<TaxonomyControls
							taxonomies={taxonomies}
							query={query}
							onChange={(newTaxQuery) =>
								setAttributes({
									query: {
										...query,
										taxQuery: newTaxQuery,
									},
								})
							}
						/>
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
		</>
	);
};

export default InsSettings;
