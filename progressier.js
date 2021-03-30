
			self.addEventListener('fetch', function(event) {
				if (event.request.method !== 'GET') {return;}
				event.respondWith(async function() {
						try {
							var res = await fetch(event.request);
							try {
								var cache = await caches.open('progressier-cached');
								cache.put(event.request.url, res.clone());
							}catch(error){}
							return res;
						}
						catch(error){
							return caches.match(event.request);
						}
				  }());
			});

			self.addEventListener('push', function (event){
				if (!self.Notification || self.Notification.permission !== 'granted') { return;}
				if (!event.data){return};
				var data = event.data.json();
				var notification = self.registration.showNotification(data.title, data);
			});
			
			self.addEventListener('notificationclick', function (event, data){
				var notification = event.notification.data;
				var url = notification.url;
				if (event.action && notification.actions && notification.actions.length > 0){
					var action = notification.actions.find(o => o.action === event.action);
					if (action.url){url = action.url}
				}
				if (url) { clients.openWindow(url); }
			});
		