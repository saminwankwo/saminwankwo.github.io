import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import NoPage from './pages/NoPage'



function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route index element = {<Home />}/>
			<Route path = "/portfolio" element = {<Portfolio />}/>
			<Route path = "/blog" element = {<Blog />}/>
			<Route path = "/contact" element = {<Contact />}/>
			<Route path = "/resume" element = {<Resume />}/>
			<Route path='*' element ={<NoPage/>}/>
		</Routes>
    </BrowserRouter>
  );
}

export default App;
