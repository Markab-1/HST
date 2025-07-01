import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { getNews } from 'lib/getNews';
import Modal from 'components/Modal/Modal';

import s from './NewsList.module.css';

function NewsList() {
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })

  var  Container = s.containerMobile;
  var  Card = s.cardMobile;
  var Content = s.contentMobile;
  var MainImg = s.mainImgMobile;

  if(isTablet) {
    Container = s.containerTablet;
    Card = s.cardTablet;
    Content = s.contentTablet;
    MainImg = s.mainImgTablet;
  }

  if(isDesktop) {
    Container = s.container;
    Card = s.card;
    Content = s.content;
    MainImg = s.mainImg;
  }

  const [news, setNews] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState({});

  const closeModal = () => {
   setIsModalOpen(false);
  }

  const openModal = (newsItem) => {
   setIsModalOpen(true);
   setSelectedNews(newsItem);
  }

  function dateFormat(date="2025-01-01") {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
    const dateArray = date.split("-");
    var numEnd = "th";
    switch ( parseInt(dateArray[2])) {
      case 1 : case 21 : case 31: numEnd = "st" ; break;
      case 2 : case 22 :          numEnd = "nd" ; break;
      case 3 : case 23 :          numEnd = "rd" ; break;
      default:                    numEnd = "th";
    }
    return(
      <div>
        {months[parseInt(dateArray[1])]} {parseInt(dateArray[2]).toString()}<sup>{numEnd}</sup>,  {dateArray[0]}
      </div>
    )
  }

  useEffect(() => {
    getNews().then(setNews)
  }, [])

  return (
    <ul className={Container}>
      {news.map((item) => (
        <li key={item._id} className={Card}>
          <div className={Content}>
          <h2 className={s.title}>{item.title}</h2>
          {item.smallImage?.asset?.url && (
            <img src={item.smallImage.asset.url} alt={item.title} className={s.img} />
          )}
            {item.body}
            </div>
              <button className={s.btn} onClick={()=>openModal(item)}> Show more</button>
            <div className={s.date}>{dateFormat(item.publishDate)}</div>

                <Modal isOpen={isModalOpen} modalClose={closeModal} >
                 
                <div className={s.modalContent}>
                   <div className={s.modalTitle}>{selectedNews.title}</div> 
                  {selectedNews.mainImage?.asset?.url && (
                 <img src={selectedNews.mainImage.asset.url} alt={selectedNews.title} className={MainImg} />
               )} 
               <div className={s.modalText}>{selectedNews.body} </div>
               <div className={s.modalDate}>{dateFormat(selectedNews.publishDate)}</div>
               </div>
              </Modal>
              
        </li>
      ))}
    </ul>
  )
}
 
export default NewsList;