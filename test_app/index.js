export default function(kibana) {
	return new kibana.Plugin({
	    id: 'test_app',
	    name: 'test_app',
        require: ['elasticsearch', 'kibana'],
	    uiExports: {
	      app: {
	      	title: 'Test',
	      	description: 'A Test Custom Application for Kibana',
	      	main: 'plugins/test_app/test'
	      }
	    }
	});
}