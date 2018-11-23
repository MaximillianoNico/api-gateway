"use strict";

const { ServiceBroker } = require("moleculer");
const { ValidationError } = require("moleculer").Errors;
const TestService = require("../../services/product.service");

describe("Test 'product' service", () => {
	let broker = new ServiceBroker();
	broker.createService(TestService);

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	describe("Test 'Product.get' action", () => {

		it("should return with data products", () => {
            const res = broker.call("product.get");
            // console.log(typeof res);
            expect(typeof res).toBe('object');
		});

	});

	describe("Test 'product.welcome' action", () => {

		it("should return with 'get'", () => {
			expect(broker.call("product.welcome", { name: "Adidas" })).resolves.toBe("Product name, Adidas");
		});

		it("should reject an ValidationError", () => {
			expect(broker.call("product.welcome")).rejects.toBeInstanceOf(ValidationError);
        });

    });

    describe("Test 'get_product_by_id' action", () => {
        it("should return json product detail", () => {
            const res = broker.call("product.get_product_by_id");
            expect(res.statusCode).resolves.toBe("600")
        })
    })

});

