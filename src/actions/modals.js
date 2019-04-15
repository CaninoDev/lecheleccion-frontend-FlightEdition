import { SHOW_MODAL, HIDE_MODAL } from 'modals'
export const showModal = ({modalProps, modalType}) => {
  return {
    type: SHOW_MODAL,
    modalProps,
    modalType
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
}
