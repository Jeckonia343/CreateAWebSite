import appStyle from './App.module.css'
import AwardsContainer from './components/AwardsContainer'
import MetricsContainer from './components/MetricsContainer'
import Logo from './components/Logo'

function App() {
  return (
    <div className={appStyle.section_app_container}>
      <Logo />
      <MetricsContainer />
      <AwardsContainer />
    </div>
  )
}

export default App
