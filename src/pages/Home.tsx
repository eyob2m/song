import { Button } from '@/components/ui/button.tsx'
import React from 'react'

type Song = {
    title: string,
    artist: string,
    album: string,
    year: string,
}

const songs:  Song[] = [
    {
        title: "Title 1",
        artist: "Artist 1",
        album: "Album 1",
        year: "2020",
    },
      {
        title: "Title 1",
        artist: "Artist 1",
        album: "Album 1",
        year: "2020",
    },
      {
        title: "Title 1",
        artist: "Artist 1",
        album: "Album 1",
        year: "2020",
    }
]
const Home = () => {
  return (
    <div className='w-full flex justify-center'>
        <section className='w-[80%] py-10 px-10'>
           <div className='flex flex-col justify-between items-center'>
             {
                songs.map((song,index)=>{
                    return (
                        <div className='flex border-white border-2 px-10 py-2 gap-20 items-end'>
                            <h3>{index+1}.</h3>
                          <div className='flex flex-col'>
                              <h1>{song.title}</h1>
                            <h2>{song.artist}</h2>
                          </div>
                            <h3>{song.album}</h3>
                            <h4>{song.year}</h4>
                            <Button className='bg-red-500 text-sm px-2 !py-1'>
                                Delete
                            </Button>
                              <Button className='bg-blue-500 text-sm px-2 !py-1'>
                                Edit
                            </Button>
                        </div>
                    )
                })
            }
           </div>
        </section>
        <div>
              <Button className='absolute bottom-20 right-20 rounded-4xl bg-cyan-500 text-2xl h-18 w-18'>
                                Add
                            </Button>
        </div>
    </div>
  )
}

export default Home