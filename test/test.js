TestCase("testMiniClass", {
	setUp: function() 
	{		
	},
	
	tearDown: function()
	{
	},
	
	// mini.Class exists
	"testMiniClassExists": function()
	{
		assertNotUndefined(mini.Class);
		assertNotUndefined(new mini.Class());
	},
	
	// mini.Class supports subclass method
	"testSubclassing": function()
	{
		var SubClass = mini.Class.subclass();
		assertNotUndefined(SubClass);
		assertNotUndefined(new SubClass());
	},
	
	// subclasses of mini.Class support subclass method
	"testSubSubclassing": function()
	{
		var SubSubClass = mini.Class.subclass().subclass();
		assertNotUndefined(SubSubClass);
		assertNotUndefined(new SubSubClass());
	},
	
	// subclass method can add methods to the subclass
	"testAddMethods": function()
	{
		var expectedValue = "foobar";
		var SubClass = mini.Class.subclass({
			addedMethod: function() {
				return expectedValue;
			}
		});
		assertEquals(expectedValue, new SubClass().addedMethod());
	},

	// subclasses can overwrite methods of their superclasses
	"testOverwriteMethods": function()
	{
		var SuperClass = mini.Class.subclass({
			superClassOnlyMethod: function() {
				return 1;
			},
			methodInBothClasses: function() {
				return 2;
			}
		});
		
		var ChildClass = SuperClass.subclass({
			methodInBothClasses: function() {
				return 3;
			},
			childClassOnlyMethod: function() {
				return 4;
			}
		});
		
		var superClassObject = new SuperClass();
		assertEquals(1, superClassObject.superClassOnlyMethod());
		assertEquals(2, superClassObject.methodInBothClasses());
		assertUndefined(superClassObject.childClassOnlyMethod);

		var childClassObject = new ChildClass();
		assertEquals(1, childClassObject.superClassOnlyMethod());
		assertEquals(3, childClassObject.methodInBothClasses());
		assertEquals(4, childClassObject.childClassOnlyMethod());
	},

	// call initialize method with constructor if defined
	"testInitialize": function()
	{
		var called = false;

		var SubClass = mini.Class.subclass({
			initialize: function() {
				called = true;
			}
		});
		
		new SubClass();
		assertTrue(called);

		called = false;

		var SubSubClass = SubClass.subclass();
		
		new SubSubClass();
		assertTrue(called);
	},

	// inject methods into already defined classes
	"testInject": function()
	{
		var called = false;

		var SubClass = mini.Class.subclass({
			methodDefinedBySubclassing: function() {
				return 1;
			},
			overwrittenMethod: function() {
				return 2;
			}
		});
		SubClass.inject({
			overwrittenMethod: function() {
				return 3;
			},
			methodOnlyDefinedByInjecting: function() {
				return 4;
			}
		});
		
		var subClassObject = new SubClass();
		assertEquals(1, subClassObject.methodDefinedBySubclassing());
		assertEquals(3, subClassObject.overwrittenMethod());
		assertEquals(4, subClassObject.methodOnlyDefinedByInjecting());
	}

});
