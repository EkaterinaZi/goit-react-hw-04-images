import {useState, useEffect} from "react";
import Searchbar from 'components/Searchbar/Searchbar'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import {AppComponent} from 'components/App.styled'
import Loader from 'components/Loader/Loader'
import fetchApi from 'components/Utils/Fetch';
import Button from 'components/Button/Button'
import Modal from "components/Modal/Modal"

function App () {
 const [ input, setInput] = useState('')
 const [ gallery, setGallery] = useState([])  
 const [ page, setPage] = useState(1)  
 const [ loading, setLoading] = useState(false)    
 const [ error, setError] = useState(null)    
 const [ urlLarge, setUrlLarge] = useState('')      
 const [ tag, setTag] = useState('')        
 const [ showModal, setShowModal] = useState(false) 
 
// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
if(!input){
  return
// eslint-disable-next-line react-hooks/exhaustive-deps
} load(input, page)},[input, page]);


function load(){
    setLoading(true)
      fetchApi(input, page)
      .then(({data}) => {
        setGallery(() => 
          {if(page === 1){
              return [ ...data.hits]
          }
          else {
              return [ ...gallery, ...data.hits]
          }
           })})
      .catch(error => {setError(error)})
      .finally(() => setLoading(false));
  }
  
  const loadMore = () => {
      setPage(prevState => prevState + 1)
  }    
const handleFormSubmit = (input) => {
 setInput(input);
 setPage(1);
}

const openModal = (largeImageURL, tags) => {
  setShowModal(true)
  setUrlLarge(largeImageURL)
  setTag(tags)
}
const closeModal = () => {
  setShowModal(false)
  setUrlLarge('')
  setTag('')  
}

  const imageGalleryLength = (gallery.length / 12 /page)
  const isImageGallery = Boolean(gallery.length)
  
  return (
    <AppComponent>
     <Searchbar onSubmit={handleFormSubmit}></Searchbar>
     {loading && <Loader/>}
     {error && <p>Try again!</p>}
     {isImageGallery && <ImageGallery gallery={gallery} openModal={openModal}></ImageGallery>}
     {imageGalleryLength === 1 && <Button onClick={loadMore}></Button>}
     {showModal && <Modal onClose={closeModal} urlLarge={urlLarge} tag={tag}/>}
    </AppComponent>
  )}


export default App