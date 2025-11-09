import { Header } from './Homepage/Header.jsx';
import HomePageBody from './Homepage/HomePageBody.jsx'

export default function Homepage(props) {
    return (
        <div className="homepage">
            <Header />
            <HomePageBody />
        </div>
    )
}

