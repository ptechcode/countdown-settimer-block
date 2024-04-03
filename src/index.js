import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import Save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: Edit,
	icon: {
		src: 'align-wide',
		foreground: '#0073AA',
	},
	save: Save,
} );
