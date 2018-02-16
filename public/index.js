/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Porg mugs are awesome!",
      reviews: [
              { 
                text: "Vue.js is the best thing since sliced bread!",
                rating: 5,
                reviewer: "Burton Wax"
              },
              { 
                text: "I love Vue.js, especially when I'm programming!",
                rating: 4,
                reviewer: "Emily Post"
              },
              { 
                text: "Vue.js is waaaaay better than Chinese Checkers.",
                rating: 2,
                reviewer: "Angela Pearson"
              }
            ],
      newReview: {text: "", rating: "", reviewer: ""}
    };
  },
  created: function() {},
  methods: {
    addReview: function() {
      this.reviews.push(this.newReview);
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});