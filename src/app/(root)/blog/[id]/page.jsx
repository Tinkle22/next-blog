"use client"
import React, { useEffect, useState } from 'react'
import { blog_data } from '../../../../../Assets/assets';
import styles from './blog.module.css'
import Image from 'next/image';
import { AdBox } from '@/components/adBox/AdBox';


const Page = ({params}) => {

    const [data,setData] = useState(null);

    const fetchBlogData = () =>{
        for(let i=0; i<blog_data.length; i++){
            if (Number(params.id) === blog_data[i].id){
                setData(blog_data[i])
                console.log(blog_data[i])
                break;
            } 
        }
    }

    useEffect(() =>{
        fetchBlogData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (data?<>
       <div className={styles.container}>
            <div className={styles.header}>
                <h1>{data.title}</h1>
                <div className={styles.subHeader}>
                    <div className={styles.author}>
                        <Image 
                            src={data. author_img}
                            width={25}
                            height={25}
                            alt='Author'
                            className={styles.image}
                        />
                        <p>{data.author}</p>
                    </div>
                    <p>{data.date}</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <Image
                        src={data.image}
                        fill
                        alt=''
                        className={styles.contentImages}
                    />
                </div>
                <div className={styles.firstSegment}>
                    {data.description}
                </div>
                <div className={styles.imageContainer}>
                    <Image 
                        src={data.image}
                        fill
                        alt='image'
                        className={styles.contentImages}
                    />
                </div>
                <AdBox/>
                <div className={styles.firstSegment}>
                    {data.description}
                </div>                
            </div>
       </div>
    </>: <></>
  )
}

export default Page