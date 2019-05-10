import React from 'react'
import VelaProject from './projects/VelaProject'

class Projects extends React.Component {
   render() {
      return <VelaProject text={this.props.text} />
   }
}

export default Projects
