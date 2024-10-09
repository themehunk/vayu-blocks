// DuotoneFilters.js
import React from 'react';

const DuotoneFilters = () => {
    return (
        <svg className="vayu_blocks_image_flip-duotone-filters" xmlns="http://www.w3.org/2000/svg">
            {/* Orange and Red */}
            <filter id="duotone-orange-red">
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" />
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="0.8 1"></feFuncR>
                    <feFuncG type="table" tableValues="0.5 0.7"></feFuncG>
                    <feFuncB type="table" tableValues="0.3 0.5"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>

            {/* Red and Green */}
            <filter id="duotone-red-green">
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" />
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="0.7 1"></feFuncR>
                    <feFuncG type="table" tableValues="0.3 0.8"></feFuncG>
                    <feFuncB type="table" tableValues="0.3 0.7"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>

            {/* Black and White */}
            <filter id="duotone-black-white">
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" />
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="0.5 1"></feFuncR>
                    <feFuncG type="table" tableValues="0.5 1"></feFuncG>
                    <feFuncB type="table" tableValues="0.5 1"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>

            {/* Blue and Red */}
            <filter id="duotone-blue-red">
                <feColorMatrix type="matrix" result="gray"
                    values="1 0 0 0 0
                            1 0 0 0 0
                            1 0 0 0 0
                            0 0 0 1 0" />
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                    <feFuncR type="table" tableValues="0.6 0.9"></feFuncR>
                    <feFuncG type="table" tableValues="0.2 0.3"></feFuncG>
                    <feFuncB type="table" tableValues="0.5 0.8"></feFuncB>
                    <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
            </filter>

            {/* Add more filters here as needed */}
        </svg>
    );
};

export default DuotoneFilters;
