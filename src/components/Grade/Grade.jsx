import {GradeStld} from './Grade.styles'
import Proptypes from "prop-types";

export const Grade = ({children}) => {
    return (
        <GradeStld>
            {children}
        </GradeStld>
    )
}


Grade.propTypes = {
    children: Proptypes.node,
};