import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../Layouts/Header.js'
import HomeLayoutFirst from '../Layouts/HomeLayoutFirst.js'
import HomePosts from '../Layouts/HomePosts.js';
import { useState } from 'react';

export default function Home() {
  const [data, setdData] = useState([{"title":"first", "desc":"test"},{"title":"Second", "desc":"test desc"} ])

  const handleOnPostDone = (data1) =>{
    var newData = data;
    newData.push(data1)
    // console.log(data1)
    // data.push(data1)
    // console.log(data)
    setdData(newData)
  }

  return (
    <>
   <Header/>

   <HomeLayoutFirst onPostDone={handleOnPostDone} />
   <HomePosts posts={data}  />
    </>
  );
}
