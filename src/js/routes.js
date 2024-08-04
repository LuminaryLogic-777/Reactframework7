import HomePage from "../pages/home.jsx";
import AboutPage from "../pages/about.jsx";
import FormPage from "../pages/form.jsx";
import DynamicRoutePage from "../pages/dynamic-route.jsx";
import RequestAndLoad from "../pages/request-and-load.jsx";
import NotFoundPage from "../pages/404.jsx";
import CollectionPage from "../pages/Collection.jsx";
import ChooseCity from "../pages/ChooseCity.jsx";

var routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about/",
    component: AboutPage,
  },
  {
    path: "/form/",
    component: FormPage,
  },
  {
    path: "/collections/",
    component: CollectionPage,
  },
  {
    path: "/city/",
    component: ChooseCity,
  },
  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
  },
  {
    path: "/request-and-load/user/:userId/",
    async: function ({ router, to, resolve }) {
      var app = router.app;
      app.preloader.show();
      var userId = to.params.userId;
      setTimeout(function () {
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            { title: "Framework7 Website", url: "http://framework7.io" },
            { title: "Framework7 Forum", url: "http://forum.framework7.io" },
          ],
        };
        app.preloader.hide();
        resolve(
          { component: RequestAndLoad },
          { props: { user: user } }
        );
      }, 1000);
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
