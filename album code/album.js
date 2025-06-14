new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/img1.jpg",
          img2: "images/img2.jpg",
          img3: "images/img3.jpg",
          title: "ILOVEYOU",
          isOpen: false,
        },
        {
          img1: "images/img4.jpg",
          img2: "images/img5.jpg",
          img3: "images/img6.jpg",
          title: "IMISSYOU",
          isOpen: false,
        },
        {
          img1: "images/img7.jpg",
          img2: "images/img8.jpg",
          img3: "images/img9.jpg",
          title: "LOVES KO",
          isOpen: false,
        },
        {
          img1: "images/img10.jpg",
          img2: "images/img11.jpg",
          img3: "images/img12.jpg",
          title: "MY BABY",
          isOpen: false,
        },
        {
          img1: "images/img13.jpg",
          img2: "images/img14.jpg",
          img3: "images/img15.jpg",
          title: "MY ONLY ONE",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
