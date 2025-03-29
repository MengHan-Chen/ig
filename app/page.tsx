import Image from 'next/image';
import { PageContainer } from './components/PageContainer';
import { Header } from './components/Header';
import { IGPostList } from './Index/IGPostList'
import { IGStories } from './Index/IGStories'
import { IGUser } from './components/IGUser'
import { IGProfile } from './Index/IGProfile';
import Link from 'next/link';



export default function Home() {
  return (
    <>
    
      <Header />
      <PageContainer>
        <div className='flex w-full overflow-hidden'>
          <div className='w-full'>
            <IGStories/>
            <IGPostList/>
          </div>

          <div  className="p-[20px] w-full max-w-[400px] ml-[20px] hidden lg:block shadow-lg h-fit">
            <IGProfile/>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
