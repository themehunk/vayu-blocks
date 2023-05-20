import { useSelect } from '@wordpress/data';
import { Inserter } from '@wordpress/block-editor';
import { useDispatch } from '@wordpress/data';
import { __, sprintf, _x } from '@wordpress/i18n';
import { Button, Icon, Tooltip } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { plus } from '@wordpress/icons';
  
export default ( { clientId, isSelected, attributes } ) => {

	function getInnerBlocksCount(clientId) {
		const block = useSelect((select) => {
		  return select('core/block-editor').getBlock(clientId);
		});
	  
		return block ? block.innerBlocks.length : 0;
	}

	const { isBlockPreview } = attributes;
	const innerBlocksCount = getInnerBlocksCount( clientId );
	const hasChildBlocks = 0 < innerBlocksCount;
	const { selectBlock } = useDispatch( 'core/block-editor' );

	let appender = false;

	if ( isBlockPreview ) {
		return false;
	}

	function ButtonBlockAppender() {
		return (
			<Inserter
				position="bottom right"
				rootClientId={ clientId }
				__experimentalIsQuick
				renderToggle={ ( {
					onToggle,
					disabled,
					isOpen,
					blockTitle,
					hasSingleBlockType,
				} ) => {
					const label = hasSingleBlockType
						? sprintf(
							// translators: %s: the name of the block when there is only one
							_x( 'Add %s', 'directly add the only allowed block', 'themehunk-block' ),
							blockTitle
						) : _x( 'Add block', 'Generic label for block inserter button', 'themehunk-block' );

					return (
						<Tooltip text={ label }>
							<Button
								className={ 'block-editor-button-block-appender' }
								onClick={ onToggle }
								aria-haspopup={ ! hasSingleBlockType ? 'true' : undefined }
								aria-expanded={ ! hasSingleBlockType ? isOpen : undefined }
								disabled={ disabled }
								label={ label }
							>
								<Icon icon={ plus } />
							</Button>
						</Tooltip>
					);
				} }
				isAppender
			/>
		);
	}
	// Selected Container.
	if ( isSelected ) {
		appender = <ButtonBlockAppender />;
	}

	// Empty non-selected Container.
	if ( ! hasChildBlocks && ! isSelected ) {
		appender = <Button
			className="th-blocks-container-selector"
			onClick={ () => selectBlock( clientId ) }
			aria-label={ __( 'Select Container', 'themehunk-blocks' ) }
		>
			<span className="th-blocks-container-selector__icon">
			<Icon icon={ plus } />
			</span>
		</Button>;
	}

	return applyFilters(
		'themehunk-block.editor.containerAppender',
		appender,
		{ clientId, isSelected, attributes }
	);
};
