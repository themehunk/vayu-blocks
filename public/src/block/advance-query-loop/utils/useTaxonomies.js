import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';
import { store as coreStore } from '@wordpress/core-data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { decodeEntities } from '@wordpress/html-entities';
import {
	cloneBlock,
	getBlockSupport,
	store as blocksStore,
} from '@wordpress/blocks';


/**
 * Hook that returns the taxonomies associated with a specific post type.
 *
 * @param {string} postType The post type from which to retrieve the associated taxonomies.
 * @return {Object[]} An array of the associated taxonomies.
 */
export const useTaxonomies = ( postType ) => {
	const taxonomies = useSelect(
		( select ) => {
			const { getTaxonomies, getPostType } = select( coreStore );
			// Does the post type have taxonomies?
			if ( getPostType( postType )?.taxonomies?.length > 0 ) {
				return getTaxonomies( {
					type: postType,
					per_page: -1,
				} );
			}
			return [];
		},
		[ postType ]
	);
	return useMemo( () => {
		return taxonomies?.filter(
			( { visibility } ) => !! visibility?.publicly_queryable
		);
	}, [ taxonomies ] );
};