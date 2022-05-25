import { METHOD_DELETE, METHOD_GET, METHOD_POST, METHOD_PUT } from "../consts/method.js"

class RouteProvider {
    static _instance

    constructor() {
        this._routes = []
    }

    static instance() {
        if (this._instance == null) {
            this._instance = new RouteProvider()
        }
        return this._instance
    }

    get(path, handler) {
        this.addRoute(METHOD_GET, path, handler)
        return this
    }

    post(path, handler) {
        this.addRoute(METHOD_POST, path, handler)
    }

    put(path, handler) {
        this.addRoute(METHOD_PUT, path, handler)
    }

    delete(path, handler) {
        this.addRoute(METHOD_DELETE, path, handler)
    }

    boot() {
        return this._routes
    }

    addRoute(method, path, handler) {
        this._routes.push({ method, path, handler})
    }
}

export default RouteProvider