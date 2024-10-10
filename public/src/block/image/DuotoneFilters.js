// DuotoneFilters.js
import React from 'react';

const DuotoneFilters = () => {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg">
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

        {/* Purple and Yellow */}
        <filter id="duotone-purple-yellow">
            <feColorMatrix type="matrix" result="gray"
                values="1 0 0 0 0
                        1 0 0 0 0
                        1 0 0 0 0
                        0 0 0 1 0" />
            <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                <feFuncR type="table" tableValues="0.5 0.8"></feFuncR>
                <feFuncG type="table" tableValues="0.2 0.7"></feFuncG>
                <feFuncB type="table" tableValues="0.5 0.3"></feFuncB>
                <feFuncA type="table" tableValues="0 1"></feFuncA>
            </feComponentTransfer>
        </filter>

        {/* Orange and Teal */}
        <filter id="duotone-orange-teal">
            <feColorMatrix type="matrix" result="gray"
                values="1 0 0 0 0
                        1 0 0 0 0
                        1 0 0 0 0
                        0 0 0 1 0" />
            <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                <feFuncR type="table" tableValues="0.8 0.5"></feFuncR>
                <feFuncG type="table" tableValues="0.5 0.7"></feFuncG>
                <feFuncB type="table" tableValues="0.4 0.5"></feFuncB>
                <feFuncA type="table" tableValues="0 1"></feFuncA>
            </feComponentTransfer>
        </filter>

        {/* Pink and Blue */}
        <filter id="duotone-pink-blue">
            <feColorMatrix type="matrix" result="gray"
                values="1 0 0 0 0
                        1 0 0 0 0
                        1 0 0 0 0
                        0 0 0 1 0" />
            <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                <feFuncR type="table" tableValues="0.7 0.4"></feFuncR>
                <feFuncG type="table" tableValues="0.3 0.5"></feFuncG>
                <feFuncB type="table" tableValues="0.6 0.7"></feFuncB>
                <feFuncA type="table" tableValues="0 1"></feFuncA>
            </feComponentTransfer>
        </filter>

        {/* Cyan and Magenta */}
        <filter id="duotone-cyan-magenta">
            <feColorMatrix type="matrix" result="gray"
                values="1 0 0 0 0
                        1 0 0 0 0
                        1 0 0 0 0
                        0 0 0 1 0" />
            <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                <feFuncR type="table" tableValues="0.0 0.7"></feFuncR>
                <feFuncG type="table" tableValues="0.7 0.2"></feFuncG>
                <feFuncB type="table" tableValues="0.9 0.6"></feFuncB>
                <feFuncA type="table" tableValues="0 1"></feFuncA>
            </feComponentTransfer>
        </filter>

        {/* Yellow and Black */}
        <filter id="duotone-yellow-black">
            <feColorMatrix type="matrix" result="gray"
                values="1 0 0 0 0
                        1 0 0 0 0
                        1 0 0 0 0
                        0 0 0 1 0" />
            <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                <feFuncR type="table" tableValues="1 0.3"></feFuncR>
                <feFuncG type="table" tableValues="0.7 0.3"></feFuncG>
                <feFuncB type="table" tableValues="0.1 0.1"></feFuncB>
                <feFuncA type="table" tableValues="0 1"></feFuncA>
            </feComponentTransfer>
        </filter>

        {/* Light Blue and Light Green */}
        <filter id="duotone-lightblue-lightgreen">
            <feColorMatrix type="matrix" result="gray"
                values="1 0 0 0 0
                        1 0 0 0 0
                        1 0 0 0 0
                        0 0 0 1 0" />
            <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                <feFuncR type="table" tableValues="0.6 0.6"></feFuncR>
                <feFuncG type="table" tableValues="0.8 0.9"></feFuncG>
                <feFuncB type="table" tableValues="0.8 0.6"></feFuncB>
                <feFuncA type="table" tableValues="0 1"></feFuncA>
            </feComponentTransfer>
        </filter>

        {/* Gray and Yellow */}
        <filter id="duotone-gray-yellow">
            <feColorMatrix type="matrix" result="gray"
                values="1 0 0 0 0
                        1 0 0 0 0
                        1 0 0 0 0
                        0 0 0 1 0" />
            <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                <feFuncR type="table" tableValues="0.6 1"></feFuncR>
                <feFuncG type="table" tableValues="0.6 1"></feFuncG>
                <feFuncB type="table" tableValues="0.6 0.3"></feFuncB>
                <feFuncA type="table" tableValues="0 1"></feFuncA>
            </feComponentTransfer>
        </filter>

    </svg>
    );
};

export default DuotoneFilters;