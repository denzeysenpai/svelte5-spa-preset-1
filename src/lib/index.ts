// place files you want to import through the `$lib` alias in this folder.

const anchors = [
	{
		mobile: 'home_id_mobile',
		desktop: 'home_id'
	},
	{
		mobile: 'contact_us_id_mobile',
		desktop: 'contact_us_id'
	},
	{
		mobile: 'about_id_mobile',
		desktop: 'about_id'
	}
];

/**
 * Sets the button state to active
 * @param id ID to set to active
 */
export function _setAnchorToActive(id: string) {
	anchors.forEach((anchor) => {
		if (id == anchor.desktop || id == anchor.mobile) {
			const anch1 = document.querySelector('#' + anchor.desktop);
			const anch2 = document.querySelector('#' + anchor.mobile);

			if (anch1 && anch2) {
				if (!anch1.classList.contains('active')) anch1.classList.toggle('active');
				if (!anch2.classList.contains('active')) anch2.classList.toggle('active');
			}
		} else {
			const anch1 = document.querySelector('#' + anchor.desktop);
			const anch2 = document.querySelector('#' + anchor.mobile);

			if (anch1 && anch2) {
				if (anch1.classList.contains('active')) anch1.classList.toggle('active');
				if (anch2.classList.contains('active')) anch2.classList.toggle('active');
			}
		}
	});
}
