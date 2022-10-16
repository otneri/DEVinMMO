import {Paragraphstld} from './Paragraph.sltd'
import PropTypes from 'prop-types'

export const Paragraph = ({ children}) => {
    return <Paragraphstld>{children}</Paragraphstld>;
  };
  
Paragraph.propTypes = {
    children: PropTypes.node
}