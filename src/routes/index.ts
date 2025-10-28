// import { goto } from "$app/navigation";

export interface RouteObject {
	path: string;
	component: __sveltets_2_IsomorphicComponent;
	children?: RouteObject[];
}

// check for url search param of view=
// check if search param &sub= exists, if so then it has a child, for each &sub=, there is one child

export const VIEW_PREFIX = '?view='; //?view=dashboard-view
export const CHILD_PREFIX = '&sub='; //?view=dashboard-view&sub=about-content

export const RouteTo = async (path: string, child?: string) => {
	if (!location.search.includes(path)) {
		location.replace(`${VIEW_PREFIX + path + (child ? CHILD_PREFIX + child : '')}`);
	}
};
