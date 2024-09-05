/**
 * WordPress dependencies
 */
import {
	PanelBody,
	TextControl,
	SelectControl,
	RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	Notice,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor'; // Import InspectorControls
import { __ } from '@wordpress/i18n';
import { debounce } from '@wordpress/compose';
import { useEffect, useState, useCallback } from '@wordpress/element';

const InsSettings = ({ attributes, setAttributes }) => {
	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Settings', 'vayu-blocks')}
					initialOpen={true}
					className="th-query-loop-panel"
				>
					
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default InsSettings;
