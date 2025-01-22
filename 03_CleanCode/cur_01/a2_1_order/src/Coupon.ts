export default class Coupon {

	constructor (readonly code: string, readonly percentage: number, readonly expiration: Date) {
	}

	// apply () {
	// 	const today = Date.now();
	// }

	isExpired () {
		return Date.now() > this.expiration.getDate()
	}

}
