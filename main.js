const app = Vue.createApp({
    data() { //    pt8438p
        return {
            cart: [],
            premium: true,
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
                removeFromCart(id) {
            const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                } // trying to disable the button once the cart's index = 0 
                if (this.cart[index] < 1 ) {
                    disabled
                }
        },
    }
  })
  