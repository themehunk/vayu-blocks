import React, { useEffect, useState } from 'react';
import './editor.scss';
import { __ } from '@wordpress/i18n';
import {
    PanelBody,
} from '@wordpress/components';

import {MediaPlaceholder} from '@wordpress/block-editor';


const SlideSettings = ({ attributes, setAttributes }) => {

    
    return (
        
            <div class="vayu_blocks_slide_settings_main">

                <PanelBody title={__('Image Settings', 'text-domain')}>
                            <MediaPlaceholder
                                                    icon="format-image"
                                                    labels={{
                                                        title: __('Background Image', 'vayu-blocks'),
                                                        name: __('an image', 'vayu-blocks')
                                                    }}
                                                    onSelect={(media) => setAttributes({image:media.url})}
                                                    onSelectURL='true'
                                                    accept="image/*"
                                                    allowedTypes={['image']}
                                                />
                </PanelBody>

            </div>
    );
};

export default SlideSettings;
