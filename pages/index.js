import { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBlock from '../components/SearchBlock';
import NewArticleBlog from '../components/NewArticleBlog';
import TopSection from '../components/TopSection';
import InterestingSection from '../components/InterestingSection';
import Footer from '../components/Footer'

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="max-w-6xl mx-auto p-4">
            <Header/>
            <main className='pt-[64px]'>
              <SearchBlock searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <NewArticleBlog searchTerm={searchTerm}/>
              <TopSection searchTerm={searchTerm} />
              <InterestingSection searchTerm={searchTerm} />
              <Footer/>
            </main>
        </div>
    )
}
