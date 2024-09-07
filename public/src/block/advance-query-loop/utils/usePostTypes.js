
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Custom hook to fetch post types.
 *
 * @returns {Array} Array of post types formatted for SelectControl.
 */
export const usePostTypes = () => {
    // Fetch available post types using useSelect hook
    const postTypes = useSelect(
        (select) => select(coreStore).getPostTypes({ per_page: -1 }),
        []
    );

    // Transform post types into the format required by SelectControl
    const postTypeOptions = postTypes
        ? postTypes
            .filter((postType) => postType.viewable)
            .map((postType) => ({
                label: postType.labels.singular_name,
                value: postType.slug,
            }))
        : [];

    return postTypeOptions;
};
