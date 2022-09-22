import React from 'react'
import classNames from 'classnames/bind' 
import styles from './HomePage.module.scss'
import Navbar from '../../components/Navbar'
import Slider from '../../components/slider/Slider'
import Home from '../../components/Home'
import CardList from '../../components/CardList'
import BannerItem from '../../components/Banner/BannerItem'
import { Banner, Icon3 } from '../../assets/img'
import BannerList from '../../components/Banner'
import Footer from '../../components/Footer/Footer'

const cx = classNames.bind(styles)

function HomePage() {
  return (
    <div className={cx('home')}>
        <Navbar />
        <Slider />
        <Home />
        <CardList />
        <BannerList />
        <Footer/>
    </div>
  )
}

export default HomePage