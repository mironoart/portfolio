import React from 'react'
import $ from 'jquery'

class Parallax {
   constructor(object) {
      this.object = object
      this.offset = this.object.offset().top
      this.object.css(
         'background-position-y',
         `-${this.offset + $(window).scrollTop() / 4}px`
      )
   }
   parallax() {
      this.object.css(
         'background-position-y',
         `-${this.offset + $(window).scrollTop() / 4}px`
      )
   }
}

class ParallaxEffect extends React.Component {
   componentDidMount() {
      var el = $(this.el)

      var parallax = new Parallax(el)
      $(window).scroll(function() {
         parallax.parallax()
      })
   }
   render() {
      const { image, children } = this.props
      return (
         <div
            className="parallax"
            ref={el => (this.el = el)}
            style={{
               backgroundImage: `url(../${image})`
            }}
         >
            {children}
         </div>
      )
   }
}

export default ParallaxEffect
