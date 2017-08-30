import 'ui/autoload/styles';
import './less/main.less';
import uiRoutes from 'ui/routes';
import uiModules from 'ui/modules';
import homeTemplate from 'plugins/test_app/index.html';

if(uiRoutes.enable){
  uiRoutes.enable();
}
uiRoutes
.when('/', {
  template: homeTemplate,
  controller: 'testApp',
  controllerAs: 'ctrl'
});

uiModules
.get('app/test_app', [])
.controller('testApp', function ($scope) {
	$scope.name = 'Test App';
});