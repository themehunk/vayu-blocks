import { store, getContext } from '@wordpress/interactivity';
const { actions } = store( 'vayu-blocks/mega-menu', {
	actions: {
		toggleMenu() {
			const context = getContext();

			if ( context.isMenuOpen ) {
				actions.closeMenu();
			} else {
				context.isMenuOpen = true;
			}
		},
		closeMenu() {
            			const context = getContext();
			context.isMenuOpen = false;
		},
	}
} );