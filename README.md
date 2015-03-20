# angular-notification-service
Simple notification service for AngularJS application

## Why

Because there is no such service provided by AngularJS and at least me need it.

## Installation

```
bower install --save angular-notification-service
```

## Usage

Load script using `<script>` HTML tag like you do with angular.

```html
<script src="assets/libs/angular-notification-service/notificationService.js"></script>
```

Add as reference to your application module.

```js
angular.module('yourmodule', ['ng', 'angularNotification']);
```

Use it in directive, service, filter or controller:

*Consumer*

```js
angular.module('yourmodule').controller('mycontroller', ['$scope', 'Notification', function($scope, Notification) {

  function onNotification(my, args, here) {
  }

  Notification.register('alerts', onNotification);
  
  $scope.$on('destroy', function(){ Notification.unregister('alerts', onNotification); });
}]);
```

*Producer*

```js
angular.module('yourmodule').service('myalerts', ['Notification', function(Notification) {

  return {
    alert: function(my, args, here) {
      Notification.notify('alerts', my, args, here);
    }
  };

}]);
```

The `'alerts'` string is a channel on which you can raise notification or listen to. Channels are created as soon as at least one consumer has registered a callback on.
