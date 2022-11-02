import {useEffect} from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalBlock } from './Modal.styled'
import { ImageLarge } from "components/ImageGallery/ImageGallery.styled";
const modalRoot = document.querySelector('#modal-root')

function Modal ({onClose, urlLarge, tag}){

useEffect(() => {
    window.addEventListener('keydown', closeModal)
    return () => window.removeEventListener('keydown', closeModal)
  })

const closeModal = e => {
  if(e.currentTarget === e.target || e.code === 'Escape'){
    onClose();
  }
}

  return(
    createPortal(
<Overlay onClick={closeModal}>
  <ModalBlock onClick={onClose}>
  <ImageLarge src={urlLarge} alt={tag}/>
  </ModalBlock>
</Overlay>, modalRoot))}


export default Modal;