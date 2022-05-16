import { Link } from 'react-router-dom';
import './LinkButton.scss';


// to use a dinamic link button we need to pass as a props o to (=path) and the text
function LinkButton({ to, text }: any) {
    return (
        <Link className="LinkButton" to={to}>{text}</Link>
    )
}

export default LinkButton;