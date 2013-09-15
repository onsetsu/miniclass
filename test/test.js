TestCase("testMiniClass", {
	setUp: function() 
	{		
	},
	
	tearDown: function()
	{
	},
	
	"testMiniClassExists": function()
	{
		assertNotUndefined(mini.Class);
		assertNotUndefined(new mini.Class);
	}

});
