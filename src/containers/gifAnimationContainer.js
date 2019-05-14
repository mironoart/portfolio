import React, { Suspense } from 'react'

export default class CalendarComponent extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         i: 0
      }
   }
   componentDidMount() {
      setInterval(() => {
         if (this.state.i === 3) this.setState({ i: 0 })
         this.setState({ i: this.state.i + 1 })
      }, 10000)
   }

   render() {
      console.log(this.state.i)
      const Lazy1 = React.lazy(async () => {
         await new Promise(resolve => setTimeout(resolve, 0))
         return import(`./gifs/image${this.state.i}.js`)
      })
      return (
         <div className="testtest">
            <Suspense fallback={null}>
               <Lazy1 />
            </Suspense>
         </div>
      )
   }
}

/* var images = new Array(
  "images/website6.jpg",
  "images/website7.jpg",
  "images/sunset.jpg"
);
 */

/* 
 function delay(gifNumber) {
   import(`./image${gifNumber}.js`)
   setTimeout(function() {
      delay(gifNumber + 1)
   }, 5000)
}

const Calendar = React.lazy(() => {
   return new Promise(resolve => setTimeout(resolve, 5000)).then(() =>
      setTimeout(function() {
         delay(0)
      }, 5000)
   )
})
 */

/* 
function* delay() {
   yield 1
   yield new Promise(resolve => setTimeout(resolve, 2000)).then(() =>
      import(`./image${0}.js`)
   )

   yield import(`./image${1}.js`)
}

let generator = delay()
for (let value of generator) {
   console.log(value) // 1, затем 2
}
 */
