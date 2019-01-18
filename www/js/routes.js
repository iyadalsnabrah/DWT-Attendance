routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/transaction/',
    url: './pages/transaction.html',
  },
  {
    path: '/form/',
    url: './pages/form.html',
  },
  {
    path: '/notification/',
    url: './pages/notification.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
