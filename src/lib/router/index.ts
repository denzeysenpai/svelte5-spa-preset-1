import { writable } from 'svelte/store';
import { Routes as defaultRoutes } from '../../routes/routes.svelte';

export interface RouteDefinition {
	path: string;
	id?: string;
	component: any;
	name?: string;
	icon?: any;
	children?: RouteDefinition[];
}

export const ROUTE_PARAM = 'view';
export const CHILD_PARAM = 'sub';

export function normalizeRouteKey(value: string): string {
	return value.trim().replace(/^\/+|\/+$/g, '') || '';
}

export function buildViewUrl(path: string, child?: string): string {
	const normalized = normalizeRouteKey(path);
	if (typeof window === 'undefined') {
		return `?${ROUTE_PARAM}=${normalized}` + (child ? `&${CHILD_PARAM}=${normalizeRouteKey(child)}` : '');
	}

	const url = new URL(window.location.href);

	if (normalized) {
		url.searchParams.set(ROUTE_PARAM, normalized);
	} else {
		url.searchParams.delete(ROUTE_PARAM);
	}

	if (child) {
		url.searchParams.set(CHILD_PARAM, normalizeRouteKey(child));
	} else {
		url.searchParams.delete(CHILD_PARAM);
	}

	return url.pathname + url.search;
}

export function readViewFromLocation(location?: Location): string {
	if (typeof window === 'undefined') return '';
	const loc = location ?? window.location;
	return normalizeRouteKey(new URLSearchParams(loc.search).get(ROUTE_PARAM) ?? '');
}

export function readChildFromLocation(location?: Location): string {
	if (typeof window === 'undefined') return '';
	const loc = location ?? window.location;
	return normalizeRouteKey(new URLSearchParams(loc.search).get(CHILD_PARAM) ?? '');
}

export function resolveRoute(
	path: string,
	routesList: RouteDefinition[] = defaultRoutes
): RouteDefinition | undefined {
	const normalized = normalizeRouteKey(path);

	if (!routesList || routesList.length === 0) return undefined;

	if (!normalized) {
		return (
			routesList.find((route) => normalizeRouteKey(route.path) === 'home-page') ??
			routesList.find((route) => normalizeRouteKey(route.path) === 'dashboard') ??
			routesList[0]
		);
	}

	return routesList.find((route) => normalizeRouteKey(route.path) === normalized);
}

export function readRouteFromLocation(
	location?: Location,
	routesList?: RouteDefinition[]
): RouteDefinition | undefined {
	return resolveRoute(readViewFromLocation(location), routesList);
}

export function navigateTo(path: string, replace = false, child?: string): RouteDefinition | undefined {
	if (typeof window === 'undefined') return undefined;

	const route = resolveRoute(path);
	const url = buildViewUrl(path, child);

	if (replace) {
		window.history.replaceState(null, '', url);
	} else {
		window.history.pushState(null, '', url);
	}

	return route;
}

export const currentRoute = writable<RouteDefinition | undefined>(undefined);

export function routeTo(path: string, replace = false, child?: string): RouteDefinition | undefined {
	const route = navigateTo(path, replace, child);
	currentRoute.set(route);
	return route;
}

export function refreshRouteFromLocation(routesList?: RouteDefinition[]): RouteDefinition | undefined {
	const route = readRouteFromLocation(undefined, routesList);
	currentRoute.set(route);
	return route;
}

export const RouteTo = (path: string, child?: string) => routeTo(path, false, child);
