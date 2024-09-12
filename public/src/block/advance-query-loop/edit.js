/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { useInstanceId } from '@wordpress/compose';
import { useEffect } from '@wordpress/element';
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
	store as blockEditorStore,
	useInnerBlocksProps,
	InnerBlocks,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import { store as coreStore } from '@wordpress/core-data';

import './editor.scss';
import InsSettings from './settings.js';

const DEFAULTS_POSTS_PER_PAGE = 3;

// Template for inner blocks
const TEMPLATE = [
	[
		'core/post-template',
		{ layout: { type: 'grid', columnCount: 2 } },
		[
			['core/post-title'],
			['core/post-date'],
			['core/post-excerpt'],
		],
	],
];
const Edit = ({ attributes, setAttributes, clientId }) => {
	
    const {
		queryId,
		query,
		query: { inherit } = {},
		displayLayout,
		enhancedPagination,
		tagName: TagName = 'div',
	} = attributes;

    const { __unstableMarkNextChangeAsNotPersistent } = useDispatch(blockEditorStore);

    const instanceId = useInstanceId(Edit);

    const { postsPerPage } = useSelect((select) => {
        const { getSettings } = select(blockEditorStore);
        const { getEntityRecord, getEntityRecordEdits, canUser } = select(coreStore);
        const settingPerPage = canUser('read', { kind: 'root', name: 'site' })
            ? +getEntityRecord('root', 'site')?.posts_per_page
            : +getSettings().postsPerPage;

        const editedSettingPerPage = +getEntityRecordEdits('root', 'site')?.posts_per_page;

        return {
            postsPerPage: editedSettingPerPage || settingPerPage || DEFAULTS_POSTS_PER_PAGE,
        };
    }, []);

    useEffect(() => {
        const newQuery = {};
        if (inherit && query.perPage !== postsPerPage) {
            newQuery.perPage = postsPerPage;
        } else if (!query.perPage && postsPerPage) {
            newQuery.perPage = postsPerPage;
        }
        if (!!Object.keys(newQuery).length) {
            __unstableMarkNextChangeAsNotPersistent();
            updateQuery(newQuery);
        }
    }, [query.perPage, postsPerPage, inherit]);

    const updateQuery = (newQuery) => setAttributes({ query: { ...query, ...newQuery } });

    useEffect(() => {
        if (!Number.isFinite(queryId)) {
            __unstableMarkNextChangeAsNotPersistent();
            setAttributes({ queryId: instanceId });
        }
    }, [queryId, instanceId, setAttributes, __unstableMarkNextChangeAsNotPersistent]);

    const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps, { template: TEMPLATE });

	// const hasInnerBlocks = useSelect(
	// 	(select) => !!select(blockEditorStore).getBlocks(clientId).length,
	// 	[clientId]
	// );

    return (
        <>
            <InsSettings
                attributes={attributes}
                setQuery={updateQuery}
                setAttributes={setAttributes}
                clientId={clientId}
            />
           <div { ...innerBlocksProps }></div>
        </>
    );
};

export default Edit;