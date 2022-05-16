import { Link } from 'react-router-dom';
import './BackButton.scss';


// to use a dinamic link button we need to pass as a props o to (=path) and the text
function BackButton({ to, text }: any) {
    return (
        <Link className="BackButton" to={to}>{text}</Link>
    )
}

export default BackButton;