app.component('review-form', {
  template: //    pt8438p
  // 2-way binding between the template and the data(Ln.25) (v-model)Ln: 9,12,15
  //added listened (Ln.6) @submit with (.prevent) modifier which prevent the browser to refresh
  /*html*/
  `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">
    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
    <label for="recommend">Would you recommend the product?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select>
    <input class="button" type="submit" value="Submit">
  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommend: ''
    }
  },
  methods: {
    onSubmit() {
      // simple validation (below)------
      if (this.name === '' || this.review === '' || this.rating === null || this.recommend === '') {
        alert('Review is incomplete. Please fill out every field!')
        return
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend
      }
      this.$emit('review-submitted', productReview)
      this.name = ''
      this.review= ''
      this.rating = null
      this.recommend = ''
    }
  }
})
