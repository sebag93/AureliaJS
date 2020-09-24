var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('app',["require", "exports", "aurelia-dependency-injection", "./users/services/users-service", "./core/identity-service", "./core/routing-authorize-step"], function (require, exports, aurelia_dependency_injection_1, users_service_1, identity_service_1, routing_authorize_step_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(usersService, identityService) {
            this.usersService = usersService;
            this.identityService = identityService;
        }
        App.prototype.activate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var userIdentity;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.usersService.getUserIdentity()];
                        case 1:
                            userIdentity = _a.sent();
                            if (!this.identityService.isUserLogged) {
                                this.identityService.setUserIdentity(userIdentity);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        App.prototype.configureRouter = function (config) {
            var authorizeStep = new routing_authorize_step_1.RoutingAuthorizeStep(this.identityService.userIdentity);
            config.title = 'Evento';
            config.addAuthorizeStep(authorizeStep);
            config.map([
                { route: ['', 'home'], moduleId: './home' },
                { route: 'users', moduleId: './users/config/users-routing' },
                { route: 'admins', moduleId: './admins/config/admins-routing', settings: { roles: ['admin'] } },
                { route: 'events', moduleId: './events/config/events-routing' }
            ]);
        };
        return App;
    }());
    App = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [users_service_1.UsersService, identity_service_1.IdentityService])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVFBLElBQWEsR0FBRztRQUVkLGFBQW9CLFlBQTBCLEVBQVUsZUFBZ0M7WUFBcEUsaUJBQVksR0FBWixZQUFZLENBQWM7WUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBRyxDQUFDO1FBRXRGLHNCQUFRLEdBQWQ7Ozs7O2dDQUNxQixxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxFQUFBOzsyQ0FBekMsU0FBeUM7NEJBRTVELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dDQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDckQsQ0FBQzs7Ozs7U0FDRjtRQUVELDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkI7WUFDekMsSUFBSSxhQUFhLEdBQUcsSUFBSSw2Q0FBb0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRWhGLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7Z0JBQzFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsOEJBQThCLEVBQUU7Z0JBQzNELEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFBRTtnQkFDN0YsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBQzthQUM5RCxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsVUFBQztJQUFELENBeEJBLEFBd0JDLElBQUE7SUF4QlksR0FBRztRQURmLHlDQUFVLEVBQUU7eUNBR3VCLDRCQUFZLEVBQTJCLGtDQUFlO09BRjdFLEdBQUcsQ0F3QmY7SUF4Qlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcbmltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcbmltcG9ydCB7VXNlcnNTZXJ2aWNlfSBmcm9tICcuL3VzZXJzL3NlcnZpY2VzL3VzZXJzLXNlcnZpY2UnO1xyXG5pbXBvcnQge0lkZW50aXR5U2VydmljZX0gZnJvbSAnLi9jb3JlL2lkZW50aXR5LXNlcnZpY2UnO1xyXG5pbXBvcnQge1VzZXJJZGVudGl0eU1vZGVsfSBmcm9tICcuL3VzZXJzL21vZGVscy91c2VyLWlkZW50aXR5LW1vZGVsJztcclxuaW1wb3J0IHtSb3V0aW5nQXV0aG9yaXplU3RlcH0gZnJvbSAnLi9jb3JlL3JvdXRpbmctYXV0aG9yaXplLXN0ZXAnO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSwgcHJpdmF0ZSBpZGVudGl0eVNlcnZpY2U6IElkZW50aXR5U2VydmljZSkge31cclxuICBcclxuICBhc3luYyBhY3RpdmF0ZSgpIHsgXHJcbiAgICBsZXQgdXNlcklkZW50aXR5ID0gYXdhaXQgdGhpcy51c2Vyc1NlcnZpY2UuZ2V0VXNlcklkZW50aXR5KCk7ICBcclxuXHJcbiAgICBpZighdGhpcy5pZGVudGl0eVNlcnZpY2UuaXNVc2VyTG9nZ2VkKSB7XHJcbiAgICAgIHRoaXMuaWRlbnRpdHlTZXJ2aWNlLnNldFVzZXJJZGVudGl0eSh1c2VySWRlbnRpdHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbikgeyAgXHJcbiAgICBsZXQgYXV0aG9yaXplU3RlcCA9IG5ldyBSb3V0aW5nQXV0aG9yaXplU3RlcCh0aGlzLmlkZW50aXR5U2VydmljZS51c2VySWRlbnRpdHkpO1xyXG5cclxuICAgIGNvbmZpZy50aXRsZSA9ICdFdmVudG8nO1xyXG4gICAgY29uZmlnLmFkZEF1dGhvcml6ZVN0ZXAoYXV0aG9yaXplU3RlcCk7XHJcbiAgICBjb25maWcubWFwKFtcclxuICAgICAge3JvdXRlOiBbJycsICdob21lJ10sIG1vZHVsZUlkOiAnLi9ob21lJyB9LFxyXG4gICAgICB7cm91dGU6ICd1c2VycycsIG1vZHVsZUlkOiAnLi91c2Vycy9jb25maWcvdXNlcnMtcm91dGluZycgfSwgXHJcbiAgICAgIHtyb3V0ZTogJ2FkbWlucycsIG1vZHVsZUlkOiAnLi9hZG1pbnMvY29uZmlnL2FkbWlucy1yb3V0aW5nJywgc2V0dGluZ3M6IHsgcm9sZXM6IFsnYWRtaW4nXX0gfSwgICBcclxuICAgICAge3JvdXRlOiAnZXZlbnRzJywgbW9kdWxlSWQ6ICcuL2V2ZW50cy9jb25maWcvZXZlbnRzLXJvdXRpbmcnfSAgXHJcbiAgICBdKTsgIFxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('home',["require", "exports", "aurelia-dependency-injection", "aurelia-framework", "aurelia-router", "./events/services/events-service", "toastr"], function (require, exports, aurelia_dependency_injection_1, aurelia_framework_1, aurelia_router_1, events_service_1, toastr) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HomeViewModel = (function () {
        function HomeViewModel(eventsService, router) {
            this.eventsService = eventsService;
            this.router = router;
        }
        HomeViewModel.prototype.activate = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.searchText = '';
                            return [4 /*yield*/, this.browseEvents()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        HomeViewModel.prototype.browseEvents = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.eventsService.browse(this.searchText)];
                        case 1:
                            _a.events = _b.sent();
                            if (this.events.length === 0)
                                toastr.warning('No events found!');
                            return [2 /*return*/];
                    }
                });
            });
        };
        HomeViewModel.prototype.redirectToEventDetails = function (eventId) {
            this.router.navigate("#/events/" + eventId);
        };
        HomeViewModel.prototype.searchTextChanged = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.browseEvents()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return HomeViewModel;
    }());
    __decorate([
        aurelia_framework_1.observable,
        __metadata("design:type", String)
    ], HomeViewModel.prototype, "searchText", void 0);
    HomeViewModel = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [events_service_1.EventsService, aurelia_router_1.Router])
    ], HomeViewModel);
    exports.HomeViewModel = HomeViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRQSxJQUFhLGFBQWE7UUFPdEIsdUJBQW9CLGFBQTRCLEVBQVUsTUFBYztZQUFwRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtZQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBRyxDQUFDO1FBRXRFLGdDQUFRLEdBQWQ7Ozs7OzRCQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOzRCQUNyQixxQkFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUE7OzRCQUF6QixTQUF5QixDQUFDOzs7OztTQUM3QjtRQUVLLG9DQUFZLEdBQWxCOzs7Ozs7NEJBQ0ksS0FBQSxJQUFJLENBQUE7NEJBQVUscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFBOzs0QkFBOUQsR0FBSyxNQUFNLEdBQUcsU0FBZ0QsQ0FBQzs0QkFDL0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO2dDQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Ozs7O1NBQzFDO1FBRUQsOENBQXNCLEdBQXRCLFVBQXVCLE9BQWU7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBWSxPQUFTLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRWEseUNBQWlCLEdBQS9COzs7O2dDQUNJLHFCQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQTs7NEJBQXpCLFNBQXlCLENBQUM7Ozs7O1NBQzdCO1FBQ0wsb0JBQUM7SUFBRCxDQTNCQSxBQTJCQyxJQUFBO0lBdEJHO1FBREMsOEJBQVU7O3FEQUNnQjtJQUxsQixhQUFhO1FBRHpCLHlDQUFVLEVBQUU7eUNBUTBCLDhCQUFhLEVBQWtCLHVCQUFNO09BUC9ELGFBQWEsQ0EyQnpCO0lBM0JZLHNDQUFhIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xyXG5pbXBvcnQge29ic2VydmFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHtFdmVudHNTZXJ2aWNlfSBmcm9tICcuL2V2ZW50cy9zZXJ2aWNlcy9ldmVudHMtc2VydmljZSc7XHJcbmltcG9ydCB7RXZlbnRNb2RlbH0gZnJvbSAnLi9ldmVudHMvbW9kZWxzL2V2ZW50LW1vZGVsJztcclxuaW1wb3J0ICogYXMgdG9hc3RyIGZyb20gJ3RvYXN0cic7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBIb21lVmlld01vZGVsIHtcclxuXHJcbiAgICBwcml2YXRlIGV2ZW50czogRXZlbnRNb2RlbFtdO1xyXG5cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50c1NlcnZpY2U6IEV2ZW50c1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG4gICAgYXN5bmMgYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gJyc7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5icm93c2VFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBicm93c2VFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSBhd2FpdCB0aGlzLmV2ZW50c1NlcnZpY2UuYnJvd3NlKHRoaXMuc2VhcmNoVGV4dCk7XHJcbiAgICAgICAgaWYodGhpcy5ldmVudHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICB0b2FzdHIud2FybmluZygnTm8gZXZlbnRzIGZvdW5kIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZGlyZWN0VG9FdmVudERldGFpbHMoZXZlbnRJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoYCMvZXZlbnRzLyR7ZXZlbnRJZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNlYXJjaFRleHRDaGFuZ2VkKCl7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5icm93c2VFdmVudHMoKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin('aurelia-validation');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFaEMsRUFBRSxDQUFDLENBQUMscUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNuQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMscUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUVELE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFkRCw4QkFjQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLnBsdWdpbignYXVyZWxpYS12YWxpZGF0aW9uJyk7XG5cbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIH1cblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('components/validation-alert',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationAlertViewModel = (function () {
        function ValidationAlertViewModel() {
        }
        ValidationAlertViewModel.prototype.activate = function (validationController) {
            this.validationController = validationController;
        };
        return ValidationAlertViewModel;
    }());
    exports.ValidationAlertViewModel = ValidationAlertViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdmFsaWRhdGlvbi1hbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBT0EsQ0FBQztRQUhHLDJDQUFRLEdBQVIsVUFBUyxvQkFBMEM7WUFDL0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ3JELENBQUM7UUFDTCwrQkFBQztJQUFELENBUEEsQUFPQyxJQUFBO0lBUFksNERBQXdCIiwiZmlsZSI6ImNvbXBvbmVudHMvdmFsaWRhdGlvbi1hbGVydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VmFsaWRhdGlvbkNvbnRyb2xsZXJ9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkFsZXJ0Vmlld01vZGVsIHtcclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcclxuXHJcbiAgICBhY3RpdmF0ZSh2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyID0gdmFsaWRhdGlvbkNvbnRyb2xsZXI7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('core/auth-service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthService = (function () {
        function AuthService() {
            this.rememberMe = true;
            this.storageKey = 'access_token';
            this.setStorage();
        }
        Object.defineProperty(AuthService.prototype, "storage", {
            get: function () { return this.rememberMe ? localStorage : sessionStorage; },
            enumerable: true,
            configurable: true
        });
        ;
        AuthService.prototype.setAccessToken = function (accessToken, rememberMe) {
            this.rememberMe = rememberMe;
            this.storage.setItem(this.storageKey, accessToken);
        };
        AuthService.prototype.getAccessToken = function () {
            return this.storage.getItem(this.storageKey);
        };
        AuthService.prototype.clearAccessToken = function () {
            this.storage.clear();
        };
        AuthService.prototype.setStorage = function () {
            this.rememberMe = localStorage.getItem(this.storageKey) !== null;
        };
        return AuthService;
    }());
    exports.AuthService = AuthService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvYXV0aC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBTUk7WUFKUSxlQUFVLEdBQVksSUFBSSxDQUFDO1lBQ2xCLGVBQVUsR0FBRyxjQUFjLENBQUM7WUFJekMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFKRCxzQkFBWSxnQ0FBTztpQkFBbkIsY0FBd0IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUUsWUFBWSxHQUFHLGNBQWMsQ0FBQSxDQUFDLENBQUM7OztXQUFBO1FBQUEsQ0FBQztRQU1oRixvQ0FBYyxHQUFkLFVBQWUsV0FBbUIsRUFBRSxVQUFtQjtZQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFFRCxvQ0FBYyxHQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBRUQsc0NBQWdCLEdBQWhCO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBRU8sZ0NBQVUsR0FBbEI7WUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUNyRSxDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQTFCQSxBQTBCQyxJQUFBO0lBMUJZLGtDQUFXIiwiZmlsZSI6ImNvcmUvYXV0aC1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHJlbWVtYmVyTWU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdG9yYWdlS2V5ID0gJ2FjY2Vzc190b2tlbic7XHJcbiAgICBwcml2YXRlIGdldCBzdG9yYWdlKCkgeyByZXR1cm4gdGhpcy5yZW1lbWJlck1lPyBsb2NhbFN0b3JhZ2UgOiBzZXNzaW9uU3RvcmFnZSB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIHJlbWVtYmVyTWU6IGJvb2xlYW4pIDogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW1lbWJlck1lID0gcmVtZW1iZXJNZTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXksIGFjY2Vzc1Rva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2Nlc3NUb2tlbigpIDogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckFjY2Vzc1Rva2VuKCkgOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1lbWJlck1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5KSAhPT0gbnVsbDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('core/data-service',["require", "exports", "aurelia-fetch-client"], function (require, exports, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataService = (function () {
        function DataService(httpClient, authService) {
            this.httpClient = httpClient;
            this.authService = authService;
            this.configureHttpClient();
        }
        DataService.prototype.get = function (endpoint, isProtected) {
            return this.createRequest('GET', endpoint, null, isProtected);
        };
        DataService.prototype.post = function (endpoint, data, isProtected) {
            return this.createRequest('POST', endpoint, data, isProtected);
        };
        DataService.prototype.put = function (endpoint, data, isProtected) {
            return this.createRequest('PUT', endpoint, data, isProtected);
        };
        DataService.prototype.delete = function (endpoint, isProtected) {
            return this.createRequest('DELETE', endpoint, null, isProtected);
        };
        DataService.prototype.createRequest = function (method, endpoint, data, isProtected) {
            var requestInit = {
                method: method
            };
            if (data !== null)
                requestInit.body = aurelia_fetch_client_1.json(data);
            if (isProtected)
                requestInit.headers = this.createAuthorizationHeader();
            return this.httpClient.fetch(endpoint, requestInit).then(function (response) { return response.json().catch(function () { }); });
        };
        DataService.prototype.configureHttpClient = function () {
            this.httpClient.configure(function (config) {
                config.withBaseUrl('http://localhost:5000/');
            });
        };
        DataService.prototype.createAuthorizationHeader = function () {
            var accessToken = this.authService.getAccessToken();
            return { 'Authorization': "Bearer " + accessToken };
        };
        return DataService;
    }());
    exports.DataService = DataService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGF0YS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUdBO1FBRUkscUJBQThCLFVBQXNCLEVBQVUsV0FBd0I7WUFBeEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtZQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBQ2xGLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQy9CLENBQUM7UUFFUyx5QkFBRyxHQUFiLFVBQXVCLFFBQWdCLEVBQUUsV0FBb0I7WUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbEUsQ0FBQztRQUVTLDBCQUFJLEdBQWQsVUFBd0IsUUFBZ0IsRUFBRSxJQUFTLEVBQUUsV0FBb0I7WUFDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUVTLHlCQUFHLEdBQWIsVUFBdUIsUUFBZ0IsRUFBRSxJQUFTLEVBQUUsV0FBb0I7WUFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbEUsQ0FBQztRQUVTLDRCQUFNLEdBQWhCLFVBQTBCLFFBQWdCLEVBQUUsV0FBb0I7WUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDckUsQ0FBQztRQUVPLG1DQUFhLEdBQXJCLFVBQStCLE1BQWMsRUFBRSxRQUFnQixFQUFFLElBQVMsRUFBRSxXQUFvQjtZQUM1RixJQUFJLFdBQVcsR0FBaUI7Z0JBQzVCLE1BQU0sRUFBRSxNQUFNO2FBQ2pCLENBQUM7WUFFRixFQUFFLENBQUEsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO2dCQUNiLFdBQVcsQ0FBQyxJQUFJLEdBQUcsMkJBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVsQyxFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUM7Z0JBQ1gsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUUzRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBVSxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBTyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQ25ILENBQUM7UUFFTyx5Q0FBbUIsR0FBM0I7WUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQzVCLE1BQU0sQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtZQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFTywrQ0FBeUIsR0FBakM7WUFDSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxFQUFFLGVBQWUsRUFBRSxZQUFVLFdBQWEsRUFBRSxDQUFDO1FBQ3hELENBQUM7UUFDTCxrQkFBQztJQUFELENBOUNBLEFBOENDLElBQUE7SUE5Q3FCLGtDQUFXIiwiZmlsZSI6ImNvcmUvZGF0YS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50LCBqc29ufSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC1zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRhU2VydmljZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyZUh0dHBDbGllbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0PFRSZXN1bHQ+KGVuZHBvaW50OiBzdHJpbmcsIGlzUHJvdGVjdGVkOiBib29sZWFuKSA6IFByb21pc2U8VFJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QoJ0dFVCcsIGVuZHBvaW50LCBudWxsLCBpc1Byb3RlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBvc3Q8VFJlc3VsdD4oZW5kcG9pbnQ6IHN0cmluZywgZGF0YTogYW55LCBpc1Byb3RlY3RlZDogYm9vbGVhbikgOiBQcm9taXNlPFRSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXF1ZXN0KCdQT1NUJywgZW5kcG9pbnQsIGRhdGEsIGlzUHJvdGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcHV0PFRSZXN1bHQ+KGVuZHBvaW50OiBzdHJpbmcsIGRhdGE6IGFueSwgaXNQcm90ZWN0ZWQ6IGJvb2xlYW4pIDogUHJvbWlzZTxUUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdCgnUFVUJywgZW5kcG9pbnQsIGRhdGEsIGlzUHJvdGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGVsZXRlPFRSZXN1bHQ+KGVuZHBvaW50OiBzdHJpbmcsIGlzUHJvdGVjdGVkOiBib29sZWFuKSA6IFByb21pc2U8VFJlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QoJ0RFTEVURScsIGVuZHBvaW50LCBudWxsLCBpc1Byb3RlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0PFRSZXN1bHQ+KG1ldGhvZDogc3RyaW5nLCBlbmRwb2ludDogc3RyaW5nLCBkYXRhOiBhbnksIGlzUHJvdGVjdGVkOiBib29sZWFuKSA6IFByb21pc2U8VFJlc3VsdD4ge1xyXG4gICAgICAgIGxldCByZXF1ZXN0SW5pdCA6IFJlcXVlc3RJbml0ID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKGRhdGEgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHJlcXVlc3RJbml0LmJvZHkgPSBqc29uKGRhdGEpO1xyXG5cclxuICAgICAgICBpZihpc1Byb3RlY3RlZClcclxuICAgICAgICAgICAgcmVxdWVzdEluaXQuaGVhZGVycyA9IHRoaXMuY3JlYXRlQXV0aG9yaXphdGlvbkhlYWRlcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmZldGNoKGVuZHBvaW50LCByZXF1ZXN0SW5pdCkudGhlbjxUUmVzdWx0PihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4ge30pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyZUh0dHBDbGllbnQoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50LmNvbmZpZ3VyZShjb25maWcgPT4ge1xyXG4gICAgICAgICAgICBjb25maWcud2l0aEJhc2VVcmwoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQXV0aG9yaXphdGlvbkhlYWRlcigpIDogYW55IHtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEFjY2Vzc1Rva2VuKCk7XHJcbiAgICAgICAgcmV0dXJuIHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCB9O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('core/date-format-value-converter',["require", "exports", "moment"], function (require, exports, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateFormatValueConverter = (function () {
        function DateFormatValueConverter() {
        }
        DateFormatValueConverter.prototype.toView = function (value, format) {
            return moment(value).format(format);
        };
        return DateFormatValueConverter;
    }());
    exports.DateFormatValueConverter = DateFormatValueConverter;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGF0ZS1mb3JtYXQtdmFsdWUtY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBQUE7UUFJQSxDQUFDO1FBSEcseUNBQU0sR0FBTixVQUFPLEtBQUssRUFBRSxNQUFNO1lBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDTCwrQkFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksNERBQXdCIiwiZmlsZSI6ImNvcmUvZGF0ZS1mb3JtYXQtdmFsdWUtY29udmVydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdFZhbHVlQ29udmVydGVyIHtcclxuICAgIHRvVmlldyh2YWx1ZSwgZm9ybWF0KSB7XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('core/identity-service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IdentityService = (function () {
        function IdentityService() {
        }
        Object.defineProperty(IdentityService.prototype, "isUserLogged", {
            get: function () { return this.identity ? true : false; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(IdentityService.prototype, "userIdentity", {
            get: function () {
                return this.identity;
            },
            enumerable: true,
            configurable: true
        });
        ;
        IdentityService.prototype.setUserIdentity = function (userIdentity) {
            this.identity = userIdentity;
        };
        return IdentityService;
    }());
    exports.IdentityService = IdentityService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvaWRlbnRpdHktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBYUEsQ0FBQztRQVhHLHNCQUFXLHlDQUFZO2lCQUF2QixjQUE0QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLEdBQUcsS0FBSyxDQUFBLENBQUEsQ0FBQzs7O1dBQUE7UUFBQSxDQUFDO1FBRWhFLHNCQUFJLHlDQUFZO2lCQUFoQjtnQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN6QixDQUFDOzs7V0FBQTtRQUFBLENBQUM7UUFJRix5Q0FBZSxHQUFmLFVBQWdCLFlBQStCO1lBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLENBQUM7UUFDTCxzQkFBQztJQUFELENBYkEsQUFhQyxJQUFBO0lBYlksMENBQWUiLCJmaWxlIjoiY29yZS9pZGVudGl0eS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVc2VySWRlbnRpdHlNb2RlbH0gZnJvbSAnLi4vdXNlcnMvbW9kZWxzL3VzZXItaWRlbnRpdHktbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIElkZW50aXR5U2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIGdldCBpc1VzZXJMb2dnZWQoKSB7IHJldHVybiB0aGlzLmlkZW50aXR5PyB0cnVlIDogZmFsc2V9O1xyXG5cclxuICAgIGdldCB1c2VySWRlbnRpdHkoKTogVXNlcklkZW50aXR5TW9kZWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkZW50aXR5O1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGlkZW50aXR5OiBVc2VySWRlbnRpdHlNb2RlbDsgICAgXHJcblxyXG4gICAgc2V0VXNlcklkZW50aXR5KHVzZXJJZGVudGl0eTogVXNlcklkZW50aXR5TW9kZWwpIDogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pZGVudGl0eSA9IHVzZXJJZGVudGl0eTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('core/routing-authorize-step',["require", "exports", "aurelia-router"], function (require, exports, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RoutingAuthorizeStep = (function () {
        function RoutingAuthorizeStep(userIdentity) {
            this.userIdentity = userIdentity;
        }
        RoutingAuthorizeStep.prototype.run = function (navigationInstruction, next) {
            var _this = this;
            var requiredRoles = navigationInstruction
                .getAllInstructions()
                .map(function (i) { return i.config.settings.roles; })[0];
            var isUserInRole = requiredRoles ?
                requiredRoles.some(function (r) { return r === _this.userIdentity.role; }) : true;
            return isUserInRole ? next() : next.cancel(new aurelia_router_1.Redirect('users/login'));
        };
        return RoutingAuthorizeStep;
    }());
    exports.RoutingAuthorizeStep = RoutingAuthorizeStep;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvcm91dGluZy1hdXRob3JpemUtc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUlJLDhCQUFZLFlBQStCO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLENBQUM7UUFFRCxrQ0FBRyxHQUFILFVBQUkscUJBQTRDLEVBQUUsSUFBVTtZQUE1RCxpQkFTQztZQVJHLElBQUksYUFBYSxHQUFHLHFCQUFxQjtpQkFDcEMsa0JBQWtCLEVBQUU7aUJBQ3BCLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTFDLElBQUksWUFBWSxHQUFHLGFBQWE7Z0JBQzVCLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQTVCLENBQTRCLENBQUMsR0FBRyxJQUFJLENBQUM7WUFFakUsTUFBTSxDQUFDLFlBQVksR0FBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUkseUJBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzNFLENBQUM7UUFDTCwyQkFBQztJQUFELENBbEJBLEFBa0JDLElBQUE7SUFsQlksb0RBQW9CIiwiZmlsZSI6ImNvcmUvcm91dGluZy1hdXRob3JpemUtc3RlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmF2aWdhdGlvbkluc3RydWN0aW9uLCBOZXh0LCBSZWRpcmVjdH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQge1VzZXJJZGVudGl0eU1vZGVsfSBmcm9tICcuLi91c2Vycy9tb2RlbHMvdXNlci1pZGVudGl0eS1tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUm91dGluZ0F1dGhvcml6ZVN0ZXAge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlcklkZW50aXR5OiBVc2VySWRlbnRpdHlNb2RlbFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVzZXJJZGVudGl0eTogVXNlcklkZW50aXR5TW9kZWwpIHtcclxuICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IHVzZXJJZGVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICBydW4obmF2aWdhdGlvbkluc3RydWN0aW9uOiBOYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24sIG5leHQ6IE5leHQpIDogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgcmVxdWlyZWRSb2xlcyA9IG5hdmlnYXRpb25JbnN0cnVjdGlvblxyXG4gICAgICAgICAgICAuZ2V0QWxsSW5zdHJ1Y3Rpb25zKClcclxuICAgICAgICAgICAgLm1hcChpID0+IGkuY29uZmlnLnNldHRpbmdzLnJvbGVzKVswXTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgaXNVc2VySW5Sb2xlID0gcmVxdWlyZWRSb2xlcz8gXHJcbiAgICAgICAgICAgIHJlcXVpcmVkUm9sZXMuc29tZShyID0+IHIgPT09IHRoaXMudXNlcklkZW50aXR5LnJvbGUpIDogdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzVXNlckluUm9sZT8gbmV4dCgpIDogbmV4dC5jYW5jZWwobmV3IFJlZGlyZWN0KCd1c2Vycy9sb2dpbicpKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('admins/config/admins-routing',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AdminsRouting = (function () {
        function AdminsRouting() {
        }
        AdminsRouting.prototype.configureRouter = function (config) {
            config.title = 'Admins';
            config.map([
                { route: 'events', moduleId: '../view-models/admin-events' },
                { route: ['events/create', 'events/:id/update'], moduleId: '../view-models/admin-event-form' }
            ]);
        };
        return AdminsRouting;
    }());
    exports.AdminsRouting = AdminsRouting;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWlucy9jb25maWcvYWRtaW5zLXJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFBQTtRQVVBLENBQUM7UUFSRyx1Q0FBZSxHQUFmLFVBQWdCLE1BQTJCO1lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBRXhCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSw2QkFBNkIsRUFBRTtnQkFDM0QsRUFBQyxLQUFLLEVBQUUsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUMsRUFBRyxRQUFRLEVBQUUsaUNBQWlDLEVBQUM7YUFDaEcsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSxzQ0FBYSIsImZpbGUiOiJhZG1pbnMvY29uZmlnL2FkbWlucy1yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQWRtaW5zUm91dGluZyB7XHJcblxyXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIGNvbmZpZy50aXRsZSA9ICdBZG1pbnMnO1xyXG5cclxuICAgICAgICBjb25maWcubWFwKFtcclxuICAgICAgICAgICAge3JvdXRlOiAnZXZlbnRzJywgbW9kdWxlSWQ6ICcuLi92aWV3LW1vZGVscy9hZG1pbi1ldmVudHMnIH0sXHJcbiAgICAgICAgICAgIHtyb3V0ZTogWydldmVudHMvY3JlYXRlJywgJ2V2ZW50cy86aWQvdXBkYXRlJ10gLCBtb2R1bGVJZDogJy4uL3ZpZXctbW9kZWxzL2FkbWluLWV2ZW50LWZvcm0nfSAgICAgICAgICAgIFxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('admins/view-models/admin-event-form',["require", "exports", "aurelia-dependency-injection", "aurelia-router", "../../events/services/events-service", "../../events/models/create-event-model", "toastr"], function (require, exports, aurelia_dependency_injection_1, aurelia_router_1, events_service_1, create_event_model_1, toastr) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AdminEventFormViewModel = (function () {
        function AdminEventFormViewModel(eventsService, router) {
            this.eventsService = eventsService;
            this.router = router;
        }
        AdminEventFormViewModel.prototype.activate = function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.eventToUpdateId = params.id;
                            this.isCreateMode = this.eventToUpdateId ? false : true;
                            if (!this.isCreateMode) return [3 /*break*/, 1];
                            _a = this.setCreateMode();
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this.setEditMode()];
                        case 2:
                            _a = _b.sent();
                            _b.label = 3;
                        case 3:
                            _a;
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminEventFormViewModel.prototype.createEvent = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.eventsService.create(this.model)];
                        case 1:
                            _a.sent();
                            this.redirectToAdminEvents();
                            toastr.success('Event created!');
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminEventFormViewModel.prototype.editEvent = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.eventsService.update(this.eventToUpdateId, this.model)];
                        case 1:
                            _a.sent();
                            this.redirectToAdminEvents();
                            toastr.success('Event edited!');
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminEventFormViewModel.prototype.redirectToAdminEvents = function () {
            this.router.navigate('#/admins/events');
        };
        AdminEventFormViewModel.prototype.setCreateMode = function () {
            this.model = new create_event_model_1.CreateEventModel();
        };
        AdminEventFormViewModel.prototype.setEditMode = function () {
            return __awaiter(this, void 0, void 0, function () {
                var eventToUpdate, updateModel;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.eventsService.getEvent(this.eventToUpdateId)];
                        case 1:
                            eventToUpdate = _a.sent();
                            updateModel = {
                                name: eventToUpdate.name,
                                description: eventToUpdate.description
                            };
                            this.model = updateModel;
                            return [2 /*return*/];
                    }
                });
            });
        };
        return AdminEventFormViewModel;
    }());
    AdminEventFormViewModel = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [events_service_1.EventsService, aurelia_router_1.Router])
    ], AdminEventFormViewModel);
    exports.AdminEventFormViewModel = AdminEventFormViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWlucy92aWV3LW1vZGVscy9hZG1pbi1ldmVudC1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUUEsSUFBYSx1QkFBdUI7UUFNaEMsaUNBQW9CLGFBQTRCLEVBQVUsTUFBYztZQUFwRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtZQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBRyxDQUFDO1FBRXRFLDBDQUFRLEdBQWQsVUFBZSxNQUFXOzs7Ozs7NEJBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQzs0QkFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFFLEtBQUssR0FBRyxJQUFJLENBQUM7aUNBQ3ZELElBQUksQ0FBQyxZQUFZLEVBQWpCLHdCQUFpQjs0QkFBRSxLQUFBLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTs7Z0NBQUcscUJBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFBOzs0QkFBeEIsS0FBQSxTQUF3QixDQUFBOzs7NEJBQWxFLEdBQW1FOzs7OztTQUN0RTtRQUVLLDZDQUFXLEdBQWpCOzs7O2dDQUNJLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUE7OzRCQUE5RCxTQUE4RCxDQUFDOzRCQUMvRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs0QkFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzs7OztTQUNwQztRQUVLLDJDQUFTLEdBQWY7Ozs7Z0NBQ0kscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBcUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFBOzs0QkFBcEYsU0FBb0YsQ0FBQzs0QkFDckYsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7NEJBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7O1NBQ25DO1FBRUQsdURBQXFCLEdBQXJCO1lBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRU8sK0NBQWEsR0FBckI7WUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUkscUNBQWdCLEVBQUUsQ0FBQztRQUN4QyxDQUFDO1FBRWEsNkNBQVcsR0FBekI7O21DQUdRLFdBQVc7OztnQ0FGSyxxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUE7OzRDQUF2RCxTQUF1RDswQ0FFdkM7Z0NBQ2hDLElBQUksRUFBRSxhQUFhLENBQUMsSUFBSTtnQ0FDeEIsV0FBVyxFQUFFLGFBQWEsQ0FBQyxXQUFXOzZCQUN6Qzs0QkFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQzs7Ozs7U0FDNUI7UUFDTCw4QkFBQztJQUFELENBNUNBLEFBNENDLElBQUE7SUE1Q1ksdUJBQXVCO1FBRG5DLHlDQUFVLEVBQUU7eUNBTzBCLDhCQUFhLEVBQWtCLHVCQUFNO09BTi9ELHVCQUF1QixDQTRDbkM7SUE1Q1ksMERBQXVCIiwiZmlsZSI6ImFkbWlucy92aWV3LW1vZGVscy9hZG1pbi1ldmVudC1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHtFdmVudHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9ldmVudHMvc2VydmljZXMvZXZlbnRzLXNlcnZpY2UnO1xyXG5pbXBvcnQge0NyZWF0ZUV2ZW50TW9kZWx9IGZyb20gJy4uLy4uL2V2ZW50cy9tb2RlbHMvY3JlYXRlLWV2ZW50LW1vZGVsJztcclxuaW1wb3J0IHtVcGRhdGVFdmVudE1vZGVsfSBmcm9tICcuLi8uLi9ldmVudHMvbW9kZWxzL3VwZGF0ZS1ldmVudC1tb2RlbCc7XHJcbmltcG9ydCAqIGFzIHRvYXN0ciBmcm9tICd0b2FzdHInO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQWRtaW5FdmVudEZvcm1WaWV3TW9kZWwge1xyXG5cclxuICAgIHByaXZhdGUgZXZlbnRUb1VwZGF0ZUlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGlzQ3JlYXRlTW9kZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgbW9kZWw6IENyZWF0ZUV2ZW50TW9kZWwgfCBVcGRhdGVFdmVudE1vZGVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRzU2VydmljZTogRXZlbnRzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgICBhc3luYyBhY3RpdmF0ZShwYXJhbXM6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRUb1VwZGF0ZUlkID0gcGFyYW1zLmlkO1xyXG4gICAgICAgIHRoaXMuaXNDcmVhdGVNb2RlID0gdGhpcy5ldmVudFRvVXBkYXRlSWQ/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzQ3JlYXRlTW9kZT8gdGhpcy5zZXRDcmVhdGVNb2RlKCkgOiBhd2FpdCB0aGlzLnNldEVkaXRNb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY3JlYXRlRXZlbnQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ldmVudHNTZXJ2aWNlLmNyZWF0ZSg8Q3JlYXRlRXZlbnRNb2RlbD4gdGhpcy5tb2RlbCk7XHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdFRvQWRtaW5FdmVudHMoKTtcclxuICAgICAgICB0b2FzdHIuc3VjY2VzcygnRXZlbnQgY3JlYXRlZCEnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBlZGl0RXZlbnQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ldmVudHNTZXJ2aWNlLnVwZGF0ZSh0aGlzLmV2ZW50VG9VcGRhdGVJZCwgPFVwZGF0ZUV2ZW50TW9kZWw+IHRoaXMubW9kZWwpO1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RUb0FkbWluRXZlbnRzKCk7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ0V2ZW50IGVkaXRlZCEnKTtcclxuICAgIH1cclxuXHJcbiAgICByZWRpcmVjdFRvQWRtaW5FdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoJyMvYWRtaW5zL2V2ZW50cycpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Q3JlYXRlTW9kZSgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IENyZWF0ZUV2ZW50TW9kZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNldEVkaXRNb2RlKCkge1xyXG4gICAgICAgIGxldCBldmVudFRvVXBkYXRlID0gYXdhaXQgdGhpcy5ldmVudHNTZXJ2aWNlLmdldEV2ZW50KHRoaXMuZXZlbnRUb1VwZGF0ZUlkKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdXBkYXRlTW9kZWw6IFVwZGF0ZUV2ZW50TW9kZWwgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGV2ZW50VG9VcGRhdGUubmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50VG9VcGRhdGUuZGVzY3JpcHRpb25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsID0gdXBkYXRlTW9kZWw7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('admins/view-models/admin-events',["require", "exports", "aurelia-dependency-injection", "aurelia-router", "../../events/services/events-service", "toastr"], function (require, exports, aurelia_dependency_injection_1, aurelia_router_1, events_service_1, toastr) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AdminEventsViewModel = (function () {
        function AdminEventsViewModel(eventsService, router) {
            this.eventsService = eventsService;
            this.router = router;
            this.events = [];
        }
        AdminEventsViewModel.prototype.activate = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAdminEvents()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminEventsViewModel.prototype.deleteEvent = function (eventId, index) {
            return __awaiter(this, void 0, void 0, function () {
                var confirm;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            confirm = window.confirm('Do you want to remove this event?');
                            if (!confirm)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.eventsService.delete(eventId)];
                        case 1:
                            _a.sent();
                            this.removeEventFromEvents(index);
                            toastr.success('Event deleted!');
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminEventsViewModel.prototype.redirectToAdminEventForm = function (eventId) {
            var url = eventId ? "#/admins/events/" + eventId + "/update" : '#/admins/events/create';
            this.router.navigate(url);
        };
        AdminEventsViewModel.prototype.getAdminEvents = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.eventsService.browse('')];
                        case 1:
                            _a.events = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminEventsViewModel.prototype.removeEventFromEvents = function (index) {
            this.events.splice(index, 1);
        };
        return AdminEventsViewModel;
    }());
    AdminEventsViewModel = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [events_service_1.EventsService, aurelia_router_1.Router])
    ], AdminEventsViewModel);
    exports.AdminEventsViewModel = AdminEventsViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWlucy92aWV3LW1vZGVscy9hZG1pbi1ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPQSxJQUFhLG9CQUFvQjtRQUk3Qiw4QkFBb0IsYUFBNEIsRUFBVSxNQUFjO1lBQXBELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUNwRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNyQixDQUFDO1FBRUssdUNBQVEsR0FBZDs7OztnQ0FDSSxxQkFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUE7OzRCQUEzQixTQUEyQixDQUFDOzs7OztTQUMvQjtRQUVLLDBDQUFXLEdBQWpCLFVBQWtCLE9BQWUsRUFBRSxLQUFhOztvQkFDeEMsT0FBTzs7OztzQ0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLG1DQUFtQyxDQUFDOzRCQUNqRSxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQ0FBQyxNQUFNLGdCQUFDOzRCQUNwQixxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQTs7NEJBQXhDLFNBQXdDLENBQUM7NEJBQ3pDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzs7OztTQUNwQztRQUVELHVEQUF3QixHQUF4QixVQUF5QixPQUFlO1lBQ3BDLElBQUksR0FBRyxHQUFHLE9BQU8sR0FBRSxxQkFBbUIsT0FBTyxZQUFTLEdBQUcsd0JBQXdCLENBQUM7WUFDbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUVhLDZDQUFjLEdBQTVCOzs7Ozs7NEJBQ0ksS0FBQSxJQUFJLENBQUE7NEJBQVUscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUE7OzRCQUFqRCxHQUFLLE1BQU0sR0FBRyxTQUFtQyxDQUFDOzs7OztTQUNyRDtRQUVPLG9EQUFxQixHQUE3QixVQUE4QixLQUFhO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQ0wsMkJBQUM7SUFBRCxDQWhDQSxBQWdDQyxJQUFBO0lBaENZLG9CQUFvQjtRQURoQyx5Q0FBVSxFQUFFO3lDQUswQiw4QkFBYSxFQUFrQix1QkFBTTtPQUovRCxvQkFBb0IsQ0FnQ2hDO0lBaENZLG9EQUFvQiIsImZpbGUiOiJhZG1pbnMvdmlldy1tb2RlbHMvYWRtaW4tZXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHtFdmVudHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9ldmVudHMvc2VydmljZXMvZXZlbnRzLXNlcnZpY2UnO1xyXG5pbXBvcnQge0V2ZW50TW9kZWx9IGZyb20gJy4uLy4uL2V2ZW50cy9tb2RlbHMvZXZlbnQtbW9kZWwnO1xyXG5pbXBvcnQgKiBhcyB0b2FzdHIgZnJvbSAndG9hc3RyJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEFkbWluRXZlbnRzVmlld01vZGVsIHtcclxuXHJcbiAgICBwcml2YXRlIGV2ZW50czogRXZlbnRNb2RlbFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRzU2VydmljZTogRXZlbnRzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gW107ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0QWRtaW5FdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkZWxldGVFdmVudChldmVudElkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY29uZmlybSA9IHdpbmRvdy5jb25maXJtKCdEbyB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBldmVudD8nKTtcclxuICAgICAgICBpZighY29uZmlybSkgcmV0dXJuO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZXZlbnRzU2VydmljZS5kZWxldGUoZXZlbnRJZCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudEZyb21FdmVudHMoaW5kZXgpO1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKCdFdmVudCBkZWxldGVkIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZGlyZWN0VG9BZG1pbkV2ZW50Rm9ybShldmVudElkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdXJsID0gZXZlbnRJZD8gYCMvYWRtaW5zL2V2ZW50cy8ke2V2ZW50SWR9L3VwZGF0ZWAgOiAnIy9hZG1pbnMvZXZlbnRzL2NyZWF0ZSc7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGdldEFkbWluRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gYXdhaXQgdGhpcy5ldmVudHNTZXJ2aWNlLmJyb3dzZSgnJyk7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlRXZlbnRGcm9tRXZlbnRzKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('events/config/events-routing',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventsRouting = (function () {
        function EventsRouting() {
        }
        EventsRouting.prototype.configureRouter = function (config) {
            config.title = 'Events';
            config.map([
                { route: ':id', moduleId: '../view-models/event-details' }
            ]);
        };
        return EventsRouting;
    }());
    exports.EventsRouting = EventsRouting;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9jb25maWcvZXZlbnRzLXJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFBQTtRQU9BLENBQUM7UUFORyx1Q0FBZSxHQUFmLFVBQWdCLE1BQTJCO1lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSw4QkFBOEIsRUFBQzthQUMzRCxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQVBBLEFBT0MsSUFBQTtJQVBZLHNDQUFhIiwiZmlsZSI6ImV2ZW50cy9jb25maWcvZXZlbnRzLXJvdXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudHNSb3V0aW5nIHtcclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBjb25maWcudGl0bGUgPSAnRXZlbnRzJztcclxuICAgICAgICBjb25maWcubWFwKFtcclxuICAgICAgICAgICAge3JvdXRlOiAnOmlkJywgbW9kdWxlSWQ6ICcuLi92aWV3LW1vZGVscy9ldmVudC1kZXRhaWxzJ31cclxuICAgICAgICBdKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('events/models/create-event-model',["require", "exports", "./update-event-model"], function (require, exports, update_event_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CreateEventModel = (function (_super) {
        __extends(CreateEventModel, _super);
        function CreateEventModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CreateEventModel;
    }(update_event_model_1.UpdateEventModel));
    exports.CreateEventModel = CreateEventModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9tb2RlbHMvY3JlYXRlLWV2ZW50LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFFQTtRQUFzQyxvQ0FBZ0I7UUFBdEQ7O1FBS0EsQ0FBQztRQUFELHVCQUFDO0lBQUQsQ0FMQSxBQUtDLENBTHFDLHFDQUFnQixHQUtyRDtJQUxZLDRDQUFnQiIsImZpbGUiOiJldmVudHMvbW9kZWxzL2NyZWF0ZS1ldmVudC1tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VXBkYXRlRXZlbnRNb2RlbH0gZnJvbSAnLi91cGRhdGUtZXZlbnQtbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0ZUV2ZW50TW9kZWwgZXh0ZW5kcyBVcGRhdGVFdmVudE1vZGVsIHtcclxuICAgIHN0YXJ0RGF0ZTogRGF0ZTtcclxuICAgIGVuZERhdGU6IERhdGU7XHJcbiAgICB0aWNrZXRzOiBudW1iZXI7XHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('events/models/event-details-model',["require", "exports", "./event-model"], function (require, exports, event_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventDetailsModel = (function (_super) {
        __extends(EventDetailsModel, _super);
        function EventDetailsModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EventDetailsModel;
    }(event_model_1.EventModel));
    exports.EventDetailsModel = EventDetailsModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9tb2RlbHMvZXZlbnQtZGV0YWlscy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBR0E7UUFBdUMscUNBQVU7UUFBakQ7O1FBRUEsQ0FBQztRQUFELHdCQUFDO0lBQUQsQ0FGQSxBQUVDLENBRnNDLHdCQUFVLEdBRWhEO0lBRlksOENBQWlCIiwiZmlsZSI6ImV2ZW50cy9tb2RlbHMvZXZlbnQtZGV0YWlscy1tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRNb2RlbH0gZnJvbSAnLi9ldmVudC1tb2RlbCc7XHJcbmltcG9ydCB7RXZlbnRUaWNrZXRNb2RlbH0gZnJvbSAnLi9ldmVudC10aWNrZXQtbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50RGV0YWlsc01vZGVsIGV4dGVuZHMgRXZlbnRNb2RlbCB7XHJcbiAgICB0aWNrZXRzOiBFdmVudFRpY2tldE1vZGVsW107XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('events/models/event-model',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventModel = (function () {
        function EventModel() {
        }
        return EventModel;
    }());
    exports.EventModel = EventModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9tb2RlbHMvZXZlbnQtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQVVBLENBQUM7UUFBRCxpQkFBQztJQUFELENBVkEsQUFVQyxJQUFBO0lBVlksZ0NBQVUiLCJmaWxlIjoiZXZlbnRzL21vZGVscy9ldmVudC1tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFdmVudE1vZGVsIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgc3RhcnREYXRlOiBEYXRlO1xyXG4gICAgZW5kRGF0ZTogRGF0ZTtcclxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcclxuICAgIHRpY2tldHNDb3VudDogbnVtYmVyO1xyXG4gICAgcHVyY2hhc2VkVGlja2V0c0NvdW50OiBudW1iZXI7XHJcbiAgICBhdmFpbGFibGVUaWNrZXRzQ291bnQ6IG51bWJlcjtcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('events/models/event-ticket-model',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventTicketModel = (function () {
        function EventTicketModel() {
        }
        return EventTicketModel;
    }());
    exports.EventTicketModel = EventTicketModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9tb2RlbHMvZXZlbnQtdGlja2V0LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFPQSxDQUFDO1FBQUQsdUJBQUM7SUFBRCxDQVBBLEFBT0MsSUFBQTtJQVBZLDRDQUFnQiIsImZpbGUiOiJldmVudHMvbW9kZWxzL2V2ZW50LXRpY2tldC1tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFdmVudFRpY2tldE1vZGVsIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBzZWF0aW5nOiBudW1iZXI7XHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBwdXJjaGFzZWRBdDogRGF0ZTtcclxuICAgIHB1cmNoYXNlZDogYm9vbGVhbjtcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('events/models/update-event-model',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UpdateEventModel = (function () {
        function UpdateEventModel() {
        }
        return UpdateEventModel;
    }());
    exports.UpdateEventModel = UpdateEventModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9tb2RlbHMvdXBkYXRlLWV2ZW50LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFHQSxDQUFDO1FBQUQsdUJBQUM7SUFBRCxDQUhBLEFBR0MsSUFBQTtJQUhZLDRDQUFnQiIsImZpbGUiOiJldmVudHMvbW9kZWxzL3VwZGF0ZS1ldmVudC1tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVcGRhdGVFdmVudE1vZGVsIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('events/services/event-tickets-service',["require", "exports", "aurelia-dependency-injection", "aurelia-fetch-client", "../../core/auth-service", "../../core/data-service"], function (require, exports, aurelia_dependency_injection_1, aurelia_fetch_client_1, auth_service_1, data_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventTicketsService = (function (_super) {
        __extends(EventTicketsService, _super);
        function EventTicketsService(httpClient, authService) {
            return _super.call(this, httpClient, authService) || this;
        }
        EventTicketsService.prototype.purchase = function (eventId, amount) {
            var url = "events/" + eventId + "/tickets/purchase/" + amount;
            return _super.prototype.post.call(this, url, null, true);
        };
        return EventTicketsService;
    }(data_service_1.DataService));
    EventTicketsService = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient, auth_service_1.AuthService])
    ], EventTicketsService);
    exports.EventTicketsService = EventTicketsService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9zZXJ2aWNlcy9ldmVudC10aWNrZXRzLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1BLElBQWEsbUJBQW1CO1FBQVMsdUNBQVc7UUFFaEQsNkJBQVksVUFBc0IsRUFBRSxXQUF3QjttQkFDeEQsa0JBQU0sVUFBVSxFQUFFLFdBQVcsQ0FBQztRQUNsQyxDQUFDO1FBRUQsc0NBQVEsR0FBUixVQUFTLE9BQWUsRUFBRSxNQUFjO1lBQ3BDLElBQUksR0FBRyxHQUFHLFlBQVUsT0FBTywwQkFBcUIsTUFBUSxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxpQkFBTSxJQUFJLFlBQU0sR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQ0wsMEJBQUM7SUFBRCxDQVZBLEFBVUMsQ0FWd0MsMEJBQVcsR0FVbkQ7SUFWWSxtQkFBbUI7UUFEL0IseUNBQVUsRUFBRTt5Q0FHZSxpQ0FBVSxFQUFlLDBCQUFXO09BRm5ELG1CQUFtQixDQVUvQjtJQVZZLGtEQUFtQiIsImZpbGUiOiJldmVudHMvc2VydmljZXMvZXZlbnQtdGlja2V0cy1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL2NvcmUvYXV0aC1zZXJ2aWNlJztcclxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSAnLi4vLi4vY29yZS9kYXRhLXNlcnZpY2UnO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgRXZlbnRUaWNrZXRzU2VydmljZSBleHRlbmRzIERhdGFTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihodHRwQ2xpZW50LCBhdXRoU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVyY2hhc2UoZXZlbnRJZDogc3RyaW5nLCBhbW91bnQ6IG51bWJlcikgOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSBgZXZlbnRzLyR7ZXZlbnRJZH0vdGlja2V0cy9wdXJjaGFzZS8ke2Ftb3VudH1gO1xyXG4gICAgICAgIHJldHVybiBzdXBlci5wb3N0PGFueT4odXJsLCBudWxsLCB0cnVlKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('events/services/events-service',["require", "exports", "aurelia-dependency-injection", "aurelia-fetch-client", "../../core/auth-service", "../../core/data-service"], function (require, exports, aurelia_dependency_injection_1, aurelia_fetch_client_1, auth_service_1, data_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventsService = (function (_super) {
        __extends(EventsService, _super);
        function EventsService(httpClient, authService) {
            return _super.call(this, httpClient, authService) || this;
        }
        EventsService.prototype.browse = function (name) {
            var url = "events?name=" + name;
            return _super.prototype.get.call(this, url, false);
        };
        EventsService.prototype.getEvent = function (eventId) {
            var url = "events/" + eventId;
            return _super.prototype.get.call(this, url, true);
        };
        EventsService.prototype.create = function (model) {
            var url = 'events';
            return _super.prototype.post.call(this, url, model, true);
        };
        EventsService.prototype.update = function (eventId, model) {
            var url = "events/" + eventId;
            return _super.prototype.put.call(this, url, model, true);
        };
        EventsService.prototype.delete = function (eventId) {
            var url = "events/" + eventId;
            return _super.prototype.delete.call(this, url, true);
        };
        return EventsService;
    }(data_service_1.DataService));
    EventsService = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient, auth_service_1.AuthService])
    ], EventsService);
    exports.EventsService = EventsService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9zZXJ2aWNlcy9ldmVudHMtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBVUEsSUFBYSxhQUFhO1FBQVMsaUNBQVc7UUFFMUMsdUJBQVksVUFBc0IsRUFBRSxXQUF3QjttQkFDeEQsa0JBQU0sVUFBVSxFQUFFLFdBQVcsQ0FBQztRQUNsQyxDQUFDO1FBRUQsOEJBQU0sR0FBTixVQUFPLElBQVk7WUFDZixJQUFJLEdBQUcsR0FBRyxpQkFBZSxJQUFNLENBQUM7WUFDaEMsTUFBTSxDQUFDLGlCQUFNLEdBQUcsWUFBZSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVELGdDQUFRLEdBQVIsVUFBUyxPQUFlO1lBQ3BCLElBQUksR0FBRyxHQUFHLFlBQVUsT0FBUyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxpQkFBTSxHQUFHLFlBQW9CLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsOEJBQU0sR0FBTixVQUFPLEtBQXVCO1lBQzFCLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQztZQUNuQixNQUFNLENBQUMsaUJBQU0sSUFBSSxZQUFNLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVELDhCQUFNLEdBQU4sVUFBTyxPQUFlLEVBQUUsS0FBdUI7WUFDM0MsSUFBSSxHQUFHLEdBQUcsWUFBVSxPQUFTLENBQUM7WUFDOUIsTUFBTSxDQUFDLGlCQUFNLEdBQUcsWUFBTSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFRCw4QkFBTSxHQUFOLFVBQU8sT0FBZTtZQUNsQixJQUFJLEdBQUcsR0FBRyxZQUFVLE9BQVMsQ0FBQztZQUM5QixNQUFNLENBQUMsaUJBQU0sTUFBTSxZQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQTlCQSxBQThCQyxDQTlCa0MsMEJBQVcsR0E4QjdDO0lBOUJZLGFBQWE7UUFEekIseUNBQVUsRUFBRTt5Q0FHZSxpQ0FBVSxFQUFlLDBCQUFXO09BRm5ELGFBQWEsQ0E4QnpCO0lBOUJZLHNDQUFhIiwiZmlsZSI6ImV2ZW50cy9zZXJ2aWNlcy9ldmVudHMtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9jb3JlL2F1dGgtc2VydmljZSc7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4uLy4uL2NvcmUvZGF0YS1zZXJ2aWNlJztcclxuaW1wb3J0IHtFdmVudE1vZGVsfSBmcm9tICcuLi9tb2RlbHMvZXZlbnQtbW9kZWwnO1xyXG5pbXBvcnQge0NyZWF0ZUV2ZW50TW9kZWx9IGZyb20gJy4uL21vZGVscy9jcmVhdGUtZXZlbnQtbW9kZWwnO1xyXG5pbXBvcnQge1VwZGF0ZUV2ZW50TW9kZWx9IGZyb20gJy4uL21vZGVscy91cGRhdGUtZXZlbnQtbW9kZWwnO1xyXG5pbXBvcnQge0V2ZW50RGV0YWlsc01vZGVsfSBmcm9tICcuLi9tb2RlbHMvZXZlbnQtZGV0YWlscy1tb2RlbCc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBFdmVudHNTZXJ2aWNlIGV4dGVuZHMgRGF0YVNlcnZpY2V7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudDogSHR0cENsaWVudCwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoaHR0cENsaWVudCwgYXV0aFNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGJyb3dzZShuYW1lOiBzdHJpbmcpIDogUHJvbWlzZTxFdmVudE1vZGVsW10+IHtcclxuICAgICAgICBsZXQgdXJsID0gYGV2ZW50cz9uYW1lPSR7bmFtZX1gO1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXQ8RXZlbnRNb2RlbFtdPih1cmwsIGZhbHNlKTtcclxuICAgIH0gIFxyXG5cclxuICAgIGdldEV2ZW50KGV2ZW50SWQ6IHN0cmluZykgOiBQcm9taXNlPEV2ZW50RGV0YWlsc01vZGVsPiB7XHJcbiAgICAgICAgbGV0IHVybCA9IGBldmVudHMvJHtldmVudElkfWA7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldDxFdmVudERldGFpbHNNb2RlbD4odXJsLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUobW9kZWw6IENyZWF0ZUV2ZW50TW9kZWwpIDogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgdXJsID0gJ2V2ZW50cyc7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnBvc3Q8YW55Pih1cmwsIG1vZGVsLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZXZlbnRJZDogc3RyaW5nLCBtb2RlbDogVXBkYXRlRXZlbnRNb2RlbCkgOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSBgZXZlbnRzLyR7ZXZlbnRJZH1gO1xyXG4gICAgICAgIHJldHVybiBzdXBlci5wdXQ8YW55Pih1cmwsIG1vZGVsLCB0cnVlKTtcclxuICAgIH0gXHJcblxyXG4gICAgZGVsZXRlKGV2ZW50SWQ6IHN0cmluZykgOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSBgZXZlbnRzLyR7ZXZlbnRJZH1gO1xyXG4gICAgICAgIHJldHVybiBzdXBlci5kZWxldGUodXJsLCB0cnVlKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('events/view-models/event-details',["require", "exports", "aurelia-dependency-injection", "../services/events-service", "../services/event-tickets-service", "toastr"], function (require, exports, aurelia_dependency_injection_1, events_service_1, event_tickets_service_1, toastr) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventDetailsViewModel = (function () {
        function EventDetailsViewModel(eventsService, eventTicketsService) {
            this.eventsService = eventsService;
            this.eventTicketsService = eventTicketsService;
        }
        Object.defineProperty(EventDetailsViewModel.prototype, "ticketsPrice", {
            get: function () {
                if (this.event.tickets.length === 0)
                    return;
                return this.event.tickets[0].price;
            },
            enumerable: true,
            configurable: true
        });
        EventDetailsViewModel.prototype.activate = function (params) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.eventId = params.id;
                            return [4 /*yield*/, this.getEventDetails()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        EventDetailsViewModel.prototype.purchaseTicket = function () {
            return __awaiter(this, void 0, void 0, function () {
                var confirm;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            confirm = window.confirm('Do you want to buy tickets?');
                            if (!confirm)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.eventTicketsService.purchase(this.eventId, this.ticketsAmount)];
                        case 1:
                            _a.sent();
                            this.event.availableTicketsCount -= this.ticketsAmount;
                            this.ticketsAmount = 0;
                            this.setTicketsBanner();
                            toastr.success('You bought tickets!');
                            return [2 /*return*/];
                    }
                });
            });
        };
        EventDetailsViewModel.prototype.getEventDetails = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.eventsService.getEvent(this.eventId)];
                        case 1:
                            _a.event = _b.sent();
                            this.setTicketsBanner();
                            return [2 /*return*/];
                    }
                });
            });
        };
        EventDetailsViewModel.prototype.setTicketsBanner = function () {
            var availableTicketsPercentage = Math.round((100 * this.event.availableTicketsCount) / this.event.ticketsCount);
            if (availableTicketsPercentage > 50)
                this.ticketsBanner = { class: 'alert alert-success' };
            else if (availableTicketsPercentage > 25)
                this.ticketsBanner = { class: 'alert alert-warning' };
            else
                this.ticketsBanner = { class: 'alert alert-danger' };
            this.ticketsBanner.text = "This event has " + availableTicketsPercentage + "% tickets available!";
        };
        return EventDetailsViewModel;
    }());
    EventDetailsViewModel = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [events_service_1.EventsService,
            event_tickets_service_1.EventTicketsService])
    ], EventDetailsViewModel);
    exports.EventDetailsViewModel = EventDetailsViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy92aWV3LW1vZGVscy9ldmVudC1kZXRhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT0EsSUFBYSxxQkFBcUI7UUFZOUIsK0JBQW9CLGFBQTRCLEVBQ3BDLG1CQUF3QztZQURoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtZQUNwQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQUcsQ0FBQztRQU54RCxzQkFBSSwrQ0FBWTtpQkFBaEI7Z0JBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdkMsQ0FBQzs7O1dBQUE7UUFLSyx3Q0FBUSxHQUFkLFVBQWUsTUFBVzs7Ozs7NEJBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQzs0QkFDekIscUJBQU0sSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFBOzs0QkFBNUIsU0FBNEIsQ0FBQzs7Ozs7U0FDaEM7UUFFSyw4Q0FBYyxHQUFwQjs7b0JBQ1EsT0FBTzs7OztzQ0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDOzRCQUMzRCxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQ0FBQyxNQUFNLGdCQUFDOzRCQUNwQixxQkFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFBOzs0QkFBekUsU0FBeUUsQ0FBQzs0QkFDMUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDOzRCQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQzs0QkFDdkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7NEJBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7Ozs7U0FDekM7UUFFYSwrQ0FBZSxHQUE3Qjs7Ozs7OzRCQUNJLEtBQUEsSUFBSSxDQUFBOzRCQUFTLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQTs7NEJBQTVELEdBQUssS0FBSyxHQUFHLFNBQStDLENBQUM7NEJBQzdELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOzs7OztTQUMzQjtRQUVPLGdEQUFnQixHQUF4QjtZQUNJLElBQUksMEJBQTBCLEdBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFbkYsRUFBRSxDQUFBLENBQUMsMEJBQTBCLEdBQUcsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUMsS0FBSyxFQUFFLHFCQUFxQixFQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLDBCQUEwQixHQUFHLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFDLEtBQUssRUFBRSxxQkFBcUIsRUFBQyxDQUFDO1lBQ3hELElBQUk7Z0JBQ0EsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBQyxDQUFDO1lBRXZELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLG9CQUFrQiwwQkFBMEIseUJBQXNCLENBQUM7UUFDakcsQ0FBQztRQUNMLDRCQUFDO0lBQUQsQ0FoREEsQUFnREMsSUFBQTtJQWhEWSxxQkFBcUI7UUFEakMseUNBQVUsRUFBRTt5Q0FhMEIsOEJBQWE7WUFDZiwyQ0FBbUI7T0FiM0MscUJBQXFCLENBZ0RqQztJQWhEWSxzREFBcUIiLCJmaWxlIjoiZXZlbnRzL3ZpZXctbW9kZWxzL2V2ZW50LWRldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xyXG5pbXBvcnQge0V2ZW50c1NlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50cy1zZXJ2aWNlJztcclxuaW1wb3J0IHtFdmVudFRpY2tldHNTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9ldmVudC10aWNrZXRzLXNlcnZpY2UnO1xyXG5pbXBvcnQge0V2ZW50RGV0YWlsc01vZGVsfSBmcm9tICcuLi9tb2RlbHMvZXZlbnQtZGV0YWlscy1tb2RlbCc7XHJcbmltcG9ydCAqIGFzIHRvYXN0ciBmcm9tICd0b2FzdHInO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgRXZlbnREZXRhaWxzVmlld01vZGVsIHtcclxuXHJcbiAgICBwcml2YXRlIGV2ZW50SWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgZXZlbnQ6IEV2ZW50RGV0YWlsc01vZGVsO1xyXG4gICAgcHJpdmF0ZSB0aWNrZXRzQW1vdW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRpY2tldHNCYW5uZXI6IGFueTtcclxuXHJcbiAgICBnZXQgdGlja2V0c1ByaWNlKCkge1xyXG4gICAgICAgIGlmKHRoaXMuZXZlbnQudGlja2V0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmVudC50aWNrZXRzWzBdLnByaWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRzU2VydmljZTogRXZlbnRzU2VydmljZSwgXHJcbiAgICAgICAgcHJpdmF0ZSBldmVudFRpY2tldHNTZXJ2aWNlOiBFdmVudFRpY2tldHNTZXJ2aWNlKSB7fVxyXG5cclxuICAgIGFzeW5jIGFjdGl2YXRlKHBhcmFtczogYW55KSB7XHJcbiAgICAgICAgdGhpcy5ldmVudElkID0gcGFyYW1zLmlkO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0RXZlbnREZXRhaWxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcHVyY2hhc2VUaWNrZXQoKSB7XHJcbiAgICAgICAgbGV0IGNvbmZpcm0gPSB3aW5kb3cuY29uZmlybSgnRG8geW91IHdhbnQgdG8gYnV5IHRpY2tldHM/JylcclxuICAgICAgICBpZighY29uZmlybSkgcmV0dXJuO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZXZlbnRUaWNrZXRzU2VydmljZS5wdXJjaGFzZSh0aGlzLmV2ZW50SWQsIHRoaXMudGlja2V0c0Ftb3VudCk7XHJcbiAgICAgICAgdGhpcy5ldmVudC5hdmFpbGFibGVUaWNrZXRzQ291bnQgLT0gdGhpcy50aWNrZXRzQW1vdW50O1xyXG4gICAgICAgIHRoaXMudGlja2V0c0Ftb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRUaWNrZXRzQmFubmVyKCk7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ1lvdSBib3VnaHQgdGlja2V0cyEnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGdldEV2ZW50RGV0YWlscygpIHtcclxuICAgICAgICB0aGlzLmV2ZW50ID0gYXdhaXQgdGhpcy5ldmVudHNTZXJ2aWNlLmdldEV2ZW50KHRoaXMuZXZlbnRJZCk7XHJcbiAgICAgICAgdGhpcy5zZXRUaWNrZXRzQmFubmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUaWNrZXRzQmFubmVyKCkge1xyXG4gICAgICAgIGxldCBhdmFpbGFibGVUaWNrZXRzUGVyY2VudGFnZSA9IFxyXG4gICAgICAgICAgICBNYXRoLnJvdW5kKCgxMDAgKiB0aGlzLmV2ZW50LmF2YWlsYWJsZVRpY2tldHNDb3VudCkgLyB0aGlzLmV2ZW50LnRpY2tldHNDb3VudCk7XHJcblxyXG4gICAgICAgIGlmKGF2YWlsYWJsZVRpY2tldHNQZXJjZW50YWdlID4gNTApXHJcbiAgICAgICAgICAgIHRoaXMudGlja2V0c0Jhbm5lciA9IHtjbGFzczogJ2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnfTtcclxuICAgICAgICBlbHNlIGlmKGF2YWlsYWJsZVRpY2tldHNQZXJjZW50YWdlID4gMjUpXHJcbiAgICAgICAgICAgIHRoaXMudGlja2V0c0Jhbm5lciA9IHtjbGFzczogJ2FsZXJ0IGFsZXJ0LXdhcm5pbmcnfTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMudGlja2V0c0Jhbm5lciA9IHtjbGFzczogJ2FsZXJ0IGFsZXJ0LWRhbmdlcid9O1xyXG5cclxuICAgICAgICB0aGlzLnRpY2tldHNCYW5uZXIudGV4dCA9IGBUaGlzIGV2ZW50IGhhcyAke2F2YWlsYWJsZVRpY2tldHNQZXJjZW50YWdlfSUgdGlja2V0cyBhdmFpbGFibGUhYDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('users/config/users-routing',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UsersRouting = (function () {
        function UsersRouting() {
        }
        UsersRouting.prototype.configureRouter = function (config) {
            config.title = 'Users';
            config.map([
                { route: 'register', moduleId: '../view-models/register', nav: true, title: 'Register' },
                { route: 'login', moduleId: '../view-models/login', nav: true, title: 'Login' }
            ]);
        };
        return UsersRouting;
    }());
    exports.UsersRouting = UsersRouting;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL2NvbmZpZy91c2Vycy1yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBQUE7UUFTQSxDQUFDO1FBUEcsc0NBQWUsR0FBZixVQUFnQixNQUEyQjtZQUN2QyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNQLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFDO2dCQUN0RixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQzthQUNoRixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQVRBLEFBU0MsSUFBQTtJQVRZLG9DQUFZIiwiZmlsZSI6InVzZXJzL2NvbmZpZy91c2Vycy1yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlcnNSb3V0aW5nIHtcclxuXHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgY29uZmlnLnRpdGxlID0gJ1VzZXJzJztcclxuICAgICAgICBjb25maWcubWFwKFtcclxuICAgICAgICAgICAge3JvdXRlOiAncmVnaXN0ZXInLCBtb2R1bGVJZDogJy4uL3ZpZXctbW9kZWxzL3JlZ2lzdGVyJywgbmF2OiB0cnVlLCB0aXRsZTogJ1JlZ2lzdGVyJ30sXHJcbiAgICAgICAgICAgIHtyb3V0ZTogJ2xvZ2luJywgbW9kdWxlSWQ6ICcuLi92aWV3LW1vZGVscy9sb2dpbicsIG5hdjogdHJ1ZSwgdGl0bGU6ICdMb2dpbid9XHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('users/models/user-auth-model',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserAuthModel = (function () {
        function UserAuthModel() {
        }
        return UserAuthModel;
    }());
    exports.UserAuthModel = UserAuthModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL21vZGVscy91c2VyLWF1dGgtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQUlBLENBQUM7UUFBRCxvQkFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksc0NBQWEiLCJmaWxlIjoidXNlcnMvbW9kZWxzL3VzZXItYXV0aC1tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2VyQXV0aE1vZGVsIHtcclxuICAgIHRva2VuOiBzdHJpbmc7XHJcbiAgICByb2xlOiBzdHJpbmc7XHJcbiAgICBleHBpcmVzOiBudW1iZXI7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('users/models/user-identity-model',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserIdentityModel = (function () {
        function UserIdentityModel() {
        }
        return UserIdentityModel;
    }());
    exports.UserIdentityModel = UserIdentityModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL21vZGVscy91c2VyLWlkZW50aXR5LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFJQSxDQUFDO1FBQUQsd0JBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLDhDQUFpQiIsImZpbGUiOiJ1c2Vycy9tb2RlbHMvdXNlci1pZGVudGl0eS1tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2VySWRlbnRpdHlNb2RlbCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcm9sZTogc3RyaW5nO1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('users/models/user-login-model',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserLoginModel = (function () {
        function UserLoginModel() {
        }
        return UserLoginModel;
    }());
    exports.UserLoginModel = UserLoginModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL21vZGVscy91c2VyLWxvZ2luLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFHQSxDQUFDO1FBQUQscUJBQUM7SUFBRCxDQUhBLEFBR0MsSUFBQTtJQUhZLHdDQUFjIiwiZmlsZSI6InVzZXJzL21vZGVscy91c2VyLWxvZ2luLW1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVzZXJMb2dpbk1vZGVsIHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('users/models/user-register-model',["require", "exports", "./user-login-model"], function (require, exports, user_login_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserRegisterModel = (function (_super) {
        __extends(UserRegisterModel, _super);
        function UserRegisterModel() {
            var _this = _super.call(this) || this;
            _this.role = 'admin';
            return _this;
        }
        return UserRegisterModel;
    }(user_login_model_1.UserLoginModel));
    exports.UserRegisterModel = UserRegisterModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL21vZGVscy91c2VyLXJlZ2lzdGVyLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFFQTtRQUF1QyxxQ0FBYztRQUtqRDtZQUFBLFlBQ0ksaUJBQU8sU0FFVjtZQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDOztRQUN4QixDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQVRBLEFBU0MsQ0FUc0MsaUNBQWMsR0FTcEQ7SUFUWSw4Q0FBaUIiLCJmaWxlIjoidXNlcnMvbW9kZWxzL3VzZXItcmVnaXN0ZXItbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VzZXJMb2dpbk1vZGVsfSBmcm9tICcuL3VzZXItbG9naW4tbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJSZWdpc3Rlck1vZGVsIGV4dGVuZHMgVXNlckxvZ2luTW9kZWwgeyAgIFxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcm9sZTogc3RyaW5nOyAgXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucm9sZSA9ICdhZG1pbic7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('users/services/users-service',["require", "exports", "aurelia-dependency-injection", "aurelia-fetch-client", "../../core/data-service", "../../core/auth-service"], function (require, exports, aurelia_dependency_injection_1, aurelia_fetch_client_1, data_service_1, auth_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UsersService = (function (_super) {
        __extends(UsersService, _super);
        function UsersService(httpClient, authService) {
            return _super.call(this, httpClient, authService) || this;
        }
        UsersService.prototype.register = function (model) {
            var url = 'account/register';
            return _super.prototype.post.call(this, url, model, false);
        };
        UsersService.prototype.login = function (model) {
            var url = 'account/login';
            return _super.prototype.post.call(this, url, model, false);
        };
        UsersService.prototype.getUserIdentity = function () {
            var url = 'account';
            return _super.prototype.get.call(this, url, true);
        };
        return UsersService;
    }(data_service_1.DataService));
    UsersService = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient, auth_service_1.AuthService])
    ], UsersService);
    exports.UsersService = UsersService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL3NlcnZpY2VzL3VzZXJzLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVVBLElBQWEsWUFBWTtRQUFTLGdDQUFXO1FBRXpDLHNCQUFZLFVBQXNCLEVBQUUsV0FBd0I7bUJBQ3hELGtCQUFNLFVBQVUsRUFBRSxXQUFXLENBQUM7UUFDbEMsQ0FBQztRQUVELCtCQUFRLEdBQVIsVUFBUyxLQUF3QjtZQUM3QixJQUFJLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztZQUM3QixNQUFNLENBQUMsaUJBQU0sSUFBSSxZQUFNLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVELDRCQUFLLEdBQUwsVUFBTSxLQUFxQjtZQUN2QixJQUFJLEdBQUcsR0FBRyxlQUFlLENBQUM7WUFDMUIsTUFBTSxDQUFDLGlCQUFNLElBQUksWUFBZ0IsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBRUQsc0NBQWUsR0FBZjtZQUNJLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQztZQUNwQixNQUFNLENBQUMsaUJBQU0sR0FBRyxZQUFvQixHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FwQkEsQUFvQkMsQ0FwQmlDLDBCQUFXLEdBb0I1QztJQXBCWSxZQUFZO1FBRHhCLHlDQUFVLEVBQUU7eUNBR2UsaUNBQVUsRUFBZSwwQkFBVztPQUZuRCxZQUFZLENBb0J4QjtJQXBCWSxvQ0FBWSIsImZpbGUiOiJ1c2Vycy9zZXJ2aWNlcy91c2Vycy1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4uLy4uL2NvcmUvZGF0YS1zZXJ2aWNlJztcclxuaW1wb3J0IHtVc2VyUmVnaXN0ZXJNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL3VzZXItcmVnaXN0ZXItbW9kZWwnO1xyXG5pbXBvcnQge1VzZXJMb2dpbk1vZGVsfSBmcm9tICcuLi9tb2RlbHMvdXNlci1sb2dpbi1tb2RlbCc7XHJcbmltcG9ydCB7VXNlcklkZW50aXR5TW9kZWx9IGZyb20gJy4uL21vZGVscy91c2VyLWlkZW50aXR5LW1vZGVsJztcclxuaW1wb3J0IHtVc2VyQXV0aE1vZGVsfSBmcm9tICcuLi9tb2RlbHMvdXNlci1hdXRoLW1vZGVsJztcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vY29yZS9hdXRoLXNlcnZpY2UnO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIGV4dGVuZHMgRGF0YVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKGh0dHBDbGllbnQsIGF1dGhTZXJ2aWNlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKG1vZGVsOiBVc2VyUmVnaXN0ZXJNb2RlbCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHVybCA9ICdhY2NvdW50L3JlZ2lzdGVyJztcclxuICAgICAgICByZXR1cm4gc3VwZXIucG9zdDxhbnk+KHVybCwgbW9kZWwsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihtb2RlbDogVXNlckxvZ2luTW9kZWwpIDogUHJvbWlzZTxVc2VyQXV0aE1vZGVsPiB7XHJcbiAgICAgICAgbGV0IHVybCA9ICdhY2NvdW50L2xvZ2luJztcclxuICAgICAgICByZXR1cm4gc3VwZXIucG9zdDxVc2VyQXV0aE1vZGVsPih1cmwsIG1vZGVsLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcklkZW50aXR5KCkgOiBQcm9taXNlPFVzZXJJZGVudGl0eU1vZGVsPiB7XHJcbiAgICAgICAgbGV0IHVybCA9ICdhY2NvdW50JztcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0PFVzZXJJZGVudGl0eU1vZGVsPih1cmwsIHRydWUpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('users/validators/login-view-validator',["require", "exports", "aurelia-validation"], function (require, exports, aurelia_validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoginViewValidator = (function () {
        function LoginViewValidator() {
        }
        LoginViewValidator.prototype.validate = function (model) {
            aurelia_validation_1.ValidationRules
                .ensure(function (model) { return model.email; })
                .required().withMessage('Email is required')
                .email().withMessage('Email is not correct')
                .ensure(function (model) { return model.password; })
                .required().withMessage('Password is required')
                .on(model);
        };
        return LoginViewValidator;
    }());
    exports.LoginViewValidator = LoginViewValidator;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL3ZhbGlkYXRvcnMvbG9naW4tdmlldy12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0E7UUFBQTtRQVVBLENBQUM7UUFURyxxQ0FBUSxHQUFSLFVBQVMsS0FBcUI7WUFDMUIsb0NBQWU7aUJBQ1YsTUFBTSxDQUFDLFVBQUMsS0FBcUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFDO2lCQUMxQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7aUJBQzNDLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDL0MsTUFBTSxDQUFDLFVBQUMsS0FBcUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYyxDQUFDO2lCQUM3QyxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUM7aUJBQ2xELEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBQ0wseUJBQUM7SUFBRCxDQVZBLEFBVUMsSUFBQTtJQVZZLGdEQUFrQiIsImZpbGUiOiJ1c2Vycy92YWxpZGF0b3JzL2xvZ2luLXZpZXctdmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVc2VyTG9naW5Nb2RlbH0gZnJvbSAnLi4vbW9kZWxzL3VzZXItbG9naW4tbW9kZWwnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25SdWxlc30gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpblZpZXdWYWxpZGF0b3Ige1xyXG4gICAgdmFsaWRhdGUobW9kZWw6IFVzZXJMb2dpbk1vZGVsKSA6IHZvaWQge1xyXG4gICAgICAgIFZhbGlkYXRpb25SdWxlcyBcclxuICAgICAgICAgICAgLmVuc3VyZSgobW9kZWw6IFVzZXJMb2dpbk1vZGVsKSA9PiBtb2RlbC5lbWFpbClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpLndpdGhNZXNzYWdlKCdFbWFpbCBpcyByZXF1aXJlZCcpXHJcbiAgICAgICAgICAgICAgICAuZW1haWwoKS53aXRoTWVzc2FnZSgnRW1haWwgaXMgbm90IGNvcnJlY3QnKVxyXG4gICAgICAgICAgICAuZW5zdXJlKChtb2RlbDogVXNlckxvZ2luTW9kZWwpID0+IG1vZGVsLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKCkud2l0aE1lc3NhZ2UoJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJylcclxuICAgICAgICAgICAgLm9uKG1vZGVsKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('users/validators/register-view-validator',["require", "exports", "aurelia-validation"], function (require, exports, aurelia_validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RegisterViewValidator = (function () {
        function RegisterViewValidator() {
        }
        RegisterViewValidator.prototype.validate = function (model) {
            aurelia_validation_1.ValidationRules
                .ensure(function (model) { return model.name; })
                .required().withMessage('Login is required')
                .ensure(function (model) { return model.email; })
                .required().withMessage('Email is required')
                .email().withMessage('Email is not correct')
                .ensure(function (model) { return model.password; })
                .required().withMessage('Password is required')
                .minLength(6).withMessage('Password must contain at least 6 characters')
                .ensure(function (model) { return model.confirmPassword; })
                .required().withMessage('Possword confirmation is required')
                .satisfies(function (value, model) { return value === model.password; }).withMessage('Password confirmation is not correct')
                .on(model);
        };
        return RegisterViewValidator;
    }());
    exports.RegisterViewValidator = RegisterViewValidator;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL3ZhbGlkYXRvcnMvcmVnaXN0ZXItdmlldy12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0E7UUFBQTtRQWdCQSxDQUFDO1FBZkcsd0NBQVEsR0FBUixVQUFTLEtBQXdCO1lBQzdCLG9DQUFlO2lCQUNWLE1BQU0sQ0FBQyxVQUFDLEtBQXdCLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQztpQkFDNUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDO2lCQUMvQyxNQUFNLENBQUMsVUFBQyxLQUF3QixJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQUM7aUJBQzdDLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDM0MsS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDO2lCQUMvQyxNQUFNLENBQUMsVUFBQyxLQUF3QixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBZCxDQUFjLENBQUM7aUJBQ2hELFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDOUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyw2Q0FBNkMsQ0FBQztpQkFDM0UsTUFBTSxDQUFDLFVBQUMsS0FBd0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxlQUFlLEVBQXJCLENBQXFCLENBQUM7aUJBQ3ZELFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQztpQkFDM0QsU0FBUyxDQUFDLFVBQUMsS0FBYSxFQUFFLEtBQXdCLElBQUssT0FBQSxLQUFLLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxzQ0FBc0MsQ0FBQztpQkFDeEksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFDTCw0QkFBQztJQUFELENBaEJBLEFBZ0JDLElBQUE7SUFoQlksc0RBQXFCIiwiZmlsZSI6InVzZXJzL3ZhbGlkYXRvcnMvcmVnaXN0ZXItdmlldy12YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VzZXJSZWdpc3Rlck1vZGVsfSBmcm9tICcuLi9tb2RlbHMvdXNlci1yZWdpc3Rlci1tb2RlbCc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblJ1bGVzfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVmlld1ZhbGlkYXRvciB7XHJcbiAgICB2YWxpZGF0ZShtb2RlbDogVXNlclJlZ2lzdGVyTW9kZWwpIDogdm9pZCB7XHJcbiAgICAgICAgVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgICAgICAgIC5lbnN1cmUoKG1vZGVsOiBVc2VyUmVnaXN0ZXJNb2RlbCkgPT4gbW9kZWwubmFtZSlcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpLndpdGhNZXNzYWdlKCdMb2dpbiBpcyByZXF1aXJlZCcpXHJcbiAgICAgICAgICAgIC5lbnN1cmUoKG1vZGVsOiBVc2VyUmVnaXN0ZXJNb2RlbCkgPT4gbW9kZWwuZW1haWwpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoKS53aXRoTWVzc2FnZSgnRW1haWwgaXMgcmVxdWlyZWQnKVxyXG4gICAgICAgICAgICAgICAgLmVtYWlsKCkud2l0aE1lc3NhZ2UoJ0VtYWlsIGlzIG5vdCBjb3JyZWN0JylcclxuICAgICAgICAgICAgLmVuc3VyZSgobW9kZWw6IFVzZXJSZWdpc3Rlck1vZGVsKSA9PiBtb2RlbC5wYXNzd29yZClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpLndpdGhNZXNzYWdlKCdQYXNzd29yZCBpcyByZXF1aXJlZCcpXHJcbiAgICAgICAgICAgICAgICAubWluTGVuZ3RoKDYpLndpdGhNZXNzYWdlKCdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgNiBjaGFyYWN0ZXJzJylcclxuICAgICAgICAgICAgLmVuc3VyZSgobW9kZWw6IFVzZXJSZWdpc3Rlck1vZGVsKSA9PiBtb2RlbC5jb25maXJtUGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoKS53aXRoTWVzc2FnZSgnUG9zc3dvcmQgY29uZmlybWF0aW9uIGlzIHJlcXVpcmVkJylcclxuICAgICAgICAgICAgICAgIC5zYXRpc2ZpZXMoKHZhbHVlOiBzdHJpbmcsIG1vZGVsOiBVc2VyUmVnaXN0ZXJNb2RlbCkgPT4gdmFsdWUgPT09IG1vZGVsLnBhc3N3b3JkKS53aXRoTWVzc2FnZSgnUGFzc3dvcmQgY29uZmlybWF0aW9uIGlzIG5vdCBjb3JyZWN0JylcclxuICAgICAgICAgICAgLm9uKG1vZGVsKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('users/view-models/login',["require", "exports", "../models/user-login-model", "../validators/login-view-validator", "aurelia-validation", "aurelia-dependency-injection", "aurelia-router", "../services/users-service", "../../core/auth-service", "../../core/identity-service", "toastr"], function (require, exports, user_login_model_1, login_view_validator_1, aurelia_validation_1, aurelia_dependency_injection_1, aurelia_router_1, users_service_1, auth_service_1, identity_service_1, toastr) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UsersLoginViewModel = (function () {
        function UsersLoginViewModel(usersService, authService, identityService, router, validator, validationControllerFactory) {
            this.usersService = usersService;
            this.authService = authService;
            this.identityService = identityService;
            this.router = router;
            this.model = new user_login_model_1.UserLoginModel();
            this.rememberMe = true;
            this.validationController = validationControllerFactory.createForCurrentScope();
            validator.validate(this.model);
        }
        UsersLoginViewModel.prototype.login = function () {
            return __awaiter(this, void 0, void 0, function () {
                var userAuthModel, userIdentity;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.usersService.login(this.model)];
                        case 1:
                            userAuthModel = _a.sent();
                            this.authService.setAccessToken(userAuthModel.token, this.rememberMe);
                            return [4 /*yield*/, this.usersService.getUserIdentity()];
                        case 2:
                            userIdentity = _a.sent();
                            this.identityService.setUserIdentity(userIdentity);
                            this.router.navigate('#/');
                            toastr.success("Hello " + userIdentity.name + "!");
                            return [2 /*return*/];
                    }
                });
            });
        };
        return UsersLoginViewModel;
    }());
    UsersLoginViewModel = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [users_service_1.UsersService, auth_service_1.AuthService,
            identity_service_1.IdentityService, aurelia_router_1.Router, login_view_validator_1.LoginViewValidator, aurelia_validation_1.ValidationControllerFactory])
    ], UsersLoginViewModel);
    exports.UsersLoginViewModel = UsersLoginViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL3ZpZXctbW9kZWxzL2xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBV0EsSUFBYSxtQkFBbUI7UUFNNUIsNkJBQW9CLFlBQTBCLEVBQVUsV0FBeUIsRUFDckUsZUFBZ0MsRUFBVSxNQUFjLEVBQUUsU0FBNkIsRUFBRSwyQkFBd0Q7WUFEekksaUJBQVksR0FBWixZQUFZLENBQWM7WUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYztZQUNyRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQ2hFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQ0FBYyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLDJCQUEyQixDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDaEYsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUVLLG1DQUFLLEdBQVg7Ozs7O2dDQUN3QixxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUE7OzRDQUF6QyxTQUF5Qzs0QkFDN0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQ25ELHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLEVBQUE7OzJDQUF6QyxTQUF5Qzs0QkFDNUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVMsWUFBWSxDQUFDLElBQUksTUFBRyxDQUFDLENBQUM7Ozs7O1NBQ2pEO1FBQ0wsMEJBQUM7SUFBRCxDQXRCQSxBQXNCQyxJQUFBO0lBdEJZLG1CQUFtQjtRQUQvQix5Q0FBVSxFQUFFO3lDQU95Qiw0QkFBWSxFQUF3QiwwQkFBVztZQUNwRCxrQ0FBZSxFQUFrQix1QkFBTSxFQUFhLHlDQUFrQixFQUErQixnREFBMkI7T0FQcEosbUJBQW1CLENBc0IvQjtJQXRCWSxrREFBbUIiLCJmaWxlIjoidXNlcnMvdmlldy1tb2RlbHMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VzZXJMb2dpbk1vZGVsfSBmcm9tICcuLi9tb2RlbHMvdXNlci1sb2dpbi1tb2RlbCc7XHJcbmltcG9ydCB7TG9naW5WaWV3VmFsaWRhdG9yfSBmcm9tICcuLi92YWxpZGF0b3JzL2xvZ2luLXZpZXctdmFsaWRhdG9yJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksIFZhbGlkYXRpb25Db250cm9sbGVyfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvdXNlcnMtc2VydmljZSc7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL2NvcmUvYXV0aC1zZXJ2aWNlJztcclxuaW1wb3J0IHtJZGVudGl0eVNlcnZpY2V9IGZyb20gJy4uLy4uL2NvcmUvaWRlbnRpdHktc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIHRvYXN0ciBmcm9tICd0b2FzdHInO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgVXNlcnNMb2dpblZpZXdNb2RlbCB7XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIG1vZGVsOiBVc2VyTG9naW5Nb2RlbDtcclxuICAgIHByaXZhdGUgcmVtZW1iZXJNZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLCBwcml2YXRlIGF1dGhTZXJ2aWNlIDogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBpZGVudGl0eVNlcnZpY2U6IElkZW50aXR5U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgdmFsaWRhdG9yOiBMb2dpblZpZXdWYWxpZGF0b3IsIHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeTogVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBVc2VyTG9naW5Nb2RlbCgpO1xyXG4gICAgICAgIHRoaXMucmVtZW1iZXJNZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeS5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcclxuICAgICAgICB2YWxpZGF0b3IudmFsaWRhdGUodGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICAgICAgbGV0IHVzZXJBdXRoTW9kZWwgPSBhd2FpdCB0aGlzLnVzZXJzU2VydmljZS5sb2dpbih0aGlzLm1vZGVsKTtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldEFjY2Vzc1Rva2VuKHVzZXJBdXRoTW9kZWwudG9rZW4sIHRoaXMucmVtZW1iZXJNZSk7XHJcbiAgICAgICAgbGV0IHVzZXJJZGVudGl0eSA9IGF3YWl0IHRoaXMudXNlcnNTZXJ2aWNlLmdldFVzZXJJZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMuaWRlbnRpdHlTZXJ2aWNlLnNldFVzZXJJZGVudGl0eSh1c2VySWRlbnRpdHkpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCcjLycpO1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKGBIZWxsbyAke3VzZXJJZGVudGl0eS5uYW1lfSFgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('users/view-models/register',["require", "exports", "aurelia-dependency-injection", "../services/users-service", "../models/user-register-model", "../validators/register-view-validator", "aurelia-validation", "toastr"], function (require, exports, aurelia_dependency_injection_1, users_service_1, user_register_model_1, register_view_validator_1, aurelia_validation_1, toastr) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UsersRegisterViewModel = (function () {
        function UsersRegisterViewModel(usersService, validator, validationControllerFactory) {
            this.usersService = usersService;
            this.model = new user_register_model_1.UserRegisterModel();
            this.validationController = validationControllerFactory.createForCurrentScope();
            validator.validate(this.model);
        }
        UsersRegisterViewModel.prototype.register = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.usersService.register(this.model)];
                        case 1:
                            _a.sent();
                            toastr.success('Registraion succeed');
                            return [2 /*return*/];
                    }
                });
            });
        };
        return UsersRegisterViewModel;
    }());
    UsersRegisterViewModel = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [users_service_1.UsersService, register_view_validator_1.RegisterViewValidator,
            aurelia_validation_1.ValidationControllerFactory])
    ], UsersRegisterViewModel);
    exports.UsersRegisterViewModel = UsersRegisterViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL3ZpZXctbW9kZWxzL3JlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU0EsSUFBYSxzQkFBc0I7UUFNL0IsZ0NBQW9CLFlBQTBCLEVBQUUsU0FBZ0MsRUFDNUUsMkJBQXdEO1lBRHhDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1lBRTFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx1Q0FBaUIsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxvQkFBb0IsR0FBRywyQkFBMkIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ2hGLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFFSyx5Q0FBUSxHQUFkOzs7O2dDQUNJLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQTs7NEJBQTVDLFNBQTRDLENBQUM7NEJBQzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7Ozs7U0FDekM7UUFDTCw2QkFBQztJQUFELENBakJBLEFBaUJDLElBQUE7SUFqQlksc0JBQXNCO1FBRGxDLHlDQUFVLEVBQUU7eUNBT3lCLDRCQUFZLEVBQWEsK0NBQXFCO1lBQy9DLGdEQUEyQjtPQVBuRCxzQkFBc0IsQ0FpQmxDO0lBakJZLHdEQUFzQiIsImZpbGUiOiJ1c2Vycy92aWV3LW1vZGVscy9yZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcbmltcG9ydCB7VXNlcnNTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy91c2Vycy1zZXJ2aWNlJztcclxuaW1wb3J0IHtVc2VyUmVnaXN0ZXJNb2RlbH0gZnJvbSAnLi4vbW9kZWxzL3VzZXItcmVnaXN0ZXItbW9kZWwnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcclxuaW1wb3J0IHtSZWdpc3RlclZpZXdWYWxpZGF0b3J9IGZyb20gJy4uL3ZhbGlkYXRvcnMvcmVnaXN0ZXItdmlldy12YWxpZGF0b3InO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgVmFsaWRhdGlvbkNvbnRyb2xsZXJ9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XHJcbmltcG9ydCAqIGFzIHRvYXN0ciBmcm9tICd0b2FzdHInO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgVXNlcnNSZWdpc3RlclZpZXdNb2RlbCB7XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIG1vZGVsOiBVc2VyUmVnaXN0ZXJNb2RlbDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSwgdmFsaWRhdG9yOiBSZWdpc3RlclZpZXdWYWxpZGF0b3IsXHJcbiAgICAgICAgdmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5OiBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnkpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFVzZXJSZWdpc3Rlck1vZGVsKCk7ICAgICAgXHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeS5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTsgXHJcbiAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMubW9kZWwpOyAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51c2Vyc1NlcnZpY2UucmVnaXN0ZXIodGhpcy5tb2RlbCk7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ1JlZ2lzdHJhaW9uIHN1Y2NlZWQnKTtcclxuICAgIH0gICAgXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"bootstrap/css/bootstrap.css\"></require>\r\n    <require from=\"toastr/build/toastr.min.css\"></require>\r\n    <nav class=\"navbar navbar-default\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" href=\"#/\">Evento</a>\r\n            </div> \r\n            <div class=\"pull-right\" if.bind=\"!identityService.isUserLogged\">\r\n                <a class=\"btn navbar-btn btn-primary\" href=\"#/users/register\">Register</a>\r\n                <a class=\"btn navbar-btn btn-primary\" href=\"#/users/login\">Login</a>\r\n            </div> \r\n            <div class=\"collapse navbar-collapse\" if.bind=\"identityService.isUserLogged\">\r\n                <span class=\"navbar-text navbar-right\">\r\n                    Hello ${identityService.userIdentity.name}!\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"container\">\r\n        <router-view></router-view>\r\n    </div>\r\n</template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\r\n   <require from=\"./core/date-format-value-converter\"></require> \r\n   <div class=\"row\">\r\n       <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" value.bind=\"searchText & debounce: 500\"> \r\n   </div>\r\n   <hr>\r\n   <div class=\"row\">\r\n        <div class=\"col-sm-6 col-md-3\" repeat.for=\"event of events\">\r\n            <div class=\"thumbnail\">\r\n                <img src=\"images/event-banner-small.jpeg\">\r\n                <div class=\"caption\">\r\n                    <h3>${event.name}</h3>\r\n                    <p>${event.description}</p>\r\n                    <hr>\r\n                    <p>\r\n                        Start date: ${event.startDate | dateFormat: 'M/D/YYYY h:mm:ss a'}\r\n                    </p>\r\n                    <p>\r\n                        End date: ${event.endDate | dateFormat: 'M/D/YYYY h:mm:ss a'}\r\n                    </p>\r\n                    <p class=\"${event.availableTicketsCount < 10? 'bg-danger' : ''}\">\r\n                        Available tickets: ${event.availableTicketsCount}\r\n                    </p>\r\n                    <p>\r\n                        <button class=\"btn btn-primary\" click.delegate=\"redirectToEventDetails(event.id)\">Buy tickets</button>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n   </div>\r\n</template>    "; });
