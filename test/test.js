describe('CRUD system testing with local Storage', () => {
	
	describe('local storage', () => {
		it('Local Storage is filled', () => {
			expect(_tMethods.database()).toEqual('is filled')
		});

		it('default Local Storage', () => {
			expect(_tMethods.database()).toBeTruthy()
		});

		it('New user was successfully add!', () => {
			expect(_tMethods._get_new_user()).toEqual("New user was successfully add!");
		});
	})

	
	describe('change', () => {
			it('Start edit', () => {
				expect(_tMethods._editFunc()).toEqual("Started");
			});

			it("User's parametr was successfully edits", () => {
				expect(_tMethods._editFunc()).not.toEqual("User's parametr was successfully edits");
			});

			it('User was successfully delete!', () => {
				expect(_tMethods._delFunc()).toEqual('User was successfully delete!');
			});

			it('User was successfully copy!', () => {
				expect(_tMethods._copyFunc()).toEqual('User was successfully copy!');
			});
		})

});

