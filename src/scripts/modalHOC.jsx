import React from 'react';
import ReactDOM from 'react-dom';
class ModalWindow extends React.Component {
  render() {
    return ReactDOM.createPortal(this.props.children, this.props.domNode)
  }
}

export default function modalHOC(WrappedComponent) {
  return (props) => (
    <ModalWindow domNode={document.querySelector('#modal')}>
      <WrappedComponent {...props} />
    </ModalWindow>
  )
}