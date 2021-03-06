"use strict";

const Axios = require('axios');

module.exports = {
	name: "product",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],	

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
		get() {
			return Axios.get('http://localhost:8080/v1/products/all')
				.then(res => {
					// console.log(res.data.data)
					return res.data.data
				})
				.catch((err) => {
					console.log(err)
				})
		},
		
		/**
		 * Welcome a username
		 *
		 * @param {String} name - Product name
		 */
		getProductById: {
			params: {
				name: "string"
			},
			handler(ctx) {
				return `Product name, ${ctx.params.name}`;
			}
		},
		
		/**
		 * Welcome a username
		 *
		 * @param {String} name - Product name
		 */
		welcome: {
			params: {
				name: "string"
			},
			handler(ctx) {
				return `Product name, ${ctx.params.name}`;
			}
		},
		
		/**
		 * Welcome a username
		 *
		 * @param {String} id - Product id
		 */
		get_product_by_id: {
			params: {
				id: "string"
			},
			handler(ctx) {
				return Axios.get(`http://localhost:8080/v1/products/${ctx.params.id}`)
					.then((res) => {
						return res.data.data
					})
				// return `Product detail, ${ctx.params.name}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};
