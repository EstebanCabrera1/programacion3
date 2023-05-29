import grid from './grid.css'
import Header from '../header/Header'
import Sidebar from '../side_bar/Sidebar'
import Content from '../content/content'
import Footer from '../footer/Footer'
export default function GridL() {


    return (
        <div className="content bordes">
            <div className="header bordes">
                <Header />
            </div>

            <div className="contenido bordes">
                <Content/>
            </div>

            <div className="side_bar bordes">
                <Sidebar/>
            </div>


            <div className="footer bordes">
                <Footer/>
            </div>

        </div>
    )
}