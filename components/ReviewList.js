app.component('review-list', {
  props: { //   pt8438p
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this product {{ review.rating }} stars!
        Does {{ review.name }} recommend this: {{ review.recommend }}
        <br/>
        "{{ review.review }}" 
      </li>
    </ul>
  </div>
`
})
