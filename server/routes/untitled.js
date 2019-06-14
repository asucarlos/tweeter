
app = {
  routes: [],
  get: (path, func) => {
    this.routes.push([
      'GET', path, func
    ])
  },
  post: (path, func) => {
    this.routes.push([
      'POST', path, func
    ])
  },
  listen: (req) => {
    while (true)
    for (let i = 0; i < this.routes.length; i++) {
      if (req.verb === this.routes[i][0]) {
        if (req.path === this.routes[i][1]) {
          return this.routes[i][2]();
        }
      }
    }
    return '404';
  }
}


export app;
