'use client'

import Memes from "@/components/memes/Memes";
import Loader from "@/components/Loader/Loader";
import MemeType from "@/utils/MemeType";
import { fetchFromAPI } from "@/utils/fetchFromAPI";
import { useEffect, useState } from "react";

function HomePage(){

    const [memes, setMemes] = useState<MemeType[]>([]);
    const [after, setAfter] = useState<string | null>(null);
    const [initialDataLoaded, setInitialDataLoaded] = useState(false);

    async function getInitialData(){
        try {
            const data = await fetchFromAPI(`after=${after}`);
            setMemes(data.data.children);
            setAfter(data.data.after);
            setInitialDataLoaded(true);
        } catch (error) {
            console.error('Error fetching memes:', error);
        }
    }    

    async function getData(){
        try {
          const response = await fetchFromAPI(`after=${after}`);
          setMemes((prevMemes)=>[...prevMemes, ...response.data.children]);
          setAfter(response.data.after);
        } catch (error) {
          console.error('Error fetching more memes:', error);
        }
    }
    
    const handleScroll = () => {
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if (window.innerHeight + scrollTop >= document.documentElement.offsetHeight - 200 && initialDataLoaded) {
            getData();
        }
    };
    
    useEffect(() => {
        getInitialData();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [after, initialDataLoaded]);

    if (!initialDataLoaded) return (<Loader />);
    return (
        <div className="homePage">
            <Memes memes={memes}/>
        </div>
    );
}

export default HomePage;
