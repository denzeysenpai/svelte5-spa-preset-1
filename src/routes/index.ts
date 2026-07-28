export type { RouteDefinition, RouteDefinition as RouteObject } from '$lib/router';
export {
	buildViewUrl,
	readViewFromLocation,
	readChildFromLocation,
	resolveRoute,
	readRouteFromLocation,
	navigateTo,
	routeTo,
	RouteTo,
	refreshRouteFromLocation,
	currentRoute,
	ROUTE_PARAM as VIEW_PREFIX_KEY,
	CHILD_PARAM as CHILD_PREFIX_KEY
} from '$lib/router';

export const VIEW_PREFIX = '?view=';
export const CHILD_PREFIX = '&sub=';
