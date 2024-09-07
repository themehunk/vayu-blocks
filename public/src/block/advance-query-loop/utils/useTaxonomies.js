import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { useMemo } from '@wordpress/element';

export const useTaxonomies = ( postType ) => {
    
    // Fetch the taxonomies and post type data using `useSelect`
    const taxonomies = useSelect(
        ( select ) => {
            const { getTaxonomies, getPostType } = select( coreStore );

            // Check if the post type has taxonomies
            const postTypeObject = getPostType( postType );
            if ( postTypeObject?.taxonomies?.length > 0 ) {
                // Return all taxonomies associated with the post type
                return getTaxonomies( { per_page: -1 } );
            }
            // Return an empty array if no taxonomies are found
            return [];
        },
        [ postType ] // Re-run this selector when postType changes
    );
    // Memoize the filtered taxonomies to optimize performance
    return useMemo(
        () => {
            // Filter taxonomies that are publicly queryable
            return taxonomies?.filter(
                ( { visibility } ) => !! visibility?.publicly_queryable
            );
        },
        [ taxonomies ] // Dependencies for memoization
    );
};
