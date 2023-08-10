/**
 * External dependencies
 */
import hash from 'object-hash';

/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';

import { registerStore } from '@wordpress/data';

/**
 * Internal dependencies
 */
const getQueryStringFromObject = params => Object.keys(params).map(key => key + '=' + params[key]).join('&');

const DEFAULT_STATE = {
  showOnboarding: Boolean(vayublock.showOnboarding) && 'false' !== localStorage?.getItem('o-show-onboarding'),
  viewType: 'Desktop',
  visiblePopover: 'vayu-blocks/dynamic-value',
  dynamicData: {},
  uniqueIDs: {}, // Add uniqueIDs to the default state
};

const actions = {
  updateView(viewType) {
    return {
      type: 'UPDATE_VIEW',
      viewType,
    };
  },
  showOnboarding(showOnboarding) {
    return {
      type: 'UPDATE_ONBOARDING',
      showOnboarding,
    };
  },
  setVisiblePopover(visiblePopover) {
    return {
      type: 'UPDATE_POPOVER',
      visiblePopover,
    };
  },
  setDynamicData(key, value) {
    return {
      type: 'SET_DYNAMIC_DATA',
      key,
      value,
    };
  },
  fetchFromAPI(path) {
    return {
      type: 'FETCH_FROM_API',
      path,
    };
  },
  addUniqueID(uniqueID, clientID) {
    return {
      type: 'ADD_UNIQUE_ID',
      uniqueID,
      clientID,
    };
  },
};

registerStore('vayu-blocks/data', {
  reducer(state = DEFAULT_STATE, action) {
    if ('UPDATE_VIEW' === action.type) {
      return {
        ...state,
        viewType: action.viewType,
      };
    }

    if ('UPDATE_ONBOARDING' === action.type) {
      return {
        ...state,
        showOnboarding: action.showOnboarding,
      };
    }

    if ('UPDATE_POPOVER' === action.type) {
      return {
        ...state,
        visiblePopover: action.visiblePopover,
      };
    }

    if ('SET_DYNAMIC_DATA' === action.type) {
      return {
        ...state,
        dynamicData: {
          ...state.dynamicData,
          [action.key]: action.value,
        },
      };
    }

    if ('ADD_UNIQUE_ID' === action.type) {
      const updatedIDs = {
        ...state.uniqueIDs,
        [action.uniqueID]: action.clientID,
      };
      return {
        ...state,
        uniqueIDs: updatedIDs,
      };
    }

    return state;
  },

  actions,

  selectors: {
    getView(state) {
      return state.viewType;
    },
    isOnboardingVisible(state) {
      return state.showOnboarding;
    },
    getVisiblePopover(state) {
      return state.visiblePopover;
    },
    getDynamicData(state, attrs) {
      const key = hash(attrs);
      return state.dynamicData[key];
    },
    getUniqueIDs(state) {
      return state.uniqueIDs;
    },
    isUniqueID( state, uniqueID ) {
        const { uniqueIDs } = state;
        let isUniqueID = true;
        if ( uniqueIDs.hasOwnProperty( uniqueID ) ) {
            isUniqueID = false;
        }
        return isUniqueID;
    },
	  isUniqueBlock( state, uniqueID, clientID ) {
			const { uniqueIDs } = state;
			let isUniqueBlock = false;
			if ( uniqueIDs.hasOwnProperty( uniqueID ) ) {
				// Compare clientID if they match then it just means we've switched to iframe view and so we don't need a new ID.
				if ( uniqueIDs[uniqueID] === clientID ) {
					isUniqueBlock = true;
				}
			}
			return isUniqueBlock;
		},
  },

  controls: {
    FETCH_FROM_API(action) {
      return apiFetch({ path: action.path });
    },
  },

  resolvers: {
    *getDynamicData(attrs) {
      const key = hash(attrs);
      const path = 'themehunk/v1/dynamic/preview/?' + getQueryStringFromObject(attrs);
      const value = yield actions.fetchFromAPI(path);
      return actions.setDynamicData(key, value);
    },
  },
});
