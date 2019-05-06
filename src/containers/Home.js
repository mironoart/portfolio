import React from 'react'
import { connect } from 'react-redux'

import { changeLangToRu, changeLangToEn } from '../actions/HomeActions.js'
import {
   MenuButton,
   LangButtons,
   ProjectsButton
} from '../components/NavigationComponents.jsx'
import { MainComponent } from '../components/MainComponent.jsx'

class Home extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         menuIconClass: 'dots',
         isNavShownClass: 'navHidden'
      }
   }
   toggleMenuIconClass = () => {
      this.state.menuIconClass === 'dots'
         ? this.setState({ menuIconClass: 'dots on' })
         : this.setState({ menuIconClass: 'dots' })

      this.state.isNavShownClass === 'navHidden'
         ? this.setState({ isNavShownClass: 'navShown' })
         : this.setState({ isNavShownClass: 'navHidden' })
   }

   render() {
      var text = this.props.text
      var state = this.state

      return (
         <div className="homeContainer">
            <div className="main_navigation_panel">
               <MenuButton
                  isNavShownClass={state.isNavShownClass}
                  menuIconClass={state.menuIconClass}
                  toggleMenuIconClass={this.toggleMenuIconClass}
               />
               <LangButtons text={text} props={this.props} />
               <ProjectsButton text={text} />
            </div>
            <MainComponent text={text} />
         </div>
      )
   }
}

const mapStateToTabsProps = state => {
   const text = state.changeLanguage
   const styles = state.changeLanguage.styles
   return {
      text,
      styles
   }
}

const mapDispatchToLangProps = dispatch => ({
   changeLangToEn: () => dispatch(changeLangToEn()),
   changeLangToRu: () => dispatch(changeLangToRu())
})

const homeConnected = connect(
   mapStateToTabsProps,
   mapDispatchToLangProps
)(Home)

export default homeConnected
