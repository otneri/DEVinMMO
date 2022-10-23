import {GradeStld, GradeJogosStld} from './Grade.styles'
import Proptypes from "prop-types";

export const Grade = ({children}) => {
    return (
        <GradeStld>
            {children}
        </GradeStld>
    )
}

export const GradeJogos = ({children}) => {
    return (
        <GradeJogosStld>
            {children}
        </GradeJogosStld>
    )
}


Grade.propTypes = {
    children: Proptypes.node,
};

GradeJogos.propTypes = {
    children: Proptypes.node,
};