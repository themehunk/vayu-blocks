/**
 * Swiper dependencies
 *
 * @see https://swiperjs.com/get-started
 */
import { Swiper } from 'swiper';
import { Autoplay,A11y, Keyboard, Navigation, Pagination,FreeMode, Mousewheel,EffectFlip, EffectCoverflow,EffectFade ,Scrollbar} from 'swiper/modules';

/**
 * Initialize the slider.
 *
 * @param {Element} container HTMLElement.
 * @param {Object}  options   Slider parameters.
 *
 * @return {Object} Returns initialized slider instance.
 *
 * @see https://swiperjs.com/swiper-api#parameters
 */
export function SwiperInit( container, options = {} ) {

	// Initialize the modules array with the core modules
    const modules = [Autoplay, Keyboard, Navigation, Pagination, FreeMode, Mousewheel,A11y];

    // Check the effect and add the corresponding effect module if needed
    if (options.effect === 'slide') {
        modules.push(EffectSlide);
    } else if (options.effect === 'flip') {
        modules.push(EffectFlip);
    } else if (options.effect === 'fade') {
        modules.push(EffectFade);
    } else if (options.effect === 'coverflow') {
        modules.push(EffectCoverflow);
    } 
	if (options.scrollbar){
		modules.push(Scrollbar);
	}


	const parameters = {
		autoplay: options?.autoplay ?? true,
		centeredSlides: options?.centerSlides ?? false,
		createElements: true,
		grabCursor: options?.grabCursor ?? true,
		initialSlide: options?.initialSlide ?? 0,
		keyboard: true,
		modules: modules,
		navigation: options?.navigation ?? false,
		pagination: options?.pagination ?? false,
		pagination: {
			enabled: options?.pagination ?? false,
			dynamicBullets: options?.dynamicBullets ?? false,
			dynamicMainBullets: options?.dynamicMainBullets ?? 1, // Default value if not provided
		},
		simulateTouch: options?.simulateTouch ?? true,
		loop: options?.loop,
		slidesPerView:options?.slidesPerView ?? 1,
		spaceBetween:options?.spaceBetween ?? 10,
		freeMode:options?.freeMode ?? true,
		mousewheel:options?.mousewheel ?? true,
		...(options.autoplay && {
            autoplay: {
                delay: options?.delay ?? 500,
                disableOnInteraction: options?.disableOnInteraction ?? true,
            },
        }),

		...((options.effect!='none' && options.loop===false) && {
			effect:options?.effect ?? 'fade',
		}),
		
		scrollbar:options?.scrollbar ?? true,
		
	};
	return new Swiper( container, parameters );
}