define('text!components/validation-alert.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"alert alert-danger\" role=\"alert\" if.bind=\"validationController.errors.length > 0\">\r\n        <ul>\r\n            <li repeat.for=\"error of validationController.errors\"> \r\n                ${error.message}\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</template>"; });
define('text!admins/config/admins-routing.html', ['module'], function(module) { module.exports = "<template>\r\n    <router-view></router-view>\r\n</template>"; });
define('text!admins/view-models/admin-event-form.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"page-header\">\r\n        <h1>${isCreateMode? 'Create event' : 'Edit event'}</h1>\r\n    </div>\r\n    <form>\r\n        <div class=\"form-group\">\r\n            <label for=\"admin-event-form-name\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"admin-event-form-name\" placeholder=\"Name\" value.bind=\"model.name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"admin-event-form-description\">Description</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"admin-event-form-description\" placeholder=\"Description\" value.bind=\"model.description\">\r\n        </div>\r\n        <div if.bind=\"isCreateMode\">\r\n            <div class=\"form-group\">\r\n                <label for=\"admin-event-form-start-date\">Start date</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"admin-event-form-start-date\" placeholder=\"Start date\" value.bind=\"model.startDate\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"admin-event-form-end-date\">End date</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"admin-event-form-end-date\" placeholder=\"End date\" value.bind=\"model.endDate\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"admin-event-form-tickets\">Tickets</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"admin-event-form-tcikets\" placeholder=\"Tickets\" value.bind=\"model.tickets\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"admin-event-form-ticket-price\">Ticket price</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"admin-event-form-tciket-price\" placeholder=\"Ticket price\" value.bind=\"model.ticketPrice\">\r\n            </div>\r\n        </div>\r\n        <button class=\"btn btn-warning\" click.delegate=\"redirectToAdminEvents()\">Cancel</button>\r\n        <button class=\"btn btn-success\" click.delegate=\"createEvent()\" if.bind=\"isCreateMode\">Create event</button>\r\n        <button class=\"btn btn-primary\" click.delegate=\"editEvent()\" if.bind=\"!isCreateMode\">Edit event</button>\r\n    </form>\r\n</template>"; });
define('text!admins/view-models/admin-events.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"../../core/date-format-value-converter\"></require>\r\n    <div class=\"page-header\">\r\n        <h1>Your events</h1>\r\n    </div>\r\n    <button class=\"btn btn-primary\" click.delegate=\"redirectToAdminEventForm()\">Create new event</button>\r\n    <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <th>Name</th>               \r\n                <th>Start date</th>\r\n                <th>End date</th>\r\n                <th>Tickets count</th>\r\n                <th>Sold tickets</th>\r\n                <th>Available tickets</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr repeat.for=\"event of events\">\r\n                <td>${event.name}</td>\r\n                <td>${event.startDate | dateFormat: 'M/D/YYYY h:mm:ss a'}</td>\r\n                <td>${event.endDate | dateFormat: 'M/D/YYYY h:mm:ss a'}</td>\r\n                <td>${event.ticketsCount}</td>\r\n                <td>${event.purchasedTicketsCount}</td>\r\n                <td>${event.availableTicketsCount}</td>\r\n                <td>\r\n                    <button class=\"btn btn-primary\" click.delegate=\"redirectToAdminEventForm(event.id)\">Edit</button>\r\n                    <button class=\"btn btn-danger\" click.delegate=\"deleteEvent(event.id, $index)\">Delete</button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</template>"; });
define('text!events/config/events-routing.html', ['module'], function(module) { module.exports = "<template>\r\n    <router-view></router-view>\r\n</template>"; });
define('text!events/view-models/event-details.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"../../core/date-format-value-converter\"></require>\r\n    <div class=\"page-header\">\r\n        <h1>${event.name}</h1>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <img src=\"images/event-banner-big.jpeg\">\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <p>\r\n                <h3>\r\n                    <strong>Description: </strong> ${event.description}\r\n                </h3>\r\n            </p>\r\n            <hr>\r\n             <p>\r\n                <h3>\r\n                    <strong>Start date: </strong> ${event.startDate | dateFormat: 'M/D/YYYY h:mm:ss a'}\r\n                </h3>\r\n            </p>\r\n            <p>\r\n                <h3>\r\n                    <strong>End date: </strong> ${event.endDate | dateFormat: 'M/D/YYYY h:mm:ss a'}\r\n                </h3>\r\n            </p>\r\n            <hr>\r\n            <p>\r\n                <h3>\r\n                    <strong>Available tickets: </strong> ${event.availableTicketsCount}\r\n                </h3>\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"${ticketsBanner.class}\">${ticketsBanner.text}</div>\r\n    <hr>\r\n    <table class=\"table table-boardered table-hover\" if.bind=\"event.availableTicketsCount > 0\">\r\n        <thead>\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Price</th>\r\n                <th>Amount</th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>Ticket</td>\r\n                <td>${ticketsPrice}$</td>\r\n                <td>\r\n                    <input type=\"number\" class=\"form-control\" placeholder=\"Amount\" value.bind=\"ticketsAmount\">\r\n                </td>\r\n                <td>\r\n                    <button class=\"btn btn-success\" click.delegate=\"purchaseTicket()\">Buy</button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</template>"; });
define('text!users/config/users-routing.html', ['module'], function(module) { module.exports = "<template>\r\n    <router-view></router-view>\r\n<template>    "; });
define('text!users/view-models/login.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"page-header\">\r\n        <h1>Login</h1>\r\n    </div>\r\n    <compose view-model=\"../../components/validation-alert\" view-bind=\"../../components/validation-alert.html\" model.bind=\"validationController\"></compose>\r\n    <form>\r\n        <div validation-errors.bind=\"errors\">\r\n            <div class=\"form-group\">\r\n                <label for=\"login-email\">Email</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"login-email\" placeholder=\"Login\" value.bind=\"model.email & validate\">\r\n            </div>           \r\n            <div class=\"form-group\">\r\n                <label for=\"login-password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"login-password\" placeholder=\"Passwrod\" value.bind=\"model.password & validate\">\r\n            </div>    \r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input type=\"checkbox\" class=\"form-check-input\" checked.bind=\"rememberMe\">\r\n                    Remember me\r\n                </label>\r\n            </div>                \r\n            <button type=\"submit\" class=\"btn btn-primary\" click.delegate=\"login()\" disabled.bind=\"validationController.errors.length > 0\">Login</button>\r\n        </div>\r\n    </form>\r\n</template>"; });
define('text!users/view-models/register.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"page-header\">\r\n        <h1>Register</h1>\r\n    </div>\r\n    <compose view-model=\"../../components/validation-alert\" view-bind=\"../../components/validation-alert.html\" model.bind=\"validationController\"></compose>\r\n    <form>\r\n        <div validation-errors.bind=\"errors\">\r\n            <div class=\"form-group\">\r\n                <label for=\"register-name\">Login</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"register-name\" placeholder=\"Login\" value.bind=\"model.name & validate\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"register-email\">Email</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"register-email\" placeholder=\"Email\" value.bind=\"model.email & validate\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"register-password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"register-password\" placeholder=\"Passwrod\" value.bind=\"model.password & validate\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"register-confirm-password\">Confirm password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"register-confirm-password\" placeholder=\"Confirm password\" value.bind=\"model.confirmPassword & validate\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" click.delegate=\"register()\" disabled.bind=\"validationController.errors.length > 0\">Register</button>\r\n        </div>\r\n    </form>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map